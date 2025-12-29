'use client'

import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Logo size={60} className="flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-heaven-teal-dark uppercase tracking-tight">
                Heaven
              </span>
              <span className="text-sm text-heaven-teal-dark uppercase tracking-wider">
                Furniture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-heaven-teal-dark hover:text-heaven-teal transition-colors font-medium">
              Home
            </Link>
            <Link href="/products" className="text-heaven-teal-dark hover:text-heaven-teal transition-colors font-medium">
              Products
            </Link>
            <Link href="/rooms" className="text-heaven-teal-dark hover:text-heaven-teal transition-colors font-medium">
              Rooms
            </Link>
            <Link href="/about" className="text-heaven-teal-dark hover:text-heaven-teal transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-heaven-teal-dark hover:text-heaven-teal transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-heaven-teal-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-heaven-teal-dark hover:text-heaven-teal transition-colors">
              Home
            </Link>
            <Link href="/products" className="block py-2 text-heaven-teal-dark hover:text-heaven-teal transition-colors">
              Products
            </Link>
            <Link href="/rooms" className="block py-2 text-heaven-teal-dark hover:text-heaven-teal transition-colors">
              Rooms
            </Link>
            <Link href="/about" className="block py-2 text-heaven-teal-dark hover:text-heaven-teal transition-colors">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-heaven-teal-dark hover:text-heaven-teal transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

