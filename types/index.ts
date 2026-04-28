export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  flavourNotes: string[]
  ingredients: string[]
  volume: string
  mrp: number
  color: {
    primary: string
    secondary: string
    text: string
  }
  image: string
  badge?: string
  available: boolean
}

export interface DistributorEnquiry {
  name: string
  company: string
  phone: string
  email: string
  city: string
  state: string
  pincode: string
  businessType: 'retailer' | 'wholesaler' | 'hotel-restaurant' | 'modern-trade' | 'other'
  monthlyVolume: string
  message?: string
}
