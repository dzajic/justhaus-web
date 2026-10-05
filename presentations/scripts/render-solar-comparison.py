"""Render slide-ready solar charts from the saved PVGIS model results."""

from pathlib import Path
import json

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D
from matplotlib.ticker import MultipleLocator

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "presentations/data/science-on-screen/solar-model.json"
OUT = ROOT / "presentations/images/science on the screen"

BG = "#111111"
TEXT = "#f1eee7"
MUTED = "#aaaaaa"
ROOF = "#d66a3a"
WALLS = "#d8b38a"


def format_axis(ax):
    ax.set_facecolor(BG)
    ax.tick_params(colors=TEXT, labelsize=15, length=0, pad=9)
    ax.grid(axis="y", color="#333333", linewidth=0.7)
    ax.set_axisbelow(True)
    ax.spines[["top", "right", "left"]].set_visible(False)
    ax.spines["bottom"].set_color("#555555")
    ax.yaxis.label.set_color(MUTED)
    ax.xaxis.label.set_color(MUTED)


def monthly(ax, model):
    x = list(range(1, 13))
    for name, color in [("roof", ROOF), ("walls", WALLS)]:
        y = [v / 1000 for v in model["monthly_kwh"][name]]
        ax.plot(x, y, color=color, lw=3.2, marker="o", markersize=4)
    ax.set_title("Across the year", loc="left", color=TEXT, fontsize=22, pad=20)
    ax.set_ylabel("Electricity (MWh / month)", fontsize=15, labelpad=14)
    ax.set_xlim(0.8, 12.2)
    ax.set_ylim(0, 2)
    ax.set_xticks([1, 3, 5, 7, 9, 11])
    ax.set_xticklabels(["Jan", "Mar", "May", "Jul", "Sep", "Nov"])
    ax.yaxis.set_major_locator(MultipleLocator(0.5))
    format_axis(ax)


def daily(ax, model):
    x = list(range(24))
    for name, color in [("roof", ROOF), ("walls", WALLS)]:
        ax.plot(x, model["june_average_kw"][name], color=color, lw=3.2)
    ax.set_title("Across a summer day", loc="left", color=TEXT, fontsize=22, pad=20)
    ax.set_ylabel("Power (kW)", fontsize=15, labelpad=14)
    ax.set_xlim(4, 21)
    ax.set_ylim(0, 8)
    ax.set_xticks([6, 9, 12, 15, 18])
    ax.set_xticklabels(["6 am", "9 am", "Noon", "3 pm", "6 pm"])
    ax.yaxis.set_major_locator(MultipleLocator(2))
    ax.set_xlabel("June 2015 average · EDT", fontsize=13, labelpad=12)
    format_axis(ax)


def legend(fig, model, size=15):
    values = model["annual_kwh"]
    fig.legend(
        [Line2D([0], [0], color=ROOF, lw=4), Line2D([0], [0], color=WALLS, lw=4)],
        [f"Roof · {values['roof'] / 1000:.1f} MWh/year",
         f"Walls · {values['walls'] / 1000:.1f} MWh/year"],
        loc="upper center", bbox_to_anchor=(0.51, 0.985), ncol=2,
        frameon=False, labelcolor=TEXT, fontsize=size,
        handlelength=2, columnspacing=2.5,
    )


def render(model):
    OUT.mkdir(parents=True, exist_ok=True)
    plt.rcParams.update({"font.family": "DejaVu Sans", "svg.fonttype": "none"})
    fig, axes = plt.subplots(1, 2, figsize=(14, 6), facecolor=BG)
    fig.subplots_adjust(left=0.08, right=0.98, bottom=0.23, top=0.77, wspace=0.34)
    monthly(axes[0], model)
    daily(axes[1], model)
    legend(fig, model)
    fig.text(0.5, 0.06, "MODELED · 45°N reference · Snow and site shading excluded",
             ha="center", color=MUTED, fontsize=13)
    for ext in ["png", "svg"]:
        path = OUT / f"solar-comparison.{ext}"
        fig.savefig(path, dpi=180, facecolor=BG)
        if ext == "svg":
            path.write_text("\n".join(line.rstrip() for line in path.read_text().splitlines()) + "\n")
    plt.close(fig)

    # Standalone charts are easier to read when reviewing each idea separately.
    for name, function in [("solar-seasonal", monthly), ("solar-daily", daily)]:
        fig, ax = plt.subplots(figsize=(10, 6), facecolor=BG)
        fig.subplots_adjust(left=0.13, right=0.96, bottom=0.23, top=0.77)
        function(ax, model)
        legend(fig, model, size=16)
        fig.text(0.5, 0.045, "MODELED · PVGIS 5.2 · Snow and site shading excluded",
                 ha="center", color=MUTED, fontsize=13)
        fig.savefig(OUT / f"{name}.png", dpi=180, facecolor=BG)
        plt.close(fig)


if __name__ == "__main__":
    render(json.loads(DATA.read_text()))
