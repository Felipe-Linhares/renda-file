"use client";

import { products, testimonials } from "@/lib/data";
import { getAssetPath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import SEOContent from "./components/SEOContent";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  // Add structured data for organization and website
  useEffect(() => {
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Renda Filé Artesanal",
        description:
          "Loja especializada em roupas artesanais de renda filé: vestidos, saias e calças exclusivas feitas à mão com técnicas tradicionais",
        url: window.location.origin,
        logo: `${window.location.origin}/svgs/logo.svg`,
        image: `${window.location.origin}/images/vestidos/branco.jpg`,
        telephone: "+558888476263",
        sameAs: [`https://wa.me/558888476263`],
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
          addressRegion: "Brasil",
        },
        founder: {
          "@type": "Person",
          name: "Artesã de Renda Filé",
        },
        foundingDate: "1999",
        numberOfEmployees: "1-5",
        areaServed: "BR",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Renda Filé Artesanal - Loja Online",
        description:
          "Loja online especializada em roupas artesanais de renda filé feitas à mão. Vestidos, saias e calças exclusivas com técnicas tradicionais brasileiras.",
        url: window.location.origin,
        publisher: {
          "@type": "Organization",
          name: "Renda Filé Artesanal",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${window.location.origin}/products?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "homepage-structured-data";
    script.text = JSON.stringify(structuredData);

    // Remove any existing structured data script for homepage
    const existingScript = document.getElementById("homepage-structured-data");
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(
        "homepage-structured-data"
      );
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Featured Products */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça nossas peças mais populares, criadas com técnicas
              tradicionais e muito amor
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/products"
              className="bg-gradient-to-r from-amber-700 to-orange-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-amber-800 hover:to-orange-900 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Tradição e Arte em Cada Peça
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Há mais de 25 anos, dedicamos nossa vida à arte da renda filé.
                Cada peça é cuidadosamente criada à mão, preservando técnicas
                tradicionais passadas de geração em geração.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa paixão é transformar fios em verdadeiras obras de arte que
                decoram e embelezam seu lar, trazendo elegância e sofisticação
                para cada cliente.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    25+
                  </div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">
                    10000+
                  </div>
                  <div className="text-gray-600">Peças Criadas</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-[1rem] p-6 aspect-square flex items-center justify-center">
                <div className="text-center w-full h-full flex flex-col justify-between">
                  <div className="flex-1 flex items-center justify-center px-2 py-4">
                    {" "}
                    <Image
                      src={getAssetPath("/svgs/tela.svg")}
                      alt="Renda Filé Artesanal"
                      width={450}
                      height={450}
                      className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem] rounded-full object-contain"
                    />
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      100% Artesanal
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Feito com amor e dedicação
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600">
              A satisfação de nossos clientes é nossa maior recompensa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contato"
        className="py-16 bg-gradient-to-r from-amber-700 to-orange-800 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Busca algo verdadeiramente único?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contate-nos e encomende suas peças especiais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const phone = "+558888476263";
                const message = `Olá! Gostaria de fazer um orçamento para uma peça personalizada de renda filé.

Aguardo seu retorno para conversarmos sobre os detalhes!`;
                const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappUrl, "_blank");
              }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Chamar no WhatsApp
            </button>
            <Link
              href="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-center"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <SEOContent />

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
}
