'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollAnimation from '@/components/ScrollAnimation'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { getRecommendedProducts } from '@/lib/ai/recommendations'
import ProductImageAndControls from '@/components/ProductImageAndControls'
import ContactPopup from '@/components/ContactPopup'

interface PageProps {
  params: { id: string }
}

export default function ProductDetailPage({ params }: PageProps) {
  const { id } = params
  const router = useRouter()
  const productId = parseInt(id)
  const product = products.find((p) => p.id === productId)

  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)
  const [selectedMaterial, setSelectedMaterial] = useState<string | undefined>(undefined)
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined)
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (product) {
      setSelectedMaterial(product.materialOptions?.[0])
      setSelectedColor(product.colorOptions?.[0])
      setSelectedSize(product.sizeOptions?.[0])
    }
  }, [product])

  const similarProducts = product ? getRecommendedProducts(product, products).slice(0, 4) : []

  if (!product) {
    return (
      <div className="pt-20 pb-20 text-center min-h-screen">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-heaven-teal-dark mb-4">Product Not Found</h1>
          <p className="text-heaven-teal-light mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => router.push('/products')}
            className="px-6 py-3 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-medium"
          >
            Back to Products
          </button>
        </div>
      </div>
    )
  }

  const openContactPopup = () => setIsContactPopupOpen(true)
  const closeContactPopup = () => setIsContactPopupOpen(false)

  return (
    <>
      <div className="pt-20 pb-20 bg-gradient-to-b from-white to-heaven-blue-light/10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade-in-up">
            <button
              onClick={() => router.back()}
              className="mb-6 flex items-center text-heaven-teal-dark hover:text-heaven-teal transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <ScrollAnimation animationType="fade-in-up">
              <ProductImageAndControls 
                product={product} 
                selectedMaterial={selectedMaterial} 
                setSelectedMaterial={setSelectedMaterial} 
                selectedColor={selectedColor} 
                setSelectedColor={setSelectedColor} 
                selectedSize={selectedSize} 
                setSelectedSize={setSelectedSize} 
              />
            </ScrollAnimation>

            <ScrollAnimation animationType="fade-in-up" delay={100}>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-heaven-teal-dark text-white text-sm font-semibold rounded-full">
                    {product.category}
                  </span>
                  {product.type && (
                    <span className="px-4 py-2 bg-heaven-blue-light text-heaven-teal-dark text-sm font-semibold rounded-full">
                      {product.type}
                    </span>
                  )}
                </div>

                <h1 className="text-4xl font-bold text-heaven-teal-dark">
                  {product.name}
                </h1>

                <p className="text-lg text-heaven-teal-light leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-4 pt-4 border-t border-heaven-teal-light/20">
                  <div className="flex items-start">
                    <span className="font-semibold text-heaven-teal-dark w-32 flex-shrink-0">Material:</span>
                    <span className="text-heaven-teal-light flex-1">{selectedMaterial}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-heaven-teal-dark w-32 flex-shrink-0">Color:</span>
                    <span className="text-heaven-teal-light flex-1">{selectedColor}</span>
                  </div>
                  {product.sizeOptions && product.sizeOptions.length > 0 && selectedSize && (
                    <div className="flex items-start">
                      <span className="font-semibold text-heaven-teal-dark w-32 flex-shrink-0">Size:</span>
                      <span className="text-heaven-teal-light flex-1">{selectedSize}</span>
                    </div>
                  )}
                  {product.dimensions && (
                    <div className="flex items-start">
                      <span className="font-semibold text-heaven-teal-dark w-32 flex-shrink-0">Dimensions:</span>
                      <span className="text-heaven-teal-light flex-1">{product.dimensions}</span>
                    </div>
                  )}
                </div>

                {product.features && product.features.length > 0 && (
                  <div className="pt-4 border-t border-heaven-teal-light/20">
                    <h3 className="font-semibold text-heaven-teal-dark mb-4 text-lg">Key Features:</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-heaven-teal-light">
                          <span className="mr-3 text-heaven-teal-dark text-xl">✓</span>
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-6 border-t border-heaven-teal-light/20">
                  <button
                    onClick={openContactPopup}
                    className="w-full py-4 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-semibold text-lg"
                  >
                    Consult Us
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {similarProducts.length > 0 && (
            <ScrollAnimation animationType="fade-in-up">
              <div>
                <h2 className="text-3xl font-bold text-heaven-teal-dark mb-8">
                  Similar Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {similarProducts.map((simProduct, index) => (
                    <ScrollAnimation
                      key={simProduct.id}
                      animationType="fade-in-up"
                      delay={index * 100}
                    >
                      <div className="h-full">
                        <ProductCard product={simProduct} />
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          )}
        </div>
      </div>
      <ContactPopup isOpen={isContactPopupOpen} onClose={closeContactPopup} />
    </>
  )
}
