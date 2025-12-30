'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ProductCard from './ProductCard'
import ScrollAnimation from './ScrollAnimation'
import { Product } from '@/data/products'

interface Room {
  name: string
  description: string
  products: Product[]
}

interface RoomPopupProps {
  room: Room | null
  slug?: string
  isOpen: boolean
  onClose: () => void
}

export default function RoomPopup({ room, slug, isOpen, onClose }: RoomPopupProps) {
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleExploreRoom = () => {
    if (slug) {
      router.push(`/rooms/${slug}`)
      onClose()
    }
  }

  if (!isOpen || !room) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />
      
      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-slide-up m-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-heaven-teal-dark hover:bg-heaven-teal-light hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
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

        {/* Header */}
        <div className="bg-gradient-to-br from-heaven-teal-dark to-heaven-teal text-white p-6 sm:p-8">
          <ScrollAnimation animationType="fade-in-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{room.name}</h2>
            <p className="text-heaven-blue-light text-base sm:text-lg mb-4">{room.description}</p>
            {slug && (
              <button
                onClick={handleExploreRoom}
                className="px-4 py-2 md:px-5 sm:px-6 md:py-3 bg-white text-heaven-teal-dark rounded-lg hover:bg-heaven-blue-light transition-colors font-semibold text-sm sm:text-base"
              >
                Explore {room.name} →
              </button>
            )}
          </ScrollAnimation>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-180px)] sm:max-h-[calc(90vh-200px)]">
          <ScrollAnimation animationType="fade-in-up" delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
              {room.products.map((product, index) => (
                <ScrollAnimation
                  key={product.id}
                  animationType="fade-in-up"
                  delay={300 + index * 100}
                >
                  <div className="h-full">
                    <ProductCard product={product} />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
