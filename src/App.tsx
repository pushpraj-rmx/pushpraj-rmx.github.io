import { useEffect, useState } from "react"
import { flagship, profile, projects, services, stack, stats, tooling } from "./data"

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
    ["MsgBuddy", "#flagship"],
    ["Work", "#work"],
    ["Services", "#services"],
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
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <div>
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Available for work</p>
      <h1 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl">
        Backend &amp; DevOps Engineer
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
      </div>

      <dl className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
        {stats.map((st, i) => (
          <div key={st.label} className={i > 0 ? "mt-6 border-t border-line pt-6" : ""}>
            <dt className="text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">{st.value}</dt>
            <dd className="mt-1 text-sm font-medium">{st.label}</dd>
            <dd className="mt-1 font-mono text-[11px] leading-relaxed text-muted">{st.note}</dd>
          </div>
        ))}
      </dl>
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

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

function Flagship() {
  return (
    <section id="flagship" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionLabel n="01" title="Flagship" />
      <div className="rounded-2xl border border-line bg-surface p-6 sm:p-9">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{flagship.name}</h3>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            live in production
          </span>
        </div>
        <p className="mt-2 font-mono text-sm text-accent">{flagship.tagline}</p>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-pretty">{flagship.plain}</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted text-pretty">{flagship.blurb}</p>

        <div className="mt-7 flex flex-wrap gap-2">
          {flagship.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-sm transition hover:border-accent hover:text-accent"
            >
              {l.label}
              <ArrowUpRight />
            </a>
          ))}
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {flagship.shots.map((shot) => (
            <figure key={shot.src} className="overflow-hidden rounded-xl border border-line">
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                width="1200"
                height="609"
                className="block w-full"
              />
              <figcaption className="border-t border-line bg-bg px-3 py-2 font-mono text-[11px] text-muted">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-9 border-t border-line pt-7">
          <p className="font-mono text-xs tracking-[0.15em] text-muted uppercase">Surfaces</p>
          <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {flagship.surfaces.map((s) => (
              <div key={s.name} className="border-l-2 border-line pl-4 transition hover:border-accent">
                <h4 className="font-medium">{s.name}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted text-pretty">{s.blurb}</p>
                <p className="mt-2 font-mono text-[11px] text-muted/80">{s.tech.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-9 flex flex-wrap gap-2 border-t border-line pt-7">
          {flagship.tech.map((t) => (
            <li key={t} className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-y border-line bg-surface/60 py-20">
      <div className="mx-auto max-w-5xl px-6">
      <SectionLabel n="02" title="Selected work" />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group relative flex flex-col rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50"
          >
            <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
            <p className="mt-1 font-mono text-xs text-accent">{p.tagline}</p>
            <p className="mt-4 leading-relaxed text-pretty">{p.plain}</p>
            <p className="mt-2.5 text-sm leading-relaxed text-muted text-pretty">{p.blurb}</p>
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

      <div className="mt-10 rounded-2xl border border-dashed border-line p-6">
        <p className="font-mono text-xs tracking-[0.15em] text-muted uppercase">Also maintained</p>
        <h3 className="mt-3 font-semibold tracking-tight">{tooling.name}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted text-pretty">{tooling.blurb}</p>
        <p className="mt-3 font-mono text-[11px] text-muted/80">{tooling.tech.join(" · ")}</p>
      </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionLabel n="03" title="What I can help with" />
      <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
        {services.map((s, i) => (
          <div key={s.title}>
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 text-lg font-medium tracking-tight">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted text-pretty">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionLabel n="04" title="Stack" />
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
      <SectionLabel n="05" title="Contact" />
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
        <Flagship />
        <Work />
        <Services />
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
