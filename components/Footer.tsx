'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { contactInfo } from '@/data/config'

export default function Footer() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(null), 2000) // Reset after 2 seconds
  }

  return (
    <footer className="bg-heaven-teal-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Logo className="w-20 h-8 flex-shrink-0" />
            </div>
            <p className="text-heaven-blue-light text-xs sm:text-sm max-w-md">
              Crafting premium furniture pieces that transform your living spaces into havens of comfort and style.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 ">
            <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-heaven-blue-light hover:text-white transition-colors text-xs sm:text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-heaven-blue-light hover:text-white transition-colors text-xs sm:text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-heaven-blue-light hover:text-white transition-colors text-xs sm:text-sm">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-heaven-blue-light hover:text-white transition-colors text-xs sm:text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-heaven-blue-light hover:text-white transition-colors text-xs sm:text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm sm:text-base">Contact</h3>
            <ul className="space-y-2 text-heaven-blue-light text-xs sm:text-sm">
              <li className="cursor-pointer" onClick={() => handleCopy(contactInfo.email)}>
                Email: {contactInfo.email}
                {copied === contactInfo.email && <span className="ml-2 text-green-500">Copied!</span>}
              </li>
              <li>
                Phone:{' '}
                {contactInfo.phone.map((number, index) => (
                  <span key={index} className="cursor-pointer" onClick={() => handleCopy(number)}>
                    {number}
                    {copied === number && <span className="ml-2 text-green-500">Copied!</span>}
                    {index < contactInfo.phone.length - 1 && ', '}
                  </span>
                ))}
              </li>
              <li dangerouslySetInnerHTML={{ __html: `Address: ${contactInfo.address}` }} />
            </ul>
          </div>
        </div>

        <div className="border-t border-heaven-teal mt-6 pt-6 sm:mt-8 sm:pt-8 text-center text-xs sm:text-sm text-heaven-blue-light">
          <p>&copy; {new Date().getFullYear()} Heaven Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
