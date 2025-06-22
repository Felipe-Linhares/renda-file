import type { NextConfig } from "next";

// Configuração do basePath baseado no ambiente
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/renda-file-catalogo" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  // Configuração adicional para GitHub Pages
  distDir: "out",
  // Remove generateBuildId para usar o hash padrão do Next.js
};

export default nextConfig;
