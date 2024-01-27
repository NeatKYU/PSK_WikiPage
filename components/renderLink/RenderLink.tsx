'use client'

import { POST } from '@/type/post'
import { removeSymbol } from '@/utils'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface RenderLinkProps {
    id: string | undefined
    content: string | undefined
}

export const RenderLink = (props: RenderLinkProps) => {
    const { id, content } = props
    const [posts, setPosts] = useState<POST[]>()

    const getPosts = async () => {
        const res = await axios.get('/api/posts')
        if (res.status === 200 && res.data) setPosts(res.data)
    }

    const createLink = (list: POST[], content: string) => {
        const postsMatches: { [title: string]: string } = list.reduce((acc: { [title: string]: string }, post) => {
            if (post.title) {
                const title = removeSymbol(post.title)
                acc[title] = post.id
            }
            return acc
        }, {})

        const regx = new RegExp(Object.keys(postsMatches).join('|'), 'g')
        const parts = content.split(regx)
        const matches = content.match(regx) || []

        return parts.reduce((acc: React.ReactNode[], part: string, index: number) => {
            if (index < matches.length) {
                const content = matches[index]
                const link = `/wiki/${postsMatches[content]}`
                return [
                    ...acc,
                    part,
                    <Link href={link} key={index} className="text-blue-400">
                        {content}
                    </Link>,
                ]
            }
            return [...acc, part]
        }, [])
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            {posts &&
                content &&
                createLink(
                    posts.filter((post) => post.id !== id),
                    content
                )}
        </div>
    )
}
