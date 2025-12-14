import { TextareaHTMLAttributes, forwardRef } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={`
            w-full rounded-lg border px-4 py-3 text-sm transition-all min-h-[100px] resize-y
            bg-gray-50/50 hover:bg-white focus:bg-white
            focus:outline-none focus:ring-4 focus:ring-[#169bc8]/20 focus:border-[#169bc8]
            ${error ? 'border-red-500 ring-4 ring-red-500/10 bg-red-50/30' : 'border-[#e5eaf1]'}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-red-500 text-xs mt-1.5 ml-1">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"
