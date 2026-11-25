import Reveal from "./Reveal";

type Props = {
  index: string;
  label: string;
  title: string;
  intro?: string;
  id: string;
};

export default function SectionHeading({ index, label, title, intro, id }: Props) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-4">
      <div className="flex flex-col gap-2.5">
        <span className="font-mono text-sm text-accent">
          {index} / {label}
        </span>
        <h2
          id={id}
          className="font-display text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em]"
        >
          {title}
        </h2>
      </div>
      {intro && <p className="max-w-md text-muted">{intro}</p>}
    </Reveal>
  );
}
