# SilkRouteCollectives — Bento Portfolio Site

Next.js 14 (App Router) · Tailwind CSS · GSAP

## Run it

```bash
npm install
npm run dev
```

## Add your photos & videos

1. Drop files into `/public/media/`
2. Open `data/site.js` — every media slot is listed there with a label
   (e.g. "POTTERY — process video"). Set its `src`:

```js
media: { slot: "POTTERY — hero product photo", src: "/media/pottery-hero.jpg", type: "image" }
```

Until a `src` is set, the site shows a labeled dashed placeholder so you
always know which asset goes where.

## Edit content

All copy — intro, collections, testimonials, story, shipping regions,
contact links — lives in `data/site.js`. No component edits needed.

## Animations

- Hero cards stagger-ease in on page load (GSAP, in `app/page.jsx`)
- Every card already has the `.anim-card` hook. To upgrade to
  scroll-triggered viewport reveals later, register ScrollTrigger and
  replace the second `gsap.to()` block with a `ScrollTrigger.batch()`
  on `.anim-card:not(.hero-card)`.
- `prefers-reduced-motion` is respected (animations skip entirely).
# SilkRoute_Collectives
