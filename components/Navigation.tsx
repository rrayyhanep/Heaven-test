'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setScrolled(currentScrollPos > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'bg-white shadow-md' : 'bg-warm-gray-100/80 backdrop-blur-lg'}`}>
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
