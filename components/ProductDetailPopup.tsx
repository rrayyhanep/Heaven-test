'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Product } from '@/data/products'

interface ProductDetailPopupProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductDetailPopup({ product, isOpen, onClose }: ProductDetailPopupProps) {
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

  if (!product) return null

  const isPlaceholder = product.image.includes('/images/placeholder')

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-heaven-teal-dark hover:bg-heaven-teal-light hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-64 md:h-auto bg-gradient-to-br from-heaven-teal-light/20 to-heaven-blue-light/20">
            {!isPlaceholder ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-heaven-teal-dark/10 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-heaven-teal-dark"
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
                  <p className="text-heaven-teal-dark font-medium">{product.name}</p>
                </div>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="p-8 overflow-y-auto max-h-[90vh]">
            <div className="mb-4">
              <span className="px-3 py-1 bg-heaven-teal-dark text-white text-xs font-semibold rounded-full">
                {product.category}
              </span>
              {product.type && (
                <span className="ml-2 px-3 py-1 bg-heaven-blue-light text-heaven-teal-dark text-xs font-semibold rounded-full">
                  {product.type}
                </span>
              )}
            </div>

            <h2 className="text-3xl font-bold text-heaven-teal-dark mb-4">
              {product.name}
            </h2>

            <p className="text-heaven-teal-light mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="space-y-4 mb-6">
              {product.material && (
                <div className="flex items-start">
                  <span className="font-semibold text-heaven-teal-dark w-24 flex-shrink-0">Material:</span>
                  <span className="text-heaven-teal-light">{product.material}</span>
                </div>
              )}
              {product.dimensions && (
                <div className="flex items-start">
                  <span className="font-semibold text-heaven-teal-dark w-24 flex-shrink-0">Dimensions:</span>
                  <span className="text-heaven-teal-light">{product.dimensions}</span>
                </div>
              )}
              {product.color && (
                <div className="flex items-start">
                  <span className="font-semibold text-heaven-teal-dark w-24 flex-shrink-0">Color:</span>
                  <span className="text-heaven-teal-light">{product.color}</span>
                </div>
              )}
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-heaven-teal-dark mb-3">Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-heaven-teal-light">
                      <span className="mr-2 text-heaven-teal-dark">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4 border-t border-heaven-teal-light/20">
              <button className="flex-1 py-3 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-semibold">
                Contact Us
              </button>
              <button className="flex-1 py-3 border-2 border-heaven-teal-dark text-heaven-teal-dark rounded-lg hover:bg-heaven-teal-dark hover:text-white transition-colors font-semibold">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
      )}
    </AnimatePresence>
  )
}

