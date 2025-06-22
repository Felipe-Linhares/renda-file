"use client";

import { Facebook, Instagram, MapPin, Phone, SpoolIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            {" "}
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-amber-700 to-orange-800 p-2 rounded-lg">
                <SpoolIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Renda Filé de Luxo</h3>
            </div>{" "}
            <p className="text-gray-300 mb-6">
              Criamos peças únicas em renda filé, combinando tradição artesanal
              com elegância contemporânea. Cada produto é cuidadosamente
              confeccionado para ser tão exclusivo quanto você.
            </p>
          </div>

          {/* Seção de Contato */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Entre em Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">(55) 8847-6263</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">CE - Brasil</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61577014648020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                  title="Facebook - Renda Filé de Luxo"
                >
                  <Facebook className="w-4 h-4 text-orange-400" />
                </a>
                <a
                  href="https://www.instagram.com/rendafileluxo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                  title="Instagram - @rendafileluxo"
                >
                  <Instagram className="w-4 h-4 text-orange-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Renda Filé de Luxo. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
