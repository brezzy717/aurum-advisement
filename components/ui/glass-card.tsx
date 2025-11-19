import React from 'react'
import { clsx } from 'clsx'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={clsx(
        'glass-card',
        {
          'transition hover:-translate-y-1 hover:border-aurum-cyan/60': hover,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
