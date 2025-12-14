import Image from 'next/image'

export function LogoLoader({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`relative ${className} animate-pulse`}>
        <Image
          src="/DIC Logo.png"
          alt="Loading..."
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-[#169bc8] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-[#ffd166] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-[#021c3e] rounded-full animate-bounce"></div>
      </div>
    </div>
  )
}
