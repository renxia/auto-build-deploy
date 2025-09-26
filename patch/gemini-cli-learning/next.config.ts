import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/docs/gemini-cli-learning',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: 'out/docs/gemini-cli-learning',
  // For static export, we'll handle i18n client-side
  experimental: {
    typedRoutes: false,
  },
  // Configure page extensions to avoid conflicts
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Exclude special files from being treated as dynamic routes
  async generateBuildId() {
    return 'build'
  },
  // Temporarily disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Temporarily disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
