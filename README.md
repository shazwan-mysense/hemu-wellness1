# Hemu Wellness — homepage mockup 1

A static homepage concept for **Hemu Wellness Centre**, Solaris Dutamas, Kuala Lumpur.
Layout follows the MOVA studio reference supplied by the client: full-bleed hero with a
floating inset card, cream editorial body, oversized wordmark with a bronze ring, and a
horizontal treatment rail.

**Positioned on women's health** at the client's request — fertility support alongside
IVF and IUI, cycle and uterine care, pregnancy and postpartum, and menopause. See
"Women's health positioning" below for how the fertility copy is worded and why.

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

## Women's health positioning

The page now leads on women's health. What changed:

- **Hero** — "A quiet space for women's health at *every stage*", with a pregnancy image
  in the floating inset card and a lead paragraph naming IVF/IUI support, cycle care,
  postpartum and menopause.
- **Nav** — "Women's health" added as the first item.
- **About panel** — now opens with "Most of our work is women's health".
- **New `#womens` section** between the wordmark and the treatments rail: four stages —
  trying to conceive 备孕, cycles and uterine care 调经, pregnancy and postpartum 产后调理,
  menopause and the years around it 更年期.
- **Treatments rail** — Women's health moved to first position; a Moxibustion 艾灸 card
  added (moxa is commonly used in fertility and postpartum work).

## ⚠️ Advertising law — read before editing the copy

Under Malaysia's **Medicines (Advertisement and Sale) Act 1956**, *infertility* is a
scheduled restricted condition; advertising a **treatment claim** for it needs Medicine
Advertisements Board approval. Practitioners must also be registered under the
**T&CM Act 2016 (Act 775)**.

Leading on fertility is fine — claiming to *cure* or *achieve* pregnancy is not. Every
fertility line on this page is therefore framed as **support alongside** medical
treatment, and describes what we actually do (circulation, cycle regularity, sleep,
stress) rather than promising an outcome:

- ✅ "Support alongside IVF and IUI, or while you are trying naturally"
- ✅ "We work alongside your fertility clinic and your doctor, never instead of them"
- ❌ never "helps you get pregnant", "treats infertility", "improves IVF success rates"

The brief's original line — "IVF/IUI Support, helps natural pregnancy" — is **not** used
verbatim for this reason. The footer carries a results-vary disclaimer, and there is an
explicit on-page note that we complement rather than replace the fertility clinic.
Please keep all of this, and route any new fertility copy past the client's own
compliance check before launch.

## Images

Stock from Unsplash and Pexels, both free for commercial use without attribution.
They are placeholders — replace with real photography of the clinic and its
practitioners once the renovation is done. Sourcing notes are in
`scratchpad/images_v2.py` in the working session; the short version:

- `hero-room`, `hero-inset`, `about-portrait`, `tx-acupuncture`, `visit-detail`,
  `wh-pregnancy`, `wh-expecting`, `tx-womens`, `tx-moxa` — Pexels
- `about-herbs`, `tx-tuina`, `tx-cupping`, `tx-herbal`, `tx-physio` — Unsplash

`hero-inset.jpg` is no longer referenced (the hero card now uses `wh-expecting.jpg`);
it is kept in the folder as a spare.

## Known gaps

- Nav links are in-page anchors only; there are no other pages yet.
- No form, no booking integration — WhatsApp is assumed to be the conversion path,
  which is the norm for this market.
- English only. The Mont Kiara/Publika catchment likely wants EN + 中文; the Chinese
  type is currently decorative rather than a real language toggle.
