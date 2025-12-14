import { InputHTMLAttributes, forwardRef } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  startIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, startIcon, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8] pointer-events-none">
              {startIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              w-full rounded-lg border px-4 py-3 text-sm transition-all
              ${startIcon ? 'pl-10' : 'px-4'}
              bg-gray-50/50 hover:bg-white focus:bg-white
              focus:outline-none focus:ring-4 focus:ring-[#169bc8]/20 focus:border-[#169bc8]
              disabled:bg-gray-100 disabled:text-gray-500
              placeholder:text-slate-400
              ${error ? 'border-red-500 ring-4 ring-red-500/10 bg-red-50/30' : 'border-slate-200 hover:border-[#169bc8]/50'}
              ${className}
            `}
            {...props}
          />
        </div>
        {error && <p className="text-red-500 text-xs mt-1.5 ml-1">{error}</p>}
      </div>
    )
  }
)

Input.displayName = "Input"
