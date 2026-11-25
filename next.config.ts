import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML/CSS/JS site to /out,
// which Cloudflare Pages (or any static host) can serve for free.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
