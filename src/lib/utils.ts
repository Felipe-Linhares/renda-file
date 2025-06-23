// Função utilitária para prefixar assets com basePath em produção
export function getAssetPath(path: string): string {
  // Se não começa com /, retorna como está (URLs relativas)
  if (!path.startsWith("/")) {
    return path;
  }

  // Se já tem o basePath, retorna como está
  if (path.startsWith("/renda-file-catalogo/")) {
    return path;
  }

  // Verifica se está em ambiente do GitHub Pages
  const isGitHubPages =
    process.env.NODE_ENV === "production" &&
    process.env.GITHUB_PAGES === "true";

  // Se estiver no GitHub Pages, adiciona basePath
  if (isGitHubPages) {
    return `/renda-file-catalogo${path}`;
  }

  return path;
}
