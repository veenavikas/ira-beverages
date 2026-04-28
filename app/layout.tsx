import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/sections/FloatingWhatsApp'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: { default: 'IRA Beverages | Premium Natural Sodas & Goli Soda', template: '%s | IRA Beverages' },
  description: 'Experience the bold, authentic taste of IRA Beverages. From our signature Cola Super to Blueberry and Lime Lemon, we craft premium natural sodas in Anakapalli, Andhra Pradesh.',
  keywords: ['IRA Beverages', 'natural soda India', 'best goli soda Andhra Pradesh', 'premium soft drinks India', 'Anakapalli beverages', 'healthy soda alternatives'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://irabeverages.com',
    siteName: 'IRA Beverages',
    images: [{ url: '/images/products/banner.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: '/logo-icon.png?v=1',
    shortcut: '/logo-icon.png?v=1',
    apple: '/logo-icon.png?v=1',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "IRA Beverages",
              "telephone": "+919912444997",
              "email": "irabevarages@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Varada Revenue, Behind Sri Laxmi Rice & Oil Mill, K.Kotapadu Mandal",
                "addressLocality": "Anakapalli",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "531022",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-brand-dark text-brand-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
