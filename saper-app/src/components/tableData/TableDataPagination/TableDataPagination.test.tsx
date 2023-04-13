import React from 'react'
import { render, screen } from '@testing-library/react'
import 'i18n/i18n'
import TableDataPagination from "./TableDataPagination";

test('renders tableDataPagination', () => {
    render(<TableDataPagination numberOfPages={5} currentPage={0} changePage={() => null} />)
    const linkElement = screen.getByText(/2/i)
    expect(linkElement).toBeInTheDocument()
})
