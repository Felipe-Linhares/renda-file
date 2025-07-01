import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: "out",
  // Configurações para SEO
  experimental: {
    optimizeCss: true,
  },
  compress: true,
};

export default nextConfig;
