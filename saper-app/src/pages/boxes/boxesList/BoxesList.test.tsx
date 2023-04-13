import React from 'react'
import { render, screen } from '@testing-library/react'
import BoxesList from "./BoxesList";

test('renders login page', () => {
    render(<BoxesList />)
    const linkElement = screen.getByText(/TeamsList/i)
    expect(linkElement).toBeInTheDocument()
})
