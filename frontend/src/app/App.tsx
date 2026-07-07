import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import archDiagram from "@/imports/Screenshot_2026-07-05_151401.png";

type Tab = "home" | "about" | "architecture" | "contact";

const navy = "#1d3557";
const cream = "#e9d8a6";
const red = "#e63946";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const tabs: { id: Tab; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "architecture", label: "Architecture" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: cream, color: navy, fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5"
        style={{
          borderBottom: `1px solid rgba(29,53,87,0.1)`,
          backdropFilter: "blur(14px)",
          backgroundColor: "rgba(233,216,166,0.92)",
        }}
      >
        <span
          className="text-xl select-none"
          style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 700, color: navy }}
        >
          Seriousaleh
        </span>

        <nav className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-5 py-2 text-sm font-medium transition-all duration-200 rounded"
              style={{
                color: activeTab === tab.id ? red : navy,
                backgroundColor: activeTab === tab.id ? "rgba(230,57,70,0.08)" : "transparent",
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span
                  className="absolute bottom-0 left-5 right-5 h-px"
                  style={{ backgroundColor: red }}
                />
              )}
            </button>
          ))}
        </nav>
      </header>

      {/* ── Pages ── */}
      <main className="pt-20">
        {activeTab === "home"         && <HomeTab setTab={setActiveTab} />}
        {activeTab === "about"        && <AboutTab />}
        {activeTab === "architecture" && <ArchitectureTab />}
        {activeTab === "contact"      && <ContactTab />}
      </main>
    </div>
  );
}

