'use client'
import { TextButton } from '@/components/button/TextButton'
import { Card } from '@/components/card/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { POST } from '@/type/post'
import { useRouter } from 'next/navigation'
import { Pagination } from '@/components/pagination/Pagination'

export const Posts = () => {
    const router = useRouter()
    const perPage = 5
    const [posts, setPosts] = useState<POST[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)

    const getPosts = async () => {
        const res = await axios.get('/api/posts')
        if (res.status === 200 && res.data) setPosts(res.data)
    }

    const moveCreatePage = () => {
        router.push('/wiki/create')
    }

    const moveViewPage = (id: string) => {
        router.push('/wiki/' + id)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="h-auto flex flex-col gap-5">
            <div className="flex justify-end">
                <TextButton widthFull text="+" onClick={moveCreatePage} />
            </div>
            {posts &&
                posts
                    .filter((_, index) => index >= (currentPage - 1) * perPage && index <= perPage * currentPage - 1)
                    .map((post) => (
                        <Card
                            key={post.id}
                            title={post.title}
                            content={post.content}
                            onClick={() => moveViewPage(post.id)}
                        />
                    ))}
            <div className="flex justify-center">
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    perPage={perPage}
                    totalCount={posts.length}
                />
            </div>
        </div>
    )
}
