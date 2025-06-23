import type { NextConfig } from "next";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: "out",
  // Configuração específica para GitHub Pages
  ...(process.env.NODE_ENV === "production" &&
    process.env.GITHUB_PAGES === "true" && {
      basePath: "/renda-file-catalogo",
      assetPrefix: "/renda-file-catalogo",
    }),
};

export default nextConfig;
