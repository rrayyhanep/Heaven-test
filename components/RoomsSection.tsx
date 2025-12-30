'use client'

import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'
import RoomPopup from './RoomPopup'
import { products } from '@/data/products'

const roomData = {
  'living-room': {
    name: 'Living Room',
    description: 'Create a cozy and inviting living space with our carefully curated collection of sofas, coffee tables, and accent pieces.',
    products: [
      {
        id: 1,
        name: 'Luxury Sofa Set',
        category: 'Living Room',
        description: 'Elegant three-piece sofa set with premium upholstery',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Luxury Sofa Set')}`,
      },
      {
        id: 3,
        name: 'Comfortable Armchair',
        category: 'Living Room',
        description: 'Plush armchair perfect for reading and relaxation',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Comfortable Armchair')}`,
      },
      {
        id: 6,
        name: 'Coffee Table',
        category: 'Living Room',
        description: 'Contemporary coffee table with storage',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Coffee Table')}`,
      },
    ],
  },
  'dining-room': {
    name: 'Dining Room',
    description: 'Elegant dining experiences for every occasion. From intimate dinners to grand celebrations.',
    products: [
      {
        id: 2,
        name: 'Modern Dining Table',
        category: 'Dining Room',
        description: 'Contemporary dining table with sleek design',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Modern Dining Table')}`,
      },
      {
        id: 7,
        name: 'Dining Chair Set',
        category: 'Dining Room',
        description: 'Comfortable and stylish dining chairs',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Dining Chair Set')}`,
      },
      {
        id: 8,
        name: 'Buffet Cabinet',
        category: 'Dining Room',
        description: 'Elegant storage solution for your dining room',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Buffet Cabinet')}`,
      },
    ],
  },
  'bedroom': {
    name: 'Bedroom',
    description: 'Transform your bedroom into a peaceful retreat with our luxurious bed frames and storage solutions.',
    products: [
      {
        id: 4,
        name: 'Elegant Bed Frame',
        category: 'Bedroom',
        description: 'Stylish bed frame with modern aesthetics',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Elegant Bed Frame')}`,
      },
      {
        id: 9,
        name: 'Nightstand',
        category: 'Bedroom',
        description: 'Modern nightstand with drawer storage',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Nightstand')}`,
      },
      {
        id: 10,
        name: 'Wardrobe',
        category: 'Bedroom',
        description: 'Spacious wardrobe with multiple compartments',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Wardrobe')}`,
      },
    ],
  },
  'office': {
    name: 'Office',
    description: 'Productive workspaces that inspire creativity. Functional and stylish office furniture solutions.',
    products: [
      {
        id: 5,
        name: 'Office Desk',
        category: 'Office',
        description: 'Functional and stylish workspace solution',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Office Desk')}`,
      },
      {
        id: 11,
        name: 'Office Chair',
        category: 'Office',
        description: 'Ergonomic office chair for long work sessions',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Office Chair')}`,
      },
      {
        id: 12,
        name: 'Bookshelf',
        category: 'Office',
        description: 'Stylish bookshelf for your office or living room',
        image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Bookshelf')}`,
      },
    ],
  },
}

const rooms = [
  {
    id: 1,
    name: 'Living Room',
    description: 'Create a cozy and inviting living space',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Living Room')}`,
    slug: 'living-room',
  },
  {
    id: 2,
    name: 'Dining Room',
    description: 'Elegant dining experiences for every occasion',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Dining Room')}`,
    slug: 'dining-room',
  },
  {
    id: 3,
    name: 'Bedroom',
    description: 'Transform your bedroom into a peaceful retreat',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Bedroom')}`,
    slug: 'bedroom',
  },
  {
    id: 4,
    name: 'Office',
    description: 'Productive workspaces that inspire creativity',
    image: `https://placehold.co/800x600/1a4d4d/7dd3f0?text=${encodeURIComponent('Office')}`,
    slug: 'office',
  },
]

export default function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  const handleRoomClick = (slug: string) => {
    setSelectedRoom(slug)
  }

  const handleClosePopup = () => {
    setSelectedRoom(null)
  }

  const currentRoom = selectedRoom ? roomData[selectedRoom as keyof typeof roomData] : null

  return (
    <>
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-heaven-teal-dark mb-4">
                Shop by Room
              </h2>
              <p className="text-base sm:text-lg text-heaven-teal-light max-w-2xl mx-auto">
                Discover furniture curated for every space in your home
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, index) => (
              <ScrollAnimation
                key={room.id}
                animationType="fade-in-up"
                delay={index * 100}
              >
                <div
                  onClick={() => handleRoomClick(room.slug)}
                  className="group relative h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-heaven-teal-dark/80 to-heaven-teal/80 z-10 group-hover:from-heaven-teal-dark/90 group-hover:to-heaven-teal/90 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-heaven-teal-light/20 to-heaven-blue-light/20 flex items-center justify-center z-0">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-heaven-teal-dark/20 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-heaven-teal-dark"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <p className="text-heaven-teal-dark font-medium">{room.name}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-6 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                      {room.name}
                    </h3>
                    <p className="text-sm text-heaven-blue-light">
                      {room.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <RoomPopup
        room={currentRoom}
        slug={selectedRoom}
        isOpen={selectedRoom !== null}
        onClose={handleClosePopup}
      />
    </>
  )
}
