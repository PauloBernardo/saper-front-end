import React from 'react'
import { render, screen } from '@testing-library/react'
import StudentsList from "./StudentsList";

test('renders login page', () => {
    render(<StudentsList />)
    const linkElement = screen.getByText(/TeamsList/i)
    expect(linkElement).toBeInTheDocument()
})
