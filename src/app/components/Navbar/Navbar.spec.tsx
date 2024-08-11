import React from 'react'

import '@testing-library/jest-dom'

import Navbar from '.'
import { renderWithTheme } from '../../../utils/jest.utils'

describe('Button', () => {
  it('should match the snapshot', () => {
    const button = renderWithTheme(<Navbar />)
    expect(button).toMatchSnapshot()
  })
})
