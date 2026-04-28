'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { MessageCircle, Phone, Mail, CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().min(6, "Valid pincode is required"),
  businessType: z.enum(['retailer', 'wholesaler', 'hotel-restaurant', 'modern-trade', 'other']),
  monthlyVolume: z.string().min(1, "Please select an estimate"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function DistributorsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/distributor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.ok) {
        setIsSuccess(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error(error)
      alert('An error occurred. Please try again.')
    }
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-0 text-brand-cream">
      {/* Hero */}
      <section className="px-6 md:px-[80px] py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-[80px] leading-none mb-6">Bring IRA to Your City</h1>
        <p className="text-xl md:text-2xl font-body text-brand-cream/70 mb-10 text-balance">
          We're looking for passionate retail and wholesale partners across India.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="#apply" variant="filled">Apply Below ↓</Button>
          <Button href="https://wa.me/919912444997" variant="outline">WhatsApp Us Now</Button>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-brand-cream text-brand-dark py-24 px-6 md:px-[80px]">
        <div className="max-w-[1440px] mx-auto">
          <SectionLabel className="!text-brand-dark before:bg-brand-dark">BENEFITS</SectionLabel>
          <h2 className="text-5xl md:text-6xl mt-4 mb-16">Why distribute IRA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "High Margin Potential", desc: "Premium product positioning allows for healthy margins across the supply chain." },
              { title: "Fast-Moving SKUs", desc: "At ₹10 MRP, our 250ml bottles are priced for volume and rapid rotation." },
              { title: "Marketing Support", desc: "We provide POS materials, local digital marketing, and activation support." },
              { title: "Direct Pricing", desc: "Deal directly with the manufacturer for the best possible rates and terms." }
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-brand-dark/10">
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="font-body text-brand-dark/70 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For & How It Works */}
      <section className="bg-brand-dark py-24 px-6 md:px-[80px]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Ideal partners</h2>
            <div className="flex flex-wrap gap-4">
              {['Wholesale distributors', 'Retail chain owners', 'Hotels & restaurants', 'Modern trade', 'Super-stockists'].map(badge => (
                <span key={badge} className="px-6 py-3 rounded-full border border-brand-cream/20 font-body font-bold text-sm tracking-wider uppercase">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Three steps to partner</h2>
            <div className="space-y-6">
              {[
                "Fill the enquiry form below",
                "Our team reaches out within 24 hours",
                "Finalise terms and begin distribution"
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-center">
                  <span className="text-5xl font-display font-bold text-brand-lime opacity-50">0{i+1}</span>
                  <p className="text-xl font-body font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply" className="bg-[#050505] py-24 px-6 md:px-[80px]">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>APPLICATION</SectionLabel>
          <h2 className="text-4xl md:text-5xl mt-4 mb-12">Apply to Become a Distributor</h2>

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/30 rounded-2xl p-12 text-center"
            >
              <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-display font-bold mb-4">Application Received!</h3>
              <p className="font-body text-brand-cream/80 text-lg mb-8">
                Thank you for your interest in IRA Beverages. Our partnership team will review your details and contact you within 24 hours.
              </p>
              <Button href="https://wa.me/919912444997" variant="outline">
                Message us on WhatsApp
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-cream/70">Full Name *</label>
                  <input {...register("name")} className="w-full bg-transparent border border-brand-cream/20 rounded-lg px-4 py-3 text-brand-cream focus:border-brand-lime focus:outline-none transition-colors" />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-cream/70">Company Name *</label>
                  <input {...register("company")} className="w-full bg-transparent border border-brand-cream/20 rounded-lg px-4 py-3 text-brand-cream focus:border-brand-lime focus:outline-none transition-colors" />
                  {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-cream/70">Phone Number *</label>
                  <input type="tel" {...register("phone")} className="w-full bg-transparent border border-brand-cream/20 rounded-lg px-4 py-3 text-brand-cream focus:border-brand-lime focus:outline-none transition-colors" />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-cream/70">Email Address *</label>
                  <input type="email" {...register("email")} className="w-full bg-transparent border border-brand-cream/20 rounded-lg px-4 py-3 text-brand-cream focus:border-brand-lime focus:outline-none transition-colors" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-cream/70">City *</label>
                  <input {...register("city")} className="w-full bg-transparent border border-brand-cream/20 rounded-lg px-4 py-3 text-brand-cream focus:border-brand-lime focus:outline-none transition-colors" />
                  {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-cream/70">State *</label>
                    <input {...register("state")} className="w-full bg-transparent border border-brand-cream/20 rounded-lg px-4 py-3 text-brand-cream focus:border-brand-lime focus:outline-none transition-colors" />
                    {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-cream/70">Pincode *</label>
                    <input {...register("pincode")} className="w-full bg-transparent border border-brand-cream/20 rounded-lg px-4 py-3 text-brand-cream focus:border-brand-lime focus:outline-none transition-colors" />
                    {errors.pincode && <p className="text-red-400 text-xs mt-1">{errors.pincode.message}</p>}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-cream/70">Business Type *</label>
                  <select {...register("businessType")} className="w-full bg-brand-dark border border-brand-cream/20 rounded-lg px-4 py-3 text-brand-cream focus:border-brand-lime focus:outline-none transition-colors appearance-none">
                    <option value="">Select Type</option>
                    <option value="retailer">Retailer</option>
                    <option value="wholesaler">Wholesaler</option>
                    <option value="hotel-restaurant">Hotel / Restaurant / Café</option>
                    <option value="modern-trade">Modern Trade</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.businessType && <p className="text-red-400 text-xs mt-1">{errors.businessType.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-cream/70">Est. Monthly Volume *</label>
                  <select {...register("monthlyVolume")} className="w-full bg-brand-dark border border-brand-cream/20 rounded-lg px-4 py-3 text-brand-cream focus:border-brand-lime focus:outline-none transition-colors appearance-none">
                    <option value="">Select Volume</option>
                    <option value="under-500">Under 500 units</option>
                    <option value="500-2000">500 – 2000 units</option>
                    <option value="2000-5000">2000 – 5000 units</option>
                    <option value="5000+">5000+ units</option>
                  </select>
                  {errors.monthlyVolume && <p className="text-red-400 text-xs mt-1">{errors.monthlyVolume.message}</p>}
                </div>
              </div>

              <div className="pt-4">
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-cream/70">Message (Optional)</label>
                <textarea {...register("message")} rows={4} className="w-full bg-transparent border border-brand-cream/20 rounded-lg px-4 py-3 text-brand-cream focus:border-brand-lime focus:outline-none transition-colors resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 bg-brand-lime text-brand-dark font-body font-bold uppercase tracking-wider rounded-full hover:bg-[#A3E553] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry →'}
              </button>

              <div className="text-center pt-6">
                <a href="https://wa.me/919912444997" target="_blank" rel="noreferrer" className="text-brand-cream/50 hover:text-brand-lime transition-colors font-medium underline underline-offset-4 text-sm uppercase tracking-wider">
                  Prefer WhatsApp? Click here
                </a>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Direct Contact */}
      <section className="bg-brand-lime text-brand-dark py-8 px-6 text-center font-body font-bold uppercase tracking-wider text-sm flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        <a href="tel:+919912444997" className="flex items-center gap-2 hover:opacity-70"><Phone size={18} /> +91 99124 44997</a>
        <a href="https://wa.me/919912444997" className="flex items-center gap-2 hover:opacity-70"><MessageCircle size={18} /> WhatsApp Us</a>
        <a href="mailto:irabevarages@gmail.com" className="flex items-center gap-2 hover:opacity-70"><Mail size={18} /> irabevarages@gmail.com</a>
      </section>
    </div>
  )
}
