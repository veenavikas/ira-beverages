import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (!body.name || !body.company || !body.email || !body.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { name, company, email, phone, city, state, pincode, businessType, monthlyVolume, message } = body

    const data = await resend.emails.send({
      from: 'IRA Beverages <onboarding@resend.dev>',
      to: ['irabevarages@gmail.com'],
      replyTo: email,
      subject: `New Distributor Application: ${company} from ${city}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Distributor Application – IRA Beverages</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f0;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a1a;padding:36px 40px;text-align:center;">
              <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:4px;color:#e8710a;text-transform:uppercase;">IRA Beverages</p>
              <h1 style="margin:12px 0 0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Distributor Application</h1>
              <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.5);">New partnership request received</p>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background-color:#e8710a;padding:14px 40px;text-align:center;">
              <p style="margin:0;font-size:13px;font-weight:700;color:#ffffff;letter-spacing:1px;">🤝 ${company} wants to partner with IRA Beverages</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 28px;font-size:15px;color:#444444;line-height:1.6;">
                A new distributor application has been submitted. Please review the details below and follow up at your earliest convenience.
              </p>

              <!-- Applicant Details -->
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:2px;color:#888;text-transform:uppercase;">Applicant Details</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:0 8px 8px 0;" width="50%">
                    <table width="100%" cellpadding="14" cellspacing="0" style="background:#f5f5f0;border-radius:10px;border-left:4px solid #a8c44a;">
                      <tr><td>
                        <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:2px;color:#a8c44a;text-transform:uppercase;">Contact Name</p>
                        <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#1a1a1a;">${name}</p>
                      </td></tr>
                    </table>
                  </td>
                  <td style="padding:0 0 8px 8px;" width="50%">
                    <table width="100%" cellpadding="14" cellspacing="0" style="background:#f5f5f0;border-radius:10px;border-left:4px solid #a8c44a;">
                      <tr><td>
                        <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:2px;color:#a8c44a;text-transform:uppercase;">Company</p>
                        <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#1a1a1a;">${company}</p>
                      </td></tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 8px 8px 0;" width="50%">
                    <table width="100%" cellpadding="14" cellspacing="0" style="background:#f5f5f0;border-radius:10px;border-left:4px solid #a8c44a;">
                      <tr><td>
                        <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:2px;color:#a8c44a;text-transform:uppercase;">Email</p>
                        <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#1a1a1a;"><a href="mailto:${email}" style="color:#1a1a1a;text-decoration:none;">${email}</a></p>
                      </td></tr>
                    </table>
                  </td>
                  <td style="padding:0 0 8px 8px;" width="50%">
                    <table width="100%" cellpadding="14" cellspacing="0" style="background:#f5f5f0;border-radius:10px;border-left:4px solid #a8c44a;">
                      <tr><td>
                        <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:2px;color:#a8c44a;text-transform:uppercase;">Phone</p>
                        <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#1a1a1a;"><a href="tel:${phone}" style="color:#1a1a1a;text-decoration:none;">${phone}</a></p>
                      </td></tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Business Details -->
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:2px;color:#888;text-transform:uppercase;">Business Details</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:0 8px 8px 0;" width="50%">
                    <table width="100%" cellpadding="14" cellspacing="0" style="background:#f5f5f0;border-radius:10px;border-left:4px solid #e8710a;">
                      <tr><td>
                        <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:2px;color:#e8710a;text-transform:uppercase;">Location</p>
                        <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#1a1a1a;">${city}, ${state}</p>
                        <p style="margin:2px 0 0;font-size:13px;color:#666;">${pincode}</p>
                      </td></tr>
                    </table>
                  </td>
                  <td style="padding:0 0 8px 8px;" width="50%">
                    <table width="100%" cellpadding="14" cellspacing="0" style="background:#f5f5f0;border-radius:10px;border-left:4px solid #e8710a;">
                      <tr><td>
                        <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:2px;color:#e8710a;text-transform:uppercase;">Business Type</p>
                        <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#1a1a1a;">${businessType || 'Not specified'}</p>
                      </td></tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <table width="100%" cellpadding="14" cellspacing="0" style="background:#1a1a1a;border-radius:10px;">
                      <tr><td style="text-align:center;">
                        <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:2px;color:#a8c44a;text-transform:uppercase;">Estimated Monthly Volume</p>
                        <p style="margin:6px 0 0;font-size:22px;font-weight:800;color:#ffffff;">${monthlyVolume || 'Not specified'}</p>
                      </td></tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              ${message ? `
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:2px;color:#888;text-transform:uppercase;">Additional Message</p>
              <table width="100%" cellpadding="16" cellspacing="0" style="background:#f5f5f0;border-radius:10px;margin-bottom:28px;">
                <tr><td>
                  <p style="margin:0;font-size:15px;color:#444444;line-height:1.7;">${message}</p>
                </td></tr>
              </table>
              ` : ''}

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-right:8px;" width="50%">
                    <a href="mailto:${email}" style="display:inline-block;width:100%;box-sizing:border-box;background-color:#a8c44a;color:#1a1a1a;font-size:13px;font-weight:800;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:14px 20px;border-radius:50px;text-align:center;">
                      Reply via Email
                    </a>
                  </td>
                  <td align="center" style="padding-left:8px;" width="50%">
                    <a href="https://wa.me/${phone.replace(/\D/g, '')}" style="display:inline-block;width:100%;box-sizing:border-box;background-color:#25D366;color:#ffffff;font-size:13px;font-weight:800;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:14px 20px;border-radius:50px;text-align:center;">
                      WhatsApp
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
    console.error('Distributor Application Error:', error)
    return NextResponse.json({ error: 'Failed to process application' }, { status: 500 })
  }
}
