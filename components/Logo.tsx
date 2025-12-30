import Image from 'next/image'

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="/images/logo.png"
        alt="Heaven Furniture Logo"
        width={96}
        height={40}
        className="object-contain w-full h-full object-left"
        priority
        unoptimized
      />
    </div>
  )
}
