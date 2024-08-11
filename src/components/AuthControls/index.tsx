import { signIn, signOut, useSession } from 'next-auth/react'

import Button from '../Button'
import styles from './styles'

const AuthControls: React.FC = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <Button onClick={() => signOut()} sx={styles.button}>
        Sign out
      </Button>
    )
  }

  return (
    <Button onClick={() => signIn()} sx={styles.button}>
      Sign in
    </Button>
  )
}

export default AuthControls
