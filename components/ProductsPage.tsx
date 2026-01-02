'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import ProductCard from './ProductCard'
import ScrollAnimation from './ScrollAnimation'
import { Product } from '@/data/products'
import StyledDropdown from './StyledDropdown'

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)
  const productsPerPage = 18

  useEffect(() => {
    const category = searchParams.get('category');
    const type = searchParams.get('type');
    if (category) {
      setSelectedCategory(category);
    }
    if (type) {
      setSelectedType(type);
    }
  }, [searchParams]);


  const updateURL = (category: string | null, type: string | null) => {
    const params = new URLSearchParams();
    if (category) {
      params.set('category', category);
    }
    if (type) {
      params.set('type', type);
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleSetSelectedCategory = (category: string | null) => {
    setSelectedCategory(category)
    updateURL(category, selectedType)
  }

  const handleSetSelectedType = (type: string | null) => {
    setSelectedType(type)
    updateURL(selectedCategory, type)
  }

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)))
    return ['All', ...cats]
  }, [products])

  // Get unique types
  const types = useMemo(() => {
    const typeSet = new Set(products.map(p => p.type).filter((t): t is string => !!t))
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

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsAnimating(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedType]);

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-gradient-to-b from-white to-heaven-blue-light/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation animationType="fade-in-up">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-heaven-teal-dark mb-4">
              Our Products
            </h1>
            <p className="text-lg text-heaven-teal-light max-w-2xl mx-auto">
              Browse our complete collection of premium furniture
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative z-20">
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
                  placeholder="Search products..."
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
            <div className="flex flex-col md:flex-row flex-wrap items-stretch md:items-center justify-center gap-4 mb-12 px-4 md:px-0">
              
              {/* Category Filter Dropdown (Mobile) */}
              <div className="relative md:hidden">
                <StyledDropdown
                  options={categories}
                  selectedOption={selectedCategory}
                  onSelect={handleSetSelectedCategory}
                  labelPrefix="Category: "
                />
              </div>

              {/* Category Filter Buttons (Desktop) */}
              <div className="hidden md:flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleSetSelectedCategory(category === 'All' ? null : category)}
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
                <StyledDropdown
                  options={types}
                  selectedOption={selectedType}
                  onSelect={handleSetSelectedType}
                  labelPrefix="Type: "
                  className="w-full md:w-auto"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>


        {/* Results Count */}
        {filteredProducts.length > 0 && (
          <div className="mb-8 text-center">
            <p className="text-heaven-teal-light">
              Showing <span className="font-semibold text-heaven-teal-dark">{currentProducts.length}</span> of {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Products Grid */}
        <div id="product-grid" className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts.map((product, index) => (
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
                    handleSetSelectedCategory(null)
                    handleSetSelectedType(null)
                  }}
                  className="px-6 py-2 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-medium"
                >
                  Clear Filters
                </button>
              </div>
            </ScrollAnimation>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <ScrollAnimation animationType="fade-in-up">
            <div className="mt-12 flex justify-center items-center gap-4">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-6 py-3 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal disabled:bg-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Previous
              </button>
              <span className="text-heaven-teal-dark font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-6 py-3 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal disabled:bg-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Next
              </button>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </div>
  )
}
