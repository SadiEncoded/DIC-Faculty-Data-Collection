import { FacultyProfileForm } from '@/components/forms/faculty-profile-form'

export default async function FacultySubmitPage() {
  // Artificial delay (1.5s) to ensure the premium loader is visible
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  return (
    <div className="relative min-h-screen py-12 px-4 flex items-center justify-center font-sans tracking-custom">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/cmpclose.png')" }}
      />
      
      {/* Bluish Overlay - High contrast for readability */}
      <div className="absolute inset-0 z-0 bg-[#021c3e]/80 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl">
        <FacultyProfileForm />
      </div>
    </div>
  )
}
