"use client";

import { useEffect } from "react";

// Font Awesome class + brand color per stack item
const stackIcons: Record<string, { fa: string; color: string }> = {
  "Angular 20": { fa: "fa-brands fa-angular", color: "#DD0031" },
  "TypeScript": { fa: "fa-brands fa-js", color: "#3178C6" },
  "NgRx SignalStore": { fa: "fa-solid fa-bolt", color: "#BA2BD2" },
  "NGXS": { fa: "fa-solid fa-layer-group", color: "#E91E63" },
  "RxJS": { fa: "fa-solid fa-circle-nodes", color: "#B7178C" },
  "React": { fa: "fa-brands fa-react", color: "#61DAFB" },
  "Tailwind CSS": { fa: "fa-brands fa-css3-alt", color: "#06B6D4" },
  "SCSS": { fa: "fa-brands fa-sass", color: "#CC6699" },
  "Vitest": { fa: "fa-solid fa-vial", color: "#729B1B" },
  "Java Spring Boot": { fa: "fa-brands fa-java", color: "#6DB33F" },
  "PostgreSQL": { fa: "fa-solid fa-database", color: "#4169E1" },
  "SQL": { fa: "fa-solid fa-table", color: "#E38C00" },
  "C# .NET Core": { fa: "fa-brands fa-microsoft", color: "#512BD4" },
  "REST / OpenAPI": { fa: "fa-solid fa-plug", color: "#6BA539" },
  "GraphQL": { fa: "fa-solid fa-diagram-project", color: "#E10098" },
  "Azure DevOps": { fa: "fa-brands fa-microsoft", color: "#0078D7" },
  "GitHub Actions": { fa: "fa-brands fa-github", color: "#2088FF" },
  "Git / GitLab": { fa: "fa-brands fa-gitlab", color: "#FC6D26" },
  "Netlify": { fa: "fa-solid fa-cloud-arrow-up", color: "#00C7B7" },
  "Plesk": { fa: "fa-solid fa-server", color: "#52BBE6" },
  "pnpm": { fa: "fa-solid fa-box", color: "#F69220" },
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
            <p style={styles.eyebrow}>Fourways, Johannesburg · South Africa</p>
            <h1 style={styles.heroName}>Kagiso<br />Hadebe</h1>
            <div style={styles.roleBadges}>
              <span style={{ ...styles.badge, ...styles.badgeRed }}>Senior Frontend Developer</span>
              <span style={{ ...styles.badge, ...styles.badgeOutline }}>Founder &amp; CEO — RogueTech</span>
            </div>
            <p style={styles.heroLine}>
              Building production enterprise software for clients by day, and scaling RogueTech — a digital agency and software studio — into an infrastructure powerhouse on my own time.
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
              <span style={{ color: "var(--text)" }}>&gt; Intermediate Frontend Developer &amp; Feature Team Lead{"\n"}&gt; Retro Rabbit / Smartek21{"\n"}&gt; Founder &amp; CEO, RogueTech (Pty) Ltd</span>
              {"\n\n"}
              <span style={{ color: "var(--red-bright)" }}>$</span>{" status\n"}
              <span style={{ color: "var(--text)" }}>building the future<span className="cursor">_</span></span>
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
                I am an <strong style={{ color: "var(--text)" }}>Intermediate Frontend Developer &amp; Feature Team Lead</strong> at Retro Rabbit / Smartek21, and the <strong style={{ color: "var(--text)" }}>Founder &amp; CEO of RogueTech</strong>, a Johannesburg-based digital agency and software studio.
              </p>
              <br />
              <p>
                As a seasoned frontend developer, I excel in creating engaging user interfaces and smooth web experiences that captivate users. My strong problem-solving skills and dedication to staying up to date with the latest web technologies drive my passion for innovation.
              </p>
              <br />
              <p>
                My day-to-day enterprise work centres heavily on Angular 20 ecosystems, reactive state systems, and robust full-stack scaling. Outside of that, I'm building RogueTech from the ground up — client work, brand infrastructure, partnerships, and its own proprietary SaaS platform called Bookr.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 18, marginTop: 24 }}>
                {[
                  { label: "Currently", value: "Intermediate Frontend Developer & Feature Team Lead · Retro Rabbit / Smartek21" },
                  { label: "Founded", value: "RogueTech (Pty) Ltd — Johannesburg, 2025" },
                  { label: "Core Architecture Focus", value: "Angular 20 · NgRx SignalStore · Spring Boot · PostgreSQL" },
                  { label: "Based in", value: "Fourways, Sandton, Gauteng, South Africa" },
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
                <span style={styles.expTag}>{exp.tag}</span>
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
            <p style={{ color: "var(--text-dim)", fontSize: "1rem", marginBottom: 8 }}>Download my comprehensive professional record detailing full engineering parameters, tech competencies, and architectural paradigms.</p>
            <a href="/KAGISO UYABONGEKA VUYANI HADEBE - FRONTEND DEVELOPER - CV (1).pdf" download style={{ ...styles.btn, ...styles.btnPrimary, gap: 12 }}>
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
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 10, marginTop: 6 }}>
                  {w.links.map((l, j) => (
                    <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" style={styles.workLink}>
                      {l.label} <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "0.7rem" }} aria-hidden="true" />
                    </a>
                  ))}
                </div>
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
              Open to senior frontend roles, freelance builds, and conversations about RogueTech. Reach out on whichever channel works for you.
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
            <a href="https://rogue-tech.co.za/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-dim)" }}>RogueTech (Pty) Ltd</a>{" "}— Johannesburg, South Africa
          </span>
        </div>
      </footer>
    </>
  );
}

