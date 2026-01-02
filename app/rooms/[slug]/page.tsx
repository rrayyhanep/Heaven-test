'use client'

import { useState, useMemo } from 'react'
import ScrollAnimation from '@/components/ScrollAnimation'
import ProductCard from '@/components/ProductCard'
import { products, Product } from '@/data/products'
import { roomData } from '@/data/rooms'

// Helper function to filter by search query
const filterBySearchQuery = (products: Product[], query: string) => {
  if (!query.trim()) return products
  const lowerCaseQuery = query.toLowerCase().trim()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerCaseQuery) ||
      p.description.toLowerCase().includes(lowerCaseQuery) ||
      p.category.toLowerCase().includes(lowerCaseQuery) ||
      (p.type && p.type.toLowerCase().includes(lowerCaseQuery)) ||
      (p.materialOptions && p.materialOptions.some(m => m.toLowerCase().includes(lowerCaseQuery))) ||
      (p.colorOptions && p.colorOptions.some(c => c.toLowerCase().includes(lowerCaseQuery)))
  )
}

interface PageProps {
  params: { slug: string }
}

export default function RoomPage({ params }: PageProps) {
  const { slug } = params
  const room = roomData[slug]
  const [searchQuery, setSearchQuery] = useState('')

  if (!room) {
    return (
      <div className="pt-20 pb-20 text-center bg-warm-gray-100">
        <h1 className="text-4xl font-bold text-heaven-teal-dark mb-4">Room Not Found</h1>
        <p className="text-warm-gray-500">The room you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    )
  }

  // Get full product data from shared products array
  const roomProducts = room.productIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined)

  const filteredProducts = useMemo(() => {
    return filterBySearchQuery(roomProducts, searchQuery)
  }, [searchQuery, roomProducts])

  return (
    <div className="pt-20 pb-20 bg-warm-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animationType="fade-in-up">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-heaven-teal-dark mb-6">
              {room.name}
            </h1>
            <p className="text-lg text-warm-gray-800 max-w-3xl mx-auto">
              {room.description}
            </p>
          </div>
        </ScrollAnimation>

        <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-heaven-teal-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search products in this room..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-heaven-teal-light focus:border-heaven-teal-dark focus:outline-none text-heaven-teal-dark placeholder-heaven-teal-light/60"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-heaven-teal-light hover:text-heaven-teal-dark"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
        </div>

        <ScrollAnimation animationType="fade-in-up" delay={200}>
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {filteredProducts.map((product, index) => (
                    <ScrollAnimation
                        key={product.id}
                        animationType="fade-in-up"
                        delay={index * 100}
                    >
                        <div className="h-full">
                        <ProductCard product={product} />
                        </div>
                    </ScrollAnimation>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <div className="mb-6">
                        <svg
                            className="w-24 h-24 mx-auto text-heaven-teal-light"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-heaven-teal-dark mb-2">
                        No products found
                    </h3>
                    <p className="text-heaven-teal-light mb-6">
                        Try adjusting your search.
                    </p>
                    <button
                        onClick={() => {
                            setSearchQuery('')
                        }}
                        className="px-6 py-2 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-medium"
                    >
                        Clear Search
                    </button>
                </div>
            )}
        </ScrollAnimation>
      </div>
    </div>
  )
}
