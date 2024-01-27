// 'use client'
// import { Card } from '@/components/card/Card'
import { Posts } from '@/module/list/Posts'
export default function Home() {
    return (
        <main className="w-1/2 h-full flex flex-col items-center gap-10">
            <span>wiki list page</span>
            <Posts />
        </main>
    )
}
