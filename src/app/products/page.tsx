"use client";

import { categories, products } from "@/lib/data";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("relevantes");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } // Sort products
    switch (sortBy) {
      case "menor-preco":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "maior-preco":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "novos":
        return [...filtered].sort(
          (a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        );
      case "nome":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case "categoria":
        return [...filtered].sort((a, b) =>
          a.category.localeCompare(b.category)
        );
      default:
        return filtered;
    }
  }, [selectedCategory, sortBy, searchQuery]);
  return (
    <div className="min-h-screen bg-white">
      {" "}
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent mb-6">
              Catálogo de Produtos
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Descubra nossa coleção completa de peças em renda filé, cada uma
              criada com técnicas tradicionais e muito carinho. Arte que conta
              histórias através dos fios.
            </p>
            {/* Search Bar */}{" "}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 rounded-2xl border-2 border-amber-200 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 text-gray-800 placeholder-gray-500 bg-white/80 backdrop-blur-sm shadow-lg"
                />
                <Search className="absolute left-4 top-4.5 h-5 w-5 text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Filters */}
      <section className="py-8 sm:py-10 bg-white/50 backdrop-blur-sm border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory("Todos")}
              className={`px-6 sm:px-8 py-3 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === "Todos"
                  ? "bg-gradient-to-r from-amber-700 to-orange-800 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-300"
              }`}
            >
              ✨ Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 sm:px-8 py-3 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-700 to-orange-800 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* Products Grid */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="text-left">
              <p className="text-gray-700 text-base sm:text-lg font-medium">
                {filteredAndSortedProducts.length === 0 ? (
                  "Nenhum produto encontrado"
                ) : (
                  <>
                    {filteredAndSortedProducts.length === 1
                      ? "1 produto encontrado"
                      : `${filteredAndSortedProducts.length} produtos encontrados`}
                  </>
                )}
              </p>{" "}
              {selectedCategory !== "Todos" && (
                <p className="text-orange-600 text-sm font-medium mt-1">
                  em {selectedCategory}
                </p>
              )}{" "}
              {searchQuery && (
                <p className="text-amber-600 text-sm font-medium mt-1">
                  para &quot;{searchQuery}&quot;
                </p>
              )}
            </div>{" "}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border-2 border-orange-200 rounded-2xl px-4 sm:px-6 py-3 text-sm sm:text-base text-gray-700 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 w-full sm:w-auto shadow-md"
            >
              <option value="relevantes">📋 Mais relevantes</option>
              <option value="menor-preco">💰 Menor preço</option>
              <option value="maior-preco">💸 Maior preço</option>
              <option value="novos">✨ Mais novos</option>
              <option value="nome">🔤 Nome A-Z</option>
              <option value="categoria">📁 Por categoria</option>
            </select>
          </div>{" "}
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-orange-300 mb-6">
                <svg
                  className="mx-auto h-20 w-20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33m0 0B3.64 10.736 3 8.4 3 6a9 9 0 0118 0c0 2.4-.64 4.736-1.92 6.67"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nenhum produto encontrado
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                Tente ajustar seus filtros ou termo de busca para encontrar o
                que você procura
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Todos");
                }}
                className="bg-gradient-to-r from-amber-700 to-orange-800 text-white px-8 py-3 rounded-2xl font-semibold hover:from-amber-800 hover:to-orange-900 transition-all duration-300 transform hover:scale-105"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>{" "}
      {/* CTA Section */}{" "}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-orange-200">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent mb-6">
              Não Encontrou o Que Procura?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed">
              Criamos peças personalizadas sob medida para você. Cada criação é
              única e feita com todo carinho e dedicação artesanal.
            </p>{" "}
            <button
              onClick={() => {
                const phone = "+558888476263";
                const message = `Olá! Estou interessada em solicitar uma peça personalizada de renda filé.

Gostaria de conversar sobre:
• Modelo desejado
• Medidas e tamanho
• Cores e padrões
• Prazo de entrega
• Orçamento

Aguardo seu contato para conversarmos sobre os detalhes!`;
                const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappUrl, "_blank");
              }}
              className="bg-gradient-to-r from-amber-700 to-orange-800 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold hover:from-amber-800 hover:to-orange-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ✨ Solicitar Peça Personalizada
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
