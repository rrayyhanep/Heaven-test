'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Product } from '@/data/products'
import ModelViewer from './ModelViewer'
import ContactPopup from './ContactPopup'

interface ProductDetailPopupProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductDetailPopup({ product, isOpen, onClose }: ProductDetailPopupProps) {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)
  const [selectedMaterial, setSelectedMaterial] = useState<string | undefined>(undefined)
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      if (product) {
        setSelectedMaterial(product.materialOptions?.[0])
        setSelectedColor(product.colorOptions?.[0])
      }
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, product])

  if (!product) return null

  const openContactPopup = () => {
    setIsContactPopupOpen(true)
  }

  const closeContactPopup = () => {
    setIsContactPopupOpen(false)
  }

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
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-heaven-teal-dark hover:bg-heaven-teal-light hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-heaven-teal-light/20 to-heaven-blue-light/20 flex flex-col">
                <div className="flex-grow">
                  <ModelViewer src={product.modelSrc} alt={product.name} />
                </div>
                <div className="p-4 bg-white/50 backdrop-blur-sm space-y-4">
                  {/* Material Selector */}
                  {product.materialOptions && product.materialOptions.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-heaven-teal-dark mb-2">Material</label>
                      <div className="flex items-center bg-gray-200 rounded-full p-1">
                        {product.materialOptions.map((option) => (
                          <button
                            key={option}
                            onClick={(e) => { e.stopPropagation(); setSelectedMaterial(option); }}
                            className={`relative px-4 py-1 text-sm font-medium rounded-full transition-colors w-full ${
                              selectedMaterial === option
                                ? 'text-heaven-teal-dark'
                                : 'text-gray-500 hover:bg-gray-100/50'
                            }`}
                          >
                            {selectedMaterial === option && (
                              <motion.div
                                layoutId="activeMaterial"
                                className="absolute inset-0 bg-white rounded-full shadow-md"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                              />
                            )}
                            <span className="relative z-10">{option}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Color Selector */}
                  {product.colorOptions && product.colorOptions.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-heaven-teal-dark mb-2">Color</label>
                      <div className="flex items-center bg-gray-200 rounded-full p-1">
                        {product.colorOptions.map((option) => (
                          <button
                            key={option}
                            onClick={(e) => { e.stopPropagation(); setSelectedColor(option); }}
                            className={`relative px-4 py-1 text-sm font-medium rounded-full transition-colors w-full ${
                              selectedColor === option
                                ? 'text-heaven-teal-dark'
                                : 'text-gray-500 hover:bg-gray-100/50'
                            }`}
                          >
                            {selectedColor === option && (
                              <motion.div
                                layoutId="activeColor"
                                className="absolute inset-0 bg-white rounded-full shadow-md"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                              />
                            )}
                            <span className="relative z-10">{option}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

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

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <span className="font-semibold text-heaven-teal-dark w-24 flex-shrink-0">Material:</span>
                    <span className="text-heaven-teal-light">{selectedMaterial}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-heaven-teal-dark w-24 flex-shrink-0">Color:</span>
                    <span className="text-heaven-teal-light">{selectedColor}</span>
                  </div>
                  {product.dimensions && (
                    <div className="flex items-start">
                      <span className="font-semibold text-heaven-teal-dark w-24 flex-shrink-0">Dimensions:</span>
                      <span className="text-heaven-teal-light">{product.dimensions}</span>
                    </div>
                  )}
                </div>

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

                <div className="pt-4 border-t border-heaven-teal-light/20">
                  <button 
                    onClick={openContactPopup} 
                    className="w-full py-3 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-semibold"
                  >
                    Consult Us
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <ContactPopup isOpen={isContactPopupOpen} onClose={closeContactPopup} />
        </div>
      )}
    </AnimatePresence>
  )
}
