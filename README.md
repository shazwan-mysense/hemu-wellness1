# Hemu Wellness — homepage mockup 1

A static homepage concept for **Hemu Wellness Centre**, Solaris Dutamas, Kuala Lumpur.
Layout follows the MOVA studio reference supplied by the client: full-bleed hero with a
floating inset card, cream editorial body, oversized wordmark with a bronze ring, and a
horizontal treatment rail.

No build step. Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
```

## Files

| File | What's in it |
| --- | --- |
| `index.html` | All page content — copy lives here, not in a config file |
| `styles.css` | Whole design system. Palette + `--grade` photo filter at the top |
| `script.js` | Pinned header, mobile drawer, scroll reveals |
| `images/` | 11 photographs, warm-graded in CSS to read as one shoot |

## Type and colour

- **Onest** — headings and body
- **Instrument Serif** italic — the accent words (`<em>` inside `.display`)
- **Noto Serif SC** — all Chinese
- Cream `#F5F1EA` · espresso `#3D2C21` · panel `#E8E0D3` · bronze ring is a CSS
  `conic-gradient` torus, no image asset

Every photo runs through one `--grade` filter so the stock set looks like a single shoot.
Swap that one variable to re-grade the whole page.

## ⚠️ Everything factual on this page is a placeholder

The client had no content to give us and the clinic is still being renovated, so all of
the following is **invented and must be confirmed before this goes anywhere near a
browser the public can reach**:

- **The name reading.** "Hemu" is pinyin *hémù*. The page uses **和睦** (harmony/concord)
  and the About copy leans on "Hemu means harmony". It could equally be **禾木**
  (grain + wood). **Ask the client — this changes the brand story and the art direction.**
- Address, opening hours, email (`hello@hemuwellness.com`), WhatsApp and WeChat links
  are all dummies. Every CTA currently points at `#visit`.
- "A first visit takes an hour", "walk-ins welcome", "seen by both a TCM physician and a
  physiotherapist", "Taiwan-sourced, batch-tested for heavy metals and pesticide residue" —
  all plausible, none confirmed.
- No practitioner names, credentials, or T&CM Council registration numbers yet.
- No testimonials. Deliberate: the clinic has zero reviews, so the reference's
  testimonial-heavy pattern would have been an empty shell. Trust is carried instead by
  credentials, sourcing and process transparency. Revisit once real reviews exist.

## ⚠️ Advertising law — read before editing the copy

Under Malaysia's **Medicines (Advertisement and Sale) Act 1956**, *infertility* is a
scheduled restricted condition; advertising a treatment claim for it needs Medicine
Advertisements Board approval. Practitioners must also be registered under the
**T&CM Act 2016 (Act 775)**.

The women's health card is therefore worded as *support* ("Support for menstrual pain,
irregular cycles, uterine circulation and the months after birth") and the brief's
"IVF/IUI support, helps natural pregnancy" line was **not** used verbatim. The footer
carries a results-vary disclaimer. Please keep it that way, and route any fertility copy
past the client's own compliance check.

## Images

Stock from Unsplash and Pexels, both free for commercial use without attribution.
They are placeholders — replace with real photography of the clinic and its
practitioners once the renovation is done. Sourcing notes are in
`scratchpad/images_v2.py` in the working session; the short version:

- `hero-room`, `hero-inset`, `about-portrait`, `tx-acupuncture`, `visit-detail` — Pexels
- `about-herbs`, `tx-tuina`, `tx-cupping`, `tx-herbal`, `tx-physio`, `tx-womens` — Unsplash

## Known gaps

- Nav links are in-page anchors only; there are no other pages yet.
- No form, no booking integration — WhatsApp is assumed to be the conversion path,
  which is the norm for this market.
- English only. The Mont Kiara/Publika catchment likely wants EN + 中文; the Chinese
  type is currently decorative rather than a real language toggle.
