import { useState, type FormEvent, type ReactNode } from "react"
import { flagship, profile, projects, services, stack, stats, tooling } from "./data"

const container = "mx-auto max-w-[1120px] px-5 sm:px-7"
const eyebrow = "font-mono text-[11px] tracking-[0.12em] uppercase"

function Nav() {
  const links = [
    ["Work", "#work"],
    ["Services", "#services"],
    ["Stack", "#stack"],
  ]
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className={`${container} flex flex-wrap items-center justify-between gap-4 py-5 sm:py-6`}>
        <a href="#top" className="font-bold tracking-tight hover:text-fg">
          {profile.name.split(" ")[0]}
        </a>
        <div className="flex items-center gap-5 text-sm sm:gap-8">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hidden text-muted transition hover:text-fg sm:inline">
              {label}
            </a>
          ))}
          <a href="#contact" className="border-b border-accent pb-0.5 transition hover:text-accent">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const [first, second] = profile.headline
  return (
    <header id="top" className="border-b border-line pt-20 pb-16 sm:pt-24 sm:pb-[72px]">
      <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className={`${eyebrow} text-xs text-accent`}>{profile.role}</span>
        <span className={`${eyebrow} inline-flex items-center gap-2 text-muted`}>
          <span className="size-1.5 rounded-full bg-accent [animation:pulse-dot_2s_ease-in-out_infinite]" />
          Available for work
        </span>
      </div>
      <h1 className="text-[clamp(44px,7vw,84px)] leading-none font-bold tracking-[-0.04em] text-pretty">
        {first}
        <br />
        <span className="text-dim">{second}</span>
      </h1>
      <div className="mt-12 flex flex-wrap items-end justify-between gap-8 sm:mt-[52px]">
        <p className="max-w-[46ch] leading-[1.7] text-muted text-pretty">{profile.lead}</p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#work"
            className="bg-accent px-6 py-3.5 font-mono text-[13px] font-semibold text-bg transition hover:bg-accent-hi hover:text-bg"
          >
            Selected work ↓
          </a>
          <a
            href="#contact"
            className="border border-accent px-6 py-3.5 font-mono text-[13px] transition hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}

function Metrics() {
  return (
    <div className="grid grid-cols-1 border-b border-line sm:grid-cols-3">
      {stats.map((st, i) => (
        <div
          key={st.label}
          className={`flex flex-col gap-1.5 py-6 sm:py-7 ${
            i > 0 ? "border-t border-line sm:border-t-0 sm:border-l sm:pl-7" : ""
          }`}
        >
          <span className="text-[26px] font-bold tracking-[-0.02em] tabular-nums">{st.value}</span>
          <span className={`${eyebrow} text-dim`}>{st.label}</span>
          <span className="text-xs text-dim/80">{st.note}</span>
        </div>
      ))}
    </div>
  )
}

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-b border-line py-16 sm:py-20">
      <div className="mb-11 flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="text-[34px] font-bold tracking-[-0.03em]">{title}</h2>
        <span className={`${eyebrow} text-xs text-dim`}>
          {n} / {id}
        </span>
      </div>
      {children}
    </section>
  )
}

