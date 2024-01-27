// 'use client'
// import { Card } from '@/components/card/Card'
import { Posts } from '@/module/list/Posts'
export default function Home() {
    return (
        <main className="w-1/2 h-full flex flex-col items-center gap-10">
            <span>this is wiki list page</span>
            <Posts />
            {/* <Card
                title="headersdfadfas dfas dfads  fadsfasdfasdfa asdfasdf asd adsfas dasdf"
                content="body content sdf asda a adsf asdfasdfasdfas asdfas adsf asdf adlskj alfksfj asdfl as fklajsdfjasd asfds fasd asdf adsf adsf"
            /> */}
        </main>
    )
}
