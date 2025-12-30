
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-150 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 md:h-16">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Logo className="w-16 h-7 md:w-24 md:h-10" />
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline divide-x divide-gray-300">
                <Link href="/" className="px-4 font-medium text-gray-700 hover:text-heaven-blue transition-colors">Home</Link>
                <Link href="/products" className="px-4 font-medium text-gray-700 hover:text-heaven-blue transition-colors">Products</Link>
                <Link href="/rooms" className="px-4 font-medium text-gray-700 hover:text-heaven-blue transition-colors">Rooms</Link>
                <Link href="/about" className="px-4 font-medium text-gray-700 hover:text-heaven-blue transition-colors">About</Link>
                <Link href="/contact" className="px-4 font-medium text-gray-700 hover:text-heaven-blue transition-colors">Contact</Link>
              </div>
            </nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-heaven-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      <div className={`fixed top-12 right-0 h-auto pb-8 w-2/5 sm:w-1/4 z-50 md:hidden bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-2 px-8">
            <div className="flex flex-col divide-y divide-gray-300 text-center">
                <Link href="/" className="py-4 text-xl font-light text-gray-800 hover:text-heaven-blue transition-colors" onClick={closeMenu}>Home</Link>
                <Link href="/products" className="py-4 text-xl font-light text-gray-800 hover:text-heaven-blue transition-colors" onClick={closeMenu}>Products</Link>
                <Link href="/rooms" className="py-4 text-xl font-light text-gray-800 hover:text-heaven-blue transition-colors" onClick={closeMenu}>Rooms</Link>
                <Link href="/about" className="py-4 text-xl font-light text-gray-800 hover:text-heaven-blue transition-colors" onClick={closeMenu}>About</Link>
                <Link href="/contact" className="py-4 text-xl font-light text-gray-800 hover:text-heaven-blue transition-colors" onClick={closeMenu}>Contact</Link>
            </div>
          </div>
      </div>
    </>
  )
}
