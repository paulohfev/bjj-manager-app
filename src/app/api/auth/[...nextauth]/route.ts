import NextAuth, { AuthOptions, Session, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { APP_ROUTES } from '@/constants/appRoutes'
import { login } from '@/services/LoginService'
import { AuthToken } from '@/types/CustomAuth'
import { Login } from '@/types/api/Login'

const authOptions: AuthOptions = {
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
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: APP_ROUTES.login,
  },
  callbacks: {
    async jwt({ token, user }: { token: AuthToken; user: User }) {
      // On sign-in, add user ID to the token to be used in the session method
      if (user) {
        token.userId = user.id
      }
      return token
    },
    async session({ session, token }: { session: Session; token: AuthToken }) {
      // Add user ID from token, passed from the jwt method, to the session object
      // This is necessary to make the session object available in the client via useSession()
      const sessionUser = {
        ...session,
        user: {
          id: token.userId as string,
          ...session.user,
        },
      }

      return sessionUser
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
