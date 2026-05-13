# Felymas — Redesign Brief

> Working document for the React-based redesign of `felymas.com`.
> Site lives at `http://felymas.test` locally, deploys to cPanel in production.

---

## 1. Who Felymas is, who the site speaks to

**Felymas Consultants International** is a construction & engineering consultancy
operating across Zimbabwe and South Africa. The firm delivers project management,
construction, and technical advisory across commercial, residential, and
institutional projects.

**Primary audiences**

| Audience | What they need from the site |
|----------|------------------------------|
| **Diaspora investors** (Zimbabweans abroad building/buying property back home) | Proof Felymas can be trusted with money & decisions made from thousands of miles away. Project photography, named credentials, transparent process. |
| **Commercial clients** (retailers, banks, institutional developers) | Track record on similar work, scale of past projects, partner roster. |
| **Government / parastatal procurement** | Credentials, registered engineers, formal tone, completed-project case studies. |

**What "greater than it is now" means here**

- The current site reads like a 2019 template — Bootstrap 3, Owl Carousel,
  small images, weak hierarchy, light typography.
- The work itself is impressive (multi-million-dollar developments, named
  engineers, real projects). The site under-sells it.
- The redesign should make a first-time visitor think *"these are serious
  people who deliver"* within 5 seconds of landing.

---

## 2. Design direction — Bold Editorial

A construction firm's website should feel like a portfolio of *finished
buildings*, not a brochure. The references aren't agency websites; they're
architectural practices and engineering firms.

**Inspiration touchstones**

