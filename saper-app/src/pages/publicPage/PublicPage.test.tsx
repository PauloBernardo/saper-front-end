import React from 'react'
import { render, screen } from '@testing-library/react'
import PublicPage from './PublicPage'

test('renders login page', () => {
    render(<PublicPage />)
    const linkElement = screen.getByText(/SAPER/i)
    expect(linkElement).toBeInTheDocument()
})
