import React from 'react'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'
import { MessageCircle } from 'lucide-react'

export default function DistributorCTA() {
  return (
    <section className="bg-brand-green py-24 px-6 md:px-[80px] min-h-[400px] flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <SectionLabel>GROW WITH US</SectionLabel>
        <h2 className="text-5xl md:text-7xl mt-4 mb-8 text-brand-cream">Become an IRA Distributor</h2>
        <p className="text-xl font-body text-brand-cream/80 mb-10 text-balance">
          We&apos;re expanding across Andhra Pradesh and beyond. Join our network of retail partners.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Button href="/distributors" variant="filled" className="w-full sm:w-auto h-14 px-8 text-lg">
            Apply Now →
          </Button>
          <div className="flex items-center gap-2 text-brand-cream/70 font-body">
            <span>Or WhatsApp us:</span>
            <a href="https://wa.me/919912444997?text=Hi+IRA+Beverages+I+am+interested+in+becoming+a+distributor" target="_blank" rel="noreferrer" className="text-brand-lime hover:underline flex items-center gap-1 font-bold">
              <MessageCircle size={18} /> +91 99124 44997
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
