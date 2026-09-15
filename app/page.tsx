"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

// Font Awesome class + brand color per stack item
const stackIcons: Record<string, { fa: string; color: string }> = {
  "Next.js 16": { fa: "fa-solid fa-n", color: "#f3f2f0" },
  "Angular 21": { fa: "fa-brands fa-angular", color: "#DD0031" },
  "TypeScript": { fa: "fa-brands fa-js", color: "#3178C6" },
  "React": { fa: "fa-brands fa-react", color: "#61DAFB" },
  "NgRx SignalStore": { fa: "fa-solid fa-bolt", color: "#BA2BD2" },
  "NGXS": { fa: "fa-solid fa-layer-group", color: "#E91E63" },
  "RxJS": { fa: "fa-solid fa-circle-nodes", color: "#B7178C" },
  "Tailwind CSS": { fa: "fa-brands fa-css3-alt", color: "#06B6D4" },
  "SCSS": { fa: "fa-brands fa-sass", color: "#CC6699" },
  "Vitest": { fa: "fa-solid fa-vial", color: "#729B1B" },
  "Go": { fa: "fa-brands fa-golang", color: "#00ADD8" },
  "Java 21 / Spring Boot 4": { fa: "fa-brands fa-java", color: "#6DB33F" },
  "PostgreSQL": { fa: "fa-solid fa-database", color: "#4169E1" },
  "Flyway": { fa: "fa-solid fa-code-merge", color: "#CC0200" },
  "REST / OpenAPI": { fa: "fa-solid fa-plug", color: "#6BA539" },
  "C# .NET Core": { fa: "fa-brands fa-microsoft", color: "#512BD4" },
  "Google Cloud Run": { fa: "fa-brands fa-google", color: "#4285F4" },
  "Cloud SQL": { fa: "fa-solid fa-server", color: "#4285F4" },
  "Secret Manager": { fa: "fa-solid fa-key", color: "#FBBC05" },
  "Docker": { fa: "fa-brands fa-docker", color: "#2496ED" },
  "GitHub Actions": { fa: "fa-brands fa-github", color: "#2088FF" },
  "Azure DevOps": { fa: "fa-brands fa-microsoft", color: "#0078D7" },
  "Netlify": { fa: "fa-solid fa-cloud-arrow-up", color: "#00C7B7" },
  "Git / GitLab": { fa: "fa-brands fa-gitlab", color: "#FC6D26" },
  "PayFast": { fa: "fa-solid fa-credit-card", color: "#E4322B" },
  "Cal.com": { fa: "fa-solid fa-calendar-check", color: "#f3f2f0" },
  "Brevo": { fa: "fa-solid fa-envelope-open-text", color: "#0B996E" },
  "Cloudflare Turnstile": { fa: "fa-brands fa-cloudflare", color: "#F38020" },
  "Google Maps Platform": { fa: "fa-solid fa-map-location-dot", color: "#34A853" },
};

