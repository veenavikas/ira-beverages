import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-body font-medium uppercase tracking-wider bg-brand-dark text-brand-cream border border-brand-cream/20 ${className}`}>
      {children}
    </span>
  )
}
