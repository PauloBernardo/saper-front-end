import React from 'react'
import { render, screen } from '@testing-library/react'
import Sidebar from './Sidebar'

test('renders login page', () => {
    render(<Sidebar links={[]} userLinks={[]} />)
    const linkElement = screen.getByText(/Not Found/i)
    expect(linkElement).toBeInTheDocument()
})