export default function Home() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  }, []);

  return (
    <>
      {/* NAV */}
      <header style={styles.nav}>
        <div style={styles.navInner}>
          <a href="#top" style={styles.mark}>
            KH<span style={{ color: "var(--red-bright)" }}>.</span>
          </a>
          <nav className="nav-links" style={styles.navLinks}>
            {["about", "experience", "cv-hub", "work", "stack"].map((id) => (
              <a key={id} href={`#${id}`} style={styles.navLink}>
                {id === "cv-hub" ? "Resume" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#contact" style={styles.navCta}>Let&apos;s talk</a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 0 80px" }}>
        <div className="hero-grid" style={styles.heroGrid}>
          <div>
            <p style={styles.eyebrow}>Cape Town, South Africa</p>
            <h1 style={styles.heroName}>Kagiso<br />Hadebe</h1>
            <div style={styles.roleBadges}>
              <span style={{ ...styles.badge, ...styles.badgeRed }}>Software Developer at Rain</span>
              <span style={{ ...styles.badge, ...styles.badgeOutline }}>Founder &amp; CEO, ROGUETECHNOLOGIES</span>
            </div>
            <p style={styles.heroLine}>
              Fullstack developer on Rain&apos;s B2B platform by day. Building Bookvas — a deposit-secured booking platform for South African service businesses — on my own time.
            </p>
            <div
              className="btn-group"
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap" as const,
              }}
            >
              <a href="#work" style={{ ...styles.btn, ...styles.btnPrimary }}>View the work</a>
              <a href="#cv-hub" style={{ ...styles.btn, ...styles.btnGhost }}>Download CV</a>
            </div>
          </div>
          <div className="terminal" style={styles.terminal} aria-hidden="true">
            <div style={styles.terminalBar}>
              <span style={{ ...styles.termDot, background: "var(--red)" }} />
              <span style={styles.termDot} />
              <span style={styles.termDot} />
            </div>
            <pre style={styles.terminalBody}>
              <span style={{ color: "var(--red-bright)" }}>$</span>{" whoami\n"}
              <span style={{ color: "var(--text)" }}>Kagiso Hadebe</span>
              {"\n\n"}
              <span style={{ color: "var(--red-bright)" }}>$</span>{" role --list\n"}
              <span style={{ color: "var(--text)" }}>&gt; Software Developer (Intermediate) · Rain{"\n"}&gt; Founder &amp; CEO · ROGUETECHNOLOGIES (Pty) Ltd</span>
              {"\n\n"}
              <span style={{ color: "var(--red-bright)" }}>$</span>{" current\n"}
              <span style={{ color: "var(--text)" }}>&gt; Rain B2B portal — Next.js 16 + Go{"\n"}&gt; Bookvas — Spring Boot 4 + Angular 21 + PayFast</span>
              {"\n\n"}
              <span style={{ color: "var(--red-bright)" }}>$</span>{" status\n"}
              <span style={{ color: "var(--text)" }}>shipping<span className="cursor">_</span></span>
            </pre>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <div className="wrap">
          <div className="reveal section-head" style={styles.sectionHead}>
            <span style={styles.sectionNum}>01</span>
            <h2 style={styles.sectionTitle}>About</h2>
            <div className="section-rule" style={styles.sectionRule} />
          </div>
          <div className="about-grid" style={styles.aboutGrid}>
            <div className="reveal" style={{ position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kagiso.jpeg" alt="Kagiso Hadebe" style={styles.aboutImg} />
              <div style={styles.aboutImgBorder} />
            </div>
            <div className="reveal" style={{ color: "var(--text-dim)", fontSize: "1.1rem" }}>
              <p>
                I&apos;m a <strong style={{ color: "var(--text)" }}>fullstack Software Developer at Rain</strong>, working on the B2B portal — the platform Rain&apos;s business customers use to buy and manage products in volume. I work across the stack: a Next.js 16 frontend and a Go API, with an OpenAPI contract between them.
              </p>
              <br />
              <p>
                Outside Rain I&apos;m the <strong style={{ color: "var(--text)" }}>founder of ROGUETECHNOLOGIES (Pty) Ltd</strong>, a Cape Town web development studio, and the builder of <strong style={{ color: "var(--text)" }}>Bookvas</strong>, its first product: a multi-tenant booking platform where clients pay a deposit to book, so small service businesses stop losing money to no-shows.
              </p>
              <br />
              <p>
                I&apos;ve been at Rain twice — first as an Angular developer, then back in 2026 as fullstack after a year leading a feature team at a dev house. I like owning a thing end to end: the schema, the API, the UI, the deploy, and the customer who uses it.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 18, marginTop: 24 }}>
                {[
                  { label: "Currently", value: "Software Developer (Intermediate) · Rain" },
                  { label: "Founded", value: "ROGUETECHNOLOGIES (Pty) Ltd — 2025, registered 2026" },
                  { label: "Building", value: "Bookvas — deposit-secured booking SaaS" },
                  { label: "Stack, day job", value: "Next.js 16 · TypeScript · Go · PostgreSQL" },
                  { label: "Stack, own product", value: "Angular 21 · Spring Boot 4 · Cloud Run · PayFast" },
                  { label: "Based in", value: "Cape Town, South Africa" },
                ].map((s) => (
                  <div key={s.label} style={styles.stat}>
                    <div style={styles.statLabel}>{s.label}</div>
                    <div style={styles.statValue}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={styles.section}>
        <div className="wrap">
          <div className="reveal section-head" style={styles.sectionHead}>
            <span style={styles.sectionNum}>02</span>
            <h2 style={styles.sectionTitle}>Experience</h2>
            <div className="section-rule" style={styles.sectionRule} />
          </div>
          <div className="reveal">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="exp-row"
                style={{
                  ...styles.expRow,
                  ...(i === 0
                    ? { borderTop: "1px solid var(--border-soft)" }
                    : {}),
                }}
              >
                <div style={styles.expPeriod}>{exp.period}</div>
                <div>
                  <div style={styles.expRole}>{exp.role}</div>
                  <div style={styles.expCompany}>{exp.company}</div>
                  {exp.desc && <p style={{ color: "var(--text-dim)", fontSize: "0.97rem", marginTop: 8, maxWidth: 640 }}>{exp.desc}</p>}
                  {exp.bullets && (
                    <ul style={{ marginTop: 10, paddingLeft: 16, listStyleType: "square" }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ color: "var(--text-dim)", fontSize: "0.92rem", marginBottom: 6 }}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="exp-tags" style={styles.expTags}>
                  {exp.tag.split(" · ").map((t) => (
                    <span key={t} style={styles.expTag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV HUB */}
      <section id="cv-hub" style={{ background: "var(--bg-elevated)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)", textAlign: "center" as const, padding: "60px 0", position: "relative", zIndex: 1 }}>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: 600, margin: "0 auto", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 16 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", letterSpacing: "0.02em" }}>Curriculum Vitae</h2>
            <p style={{ color: "var(--text-dim)", fontSize: "1rem", marginBottom: 8 }}>Full work history, stack and education in one PDF.</p>
            <a href="/kagiso-hadebe-cv.pdf" download style={{ ...styles.btn, ...styles.btnPrimary, gap: 12 }}>
              <i className="fa-solid fa-download" aria-hidden="true" /> Download CV (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={styles.section}>
        <div className="wrap">
          <div className="reveal section-head" style={styles.sectionHead}>
            <span style={styles.sectionNum}>03</span>
            <h2 style={styles.sectionTitle}>Selected Work</h2>
            <div className="section-rule" style={styles.sectionRule} />
          </div>
          <div className="work-grid" style={styles.workGrid}>
            {work.map((w, i) => (
              <div key={i} style={styles.workCard}>
                <span style={styles.workTag}>{w.tag}</span>
                <div style={styles.workTitle}>{w.title}</div>
                <p style={styles.workDesc}>{w.desc}</p>
                {w.tech && <div style={styles.workTech}>{w.tech}</div>}
                {w.links.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 10, marginTop: 6 }}>
                    {w.links.map((l, j) => (
                      <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" style={styles.workLink}>
                        {l.label} <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "0.7rem" }} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" style={styles.section}>
        <div className="wrap">
          <div className="reveal section-head" style={styles.sectionHead}>
            <span style={styles.sectionNum}>04</span>
            <h2 style={styles.sectionTitle}>Stack</h2>
            <div className="section-rule" style={styles.sectionRule} />
          </div>
          <div className="stack-groups" style={styles.stackGroups}>
            {stack.map((group, i) => (
              <div key={i}>
                <div style={styles.stackGroupLabel}>{group.label}</div>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 10 }}>
                  {group.tags.map((tag, j) => {
                    const icon = stackIcons[tag];
                    return (
                      <span key={j} style={styles.tag}>
                        {icon && (
                          <i
                            className={icon.fa}
                            style={{ fontSize: 13, color: icon.color, flexShrink: 0 }}
                            aria-hidden="true"
                          />
                        )}
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 50 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 6vw, 4rem)", lineHeight: 1.05, maxWidth: 780 }}>
              Let&apos;s build <span style={{ color: "var(--red-bright)" }}>something</span> worth shipping.
            </h2>
            <p style={{ color: "var(--text-dim)", fontSize: "1.1rem", marginTop: 18, maxWidth: 520 }}>
              Talk to me about RogueTech projects, Bookvas, or freelance builds.
            </p>
          </div>
          <div className="contact-grid" style={styles.contactGrid}>
            {contacts.map((c, i) => (
              <a key={i} href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined} style={styles.contactCard}>
                <span style={styles.contactIcon}>
                  <i className={c.fa} style={{ fontSize: 17, color: "var(--red-bright)" }} aria-hidden="true" />
                </span>
                <span>
                  <div style={styles.contactMetaLabel}>{c.label}</div>
                  <div style={styles.contactMetaValue}>{c.value}</div>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--border-soft)", padding: "30px 0" }}>
        <div className="wrap footer-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 10, fontFamily: "var(--font-cond)", fontSize: "0.85rem", color: "var(--text-dimmer)", textTransform: "uppercase" as const, letterSpacing: "0.03em" }}>
          <span>© 2026 Kagiso Hadebe</span>
          <span>
            <a href="https://rogue-tech.co.za/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-dim)" }}>ROGUETECHNOLOGIES (Pty) Ltd</a>{" "}— Cape Town, South Africa
          </span>
        </div>
      </footer>
    </>
  );
}

/* ── DATA ── */

type Experience = {
  period: string;
  role: string;
  company: string;
  tag: string;
  desc?: string;
  bullets?: ReactNode[];
};

const experience: Experience[] = [
  {
    period: "07/2026 — Present",
    role: "Software Developer (Intermediate)",
    company: "Rain",
    tag: "Next.js 16 · TypeScript · Go · PostgreSQL · OpenAPI",
    bullets: [
      "Fullstack developer on Rain's B2B portal — the platform business customers use to buy and manage products in volume.",
      "Work across both repos: the Next.js 16 App Router frontend and the stateless Go API.",
      "Built the OpenAPI → TypeScript codegen pipeline so the frontend and Go backend share one contract.",
      "Delivered product detail, top-up and cancellation flows end to end.",
      "Produced a full codebase audit and interactive reference documentation for the team.",
    ],
  },
  {
    period: "05/2025 — 07/2026",
    role: "Intermediate Frontend Developer & Feature Team Lead",
    company: "Retro Rabbit / Smartek21",
    tag: "Angular · NgRx SignalStore · Azure DevOps",
    bullets: [
      "Led one of several feature teams at a software development house, guiding developers on architecture, code quality and sprint delivery across client and internal projects.",
      "Drove event-driven state management with NgRx SignalStore — Events, Reducers, Effects, Facade, Store.",
      "Architected reusable high-performance UI components: advanced tables, dynamic filters, dropdowns, expansions.",
      "Optimised frontend performance through lazy loading, bundle optimisation, change-detection tuning and state isolation.",
      "Owned CI/CD in Azure DevOps — repositories, pull requests, automated testing, pipelines.",
    ],
  },
  {
    period: "2025 — Present",
    role: "Founder & CEO",
    company: "ROGUETECHNOLOGIES (Pty) Ltd",
    tag: "Strategy · Fullstack · Product",
    bullets: [
      "Founded a Cape Town web development studio; registered as a Pty Ltd in 2026.",
      "Shipped client work end to end — brand, site, domain, hosting, email.",
      <>
        Designed and built <strong style={{ color: "var(--text)" }}>Bookvas</strong>, the studio&apos;s own product: multi-tenant booking SaaS with PayFast deposits and split settlement, Spring Boot 4 on Cloud Run, Angular 21 frontends, Flyway-managed Postgres, cross-tenant isolation test suite.
      </>,
    ],
  },
  {
    period: "07/2024 — 05/2025",
    role: "Intermediate Frontend Developer",
    company: "Rain",
    tag: "Angular · NGXS · SCSS",
    bullets: [
      "Built and maintained customer-facing and internal Angular applications, including the assisted-sales portal.",
      "Applied NGXS state management to separate UI logic from domain logic.",
      "Optimised bundle size, routing, lazy loading and change detection.",
      "Integrated REST APIs with structured error handling, retry logic and optimistic UI updates.",
    ],
  },
  {
    period: "01/2023 — 07/2024",
    role: "Angular Developer",
    company: "Rain",
    tag: "Angular · RxJS · Material",
    bullets: [
      "Crafted front-end UI designs using HTML5, SCSS, TypeScript, Angular, and Angular Material for responsive layouts.",
      "Implemented RxJS streams for asynchronous communication, elevating dynamic client-server interactions.",
      "Developed reusable, modular components, directives, and services to expedite feature development and maintain codebases.",
      "Managed code repositories with Git and GitLab, utilizing collaborative branching and merging strategies.",
    ],
  },
  {
    period: "04/2022 — 09/2022",
    role: "Junior Frontend Developer",
    company: "Acumen / FiftyKnots",
    tag: "C# · .NET Core · jQuery",
    bullets: [
      "Utilized C#, .NET Core, HTML, CSS, jQuery, and NopCommerce to deliver state-of-the-art solution updates.",
      "Specialized in customizing e-commerce systems, setting up payment processing configurations, and implementing third-party integrations.",
    ],
  },
  {
    period: "01/2022 — 04/2022",
    role: "Assistant Code Mentor",
    company: "Project CodeX",
    tag: "Mentorship · Java · Web",
    desc: "Guided aspiring developers towards coding proficiency via structured code reviews, pair programming, technical assistance, and actionable debugging feedback.",
  },
];

type Work = {
  tag: string;
  title: string;
  desc: string;
  tech?: string;
  links: { label: string; url: string }[];
};

const work: Work[] = [
  {
    tag: "Own product · Live",
    title: "Bookvas",
    desc: "Deposit-secured online booking for South African service businesses. Clients pay a PayFast deposit to book; the money settles straight into the business owner's own merchant account. Multi-tenant Spring Boot 4 API on Cloud Run, Angular 21 tenant and admin apps, Flyway-managed Postgres, 24-test cross-tenant isolation suite.",
    tech: "Java 21 · Spring Boot 4 · Angular 21 · PostgreSQL · PayFast · Google Cloud",
    // TODO: add the Bookvas URL once the domain decision is made.
    links: [],
  },
  {
    tag: "Agency · Founder",
    title: "ROGUETECHNOLOGIES",
    desc: 'Cape Town web development studio — brand, site and service packages built end to end. "Your digital team. Built to grow with you."',
    links: [{ label: "rogue-tech.co.za", url: "https://rogue-tech.co.za/" }],
  },
  {
    tag: "Client project · Live",
    title: "Bruja Thembi",
    desc: "First publicly deployed client project — a booking-led site with Cal.com integration, custom domain and branded email, shipped end to end.",
    links: [{ label: "brujathembi.com", url: "https://brujathembi.com/" }],
  },
  {
    tag: "Employer",
    title: "Rain",
    desc: "Fullstack development on Rain's B2B platform. Earlier: Angular development on rain.co.za and the assisted-sales portal.",
    links: [{ label: "rain.co.za", url: "https://www.rain.co.za/" }],
  },
];

const stack = [
  { label: "Frontend", tags: ["Next.js 16", "Angular 21", "TypeScript", "React", "NgRx SignalStore", "NGXS", "RxJS", "Tailwind CSS", "SCSS", "Vitest"] },
  { label: "Backend & Data", tags: ["Go", "Java 21 / Spring Boot 4", "PostgreSQL", "Flyway", "REST / OpenAPI", "C# .NET Core"] },
  { label: "Cloud & Tooling", tags: ["Google Cloud Run", "Cloud SQL", "Secret Manager", "Docker", "GitHub Actions", "Azure DevOps", "Netlify", "Git / GitLab"] },
  { label: "Payments & Integrations", tags: ["PayFast", "Cal.com", "Brevo", "Cloudflare Turnstile", "Google Maps Platform"] },
];

const contacts = [
  { label: "Email", value: "hadebekagiso3@gmail.com", href: "mailto:hadebekagiso3@gmail.com", external: false, fa: "fa-solid fa-envelope" },
  { label: "WhatsApp", value: "066 444 0780", href: "https://wa.me/27664440780", external: true, fa: "fa-brands fa-whatsapp" },
  { label: "Mobile", value: "066 444 0780", href: "tel:+27664440780", external: false, fa: "fa-solid fa-phone" },
  { label: "LinkedIn", value: "Kagiso Hadebe", href: "https://www.linkedin.com/in/kagiso-hadebe-611a9a192/", external: true, fa: "fa-brands fa-linkedin-in" },
  { label: "Instagram", value: "@kagiso.ha", href: "https://www.instagram.com/kagiso.ha/", external: true, fa: "fa-brands fa-instagram" },
];

/* ── STYLES ── */

const styles: Record<string, React.CSSProperties> = {
  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,10,10,0.7)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border-soft)" },
  navInner: { maxWidth: "var(--maxw)", margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" },
  mark: { fontFamily: "var(--font-display)", fontSize: "1.4rem", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: 2, border: "1px solid var(--border)", padding: "4px 10px", borderRadius: 3 },
  navLinks: { display: "flex", gap: 28, fontFamily: "var(--font-cond)", fontSize: "0.95rem", letterSpacing: "0.03em", textTransform: "uppercase" },
  navLink: { color: "var(--text-dim)" },
  navCta: { fontFamily: "var(--font-cond)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.03em", background: "var(--red)", color: "#fff", padding: "9px 18px", borderRadius: 3, whiteSpace: "nowrap" },
  heroGrid: { maxWidth: "var(--maxw)", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1.2fr 0.9fr", gap: 60, alignItems: "center" },
  eyebrow: { fontFamily: "var(--font-cond)", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: "0.85rem", color: "var(--red-bright)", marginBottom: 18 },
  heroName: { fontFamily: "var(--font-display)", fontSize: "clamp(3.4rem, 9vw, 6.2rem)", lineHeight: 0.95, letterSpacing: "0.01em", marginBottom: 26 },
  roleBadges: { display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 26 },
  badge: { fontFamily: "var(--font-cond)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.04em", padding: "7px 14px", borderRadius: 3 },
  badgeRed: { background: "var(--red)", color: "#fff" },
  badgeOutline: { border: "1px solid var(--border)", color: "var(--text-dim)" },
  heroLine: { fontSize: "1.15rem", color: "var(--text-dim)", maxWidth: 480, marginBottom: 34 },
  btn: { fontFamily: "var(--font-cond)", textTransform: "uppercase", letterSpacing: "0.03em", fontSize: "0.95rem", padding: "13px 26px", borderRadius: 3, display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" },
  btnPrimary: { background: "var(--red)", color: "#fff" },
  btnGhost: { border: "1px solid var(--border)", color: "var(--text)" },
  terminal: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 6, overflow: "hidden", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" },
  terminalBar: { background: "var(--surface-2)", padding: "10px 14px", display: "flex", gap: 7, borderBottom: "1px solid var(--border)" },
  termDot: { width: 10, height: 10, borderRadius: "50%", background: "var(--border)", display: "inline-block" },
  terminalBody: { fontFamily: "var(--font-mono)", fontSize: "0.82rem", lineHeight: 1.9, color: "var(--text-dim)", padding: "22px 20px", whiteSpace: "pre-wrap" },
  section: { position: "relative", zIndex: 1, padding: "90px 0" },
  sectionHead: { display: "flex", alignItems: "baseline", gap: 18, marginBottom: 48 },
  sectionNum: { fontFamily: "var(--font-mono)", color: "var(--red-bright)", fontSize: "0.85rem" },
  sectionTitle: { fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "0.02em" },
  sectionRule: { flex: 1, height: 1, background: "var(--border)" },
  aboutGrid: { display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 60, alignItems: "start" },
  aboutImg: { position: "relative", zIndex: 2, border: "1px solid var(--border)", borderRadius: 6, filter: "grayscale(100%)", width: "100%", aspectRatio: "1/1", objectFit: "cover" },
  aboutImgBorder: { position: "absolute", inset: 0, border: "1px solid var(--red-bright)", transform: "translate(12px, 12px)", zIndex: 1, borderRadius: 6, pointerEvents: "none" },
  stat: { borderLeft: "2px solid var(--red)", paddingLeft: 16 },
  statLabel: { fontFamily: "var(--font-cond)", textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.78rem", color: "var(--text-dimmer)" },
  statValue: { fontFamily: "var(--font-cond)", fontWeight: 600, fontSize: "1.05rem", color: "var(--text)" },
  expRow: { display: "grid", gridTemplateColumns: "200px 1fr auto", gap: 24, alignItems: "start", padding: "28px 0", borderBottom: "1px solid var(--border-soft)" },
  expPeriod: { fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-dimmer)" },
  expRole: { fontFamily: "var(--font-cond)", fontSize: "1.3rem", fontWeight: 600, color: "var(--text)", marginBottom: 4 },
  expCompany: { color: "var(--red-bright)", fontWeight: 500 },
  expTags: { display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "flex-end", maxWidth: 240 },
  expTag: { fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-dimmer)", textTransform: "uppercase", letterSpacing: "0.05em", border: "1px solid var(--border)", padding: "5px 10px", borderRadius: 3, whiteSpace: "nowrap" },
  workGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 },
  workCard: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "30px 26px", display: "flex", flexDirection: "column", gap: 14 },
  workTag: { fontFamily: "var(--font-mono)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--red-bright)" },
  workTitle: { fontFamily: "var(--font-cond)", fontSize: "1.5rem", fontWeight: 600 },
  workDesc: { color: "var(--text-dim)", fontSize: "0.95rem", flex: 1 },
  workTech: { fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-dimmer)", letterSpacing: "0.02em" },
  workLink: { fontFamily: "var(--font-cond)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.03em", color: "var(--text)", borderBottom: "1px solid var(--border)", paddingBottom: 2, display: "inline-flex", alignItems: "center", gap: 6 },
  stackGroups: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 36 },
  stackGroupLabel: { fontFamily: "var(--font-cond)", textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.82rem", color: "var(--text-dimmer)", marginBottom: 14 },
  tag: { fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text)", background: "var(--surface)", border: "1px solid var(--border)", padding: "7px 12px", borderRadius: 20, display: "inline-flex", alignItems: "center", gap: 8 },
  contactGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 },
  contactCard: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "22px", display: "flex", alignItems: "center", gap: 14 },
  contactIcon: { width: 40, height: 40, flexShrink: 0, borderRadius: "50%", background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center" },
  contactMetaLabel: { fontFamily: "var(--font-cond)", textTransform: "uppercase", letterSpacing: "0.04em", fontSize: "0.72rem", color: "var(--text-dimmer)" },
  contactMetaValue: { fontFamily: "var(--font-cond)", fontWeight: 600, fontSize: "1rem", color: "var(--text)" },
};
