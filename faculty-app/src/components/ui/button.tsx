import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  fullWidth?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', fullWidth = false, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
    
    const variants = {
      primary: "bg-gradient-to-br from-[#021c3e] to-[#042e68] text-white shadow-[0_14px_30px_rgba(2,28,62,0.32)] hover:brightness-110",
      outline: "bg-white border border-[#e5eaf1] text-[#5b6b82] hover:bg-[#f9fafb]",
      ghost: "bg-transparent text-[#5b6b82] hover:bg-black/5"
    }

    const width = fullWidth ? "w-full" : ""
    const sizes = "py-3.5 px-6 text-sm tracking-wide"

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${width} ${sizes} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
