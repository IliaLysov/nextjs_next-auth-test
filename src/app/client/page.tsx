'use client'

import {useSession} from 'next-auth/react'
import {redirect} from 'next/navigation'
import UserCard from '../components/UserCard'

export default function ClientPage() {
    const {data: session} =useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        },
    })

    return (
        <section>
            <UserCard user={session?.user} pagetype={'Client'} />
        </section>
    )
}