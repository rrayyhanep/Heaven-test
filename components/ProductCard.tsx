'use client'

import { useRouter } from 'next/navigation'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()

  const handleViewDetails = () => {
    router.push(`/products/${product.id}`)
  }

  const isPlaceholder = product.image.includes('/images/placeholder')

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-64 bg-gradient-to-br from-heaven-teal-light/20 to-heaven-blue-light/20 overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-heaven-teal-dark text-white text-xs font-semibold rounded-full">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-heaven-teal-dark mb-2">
          {product.name}
        </h3>
        <p className="text-heaven-teal-light text-sm mb-4 flex-grow line-clamp-3">
          {product.description}
        </p>
        <button
          onClick={handleViewDetails}
          className="w-full py-2 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-medium mt-auto"
        >
          View Details
        </button>
      </div>
    </div>
  )
}
