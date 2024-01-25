'use client'
import { useParams } from 'next/navigation'

function WikiEditPage() {
    const params = useParams<{ id: string }>()
    return <div>this is wiki Edit page for {params.id}</div>
}

export default WikiEditPage
