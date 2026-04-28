import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import ProductGrid from '@/components/sections/ProductGrid'
import BrandStory from '@/components/sections/BrandStory'
import DistributorCTA from '@/components/sections/DistributorCTA'
import TestimonialMarquee from '@/components/sections/TestimonialMarquee'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustStrip />
      <ProductGrid />
      <BrandStory />
      <DistributorCTA />
      <TestimonialMarquee />
    </div>
  )
}
