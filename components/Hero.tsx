'use client'

import ScrollAnimation from './ScrollAnimation'

function HeroContent() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 text-center">
      <ScrollAnimation animationType="fade-in" delay={200}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Welcome to Heaven Furniture
        </h1>
      </ScrollAnimation>
      <ScrollAnimation animationType="fade-in" delay={400}>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-heaven-blue-light max-w-3xl mx-auto">
          Discover our exquisite collection of premium furniture pieces, 
          crafted to transform your living spaces into havens of comfort and elegance.
        </p>
      </ScrollAnimation>
      <ScrollAnimation animationType="fade-in-up" delay={600}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="w-3/4 sm:w-auto px-4 py-2 sm:px-8 sm:py-3 bg-heaven-blue-light text-heaven-teal-dark font-semibold rounded-lg hover:bg-heaven-blue transition-colors shadow-lg text-center"
          >
            Explore Collection
          </a>
          <a
            href="/products"
            className="w-3/4 sm:w-auto px-4 py-2 sm:px-8 sm:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-heaven-teal-dark transition-colors text-center"
          >
            View All Products
          </a>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default function Hero() {
  return (
    <div className="relative text-white min-h-[60vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-heaven-teal-dark to-heaven-teal">
      <div className="absolute inset-0 bg-black/20"></div>
      <HeroContent />
    </div>
  )
}