function Flagship() {
  return (
    <div className="border-t border-line py-8 sm:py-10">
      <div className="grid gap-x-6 gap-y-3 sm:grid-cols-[72px_minmax(0,1fr)]">
        <span className="font-mono text-[13px] text-accent">001</span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-[32px] font-semibold tracking-[-0.02em] sm:text-[40px]">{flagship.name}</h3>
            <span className={`${eyebrow} inline-flex items-center gap-2 text-accent`}>
              <span className="size-1.5 rounded-full bg-accent [animation:pulse-dot_2s_ease-in-out_infinite]" />
              Live in production
            </span>
          </div>
          <p className="mt-1.5 font-mono text-[13px] text-dim">{flagship.tagline}</p>
          <p className="mt-5 max-w-[64ch] text-lg leading-[1.6] text-pretty">{flagship.plain}</p>
          <p className="mt-3 max-w-[72ch] text-sm leading-[1.7] text-muted text-pretty">{flagship.blurb}</p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px]">
            {flagship.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="border-b border-accent/40 pb-0.5 text-accent transition hover:text-accent-hi"
              >
                {l.label} ↗
              </a>
            ))}
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {flagship.shots.map((shot) => (
              <figure key={shot.src} className="overflow-hidden border border-line">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  width="1200"
                  height="609"
                  className="block w-full opacity-90 transition hover:opacity-100"
                />
                <figcaption className="border-t border-line px-3 py-2 font-mono text-[11px] text-dim">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 grid gap-x-7 sm:grid-cols-2 lg:grid-cols-3">
            {flagship.surfaces.map((s) => (
              <div key={s.name} className="border-t border-line py-5">
                <h4 className={`${eyebrow} text-accent`}>{s.name}</h4>
                <p className="mt-2.5 text-sm leading-[1.65] text-muted text-pretty">{s.blurb}</p>
                <p className="mt-2.5 font-mono text-[11px] text-dim">{s.tech.join(" · ")}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 font-mono text-xs leading-relaxed text-dim">{flagship.tech.join(" · ")}</p>
        </div>
      </div>
    </div>
  )
}

function Work() {
  return (
    <Section id="work" n="01" title="Selected work">
      <Flagship />
      {projects.map((p, i) => (
        <article
          key={p.name}
          className="grid gap-x-6 gap-y-2 border-t border-line py-7 transition hover:bg-accent/[0.03] sm:grid-cols-[72px_minmax(0,1fr)] sm:py-8"
        >
          <span className="font-mono text-[13px] text-dim">{String(i + 2).padStart(3, "0")}</span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">{p.name}</h3>
              <span className="font-mono text-[12px] text-dim">{p.tagline}</span>
            </div>
            <p className="mt-2 max-w-[68ch] leading-[1.6] text-pretty">{p.plain}</p>
            <p className="mt-1.5 max-w-[72ch] text-sm leading-[1.6] text-muted text-pretty">
              {p.blurb} <span className="text-dim">{p.tech.join(" · ")}</span>
            </p>
          </div>
        </article>
      ))}
      <div className="grid gap-x-6 gap-y-2 border-t border-dashed border-line pt-7 sm:grid-cols-[72px_minmax(0,1fr)] sm:pt-8">
        <span className={`${eyebrow} text-dim`}>Also</span>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-[-0.01em]">{tooling.name}</h3>
          <p className="mt-1.5 max-w-[72ch] text-sm leading-[1.6] text-muted text-pretty">
            {tooling.blurb} <span className="text-dim">{tooling.tech.join(" · ")}</span>
          </p>
        </div>
      </div>
    </Section>
  )
}

function Services() {
  return (
    <Section id="services" n="02" title="What I can help with">
      <div>
        {services.map((s, i) => (
          <div
            key={s.title}
            className="grid gap-x-6 gap-y-2 border-t border-line py-7 last:border-b sm:grid-cols-[minmax(140px,200px)_minmax(0,1fr)]"
          >
            <span className="font-mono text-[13px] text-dim">{String(i + 1).padStart(2, "0")}</span>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold tracking-[-0.01em]">{s.title}</h3>
              <p className="mt-2 max-w-[64ch] text-sm leading-[1.7] text-muted text-pretty">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Stack() {
  return (
    <Section id="stack" n="03" title="Stack">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-7 gap-y-10">
        {stack.map((s) => (
          <div key={s.group} className="flex flex-col gap-4">
            <div className={`${eyebrow} border-b border-line pb-3 tracking-[0.14em] text-accent`}>{s.group}</div>
            <ul className="text-[15px] leading-[2.1] text-muted">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex min-w-0 flex-col gap-2.5">
      <span className={`${eyebrow} tracking-[0.14em] text-dim`}>{label}</span>
      {children}
    </label>
  )
}

const inputClass =
  "min-w-0 border-0 border-b border-line bg-transparent py-2 text-[15px] text-fg outline-none placeholder:text-dim/70 focus:border-accent"

function Contact() {
  const [sent, setSent] = useState(false)

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name"))
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${name} (${data.get("email")})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <footer id="contact" className="scroll-mt-20 pt-20 pb-16 sm:pt-24 sm:pb-[72px]">
      <span className={`${eyebrow} text-xs text-dim`}>04 / Contact</span>
      <h2 className="mt-6 text-[clamp(36px,5.5vw,64px)] leading-[1.05] font-bold tracking-[-0.04em] text-pretty">
        Have something you want
        <br />
        <span className="text-dim">built properly?</span>
      </h2>

      <div className="mt-11 grid items-start gap-14 md:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-4">
          <p className="max-w-[44ch] text-[15px] leading-[1.7] text-muted text-pretty">
            Open to full-time roles and contract work. Tell me what you're building — I usually reply within a
            day.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="self-start border-b border-accent/40 pb-1 font-mono text-[15px] break-all text-accent transition hover:text-accent-hi"
          >
            {profile.email}
          </a>
        </div>

        <form onSubmit={submit} className="flex min-w-0 flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name">
              <input name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
            </Field>
            <Field label="Email">
              <input name="email" type="email" required placeholder="jane@company.com" className={inputClass} />
            </Field>
          </div>
          <Field label="Message">
            <textarea
              name="message"
              required
              rows={4}
              placeholder="What are you building?"
              className={`${inputClass} resize-y leading-[1.6]`}
            />
          </Field>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="cursor-pointer bg-accent px-7 py-3.5 font-mono text-[13px] font-semibold text-bg transition hover:bg-accent-hi"
            >
              Send message →
            </button>
            {sent && <span className="font-mono text-xs text-accent">✓ Opening your mail client…</span>}
          </div>
        </form>
      </div>

      <div className="mt-[72px] flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 font-mono text-xs">
        <div className="flex gap-7 tracking-[0.08em]">
          {[
            ["GITHUB", profile.github],
            ["LINKEDIN", profile.linkedin],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="text-muted transition hover:text-accent">
              {label}
            </a>
          ))}
        </div>
        <span className="text-dim">
          © {new Date().getFullYear()} {profile.name.toUpperCase()}
        </span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <div className={container}>
        <main>
          <Hero />
          <Metrics />
          <Work />
          <Services />
          <Stack />
        </main>
        <Contact />
      </div>
    </>
  )
}
