import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'

import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/jest.utils'

import SignInNavItem from '.'

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
    signIn: jest.fn(),
    signOut: jest.fn(),
    __setMockSession: (data: Session | null, status: string) => {
      mockData = data
      mockStatus = status
    },
  }
})

describe('SignInNavItem', () => {
  beforeEach(() => {
    jest.requireMock('next-auth/react').__setMockSession(null, 'loading')
  })

  it('should match the snapshot', () => {
    const component = renderWithTheme(<SignInNavItem />)
    expect(component).toMatchSnapshot()
  })

  it('should render the sign in button when the user is unauthenticated', () => {
    jest.requireMock('next-auth/react').__setMockSession(null, 'unauthenticated')

    renderWithTheme(<SignInNavItem />)

    const signInButton = screen.getByText('Sign in')
    expect(signInButton).toBeInTheDocument()

    fireEvent.click(signInButton)
    expect(signIn).toHaveBeenCalled()
  })

  it('should not render any button when the session status is loading', () => {
    jest.requireMock('next-auth/react').__setMockSession(null, 'loading')

    renderWithTheme(<SignInNavItem />)

    expect(screen.queryByText('Sign in')).not.toBeInTheDocument()
    expect(screen.queryByText('Sign out')).not.toBeInTheDocument()
  })

  it('should not render any button when the user is authenticated', () => {
    jest.requireMock('next-auth/react').__setMockSession({ user: { name: 'John Doe' } }, 'authenticated')

    renderWithTheme(<SignInNavItem />)

    expect(screen.queryByText('Sign in')).not.toBeInTheDocument()
    expect(screen.queryByText('Sign out')).not.toBeInTheDocument()
  })
})
