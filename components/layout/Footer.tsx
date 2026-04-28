import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Camera, Tv, PlayCircle, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-green text-brand-cream border-t border-brand-cream/10 pt-16 pb-8 px-6 md:px-[80px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <Link href="/" className="inline-block transition-transform hover:scale-105">
            <Image 
              src="/images/products/logo.png"
              alt="IRA Beverages Logo"
              width={300}
              height={120}
              className="object-contain w-auto h-20 md:h-24 scale-110 origin-left"
            />
          </Link>
          <p className="font-body text-brand-cream/70">
            Premium natural sodas crafted for bold people. Made in Andhra Pradesh.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-lime transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:text-brand-lime transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="hover:text-brand-lime transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            <a href="https://wa.me/919912444997" className="hover:text-brand-lime transition-colors" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-body font-bold uppercase tracking-wider text-sm mb-2 text-brand-lime">Pages</h4>
          <Link href="/" className="hover:text-brand-lime transition-colors">Home</Link>
          <Link href="/products" className="hover:text-brand-lime transition-colors">Products</Link>
          <Link href="/about" className="hover:text-brand-lime transition-colors">About Us</Link>
          <Link href="/blog" className="hover:text-brand-lime transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-brand-lime transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-body font-bold uppercase tracking-wider text-sm mb-2 text-brand-lime">Products</h4>
          <Link href="/products/ira-cola-super" className="hover:text-brand-lime transition-colors">IRA Cola Super</Link>
          <Link href="/products/ira-blueberry" className="hover:text-brand-lime transition-colors">IRA Blueberry</Link>
          <Link href="/products/ira-string" className="hover:text-brand-lime transition-colors">IRA String</Link>
          <Link href="/products/ira-lime-lemon" className="hover:text-brand-lime transition-colors">IRA Lime Lemon</Link>
          <Link href="/products/ira-lemon-salt" className="hover:text-brand-lime transition-colors">IRA Lemon Salt</Link>
          <Link href="/products/ira-orange" className="hover:text-brand-lime transition-colors">IRA Orange</Link>
          <Link href="/products/ira-clubsoda" className="hover:text-brand-lime transition-colors">IRA Clubsoda</Link>
          <Link href="/products/ira-water-bottle" className="hover:text-brand-lime transition-colors">IRA Water Bottle</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-body font-bold uppercase tracking-wider text-sm mb-2 text-brand-lime">Contact</h4>
          <p className="text-brand-cream/70">Varada Revenue, Behind Sri Laxmi Rice & Oil Mill, K.Kotapadu Mandal, Anakapalli, AP 531022</p>
          <p className="text-brand-cream/70"><a href="tel:+919912444997" className="hover:text-brand-lime transition-colors">+91 99124 44997</a></p>
          <p className="text-brand-cream/70"><a href="mailto:irabevarages@gmail.com" className="hover:text-brand-lime transition-colors">irabevarages@gmail.com</a></p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto border-t border-brand-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-cream/50">
        <p>© {new Date().getFullYear()} IRA Beverages · All Rights Reserved</p>
        <p>Built by Digital IT Hub</p>
      </div>
    </footer>
  )
}
