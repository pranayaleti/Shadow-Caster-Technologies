import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Mock GoHighLevel API integration
async function sendToGoHighLevel(data: any) {
  // In production, replace this with actual GoHighLevel API call
  console.log('Mock GoHighLevel API call:', data)
  return { success: true, leadId: 'mock-lead-id' }
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save lead to database
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        message: message || null,
        source: 'contact_form',
        status: 'new',
      },
    })

    // Send to GoHighLevel (mock)
    await sendToGoHighLevel({
      name,
      email,
      phone,
      company,
      message,
    })

    return NextResponse.json(
      { message: 'Message sent successfully', leadId: lead.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

