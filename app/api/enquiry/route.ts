import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validation
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { name, email, phone, subject, message } = body

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'IRA Beverages Website <onboarding@resend.dev>', // Use onboarding email for unverified domains
      to: ['irabevarages@gmail.com'],
      subject: `New Enquiry: ${subject || 'General'} from ${name}`,
      html: `
        <h2>New Enquiry from IRA Beverages Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject || 'General'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Enquiry Submission Error:', error)
    return NextResponse.json({ error: 'Failed to process enquiry' }, { status: 500 })
  }
}
