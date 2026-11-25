// All portfolio content lives here, so the site can be updated
// without touching any component code.

export type Project = {
  title: string;
  meta: string;
  description: string;
  tags: string[];
  /** Live site, if the project is public. */
  url?: string;
  /** Screenshot in /public/projects, e.g. "/projects/deakom.png". */
  image?: string;
  /** The image is an illustrative mockup (client work under NDA). */
  illustrative?: boolean;
  /** Shown instead of a link when the project isn't public (yet). */
  note?: { text: string; icon: "lock" | "clock" };
};

export type Job = {
  period: string;
  role: string;
  company?: string;
  description: string;
};

export type Skill = { name: string; level: number };
export type SkillGroup = { title: string; skills: Skill[] };

export const site = {
  name: "Gele Jovanoski",
  role: "Senior Full Stack Developer",
  url: "https://gelejovanoski.dev",
  email: "gelejovanosky@gmail.com",
  linkedin: "https://www.linkedin.com/in/gelejovanoski",
  github: "https://github.com/gelejovanoski",
  location: "Skopje / Gostivar, North Macedonia",
  cv: "/Gele_Jovanoski_CV.pdf",
  description:
    "Gele Jovanoski is a Senior Full Stack Developer with 10+ years of experience in PHP (Symfony, Laravel, CakePHP, CodeIgniter), WordPress, React and TypeScript, available for remote roles and freelance projects.",
};

export const stats = [
  { value: "10+", label: "years of professional experience" },
  { value: "Many", label: "PHP frameworks: Laravel, Symfony, CakePHP, CodeIgniter" },
  { value: "Full Stack", label: "from plan to launch: code, database, security, SEO" },
  { value: "WordPress", label: "custom themes built from scratch" },
];

export const projects: Project[] = [
  {
    title: "Smart-ticketing platform",
    meta: "Proxiad SEE · 2022–2026",
    description:
      "Multi-tenant ticketing SaaS for public transport in several cities, used by 1M+ passengers. Symfony and CakePHP services talking over RabbitMQ and Pub/Sub.",
    tags: ["Symfony", "CakePHP", "PostgreSQL", "RabbitMQ", "Kubernetes"],
    image: "/projects/ticketing.svg",
    illustrative: true,
    note: { text: "Client platform under NDA · no public link", icon: "lock" },
  },
  {
    title: "Kat Star Nedviznosti",
    meta: "Freelance · Real estate",
    description:
      "Real-estate portal with property search by city, type, rooms, price and size, listings for sale and rent, and virtual tours.",
    tags: ["Property search", "Listings", "Multilingual"],
    url: "https://katstarnedviznosti.mk",
    image: "/projects/katstar.jpg",
  },
  {
    title: "Holland MK",
    meta: "Freelance · Wood construction",
    description:
      "Website for a company that builds modern wooden weekend houses inspired by the Netherlands, with models, the build process and a price calculator.",
    tags: ["Website", "Price calculator", "Bilingual"],
    url: "https://holland.mk",
    image: "/projects/holland.jpg",
  },
  {
    title: "Deakom",
    meta: "Freelance · WordPress",
    description:
      "Website for a construction and real-estate company, built in WordPress and handed over to the client after launch.",
    tags: ["WordPress", "Elementor"],
    url: "https://dea-kom.com.mk",
    image: "/projects/deakom.jpg",
  },
  {
    title: "Auto Meklaren",
    meta: "Freelance · 2026",
    description:
      "A vehicle inspection centre and driving school in one. I built the whole website and handle its hosting.",
    tags: ["Website", "Hosting", "SEO"],
    url: "https://automeklaren.mk",
    image: "/projects/automeklaren.jpg",
  },
  {
    title: "Ivelso — Ивел Карбо",
    meta: "Freelance · 2026",
    description:
      "Website and online shop for a CNC metal fabrication company in Gostivar: laser cutting, welding, bending and powder coating, in Macedonian and English.",
    tags: ["WordPress", "WooCommerce", "Bilingual"],
    image: "/projects/ivelso.jpg",
    note: { text: "Launching soon", icon: "clock" },
  },
];

export const experience: Job[] = [
  {
    period: "Oct 2026 — now",
    role: "Freelance Web Developer",
    description:
      "Websites for local businesses in automotive, construction, real estate and metal fabrication, from requirements through design, content and launch.",
  },
  {
    period: "Dec 2022 — Aug 2026",
    role: "Senior Full Stack Developer",
    company: "Proxiad SEE",
    description:
      "Symfony and CakePHP services and REST APIs for a multi-tenant smart-ticketing SaaS. PostgreSQL optimisation, Codeception tests, CI/CD with GitHub Actions and Jenkins, daily code review.",
  },
  {
    period: "Jun 2021 — Dec 2022",
    role: "Full Stack Web Developer",
    company: "Xessable",
    description:
      "Web applications, custom CMS platforms and microservices with Symfony, Laravel, CodeIgniter and WordPress.",
  },
  {
    period: "Sep 2016 — May 2021",
    role: "Full Stack Web Developer",
    company: "Piksel Ltd",
    description:
      "Business portals and custom CMS platforms built from scratch with CodeIgniter and MySQL. Introduced automated testing with Codeception.",
  },
  {
    period: "Apr 2015 — Aug 2016",
    role: "Full Stack Developer",
    company: "Digital Dreams Team · EANDU Solutions",
    description: "Web applications and custom CMS solutions on CodeIgniter, MySQL and jQuery.",
  },
  {
    period: "2010 — 2014",
    role: "BSc Computer Science",
    company: "South East European University",
    description: "Tetovo, North Macedonia.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: 95 },
      { name: "Laravel", level: 90 },
      { name: "Symfony", level: 85 },
      { name: "CakePHP", level: 80 },
      { name: "CodeIgniter", level: 80 },
      { name: "REST APIs & microservices", level: 90 },
    ],
  },
  {
    title: "Data & messaging",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 65 },
      { name: "Doctrine ORM", level: 80 },
      { name: "RabbitMQ / Pub/Sub", level: 75 },
    ],
  },
  {
    title: "Frontend & CMS",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript / jQuery", level: 85 },
      { name: "Tailwind / Bootstrap", level: 85 },
      { name: "WordPress — custom themes", level: 90 },
      { name: "React", level: 70 },
      { name: "TypeScript", level: 60 },
    ],
  },
  {
    title: "Quality, delivery & tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Code review", level: 90 },
      { name: "Testing (Codeception)", level: 80 },
      { name: "Web security", level: 80 },
      { name: "SEO optimization", level: 80 },
      { name: "GitHub Actions / Jenkins", level: 70 },
      { name: "Docker / Kubernetes", level: 60 },
      { name: "Claude Code", level: 80 },
    ],
  },
];
