'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919912444997?text=Hi+IRA+Beverages!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 1 }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
      <MessageCircle size={28} className="relative z-10" />
    </motion.a>
  )
}
