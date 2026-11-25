import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  alternates: { canonical: "/" },
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    "Gele Jovanoski",
    "Senior Full Stack Developer",
    "PHP developer",
    "Symfony",
    "Laravel",
    "WordPress developer",
    "React",
    "North Macedonia",
    "remote developer",
  ],
  openGraph: {
    type: "profile",
    url: "/",
    title,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/gele.jpg", width: 640, height: 800, alt: site.name }],
  },
  twitter: { card: "summary", title, description: site.description, images: ["/gele.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#0f1115",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks that JS is on, so reveal animations never hide content without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
