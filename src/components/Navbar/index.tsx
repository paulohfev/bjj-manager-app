'use client'

import { AppBar, Box, Typography } from '@mui/material'

import SignInNavItem from '../SignInNavItem'
import UserAvatarNavItem from '../UserAvatarNavItem'
import styles from './styles'

const Navbar: React.FC = () => {
  return (
    <AppBar position='fixed' sx={styles.appBar}>
      <Box sx={styles.container}>
        <Typography>Navbar</Typography>

        <Box sx={styles.actionsWrapper}>
          <SignInNavItem />

          <UserAvatarNavItem />
        </Box>
      </Box>
    </AppBar>
  )
}

export default Navbar
