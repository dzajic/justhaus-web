/* Reads the Markdown in docs/ and draws it in this page.
   Those files stay the source. A new note is a Markdown file plus a link. */
(function (root) {
  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escAttr(value) {
    return esc(value).replace(/"/g, "&quot;");
  }

  function unescapeBasic(value) {
    return String(value)
      .replace(/&quot;/g, '"')
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<")
      .replace(/&amp;/g, "&");
  }

  function resolveHref(href, baseDir) {
    var raw = unescapeBasic(href).trim();
    if (/^(https?:|mailto:)/i.test(raw)) return raw;
    if (/^(javascript|data):/i.test(raw)) return null;
    if (raw.charAt(0) === "#") return null;
    raw = raw.split("#")[0].split("?")[0];
    if (!raw) return null;

    var up = 0;
    var stack = baseDir ? baseDir.split("/") : [];
    if (raw.charAt(0) === "/") {
      stack = [];
      up = 1;
      raw = raw.replace(/^\/+/, "");
    }

    var parts = raw.split("/");
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      if (!part || part === ".") continue;
      if (part === "..") {
        if (stack.length) stack.pop();
        else up += 1;
        continue;
      }
      if (!/^[A-Za-z0-9._-]+$/.test(part)) return null;
      stack.push(part);
    }
    if (up > 1) return null;

    var joined = stack.join("/");
    if (!joined) return up === 1 ? "../index.html" : "#";
    if (up === 1) return "../" + joined;
    if (/\.md$/i.test(joined)) {
      var note = joined.replace(/\.md$/i, "");
      if (note === "README") return "#";
      return "#" + note;
    }
    return joined;
  }

  function emphasis(value) {
    return value
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[\s(])\*([^*\n]+?)\*(?=[\s).,;:!?]|$)/g, "$1<em>$2</em>")
      .replace(/(^|[\s(])_([^_\n]+?)_(?=[\s).,;:!?]|$)/g, "$1<em>$2</em>");
  }

  function inline(text, baseDir) {
    var src = esc(text);
    var codes = [];
    src = src.replace(/`([^`]+)`/g, function (_, code) {
      codes.push("<code>" + code + "</code>");
      return "\u0001C" + (codes.length - 1) + "\u0001";
    });
    var links = [];
    src = src.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, label, href) {
      var resolved = resolveHref(href, baseDir);
      var inner = emphasis(label);
      var html = resolved
        ? '<a href="' + escAttr(resolved) + '">' + inner + "</a>"
        : inner;
      links.push(html);
      return "\u0001L" + (links.length - 1) + "\u0001";
    });
    src = src.replace(/&lt;(https?:\/\/.+?)&gt;/g, function (_, url) {
      var real = unescapeBasic(url);
      return '<a href="' + escAttr(real) + '">' + esc(real) + "</a>";
    });
    src = emphasis(src);
    src = src.replace(/\u0001L(\d+)\u0001/g, function (_, index) {
      return links[Number(index)];
    });
    src = src.replace(/\u0001C(\d+)\u0001/g, function (_, index) {
      return codes[Number(index)];
    });
    return src;
  }

  function isHeading(line) {
    return /^#{1,6}\s+\S/.test(line);
  }

  function isRow(line) {
    var trimmed = line.trim();
    return trimmed.charAt(0) === "|" && trimmed.indexOf("|", 1) !== -1;
  }

  function isSep(line) {
    return /^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|$/.test(line.trim());
  }

  function isTableStart(lines, index) {
    return isRow(lines[index]) && index + 1 < lines.length && isSep(lines[index + 1]);
  }

  function cells(line) {
    var trimmed = line.trim();
    if (trimmed.charAt(0) === "|") trimmed = trimmed.slice(1);
    if (trimmed.charAt(trimmed.length - 1) === "|") trimmed = trimmed.slice(0, -1);
    return trimmed.split("|").map(function (cell) {
      return cell.trim();
    });
  }

  function isListLine(line) {
    return /^(\s*)([-*]|\d+\.)\s+/.test(line);
  }

  function listLevel(line) {
    var spaces = line.match(/^ */)[0].length;
    return Math.floor(spaces / 2);
  }

  function parseItem(line) {
    var match = line.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
    var marker = match[2];
    var text = match[3];
    var task = marker === "-" ? text.match(/^\[([ xX])\]\s*(.*)$/) : null;
    if (task) {
      return {
        text: task[2],
        task: true,
        checked: task[1].toLowerCase() === "x",
        ordered: false
      };
    }
    return {
      text: text,
      task: false,
      checked: false,
      ordered: marker !== "-" && marker !== "*"
    };
  }

  function parseList(lines, start, level) {
    var items = [];
    var index = start;
    var kind = "ul";
    while (index < lines.length) {
      var line = lines[index];
      if (line.trim() === "") {
        var look = index + 1;
        while (look < lines.length && lines[look].trim() === "") look += 1;
        if (look < lines.length && isListLine(lines[look]) && listLevel(lines[look]) >= level) {
          index = look;
          continue;
        }
        break;
      }
      if (!isListLine(line)) break;
      var levelNow = listLevel(line);
      if (levelNow > level) {
        if (!items.length) break;
        var nested = parseList(lines, index, levelNow);
        if (nested.next === index) break;
        items[items.length - 1].children = nested.list;
        index = nested.next;
        continue;
      }
      if (levelNow < level) break;
      var item = parseItem(line);
      if (!items.length) kind = item.ordered ? "ol" : "ul";
      items.push(item);
      index += 1;
    }
    return { list: { kind: kind, items: items }, next: index };
  }

  function renderList(list, baseDir) {
    var html = "<" + list.kind + ">";
    list.items.forEach(function (item) {
      var body = inline(item.text, baseDir);
      if (item.task) {
        var state = item.checked ? "Done" : "Open";
        body =
          '<span class="box' +
          (item.checked ? " is-done" : "") +
          '" aria-hidden="true"></span><span class="sr">' +
          state +
          ". </span>" +
          body;
        html += '<li class="task">' + body;
      } else {
        html += "<li>" + body;
      }
      if (item.children) html += renderList(item.children, baseDir);
      html += "</li>";
    });
    return html + "</" + list.kind + ">";
  }

  function renderTable(lines, index, baseDir) {
    var head = cells(lines[index]);
    var cursor = index + 2;
    var rows = [];
    while (cursor < lines.length && isRow(lines[cursor]) && !isSep(lines[cursor])) {
      rows.push(cells(lines[cursor]));
      cursor += 1;
    }
    var html = '<div class="table-wrap"><table><thead><tr>';
    head.forEach(function (cell) {
      html += "<th>" + inline(cell, baseDir) + "</th>";
    });
    html += "</tr></thead><tbody>";
    rows.forEach(function (row) {
      html += "<tr>";
      for (var cell = 0; cell < head.length; cell++) {
        html += "<td>" + inline(row[cell] || "", baseDir) + "</td>";
      }
      html += "</tr>";
    });
    html += "</tbody></table></div>";
    return { html: html, next: cursor };
  }

  function joinParagraph(lines, baseDir) {
    var bits = [];
    for (var i = 0; i < lines.length; i++) {
      var broken = /[ \t]{2}$/.test(lines[i]);
      bits.push(inline(lines[i].replace(/[ \t]+$/, ""), baseDir));
      if (i < lines.length - 1) bits.push(broken ? "<br>\n" : " ");
    }
    return bits.join("");
  }

  function renderMarkdown(markdown, baseDir) {
    var lines = String(markdown).replace(/\r\n?/g, "\n").split("\n");
    var html = [];
    var index = 0;
    while (index < lines.length) {
      var line = lines[index];
      if (line.trim() === "") {
        index += 1;
        continue;
      }
      if (isHeading(line)) {
        var heading = line.match(/^(#{1,6})\s+(.+?)\s*$/);
        var level = heading[1].length;
        html.push("<h" + level + ">" + inline(heading[2], baseDir) + "</h" + level + ">");
        index += 1;
        continue;
      }
      if (isTableStart(lines, index)) {
        var table = renderTable(lines, index, baseDir);
        html.push(table.html);
        index = table.next;
        continue;
      }
      if (isListLine(line)) {
        var list = parseList(lines, index, listLevel(line));
        html.push(renderList(list.list, baseDir));
        index = list.next;
        continue;
      }
      var paragraph = [];
      while (
        index < lines.length &&
        lines[index].trim() !== "" &&
        !isHeading(lines[index]) &&
        !isTableStart(lines, index) &&
        !isListLine(lines[index])
      ) {
        paragraph.push(lines[index]);
        index += 1;
      }
      html.push("<p>" + joinParagraph(paragraph, baseDir) + "</p>");
    }
    return html.join("\n");
  }

  root.JHNotebook = {
    renderMarkdown: renderMarkdown,
    resolveHref: resolveHref
  };

  if (typeof document === "undefined") return;

  function fileFromHash() {
    var raw = location.hash.replace(/^#/, "");
    if (!raw) return "README.md";
    try {
      raw = decodeURIComponent(raw);
    } catch (error) {
      return null;
    }
    raw = raw.replace(/^\/+/, "").replace(/\/+$/, "");
    if (/\.md$/i.test(raw)) raw = raw.replace(/\.md$/i, "");
    if (!raw || raw === "README") return "README.md";
    if (!/^[A-Za-z0-9][A-Za-z0-9/_-]*$/.test(raw)) return null;
    var bits = raw.split("/");
    if (bits.indexOf("..") !== -1 || bits.indexOf(".") !== -1) return null;
    return raw + ".md";
  }

  function baseDir(file) {
    var bits = file.split("/");
    bits.pop();
    return bits.join("/");
  }

  function fail(note, kicker) {
    kicker.textContent = "Notebook";
    note.innerHTML = "<h1>Notebook</h1><p>That note is not in the notebook.</p>";
    note.removeAttribute("aria-busy");
    document.title = "Notebook — Just Haus";
  }

  function show(file) {
    var note = document.getElementById("note");
    var kicker = document.getElementById("notebook-kicker");
    if (!note || !kicker) return;
    if (!file) {
      fail(note, kicker);
      return;
    }
    note.setAttribute("aria-busy", "true");
    fetch(file, { headers: { Accept: "text/plain" } })
      .then(function (response) {
        if (!response.ok) throw new Error("missing");
        return response.text();
      })
      .then(function (markdown) {
        if (fileFromHash() !== file) return;
        var rendered = renderMarkdown(markdown, baseDir(file));
        if (file === "README.md") kicker.textContent = "Notebook";
        else kicker.innerHTML = '<a href="#">Notebook</a>';
        note.innerHTML = rendered;
        note.removeAttribute("aria-busy");
        var heading = note.querySelector("h1");
        var name = heading && heading.textContent.trim();
        document.title = (file === "README.md" || !name ? "Notebook" : name) + " — Just Haus";
        window.scrollTo(0, 0);
        if (location.hash && heading) {
          heading.setAttribute("tabindex", "-1");
          heading.focus({ preventScroll: true });
        }
      })
      .catch(function () {
        if (fileFromHash() !== file) return;
        fail(note, kicker);
      });
  }

  function load() {
    show(fileFromHash());
  }

  window.addEventListener("hashchange", load);
  load();
})(typeof globalThis !== "undefined" ? globalThis : this);
