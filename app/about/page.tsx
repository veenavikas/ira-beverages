import React from 'react'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import DistributorCTA from '@/components/sections/DistributorCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'The story behind IRA Beverages — Born in Visakhapatnam, built for India.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-cream pt-32">
      {/* Brand Statement */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-[80px] py-20 relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/products/hero%20banner.png" alt="Nature" fill className="object-cover opacity-90" />
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

      {/* Values */}
      <section className="bg-brand-dark text-brand-cream py-32 px-6 md:px-[80px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Taste First", desc: "If it doesn't make you say 'wow' on the first sip, we don't bottle it." },
              { title: "Made Local", desc: "Proudly manufactured in Andhra Pradesh, creating local jobs and supporting our community." },
              { title: "Honest Ingredients", desc: "No hidden chemicals. Just natural extracts, pure sugar, and water." }
            ].map((value, i) => (
              <div key={i} className="border-t border-brand-cream/20 pt-8">
                <h3 className="text-3xl md:text-4xl mb-4 text-brand-lime">{value.title}</h3>
                <p className="font-body text-lg text-brand-cream/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (Placeholder) */}
      <section className="bg-brand-cream text-brand-dark py-24 px-6 md:px-[80px]">
        <div className="max-w-[1440px] mx-auto text-center">
          <SectionLabel className="!text-brand-dark before:bg-brand-dark mx-auto justify-center">THE PEOPLE</SectionLabel>
          <h2 className="text-5xl md:text-6xl mt-4 mb-16">Behind the Bottle</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="text-left">
                <div className="aspect-[3/4] bg-brand-dark/10 rounded-xl mb-4"></div>
                <h4 className="font-display font-bold text-2xl">Team Member {i}</h4>
                <p className="font-body text-brand-dark/60 font-medium">Co-Founder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DistributorCTA />
    </div>
  )
}
