import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { APP_ROUTES } from '@/constants/appRoutes'
import { login } from '@/services/LoginService'
import { Login } from '@/types/api/Login'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Login',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }

        const { email, password } = credentials

        const loginCredentials: Login = {
          email,
          password,
        }

        const response = await login(loginCredentials)
        // response = { userId, email, token }
        // @TODO review the role of the token in the response into the wider context of the app
        if (!response) {
          return null
        }

        const user = {
          id: response.userId,
          email: response.email,
        }

        return user
      },
    }),
  ],
  pages: {
    signIn: APP_ROUTES.login,
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
