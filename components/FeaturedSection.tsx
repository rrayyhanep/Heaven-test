'use client'

import ScrollAnimation from './ScrollAnimation'
import TiltedCard from './TiltedCard'

export default function FeaturedSection() {
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
    <section className="hidden md:block py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animationType="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heaven-teal-dark mb-4">
              Why Choose Heaven Furniture
            </h2>
            <p className="text-base sm:text-lg text-heaven-teal-light max-w-2xl mx-auto">
              Experience the perfect blend of style, comfort, and quality
            </p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <ScrollAnimation
              key={index}
              animationType="fade-in-up"
              delay={index * 150}
            >
              <TiltedCard
                containerHeight="350px"
                containerWidth="100%"
                imageHeight="350px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                className="w-full max-w-sm"
              >
                <div className={`w-full h-full text-center p-8 rounded-lg border border-heaven-blue-light/20 shadow-md flex flex-col items-center justify-center bg-heaven-blue-light/10`}>
                  <div className="text-5xl sm:text-6xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-heaven-teal-dark mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-heaven-teal-light text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </TiltedCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
