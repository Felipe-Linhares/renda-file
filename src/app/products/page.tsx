import type { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
  title: "Catálogo de Produtos | Loja Renda Filé Artesanal",
  description:
    "Navegue por nossa coleção completa de vestidos, saias e calças em renda filé artesanal. Loja online com peças exclusivas feitas à mão. Filtre por categoria, preço e encontre a peça perfeita para você.",
  keywords:
    "catálogo produtos, loja renda filé, vestidos artesanais, saias artesanais, calças artesanais, roupas artesanais, filtrar produtos, pesquisar roupas, loja online artesanato, e-commerce moda artesanal, comprar vestidos, comprar saias, comprar calças, moda praia artesanal, roupas elegantes, peças sob medida, artesanato brasileiro, moda feminina artesanal",
  openGraph: {
    title: "Catálogo de Produtos | Loja Renda Filé Artesanal",
    description:
      "Navegue por nossa coleção completa de renda filé artesanal. Loja online com peças exclusivas.",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
