'use client'

export default function MobileFeaturedSection() {
  const features = [
    {
      title: 'Premium Quality',
      description: 'Crafted with the finest materials and attention to detail',
      icon: '✨',
    },
    {
      title: 'Modern Design',
      description: 'Contemporary styles that complement any interior',
      icon: '🎨',
    },
    {
      title: 'Comfort First',
      description: 'Designed for ultimate comfort and relaxation',
      icon: '🛋️',
    },
  ]

  return (
    <section className="md:hidden py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-heaven-teal-dark mb-3">
            Why Choose Heaven Furniture
          </h2>
          <p className="text-sm sm:text-md text-heaven-teal-light max-w-xl mx-auto">
            Experience the perfect blend of style, comfort, and quality
          </p>
        </div>
        <div className="space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="text-3xl sm:text-4xl mr-5">{feature.icon}</div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-heaven-teal-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-heaven-teal-light text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
