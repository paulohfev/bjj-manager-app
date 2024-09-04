'use client'

import { SessionProvider } from 'next-auth/react'

export type SessionProviderProps = {
  children: React.ReactNode
}

const NextAuthSessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthSessionProvider
