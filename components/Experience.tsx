import { experience } from "@/data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto flex max-w-[1200px] flex-wrap gap-14 px-6 pb-10 pt-24 sm:px-8 md:pt-28"
    >
      <Reveal className="flex min-w-0 flex-[1_1_300px] flex-col gap-2.5">
        <span className="font-mono text-sm text-accent">01 / Experience</span>
        <h2
          id="experience-title"
          className="font-display text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]"
        >
          Where I&apos;ve worked
        </h2>
        <p className="text-muted">English C1 · Serbian C1 · Macedonian native</p>
      </Reveal>

      <ol className="flex min-w-0 flex-[2_1_560px] flex-col border-b border-line">
        {experience.map((job) => (
          <Reveal
            as="li"
            key={`${job.period}-${job.role}`}
            className="grid gap-2 border-t border-line py-7 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6"
          >
            <span className="font-mono text-sm text-muted">{job.period}</span>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xl font-semibold">
                {job.role}
                {job.company && <span className="text-muted"> · {job.company}</span>}
              </h3>
              <p className="text-muted">{job.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
