import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function PATCH(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions)
    const { id } = await params
    
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

    const plan = await prisma.plan.update({
      where: { id },
      data: {
        name,
        description: description || null,
        price: parseFloat(price),
        interval,
        features: typeof features === 'string' ? features : JSON.stringify(features),
        isActive: isActive !== undefined ? isActive : true,
      },
    })

    return NextResponse.json(
      { message: 'Plan updated successfully', plan },
      { status: 200 }
    )
  } catch (error) {
    console.error('Update plan error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

