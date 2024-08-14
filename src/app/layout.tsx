import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import AppTheme from '@/theme/Theme'

import MainLayout from './../components/MainLayout'
import ReactQueryProvider from './../providers/ReactQueryProvider'

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
      <ReactQueryProvider>
        <AppTheme>
          <body className={inter.className}>
            <MainLayout>{children}</MainLayout>
          </body>
        </AppTheme>
      </ReactQueryProvider>
    </html>
  )
}
