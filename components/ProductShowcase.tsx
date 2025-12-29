'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'
import ScrollAnimation from './ScrollAnimation'
import { products } from '@/data/products'

const categories = ['All', 'Living Room', 'Dining Room', 'Bedroom', 'Office']

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Only show featured products
  const featuredProducts = products.filter((product) => product.featured === true)

  const filteredProducts =
    selectedCategory === 'All'
      ? featuredProducts
      : featuredProducts.filter((product) => product.category === selectedCategory)

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-heaven-blue-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animationType="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-heaven-teal-dark mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-heaven-teal-light max-w-2xl mx-auto mb-2 font-semibold">
              Best Sellers
            </p>
            <p className="text-base text-heaven-teal-light max-w-2xl mx-auto">
              Explore our most popular premium furniture pieces
            </p>
          </div>
        </ScrollAnimation>

        {/* Category Filter */}
        <ScrollAnimation animationType="fade-in-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-heaven-teal-dark text-white'
                    : 'bg-white text-heaven-teal-dark border-2 border-heaven-teal hover:bg-heaven-teal-light hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Products Grid */}
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
      </div>
    </section>
  )
}

