'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

interface StyledDropdownProps {
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string | null) => void;
  className?: string;
  labelPrefix?: string;
}

export default function StyledDropdown({ options, selectedOption, onSelect, className = '', labelPrefix = '' }: StyledDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => setIsOpen(!isOpen)
  const handleSelect = (option: string) => {
    onSelect(option === 'All' ? null : option)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={`relative ${className} ${isOpen ? 'z-20' : ''}`} ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="appearance-none w-full px-6 py-3 pr-12 rounded-full font-medium bg-white text-heaven-teal-dark border-2 border-heaven-teal hover:bg-heaven-teal-light hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-heaven-teal-dark flex items-center justify-between"
      >
        <span>{labelPrefix}{selectedOption || 'All'}</span>
        <ChevronDownIcon className={`w-5 h-5 text-heaven-teal-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto"
          >
            <ul className="py-1">
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-2 text-gray-700 hover:bg-heaven-blue-light/20 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
