'use client'

import { Box } from '@mui/material'

import styles from './styles'

export type MainLayoutProps = Readonly<{
  children: React.ReactNode
}>

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box component='main' sx={styles.main}>
      {children}
    </Box>
  )
}

export default MainLayout
