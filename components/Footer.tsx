import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-heaven-teal-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Logo size={60} className="flex-shrink-0" />
            </div>
            <p className="text-heaven-blue-light text-sm max-w-md">
              Crafting premium furniture pieces that transform your living spaces into havens of comfort and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-heaven-blue-light hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-heaven-blue-light hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-heaven-blue-light hover:text-white transition-colors text-sm">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-heaven-blue-light hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-heaven-blue-light hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide">Contact</h3>
            <ul className="space-y-2 text-heaven-blue-light text-sm">
              <li>Email: info@heavenfurniture.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Design Street</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-heaven-teal mt-8 pt-8 text-center text-sm text-heaven-blue-light">
          <p>&copy; {new Date().getFullYear()} Heaven Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

