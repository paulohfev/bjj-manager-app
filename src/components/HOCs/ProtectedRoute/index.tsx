import { useEffect } from 'react'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { CircularProgress } from '@mui/material'

export type ProtectedRouteProps = {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data: session, status } = useSession()

  console.log('session', session)

  const router = useRouter()

  useEffect(() => {
    if (!session && status === 'unauthenticated') {
      signIn()
    }
  }, [session, status, router])

  if (status === 'loading' || !session) {
    return <CircularProgress data-testid='circular-progress' />
  }

  return <>{children}</>
}

export default ProtectedRoute
