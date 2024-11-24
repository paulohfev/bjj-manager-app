import { signOut, useSession } from 'next-auth/react'

import { Avatar, Box, IconButton, Popover, Skeleton } from '@mui/material'

import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state'

import Tooltip from '../Tooltip'
import styles from './styles'

const UserAvatarNavItem: React.FC = () => {
  const { data: session, status } = useSession()

  // Check the session status to ensure that appropriate view is only rendered when the session status is known.
  // This is to prevent the view from flickering when the session status is still loading.

  if (!session && status === 'unauthenticated') {
    return <></>
  }

  if (!!session && status === 'authenticated') {
    return (
      <Box>
        <PopupState variant='popover'>
          {(popupState) => (
            <>
              <Tooltip placement='bottom' text='Your Profile'>
                <IconButton {...bindTrigger(popupState)}>
                  <Avatar />
                </IconButton>
              </Tooltip>

              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Box component='button' onClick={() => signOut()} type='button' sx={styles.menuItemWrapper}>
                  Sign out
                </Box>
              </Popover>
            </>
          )}
        </PopupState>
      </Box>
    )
  }

  return (
    <Box sx={styles.skeletonWrapper}>
      <Skeleton component='div' variant='circular' height={40} width={40} />
    </Box>
  )
}

export default UserAvatarNavItem
