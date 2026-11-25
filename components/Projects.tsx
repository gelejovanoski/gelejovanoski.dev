import Image from "next/image";
import { projects, type Project } from "@/data/content";
import { ArrowUpRight, Clock, Lock } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const host = project.url ? new URL(project.url).hostname : null;

  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface hover:border-line-strong"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.illustrative ? "Illustrative mockup" : "Screenshot"} of ${project.title}`}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
          />
        ) : (
          <div className="placeholder-stripes flex size-full items-center justify-center p-6">
            <span
              aria-hidden="true"
              className="font-display text-2xl font-bold tracking-[-0.02em] text-line-strong"
            >
              {project.title}
            </span>
          </div>
        )}
        {project.illustrative && (
          <span className="absolute bottom-3 right-3 rounded-md bg-ink/80 px-2.5 py-1 font-mono text-[11px] text-soft backdrop-blur">
            Illustrative mockup
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-7">
        <span className="font-mono text-[13px] text-muted">{project.meta}</span>
        <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{project.title}</h3>
        <p className="text-muted">{project.description}</p>

        <ul className="mt-1 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} className="rounded-md bg-raised px-2.5 py-1 font-mono text-[13px] text-soft">
              {t}
            </li>
          ))}
        </ul>

        {project.url && host && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-2 font-medium transition-colors hover:text-accent"
          >
            {host}
            <ArrowUpRight />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}

        {!project.url && project.note && (
          <p className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-2 text-sm text-muted">
            {project.note.icon === "lock" ? <Lock /> : <Clock />}
            {project.note.text}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 pb-10 pt-24 sm:px-8 md:pt-28"
    >
      <SectionHeading
        id="work-title"
        index="03"
        label="Selected work"
        title="Things I've built"
        intro="Large platforms and websites for businesses, at home and abroad."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={(i % 2) * 120} />
        ))}
      </div>
    </section>
  );
}
