import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import FeaturedSection from '@/components/FeaturedSection'
import RoomsSection from '@/components/RoomsSection'
import MobileFeaturedSection from '@/components/MobileFeaturedSection'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <ProductShowcase />
      <RoomsSection />
      <MobileFeaturedSection />
    </>
  )
}
