/** @type {import('next').NextConfig} */
const nextConfig = {
  // Portable, framework-agnostic output: produces a self-contained Node server
  // under .next/standalone so the app can run on any plain Node host / VPS.
  // No Vercel-specific APIs are used anywhere in this project.
  output: "standalone",
  reactStrictMode: true,
};

export default nextConfig;
