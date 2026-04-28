'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import Button from '../ui/Button'
import SectionLabel from '../ui/SectionLabel'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full bg-brand-dark overflow-hidden">
      {/* Sticky Background Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Cinematic Backdrop */}
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <Image
            src="/images/products/hero banner.png"
            alt="IRA Beverages Cinematic Background"
            fill
            className="object-cover opacity-40 brightness-50 contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-80"></div>
        </motion.div>

        {/* Floating Narrative Content */}
        <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ opacity }}
          >
            <SectionLabel className="mb-8 tracking-[0.5em] !text-brand-lime opacity-80">EST. 2023</SectionLabel>
            
            <h1 className="text-6xl md:text-[120px] font-display font-bold leading-none mb-4 tracking-tighter">
              <span className="block text-brand-cream">A NEW ERA</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-brand-lime to-brand-green italic">OF REFRESHMENT</span>
            </h1>

            <p className="font-body text-brand-cream/60 text-lg md:text-2xl max-w-2xl mx-auto mb-12 tracking-wide font-light leading-relaxed">
              Crafting premium natural elixirs that redefine the art of hydration. From the heart of Andhra to your fingertips.
            </p>

            <div className="flex gap-6 justify-center">
              <Button href="/products" variant="filled" className="!bg-brand-lime !text-brand-dark px-12 py-5 text-lg font-bold hover:!bg-brand-orange transition-all duration-500 rounded-none tracking-widest uppercase">
                Explore The Collection
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Hero Product Reveal */}
        <motion.div 
          className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 z-10 w-[300px] md:w-[500px] h-[600px] md:h-[900px] pointer-events-none"
          style={{ y }}
        >
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8, 
              ease: "easeInOut" 
            }}
            className="relative w-full h-full filter drop-shadow-[0_50px_100px_rgba(136,192,99,0.3)]"
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

        {/* Cinematic Particles or Ambient Light */}
        <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/20 rounded-full blur-[120px] animate-pulse"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Narrative Section 2 (Optional/Transitions to TrustStrip) */}
      <div className="h-screen bg-brand-dark flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-cream mb-8">Naturally Bold. Aggressively Pure.</h2>
              <p className="text-xl text-brand-cream/60 leading-relaxed font-light">
                  We don&apos;t just make drinks. We bottle moments of pure intensity. Every IRA bottle is a testament to our commitment to quality, flavor, and the vibrant spirit of modern India.
              </p>
          </div>
      </div>
    </section>
  )
}
