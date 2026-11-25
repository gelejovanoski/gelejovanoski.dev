import { stats } from "@/data/content";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section aria-label="Highlights" className="border-y border-line">
      <dl className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 px-6 py-10 sm:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.value} delay={i * 100} className="flex flex-col-reverse justify-end gap-1">
            <dt className="text-[15px] text-muted">{s.label}</dt>
            <dd className="whitespace-nowrap font-display text-[clamp(32px,3.2vw,40px)] font-bold leading-tight tracking-[-0.03em]">
              {s.value}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
