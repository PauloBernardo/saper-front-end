import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'

test('renders login page', () => {
    render(<NotFound />)
    const linkElement = screen.getByText(/Not Found/i)
    expect(linkElement).toBeInTheDocument()
})
