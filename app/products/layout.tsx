import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Natural Soda Collection',
  description: 'Explore the full range of IRA Beverages. From our signature IRA Cola Super to exotic Blueberry and refreshing Lime Lemon. Premium natural sodas made for bold people.',
  keywords: ['natural soda flavours', 'IRA Cola', 'Blueberry soda India', 'Lime Lemon soda', 'premium beverage range'],
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
