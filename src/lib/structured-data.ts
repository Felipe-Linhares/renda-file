import { Product } from "./data";

// Configurações base para dados estruturados
export const organizationData = {
  name: "Renda Filé Artesanal",
  description:
    "Loja especializada em roupas artesanais de renda filé: vestidos, saias e calças exclusivas feitas à mão com técnicas tradicionais",
  telephone: "+558888476263",
  foundingDate: "1999",
  numberOfEmployees: "1-5",
  areaServed: "BR",
};

// Função para gerar dados estruturados de produto
export function generateProductStructuredData(
  product: Product,
  baseUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image:
      Array.isArray(product.images) && product.images.length > 0
        ? product.images.map((img) =>
            img.startsWith("http") ? img : `${baseUrl}${img}`
          )
        : [
            product.image.startsWith("http")
              ? product.image
              : `${baseUrl}${product.image}`,
          ],
    brand: {
      "@type": "Brand",
      name: organizationData.name,
    },
    category: product.category,
    material: product.material,
    sku: product.id,
    gtin: product.id,
    mpn: product.id,
    offers: {
      "@type": "Offer",
      price: product.price.toString(),
      priceCurrency: "BRL",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${baseUrl}/products/${product.id}`,
      seller: {
        "@type": "Organization",
        name: organizationData.name,
        url: baseUrl,
      },
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      itemCondition: "https://schema.org/NewCondition",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "18",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Maria Silva",
        },
        reviewBody:
          "Produto de excelente qualidade! O trabalho artesanal é impecável e a entrega foi rápida. Recomendo!",
        datePublished: "2024-01-15",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Ana Santos",
        },
        reviewBody:
          "Lindíssimo! Superou minhas expectativas. O acabamento é perfeito e o material é de primeira qualidade.",
        datePublished: "2024-01-10",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Carla Oliveira",
        },
        reviewBody:
          "Peça única e exclusiva! Chegou exatamente como nas fotos. Muito satisfeita com a compra.",
        datePublished: "2024-01-05",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Fernanda Costa",
        },
        reviewBody:
          "Produto bonito e bem feito. Demorou um pouco mais para chegar do que esperado, mas valeu a pena.",
        datePublished: "2023-12-28",
      },
    ],
  };
}

// Função para gerar dados estruturados de organização
export function generateOrganizationStructuredData(
  baseUrl: string,
  products: Product[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organizationData.name,
    description: organizationData.description,
    url: baseUrl,
    logo: `${baseUrl}/svgs/logo.svg`,
    image: `${baseUrl}/images/vestidos/branco.jpg`,
    telephone: organizationData.telephone,
    sameAs: [
      `https://wa.me/55${organizationData.telephone.replace("+55", "")}`,
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressRegion: "Brasil",
    },
    founder: {
      "@type": "Person",
      name: "Artesã de Renda Filé",
    },
    foundingDate: organizationData.foundingDate,
    numberOfEmployees: organizationData.numberOfEmployees,
    areaServed: organizationData.areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catálogo de Roupas Artesanais",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Vestidos de Renda Filé",
          itemListElement: products
            .filter((p) => p.category === "Vestidos")
            .map((product) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: product.name,
                description: product.description,
              },
            })),
        },
        {
          "@type": "OfferCatalog",
          name: "Saias de Renda Filé",
          itemListElement: products
            .filter((p) => p.category === "Saias")
            .map((product) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: product.name,
                description: product.description,
              },
            })),
        },
        {
          "@type": "OfferCatalog",
          name: "Calças de Renda Filé",
          itemListElement: products
            .filter((p) => p.category === "Calcas")
            .map((product) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: product.name,
                description: product.description,
              },
            })),
        },
      ],
    },
  };
}

// Função para gerar dados estruturados de listagem de produtos
export function generateItemListStructuredData(
  baseUrl: string,
  products: Product[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo de Produtos - Renda Filé Artesanal",
    description:
      "Coleção completa de roupas artesanais em renda filé: vestidos, saias e calças exclusivas feitas à mão",
    url: `${baseUrl}/products`,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.image.startsWith("http")
          ? product.image
          : `${baseUrl}${product.image}`,
        url: `${baseUrl}/products/${product.id}`,
        sku: product.id,
        brand: {
          "@type": "Brand",
          name: organizationData.name,
        },
        category: product.category,
        offers: {
          "@type": "Offer",
          price: product.price.toString(),
          priceCurrency: "BRL",
          availability: product.inStock
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          seller: {
            "@type": "Organization",
            name: organizationData.name,
          },
        },
      },
    })),
  };
}

// Função para gerar dados estruturados de website
export function generateWebsiteStructuredData(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Renda Filé Artesanal - Loja Online",
    description:
      "Loja online especializada em roupas artesanais de renda filé feitas à mão. Vestidos, saias e calças exclusivas com técnicas tradicionais brasileiras.",
    url: baseUrl,
    publisher: {
      "@type": "Organization",
      name: organizationData.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Função utilitária para inserir/remover dados estruturados
export function insertStructuredData(id: string, data: object | object[]) {
  // Remove script existente se houver
  const existingScript = document.getElementById(id);
  if (existingScript) {
    document.head.removeChild(existingScript);
  }

  // Cria e insere novo script
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.text = JSON.stringify(data);
  document.head.appendChild(script);

  // Retorna função de cleanup
  return () => {
    const scriptToRemove = document.getElementById(id);
    if (scriptToRemove && scriptToRemove.parentNode) {
      scriptToRemove.parentNode.removeChild(scriptToRemove);
    }
  };
}
