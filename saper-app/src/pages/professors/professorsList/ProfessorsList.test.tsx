import React from 'react'
import { render, screen } from '@testing-library/react'
import ProfessorsList from "./ProfessorsList";

test('renders login page', () => {
    render(<ProfessorsList />)
    const linkElement = screen.getByText(/TeamsList/i)
    expect(linkElement).toBeInTheDocument()
})
