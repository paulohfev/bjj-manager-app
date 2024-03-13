'use client'

import { AppBar, Typography } from '@mui/material'

import styles from './styles'

const Navbar: React.FC = () => {
  return (
    <AppBar position='fixed' sx={styles.appBar}>
      <Typography>Navbar</Typography>
    </AppBar>
  )
}

export default Navbar
