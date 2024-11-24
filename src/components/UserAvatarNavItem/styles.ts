import { alpha } from '@mui/material'

const styles = {
  menuItemWrapper: {
    cursor: 'pointer',
    background: 'inherit',
    border: 'none',
    fontSize: '14px',
    letterSpacing: '0.25px',
    padding: '9px 14px',
    width: '100%',

    '&:hover': {
      backgroundColor: alpha('#706B65', 0.06),
    },
    '&:active': {
      backgroundColor: alpha('#706B65', 0.1),
    },
  },

  skeletonWrapper: {
    padding: '8px',
  },
}

export default styles
