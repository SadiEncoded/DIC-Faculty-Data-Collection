import { CheckCircle2, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'

interface DepartmentSelectProps {
  watch: UseFormWatch<any>
  setValue: UseFormSetValue<any>
  error?: string
}

export const DepartmentSelect = ({ watch, setValue, error }: DepartmentSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectedValue = watch('department')
  
  const toggleOpen = () => setIsOpen(!isOpen)

  const handleSelect = (value: any) => {
    setValue('department', value, { shouldValidate: true })
    setIsOpen(false)
  }

  const getLabel = (val: string) => {
    switch(val) {
      case 'science': return 'Science Group'
      case 'business': return 'Business Group'
      case 'humanities': return 'Humanities Group'
      default: return val
    }
  }

  return (
    <div className="relative w-full">
      <label className="block text-xs font-medium text-[#5b6b82] mb-1">Department *</label>
      
      <button
        type="button"
        onClick={toggleOpen}
        className={`
          w-full rounded-lg border px-4 py-3 text-sm flex items-center justify-between transition-all bg-white
          ${isOpen ? 'border-[#169bc8] ring-4 ring-[#169bc8]/20' : 'border-[#e5eaf1] hover:border-[#169bc8]/50'}
        `}
      >
        <span className={selectedValue ? 'text-[#021c3e] font-medium' : 'text-gray-400'}>
            {selectedValue ? getLabel(selectedValue) : 'Select...'}
        </span>
        <ChevronDown size={16} className={`text-[#5b6b82] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setIsOpen(false)}></div>
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-30 animate-in fade-in zoom-in-95 duration-100">
            <div className="max-h-[300px] overflow-y-auto p-2 space-y-2">
              
              {/* Undergraduate Group */}
              <div>
                <div className="px-3 py-2 text-[10px] uppercase tracking-wider font-bold text-[#169bc8] bg-blue-50/50 rounded-md mb-1">
                  Undergraduate (HSC)
                </div>
                {[
                  { label: 'Science Group', value: 'science' },
                  { label: 'Business Group', value: 'business' },
                  { label: 'Humanities Group', value: 'humanities' }
                ].map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect(opt.value)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between group transition-colors
                      ${selectedValue === opt.value ? 'bg-[#021c3e] text-white' : 'text-[#5b6b82] hover:bg-gray-50'}
                    `}
                  >
                    <span className="font-medium">{opt.label}</span>
                    {selectedValue === opt.value && <CheckCircle2 size={16} className="text-[#ffd166]" />}
                  </button>
                ))}
              </div>
              
              <div className="h-px bg-gray-100 my-1"></div>

              {/* Graduate Group */}
              <div>
                <div className="px-3 py-2 text-[10px] uppercase tracking-wider font-bold text-[#169bc8] bg-blue-50/50 rounded-md mb-1">
                  Graduate Programs
                </div>
                {['CSE', 'BBA'].map(dept => (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => handleSelect(dept)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between group transition-colors
                      ${selectedValue === dept ? 'bg-[#021c3e] text-white' : 'text-[#5b6b82] hover:bg-gray-50'}
                    `}
                  >
                    <span className="font-medium">{dept}</span>
                    {selectedValue === dept && <CheckCircle2 size={16} className="text-[#ffd166]" />}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </>
      )}

      {error && (
        <p className="text-red-500 text-xs mt-1.5 ml-1">{error}</p>
      )}
    </div>
  )
}
