"use client";

import { useEffect, useState } from "react";
import { Close, Menu } from "./Icons";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled || open ? "border-line bg-ink/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4 sm:px-8"
      >
        <a
          href="#top"
          onClick={close}
          className="font-display text-[22px] font-bold tracking-[-0.02em]"
        >
          gelejovanoski<span className="text-accent">.</span>dev
        </a>

        <div className="hidden items-center gap-7 text-[15px] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-lg bg-accent px-[18px] font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg border border-line-strong md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="flex min-h-12 items-center border-b border-line text-lg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={close}
            className="mt-5 flex min-h-12 items-center justify-center rounded-lg bg-accent font-semibold text-ink"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
