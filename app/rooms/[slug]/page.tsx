'use client'

import ScrollAnimation from '@/components/ScrollAnimation'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'
import { roomData } from '@/data/rooms'

interface PageProps {
  params: { slug: string }
}

export default function RoomPage({ params }: PageProps) {
  const { slug } = params
  const room = roomData[slug]

  if (!room) {
    return (
      <div className="pt-20 pb-20 text-center bg-warm-gray-100">
        <h1 className="text-4xl font-bold text-heaven-teal-dark mb-4">Room Not Found</h1>
        <p className="text-warm-gray-500">The room you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    )
  }

  // Get full product data from shared products array
  const roomProducts = room.productIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is typeof products[0] => p !== undefined)

  return (
    <div className="pt-20 pb-20 bg-warm-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animationType="fade-in-up">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-heaven-teal-dark mb-6">
              {room.name}
            </h1>
            <p className="text-lg text-warm-gray-800 max-w-3xl mx-auto">
              {room.description}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fade-in-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {roomProducts.map((product, index) => (
              <ScrollAnimation
                key={product.id}
                animationType="fade-in-up"
                delay={index * 100}
              >
                <div className="h-full">
                  <ProductCard product={product} />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}
