import { useEffect, useState } from "react"
import { profile, projects, stack } from "./data"

function ThemeToggle() {
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark"),
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    try {
      localStorage.setItem("theme", dark ? "dark" : "light")
    } catch {
      /* storage can be unavailable in private windows */
    }
  }, [dark])

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid size-9 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
    >
      {dark ? (
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  )
}

function Header() {
  const links = [
    ["Work", "#work"],
    ["Stack", "#stack"],
    ["Contact", "#contact"],
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-medium tracking-tight">
          {profile.name}
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hidden rounded-full px-3 py-1.5 text-sm text-muted transition hover:text-fg sm:block"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{profile.name}</p>
      <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl">
        Backend &amp; DevOps
        <br />
        Engineer
      </h1>
      <div className="mt-7 h-px w-16 bg-accent" />
      <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty">{profile.lead}</p>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-mono text-xs text-accent">{n}</span>
      <h2 className="text-sm font-medium tracking-[0.18em] uppercase">{title}</h2>
    </div>
  )
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionLabel n="01" title="Selected work" />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`group relative flex flex-col rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 ${
              p.featured ? "sm:col-span-2 sm:p-8" : ""
            }`}
          >
            <h3 className={`font-semibold tracking-tight ${p.featured ? "text-2xl" : "text-lg"}`}>{p.name}</h3>
            <p className="mt-1 font-mono text-xs text-accent">{p.tagline}</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted text-pretty">{p.blurb}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionLabel n="02" title="Stack" />
      <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {stack.map((s) => (
          <div key={s.group}>
            <dt className="font-mono text-xs tracking-[0.15em] text-muted uppercase">{s.group}</dt>
            <dd className="mt-3 flex flex-wrap gap-x-2 gap-y-2">
              {s.items.map((i) => (
                <span key={i} className="rounded-lg border border-line px-3 py-1.5 text-sm">
                  {i}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionLabel n="03" title="Contact" />
      <p className="max-w-lg text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl">
        Have something you want built properly?
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block font-mono text-sm text-accent underline-offset-4 hover:underline"
      >
        {profile.email}
      </a>
      <div className="mt-10 flex gap-3">
        {[
          ["GitHub", profile.github],
          ["LinkedIn", profile.linkedin],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Stack />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="font-mono text-xs">Built with React, Vite &amp; Tailwind</span>
        </div>
      </footer>
    </>
  )
}
