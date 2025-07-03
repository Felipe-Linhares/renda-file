import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rendafiledeluxo.com.br/"),
  title: {
    default: "Renda Filé Artesanal | Vestidos, Saias e Calças de Luxo",
    template: "%s | Renda Filé Artesanal",
  },
  description:
    "Descubra nossa coleção exclusiva de renda filé artesanal. Vestidos, saias e calças elegantes feitos à mão com técnicas tradicionais. Moda praia sofisticada e peças únicas para ocasiões especiais.",
  keywords: [
    "loja renda filé",
    "renda filé artesanal",
    "artesanato brasileiro",
    "roupas artesanais",
    "vestidos de renda filé",
    "saias artesanais",
    "calças de renda filé",
    "moda praia artesanal",
    "peças artesanais",
    "trabalho manual",
    "renda tradicional",
    "moda feminina artesanal",
    "roupas elegantes",
    "peças sob medida",
    "loja de artesanato",
    "vestidos elegantes",
    "saias elegantes",
    "calças elegantes",
    "roupas de praia",
    "moda praia sofisticada",
    "peças exclusivas",
    "artesanato feminino",
    "renda filé tradicional",
    "roupas feitas à mão",
    "moda artesanal brasileira",
    "vestidos sob medida",
    "saias sob medida",
    "calças sob medida",
    "loja online artesanal",
    "e-commerce artesanato",
    "comprar renda filé",
    "vestidos únicos",
    "saias únicas",
    "calças únicas",
    "moda sustentável",
    "slow fashion",
    "artesanato de qualidade",
    "renda filé original",
    "roupas tradicionais",
    "moda regional",
    "arte têxtil",
    "bordado artesanal",
    "tecelagem manual",
    "fio de algodão",
    "técnicas tradicionais",
    "patrimônio cultural",
    "moda consciente",
    "peças autorais",
    "design artesanal",
    "moda brasileira",
    "loja virtual roupas",
    "catálogo moda feminina",
    "roupas exclusivas online",
    "artesanato nordestino",
    "cultura brasileira",
    "tradição têxtil",
    // Palavras-chave para busca local e específica
    "onde comprar renda filé",
    "renda filé online",
    "renda filé brasil",
    "renda filé ceará",
    "renda filé nordeste",
    "renda de lacê",
    "rede bordada",
    "lacê bordado",
    "filé de renda",
    "renda filé barata",
    "renda filé preço",
    "quanto custa renda filé",
    "renda filé para casamento",
    "renda filé festa",
    "renda filé praia",
    "renda filé verão",
    "conjunto renda filé",
    "blusa renda filé",
    "top renda filé",
    "renda filé branca",
    "renda filé colorida",
    "renda filé vintage",
    "renda filé retro",
    "como usar renda filé",
    "combinar renda filé",
    "estilo renda filé",
    "looks renda filé",
    "outfit renda filé",
    "renda filé instagram",
    "renda filé tendência",
    "moda renda filé",
    "roupas renda filé",
    "peças renda filé",
  ],
  authors: [{ name: "Renda Filé Artesanal" }],
  creator: "Renda Filé Artesanal",
  publisher: "Renda Filé Artesanal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.rendafiledeluxo.com.br/",
    siteName: "Renda Filé Artesanal",
    title: "Renda Filé Artesanal | Vestidos, Saias e Calças de Luxo",
    description:
      "Descubra nossa coleção exclusiva de renda filé artesanal. Vestidos, saias e calças elegantes feitos à mão com técnicas tradicionais.",
    images: [
      {
        url: "/images/vestidos/branco.jpg",
        width: 1200,
        height: 630,
        alt: "Vestido de Renda Filé Artesanal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renda Filé Artesanal | Vestidos, Saias e Calças de Luxo",
    description:
      "Descubra nossa coleção exclusiva de renda filé artesanal. Peças únicas feitas à mão.",
    images: ["/images/vestidos/branco.jpg"],
  },
  alternates: {
    canonical: "https://www.rendafiledeluxo.com.br/",
  },
  verification: {
    google: "google-site-verification-code-here", // Você precisará adicionar seu código do Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://www.rendafiledeluxo.com.br/" />
        <meta
          name="google-site-verification"
          content="seu-codigo-google-search-console"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.rendafiledeluxo.com.br/#business",
                name: "Renda Filé de Luxo",
                alternateName: "Renda Filé Artesanal",
                description:
                  "Loja especializada em renda filé artesanal, oferecendo vestidos, saias e calças únicos feitos à mão. Roupas artesanais, moda praia sofisticada, peças exclusivas sob medida. Artesanato brasileiro tradicional com técnicas ancestrais.",
                url: "https://www.rendafiledeluxo.com.br/",
                telephone: "+55-88-8847-6263",
                email: "contato@rendafiledeluxo.com.br",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "BR",
                  addressRegion: "Brasil",
                },
                openingHours: "Mo-Su 08:00-20:00",
                priceRange: "$$",
                paymentAccepted: ["WhatsApp", "Pix", "Cartão de Crédito"],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Catálogo de Renda Filé Artesanal",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Product",
                        name: "Vestidos de Renda Filé Artesanal",
                        category: "Vestidos",
                        description:
                          "Vestidos únicos de renda filé feitos à mão",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Product",
                        name: "Saias de Renda Filé Artesanal",
                        category: "Saias",
                        description:
                          "Saias elegantes de renda filé tradicional",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Product",
                        name: "Calças de Renda Filé Artesanal",
                        category: "Calças",
                        description: "Calças sofisticadas de renda filé",
                      },
                    },
                  ],
                },
                sameAs: [
                  "https://www.instagram.com/rendafiledeluxo",
                  "https://wa.me/5588988476263",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.rendafiledeluxo.com.br/#website",
                url: "https://www.rendafiledeluxo.com.br/",
                name: "Renda Filé de Luxo",
                description:
                  "Catálogo online de renda filé artesanal brasileira",
                publisher: {
                  "@id": "https://www.rendafiledeluxo.com.br/#business",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                      "https://www.rendafiledeluxo.com.br/products?search={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.rendafiledeluxo.com.br/#organization",
                name: "Renda Filé de Luxo",
                url: "https://www.rendafiledeluxo.com.br/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.rendafiledeluxo.com.br/svgs/logo.svg",
                },
                foundingDate: "2024",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "BR",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+55-88-8847-6263",
                  contactType: "customer service",
                  availableLanguage: "Portuguese",
                },
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
