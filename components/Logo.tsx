import Image from 'next/image'

interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 60, className = '' }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Heaven Furniture Logo"
        fill
        sizes={`${size}px`}
        className="object-contain"
        priority
        unoptimized
      />
    </div>
  )
}
