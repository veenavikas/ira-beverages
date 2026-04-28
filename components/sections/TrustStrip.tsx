import React from 'react'
import { Leaf, MapPin, Droplets, Zap } from 'lucide-react'

export default function TrustStrip() {
  const items = [
    { icon: <Leaf size={24} />, label: "No Artificial Preservatives" },
    { icon: <MapPin size={24} />, label: "Made in Andhra Pradesh" },
    { icon: <Droplets size={24} />, label: "Real Fruit Extracts" },
    { icon: <Zap size={24} />, label: "Bold Carbonation" },
  ]

  return (
    <section className="bg-brand-lime py-20 px-6 md:px-[80px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4 text-brand-dark">
            <div className="p-4 bg-brand-dark text-brand-lime rounded-full">
              {item.icon}
            </div>
            <p className="font-body font-medium text-sm md:text-base uppercase tracking-wider">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
