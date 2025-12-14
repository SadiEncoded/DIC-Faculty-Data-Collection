import { LogoLoader } from '@/components/ui/logo-loader'

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f0f4f8] bg-opacity-80 backdrop-blur-sm relative z-50">
       {/* Background overlay similar to page for consistency, but lighter */}
       <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#f0f4f8] via-[#e8eef5] to-[#dce6f0]" />
       
       <div className="relative z-10 flex flex-col items-center">
        <LogoLoader className="w-32 h-32" />
        <p className="mt-4 text-[#021c3e] font-serif tracking-wider text-sm animate-pulse">Loading Application...</p>
       </div>
    </div>
  )
}