- [Bjarke Ingels Group (big.dk)](https://big.dk) — full-bleed project grid, no fluff
- [Foster + Partners](https://www.fosterandpartners.com) — generous whitespace, editorial pacing
- [Arup](https://www.arup.com) — engineering-first, evidence-led layout
- [Heatherwick Studio](https://www.heatherwick.com) — typographic confidence

**Core principles**

1. **Show, don't tell.** Project photography is the hero on every page. Copy supports the images, not the other way around.
2. **Big type, small flourish.** Headlines do the heavy lifting. Animation is sparse and slow.
3. **Earn trust through specificity.** Real project names, real values, real engineers, real locations.
4. **Whitespace is the brand.** Density signals cheap. Whitespace signals premium.

---

## 3. Visual system

### Palette

| Token | Hex | Role |
|-------|-----|------|
| `brand/orange` | `#F26722` | Original Felymas accent — reserved for CTAs, key emphasis, brand mark |
| `brand/orange-deep` | `#C8501A` | Hover state, depth |
| `ink/900` | `#0B1220` | Primary text, dark surfaces, deep architectural feel |
| `ink/700` | `#1F2A3D` | Secondary text |
| `ink/500` | `#5B6577` | Tertiary text, captions |
| `surface/0` | `#FFFFFF` | Page background |
| `surface/50` | `#F7F6F2` | Warm off-white for section bands |
| `surface/100` | `#EDEAE2` | Card backgrounds, dividers |
| `accent/concrete` | `#D4B996` | Optional tan accent — concrete/structural feel |

The orange is non-negotiable (brand recognition). Everything else can be tuned.

### Typography

- **Display headings** — `Cabinet Grotesk` or `Satoshi` (free, modern, architectural). Used at 56–96px on hero, 32–48px on section heads.
- **Body** — `Inter` at 17–18px / 1.55 line-height. Generous reading rhythm.
- **Numerics & captions** — `JetBrains Mono` for project codes, years, areas (e.g. `6,199 m²`, `2018`, `USD $14 M`).

### Motion

- Slow, considered transitions only. Default duration `400–600ms`, easing `cubic-bezier(0.22, 1, 0.36, 1)` (a calm ease-out).
- Scroll-triggered fade-up on section reveals, max 24px translate.
- Hero image: very slow Ken Burns–style zoom (10s+).
- No parallax on hero copy. No bouncing. No looping marquees.

### Imagery rules

- Project photos always edge-to-edge — no rounded corners on hero shots.
- Crop tight to the building, not the sky.
- Treat the gallery as an *index of work*, not a slideshow.

---

## 4. Tech stack

| Layer | Choice | Why |
|-------|--------|-----|
| Backend | **Laravel 12** (already in place) | Reuse existing controllers, models, admin |
| Frontend bridge | **Inertia.js** | No CORS, no API tokens, server-side routing, deploys as one app on cPanel |
| UI | **React 19 + TypeScript** | Modern component model, type safety |
| Styling | **Tailwind CSS v4** | Already shipped with Breeze; design tokens map cleanly |
| Animation | **Motion (Framer Motion successor)** | Scroll reveals, page transitions, slow tween primitives |
| Icons | **Lucide React** | Clean stroke-based icons |
| Build | **Vite** | Already wired up |

**What stays Blade for now:** the existing `/admin/*` views. They work,
clients log in there, no reason to rewrite admin to ship the public redesign
faster. We React-ify admin in a later phase.

**Migration approach:** reinstall Breeze with the `react` preset to swap the
auth + scaffolding to Inertia/React, then progressively port the public pages
one at a time, leaving admin Blade routes untouched.

---

## 5. Page-by-page plan

Order matters — homepage first to lock the visual language, then propagate.

### 5.1 Homepage (`/`)

| Section | Content |
|---------|---------|
| **Hero** | Full-bleed featured project image. One line of headline ("We build, manage, and deliver across Zimbabwe and beyond."). Subtle "scroll" cue. |
| **About strip** | Two columns: 4-line firm description on the left, key stats on the right (`20+ projects delivered`, `USD $20M+ in projects`, `2 countries`, `15+ engineers`). |
| **Services** | 4-card grid (Project Mgmt, Construction, Consultancy, Logistics). Card = image + title + 1-line description + arrow link. |
| **Featured projects** | 6-tile asymmetric grid. Hover reveals project name, location, value. Click → project detail. |
| **Team teaser** | "Led by registered engineers" — 3 featured profiles, link to full team. |
| **Partners** | Quiet logo grid, desaturated by default, color on hover. |
| **CTA** | "Start a project with us" → contact form. |
| **Footer** | Contact, location, social, navigation. |

### 5.2 About (`/about`)
- Editorial article layout: large opening statement, body copy in a narrow column, supporting images full-bleed between sections.
- Vision/mission as two adjacent statement cards on a `surface/50` band.
- Partner grid at the bottom.

### 5.3 Services (`/service`) + Service detail (`/service_details/{id}`)
- Index: 4 large rows (not cards) — image left, description right, alternating sides.
- Detail: hero image, then sectioned content (Scope · Approach · Outcomes), related services at the bottom.

### 5.4 Projects (via homepage + `/project_details/{id}`)
- Detail page: cover image full-bleed, key facts strip (Client, Location, Value, Year, Status), project narrative, gallery of `project_images` in a masonry layout.
- "Other projects" rail at the bottom.

### 5.5 Team (`/our_team`)
- Grid of headshots, role, qualifications. Hover or click opens a bio drawer.
- Lead engineers featured at the top.

### 5.6 Blog (`/blog`) + (`/blog_details/{id}`)
- Magazine layout: large featured post on top, then a 2-column list.
- Detail: reading-width article with hero image.

### 5.7 Gallery (`/gallery`)
- Pinterest-style masonry. Lightbox on click. Group by project optionally.

### 5.8 Contact (`/contact`)
- Two-column: form on the right, contact info + map (or office photo) on the left.
- Existing `SiteController@sendEmail` already wired — just wrap in React.

---

## 6. Component inventory (Tailwind-driven, in `resources/js/Components/`)

- `<Hero />`, `<SectionHeading />`, `<StatStrip />`
- `<ServiceCard />`, `<ServiceRow />`
- `<ProjectTile />`, `<ProjectMeta />`
- `<TeamCard />`, `<BioDrawer />`
- `<LogoGrid />`, `<PartnerLogo />`
- `<Gallery />`, `<Lightbox />`
- `<ContactForm />`
- `<SiteHeader />`, `<SiteFooter />`
- `<Reveal />` (scroll-into-view wrapper using Motion)
- `<Button />`, `<Link />`, `<Field />`

---

## 7. Build phases

1. **Phase 0 — install React stack.** Reinstall Breeze with `react` preset, verify Inertia boots, port login/register, smoke-test admin still works.
2. **Phase 1 — homepage.** Build the design system in Tailwind, ship homepage as the first React/Inertia page. Sign-off here before propagating.
3. **Phase 2 — public pages.** Port About, Services + detail, Projects + detail, Team, Blog + detail, Gallery, Contact.
4. **Phase 3 — polish.** Page transitions, image optimization (responsive sources, blur-up placeholders), Lighthouse pass, basic SEO meta.
5. **Phase 4 — admin (later).** Convert admin Blade pages to React/Inertia incrementally.

---

## 8. Open questions for the client

- [ ] Are we keeping the existing project photos, or commissioning new photography? (Strongly recommend a small reshoot of 3–4 hero projects — current photos are small and dated.)
- [ ] Confirm headline copy for the hero — current pages have no defined positioning line.
- [ ] Confirm metrics for the stat strip (number of projects, total value delivered, years active).
- [ ] OK to drop `/blog` if there's no content pipeline? Currently 1 placeholder post.
- [ ] Logo — keep current mark or refresh? (Current logo is fine but low resolution.)

---

## 9. Definition of "done" for phase 1

- Homepage renders at `http://felymas.test/` with React via Inertia
- Existing data (sliders, services, projects, team, partners) feeds the new components from the same Laravel controllers
- Page reaches Lighthouse score ≥ 90 on performance and accessibility (mobile)
- Sign-off from the client on hero, type system, palette
