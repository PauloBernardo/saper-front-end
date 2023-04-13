import React from 'react'
import { render, screen } from '@testing-library/react'
import BoxesEdit from "./BoxesEdit";

test('renders login page', () => {
    render(<BoxesEdit />)
    const linkElement = screen.getByText(/TeamsList/i)
    expect(linkElement).toBeInTheDocument()
})
