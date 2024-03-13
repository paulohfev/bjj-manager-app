import { Theme } from '@mui/material'

const styles = {
  appBar: (theme: Theme) => ({
    display: 'flex',
    height: theme.appBar.height,
    justifyContent: 'center',
    padding: '0 24px',
  }),
}

export default styles
