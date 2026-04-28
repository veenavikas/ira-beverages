'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '../ui/Button'

interface MobileMenuProps {
  links: { name: string; href: string }[]
  onClose: () => void
}

export default function MobileMenu({ links, onClose }: MobileMenuProps) {
  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const }
    },
    exit: { 
      opacity: 0, 
      y: '-100%',
      transition: { duration: 0.3, ease: 'easeInOut' as const }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.4, ease: 'easeOut' as const }
    })
  }

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-30 bg-brand-dark pt-24 px-6 pb-10 flex flex-col"
    >
      <div className="flex flex-col gap-6 flex-grow">
        {links.map((link, i) => (
          <motion.div custom={i} variants={linkVariants} initial="hidden" animate="visible" key={link.name}>
            <Link
              href={link.href}
              className="text-4xl font-display font-bold text-brand-cream hover:text-brand-lime"
              onClick={onClose}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        variants={linkVariants}
        custom={links.length}
        initial="hidden"
        animate="visible"
        className="mt-auto"
      >
        <Button href="/distributors" variant="filled" className="w-full text-center" onClick={onClose}>
          Become a Distributor
        </Button>
      </motion.div>
    </motion.div>
  )
}
