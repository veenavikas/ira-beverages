'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Button from '../ui/Button'
import SectionLabel from '../ui/SectionLabel'
import AnimatedText from '../ui/AnimatedText'

export default function Hero() {
  const { scrollY } = useScroll()
  const bottleY = useTransform(scrollY, [0, 1000], [0, 300])
  const bottleScale = useTransform(scrollY, [0, 500], [1, 1.1])

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-brand-dark pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/products/hero%20banner.png"
          alt="IRA Beverages Premium Background"
          fill
          className="object-cover opacity-60 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-green)_0%,_transparent_70%)] opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[80px] h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full pb-20">
          
          <div className="flex flex-col items-start z-20">
            <SectionLabel>EST. 2023 · VISAKHAPATNAM</SectionLabel>
            
            <h1 className="text-6xl md:text-[80px] lg:text-[96px] text-brand-cream mb-6">
              <AnimatedText text="DRINK" />
              <AnimatedText text="DIFFERENT." delay={0.4} className="text-brand-lime" />
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl font-body text-brand-cream/70 mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Premium natural sodas crafted for bold people.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Button href="/products" variant="filled">Explore Flavours →</Button>
              <Button href="/distributors" variant="outline">Become a Distributor</Button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Bottle */}
      <motion.div 
        className="absolute left-1/2 md:left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[200px] md:w-[300px] lg:w-[400px] h-[500px] lg:h-[700px] pointer-events-none"
        style={{ y: bottleY, scale: bottleScale }}
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/products/cola.png"
            alt="IRA Cola Super"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-brand-lime py-3 border-t border-brand-dark z-20 group">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-4 items-center text-brand-dark font-body font-bold uppercase tracking-wider text-sm pr-4">
              <span>IRA COLA SUPER</span> <span>·</span>
              <span>IRA BLUEBERRY</span> <span>·</span>
              <span>IRA STRING</span> <span>·</span>
              <span>IRA LIME LEMON</span> <span>·</span>
              <span>IRA LEMON SALT</span> <span>·</span>
              <span>IRA ORANGE</span> <span>·</span>
              <span>IRA CLUBSODA</span> <span>·</span>
              <span>IRA WATER BOTTLE</span> <span>·</span>
              <span>MADE IN INDIA</span> <span>·</span>
              <span>NATURAL FLAVOURS</span> <span>·</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
