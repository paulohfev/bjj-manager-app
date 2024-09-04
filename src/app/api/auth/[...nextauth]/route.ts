import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import jwt from 'jsonwebtoken'

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

        if (!process.env.JWT_SECRET) {
          throw new Error('token secret is not defined')
        }

        const token = jwt.sign({ userEmail: email }, process.env.JWT_SECRET, {
          expiresIn: '24h',
        })

        const loginCredentials: Login = {
          email,
          password,
          token,
        }

        const response = await login(loginCredentials)
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
