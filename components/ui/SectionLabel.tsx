import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`label-text text-brand-lime flex items-center gap-2 mb-4 ${className}`}>
      <span className="w-2 h-2 bg-brand-lime rounded-full" />
      {children}
    </div>
  )
}
