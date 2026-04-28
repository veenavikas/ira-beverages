import React from 'react'
import { Star } from 'lucide-react'

export default function TestimonialMarquee() {
  const testimonials = [
    { quote: "Finally a cola that actually has a bite. Best thing I've had in a while.", name: "Rahul S.", city: "Visakhapatnam" },
    { quote: "The blueberry flavour is unreal. My kids love it and I know it's natural.", name: "Priya M.", city: "Hyderabad" },
    { quote: "IRA String wakes me up better than coffee. Incredible spice kick.", name: "Karthik R.", city: "Vijayawada" },
    { quote: "Been stocking IRA in my cafe for 2 months. Flies off the shelf.", name: "Suresh", city: "Cafe Owner, Vizag" },
    { quote: "Lime Lemon is perfect for summer. Much better than the big brands.", name: "Ananya T.", city: "Rajahmundry" },
    { quote: "Bold packaging, bolder taste. The aesthetics are just top notch.", name: "Vikram D.", city: "Chennai" },
  ]

  const StarRating = () => (
    <div className="flex gap-1 text-brand-lime mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
  )

  const MarqueeRow = ({ reverse = false }) => (
    <div className="flex overflow-hidden group">
      <div className={`flex whitespace-nowrap animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] ${reverse ? '[animation-direction:reverse]' : ''}`}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-6 pr-6">
            {testimonials.map((t, index) => (
              <div key={index} className="w-[280px] p-6 rounded-xl border border-brand-dark/10 bg-white/50 backdrop-blur-sm shrink-0 whitespace-normal">
                <StarRating />
                <p className="font-body text-brand-dark font-medium mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider text-brand-dark">{t.name}</p>
                  <p className="text-xs text-brand-dark/60 font-medium uppercase">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="bg-brand-cream py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[80px] mb-12 text-center">
        <h2 className="text-4xl md:text-5xl text-brand-dark">Don't just take our word for it.</h2>
      </div>
      <div className="flex flex-col gap-6">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  )
}
