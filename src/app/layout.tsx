import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import AppTheme from '@/theme/Theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BJJ Manager APP',
  description: 'Manage your teams without the headaches!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <AppTheme>
        <body className={inter.className}>{children}</body>
      </AppTheme>
    </html>
  )
}
