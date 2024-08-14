'use client'

import { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export type ReactQueryProviderProps = {
  children: ReactNode
}

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
