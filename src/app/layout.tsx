import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import MainLayout from '@/components/layouts/MainLayout'
import NextAuthSessionProvider from '@/providers/NextAuthSessionProvider'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
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
      <ReactQueryProvider>
        <NextAuthSessionProvider>
          <AppTheme>
            <body className={inter.className}>
              <MainLayout>{children}</MainLayout>
            </body>
          </AppTheme>
        </NextAuthSessionProvider>
      </ReactQueryProvider>
    </html>
  )
}
