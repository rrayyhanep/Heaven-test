import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import ContactEmail from '@/emails/ContactEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  console.log('Received request to /api/contact')
  try {
    const body = await request.json()
    console.log('Request body:', body)
    const { name, email, message } = body

    if (!name || !email || !message) {
      console.log('Validation failed: Missing fields')
      return new NextResponse(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    console.log(`Sending email from ${name} (${email}): ${message}`)

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'heavenfurniture000@gmail.com',
      subject: 'New Message from Heaven Furniture',
      react: ContactEmail({ name, email, message }),
    })

    if (error) {
      console.error('Error sending email from Resend:', error)
      return new NextResponse(
        JSON.stringify({ error: 'Error sending email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    console.log('Email sent successfully. Resend response:', data)

    return new NextResponse(
      JSON.stringify({ message: 'Message sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return new NextResponse(
      JSON.stringify({ error: 'An internal server error occurred' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
