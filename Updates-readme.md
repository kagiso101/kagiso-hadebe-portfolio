# PORTFOLIO REWORK — kagiso-hadebe.netlify.app

**Written:** 2026-09-15
**Positioning:** Fullstack developer by day, founder by night. Not job-hunting — the site sells RogueTech and Bookvas, and shows the engineering behind them.

Every bullet below is drafted from what Kagiso has said. **Bullets marked ⚠ need his check before they go live** — they describe real work but the wording is mine.

---

## 1. Global fixes

1. Title tag and hero: drop "Senior". Use **Software Developer · Founder, ROGUETECHNOLOGIES**.
2. Location everywhere: **Cape Town, South Africa**. Remove Fourways / Johannesburg / Sandton.
3. Company name: **ROGUETECHNOLOGIES (Pty) Ltd** in full at first mention and in the footer. "RogueTech" is fine after that.
4. **Bookr → Bookvas** everywhere.
5. Angular 20 → Angular 21.
6. CV: rename the file to `kagiso-hadebe-cv.pdf`. Regenerate it to match this page — it currently says "Frontend Developer" in the filename.
7. Contact: one number, **066 444 0780**, on both the Mobile and WhatsApp links. Remove the second number.
8. Remove "Open to senior frontend roles" from the contact section.
9. Remove "infrastructure powerhouse" and "building the future_". Let the work carry it.

---

## 2. Hero

**Eyebrow:** Cape Town, South Africa

**Name:** Kagiso Hadebe

**Line 1:** Software Developer at Rain
**Line 2:** Founder & CEO, ROGUETECHNOLOGIES

**Blurb:**
> Fullstack developer on Rain's B2B platform by day. Building Bookvas — a deposit-secured booking platform for South African service businesses — on my own time.

**Buttons:** View the work · Download CV

**Terminal block:**
```
$ whoami
Kagiso Hadebe

$ role --list
> Software Developer (Intermediate) · Rain
> Founder & CEO · ROGUETECHNOLOGIES (Pty) Ltd

$ current
> Rain B2B portal — Next.js 16 + Go
> Bookvas — Spring Boot 4 + Angular 21 + PayFast

$ status
shipping_
```

---

## 3. About

> I'm a **fullstack Software Developer at Rain**, working on the B2B portal — the platform Rain's business customers use to buy and manage products in volume. I work across the stack: a Next.js 16 frontend and a Go API, with an OpenAPI contract between them.
>
> Outside Rain I'm the **founder of ROGUETECHNOLOGIES**, a Cape Town web development studio, and the builder of **Bookvas**, its first product: a multi-tenant booking platform where clients pay a deposit to book, so small service businesses stop losing money to no-shows.
>
> I've been at Rain twice — first as an Angular developer, then back in 2026 as fullstack after a year leading a feature team at a dev house. I like owning a thing end to end: the schema, the API, the UI, the deploy, and the customer who uses it.

**Facts panel:**

| | |
|---|---|
| Currently | Software Developer (Intermediate) · Rain |
| Founded | ROGUETECHNOLOGIES (Pty) Ltd — 2025, registered 2026 |
| Building | Bookvas — deposit-secured booking SaaS |
| Stack, day job | Next.js 16 · TypeScript · Go · PostgreSQL |
| Stack, own product | Angular 21 · Spring Boot 4 · Cloud Run · PayFast |
| Based in | Cape Town, South Africa |

---

## 4. Experience

### 07/2026 — Present · Software Developer (Intermediate) · Rain

- ⚠ Fullstack developer on Rain's B2B portal — the platform business customers use to buy and manage products in volume.
- ⚠ Work across both repos: the Next.js 16 App Router frontend and the stateless Go API.
- ⚠ Built the OpenAPI → TypeScript codegen pipeline so the frontend and Go backend share one contract.
- ⚠ Delivered product detail, top-up and cancellation flows end to end.
- ⚠ Produced a full codebase audit and interactive reference documentation for the team.

*Next.js 16 · TypeScript · Go · PostgreSQL · OpenAPI*

### 05/2025 — 07/2026 · Intermediate Frontend Developer & Feature Team Lead · Retro Rabbit / Smartek21

