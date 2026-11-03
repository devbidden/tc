import React from "react";
import { createRoot } from "react-dom/client";
import logo from "../logo.jpg";
import "./style.css";

const socials = [
  {
    name: "X",
    handle: "@techriztm",
    href: "https://x.com/techriztm",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.9 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@techriztm",
    href: "https://instagram.com/techriztm",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="icon-fill" cx="17.5" cy="6.8" r="1" />
      </svg>
    ),
  },
    {
    name: "Telegram",
    handle: "@techriztm",
    href: "https://t.me/techriztm",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m21.5 4.3-3.2 15.1c-.2 1.1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L5.7 12.9.8 11.4c-1.1-.4-1.1-1.1.2-1.6L20.2 2c.9-.3 1.7.2 1.3 2.3Z" />
      </svg>
    ),
  },
];

function SocialLink({ name, handle, href, icon }) {
  return (
    <a
      className="social-link group flex items-center justify-between rounded-2xl border border-violet-100 bg-white px-4 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-950/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:px-5"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit Techriz on ${name} (opens in a new tab)`}
    >
      <span className="flex items-center gap-4">
        <span className="social-icon flex size-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
          {icon}
        </span>
        <span>
          <span className="block text-sm font-semibold text-slate-900">{name}</span>
          <span className="mt-0.5 block text-sm text-slate-500">{handle}</span>
        </span>
      </span>
      <svg
        className="size-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-violet-700"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 10h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f4ff] text-slate-900">
      <div className="pointer-events-none absolute -left-36 -top-40 size-96 rounded-full bg-violet-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-36 size-[30rem] rounded-full bg-fuchsia-200/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 sm:px-8">
        <header className="flex items-center justify-between py-7">
          <a href="#" className="flex items-center gap-2.5" aria-label="Techriz home">
            <img className="size-9 rounded-xl object-cover" src={logo} alt="" />
            <span className="text-base font-bold tracking-tight">techriz</span>
          </a>
          <span className="flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-violet-800">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Around the web
          </span>
        </header>

        <main className="flex flex-1 items-center justify-center py-12 sm:py-16">
          <div className="grid w-full max-w-4xl items-center gap-10 lg:grid-cols-[1fr_0.88fr] lg:gap-16">
            <section className="max-w-xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-violet-700">
                A little corner of the internet
              </p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-7xl">
                Hey, I’m
                <br />
                <span className="text-violet-700">Techriz.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Good to see you here. Find me on your favorite platform and
                let’s stay connected.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                <span className="flex -space-x-2">
                  {socials.map(({ name }, index) => (
                    <span
                      key={name}
                      className="flex size-8 items-center justify-center rounded-full border-2 border-[#f7f4ff] bg-violet-100 text-[10px] font-bold text-violet-700"
                      style={{ zIndex: socials.length - index }}
                    >
                      {name === "Instagram" ? "IG" : name === "Facebook" ? "f" : name === "Telegram" ? "↗" : "𝕏"}
                    </span>
                  ))}
                </span>
                <span>Pick a platform and say hello</span>
              </div>
            </section>

            <section
              className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-[0_24px_80px_-32px_rgba(76,29,149,0.22)] backdrop-blur sm:p-7"
              aria-labelledby="connect-heading"
            >
              <div className="mb-5 flex items-start justify-between px-1">
                <div>
                  <h2 id="connect-heading" className="text-lg font-semibold tracking-tight">
                    Let’s connect
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">Find me on these platforms</p>
                </div>
                <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700">
                  03 links
                </span>
              </div>
              <div className="space-y-3">
                {socials.map((social) => (
                  <SocialLink key={social.name} {...social} />
                ))}
              </div>
              <p className="mt-5 px-1 text-xs leading-5 text-slate-400">
                Choose your favorite place to follow along.
              </p>
            </section>
          </div>
        </main>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-violet-200/70 py-5 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} Techriz</span>
          <span className="flex items-center gap-1.5">
            Made for the internet <span className="text-violet-600" aria-hidden="true">✦</span>
          </span>
        </footer>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
