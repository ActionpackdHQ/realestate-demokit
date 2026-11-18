#!/usr/bin/env python3
"""Build the one-page real estate agent sheet.

Same grid as the boutique kit: title, one-line subtitle, three photos,
a five-row problem table, two bold lines, a green WhatsApp bar, and a footnote.
"""

from pathlib import Path

from fpdf import FPDF
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "actionpackd-realestate-sheet.pdf"
KIT = ROOT / "public" / "kit"
FONT = Path("/usr/share/fonts/truetype/liberation")

MAROON = (122, 31, 61)
INK = (42, 26, 31)
GREEN = (37, 211, 102)
LINE = (221, 221, 221)
GRAY = (119, 119, 119)
WHITE = (255, 255, 255)

TITLE = "What our agents do for your real estate business"
WHATSAPP = (
    "https://wa.me/918190007072?text="
    "Hi%2C%20I'd%20like%20an%20AI%20agent%20for%20my%20real%20estate%20business."
)

ROWS = [
    (
        'Too many "price?" and "location?" messages',
        "Replies at once, day and night",
    ),
    (
        "Late-night enquiries from ads go cold",
        "Asks area, budget, BHK and timeline right away",
    ),
    (
        "Sending brochures one by one",
        "Shares photos, floor plans and the location pin",
    ),
    (
        "Buyers don't turn up for site visits",
        "Books the visit and reminds them the night before",
    ),
    (
        "Buyers go quiet after the first chat",
        "Follows up on enquiries that did not book a visit",
    ),
]


def rounded_photo(src: Path, dest: Path, size: int = 560, radius: int = 28) -> None:
    image = Image.open(src).convert("RGBA").resize((size, size), Image.Resampling.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=255)
    image.putalpha(mask)
    background = Image.new("RGB", (size, size), WHITE)
    background.paste(image, mask=image.getchannel("A"))
    background.save(dest, "JPEG", quality=82, optimize=True)


def main() -> None:
    tmp = Path("/tmp/realestate-sheet-photos")
    tmp.mkdir(exist_ok=True)
    photos = []
    for name in ("villa", "living", "model"):
        dest = tmp / f"{name}.jpg"
        rounded_photo(KIT / f"{name}.webp", dest)
        photos.append(dest)

    pdf = FPDF(format="A4", unit="pt")
    pdf.set_auto_page_break(auto=False)
    pdf.set_title(TITLE)
    pdf.set_author("Actionpackd")
    pdf.add_font("Lib", "", str(FONT / "LiberationSans-Regular.ttf"))
    pdf.add_font("Lib", "B", str(FONT / "LiberationSans-Bold.ttf"))
    pdf.add_page()
    pdf.set_fill_color(*WHITE)
    pdf.rect(0, 0, 595, 842, "F")

    pdf.set_xy(45.8, 46)
    pdf.set_font("Lib", "B", 19.5)
    pdf.set_text_color(*MAROON)
    pdf.cell(500, 24, TITLE)

    pdf.set_xy(45.8, 80)
    pdf.set_font("Lib", "", 12)
    pdf.set_text_color(*INK)
    pdf.cell(
        500,
        16,
        "Actionpackd, Chennai. Agents that reply to your buyers on WhatsApp, 24 hours.",
    )

    image_y = 106.5
    image_size = 156
    for index, photo in enumerate(photos):
        pdf.image(photo, x=45.75 + index * 166.5, y=image_y, w=image_size, h=image_size)

    header_y = 271.5
    header_h = 25.5
    pdf.set_fill_color(*MAROON)
    pdf.rect(45.8, header_y, 261, header_h, "F")
    pdf.rect(306.8, header_y, 243, header_h, "F")
    pdf.set_font("Lib", "B", 12)
    pdf.set_text_color(*WHITE)
    pdf.set_xy(51.8, 276.2)
    pdf.cell(240, 16, "Your problem")
    pdf.set_xy(312.4, 276.2)
    pdf.cell(220, 16, "What the agent does")

    row_top = 297.0
    row_h = 24.75
    pdf.set_font("Lib", "", 10.5)
    pdf.set_text_color(*INK)
    for index, (problem, action) in enumerate(ROWS):
        y = row_top + index * row_h
        pdf.set_xy(51.8, y + 6.2)
        pdf.cell(248, 13, problem)
        pdf.set_xy(312.4, y + 6.2)
        pdf.cell(230, 13, action)
        line_y = y + row_h
        pdf.set_fill_color(*LINE)
        pdf.rect(45.8, line_y - 0.8, 261, 0.8, "F")
        pdf.rect(306.8, line_y - 0.8, 243, 0.8, "F")

    pdf.set_xy(45.8, 432)
    pdf.set_font("Lib", "B", 12)
    pdf.set_text_color(*INK)
    pdf.cell(500, 15, "You stay in control. You see every chat. You can step in any time.")
    pdf.set_xy(45.8, 447.4)
    pdf.cell(500, 15, "Setup is simple. We set it up with your project details.")

    bar_y = 471.8
    bar_h = 49.5
    pdf.set_fill_color(*GREEN)
    pdf.rect(45.8, bar_y, 504, bar_h, "F", round_corners=True, corner_radius=10)
    pdf.set_font("Lib", "B", 13.5)
    pdf.set_text_color(*WHITE)
    pdf.set_xy(45.8, bar_y + 8)
    pdf.cell(504, 16, "Try it yourself. Message us on WhatsApp to get it: +91 81900 07072", align="C")
    pdf.set_xy(45.8, bar_y + 26)
    pdf.cell(504, 16, "(wa.me/918190007072)", align="C")
    pdf.link(45.8, bar_y, 504, bar_h, WHATSAPP)

    pdf.set_xy(45.8, 528)
    pdf.set_font("Lib", "", 8.2)
    pdf.set_text_color(*GRAY)
    pdf.cell(500, 12, 'Photos are samples from "Crestora", a demo project.')

    if pdf.page_no() != 1:
        raise SystemExit(f"Expected 1 page, got {pdf.page_no()}")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
