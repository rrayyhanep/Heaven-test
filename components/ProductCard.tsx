'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const router = useRouter()

  // Check if image is a placeholder URL (old format)
  const isPlaceholder = product.image.includes('/images/placeholder')

  const handleViewDetails = () => {
    router.push(`/products/${product.id}`)
  }

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-64 bg-gradient-to-br from-heaven-teal-light/20 to-heaven-blue-light/20 overflow-hidden flex-shrink-0">
        {!isPlaceholder && !imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-heaven-teal-dark/10 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-heaven-teal-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <p className="text-heaven-teal-dark text-sm font-medium">{product.name}</p>
            </div>
          </div>
        )}
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

