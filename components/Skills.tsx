"use client";

import { useEffect, useRef, useState } from "react";
import { skillGroups, type SkillGroup } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** True once the element has scrolled into view (fires only once). */
function useInView<T extends Element>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, threshold]);

  return { ref, inView };
}

function SkillCard({ group }: { group: SkillGroup }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="flex flex-col gap-5 rounded-[14px] border border-line bg-surface p-7">
      <h3 className="text-lg font-semibold">{group.title}</h3>
      <ul className="flex flex-col gap-5">
        {group.skills.map((skill, i) => (
          <li key={skill.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3 text-[15px]">
              <span>{skill.name}</span>
              <span className="font-mono text-sm text-muted">{skill.level}%</span>
            </div>
            <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-accent motion-safe:transition-[width] motion-safe:duration-1000 motion-safe:ease-out"
                style={{
                  width: inView ? `${skill.level}%` : "0%",
                  transitionDelay: `${i * 80}ms`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 pb-10 pt-24 sm:px-8 md:pt-28"
    >
      <SectionHeading
        id="skills-title"
        index="02"
        label="Skills"
        title="What I'm good at"
        intro="Everything a project needs, from the database to the browser."
      />
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 120}>
            <SkillCard group={g} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
