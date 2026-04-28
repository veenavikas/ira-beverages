'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { MessageCircle, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/enquiry', {
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
    <div className="min-h-screen bg-brand-cream pt-32 pb-0 text-brand-dark">
      {/* Header */}
      <section className="px-6 md:px-[80px] py-20 bg-brand-green text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image src="/images/products/banner.png" alt="pattern" fill className="object-cover grayscale invert" />
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-[80px] leading-none mb-6 text-brand-cream">Let's Stay Connected</h1>
          <p className="text-xl md:text-2xl font-body text-brand-cream/90 max-w-3xl mx-auto">
            At IRA Beverages, we value every opportunity to connect. Whether you're a customer, a retailer, or a potential partner, we're here to assist you.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream text-brand-dark">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2">
          
          {/* Contact Info */}
          <div className="p-6 md:p-20 lg:p-[80px] border-b lg:border-b-0 lg:border-r border-brand-dark/10">
            <h2 className="text-4xl md:text-5xl mb-12">Get in touch</h2>
            
            <div className="space-y-12 mb-16">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-body font-bold uppercase tracking-wider text-sm mb-2 opacity-70">Phone & WhatsApp</h4>
                  <p className="text-xl font-bold">+91 99124 44997</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-body font-bold uppercase tracking-wider text-sm mb-2 opacity-70">Email</h4>
                  <p className="text-xl font-bold">irabeverages@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-body font-bold uppercase tracking-wider text-sm mb-2 opacity-70">Address</h4>
                  <p className="text-lg leading-relaxed text-balance">
                    Varada Revenue, Behind Sri Laxmi Rice & Oil Mill,<br />
                    K.Kotapadu Mandal, Anakapalli,<br />
                    Andhra Pradesh - 531022, India
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[300px] w-full rounded-2xl overflow-hidden bg-brand-dark/10 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121544.15582352136!2d82.90999515!3d17.81845195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395c8ba0b92ee5%3A0x6b4458fcc602c3!2sAnakapalli%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 md:p-20 lg:p-[80px] bg-white">
            <h2 className="text-4xl md:text-5xl mb-12">Send a message</h2>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center"
              >
                <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-display font-bold mb-4 text-brand-dark">Message Sent!</h3>
                <p className="font-body text-brand-dark/70 text-lg">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-body">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-dark/70">Full Name *</label>
                  <input {...register("name")} className="w-full bg-brand-cream border border-brand-dark/10 rounded-lg px-4 py-3 text-brand-dark focus:border-brand-dark focus:bg-white focus:outline-none transition-colors" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-dark/70">Phone Number *</label>
                    <input type="tel" {...register("phone")} className="w-full bg-brand-cream border border-brand-dark/10 rounded-lg px-4 py-3 text-brand-dark focus:border-brand-dark focus:bg-white focus:outline-none transition-colors" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-dark/70">Email Address *</label>
                    <input type="email" {...register("email")} className="w-full bg-brand-cream border border-brand-dark/10 rounded-lg px-4 py-3 text-brand-dark focus:border-brand-dark focus:bg-white focus:outline-none transition-colors" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-dark/70">Subject *</label>
                  <select {...register("subject")} className="w-full bg-brand-cream border border-brand-dark/10 rounded-lg px-4 py-3 text-brand-dark focus:border-brand-dark focus:bg-white focus:outline-none transition-colors appearance-none">
                    <option value="">Select Subject</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Product Order">Product Order</option>
                    <option value="Distributor Partnership">Distributor Partnership</option>
                    <option value="Media">Media</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-brand-dark/70">Message *</label>
                  <textarea {...register("message")} rows={6} className="w-full bg-brand-cream border border-brand-dark/10 rounded-lg px-4 py-3 text-brand-dark focus:border-brand-dark focus:bg-white focus:outline-none transition-colors resize-none"></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 bg-brand-green text-white font-body font-bold uppercase tracking-wider rounded-full hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </button>

                <div className="pt-8">
                  <a 
                    href="https://wa.me/919912444997?text=Hi+IRA+Beverages!" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-14 bg-[#25D366]/10 text-[#1da851] font-body font-bold uppercase tracking-wider rounded-full hover:bg-[#25D366]/20 transition-colors"
                  >
                    <MessageCircle size={20} /> Chat on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  )
}
