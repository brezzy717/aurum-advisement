import React from 'react'
import { clsx } from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wider border',
        {
          'bg-neutral-900/80 text-neutral-400 border-white/10': variant === 'default',
          'bg-emerald-500/10 text-emerald-300 border-emerald-500/40': variant === 'success',
          'bg-amber-500/10 text-amber-300 border-amber-500/40': variant === 'warning',
          'bg-red-500/10 text-red-300 border-red-500/40': variant === 'error',
          'bg-aurum-cyan/10 text-aurum-cyan border-aurum-cyan/40': variant === 'info',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
