import SpotlightCard from '@/components/SpotlightCard';

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20 bg-warm-gray-100 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-heaven-teal-dark mb-6">
            About Heaven Furniture
          </h1>
          <div className="w-24 h-1 bg-heaven-blue-light mx-auto"></div>
        </div>

        <div className="prose sm:prose-lg max-w-none">
            <SpotlightCard className="bg-gradient-to-br from-heaven-blue-light/20 to-heaven-teal-light/20 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-heaven-teal-dark mb-4">
                  Our Story
                </h2>
                <p className="text-warm-gray-800 leading-relaxed mb-4">
                  Heaven Furniture was founded with a vision to create furniture that transforms 
                  living spaces into havens of comfort, style, and elegance. We believe that 
                  furniture should not only be functional but also inspire and elevate your 
                  daily living experience.
                </p>
                <p className="text-warm-gray-800 leading-relaxed">
                  Every piece in our collection is carefully curated and designed with attention 
                  to detail, ensuring that you receive nothing but the finest quality furniture 
                  that stands the test of time.
                </p>
            </SpotlightCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <SpotlightCard className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-heaven-blue-light/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-heaven-teal-dark mb-3">
                Our Mission
              </h3>
              <p className="text-warm-gray-500">
                To provide premium furniture that combines exceptional craftsmanship, 
                modern design, and timeless elegance for discerning customers.
              </p>
            </SpotlightCard>
            <SpotlightCard className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-heaven-blue-light/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-heaven-teal-dark mb-3">
                Our Values
              </h3>
              <p className="text-warm-gray-500">
                Quality, craftsmanship, and customer satisfaction are at the heart of 
                everything we do. We are committed to excellence in every detail.
              </p>
            </SpotlightCard>
          </div>

          <SpotlightCard spotlightColor="rgba(125, 211, 240, 0.2)" className="bg-heaven-teal-dark text-white rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-heaven-blue-light">
              <li className="flex items-start">
                <span className="mr-3 text-heaven-blue-light">✓</span>
                <span>Premium quality materials and craftsmanship</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-heaven-blue-light">✓</span>
                <span>Contemporary designs that never go out of style</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-heaven-blue-light">✓</span>
                <span>Comfort-focused designs for everyday living</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-heaven-blue-light">✓</span>
                <span>Expert consultation and personalized service</span>
              </li>
            </ul>
          </SpotlightCard>
        </div>
      </div>
    </div>
  )
}
