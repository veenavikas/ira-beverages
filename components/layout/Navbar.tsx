'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 1)']
  )
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(10px)', 'blur(20px)']
  )
  const y = useTransform(scrollY, [0, 50], [24, 12])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter, y }}
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 h-[80px] md:h-[90px] w-[95%] max-w-[1200px] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-brand-dark/5 transition-colors"
      >
        <div className="px-6 md:px-8 h-full flex items-center justify-between">
          <Link href="/" className="relative z-50 flex items-center transition-transform hover:scale-105">
            <Image 
              src="/images/products/logo.png"
              alt="IRA Beverages Logo"
              width={240}
              height={90}
              className="object-contain w-auto h-14 md:h-16 scale-110 origin-left"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-body font-bold uppercase tracking-wider text-brand-dark hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button href="/distributors" variant="filled">
              Become a Distributor
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 text-brand-dark p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu links={navLinks} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}
