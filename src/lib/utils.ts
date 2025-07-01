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
  const isProduction = process.env.NODE_ENV === "production";
  const isGitHubPages = process.env.GITHUB_PAGES === "true";

  // Também verifica se está rodando no domínio próprio
  const isInCustomDomain =
    typeof window !== "undefined" &&
    window.location.hostname === "www.rendafiledeluxo.com.br";

  // Se estiver no GitHub Pages, adiciona basePath
  // No domínio próprio, usa o path direto
  if (isProduction && isGitHubPages && !isInCustomDomain) {
    return `/renda-file-catalogo${path}`;
  }

  return path;
}

// Função para formatar preços no padrão brasileiro
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}
