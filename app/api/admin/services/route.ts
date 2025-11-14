import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user || (session.user as any).role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { name, description, category, isActive } = await request.json()

    if (!name || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const serviceId = name.toLowerCase().replace(/\s+/g, '-')

    const existingService = await prisma.service.findUnique({
      where: { id: serviceId },
    })

    if (existingService) {
      return NextResponse.json(
        { error: 'Service with this name already exists' },
        { status: 400 }
      )
    }

    const service = await prisma.service.create({
      data: {
        id: serviceId,
        name,
        description: description || null,
        category,
        isActive: isActive !== undefined ? isActive : true,
      },
    })

    return NextResponse.json(
      { message: 'Service created successfully', service },
      { status: 201 }
    )
  } catch (error) {
    console.error('Create service error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

