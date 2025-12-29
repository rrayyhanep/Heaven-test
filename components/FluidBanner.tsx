'use client'

import { useEffect, useRef } from 'react'
import $ from 'jquery'
import 'jquery.ripples'
import { createGradientDataUrl } from '@/lib/gradient'

interface FluidBannerProps {
  children: React.ReactNode
  className?: string
  gradientColors?: string[]
}

export default function FluidBanner({ 
  children, 
  className, 
  gradientColors = ['#1a4d4d', '#2d6a6a', '#3d8a8a'] 
}: FluidBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const $container = $(containerRef.current)

    const initializeRipples = () => {
      const width = $container.width()
      const height = $container.height()

      if (width && height && width > 0 && height > 0) {
        const gradientDataUrl = createGradientDataUrl(width, height, 'vertical', ...gradientColors)

        try {
          $container.ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.01,
            imageUrl: gradientDataUrl,
            interactive: true,
          })
        } catch (e) {
          console.error("Error initializing ripples: ", e)
        }
      }
    }

    const destroyRipples = () => {
      try {
        if ($container.data('ripples')) {
          $container.ripples('destroy')
        }
      } catch (e) {
        console.error("Error destroying ripples: ", e)
      }
    }

    const handleResize = () => {
      destroyRipples()
      initializeRipples()
    }

    initializeRipples()

    const startAnimation = () => {
      if (intervalIdRef.current) return
      intervalIdRef.current = setInterval(() => {
        if (containerRef.current) {
          const currentWidth = $container.width() ?? 0
          const currentHeight = $container.height() ?? 0
          if (currentWidth > 0 && currentHeight > 0) {
            const x = Math.random() * currentWidth
            const y = Math.random() * currentHeight
            const radius = 20
            const strength = 0.01
            $container.ripples('drop', x, y, radius, strength)
          }
        }
      }, 400)
    }

    const stopAnimation = () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current)
        intervalIdRef.current = null
      }
    }

    $container.on('mouseenter', startAnimation)
    $container.on('mouseleave', stopAnimation)
    $(window).on('resize', handleResize)

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current)
      }
      $container.off('mouseenter', startAnimation)
      $container.off('mouseleave', stopAnimation)
      $(window).off('resize', handleResize)
      destroyRipples()
    }
  }, [gradientColors])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
