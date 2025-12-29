'use client'

import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import ScrollAnimation from './ScrollAnimation'
import { Product } from '@/data/products'

// Helper function to filter by category
const filterByCategory = (products: Product[], category: string | null) => {
  if (!category || category === 'All') return products
  return products.filter((p) => p.category === category)
}

// Helper function to filter by type
const filterByType = (products: Product[], type: string | null) => {
  if (!type || type === 'All') return products
  return products.filter((p) => p.type === type)
}

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

export default function ProductsPage({ products }: { products: Product[] }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)))
    return ['All', ...cats]
  }, [products])

  // Get unique types
  const types = useMemo(() => {
    const typeSet = new Set(products.map(p => p.type).filter(Boolean as any))
    return ['All', ...Array.from(typeSet).sort()]
  }, [products])

  // Filter products based on search, category, and type
  const filteredProducts = useMemo(() => {
    let filtered = products
    filtered = filterByCategory(filtered, selectedCategory)
    filtered = filterByType(filtered, selectedType)
    filtered = filterBySearchQuery(filtered, searchQuery)
    return filtered
  }, [searchQuery, selectedCategory, selectedType, products])

  return (
    <div className="pt-20 pb-20 bg-gradient-to-b from-white to-heaven-blue-light/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation animationType="fade-in-up">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-heaven-teal-dark mb-4">
              Our Products
            </h1>
            <p className="text-lg text-heaven-teal-light max-w-2xl mx-auto">
              Browse our complete collection of premium furniture with advanced search and filtering options
            </p>
          </div>
        </ScrollAnimation>

        {/* Search Bar */}
        <ScrollAnimation animationType="fade-in-up" delay={100}>
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
                placeholder="Search products by name, description, category, type, material, or color..."
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
        </ScrollAnimation>

        {/* Filters */}
        <ScrollAnimation animationType="fade-in-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    (selectedCategory === category) || (category === 'All' && selectedCategory === null)
                      ? 'bg-heaven-teal-dark text-white shadow-lg scale-105'
                      : 'bg-white text-heaven-teal-dark border-2 border-heaven-teal hover:bg-heaven-teal-light hover:text-white hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Type Filter Dropdown */}
            <div className="relative">
              <select
                value={selectedType || 'All'}
                onChange={(e) => setSelectedType(e.target.value === 'All' ? null : e.target.value)}
                className="appearance-none px-6 py-2 pr-10 rounded-full font-medium bg-white text-heaven-teal-dark border-2 border-heaven-teal hover:bg-heaven-teal-light hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-heaven-teal-dark"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    Type: {type}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-heaven-teal-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Results Count */}
        {filteredProducts.length > 0 && (
          <div className="mb-8 text-center">
            <p className="text-heaven-teal-light">
              Showing <span className="font-semibold text-heaven-teal-dark">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ScrollAnimation
                key={product.id}
                animationType="fade-in-up"
                delay={index * 50}
              >
                <div className="h-full">
                  <ProductCard product={product} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        ) : (
          <ScrollAnimation animationType="fade-in-up">
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
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory(null)
                  setSelectedType(null)
                }}
                className="px-6 py-2 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-medium"
              >
                Clear Filters
              </button>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </div>
  )
}
