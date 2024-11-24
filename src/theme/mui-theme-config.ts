import components from './components'
import paddings from './paddings'

declare module '@mui/material/styles' {
  interface Theme {
    appBar: {
      height: string
    }
    paddings: {
      mainLayoutPadding: string
    }
    skeletons: {
      scheduleCardBase: {
        height: number
        width: string
      }
    }
    userAvatarNav: {
      height: string
      width: string
    }
  }
}

const theme = {
  appBar: {
    height: components.appBarHeight,
  },
  paddings,
  skeletons: components.skeletons,
  userAvatarNav: components.userAvatarNav,
}

export default theme
