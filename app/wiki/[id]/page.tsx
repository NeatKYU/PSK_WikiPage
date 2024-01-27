'use client'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { POST } from '@/type/post'
import { TextButton } from '@/components/button/TextButton'
import { RenderLink } from '@/components/renderLink/RenderLink'

function WikiDetailPage() {
    const params = useParams<{ id: string }>()
    const router = useRouter()
    const [post, setPost] = useState<POST>()

    const getPost = async (id: string) => {
        const res = await axios.get('/api/post?id=' + id)
        if (res.status === 200 && res.data) setPost(res.data)
    }

    const deletePost = async (id: string) => {
        const res = await axios.delete('/api/post?id=' + id)
        if (res.status === 200) {
            alert('post deleted')
            router.push('/')
        }
    }

    const moveEditPage = (id: string) => {
        router.push('/wiki/edit/' + id)
    }

    useEffect(() => {
        getPost(params.id)
    }, [])

    return (
        <div className="w-full h-full flex flex-col gap-5">
            <span className="flex justify-between items-center">
                <span className="text-bold text-4xl">{post?.title}</span>
                <div className="flex gap-2">
                    <TextButton text="수정" onClick={() => moveEditPage(params.id)} />
                    <TextButton text="삭제" onClick={() => deletePost(params.id)} />
                </div>
            </span>
            <span className="text-lg">
                <RenderLink id={post?.id} content={post?.content} />
            </span>
        </div>
    )
}

export default WikiDetailPage
