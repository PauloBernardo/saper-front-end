import React from 'react'
import { render, screen } from '@testing-library/react'
import StudentsAdd from "./StudentsAdd";

test('renders login page', () => {
    render(<StudentsAdd />)
    const linkElement = screen.getByText(/TeamsList/i)
    expect(linkElement).toBeInTheDocument()
})
