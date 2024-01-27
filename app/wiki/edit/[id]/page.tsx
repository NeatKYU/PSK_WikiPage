'use client'

import axios from 'axios'
import { TextButton } from '@/components/button/TextButton'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function WikiEditPage() {
    const params = useParams<{ id: string }>()
    const router = useRouter()
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')

    const getPost = async (id: string) => {
        const res = await axios.get('/api/post?id=' + id)
        if (res.status === 200 && res.data) {
            setTitle(res.data.title)
            setContent(res.data.content)
        }
    }

    const updatePost = async (id: string, title: string, content: string) => {
        const res = await axios.put('/api/post?id=' + id, {
            title,
            content,
        })
        if (res.status === 200) router.push('/wiki/' + id)
        else console.error('fail update post')
    }

    const movePrevPage = () => {
        router.back()
    }

    useEffect(() => {
        getPost(params.id)
    }, [])

    return (
        <div className="w-full flex flex-col gap-2">
            <span>this is wiki edit page</span>
            <div className="w-full h-10 rounded bg-slate-200 text-black flex justify-center items-center px-2">
                <input
                    className="w-full h-full bg-transparent outline-0"
                    placeholder="제목을 입력해주세요."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="w-full h-48 rounded p-2 bg-slate-200">
                <textarea
                    className="w-full h-full bg-transparent text-black resize-none outline-0"
                    placeholder="내용을 입력해주세요."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="flex justify-end gap-2">
                <TextButton text="저장" onClick={() => updatePost(params.id, title, content)} />
                <TextButton text="취소" onClick={movePrevPage} />
            </div>
        </div>
    )
}

export default WikiEditPage
