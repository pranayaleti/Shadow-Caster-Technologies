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

    const { name, description, price, interval, features, isActive } = await request.json()

    if (!name || !price || !interval || !features) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const planId = name.toLowerCase().replace(/\s+/g, '-')

    const existingPlan = await prisma.plan.findUnique({
      where: { id: planId },
    })

    if (existingPlan) {
      return NextResponse.json(
        { error: 'Plan with this name already exists' },
        { status: 400 }
      )
    }

    const plan = await prisma.plan.create({
      data: {
        id: planId,
        name,
        description: description || null,
        price: parseFloat(price),
        interval,
        features: typeof features === 'string' ? features : JSON.stringify(features),
        isActive: isActive !== undefined ? isActive : true,
      },
    })

    return NextResponse.json(
      { message: 'Plan created successfully', plan },
      { status: 201 }
    )
  } catch (error) {
    console.error('Create plan error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

