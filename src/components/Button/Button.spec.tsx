import '@testing-library/jest-dom'

import { renderWithTheme } from '@/utils/jest.utils'

import Button from '.'

describe('Button', () => {
  it('should match the snapshot', () => {
    const button = renderWithTheme(<Button onClick={() => 1}>Click here</Button>)
    expect(button).toMatchSnapshot()
  })
})
