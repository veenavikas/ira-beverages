'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

export default function BrandStory() {
  const { scrollYProgress } = useScroll()
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section className="bg-brand-dark overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="p-12 md:p-[80px] flex flex-col justify-center">
          <SectionLabel>OUR ORIGINS</SectionLabel>
          <h2 className="text-5xl md:text-7xl mb-8">Born in Vizag.<br/>Built for India.</h2>
          <div className="font-body text-brand-cream/70 space-y-6 text-lg mb-10 max-w-xl">
            <p>
              We were tired of sodas that tasted like chemicals and sugar syrup. We wanted something real, something that actually tasted like the ingredients on the label.
            </p>
            <p>
              So we built IRA Beverages. Crafted with natural extracts, bold carbonation, and zero compromise on flavour. This is soda done right.
            </p>
          </div>
          <div>
            <Button href="/about" variant="outline">Read Our Story →</Button>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
            <div className="w-full h-full bg-[#111] relative">
              {/* Using a placeholder gradient for the lifestyle image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-cola/40 mix-blend-overlay z-10" />
              <Image
                src="/images/products/ira%20products.png"
                alt="IRA Beverages Lifestyle"
                fill
                className="object-cover opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
