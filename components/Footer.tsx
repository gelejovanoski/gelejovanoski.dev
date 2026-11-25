import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-7 text-sm text-muted sm:px-8">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <div className="flex flex-wrap items-center gap-5">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            LinkedIn
          </a>
          <span className="font-mono">Built with Next.js, React &amp; TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
