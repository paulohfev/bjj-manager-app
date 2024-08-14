import { useState } from 'react'

import '@testing-library/jest-dom'

import { renderWithTheme } from '@/utils/jest.utils'

import TextField from '.'

describe('TextField', () => {
  it('should match the snapshot', () => {
    const TextFieldComponent = () => {
      const [inputValue, setInputValue] = useState('')
      return <TextField value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    }

    const { container } = renderWithTheme(<TextFieldComponent />)
    expect(container).toMatchSnapshot()
  })
})
