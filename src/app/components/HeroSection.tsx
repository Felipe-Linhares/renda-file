import { CheckCircle, Heart, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Moda Feminina em
                <span className="bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">
                  {" "}
                  Renda Filé
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Peças únicas de renda filé moda praia criadas com amor e
                dedicação. Descubra vestidos, saias, conjuntos e calças com a
                delicadeza e elegância da renda filé artesanal.
              </p>
            </div>{" "}
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:max-w-none lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="bg-amber-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  100% Artesanal
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-700" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Feito com Amor
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Qualidade Garantida
                </span>
              </div>
            </div>{" "}
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-10">
              <Link
                href="/products"
                className="bg-gradient-to-r from-amber-700 to-orange-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-amber-800 hover:to-orange-900 transition-all duration-300 transform hover:scale-105 text-center cursor-pointer relative z-20 block"
                style={{ pointerEvents: "auto" }}
              >
                Ver Catálogo
              </Link>
              <Link
                href="/#sobre"
                className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:border-amber-700 hover:text-amber-700 transition-all duration-300 text-center cursor-pointer relative z-20 block"
                style={{ pointerEvents: "auto" }}
              >
                Sobre Nós
              </Link>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200 max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  10000+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Peças Criadas
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  98%
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Satisfação
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Anos Experiência
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              {" "}
              <div className="bg-gradient-to-r from-amber-700 to-orange-800 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                    {" "}
                    <div className="w-full h-full flex items-center justify-center p-8">
                      {" "}
                      <Image
                        src="/svgs/logo.svg"
                        alt="Renda Filé de Luxo Logo"
                        width={400}
                        height={400}
                        className="w-full h-full object-contain rounded-3xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-r from-orange-300 to-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
