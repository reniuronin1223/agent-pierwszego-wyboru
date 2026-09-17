# Agent Pierwszego Wyboru — Design System

A brand and UI system for **Agent Pierwszego Wyboru**, a personal-brand residential real-estate agent (Polish-language, Białystok / Podlaskie region). The system is built for exactly what the brand does: long-form, direct-response **sales pages and social proof** that convince an owner to hand over the sale of their apartment or house — not a product dashboard.

## Sources given to me

| Source | What it is | Notes |
| --- | --- | --- |
| `uploads/pobrane (42).png` | Full-page screenshot, 1920×8192, of a Polish direct-response one-page sales site (branded "OGARNIAM MARKETING") | The **only** source supplied. Archived as `scraps/reference-landing.png` with section crops in `scraps/`. |
| Company description in the brief | "Agent Pierwszego Wyboru" | No codebase, no Figma file, no logo file, no font files, no live URL were provided. |

**Important caveat:** the screenshot and the brand name belong to two different entities. I treated the screenshot as the **visual and structural reference** (layout, colour, type, motifs, copy rhythm) and the brief's company name as **the brand this system is for**. All copy in components and the UI kit has been rewritten for real-estate sales; no third-party logo or wordmark was reproduced.

**No logo exists in the sources.** Nothing was drawn or reconstructed. Wherever a mark would go, the brand name is set in the display face, uppercase, over up to three lines (see `guidelines/brand-wordmark.card.html`). Supply an SVG/PNG logo and it drops into `assets/`.

---

## Index

| Path | Contents |
| --- | --- |
| `styles.css` | The one file consumers link — `@import`s every token file |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `motion.css` |
| `guidelines/` | 22 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `components/core/` | Button, IconChip, EyebrowLabel, SectionHeading, StarRating |
| `components/content/` | Card, FeatureCard, QuoteCard, StatTile, ArrowList, CriteriaPanel, ProcessStep, ReelCard, ClaimBanner |
| `components/navigation/` | NavBar, LogoTab |
| `ui_kits/website/` | Full recreation of the one-page sales site (see its own README) |
| `assets/` | Photography, black line illustrations, line icons, reel thumbnails |
| `SKILL.md` | Agent-Skills entry point |
| `scraps/` | The original screenshot + section crops (reference only, not shipped design) |

### Components
Core: **Button**, **IconChip**, **EyebrowLabel**, **SectionHeading**, **StarRating**.
Content: **Card**, **FeatureCard**, **QuoteCard**, **StatTile**, **ArrowList**, **CriteriaPanel**, **ProcessStep**, **ReelCard**, **ClaimBanner**.
Navigation: **NavBar**, **LogoTab**.

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage).

#### Intentional additions
The source is a screenshot, not a component library, so the inventory above was derived **only** from elements visible in it — every component maps to something on the page. Two notes:
- **Card** — a generic surface extracted from the three distinct rounded panels on the page, so panels stay consistent.
- **IconChip** — a wrapper for the yellow icon circles; needed because the icons themselves are flat PNG crops.
Nothing else was added: there is no Toast, Avatar, Tabs, Modal, Input or Select, because the source shows none (no form is visible — the page is cut off before one).

---

## Content fundamentals

**Language:** Polish, informal second person singular (**Ty / Twoje**), and the agent speaks as **"ja"** — first person singular, never "we"/"nasza agencja". The reference alternates ("Zajmę się Twoimi reklamami" … "Przejmujemy na siebie cały proces"), but the brand is one person: prefer *ja*. This is a personal brand, not a firm.

