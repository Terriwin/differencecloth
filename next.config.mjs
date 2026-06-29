/** @type {import('next').NextConfig} */
// The app is portable to any plain Node host: `next build && next start` runs on
// a VPS with no Vercel-specific APIs. A fully self-contained bundle under
// .next/standalone is available on demand by building with
// NEXT_OUTPUT_STANDALONE=1 (e.g. for `node .next/standalone/server.js` on a VPS).
// It's off by default because `next start` is incompatible with standalone and
// Vercel must not use it (it breaks routing) — VERCEL=1 force-disables it.
const useStandalone =
  process.env.NEXT_OUTPUT_STANDALONE === "1" && !process.env.VERCEL;

const nextConfig = {
  output: useStandalone ? "standalone" : undefined,
  reactStrictMode: true,
};

export default nextConfig;
