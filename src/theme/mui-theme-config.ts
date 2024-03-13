import components from './components'

declare module '@mui/material/styles' {
  interface Theme {
    appBar: {
      height: string
    }
  }
}

const theme = {
  appBar: {
    height: components.appBarHeight,
  },
}

export default theme
