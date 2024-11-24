import React from 'react'

import { Skeleton } from '@mui/material'

import styles from './styles'

const UserAvatarNavItemSkeleton: React.FC = () => {
  return <Skeleton component='div' variant='circular' sx={styles.skeleton} />
}

export default UserAvatarNavItemSkeleton
