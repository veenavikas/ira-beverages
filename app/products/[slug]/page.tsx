import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '@/lib/products'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  
  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter(p => p.id !== product.id)

  return (
    <div className="bg-brand-cream pb-24">
      {/* Hero Section */}
      <section 
        className="min-h-[100dvh] pt-32 pb-20 px-6 md:px-[80px] flex items-center"
        style={{ backgroundColor: product.color.primary }}
      >
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white z-10">
            <SectionLabel className="!text-white before:bg-white">{product.flavourNotes[0]}</SectionLabel>
            <h1 className="text-6xl md:text-[80px] leading-none mb-6">{product.name}</h1>
            <p className="text-2xl md:text-3xl font-display font-medium italic mb-8 opacity-90">{product.tagline}</p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {product.flavourNotes.map(note => (
                <span key={note} className="px-4 py-2 rounded-full border border-white/30 text-sm font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm">
                  {note}
                </span>
              ))}
            </div>
            
            <p className="font-display font-bold text-3xl mb-12">{product.volume} · ₹{product.mrp}</p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                href={`https://wa.me/919912444997?text=Hi+IRA+Beverages!+I+want+to+order+${product.name}`}
                variant="filled" 
                className="!bg-white !text-brand-dark hover:!bg-brand-cream"
              >
                Order via WhatsApp
              </Button>
              <Button href="/contact" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-brand-dark">
                Send Enquiry
              </Button>
            </div>
          </div>
          
          <div className="relative h-[500px] lg:h-[800px] w-full flex items-center justify-center">
            <div className="relative w-full h-full animate-[float_4s_ease-in-out_infinite]">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flavour Profile */}
      <section className="py-24 px-6 md:px-[80px] bg-brand-cream text-brand-dark">
        <div className="max-w-[1440px] mx-auto">
          <h3 className="text-4xl md:text-5xl mb-16 text-center">What's inside your can</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-body font-bold uppercase tracking-wider text-sm text-brand-lime mb-4">Ingredients</h4>
              <ul className="space-y-2 font-body text-lg font-medium">
                {product.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-dark/20" /> {ing}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-body font-bold uppercase tracking-wider text-sm text-brand-lime mb-4">Flavour Deep Dive</h4>
              <p className="font-body text-lg leading-relaxed text-brand-dark/80">{product.longDescription}</p>
            </div>
            <div>
              <h4 className="font-body font-bold uppercase tracking-wider text-sm text-brand-lime mb-4">Serving Suggestions</h4>
              <p className="font-body text-lg leading-relaxed text-brand-dark/80">Best served chilled. Drink straight from the bottle or pour over ice for maximum refreshment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 px-6 md:px-[80px] bg-brand-dark text-brand-cream">
        <div className="max-w-[1440px] mx-auto">
          <h3 className="text-4xl md:text-5xl mb-12">You might also like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.slice(0, 3).map(related => (
              <Link key={related.id} href={`/products/${related.slug}`}>
                <div 
                  className="rounded-2xl p-8 h-[300px] flex flex-col justify-between group relative overflow-hidden"
                  style={{ backgroundColor: related.color.primary }}
                >
                  <div className="absolute inset-0 flex items-center justify-end p-8 transition-transform duration-500 group-hover:scale-110">
                    <div className="relative w-1/2 h-full">
                      <Image src={related.image} alt={related.name} fill className="object-contain drop-shadow-xl" />
                    </div>
                  </div>
                  <div className="relative z-10 w-1/2 text-white">
                    <h4 className="text-2xl font-bold mb-2">{related.name}</h4>
                    <span className="text-sm font-bold uppercase tracking-wider opacity-80 group-hover:text-brand-lime transition-colors">View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-brand-dark border-t border-brand-cream/10 z-40">
        <Button 
          href={`https://wa.me/919912444997?text=Hi+IRA+Beverages!+I+want+to+order+${product.name}`}
          variant="filled" 
          className="w-full"
        >
          Order Now →
        </Button>
      </div>
    </div>
  )
}
