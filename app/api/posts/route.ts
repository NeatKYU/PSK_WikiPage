import prisma from '@/app/api/prismaClient'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const posts = await prisma.post.findMany()
        return NextResponse.json(posts, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}
