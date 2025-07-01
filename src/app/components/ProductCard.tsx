import { Product } from "@/lib/data";
import { formatPrice, getAssetPath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {" "}
        <Image
          src={getAssetPath(product.image)}
          alt={`${product.name} - ${product.category} de Renda Filé Artesanal - Loja Online`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              ✨ Novo
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-gradient-to-r from-orange-600 to-amber-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              🔥 Promoção
            </span>
          )}
        </div>
      </div>{" "}
      {/* Content */}
      <div className="p-8">
        <div className="space-y-4">
          {/* Category */}
          <span className="inline-block bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent text-sm font-bold uppercase tracking-wide">
            {product.category}
          </span>
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors leading-tight">
            {product.name}
          </h3>
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {product.description}
          </p>{" "}
          {/* Details */}
          <div className="space-y-2 pt-2">
            {product.dimensions && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">📏</span>
                <p className="text-xs text-gray-600">
                  <span className="font-semibold">Dimensões:</span>{" "}
                  {product.dimensions}
                </p>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">🧵</span>
              <p className="text-xs text-gray-600">
                <span className="font-semibold">Material:</span>{" "}
                {product.material}
              </p>
            </div>
          </div>
          {/* Price */}
          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
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
          </div>{" "}
          {/* Actions */}
          <div className="flex gap-3 pt-6">
            <Link
              href={`/products/${product.id}`}
              className="w-full bg-gradient-to-r from-amber-700 to-orange-800 text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:from-amber-800 hover:to-orange-900 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver Detalhes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
