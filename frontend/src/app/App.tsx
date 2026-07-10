import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import archDiagram from "@/imports/Screenshot_2026-07-05_151401.png";
import portrait from "@/imports/2qzp75-1.jpg";

type Tab = "home" | "about" | "architecture" | "contact";

const N = "#1d3557";
const C = "#e9d8a6";
const R = "#e63946";

/* ─── shared tiny helpers ─── */
const Label = ({ children }: { children: string }) => (
  <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: R }}>
    {children}
  </p>
);

const SectionHeading = ({ children }: { children: string }) => (
  <h2
    className="mb-8 leading-tight"
    style={{
      fontFamily: "'Libre Baskerville', serif",
      fontWeight: 700,
      fontSize: "clamp(1.7rem, 4vw, 2.8rem)",
      color: N,
    }}
  >
    {children}
  </h2>
);

/* ════════════════════════════════════════════════════════════
   APP
════════════════════════════════════════════════════════════ */
export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs: { id: Tab; label: string }[] = [
    { id: "home",         label: "Home" },
    { id: "about",        label: "About Me" },
    { id: "architecture", label: "Architecture" },
    { id: "contact",      label: "Contact" },
  ];

  const navigate = (t: Tab) => { setActiveTab(t); setMenuOpen(false); };

  return (
    <>
      {/* floating animation keyframe */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        .portrait-float { animation: float 5s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
      `}</style>

      <div
        className="min-h-screen"
        style={{ backgroundColor: C, color: N, fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ══ HEADER ══ */}
        <header
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 md:py-5"
          style={{
            borderBottom: "1px solid rgba(29,53,87,0.1)",
            backdropFilter: "blur(14px)",
            backgroundColor: "rgba(233,216,166,0.93)",
          }}
        >
          {/* wordmark */}
          <span
            className="text-lg md:text-xl select-none"
            style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 700, color: N }}
          >
            Seriousaleh
          </span>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigate(tab.id)}
                className="relative px-5 py-2 text-sm font-medium transition-all duration-200 rounded"
                style={{
                  color: activeTab === tab.id ? R : N,
                  backgroundColor: activeTab === tab.id ? "rgba(230,57,70,0.08)" : "transparent",
                }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-5 right-5 h-px" style={{ backgroundColor: R }} />
                )}
              </button>
            ))}
          </nav>

          {/* hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: N,
                transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: N,
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: N,
                transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </header>

        {/* mobile drawer */}
        {menuOpen && (
          <div
            className="fixed top-[61px] left-0 right-0 z-40 flex flex-col px-6 py-4 gap-1 md:hidden"
            style={{
              backgroundColor: "rgba(233,216,166,0.98)",
              borderBottom: "1px solid rgba(29,53,87,0.1)",
              backdropFilter: "blur(14px)",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigate(tab.id)}
                className="text-left px-4 py-3 rounded text-sm font-medium transition-all duration-150"
                style={{
                  color: activeTab === tab.id ? R : N,
                  backgroundColor: activeTab === tab.id ? "rgba(230,57,70,0.07)" : "transparent",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* ══ PAGES ══ */}
        <main className="pt-[61px]">
          {activeTab === "home"         && <HomeTab setTab={navigate} />}
          {activeTab === "about"        && <AboutTab />}
          {activeTab === "architecture" && <ArchitectureTab />}
          {activeTab === "contact"      && <ContactTab />}
        </main>
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   HOME
════════════════════════════════════════════════════════════ */
function HomeTab({ setTab }: { setTab: (t: Tab) => void }) {
  return (
    <section className="relative min-h-[calc(100vh-61px)] flex items-center px-6 md:px-14 lg:px-24 xl:px-36 py-16 overflow-hidden">
      {/* subtle right-panel accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none hidden lg:block"
        style={{ backgroundColor: "rgba(29,53,87,0.04)" }}
        aria-hidden
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-px pointer-events-none hidden lg:block"
        style={{ backgroundColor: "rgba(29,53,87,0.12)" }}
        aria-hidden
      />

      {/* two-column layout */}
      <div className="relative w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 max-w-6xl mx-auto">

        {/* ── LEFT: text ── */}
        <div className="flex-1 text-center md:text-left">
          <Label>Junior DevOps Engineer</Label>

          <h1
            className="mb-5 leading-tight"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
              color: N,
            }}
          >
            Hi, I&apos;m<br />
            <span style={{ color: R }}>Saleh Jeddi</span>
          </h1>

          <p
            className="text-sm md:text-base max-w-lg mx-auto md:mx-0"
            style={{ color: "rgba(29,53,87,0.6)", fontWeight: 300, lineHeight: 1.9 }}
          >
            Linux &amp; DevOps Engineer with LPIC-1, LPIC-2, and Network+ certifications.
            Focused on containerization, CI/CD automation, and deployment infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={() => setTab("about")}
              className="px-6 py-3 text-sm font-semibold rounded transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: N, color: C }}
            >
              About Me
            </button>
            <button
              onClick={() => setTab("contact")}
              className="px-6 py-3 text-sm font-semibold rounded transition-all duration-200"
              style={{ border: "1.5px solid rgba(29,53,87,0.25)", color: N, backgroundColor: "transparent" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(29,53,87,0.07)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* ── RIGHT: portrait ── */}
        <div className="flex-shrink-0 flex items-center justify-center">
          {/* glow */}
          <div
            className="relative"
            style={{ filter: "drop-shadow(0 0 32px rgba(230,57,70,0.18))" }}
          >
            <div className="portrait-float">
              {/* outer ring */}
              <div
                className="rounded-full p-1"
                style={{ background: `linear-gradient(135deg, ${R} 0%, ${N} 100%)` }}
              >
                {/* inner cream gap */}
                <div className="rounded-full p-1" style={{ backgroundColor: C }}>
                  {/* image */}
                  <div
                    className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full overflow-hidden"
                    style={{
                      boxShadow: "0 20px 60px rgba(29,53,87,0.25), 0 4px 16px rgba(29,53,87,0.15)",
                    }}
                  >
                    <ImageWithFallback
                      src={portrait}
                      alt="Saleh Jeddi — Junior DevOps Engineer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   ABOUT
════════════════════════════════════════════════════════════ */
function AboutTab() {
  const skills = [
    "Linux Administration", "Networking", "Docker", "Docker Compose",
    "Git", "GitHub", "Nginx", "Bash Scripting", "Ansible", "Jenkins",
    "CI/CD", "Kubernetes (learning)",
  ];

  const certifications = [
    { name: "LPIC-1",           body: "Linux Professional Institute" },
    { name: "LPIC-2",           body: "Linux Professional Institute" },
    { name: "CompTIA Network+", body: "CompTIA" },
  ];

  return (
    <section className="min-h-[calc(100vh-61px)] px-6 md:px-14 lg:px-24 xl:px-36 py-16">
      <div className="max-w-5xl mx-auto">
        <Label>About Me</Label>
        <SectionHeading>Who is Saleh Jeddi?</SectionHeading>

        {/* bio */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <p style={{ color: "rgba(29,53,87,0.65)", fontWeight: 300, lineHeight: 1.9, fontSize: "0.95rem" }}>
            Junior Linux &amp; DevOps Engineer with LPIC-1, LPIC-2, and Network+ certifications.
            Hands-on experience with Linux system administration, networking, Git, Docker, Ansible,
            and Jenkins. Interested in automation, CI/CD, cloud technologies, infrastructure
            management, Kubernetes, and microservice architecture.
          </p>
          <p style={{ color: "rgba(29,53,87,0.65)", fontWeight: 300, lineHeight: 1.9, fontSize: "0.95rem" }}>
            Currently building personal projects focused on containerization, monitoring, and
            deployment automation, while seeking an opportunity to gain professional experience in
            Linux, System Administration, or DevOps roles.
          </p>
        </div>

        {/* skills */}
        <div className="mb-14">
          <p className="text-xs tracking-widest uppercase font-semibold mb-4" style={{ color: "rgba(29,53,87,0.4)" }}>
            Technical Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 text-xs font-medium rounded"
                style={{
                  border: "1.5px solid rgba(29,53,87,0.18)",
                  color: N,
                  backgroundColor: "rgba(29,53,87,0.05)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* experience / projects */}
          <div>
            <p className="text-xs tracking-widest uppercase font-semibold mb-5" style={{ color: "rgba(29,53,87,0.4)" }}>
              Personal Projects
            </p>

            <ProjectCard
              title="Portfolio Website"
              tags={["Jenkins", "Docker", "Nginx", "Node.js"]}
              link="github.com/SeriouSaleh/portfolio-website-project"
              href="https://github.com/SeriouSaleh/portfolio-website-project"
            >
              Full-stack personal portfolio with a complete CI/CD pipeline — Jenkins triggers
              SSH-based deployment into a Dockerized Ubuntu VM running Nginx as a reverse proxy
              in front of a Node.js backend.
            </ProjectCard>

            <ProjectCard
              title="Flask Bio Web Page"
              tags={["Docker Compose", "PostgreSQL", "RabbitMQ", "Nginx"]}
              link="github.com/SeriouSaleh/Flask-bio-web-page"
              href="https://github.com/SeriouSaleh/Flask-bio-web-page"
            >
              Containerized Flask web application with PostgreSQL database, RabbitMQ message
              broker, and Nginx configured as a reverse proxy. Managed via Docker Compose for
              multi-container orchestration.
            </ProjectCard>
          </div>

          {/* education + certs */}
          <div className="space-y-10">
            <div>
              <p className="text-xs tracking-widest uppercase font-semibold mb-5" style={{ color: "rgba(29,53,87,0.4)" }}>
                Education
              </p>
              <div
                className="rounded-lg p-5"
                style={{ border: "1.5px solid rgba(29,53,87,0.13)", backgroundColor: "rgba(29,53,87,0.04)" }}
              >
                <p className="font-semibold text-sm mb-0.5" style={{ color: N }}>
                  Islamic Azad University — Central Tehran Branch
                </p>
                <p className="text-xs mb-1" style={{ color: "rgba(29,53,87,0.5)" }}>2020 – 2025</p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase font-semibold mb-5" style={{ color: "rgba(29,53,87,0.4)" }}>
                Certifications
              </p>
              <div className="space-y-3">
                {certifications.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 rounded-lg px-4 py-3"
                    style={{ border: "1.5px solid rgba(29,53,87,0.13)", backgroundColor: "rgba(29,53,87,0.04)" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: R }}
                    />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: N }}>{c.name}</p>
                      <p className="text-xs" style={{ color: "rgba(29,53,87,0.45)" }}>{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title, tags, link, href, children,
}: {
  title: string;
  tags: string[];
  link: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-lg p-5 mb-4"
      style={{ border: "1.5px solid rgba(29,53,87,0.13)", backgroundColor: "rgba(29,53,87,0.04)" }}
    >
      <p className="font-semibold text-sm mb-2" style={{ color: N }}>{title}</p>
      <p style={{ color: "rgba(29,53,87,0.62)", fontSize: "0.85rem", lineHeight: 1.75, fontWeight: 300 }}>
        {children}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
        {tags.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs rounded"
            style={{ backgroundColor: "rgba(230,57,70,0.08)", color: R }}
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs hover:underline"
        style={{ color: "rgba(29,53,87,0.45)" }}
      >
        {link}
      </a>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   ARCHITECTURE
════════════════════════════════════════════════════════════ */
function ArchitectureTab() {
  const cards = [
    { label: "CI Server",         value: "Jenkins",  sub: "localhost:5000" },
    { label: "Container Runtime", value: "Docker",   sub: "Ubuntu / Oracle VirtualBox" },
    { label: "Reverse Proxy",     value: "Nginx",    sub: "localhost:80 → Node :3000" },
  ];

  return (
    <section className="min-h-[calc(100vh-61px)] px-6 md:px-14 lg:px-24 xl:px-36 py-16">
      <div className="max-w-6xl mx-auto">
        <Label>System Design</Label>
        <SectionHeading>Deployment Architecture</SectionHeading>

        <p className="text-sm mb-10 max-w-lg" style={{ color: "rgba(29,53,87,0.5)", fontWeight: 300, lineHeight: 1.8 }}>
          CI/CD pipeline: Jenkins triggers SSH deployment into a Dockerized Ubuntu VM,
          running Nginx as a reverse proxy in front of the Node.js application.
        </p>

        {/* diagram frame */}
        <div
          className="rounded-lg overflow-hidden mb-8"
          style={{ border: "1.5px solid rgba(29,53,87,0.13)" }}
        >
          {/* fake window bar */}
          <div
            className="px-5 py-3 flex items-center gap-2"
            style={{ backgroundColor: "#dfd09b", borderBottom: "1px solid rgba(29,53,87,0.1)" }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: R }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: N, opacity: 0.22 }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: N, opacity: 0.1 }} />
            <span className="ml-3 text-xs font-medium" style={{ color: "rgba(29,53,87,0.33)" }}>
              SeriouSaleh/portfolio-website-project — architecture diagram
            </span>
          </div>
          <div className="p-4 md:p-8" style={{ backgroundColor: "#f5ede8" }}>
            <ImageWithFallback
              src={archDiagram}
              alt="Architecture diagram: Jenkins CI/CD → SSH → Docker on Ubuntu VM (Nginx + Node-app) ↔ GitHub repo SeriouSaleh/portfolio-website-project"
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>

        {/* summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((item) => (
            <div
              key={item.label}
              className="rounded-lg p-5 transition-colors duration-150"
              style={{ border: "1.5px solid rgba(29,53,87,0.12)", backgroundColor: "rgba(29,53,87,0.04)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(29,53,87,0.09)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(29,53,87,0.04)")}
            >
              <p className="text-xs tracking-widest uppercase mb-1 font-semibold" style={{ color: "rgba(29,53,87,0.37)" }}>
                {item.label}
              </p>
              <p className="text-base font-semibold mb-0.5" style={{ color: N }}>{item.value}</p>
              <p className="text-xs" style={{ color: "rgba(29,53,87,0.42)" }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   CONTACT
════════════════════════════════════════════════════════════ */
function ContactTab() {
  const contacts = [
    {
      id: "linkedin",
      label: "LinkedIn",
      display: "linkedin.com/in/seriousaleh",
      href: "https://www.linkedin.com/in/seriousaleh",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      id: "phone",
      label: "Phone",
      display: "+98 919 410 8548",
      href: "tel:+989194108548",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: "github",
      label: "GitHub",
      display: "github.com/SeriouSaleh",
      href: "https://github.com/SeriouSaleh",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      id: "location",
      label: "Location",
      display: "Tehran, Iran",
      href: "https://maps.google.com/?q=Tehran,Iran",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-[calc(100vh-61px)] px-6 md:px-14 lg:px-24 xl:px-36 py-16">
      <div className="max-w-xl">
        <Label>Get in Touch</Label>
        <SectionHeading>Contact</SectionHeading>
        <p className="text-sm mb-10" style={{ color: "rgba(29,53,87,0.5)", fontWeight: 300, lineHeight: 1.8 }}>
          Open to DevOps and Linux System Administration opportunities. Feel free to reach out via any channel below.
        </p>

        <div className="space-y-3">
          {contacts.map((c) => (
            <a
              key={c.id}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg px-5 py-4 transition-all duration-200"
              style={{
                border: "1.5px solid rgba(29,53,87,0.13)",
                backgroundColor: "rgba(29,53,87,0.04)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(29,53,87,0.08)";
                e.currentTarget.style.borderColor = "rgba(230,57,70,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(29,53,87,0.04)";
                e.currentTarget.style.borderColor = "rgba(29,53,87,0.13)";
              }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                style={{ backgroundColor: "rgba(29,53,87,0.09)", color: N }}
              >
                {c.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "rgba(29,53,87,0.37)" }}>
                  {c.label}
                </p>
                <p className="text-sm font-medium truncate" style={{ color: N }}>{c.display}</p>
              </div>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(29,53,87,0.22)" }} aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

