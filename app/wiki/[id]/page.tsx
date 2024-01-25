'use client'
import { useParams } from 'next/navigation'

function WikiDetailPage() {
    const params = useParams<{ id: string }>()
    return <div>this is wiki {params.id} page</div>
}

export default WikiDetailPage
