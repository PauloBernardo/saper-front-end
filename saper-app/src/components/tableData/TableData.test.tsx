import React from 'react'
import { render, screen } from '@testing-library/react'
import TableData from "./TableData";

test('renders login page', () => {
    render(<TableData url={''} actions={[]} fields={[]} filters={{}} />)
    const linkElement = screen.getByText(/TeamsList/i)
    expect(linkElement).toBeInTheDocument()
})
