import { signIn, signOut, useSession } from 'next-auth/react'

import Button from '../Button'
import styles from './styles'

const AuthControls: React.FC = () => {
  const { data: session, status } = useSession()

  // Check the session status and render the appropriate button.
  // The checks are to ensure that appropriate button is only rendered when the session status is known.
  // This is to prevent the button from flickering when the session status is still loading.

  if (!!session && status === 'authenticated') {
    return (
      <Button onClick={() => signOut()} sx={styles.button}>
        Sign out
      </Button>
    )
  }

  if (!session && status === 'unauthenticated') {
    return (
      <Button onClick={() => signIn()} sx={styles.button}>
        Sign in
      </Button>
    )
  }

  return <></>
}

export default AuthControls
