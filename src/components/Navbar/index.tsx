'use client'

import { AppBar, Box, Typography } from '@mui/material'

import AuthControls from '../AuthControls'
import styles from './styles'

const Navbar: React.FC = () => {
  return (
    <AppBar position='fixed' sx={styles.appBar}>
      <Box sx={styles.container}>
        <Typography>Navbar</Typography>

        <AuthControls />
      </Box>
    </AppBar>
  )
}

export default Navbar
