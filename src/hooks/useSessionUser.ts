import { useSession } from 'next-auth/react'

import { CustomSession } from '@/types/CustomSession'

const useSessionUser = () => {
  const { data: session } = useSession()
  const userSession = session as CustomSession

  return {
    user: userSession?.user,
  }
}

export default useSessionUser
