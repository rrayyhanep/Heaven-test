'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ModelViewer from '@/components/ModelViewer'
import { Product } from '@/data/products'
import OptionsDropdown from '@/components/OptionsDropdown'

interface ProductImageAndControlsProps {
  product: Product
  selectedMaterial: string | undefined
  setSelectedMaterial: (material: string) => void
  selectedColor: string | undefined
  setSelectedColor: (color: string) => void
  selectedSize: string | undefined
  setSelectedSize: (size: string) => void
}

export default function ProductImageAndControls({ product, selectedMaterial, setSelectedMaterial, selectedColor, setSelectedColor, selectedSize, setSelectedSize }: ProductImageAndControlsProps) {
  const [viewMode, setViewMode] = useState('2d')
  const isPlaceholder = product.image.includes('/images/placeholder')

  const variants = {
    enter: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  }

  return (
    <div>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <span className={`text-lg ${viewMode === '2d' ? 'text-heaven-teal-dark font-semibold' : 'text-gray-500'}`}>2D</span>
        <div onClick={() => setViewMode(viewMode === '2d' ? '3d' : '2d')} className="w-16 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer">
          <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${viewMode === '3d' ? 'translate-x-8' : ''}`}></div>
        </div>
        <span className={`text-lg ${viewMode === '3d' ? 'text-heaven-teal-dark font-semibold' : 'text-gray-500'}`}>3D</span>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
        <div className="relative aspect-square bg-gradient-to-br from-heaven-teal-light/20 to-heaven-blue-light/20">
          <AnimatePresence>
            <motion.div
              key={viewMode}
              initial="exit"
              animate="enter"
              exit="exit"
              variants={variants}
              className="absolute inset-0 w-full h-full"
            >
              {viewMode === '2d' ? (
                <>
                  {!isPlaceholder ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-heaven-teal-dark/10 flex items-center justify-center">
                          <svg className="w-16 h-16 text-heaven-teal-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <p className="text-heaven-teal-dark font-medium">{product.name}</p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <ModelViewer src={product.modelSrc} alt={product.name} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg space-y-4">
        <OptionsDropdown label="Material" options={product.materialOptions || []} selectedOption={selectedMaterial} setSelectedOption={setSelectedMaterial} />
        <OptionsDropdown label="Color" options={product.colorOptions || []} selectedOption={selectedColor} setSelectedOption={setSelectedColor} />
        <OptionsDropdown label="Size" options={product.sizeOptions || []} selectedOption={selectedSize} setSelectedOption={setSelectedSize} />
      </div>
    </div>
  )
}
