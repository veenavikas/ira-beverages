'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/products'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function ProductGrid() {
  return (
    <section className="bg-brand-cream text-brand-dark py-24 px-6 md:px-[80px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <SectionLabel className="!text-brand-dark before:bg-brand-dark">OUR RANGE</SectionLabel>
          <h2 className="text-5xl md:text-7xl mt-4">Eight Flavours.<br/>Zero Compromise.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden p-6 flex flex-col justify-between cursor-pointer"
                style={{ backgroundColor: product.color.primary }}
              >
                <div className="flex justify-between items-start z-10">
                  {product.badge && (
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
                  <div className="relative w-full h-full max-h-[250px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                <div className="relative z-10 text-white mt-auto pt-4 border-t border-white/20">
                  <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                  <p className="text-sm opacity-90">{product.tagline}</p>
                  <span className="inline-block mt-4 text-sm font-bold uppercase tracking-wider group-hover:text-brand-lime transition-colors">
                    Explore →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="/products" variant="filled">See All Products →</Button>
        </div>
      </div>
    </section>
  )
}
