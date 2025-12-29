'use client'

import { useState, useEffect } from 'react'

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  useEffect(() => {
    if (isOpen) {
      // Reset form when opening
      setFormData({ name: '', email: '', message: '' })
      setSubmitStatus(null)
      setIsSubmitting(false)
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setTimeout(() => {
          onClose()
        }, 2000) // Close after 2 seconds on success
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 className="text-2xl font-semibold text-heaven-teal-dark mb-6">
          Consult With Us
        </h2>
        {submitStatus === 'success' ? (
          <p className="text-green-600 text-center">Your message has been sent successfully! This window will close shortly.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-heaven-teal-dark mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-heaven-teal-light rounded-lg focus:outline-none focus:border-heaven-teal-dark transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-heaven-teal-dark mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-heaven-teal-light rounded-lg focus:outline-none focus:border-heaven-teal-dark transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-heaven-teal-dark mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border-2 border-heaven-teal-light rounded-lg focus:outline-none focus:border-heaven-teal-dark transition-colors resize-none"
                placeholder="What can we help you with?"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-semibold text-lg disabled:bg-gray-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'error' && (
              <p className="text-red-600 mt-4">An error occurred while sending your message. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
