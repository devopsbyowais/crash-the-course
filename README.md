# Crash the Course

A modern, responsive **course discovery and WhatsApp enrollment platform** built with React.js.
Visitors can browse every course, check prices, duration, level and curriculum, see whether a
course is open for enrollment, and join active courses directly from its WhatsApp group.

No backend, database, payments or authentication — the site is fully static and deployable to
any static host.

## Features

- Sticky responsive navigation with a collapsible mobile menu
- Hero section with a custom learning illustration
- Full course list in one continuous grid, each card marked with its enrollment status
- Availability status badge on every course card (green **Active** / amber **Enrollment Opening Soon**)
- Course-detail modals with curriculum, learning outcomes and per-course WhatsApp enrollment
- "Why Learn With Crash the Course?" feature section
- Final call-to-action and complete footer
- Support content modals and FAQ accordions
- Official brand favicon set (ICO, 16/32 px PNGs, Apple touch icon)
- Scroll reveal animations, reduced-motion support, keyboard focus trapping, and accessible labels

## Tech stack

| Layer | Technology |
| --- | --- |
| UI | React 19 (`react`, `react-dom`) |
| Build tool | Vite 6 + `@vitejs/plugin-react` |
| Styling | Plain CSS3, split per section (global, navbar, hero, sections, modal, footer, responsive) |
| Icons | `lucide-react` |
| Runtime | Static site output in `dist/` |

## Getting started

Requires Node.js 18 or newer.

```bash
npm install     # install dependencies
npm run dev     # start the dev server (prints the local URL)
```

### Available scripts

```bash
npm run dev      # local development server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Project structure

```text
src/
├── components/        Reusable UI and section components
├── data/              Course, feature, and support content
├── styles/            Global, section-specific, modal, and responsive CSS
├── App.jsx            Page composition and interaction state
└── main.jsx           App entry point

public/
├── logo.png           Navbar logo
└── assets/            Favicon set (ico, 16/32 px PNGs, apple touch icon)
```

## Course data

All course content lives in `src/data/courses.js`, so it stays easy to update from one place.

### Availability status

```js
availabilityStatus: 'active',       // accepting students
availabilityStatus: 'opening_soon', // not open yet (the default for new courses)
```

- `active` courses show a green badge and a **Join Now** button.
- `opening_soon` courses show an amber badge and a disabled **Enrollment Opening Soon**
  button, so they cannot be joined.
- `coming_soon` courses show a sky-blue badge and a disabled **Coming Soon** button.

A course can override its visible badge text without changing the internal status, for example
an active course shown as **Slots Available**:

```js
availabilityStatus: 'active',
availabilityLabel: 'Slots Available',
```

All active and upcoming courses are listed together on the Explore Courses page — the status
badge on each card is the only indication of availability.

`lessons`, `rating` and `price` are optional. While a course is being prepared they can be left
as `null`: the lesson count and rating are then hidden instead of being replaced with invented
numbers, and the price reads "Contact for pricing". A course can also carry an optional
`closingStatement`, which is shown as a highlighted line in the course modal.

Optional `summary`, `closingHeading`, `closingText` and `enrollmentNote` fields add a lead line,
a closing block or a custom enrollment note to a single course modal.

Currently `SaaS Entrepreneurship` and `Shopify Local & International` are the Active courses;
every other course is marked `opening_soon`.

### WhatsApp enrollment links

Each course also has its own `whatsappGroupLink` field. Set it to the course's WhatsApp group
invitation URL:

```js
whatsappGroupLink: 'https://chat.whatsapp.com/your-group-invite-code',
```

When the field is empty (the current placeholder), an active course shows a **Contact for
Enrollment** button instead of **Join Now**, and courses that are not open yet keep their
disabled **Enrollment Opening Soon** button. No fake invite links are generated.

## Favicon

The browser icon is generated from the official logo (`PHOTO-2026-11-11-21-53-52.jpg` in the
project root). The assets live in `public/assets/` and are referenced from `index.html`:

```text
public/assets/
├── favicon.ico          # 16 / 32 / 48 px, PNG-compressed with transparency
├── favicon-16x16.png    # transparent background
├── favicon-32x32.png    # transparent background
└── apple-touch-icon.png # 180 x 180, solid white background for iOS
```

The logo circle is kept whole (graduation cap, orca and the "Crash the Course" wordmark are
never cropped), only the photo background around it is made transparent. The navbar logo
(`public/logo.png`) is untouched.

## Deployment

`npm run build` produces a static `dist/` folder. Deploy it to any static host (GitHub Pages,
Netlify, Vercel, Cloudflare Pages, S3, …) and point the host at the `dist` directory.

## Notes

Course data is sample content created for this frontend build. All artwork is rendered with CSS
and SVG, so the site does not depend on external image hosting.
