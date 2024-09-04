import { Theme } from '@mui/material'

const styles = {
  appBar: (theme: Theme) => ({
    display: 'flex',
    height: theme.appBar.height,
    justifyContent: 'center',
    padding: '0 24px',
  }),

  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
}

export default styles
