import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { name, email, phone, subject, message } = body

    const data = await resend.emails.send({
      from: 'IRA Beverages <onboarding@resend.dev>',
      to: ['irabevarages@gmail.com'],
      replyTo: email,
      subject: `New Enquiry: ${subject || 'General'} from ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Enquiry – IRA Beverages</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f0;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a1a;padding:36px 40px;text-align:center;">
              <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:4px;color:#a8c44a;text-transform:uppercase;">IRA Beverages</p>
              <h1 style="margin:12px 0 0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">New Enquiry Received</h1>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.5);">via irabeverages.com</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 24px;font-size:15px;color:#444444;line-height:1.6;">
                Hello Team, you have received a new enquiry through the website. Here are the details:
              </p>

              <!-- Info Cards -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 12px;">
                    <table width="100%" cellpadding="16" cellspacing="0" style="background:#f5f5f0;border-radius:10px;border-left:4px solid #a8c44a;">
                      <tr>
                        <td>
                          <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:#a8c44a;text-transform:uppercase;">Full Name</p>
                          <p style="margin:4px 0 0;font-size:17px;font-weight:600;color:#1a1a1a;">${name}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 12px;">
                    <table width="100%" cellpadding="16" cellspacing="0" style="background:#f5f5f0;border-radius:10px;border-left:4px solid #a8c44a;">
                      <tr>
                        <td>
                          <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:#a8c44a;text-transform:uppercase;">Email Address</p>
                          <p style="margin:4px 0 0;font-size:17px;font-weight:600;color:#1a1a1a;"><a href="mailto:${email}" style="color:#1a1a1a;text-decoration:none;">${email}</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 12px;">
                    <table width="100%" cellpadding="16" cellspacing="0" style="background:#f5f5f0;border-radius:10px;border-left:4px solid #a8c44a;">
                      <tr>
                        <td>
                          <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:#a8c44a;text-transform:uppercase;">Phone Number</p>
                          <p style="margin:4px 0 0;font-size:17px;font-weight:600;color:#1a1a1a;"><a href="tel:${phone}" style="color:#1a1a1a;text-decoration:none;">${phone}</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 12px;">
                    <table width="100%" cellpadding="16" cellspacing="0" style="background:#f5f5f0;border-radius:10px;border-left:4px solid #e8710a;">
                      <tr>
                        <td>
                          <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:#e8710a;text-transform:uppercase;">Subject</p>
                          <p style="margin:4px 0 0;font-size:17px;font-weight:600;color:#1a1a1a;">${subject || 'General Enquiry'}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 12px;">
                    <table width="100%" cellpadding="16" cellspacing="0" style="background:#f5f5f0;border-radius:10px;">
                      <tr>
                        <td>
                          <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:#888;text-transform:uppercase;">Message</p>
                          <p style="margin:8px 0 0;font-size:15px;color:#444444;line-height:1.7;">${message || 'No message provided.'}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display:inline-block;background-color:#a8c44a;color:#1a1a1a;font-size:14px;font-weight:800;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:14px 32px;border-radius:50px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f5f5f0;padding:24px 40px;text-align:center;border-top:1px solid #e8e8e0;">
              <p style="margin:0;font-size:12px;color:#999999;">IRA Beverages · Anakapalli, Andhra Pradesh, India</p>
              <p style="margin:6px 0 0;font-size:12px;color:#999999;">
                <a href="mailto:irabevarages@gmail.com" style="color:#a8c44a;text-decoration:none;">irabevarages@gmail.com</a> ·
                <a href="tel:+919912444997" style="color:#a8c44a;text-decoration:none;">+91 99124 44997</a>
              </p>
              <p style="margin:6px 0 0;font-size:11px;color:#bbbbbb;">Pure by Nature, Crafted for You.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Enquiry Submission Error:', error)
    return NextResponse.json({ error: 'Failed to process enquiry' }, { status: 500 })
  }
}
