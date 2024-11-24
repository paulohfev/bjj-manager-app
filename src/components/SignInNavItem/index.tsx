import { signIn, useSession } from 'next-auth/react'

import Button from '../Button'
import styles from './styles'

const SignInNavItem: React.FC = () => {
  const { data: session, status } = useSession()

  if (!session && status === 'unauthenticated') {
    return (
      <Button onClick={() => signIn()} sx={styles.button}>
        Sign in
      </Button>
    )
  }

  return <></>
}

export default SignInNavItem
