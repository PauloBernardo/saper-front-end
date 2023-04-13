import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'

test('renders login page', () => {
    render(<Home />)
    const linkElement = screen.getByText(/TeamsList/i)
    expect(linkElement).toBeInTheDocument()
})
