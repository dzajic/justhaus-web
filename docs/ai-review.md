# Advisory AI pull request review

A GitHub Action reads a pull request and posts **one comment**. The comment is advice. It does not block the merge, and the job is written to finish successfully even when the review cannot run.

The comment is recognized by the hidden marker `<!-- jh-ai-review -->`. Later runs update that same comment instead of adding another.

## What it checks

Against the diff, and against these notes when they exist:

- `docs/company/overview.md`
- `docs/company/voice-and-brand.md`
- `docs/principles/design-checklist.md`

If a note is missing on the pull request branch, the script tries `main`, then continues without it.

Each run reports pass or warn for:

- mission fit
- yes-voice (possibility, rather than a shut door)
- banned words: `affordable`, `bad`, and the line `Always becoming more`
- unsupported claims and numbers
- private details (a client, or Daniel's personal information; `hello@justha.us` is the company contact)
- design-principle consistency
- brand and aesthetic

It adds a few short suggestions. Images and other binary files are left out of the diff, and a very large diff is cut down before it is sent.

The model defaults to `gpt-4o-mini`.

## Set the secret

The key stays in GitHub. It is not written into the repo, the workflow file, or the comment.

1. Create an API key in the OpenAI account you want this review to bill. A spend limit on that key is a good idea.
2. Open this repository on GitHub.
3. Go to **Settings → Secrets and variables → Actions**.
4. Open the **Secrets** tab and choose **New repository secret**.
5. Name: `OPENAI_API_KEY`
6. Value: paste the key. Save it. Do not put the key in a file, a commit, or a pull request.
7. Optional. Open the **Variables** tab and choose **New repository variable**. Name: `OPENAI_MODEL`. Value: a model id, if you want something other than `gpt-4o-mini`.

The next pull request event (`opened`, `synchronize`, `reopened`, or `ready_for_review`) runs `.github/workflows/ai-review.yml`.

A pull request from a fork does not receive repository secrets. The review skips, leaves a short note when it can, and the check still passes.

People who can push branches to this repository can change the workflow. Give that access only to people you trust with the key.
