import { render, screen } from '@testing-library/react'
import Home from './page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('should match the snapshot', () => {
    const component = render(<Home />)
    expect(component).toMatchSnapshot()
  })
})
