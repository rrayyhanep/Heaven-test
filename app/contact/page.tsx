'use client'

import { useState } from 'react'
import { contactInfo } from '@/data/config'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

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
        setFormData({ name: '', email: '', message: '' })
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

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(null), 2000) // Reset after 2 seconds
  }

  return (
    <div className="pt-16 md:pt-20 pb-20 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-heaven-teal-dark mb-4 md:mb-6">
            Get in Touch
          </h1>
          <p className="text-sm md:text-lg text-heaven-teal-light max-w-2xl mx-auto">
            Have a question or want to learn more about our furniture? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-heaven-teal-dark mb-6 text-center md:text-left">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-heaven-teal-dark text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-heaven-teal-dark mb-1">Email</h3>
                  <p className="text-sm sm:text-base text-heaven-teal-light cursor-pointer" onClick={() => handleCopy(contactInfo.email)}>
                    {contactInfo.email}
                    {copied === contactInfo.email && <span className="ml-2 text-green-500">Copied!</span>}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-heaven-teal-dark text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-heaven-teal-dark mb-1">Phone</h3>
                  {contactInfo.phone.map((number, index) => (
                    <p key={index} className="text-sm sm:text-base text-heaven-teal-light cursor-pointer" onClick={() => handleCopy(number)}>
                      {number}
                      {copied === number && <span className="ml-2 text-green-500">Copied!</span>}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-heaven-teal-dark text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-heaven-teal-dark mb-1">Address</h3>
                  <p className="text-sm sm:text-base text-heaven-teal-light" dangerouslySetInnerHTML={{ __html: contactInfo.address }} />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-heaven-teal-dark mb-6 text-center md:text-left">
              Send us a Message
            </h2>
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
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-heaven-teal-dark text-white rounded-lg hover:bg-heaven-teal transition-colors font-semibold text-base sm:text-lg disabled:bg-gray-400"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Your message has been sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">An error occurred while sending your message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
