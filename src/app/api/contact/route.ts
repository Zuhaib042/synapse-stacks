import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = 'synapsestacks@outlook.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function isValidPhone(v: string) {
  return /^[\+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3,6}[-\s.]?[0-9]{2,6}$/.test(
    v.trim()
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, message } = body as Record<string, string>

    if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }
    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 })
    }
    if (message.trim().length < 20) {
      return NextResponse.json(
        { error: 'Project details must be at least 20 characters.' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: `SynapseStacks Contact <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New consultation request from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head><meta charset="utf-8" /></head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f0e6; margin: 0; padding: 40px 20px;">
            <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(28,25,20,0.08);">
              <div style="background: #1C1914; padding: 32px 40px;">
                <p style="color: rgba(255,255,255,0.5); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 8px;">New Inquiry</p>
                <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.03em; margin: 0;">Consultation Request</h1>
              </div>
              <div style="padding: 40px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(28,25,20,0.08); vertical-align: top;">
                      <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #7A7268;">Full Name</p>
                      <p style="margin: 4px 0 0; font-size: 15px; font-weight: 600; color: #1C1914;">${fullName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(28,25,20,0.08); vertical-align: top;">
                      <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #7A7268;">Email</p>
                      <p style="margin: 4px 0 0; font-size: 15px; font-weight: 600; color: #1C1914;"><a href="mailto:${email}" style="color: #3B5BDB; text-decoration: none;">${email}</a></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(28,25,20,0.08); vertical-align: top;">
                      <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #7A7268;">Phone</p>
                      <p style="margin: 4px 0 0; font-size: 15px; font-weight: 600; color: #1C1914;">${phone}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; vertical-align: top;">
                      <p style="margin: 0; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #7A7268;">Project Details</p>
                      <p style="margin: 8px 0 0; font-size: 15px; color: #4A4540; line-height: 1.65; white-space: pre-wrap;">${message}</p>
                    </td>
                  </tr>
                </table>
              </div>
              <div style="background: #f4f0e6; padding: 24px 40px; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #7A7268;">Reply directly to this email to respond to ${fullName}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
