'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden">
      {/* Background Hero Banner */}
      <Link href="/products" className="absolute inset-0 z-0 block cursor-pointer">
        <Image
          src="/images/products/hero banner.png"
          alt="IRA Beverages Hero Banner"
          fill
          className="object-cover"
          priority
        />
      </Link>

      {/* Decorative Gradient Overlay (Optional, for Header Visibility) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}
