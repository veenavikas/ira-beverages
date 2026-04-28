import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import DistributorCTA from '@/components/sections/DistributorCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & Latest Updates | IRA Beverages',
  description: 'Stay updated with the latest news, flavour launches, and behind-the-scenes stories from the world of IRA Beverages.',
}

// Placeholder blog posts
const posts = [
  {
    id: 1,
    title: 'Why We Chose Natural Ingredients for Our Sodas',
    excerpt: 'Discover the journey of creating bold flavors without the artificial aftertaste.',
    date: 'Oct 12, 2023',
    image: '/images/products/banner.png',
    slug: 'why-we-chose-natural-ingredients',
    category: 'Inside IRA',
  },
  {
    id: 2,
    title: 'The Perfect Mixer: Enhancing Cocktails with IRA Clubsoda',
    excerpt: 'Elevate your mixology game with our aggressively carbonated, pure clubsoda.',
    date: 'Nov 05, 2023',
    image: '/images/products/clubsoda.png',
    slug: 'perfect-mixer-ira-clubsoda',
    category: 'Recipes',
  },
  {
    id: 3,
    title: 'Expanding Our Reach: IRA Beverages Now in 500+ Stores',
    excerpt: 'A milestone for our local brand as we expand across Andhra Pradesh and beyond.',
    date: 'Jan 18, 2024',
    image: '/images/products/ira%20products.png',
    slug: 'expanding-our-reach',
    category: 'News',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-brand-cream pt-32">
      {/* Header Section */}
      <section className="px-6 md:px-[80px] py-16 text-center text-brand-dark">
        <div className="max-w-[1440px] mx-auto">
          <SectionLabel className="!text-brand-dark before:bg-brand-dark mx-auto justify-center">THE JOURNAL</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-display font-bold mt-6 mb-6">
            Stories & Updates
          </h1>
          <p className="font-body text-xl text-brand-dark/70 max-w-2xl mx-auto">
            Everything happening in the world of IRA Beverages. From new flavour drops to behind-the-scenes stories.
          </p>
        </div>
      </section>

      {/* Featured Post (Latest) */}
      <section className="px-6 md:px-[80px] pb-16">
        <div className="max-w-[1440px] mx-auto">
          <Link href={`/blog/${posts[0].slug}`} className="group block relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-brand-cream">
              <span className="inline-block px-3 py-1 bg-brand-lime text-brand-dark text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                {posts[0].category}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 group-hover:text-brand-lime transition-colors">
                {posts[0].title}
              </h2>
              <p className="font-body text-lg text-brand-cream/80 max-w-2xl mb-4">
                {posts[0].excerpt}
              </p>
              <div className="text-sm font-bold uppercase tracking-wider text-brand-lime">
                Read Article →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="px-6 md:px-[80px] pb-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col">
              <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6 bg-brand-dark/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
                {post.category} · {post.date}
              </span>
              <h3 className="text-2xl font-display font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-brand-dark/70">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <DistributorCTA />
    </div>
  )
}
