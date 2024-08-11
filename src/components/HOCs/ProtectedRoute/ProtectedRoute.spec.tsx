import { Session } from 'next-auth'

import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/jest.utils'

import ProtectedRoute from '.'

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react')

  let mockStatus = 'loading'
  let mockData: Session | null = null

  return {
    ...originalModule,
    useSession: () => ({
      data: mockData,
      status: mockStatus,
    }),
    __setMockSession: (data: Session | null, status: string) => {
      mockData = data
      mockStatus = status
    },
  }
})

describe('ProtectedRoute', () => {
  it('should match the snapshot', () => {
    const protectedRoute = renderWithTheme(
      <ProtectedRoute>
        <div>Protected content</div>
      </ProtectedRoute>
    )

    expect(protectedRoute).toMatchSnapshot()
  })

  it('should render the loading state when status is "loading"', () => {
    renderWithTheme(
      <ProtectedRoute>
        <div>Protected content</div>
      </ProtectedRoute>
    )

    const circularProgress = screen.getByTestId('circular-progress')
    expect(circularProgress).toBeInTheDocument()
  })

  it('should render the children when status is not "loading"', () => {
    // Set the mock to return authenticated status with data
    const { __setMockSession } = jest.requireMock('next-auth/react')
    __setMockSession(
      {
        user: {
          email: 'mary@test.com',
        },
        expires: 'mocked-expiration',
      },
      'authenticated'
    )

    renderWithTheme(
      <ProtectedRoute>
        <div>Protected content</div>
      </ProtectedRoute>
    )

    const protectedContent = screen.getByText('Protected content')
    expect(protectedContent).toBeInTheDocument()
  })
})