- Led one of several feature teams at a software development house, guiding developers on architecture, code quality and sprint delivery across client and internal projects.
- Drove event-driven state management with NgRx SignalStore — Events, Reducers, Effects, Facade, Store.
- Architected reusable high-performance UI components: advanced tables, dynamic filters, dropdowns, expansions.
- Optimised frontend performance through lazy loading, bundle optimisation, change-detection tuning and state isolation.
- Owned CI/CD in Azure DevOps — repositories, pull requests, automated testing, pipelines.

*Angular · NgRx SignalStore · Azure DevOps*

### 2025 — Present · Founder & CEO · ROGUETECHNOLOGIES (Pty) Ltd

- Founded a Cape Town web development studio; registered as a Pty Ltd in 2026.
- Shipped client work end to end — brand, site, domain, hosting, email.
- Designed and built **Bookvas**, the studio's own product: multi-tenant booking SaaS with PayFast deposits and split settlement, Spring Boot 4 on Cloud Run, Angular 21 frontends, Flyway-managed Postgres, cross-tenant isolation test suite.

*Strategy · Fullstack · Product*

### 07/2024 — 05/2025 · Intermediate Frontend Developer · Rain

- ⚠ Built and maintained customer-facing and internal Angular applications, including the assisted-sales portal.
- Applied NGXS state management to separate UI logic from domain logic.
- Optimised bundle size, routing, lazy loading and change detection.
- Integrated REST APIs with structured error handling, retry logic and optimistic UI updates.

*Angular · NGXS · SCSS*

### 01/2023 — 07/2024 · Angular Developer · Rain

*(keep existing bullets)*

### 04/2022 — 09/2022 · Junior Frontend Developer · Acumen / FiftyKnots

*(keep existing bullets)*

### 01/2022 — 04/2022 · Assistant Code Mentor · Project CodeX

*(keep existing bullets)*

---

## 5. Selected Work — new order

### 1. Bookvas *(new card, first position)*
**Own product · Live**
> Deposit-secured online booking for South African service businesses. Clients pay a PayFast deposit to book; the money settles straight into the business owner's own merchant account. Multi-tenant Spring Boot 4 API on Cloud Run, Angular 21 tenant and admin apps, Flyway-managed Postgres, 24-test cross-tenant isolation suite.
>
> *Java 21 · Spring Boot 4 · Angular 21 · PostgreSQL · PayFast · Google Cloud*

Link: none yet — add once the Bookvas domain decision is made

### 2. ROGUETECHNOLOGIES
**Agency · Founder**
> Cape Town web development studio — brand, site and service packages built end to end. "Your digital team. Built to grow with you."

Link: rogue-tech.co.za

### 3. Bruja Thembi
**Client project · Live**
> First publicly deployed client project — a booking-led site with Cal.com integration, custom domain and branded email, shipped end to end.

Link: brujathembi.com

### 4. Rain
**Employer**
> Fullstack development on Rain's B2B platform. Earlier: Angular development on rain.co.za and the assisted-sales portal.

Links: rain.co.za

---

## 6. Stack — updated

**Frontend:** Next.js 16 · Angular 21 · TypeScript · React · NgRx SignalStore · NGXS · RxJS · Tailwind CSS · SCSS · Vitest

**Backend & Data:** Go · Java 21 / Spring Boot 4 · PostgreSQL · Flyway · REST / OpenAPI · C# .NET Core

**Cloud & Tooling:** Google Cloud Run · Cloud SQL · Secret Manager · Docker · GitHub Actions · Azure DevOps · Netlify · Git / GitLab

**Payments & Integrations:** PayFast · Cal.com · Brevo · Cloudflare Turnstile · Google Maps Platform

---

## 7. Contact

**Heading:** Let's build something worth shipping.

> Talk to me about RogueTech projects, Bookvas, or freelance builds.

- Email · hadebekagiso3@gmail.com
- WhatsApp · 066 444 0780
- LinkedIn · Kagiso Hadebe
- Instagram · @kagiso.ha

Remove Facebook unless it's actively used.

**Footer:** © 2026 Kagiso Hadebe · ROGUETECHNOLOGIES (Pty) Ltd — Cape Town, South Africa

---

## 8. Not on the site, deliberately

- QA sales-call review at Rain — side responsibility, not a headline.
- Reason for leaving Retro Rabbit — dates speak for themselves; "retrenched" is an answer for a conversation, not a webpage.
- Rain "second stint" framing — mentioned once in About, not laboured.
