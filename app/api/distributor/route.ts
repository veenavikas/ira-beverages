import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validation
    if (!body.name || !body.company || !body.email || !body.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { name, company, email, phone, city, state, pincode, businessType, monthlyVolume, message } = body

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'IRA Beverages Website <onboarding@resend.dev>', // Use onboarding email for unverified domains
      to: ['irabevarages@gmail.com'],
      subject: `New Distributor Application: ${company} from ${city}`,
      html: `
        <h2>New Distributor Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${city}, ${state} - ${pincode}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Est. Monthly Volume:</strong> ${monthlyVolume}</p>
        <p><strong>Additional Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Distributor Application Error:', error)
    return NextResponse.json({ error: 'Failed to process application' }, { status: 500 })
  }
}
