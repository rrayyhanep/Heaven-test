'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface OptionsDropdownProps {
  label: string
  options: string[]
  selectedOption: string | undefined
  setSelectedOption: (option: string) => void
}

export default function OptionsDropdown({ label, options, selectedOption, setSelectedOption }: OptionsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (!options || options.length === 0) {
    return null
  }

  const topRowOptions = options.slice(0, 3)
  const dropdownOptions = options.slice(3)

  return (
    <div>
      <label className="block text-sm font-medium text-heaven-teal-dark mb-2 text-center">{label}</label>
      <div className="bg-gray-200 rounded-2xl transition-all duration-300">
        <div className="flex items-center p-1">
          {topRowOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`relative px-4 py-1 text-sm font-medium rounded-full transition-colors w-full ${
                selectedOption === option ? 'text-heaven-teal-dark' : 'text-gray-500 hover:bg-gray-100/50'
              }`}>
              {selectedOption === option && (
                <motion.div
                  layoutId={`active-${label}`}
                  className="absolute inset-0 bg-white rounded-full shadow-md"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{option}</span>
            </button>
          ))}
          {options.length > 3 && (
            <button onClick={() => setIsOpen(!isOpen)} className="px-3 py-1 text-gray-500">
              <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
          )}
        </div>
        <AnimatePresence>
          {isOpen && dropdownOptions.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ overflow: 'hidden' }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-2 pt-0 grid grid-cols-3 gap-2">
                {dropdownOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedOption(option)
                      setTimeout(() => {
                        setIsOpen(false)
                      }, 500)
                    }}
                    className={`relative px-4 py-1 text-sm font-medium rounded-full transition-colors w-full ${
                      selectedOption === option ? 'text-heaven-teal-dark' : 'text-gray-500 hover:bg-gray-100/50'
                    }`}>
                    {selectedOption === option && (
                      <motion.div
                        layoutId={`active-${label}`}
                        className="absolute inset-0 bg-white rounded-full shadow-md"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{option}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
