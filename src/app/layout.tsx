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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Renda Filé Artesanal",
              description:
                "Loja especializada em renda filé artesanal, oferecendo vestidos, saias e calças únicos feitos à mão. Roupas artesanais, moda praia sofisticada, peças exclusivas sob medida. Artesanato brasileiro tradicional com técnicas ancestrais.",
              url: "https://www.rendafiledeluxo.com.br/",
              telephone: "+55-88-8847-6263",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
              },
              openingHours: "Mo-Su 08:00-20:00",
              priceRange: "$$",
              paymentAccepted: "WhatsApp, Pix",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Catálogo de Renda Filé",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Vestidos de Renda Filé",
                      category: "Vestidos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Saias de Renda Filé",
                      category: "Saias",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Calças de Renda Filé",
                      category: "Calças",
                    },
                  },
                ],
              },
            }),
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
