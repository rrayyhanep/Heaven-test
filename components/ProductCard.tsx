'use client'

import { useRouter } from 'next/navigation'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/products/${product.id}`)
  }

  return (
    <div 
      onClick={handleClick} 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col cursor-pointer"
    >
      <div className="relative aspect-square bg-gradient-to-br from-heaven-teal-light/20 to-heaven-blue-light/20 overflow-hidden flex-shrink-0">
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
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-xl font-semibold text-heaven-teal-dark mb-2">
          {product.name}
        </h3>
        <div className="hidden sm:block mb-4 flex-grow">
          <p className="text-heaven-teal-light text-sm line-clamp-3">
            {product.description}
          </p>
        </div>
        <button
          className="w-full py-2 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-medium mt-auto hidden sm:block"
        >
          View Details
        </button>
      </div>
    </div>
  )
}
