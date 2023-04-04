import React from 'react'
import { render, screen } from '@testing-library/react'
import TableDataPagination from "./TableDataPagination";

test('renders login page', () => {
    render(<TableDataPagination numberOfPages={0} currentPage={0} changePage={() => null} />)
    const linkElement = screen.getByText(/TeamsList/i)
    expect(linkElement).toBeInTheDocument()
})
