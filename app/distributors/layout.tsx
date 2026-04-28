import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Distributor | Partnership Opportunities',
  description: 'Partner with IRA Beverages and bring premium natural sodas to your city. High margins, marketing support, and fast-moving SKUs for retailers and wholesalers.',
  keywords: ['soda distributorship India', 'beverage partnership', 'IRA Beverages distributor', 'wholesale soft drinks'],
}

export default function DistributorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
