import React from 'react'
import { render, screen } from '@testing-library/react'
import TeamsList from './TeamsList'

test('renders login page', () => {
    render(<TeamsList />)
    const linkElement = screen.getByText(/TeamsList/i)
    expect(linkElement).toBeInTheDocument()
})