/* ─────────────────────────── HOME ─────────────────────────── */
function HomeTab({ setTab }: { setTab: (t: Tab) => void }) {
  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center px-10 md:px-20 lg:px-32 overflow-hidden"
    >
      {/* subtle right panel */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"
        style={{ backgroundColor: "rgba(29,53,87,0.04)" }}
        aria-hidden
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ backgroundColor: "rgba(29,53,87,0.12)" }}
        aria-hidden
      />

      <div className="relative max-w-3xl">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: red }}
        >
          Portfolio
        </p>

        <h1
          className="mb-6 leading-tight"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: navy,
          }}
        >
          Hello, I&apos;m<br />
          <span style={{ color: red }}>Seriousaleh</span>
        </h1>

        <p
          className="text-base max-w-xl"
          style={{ color: "rgba(29,53,87,0.58)", fontWeight: 300, lineHeight: 1.9 }}
        >
          A developer passionate about building robust systems and clean architectures.
          Explore my work across DevOps, backend infrastructure, and modern web solutions.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={() => setTab("architecture")}
            className="px-7 py-3 text-sm font-semibold rounded transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: navy, color: cream }}
          >
            View Architecture
          </button>
          <button
            onClick={() => setTab("contact")}
            className="px-7 py-3 text-sm font-semibold rounded transition-all duration-200"
            style={{ border: `1.5px solid rgba(29,53,87,0.25)`, color: navy, backgroundColor: "transparent" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(29,53,87,0.07)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── ABOUT ─────────────────────────── */
function AboutTab() {
  const skills = ["Docker", "Jenkins", "Nginx", "Node.js", "Linux", "Git", "CI/CD", "Networking"];

  return (
    <section className="min-h-[calc(100vh-5rem)] px-10 md:px-20 lg:px-32 py-20">
      <div className="max-w-4xl">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: red }}>
          About Me
        </p>
        <h2
          className="mb-10 leading-tight"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: navy,
          }}
        >
          Who is Seriousaleh?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-5">
            <p style={{ color: "rgba(29,53,87,0.62)", fontWeight: 300, lineHeight: 1.9, fontSize: "0.95rem" }}>
              I&apos;m a systems-minded developer with a deep interest in DevOps and infrastructure
              engineering. I enjoy designing clean deployment pipelines that bridge development and
              production with minimal friction.
            </p>
            <p style={{ color: "rgba(29,53,87,0.62)", fontWeight: 300, lineHeight: 1.9, fontSize: "0.95rem" }}>
              My work revolves around containerized environments, reverse-proxy setups, and continuous
              integration workflows — building things that are reliable, observable, and easy to maintain.
            </p>
          </div>

          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4 font-semibold"
              style={{ color: "rgba(29,53,87,0.38)" }}
            >
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded"
                  style={{
                    border: `1.5px solid rgba(29,53,87,0.18)`,
                    color: navy,
                    backgroundColor: "rgba(29,53,87,0.05)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── ARCHITECTURE ─────────────────────── */
function ArchitectureTab() {
  const cards = [
    { label: "CI Server",          value: "Jenkins", sub: "localhost:5000" },
    { label: "Container Runtime",  value: "Docker",  sub: "Ubuntu / Oracle VirtualBox" },
    { label: "Reverse Proxy",      value: "Nginx",   sub: "localhost:80 → Node :3000" },
  ];

  return (
    <section className="min-h-[calc(100vh-5rem)] px-10 md:px-20 lg:px-32 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: red }}>
          System Design
        </p>
        <h2
          className="mb-3 leading-tight"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: navy,
          }}
        >
          Deployment Architecture
        </h2>
        <p className="text-sm mb-10 max-w-lg" style={{ color: "rgba(29,53,87,0.5)", fontWeight: 300, lineHeight: 1.8 }}>
          CI/CD pipeline: Jenkins triggers SSH deployment into a Dockerized Ubuntu VM,
          running Nginx as a reverse proxy in front of the Node.js application.
        </p>

        {/* diagram frame */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ border: `1.5px solid rgba(29,53,87,0.13)`, backgroundColor: "#dfd09b" }}
        >
          <div
            className="px-5 py-3 flex items-center gap-2"
            style={{ borderBottom: `1px solid rgba(29,53,87,0.1)` }}
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: red }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: navy, opacity: 0.22 }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: navy, opacity: 0.1 }} />
            <span className="ml-3 text-xs font-medium" style={{ color: "rgba(29,53,87,0.33)" }}>
              SeriouSaleh/portfolio-website-project — architecture diagram
            </span>
          </div>
          <div className="p-6 md:p-10" style={{ backgroundColor: "#f5ede8" }}>
            <ImageWithFallback
              src={archDiagram}
              alt="Architecture diagram: Jenkins CI/CD → SSH → Docker on Ubuntu VM (Nginx + Node-app) ↔ GitHub repo SeriouSaleh/portfolio-website-project"
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>

        {/* summary cards */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {cards.map((item) => (
            <div
              key={item.label}
              className="rounded-lg p-5 transition-colors duration-150"
              style={{ border: `1.5px solid rgba(29,53,87,0.12)`, backgroundColor: "rgba(29,53,87,0.04)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(29,53,87,0.09)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(29,53,87,0.04)")}
            >
              <p className="text-xs tracking-widest uppercase mb-1 font-semibold" style={{ color: "rgba(29,53,87,0.37)" }}>
                {item.label}
              </p>
              <p className="text-base font-semibold mb-0.5" style={{ color: navy }}>{item.value}</p>
              <p className="text-xs" style={{ color: "rgba(29,53,87,0.42)" }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CONTACT ──────────────────────── */
function ContactTab() {
  const contacts = [
    {
      id: "linkedin",
      label: "LinkedIn",
      display: "Seriousaleh",
      href: "https://www.linkedin.com/in/seriousaleh",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      id: "phone",
      label: "Phone",
      display: "09194108548",
      href: "tel:+989194108548",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: "github",
      label: "GitHub",
      display: "SeriouSaleh/portfolio-website-project",
      href: "https://github.com/SeriouSaleh/portfolio-website-project",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden>
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-[calc(100vh-5rem)] px-10 md:px-20 lg:px-32 py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: red }}>
          Get in Touch
        </p>
        <h2
          className="mb-3 leading-tight"
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: navy,
          }}
        >
          Contact
        </h2>
        <p className="text-sm mb-12" style={{ color: "rgba(29,53,87,0.5)", fontWeight: 300, lineHeight: 1.8 }}>
          Feel free to reach out via any of the channels below.
        </p>

        <div className="space-y-4">
          {contacts.map((c) => (
            <a
              key={c.id}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-lg p-5 transition-all duration-200"
              style={{
                border: `1.5px solid rgba(29,53,87,0.13)`,
                backgroundColor: "rgba(29,53,87,0.04)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(29,53,87,0.08)";
                e.currentTarget.style.borderColor = `rgba(230,57,70,0.38)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(29,53,87,0.04)";
                e.currentTarget.style.borderColor = `rgba(29,53,87,0.13)`;
              }}
            >
              {/* icon bubble */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
                style={{ backgroundColor: "rgba(29,53,87,0.09)", color: navy }}
              >
                {c.icon}
              </div>

              {/* text */}
              <div className="min-w-0 flex-1">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-0.5"
                  style={{ color: "rgba(29,53,87,0.37)" }}
                >
                  {c.label}
                </p>
                <p className="text-sm font-medium truncate" style={{ color: navy }}>
                  {c.display}
                </p>
              </div>

              {/* arrow */}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "rgba(29,53,87,0.22)" }}
                aria-hidden
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
