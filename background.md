# Backgrounds: gradients, noise, glass, canvas, and interactivity

This guide explains how the backgrounds in this repo were created and gives copy-paste examples so you can experiment.

## Building blocks (what to learn)

- Linear / radial gradients — add depth and color transitions.
- Multiple background layers + background-blend-mode — combine gradient + image/noise.
- Semi-transparent overlays (RGBA) — make content readable on top of backgrounds.
- Frosted glass (glassmorphism) — use background-color with alpha + backdrop-filter: blur().
- Subtle noise or texture — tiny PNG or SVG data-URI repeated to break flatness.
- Animated gradients or canvas animation — for motion (use prefers-reduced-motion fallback).
- Interactive backgrounds — react to pointer movement, clicks/taps, or touch.
- SVG patterns / CSS masking — for decorative repeatable patterns.
- Accessibility & performance — color contrast, limit heavy effects on low-power devices.

---

## 1) Static gradient + noise (base technique)

Layer a gradient and a tiny repeating noise texture (SVG or PNG). This reduces banding and adds subtle texture.

Example CSS:

```css
.bg-static {
  background-image:
    linear-gradient(135deg,#071029 0%,#0b2a40 45%,#083047 100%),
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.03' fill='%23ffffff'/></svg>");
  background-size: cover,40px 40px;
  background-blend-mode: overlay;
}
```

---

## 2) Animated gradient

Animate a gradient by moving its background-position. Keep it slow and respect users who prefer reduced motion.

```css
.bg-animated{background:linear-gradient(120deg,#021027,#0b2540,#2a6f7b,#081428);background-size:300% 300%;animation:bgShift 18s ease infinite}
@keyframes bgShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@media(prefers-reduced-motion:reduce){.bg-animated{animation:none}}
```

---

## 3) Frosted glass (glassmorphism)

Use a translucent layer plus backdrop-filter: blur() to blur content behind a panel.

```css
header.frost{background:rgba(255,255,255,0.06);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06)}
```

---

## 4) Canvas-based procedural backgrounds

Use <canvas> for generative effects like particles or matrix rain. Drive animation with requestAnimationFrame and stop/slow it for prefers-reduced-motion or when the page is hidden.

Key tips:

- Make particle counts responsive to viewport size.
- Avoid running heavy animations on mobile or when battery is low.
- Pause animations on visibilitychange when document.hidden is true.

---

## 5) Interactive backgrounds (pointer / click reactive)

Interactive backgrounds create engagement by responding to user inputs:

- Pointer-follow light: move a radial gradient's center to follow the pointer by updating CSS variables (e.g. `--mx` and `--my`).
- Click/tap ripple: spawn a small absolutely-positioned element at the click point and animate it (scale + fade) then remove it.

Implementation outline:

1. Listen for `pointermove` on the target element. Convert clientX/clientY into percentages relative to the element and write them into CSS variables with `element.style.setProperty('--mx', '30%')`.
2. In CSS, use the variables in a radial-gradient: `radial-gradient(circle at var(--mx) var(--my), rgba(...), transparent)`.
3. For clicks, create an element (`span.ripple`) positioned at the event point, animate with CSS keyframes, and remove it after animationend.

The demo includes `Files/background-examples.html` with an interactive section (`.bg-interactive`) that implements both pointer-follow and click ripples. The script writes `--mx`/`--my` and creates `.ripple` elements on pointerdown/touchstart.

---

## Examples included in this repository

- `Files/background-examples.html` — demo page with static, animated, canvas, and interactive backgrounds.
- `Files/Styles/background-examples.css` — CSS used by the demo.
- `Files/Scripts/background-examples.js` — canvas matrix script and interactive background handlers.

How to run locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/Files/background-examples.html
```

Try moving the pointer over the interactive example and click/tap to see the ripple. Toggle your OS `prefers-reduced-motion` to verify fallbacks.

---

If you want, I can add on-page controls (toggles) to enable/disable each effect at runtime, or a live playground to tweak gradient colors, animation speed, and noise strength. Tell me which you prefer and I'll implement it next.

## Building blocks (what to learn)

- Linear / radial gradients — add depth and color transitions.
- Multiple background layers + background-blend-mode — combine gradient + image/noise.
- Semi-transparent overlays (RGBA) — make content readable on top of backgrounds.
- Frosted glass (glassmorphism) — use background-color with alpha + backdrop-filter: blur().
- Subtle noise or texture — tiny PNG or SVG data-URI repeated to break flatness.
- Animated gradients or canvas animation — for motion (use prefers-reduced-motion fallback).
- SVG patterns / CSS masking — for decorative repeatable patterns.
- Accessibility & performance — color contrast, limit heavy effects on low-power devices.

---

## 1) Simple, beautiful static gradient + noise overlay

This is the foundation: a gradient for color, plus a tiny repeating noise image (or SVG) to add texture.

HTML (minimal)

```html
<body class="bg-beauty">
  <header class="frost"> ... header content ... </header>
  ...
</body>
```

CSS

```css
/* base gradient */
.bg-beauty {
  min-height: 100vh;
  # Backgrounds: gradients, noise, glass, and canvas

  This guide explains how the backgrounds in this repo were created and gives copy-paste examples so you can experiment.

  ## Building blocks (what to learn)

  - Linear / radial gradients — add depth and color transitions.
  - Multiple background layers + background-blend-mode — combine gradient + image/noise.
  - Semi-transparent overlays (RGBA) — make content readable on top of backgrounds.
  - Frosted glass (glassmorphism) — use background-color with alpha + backdrop-filter: blur().
  - Subtle noise or texture — tiny PNG or SVG data-URI repeated to break flatness.
  - Animated gradients or canvas animation — for motion (use prefers-reduced-motion fallback).
  - SVG patterns / CSS masking — for decorative repeatable patterns.
  - Accessibility & performance — color contrast, limit heavy effects on low-power devices.

  ---

  ## 1) Simple, beautiful static gradient + noise overlay

  This is the foundation: a gradient for color, plus a tiny repeating noise image (or SVG) to add texture.

  HTML (minimal)

  ```html
  <body class="bg-beauty">
    <header class="frost"> ... header content ... </header>
    ...
  </body>
  ```

  CSS

  ```css
  /* base gradient */
  .bg-beauty {
    min-height: 100vh;
    *** End Patch
      linear-gradient(120deg, #0f172a 0%, #0b2540 40%, #08203a 100%),
