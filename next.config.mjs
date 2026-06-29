/** @type {import('next').NextConfig} */
const nextConfig = {
  // Portable, framework-agnostic output: produces a self-contained Node server
  // under .next/standalone so the app can run on any plain Node host / VPS.
  // On Vercel (VERCEL=1) we must NOT use standalone — Vercel handles the Next.js
  // build output itself, and forcing standalone breaks routing (404s). So this is
  // enabled only for self-hosted builds. No Vercel-specific APIs are used.
  output: process.env.VERCEL ? undefined : "standalone",
  reactStrictMode: true,
};

export default nextConfig;
