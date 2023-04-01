import React from 'react'
import { render, screen } from '@testing-library/react'
import StudentsEdit from "./StudentsEdit";

test('renders login page', () => {
    render(<StudentsEdit />)
    const linkElement = screen.getByText(/TeamsList/i)
    expect(linkElement).toBeInTheDocument()
})
