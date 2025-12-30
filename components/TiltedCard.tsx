'use client'

import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React from 'react'

interface TiltedCardProps {
  imageSrc?: string
  altText?: string
  captionText?: string
  containerHeight?: string
  containerWidth?: string
  imageHeight?: string
  imageWidth?: string
  rotateAmplitude?: number
  scaleOnHover?: number
  showMobileWarning?: boolean
  showTooltip?: boolean
  displayOverlayContent?: boolean
  overlayContent?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export default function TiltedCard({
  imageSrc,
  altText = 'Card image',
  captionText,
  containerHeight = '300px',
  containerWidth = '300px',
  imageHeight = '300px',
  imageWidth = '300px',
  rotateAmplitude = 12,
  scaleOnHover = 1.2,
  showMobileWarning = false,
  showTooltip = true,
  displayOverlayContent = true,
  overlayContent,
  children,
  className = '',
}: TiltedCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateXValue = useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude])
  const rotateYValue = useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude])
  
  const springConfig = { stiffness: 300, damping: 30 }
  const rotateX = useSpring(rotateXValue, springConfig)
  const rotateY = useSpring(rotateYValue, springConfig)
  
  const transform = useTransform(
    [rotateX, rotateY],
    ([rx, ry]) => `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const normalizedX = mouseX / (rect.width / 2)
    const normalizedY = mouseY / (rect.height / 2)

    x.set(normalizedX)
    y.set(normalizedY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div 
      className={`tilted-card-wrapper ${className}`}
      style={{ perspective: isMobile ? 'none' : '1000px' }}
    >
      {showMobileWarning && isMobile && (
        <div className="mb-2 text-sm text-yellow-600 text-center">
          Tilt effect works best on desktop devices
        </div>
      )}

      <motion.div
        ref={cardRef}
        className="tilted-card-container"
        style={{
          width: containerWidth,
          height: containerHeight,
          scale: isHovered ? scaleOnHover : 1,
          transform: isMobile ? 'none' : transform,
          transformStyle: isMobile ? 'flat' : 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="tilted-card-inner"
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: isMobile ? 'flat' : 'preserve-3d',
          }}
        >
          {imageSrc && (
            <div
              className="tilted-card-image-container"
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
              }}
            >
              <img
                src={imageSrc}
                alt={altText}
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
              {displayOverlayContent && overlayContent && (
                <div
                  className="tilted-card-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '16px',
                    borderRadius: '12px',
                    transition: 'opacity 0.3s',
                    opacity: isHovered ? 1 : 0.8,
                  }}
                >
                  {overlayContent}
                </div>
              )}
            </div>
          )}

          {children && (
            <div
              className="tilted-card-content"
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
            >
              {children}
            </div>
          )}

          {captionText && !displayOverlayContent && (
            <div
              className="tilted-card-caption"
              style={{
                marginTop: '8px',
                textAlign: 'center',
                fontSize: '14px',
                color: '#666',
              }}
            >
              {captionText}
            </div>
          )}

          {showTooltip && isHovered && (
            <motion.div
              className="tilted-card-tooltip"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                position: 'absolute',
                bottom: '-40px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                zIndex: 1000,
              }}
            >
              Hover to interact
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