/* ── DATA ── */

const experience = [
  { period: "05/2025 — Present", role: "Intermediate Frontend Developer & Feature Team Lead", company: "Retro Rabbit / Smartek21", tag: "Angular 20 · SignalStore", bullets: ["Led a frontend feature team delivering enterprise-scale Angular 20 applications, guiding developers on architecture, code quality standards, and sprint execution.", "Drove event-driven state management with Signal Store, applying Events Reducers Effects Facade Store patterns.", "Architected high-performance UI components (advanced tables, dynamic filters, dropdowns, expansions) reused across modules.", "Optimized frontend performance via lazy loading, bundle optimization, change detection tuning, and state isolation.", "Owned CI/CD workflows in Azure DevOps, managing repositories, pull requests, automated testing, and pipelines."] },
  { period: "2025 — Present", role: "Founder & CEO", company: "RogueTech (Pty) Ltd", tag: "Strategy · Full-Stack", desc: "Built RogueTech from the domain up into a registered legal company — handling client delivery, brand infrastructure, operational legal frameworks, partnerships, and Bookr, RogueTech's own SaaS booking platform." },
  { period: "07/2024 — 05/2025", role: "Intermediate Frontend Developer", company: "Rain South Africa", tag: "Angular · NGXS · SCSS", bullets: ["Developed and maintained customer-facing and internal web applications using Angular, HTML5, SCSS, and TypeScript.", "Applied NGXS state management to organize application state and separate UI logic from domain logic.", "Optimized performance by reducing bundle sizes, refining routing, enabling lazy-loaded modules, and tuning change detection.", "Integrated features with REST APIs, implementing structured error handling, retry logic, and optimistic UI updates."] },
  { period: "01/2023 — 07/2024", role: "Angular Developer", company: "Rain South Africa", tag: "Angular · RxJS · Material", bullets: ["Crafted front-end UI designs using HTML5, SCSS, TypeScript, Angular, and Angular Material for responsive layouts.", "Implemented RxJS streams for asynchronous communication, elevating dynamic client-server interactions.", "Developed reusable, modular components, directives, and services to expedite feature development and maintain codebases.", "Managed code repositories with Git and GitLab, utilizing collaborative branching and merging strategies."] },
  { period: "04/2022 — 09/2022", role: "Junior Frontend Developer", company: "Acumen / FiftyKnots", tag: "C# · .NET Core · jQuery", bullets: ["Utilized C#, .NET Core, HTML, CSS, jQuery, and NopCommerce to deliver state-of-the-art solution updates.", "Specialized in customizing e-commerce systems, setting up payment processing configurations, and implementing third-party integrations."] },
  { period: "01/2022 — 04/2022", role: "Assistant Code Mentor", company: "Project CodeX", tag: "Mentorship · Java · Web", desc: "Guided aspiring developers towards coding proficiency via structured code reviews, pair programming, technical assistance, and actionable debugging feedback." },
];

