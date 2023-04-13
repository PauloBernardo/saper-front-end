import React from 'react'
import { render, screen } from '@testing-library/react'
import BoxesAdd from "./BoxesAdd";

test('renders login page', () => {
    render(<BoxesAdd />)
    const linkElement = screen.getByText(/TeamsList/i)
    expect(linkElement).toBeInTheDocument()
})
