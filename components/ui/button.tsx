import React from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-wider transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurum-cyan/80 disabled:opacity-50 disabled:pointer-events-none',
        {
          // Variants
          'border border-aurum-cyan/80 bg-aurum-cyan text-neutral-950 hover:-translate-y-0.5 hover:bg-aurum-cyan/90':
            variant === 'primary',
          'border border-white/10 bg-neutral-900/70 text-neutral-100 hover:border-aurum-cyan/70 hover:bg-white/5':
            variant === 'secondary',
          'border border-white/10 bg-transparent text-neutral-100 hover:border-aurum-cyan/70 hover:bg-white/5':
            variant === 'outline',
          'bg-transparent text-neutral-300 hover:text-white hover:bg-white/5': variant === 'ghost',
          // Sizes
          'px-4 py-2 text-xs': size === 'sm',
          'px-5 py-2.5 text-xs': size === 'md',
          'px-6 py-3 text-sm': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