const work = [
  { tag: "Agency · Own Product", title: "RogueTech", desc: 'A Johannesburg-based digital agency and software studio — brand, site, and service offering built end to end. "Your digital team. Built to grow with you."', links: [{ label: "rogue-tech.co.za", url: "https://rogue-tech.co.za/" }] },
  { tag: "Client Project", title: "Bruja Thembi", desc: "RogueTech's first publicly deployed client project — a booking-led site with Cal.com integration, custom domain, and branded email, shipped end to end.", links: [{ label: "brujathembi.com", url: "https://brujathembi.com/" }] },
  { tag: "Former Employer", title: "rain", desc: "Frontend development on rain's digital platforms — South Africa's uncapped 5G network — as an in-house Angular Developer, prior to joining Retro Rabbit / Smartek21.", links: [{ label: "rain.co.za", url: "https://www.rain.co.za/" }, { label: "rainGO", url: "https://www.raingo.co.za/" }] },];

const stack = [
  { label: "Frontend", tags: ["Angular 20", "TypeScript", "NgRx SignalStore", "NGXS", "RxJS", "React", "Tailwind CSS", "SCSS", "Vitest"] },
  { label: "Backend & Data", tags: ["Java Spring Boot", "PostgreSQL", "SQL", "C# .NET Core", "REST / OpenAPI", "GraphQL"] },
  { label: "Tooling & Infra", tags: ["Azure DevOps", "GitHub Actions", "Git / GitLab", "Netlify", "Plesk", "pnpm"] },
];

const contacts = [
  { label: "Email", value: "hadebekagiso3@gmail.com", href: "mailto:hadebekagiso3@gmail.com", external: false, fa: "fa-solid fa-envelope" },
  { label: "WhatsApp", value: "069 176 7318", href: "https://wa.me/27691767318", external: true, fa: "fa-brands fa-whatsapp" },
  { label: "Mobile", value: "066 444 0780", href: "tel:+27664440780", external: false, fa: "fa-solid fa-phone" },
  { label: "LinkedIn", value: "Kagiso Hadebe", href: "https://www.linkedin.com/in/kagiso-hadebe-611a9a192/", external: true, fa: "fa-brands fa-linkedin-in" },
  { label: "Instagram", value: "@kagiso.ha", href: "https://www.instagram.com/kagiso.ha/", external: true, fa: "fa-brands fa-instagram" },
  { label: "Facebook", value: "Kagiso Hadebe", href: "https://www.facebook.com/kagiso.hadebe.2025/", external: true, fa: "fa-brands fa-facebook-f" },
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
  expTag: { fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-dimmer)", textTransform: "uppercase", letterSpacing: "0.05em", border: "1px solid var(--border)", padding: "5px 10px", borderRadius: 3, whiteSpace: "nowrap", alignSelf: "start" },
  workGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 },
  workCard: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "30px 26px", display: "flex", flexDirection: "column", gap: 14 },
  workTag: { fontFamily: "var(--font-mono)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--red-bright)" },
  workTitle: { fontFamily: "var(--font-cond)", fontSize: "1.5rem", fontWeight: 600 },
  workDesc: { color: "var(--text-dim)", fontSize: "0.95rem", flex: 1 },
  workLink: { fontFamily: "var(--font-cond)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.03em", color: "var(--text)", borderBottom: "1px solid var(--border)", paddingBottom: 2, display: "inline-flex", alignItems: "center", gap: 6 },
  stackGroups: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 36 },
  stackGroupLabel: { fontFamily: "var(--font-cond)", textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.82rem", color: "var(--text-dimmer)", marginBottom: 14 },
  tag: { fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text)", background: "var(--surface)", border: "1px solid var(--border)", padding: "7px 12px", borderRadius: 20, display: "inline-flex", alignItems: "center", gap: 8 },
  contactGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 },
  contactCard: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "22px", display: "flex", alignItems: "center", gap: 14 },
  contactIcon: { width: 40, height: 40, flexShrink: 0, borderRadius: "50%", background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center" },
  contactMetaLabel: { fontFamily: "var(--font-cond)", textTransform: "uppercase", letterSpacing: "0.04em", fontSize: "0.72rem", color: "var(--text-dimmer)" },
  contactMetaValue: { fontFamily: "var(--font-cond)", fontWeight: 600, fontSize: "1rem", color: "var(--text)" },
};