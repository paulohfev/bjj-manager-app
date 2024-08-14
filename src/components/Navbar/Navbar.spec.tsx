import React from 'react'

import '@testing-library/jest-dom'

import { renderWithTheme } from '@/utils/jest.utils'

import Navbar from '.'

describe('Navbar', () => {
  it('should match the snapshot', () => {
    const button = renderWithTheme(<Navbar />)
    expect(button).toMatchSnapshot()
  })
})
