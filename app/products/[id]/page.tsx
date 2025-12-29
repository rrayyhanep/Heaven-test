'use client'

import { useRouter } from 'next/navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

interface PageProps {
  params: { id: string }
}

export default function ProductDetailPage({ params }: PageProps) {
  const { id } = params
  const router = useRouter()
  const productId = parseInt(id)
  const product = products.find((p) => p.id === productId)

  // Get recommended products (same category, different products)
  const recommendedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4)

  // Get similar products (same type, different products)
  const similarProducts = products
    .filter((p) => p.type === product?.type && p.id !== product?.id && p.category !== product?.category)
    .slice(0, 4)

  if (!product) {
    return (
      <div className="pt-20 pb-20 text-center min-h-screen">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-heaven-teal-dark mb-4">Product Not Found</h1>
          <p className="text-heaven-teal-light mb-8">The product you're looking for doesn't exist.</p>
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

  const isPlaceholder = product.image.includes('/images/placeholder')

  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-white to-heaven-blue-light/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
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

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <ScrollAnimation animationType="fade-in-up">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-heaven-teal-light/20 to-heaven-blue-light/20">
                {!isPlaceholder ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                ) : null}
                {isPlaceholder && (
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
            </div>
          </ScrollAnimation>

          {/* Product Info */}
          <ScrollAnimation animationType="fade-in-up" delay={100}>
            <div className="space-y-6">
              {/* Category and Type Tags */}
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

              {/* Product Name */}
              <h1 className="text-4xl font-bold text-heaven-teal-dark">
                {product.name}
              </h1>

              {/* Description */}
              <p className="text-lg text-heaven-teal-light leading-relaxed">
                {product.description}
              </p>

              {/* Product Details */}
              <div className="space-y-4 pt-4 border-t border-heaven-teal-light/20">
                {product.material && (
                  <div className="flex items-start">
                    <span className="font-semibold text-heaven-teal-dark w-32 flex-shrink-0">Material:</span>
                    <span className="text-heaven-teal-light flex-1">{product.material}</span>
                  </div>
                )}
                {product.dimensions && (
                  <div className="flex items-start">
                    <span className="font-semibold text-heaven-teal-dark w-32 flex-shrink-0">Dimensions:</span>
                    <span className="text-heaven-teal-light flex-1">{product.dimensions}</span>
                  </div>
                )}
                {product.color && (
                  <div className="flex items-start">
                    <span className="font-semibold text-heaven-teal-dark w-32 flex-shrink-0">Color:</span>
                    <span className="text-heaven-teal-light flex-1">{product.color}</span>
                  </div>
                )}
              </div>

              {/* Features */}
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

              {/* Consult Us Button */}
              <div className="pt-6 border-t border-heaven-teal-light/20">
                <button
                  onClick={() => router.push('/contact')}
                  className="w-full py-4 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-semibold text-lg"
                >
                  Consult Us
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <ScrollAnimation animationType="fade-in-up">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-heaven-teal-dark mb-8">
                Recommended Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedProducts.map((recProduct, index) => (
                  <ScrollAnimation
                    key={recProduct.id}
                    animationType="fade-in-up"
                    delay={index * 100}
                  >
                    <div className="h-full">
                      <ProductCard product={recProduct} />
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        )}

        {/* Similar Products */}
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
  )
}

