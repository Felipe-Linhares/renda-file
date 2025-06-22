"use client";

import { Menu, SpoolIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5585988476263"; // Número do WhatsApp
    const message =
      "Olá! Gostaria de fazer uma encomenda de renda filé. Podem me ajudar?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {" "}
          {/* Logo */}{" "}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="bg-gradient-to-r from-amber-700 to-orange-800 p-2 rounded-lg">
              <SpoolIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                Renda Filé
              </span>
              <span className="text-xs sm:text-sm text-amber-700 font-semibold -mt-1">
                de Luxo
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {" "}
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-700 transition-colors"
            >
              Início
            </Link>{" "}
            <Link
              href="/products"
              className="text-gray-700 hover:text-amber-700 transition-colors"
            >
              Produtos
            </Link>{" "}
            <Link
              href="/#sobre"
              className="text-gray-700 hover:text-amber-700 transition-colors"
            >
              Sobre
            </Link>{" "}
            <Link
              href="/#contato"
              className="text-gray-700 hover:text-amber-700 transition-colors"
            >
              Contato
            </Link>
          </nav>{" "}
          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={handleWhatsAppClick}
              className="hidden sm:block bg-gradient-to-r from-amber-700 to-orange-800 text-white px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base hover:from-amber-800 hover:to-orange-900 transition-all duration-300 transform hover:scale-105"
            >
              Encomendar
            </button>{" "}
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-2">
            {" "}
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>{" "}
            <Link
              href="/products"
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>{" "}
            <Link
              href="/#sobre"
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>{" "}
            <Link
              href="/#contato"
              className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>{" "}
            <div className="pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-amber-700 to-orange-800 text-white px-6 py-3 rounded-full hover:from-amber-800 hover:to-orange-900 transition-all duration-300"
              >
                Encomendar
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
