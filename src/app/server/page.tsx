import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from 'next-auth/next'
import UserCard from '../components/UserCard'
import {redirect} from 'next/navigation'

export default async function ServerPage() {
    const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }

    console.log(session)

    return (
        <section>
            <UserCard user={session?.user} pagetype={'Server'}/>
        </section>
    )
}