**Register:** blunt, anti-corporate, mildly provocative. It names the reader's frustration before it offers anything:
- *"Masz dość płacenia za brak wyników?"* → real-estate version: *"Masz dość ogłoszeń bez efektu?"*
- *"Miało być napędzanie biznesu, wyszło wyrzucanie pieniędzy w błoto."*
- *"Spokojnie, to nie jest kolejna gadka o 'zwiększaniu zasięgów'."*
- *"Luźna atmosfera, brak nadęcia i »korpomowy«. Mówimy wprost i konkretnie."*
Scare quotes around industry clichés are a signature move. Polish typographic quotes („ … ") in body copy; straight quotes are tolerated in testimonials pasted verbatim.

**Structure of a claim:** number first, then the mechanism, then the timeframe — *"26-krotny wzrost konta i pełny kalendarz zleceń"*, *"Sprzedał 7 mieszkań w 2 miesiące"*, *"450 potencjalnych klientów w 3 tygodnie przy koszcie 2,5 zł za leada"*. Never a claim without a number when one exists; never a rounded-up number.

**Casing:** headings and card titles are **ALL CAPS** (display face, 800–900). Eyebrows are all caps with wide tracking (*"OPINIE"*, *"WAŻNE !"* — note the space before the exclamation mark, a real quirk of the source). Body copy is sentence case. Buttons are sentence case, always a first-person desire: *"Chcę współpracować!"* → here *"Chcę wycenę!"*.

**Length:** headings ≤ 5 words per line, two lines max. Body paragraphs 1–3 sentences. Benefit-card bodies under ~20 words. Case studies are the only long-form blocks, and they follow a fixed skeleton: situation → **Co zrobiłem?** → **Efekty?** → **Podsumowanie** → **Opinia klienta**.

**Emoji:** yes — but in exactly one place: as inline bullet markers inside case-study lists (🔥 🎯 📣 ⚡ 🚀 📈 🏆), one per line, at the start. Also the occasional 🙂 inside a verbatim testimonial. Never in headings, buttons, nav or benefit cards.

**Testimonials** are quoted verbatim, italic, typos and all, with the one result-carrying sentence bolded. Attribution is *Name* + *role / company / district* on a second, muted line.

---

## Visual foundations

**Colour.** One accent and one ink. Brand yellow `#FDC033` (`--yellow-500`), near-black `#202226` (`--ink-900`), greys `#F4F4F4` page / `#FFFFFF` cards / `#F7F7F7` bubbles. Body text is a slightly cool dark grey `#3C434D`, not pure black. Yellow is used at full strength only — never tinted, never gradient-washed across a section. Exactly two background colours run the page (white and `#F4F4F4`), alternating section by section, plus the near-black panel as a deliberate interruption. Status colours exist only inside recreated dashboard screenshots (green/orange/red data pills).

**Type.** One family at two jobs: heavy uppercase display (weight 900, tracking −0.01em, line-height ~1.0) and a humanist body at 18px/1.7. Hero is 96px on desktop. Card titles are 18–22px, weight 800, uppercase, tracking +0.04em. Captions 14px in `--text-muted`. Italics appear **only** in testimonials.
*Substitution flagged:* the original faces are not supplied; the geometric heavy display and double-storey-a body face look like a Gilroy/Mont + Museo Sans pairing. **Mulish** (Google Fonts, 400/700/800/900 + italic) is loaded as the nearest free match. Send the real font files and `tokens/fonts.css` is a one-file swap.

**Spacing & layout.** 1180px centred container, 40px gutters, 128px between sections (80px for tight pairs). Cards sit on a 20–32px internal pad, 20px apart in a stack. The hero is the only broken grid: a yellow field covering ~60% of the viewport width with the photographic subject bleeding across the seam onto white.

**Backgrounds.** Flat colour only — no gradients on surfaces, no patterns, no texture, no grain. The only gradient in the system is the vertical yellow on the primary button. Full-bleed imagery is used once (hero); elsewhere photos are rounded blocks (28px) inside the grid.

**Imagery.** Real, warm, on-location photography: natural wood, daylight, a real person at a real desk, mid-action. Nothing cool-toned, nothing black-and-white, no stock-office sterility, no filters or grain. Vertical 9:16 client selfie-videos are treated as first-class content, complete with their native captions and player chrome.

**Illustration.** Black hand-drawn line art on white — a slightly wobbly marker line, no fill, no colour — used only in pain-point sections. A single hand-drawn yellow curved arrow annotates a heading. Never mix illustration and photography in one section.

**Iconography.** See the section below.

**Corner radii.** Small 8px (banner strip, video chips), 12px, 20px (bubbles, stat tiles), **28px cards**, **40px panels**, and full pills for every button, nav item and chip. The tilted yellow stickers are the one deliberately **square-cornered** element in the system.

**Cards.** White, 28px radius, generous padding, an almost invisible shadow (`0 4px 24px rgba(32,34,38,.06)`) and **no border**. On hover (only where clickable) they lift 2px and the shadow deepens. Never a coloured left border, never an outline instead of shadow.

**Shadows.** Three soft ambient card shadows plus one signature: the yellow CTA glow — a 6px yellow halo plus a soft drop (`--glow-yellow`). That glow is reserved for the single primary CTA in a section. Inner shadows are not used; hairline separation uses `--line-200` instead.

**Transparency & blur.** Essentially absent. No glassmorphism, no frosted overlays, no scrim gradients over photography (captions live inside the video, already baked in). The only alpha in the system is inside shadow colours and the 35% yellow track of the video scrubber. Text is always full-opacity ink on a solid surface.

**Borders.** Rarely; `--line-200` hairlines for table-like separation inside recreated dashboards, and a 2px black inset ring for the outline button. Nothing else is outlined.

**Motion.** Restrained. 220ms `cubic-bezier(.22,.61,.36,1)` for colour/shadow, 140ms for transforms. Hover: buttons lighten one step (black → `#33373D`, yellow → `#FFD43B`), cards lift 2px, grey tabs darken to `#EDEDED`. Press: `scale(0.97)` and one step darker. Disabled: 40% opacity, no pointer. No bounce, no spring, no parallax, no scroll-triggered reveals, no autoplaying carousels — the reel row is a plain horizontal scroller that bleeds off both edges.

**Fixed / layout rules.** The nav is inline at the top of the hero (not sticky in the source). Sections are full-width colour bands with centred content; headings are centred except in the hero and the benefits section, which are left-aligned. Tilt is a motif: stickers −2°, tape claim −1.6°, process cards ±1° — tilt is always small and always slightly counter-clockwise for text.

---

## Iconography

- **No icon font, no sprite sheet, no SVG set exists in the source.** The page uses flat raster line icons, so the icons in `assets/` are **pixel crops lifted from the supplied screenshot** — `icon-growth.png`, `icon-time.png`, `icon-chat.png`, `icon-budget.png` (black line art already composited inside a yellow circle) and `icon-agent-yellow.png`, `icon-moneybag-yellow.png`, `icon-battery-yellow.png` (yellow line art on the near-black panel). They are usable at their native size (≈56–70px) and **should be replaced with vector originals when available** — flagged.
- **Two icon treatments, no others:** black line icon inside a solid yellow circle on light surfaces; yellow line icon, no container, on the dark panel. Stroke weight is medium-heavy and even; corners are rounded; icons are illustrative (a moneybag, a battery, a suited figure) rather than a minimal geometric set.
- **No CDN icon library is linked**, deliberately: a Lucide/Heroicons substitution would be visibly thinner and more geometric than this set. If new icons are genuinely needed, commission or draw in the same heavy-line illustrative style rather than mixing in a stroke set.
- **Unicode glyphs do the small work:** `→` for list bullets, `+` for the criteria separators (yellow), `★` for ratings, `▸`-style triangles built from CSS borders for the video play button. Keep using these — do not swap them for SVGs.
- **Emoji** are content, not iconography: only as inline bullets in case-study lists (see Content fundamentals).
- **Line illustrations** (`illustration-*.png`, `arrow-curve-down.png`) are a separate register from icons — larger, looser, unframed, pain-point sections only.

---

## Using this system

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, SectionHeading, EyebrowLabel } = window.AgentPierwszegoWyboruDesignSystem_937c5b;
</script>
```

Rules of thumb: one yellow CTA per section, one tape claim per page, two background colours, headings uppercase and ≤ two lines, every claim carries a number, and the reader is always "Ty".
