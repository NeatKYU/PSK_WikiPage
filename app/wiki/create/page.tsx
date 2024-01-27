'use client'

import { TextButton } from '@/components/button/TextButton'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function WikiCreatePage() {
    const router = useRouter()
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')

    const createPost = async (title: string, content: string) => {
        const res = await axios.post('/api/post', {
            title,
            content,
        })
        if (res.status === 200) router.push('/')
        else console.error('fail create post')
    }

    const moveHomePage = () => {
        router.push('/')
    }

    return (
        <div className="w-full flex flex-col gap-2">
            <span>this is wiki create page</span>
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
                <TextButton text="저장" onClick={() => createPost(title, content)} />
                <TextButton text="취소" onClick={moveHomePage} />
            </div>
        </div>
    )
}

export default WikiCreatePage
