import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: "out",
  // Configuração para GitHub Pages
  ...(isProd &&
    isGitHubPages && {
      basePath: "/renda-file-catalogo",
      assetPrefix: "/renda-file-catalogo",
    }),
};

export default nextConfig;
