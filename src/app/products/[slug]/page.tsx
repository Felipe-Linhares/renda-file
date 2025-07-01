import { products } from "@/lib/data";
import { Metadata } from "next";
import ProductPageClient from "./ProductPageClient";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return {
      title: "Produto não encontrado | Renda Filé Artesanal",
      description: "O produto que você procura não foi encontrado.",
    };
  }

  return {
    title: `${product.name} | Renda Filé Artesanal`,
    description: `${product.description} Preço: R$ ${product.price.toFixed(
      2
    )}. ${product.dimensions}. Material: ${product.material}.`,
    keywords: `${product.name}, ${product.category}, renda filé, artesanal, ${product.material}`,
    openGraph: {
      title: `${product.name} | Renda Filé Artesanal`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Renda Filé Artesanal`,
      description: product.description,
      images: [product.image],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  return <ProductPageClient slug={slug} />;
}
