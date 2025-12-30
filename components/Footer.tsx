import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
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
              <li>Email: heavenfurniture000@gmail.com</li>
              <li>Phone: 9074 834993</li>
              <li>Address: Maruthur, Pattambi<br />Palakkad, Kerala<br />India</li>
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
