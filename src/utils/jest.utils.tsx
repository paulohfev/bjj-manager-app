import React from 'react'

import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material'

import muiThemeConfig from '@/theme/mui-theme-config'
import { render } from '@testing-library/react'

export const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={createTheme(muiThemeConfig as ThemeOptions)}>{component}</ThemeProvider>)
}
