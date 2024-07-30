import '@testing-library/jest-dom'

import { renderWithTheme } from '@/utils/jest.utils'

import Home from './page'

describe('Home', () => {
  it('should match the snapshot', () => {
    const page = renderWithTheme(<Home />)
    expect(page).toMatchSnapshot()
  })
})
