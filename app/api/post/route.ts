import prisma from '@/app/api/prismaClient'
import { NextRequest, NextResponse } from 'next/server'

// get post api
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const postId: string | null = searchParams.get('id')

    if (!postId) return NextResponse.json({ message: 'please input post id' }, { status: 500 })
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: postId,
            },
        })
        return NextResponse.json(post, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}
type POSTREQUEST = {
    title: string
    content: string
    links: string
}
// create post api
export async function POST(req: NextRequest) {
    const { title, content }: POSTREQUEST = await req.json()

    try {
        await prisma.post.create({
            data: {
                title,
                content,
            },
        })
        return NextResponse.json(200)
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}

// edit post api
export async function PUT(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const postId: string | null = searchParams.get('id')

    if (!postId) return NextResponse.json({ message: 'please input post id' }, { status: 500 })
    try {
        const { title, content }: POSTREQUEST = await req.json()

        const updatePost = await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                title,
                content,
            },
        })
        return NextResponse.json(updatePost, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}

// delete post api
export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const postId: string | null = searchParams.get('id')

    if (!postId) return NextResponse.json({ message: 'please input post id' }, { status: 500 })
    try {
        const deletePost = await prisma.post.delete({
            where: {
                id: postId,
            },
        })
        return NextResponse.json(deletePost, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}
