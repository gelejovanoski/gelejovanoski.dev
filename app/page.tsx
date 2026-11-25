import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import { site } from "@/data/content";

// Structured data so search engines understand who this page is about.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  image: `${site.url}/gele.jpg`,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressCountry: "MK" },
  sameAs: [site.linkedin, site.github],
  knowsAbout: ["PHP", "Symfony", "Laravel", "WordPress", "React", "TypeScript", "REST APIs"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
