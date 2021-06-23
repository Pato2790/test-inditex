import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('Main component', () => {
  test('Render App Component', () => {
    render(<App />)
  })
})
