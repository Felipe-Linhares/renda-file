"use client";

import { products } from "@/lib/data";
import { formatPrice, getAssetPath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

interface ProductPageClientProps {
  slug: string;
}

export default function ProductPageClient({ slug }: ProductPageClientProps) {
  const product = products.find((p) => p.id === slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    notFound();
  }

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.description,
      image:
        Array.isArray(product.images) && product.images.length > 0
          ? product.images.map((img) =>
              img.startsWith("http") ? img : `${window.location.origin}${img}`
            )
          : [
              product.image.startsWith("http")
                ? product.image
                : `${window.location.origin}${product.image}`,
            ],
      brand: {
        "@type": "Brand",
        name: "Renda Filé Artesanal",
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
        url: `${window.location.origin}/products/${product.id}`,
        seller: {
          "@type": "Organization",
          name: "Renda Filé Artesanal",
          url: window.location.origin,
        },
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0], // 1 year from now
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

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `product-structured-data-${product.id}`;
    script.text = JSON.stringify(structuredData);

    // Remove any existing structured data script for this product
    const existingScript = document.getElementById(
      `product-structured-data-${product.id}`
    );
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(
        `product-structured-data-${product.id}`
      );
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, [product]);

  const images = product.images || [product.image];
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <div className="flex items-center space-x-2 text-gray-500">
            <Link href="/" className="hover:text-amber-700 transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-amber-700 transition-colors"
            >
              Produtos
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}{" "}
            <div className="aspect-square bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl overflow-hidden">
              <Image
                src={getAssetPath(images[selectedImageIndex])}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-amber-600 shadow-lg"
                        : "border-gray-200 hover:border-amber-300"
                    }`}
                  >
                    {" "}
                    <Image
                      src={getAssetPath(image)}
                      alt={`${product.name} - Imagem ${index + 1}`}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Product Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent text-sm font-bold uppercase tracking-wide">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ✨ Novo
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-gradient-to-r from-orange-600 to-amber-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    🔥 Promoção
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-amber-600">📏</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Dimensões:
                    </p>
                    <p className="text-sm text-gray-600">
                      {product.dimensions}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-600">🧵</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Material:
                    </p>
                    <p className="text-sm text-gray-600">{product.material}</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-4 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xl text-gray-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="text-sm text-emerald-600 font-semibold">
                        💰 Economize{" "}
                        {formatPrice(product.originalPrice - product.price)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const phone = "+558888476263";
                      const message = `Olá! Tenho interesse no produto:

📦 *${product.name}*
💰 Preço: ${formatPrice(product.price)}
📏 Dimensões: ${product.dimensions}
🧵 Material: ${product.material}

Gostaria de saber mais detalhes sobre:
• Disponibilidade
• Prazo de entrega
• Formas de pagamento
• Frete

Aguardo seu contato!`;
                      const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
                        message
                      )}`;
                      window.open(whatsappUrl, "_blank");
                    }}
                    className="flex-1 bg-gradient-to-r from-amber-700 to-orange-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-amber-800 hover:to-orange-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Encomendar via WhatsApp
                  </button>
                  {/* <button className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-amber-700 hover:text-white transition-all duration-300">
                    Favoritar
                  </button> */}
                </div>
              </div>

              {/* Product Features */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Características:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-700">
                      100% Artesanal
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-700">
                      Feito com Amor
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-700">
                      Qualidade Premium
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-700">Peça Única</span>
                  </div>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-sm font-medium text-orange-700">
                  🎨 Feito por encomenda
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Produtos Relacionados
              </h2>
              <p className="text-xl text-gray-600">
                Outras peças que você pode gostar
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products"
                className="bg-gradient-to-r from-amber-700 to-orange-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-800 hover:to-orange-900 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Ver Todos os Produtos
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
