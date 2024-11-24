import { Theme } from '@mui/material'

const styles = {
  skeleton: (theme: Theme) => ({
    height: theme.skeletons.scheduleCardBase.height,
    width: theme.skeletons.scheduleCardBase.width,
  }),

  wrapper: (theme: Theme) => ({
    height: `calc(100vh - ${theme.appBar.height} - (${theme.paddings.mainLayoutPadding} * 2))`,
    overflow: 'visible',
    backgroundColor: 'background.default',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }),
}

export default styles
