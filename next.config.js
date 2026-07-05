/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Every image source is our own trusted local asset in /public. next/image
    // rejects SVG by default; enable it so the tech-logo SVG icons can be
    // served, hardened with a strict CSP that sandboxes any served SVG.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig
