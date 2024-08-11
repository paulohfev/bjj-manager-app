import React from 'react'

import { SessionProvider } from 'next-auth/react'

import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material'

import { render } from '@testing-library/react'

import muiThemeConfig from '@/theme/mui-theme-config'

export const renderWithTheme = (component: React.ReactNode) => {
  const mockExpirationDate = new Date(Date.now() + 60 * 60 * 1000).toISOString()

  return render(
    <SessionProvider
      session={{
        user: {
          email: 'mary@test.com',
        },
        expires: mockExpirationDate,
      }}
    >
      <ThemeProvider theme={createTheme(muiThemeConfig as ThemeOptions)}>{component}</ThemeProvider>
    </SessionProvider>
  )
}
