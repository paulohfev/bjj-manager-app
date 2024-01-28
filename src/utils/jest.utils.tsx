import React from 'react'

import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material'

import { render } from '@testing-library/react'

import muiThemeConfig from '@/theme/mui-theme-config'

export const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={createTheme(muiThemeConfig as ThemeOptions)}>{component}</ThemeProvider>)
}
