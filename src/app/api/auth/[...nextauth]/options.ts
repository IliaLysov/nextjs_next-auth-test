import type {NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import $api from '@/api'

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: 'Cedentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'Email'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {

                // const response: any = await $api.post('/auth/login', {email: credentials?.email, password: credentials?.password})

                // console.log(response)
                // const {user}: any = response.body

                const user = {id: '2', email: 'lysouv@outlook.com', name: 'Ilia', image: 'https://gardener-plants.storage.yandexcloud.net/avatars/45808867-1fd1-4698-825c-3a9956de347c.jpg'}

                // if (credentials?.email === user.email)

                if (user) {
                    return user
                } else {
                    return null
                }
                // const user = { id: "42", name: "Dave", password: "nextauth" }

                // if (credentials?.email === user.name && credentials?.password === user.password) {
                //     return user
                // } else {
                //     return null
                // }
            }
        })
    ],
    // pages: {
    //     signIn: '/signin'
    // }
}