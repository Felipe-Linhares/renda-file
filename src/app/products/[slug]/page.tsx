"use client";

import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    notFound();
  }

  // Get all images for the product
  const productImages = product.images || [product.image];

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  // WhatsApp contact function
  const handleWhatsAppContact = () => {
    const phone = "+558888476263"; // Formato correto sem + e espaços
    const currentUrl = window.location.href;
    const message = `Olá! Estou interessada nessa peça de renda filé artesanal: "${product.name}".

Gostaria de saber mais detalhes sobre prazo de entrega e personalização.

Link do produto: ${currentUrl}

Aguardo seu retorno!`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  }; // Share function
  const handleShare = async () => {
    const currentUrl = window.location.href;
    const shareData = {
      title: `${product.name} - Renda Filé Artesanal`,
      text: `Confira essa linda peça de renda filé: ${product.name}`,
      url: currentUrl,
    };

    try {
      // Primeiro verifica se o dispositivo suporta Web Share API
      if (navigator.share) {
        // Usa a API nativa que abre o menu de compartilhamento do sistema
        await navigator.share(shareData);
        return;
      }

      // Fallback para dispositivos que não suportam Web Share API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentUrl);
        alert("✅ Link copiado para a área de transferência!");
      } else {
        // Fallback adicional para dispositivos mais antigos
        const textArea = document.createElement("textarea");
        textArea.value = currentUrl;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
          alert("✅ Link copiado para a área de transferência!");
        } catch {
          // Último recurso: mostrar o link em um prompt
          prompt("Copie o link abaixo:", currentUrl);
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (err) {
      console.log("Erro ao compartilhar:", err);
      // Se deu erro no share, tenta copiar para clipboard
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(currentUrl);
          alert("✅ Link copiado para a área de transferência!");
        } else {
          prompt("Copie o link abaixo:", currentUrl);
        }
      } catch {
        prompt("Copie o link abaixo:", currentUrl);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {" "}
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
                <Image
                  src={productImages[selectedImageIndex]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => {
                    // Future: implement image modal/lightbox
                  }}
                />
              </div>

              {/* Thumbnail images */}
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((image, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                        selectedImageIndex === index
                          ? "border-orange-500 ring-2 ring-orange-500/20"
                          : "border-gray-200 hover:border-orange-300"
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Imagem ${index + 1}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Product Info */}
            <div className="space-y-6">
              {/* Breadcrumb */}{" "}
              <nav className="text-sm">
                <ol className="flex items-center space-x-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      Início
                    </Link>
                  </li>
                  <li className="text-gray-400">/</li>
                  <li>
                    <Link
                      href="/products"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      Produtos
                    </Link>
                  </li>
                  <li className="text-gray-400">/</li>
                  <li className="text-gray-900">{product.name}</li>
                </ol>
              </nav>
              {/* Category */}
              <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-gray-900">
                    R$ {product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through">
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <p className="text-green-600 font-medium">
                    Economize R${" "}
                    {(product.originalPrice - product.price).toFixed(2)} (
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF)
                  </p>
                )}
              </div>
              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Descrição
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>{" "}
              {/* Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Detalhes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.dimensions && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <dt className="text-sm font-medium text-gray-500">
                        Tamanho
                      </dt>
                      <dd className="text-gray-900">{product.dimensions}</dd>
                    </div>
                  )}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <dt className="text-sm font-medium text-gray-500">
                      Material
                    </dt>
                    <dd className="text-gray-900">{product.material}</dd>
                  </div>{" "}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <dt className="text-sm font-medium text-gray-500">
                      Categoria
                    </dt>
                    <dd className="text-gray-900">{product.category}</dd>
                  </div>
                </div>
              </div>{" "}
              {/* Actions */}
              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full py-4 px-6 rounded-2xl text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  💬 Entrar em Contato via WhatsApp
                </button>

                <div className="grid grid-cols-1 gap-4">
                  <button
                    onClick={handleShare}
                    className="border-2 border-orange-500 text-orange-600 py-3 px-6 rounded-2xl font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
                  >
                    📱 Compartilhar Produto
                  </button>
                </div>
              </div>{" "}
              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  ✅ 100% Artesanal
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  🚚 Entrega em Todo Brasil
                </span>{" "}
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  🎨 Peça Única
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  📋 Feito Sob Encomenda
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Produtos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
