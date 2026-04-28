import React from 'react'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import DistributorCTA from '@/components/sections/DistributorCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Our Story | IRA Beverages',
  description: 'Discover the story of IRA Beverages — from our roots in Anakapalli to our mission of delivering "Pure by Nature" hydration across India. Learn about our commitment to quality and innovation.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-cream pt-32">
      {/* Brand Statement */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-[80px] py-20 relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/products/banner.png" alt="Nature" fill className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-brand-dark/50" />
        </div>
        <div className="max-w-[1440px] mx-auto w-full relative z-10 text-center">
          <SectionLabel className="mx-auto justify-center !text-brand-cream before:bg-brand-cream">PREMIUM HYDRATION</SectionLabel>
          <h1 className="text-5xl md:text-8xl lg:text-[110px] text-brand-cream max-w-6xl mx-auto leading-[0.9] mt-6">
            BEYOND REFRESHMENT
          </h1>
          <p className="mt-12 text-xl md:text-2xl font-body text-brand-cream/90 max-w-3xl mx-auto text-balance">
            Offering a carefully crafted selection of bottled waters, sodas, and more, IRA Beverages transcends the ordinary to bring you premium hydration.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-brand-cream text-brand-dark py-24 px-6 md:px-[80px]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-brand-orange mb-8 font-bold">About 'Ira Beverages'</h2>
            <div className="font-body text-lg text-brand-dark/80 space-y-4">
              <p>
                At IRA Beverages, we believe that refreshment is more than just quenching thirst — it's about crafting a pure, healthy, and delightful experience with every sip.
              </p>
              <p>
                Our journey began with a simple vision to deliver beverages that are truly "Pure by Nature." We are dedicated to crafting high-quality, naturally sourced drinks that combine great taste, premium ingredients, and complete purity. Every product we create reflects our commitment to innovation, sustainability, and well-being, ensuring that our consumers enjoy a drink that's as wholesome as it is refreshing.
              </p>
              <p>
                In fact, we take pride in utilizing modern technology with nature's essence to produce beverages that meet global standards of quality and hygiene. Whether it's our packaged drinking water or our innovative range of natural drinks, each bottle tells a story of trust, care, and purity.
              </p>
              <p className="font-bold text-brand-green">
                IRA Beverages — Pure by Nature, Crafted for You.
              </p>
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden bg-brand-dark/5">
            <Image
              src="/images/products/banner.png"
              alt="IRA Beverages Banner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Legacy */}
      <section className="bg-brand-green text-brand-cream py-32 px-6 md:px-[80px]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h3>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              At IRA Beverages, our mission is to deliver premium hydration through products that are pure, refreshing, and crafted with the highest standards of quality. We strive to inspire a healthier lifestyle by providing natural beverage choices that celebrate the purity of nature.
            </p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">A Legacy of Purity</h3>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              IRA Beverages was born out of a desire to redefine the way people experience bottled drinks. From our humble beginnings in Visakhapatnam to becoming a trusted name across the region, our legacy is built on a foundation of trust, transparency, and a passion for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-brand-cream text-brand-dark py-24 px-6 md:px-[80px]">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-brand-green">IRA Is Inspired by Innovation</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🚩", title: "Proudly Independent", desc: "Purpose-Driven" },
              { icon: "📜", title: "Certified Quality", desc: "Global Standards" },
              { icon: "🎧", title: "Customer-First", desc: "Philosophy" },
              { icon: "🌍", title: "Sustainability", desc: "Focused" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center text-3xl mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-sm opacity-60 uppercase tracking-wider">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pure by Nature Section */}
      <section className="bg-brand-green text-brand-cream py-24 px-6 md:px-[80px] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/products/ira%20products.png" alt="Pure nature products" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Pure by nature</h2>
            <div className="space-y-6 text-lg opacity-90">
              <p>
                "Pure by Nature" isn't just our tagline — it's the philosophy that defines everything we do at IRA Beverages. From the source of our water to the final sealed bottle, every step of our process is built on the foundation of purity, sustainability, and natural goodness.
              </p>
              <p>
                We believe that nature provides everything needed for true refreshment. That's why our juices and sodas are made with minimal processing, no unnecessary additives, and maximum care — preserving the natural taste and freshness that your body deserves.
              </p>
              <p>
                Our state-of-the-art purification systems and eco-friendly practices ensure that every drop reflects the authentic essence of nature. At IRA, being Pure by Nature means choosing honesty over additives, freshness over flavoring, and nature over everything else.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DistributorCTA />
    </div>
  )
}
