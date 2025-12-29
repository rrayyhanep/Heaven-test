import Image from 'next/image'

interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 60, className = '' }: LogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src="/images/logo.png"
        alt="Heaven Furniture Logo"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </div>
  )
}

