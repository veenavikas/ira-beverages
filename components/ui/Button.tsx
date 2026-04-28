'use client'

import React, { useRef, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outline'
  href?: string
  children: React.ReactNode
  className?: string
  magnetic?: boolean
}

export default function Button({
  variant = 'filled',
  href,
  children,
  className = '',
  magnetic = true,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !magnetic) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    x.set(middleX * 0.3)
    y.set(middleY * 0.3)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const baseStyles = 'relative inline-flex items-center justify-center px-6 py-3 font-body font-medium uppercase tracking-wider text-sm transition-colors duration-300 rounded-full'
  const variantStyles = {
    filled: 'bg-brand-lime text-brand-dark hover:bg-[#FF8C00]',
    outline: 'border border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-dark',
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block"
    >
      <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
        {children}
      </button>
    </motion.div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}
