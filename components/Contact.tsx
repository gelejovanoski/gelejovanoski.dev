import { site } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-[1200px] px-6 pb-24 pt-24 sm:px-8 md:pt-28"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-8 rounded-[20px] border border-line bg-surface p-[clamp(32px,6vw,72px)]">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-3.5">
          <span className="font-mono text-sm text-accent">04 / Contact</span>
          <h2
            id="contact-title"
            className="font-display text-[clamp(34px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.035em]"
          >
            Need a senior PHP developer? Let&apos;s talk.
          </h2>
          <p className="max-w-[520px] text-muted">
            I&apos;m open to remote roles, contracts and freelance projects, in Europe and
            worldwide.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-[52px] items-center break-all rounded-[10px] bg-accent px-6 font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {site.email}
          </a>
          <a
            href={site.cv}
            download
            className="inline-flex min-h-[52px] items-center rounded-[10px] border border-line-strong px-6 font-medium transition-colors hover:border-muted"
          >
            Download CV
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center rounded-[10px] border border-line-strong px-6 font-medium transition-colors hover:border-muted"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
