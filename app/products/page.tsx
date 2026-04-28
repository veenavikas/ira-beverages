'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/products'
import { Product } from '@/types'
import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { MessageCircle, X } from 'lucide-react'

export default function ProductsPage() {
  const [filter, setFilter] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filters = ['All', 'Cola', 'Berry', 'Ginger', 'Citrus']

  const filteredProducts = products.filter(p => {
    if (filter === 'All') return true
    return p.flavourNotes.some(note => note.includes(filter))
  })

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark pt-32 pb-24">
      {/* Header */}
      <div className="bg-brand-green text-brand-cream py-20 px-6 md:px-[80px] -mt-32 pt-40 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="/images/products/banner.png" alt="pattern" fill className="object-cover grayscale invert" />
        </div>
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center relative z-10">
          <SectionLabel className="!text-brand-cream before:bg-brand-cream">OUR RANGE</SectionLabel>
          <h1 className="text-6xl md:text-8xl mt-4 mb-6">Our Collection of Products</h1>
          <p className="text-xl font-body text-brand-cream/80 italic">Experience the pure taste of nature in every bottle.</p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-[80px]">
        {/* Filter Bar */}
        <div className="sticky top-20 z-20 flex gap-4 overflow-x-auto no-scrollbar py-4 mb-12 border-b border-brand-dark/10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-body font-bold uppercase tracking-wider text-sm whitespace-nowrap transition-colors ${
                filter === f ? 'bg-brand-lime text-brand-dark' : 'border border-brand-dark/20 text-brand-dark hover:bg-brand-dark hover:text-brand-cream'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ backgroundColor: product.color.primary }}
              >
                <Link href={`/products/${product.slug}`} className="block relative h-[400px] p-8 group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <div className="relative w-full h-full">
                      <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-2xl" />
                    </div>
                  </div>
                </Link>
                
                <div className="bg-white p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-3xl font-display font-bold text-brand-dark mb-1">{product.name}</h2>
                      <p className="font-body text-brand-dark/70 text-sm font-medium">{product.tagline}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-2xl text-brand-dark">₹{product.mrp}</p>
                      <p className="font-body text-xs font-bold uppercase tracking-wider text-brand-dark/50">{product.volume}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.flavourNotes.map(note => (
                      <span key={note} className="px-3 py-1 rounded-full border border-brand-dark/10 text-xs font-bold uppercase tracking-wider text-brand-dark/70">
                        {note}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-4">
                    <Button href={`/products/${product.slug}`} variant="outline" className="!text-brand-dark !border-brand-dark hover:!bg-brand-dark hover:!text-brand-cream w-full">
                      View Details
                    </Button>
                    <Button onClick={() => setSelectedProduct(product)} variant="filled" className="w-full">
                      Enquire →
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-brand-cream rounded-2xl p-6 md:p-10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 text-brand-dark/50 hover:text-brand-dark"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-3xl font-display font-bold mb-2">Order Enquiry</h3>
              <p className="font-body text-brand-dark/70 mb-8">for {selectedProduct.name}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <a 
                  href={`https://wa.me/919912444997?text=Hi+IRA+Beverages!+I+want+to+enquire+about+ordering+${selectedProduct.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-8 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle size={48} className="text-[#25D366] mb-4" />
                  <span className="font-body font-bold text-[#1da851]">Chat on WhatsApp</span>
                </a>

                <Link href="/contact" className="flex flex-col items-center justify-center p-8 border border-brand-dark/20 rounded-xl hover:bg-brand-dark hover:text-brand-cream transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <span className="font-body font-bold">Send an Enquiry</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
