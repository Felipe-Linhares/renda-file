// Função utilitária para prefixar assets com basePath em produção
export function getAssetPath(path: string): string {
  // Se já tem o basePath, retorna como está
  if (path.startsWith("/renda-file-catalogo/")) {
    return path;
  }

  // Verifica se está em ambiente do GitHub Pages
  const isGitHubPages =
    process.env.GITHUB_PAGES === "true" ||
    (typeof window !== "undefined" &&
      (window.location.hostname === "felipe-linhares.github.io" ||
        window.location.pathname.startsWith("/renda-file-catalogo")));

  // Se estiver no GitHub Pages e o path começar com /, adiciona basePath
  if (isGitHubPages && path.startsWith("/")) {
    return `/renda-file-catalogo${path}`;
  }

  return path;
}
