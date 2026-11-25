import Image from "next/image";
import { site } from "@/data/content";
import { ArrowRight, Download } from "./Icons";
import Reveal from "./Reveal";

const profile: [string, string][] = [
  ["role", '"Senior Full Stack Developer"'],
  ["experience", '"10+ years"'],
  ["backend", '["PHP", "Symfony", "Laravel", "WordPress"]'],
  ["frontend", '["React", "TypeScript", "Tailwind"]'],
  ["open_to", '["remote", "contract", "freelance"]'],
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-6 pb-20 pt-16 sm:px-8 md:pt-24"
    >
      <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-6">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 font-mono text-sm text-muted">
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-online opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-online" />
            </span>
            Available for work · {site.location}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1
            id="hero-title"
            className="font-display text-[clamp(42px,6vw,76px)] font-bold leading-[1.02] tracking-[-0.035em]"
          >
            Web apps that are clean, fast and <span className="text-accent">built to last.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="max-w-[600px] text-[19px] leading-relaxed text-muted">
            I&apos;m {site.name}, a Senior Full Stack Developer with 10+ years of experience. I take
            projects from the first plan to a live launch: scalable PHP backends and APIs, fast React
            interfaces, and custom WordPress themes built from scratch. Every one is secure,
            SEO-ready and easy to maintain.
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-2 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center gap-2 rounded-[10px] bg-accent px-[22px] font-semibold text-ink transition-opacity hover:opacity-90"
          >
            See my work
            <ArrowRight />
          </a>
          <a
            href={site.cv}
            download
            className="inline-flex min-h-12 items-center gap-2 rounded-[10px] border border-line-strong px-[22px] font-medium transition-colors hover:border-muted"
          >
            <Download />
            Download CV
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center rounded-[10px] border border-line-strong px-[22px] font-medium transition-colors hover:border-muted"
          >
            LinkedIn
          </a>
        </Reveal>
      </div>

      <Reveal
        delay={250}
        className="mx-auto flex w-full min-w-0 max-w-[440px] flex-[1_1_340px] flex-col gap-4"
      >
        <div className="overflow-hidden rounded-[20px] border border-line bg-surface">
          <Image
            src="/gele.jpg"
            alt={`Portrait of ${site.name}`}
            width={640}
            height={800}
            loading="eager"
            fetchPriority="high"
            className="aspect-square h-auto w-full object-cover object-top"
          />
        </div>

        <div className="overflow-hidden rounded-[14px] border border-line bg-surface">
          <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-[#3a3f4a]" />
            <span aria-hidden="true" className="size-2.5 rounded-full bg-[#3a3f4a]" />
            <span aria-hidden="true" className="size-2.5 rounded-full bg-[#3a3f4a]" />
            <span className="ml-2 font-mono text-xs text-muted">gele.json</span>
          </div>
          <pre className="whitespace-pre-wrap break-words px-5 py-4 font-mono text-[12.5px] leading-[1.7] text-soft">
            {"{\n"}
            {profile.map(([key, value], i) => (
              <span key={key}>
                {"  "}
                <span className="text-accent">&quot;{key}&quot;</span>: {value}
                {i < profile.length - 1 ? ",\n" : "\n"}
              </span>
            ))}
            {"}"}
          </pre>
        </div>
      </Reveal>
    </section>
  );
}
