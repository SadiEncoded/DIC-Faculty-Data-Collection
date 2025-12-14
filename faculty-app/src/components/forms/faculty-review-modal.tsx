import { X } from 'lucide-react'
import Image from 'next/image'

interface FacultyReviewModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  isSubmitting: boolean
  formValues: any
  previewImage: string | null
}

export const FacultyReviewModal = ({
  isOpen,
  onClose,
  onConfirm,
  isSubmitting,
  formValues,
  previewImage
}: FacultyReviewModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#021c3e]/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
        <div className="bg-gradient-to-br from-[#021c3e] to-[#042e68] px-8 py-6 text-white flex justify-between items-center border-b-4 border-[#ffd166]">
          <h2 className="text-lg font-semibold tracking-wide">Confirm Submission</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto bg-[#fbfdff]">
            <div className="flex items-start gap-5">
              {previewImage ? (
                <div className="w-20 h-20 relative rounded-xl overflow-hidden border-2 border-[#e5eaf1] shadow-sm shrink-0">
                  <Image src={previewImage} alt="Preview" fill className="object-cover" unoptimized />
                </div>
              ) : (
                <div className="w-20 h-20 bg-gray-100 rounded-xl"></div>
              )}
              <div>
                <h3 className="font-semibold text-[#021c3e] text-xl">{formValues.fullName}</h3>
                <p className="text-[#169bc8] font-medium">{formValues.designation}</p>
                <span className="inline-block mt-2 text-xs font-semibold bg-[#021c3e]/5 text-[#021c3e] px-2 py-1 rounded">
                  {formValues.department === 'science' ? 'Science Group' :
                    formValues.department === 'business' ? 'Business Group' :
                    formValues.department === 'humanities' ? 'Humanities Group' :
                    formValues.department}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white rounded-lg border border-[#e5eaf1] shadow-sm">
                <span className="block text-[#5b6b82] text-xs mb-1">Experiences</span>
                <span className="font-medium text-[#021c3e]">{String(formValues.experienceYears)} Years</span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-[#e5eaf1] shadow-sm">
                  <span className="block text-[#5b6b82] text-xs mb-1">Qualification</span>
                  <span className="font-medium text-[#021c3e]">{formValues.qualification}</span>
              </div>
              <div className="col-span-2 p-4 bg-white rounded-lg border border-[#e5eaf1] shadow-sm">
                  <span className="block text-[#5b6b82] text-xs mb-1">Official Email</span>
                  <span className="font-medium text-[#021c3e]">{formValues.email}</span>
              </div>
            </div>

            <div>
              <span className="block text-[#5b6b82] text-xs mb-2 font-medium">Areas of Expertise</span>
              <div className="flex flex-wrap gap-2">
                {formValues.expertise?.split(',').map((s: string, i: number) => (
                  <span key={i} className="bg-[#ffd166]/20 text-[#8a6a00] px-3 py-1 rounded-full text-xs font-medium border border-[#ffd166]/20">
                    {s.trim()}
                  </span>
                ))}
              </div>
            </div>
        </div>

        <div className="p-6 border-t border-[#e5eaf1] bg-white flex gap-4">
            <button 
              onClick={onClose}
              className="flex-1 py-3.5 rounded-xl border border-[#e5eaf1] text-[#5b6b82] font-semibold text-sm hover:bg-[#f9fafb] transition"
            >
              Edit Details
            </button>
            <button
              onClick={onConfirm}
              disabled={isSubmitting}
              className="flex-1 py-3.5 rounded-xl bg-gradient-to-br from-[#021c3e] to-[#042e68] text-white font-semibold text-sm tracking-wide shadow-[0_4px_14px_rgba(2,28,62,0.2)] hover:brightness-105 transition"
            >
              {isSubmitting ? 'Sending...' : 'Confirm Submission'}
            </button>
        </div>
      </div>
    </div>
  )
}
