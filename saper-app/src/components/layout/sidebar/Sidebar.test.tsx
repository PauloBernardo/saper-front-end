import React from 'react'
import { render, screen } from '@testing-library/react'
import 'i18n/i18n'
import Sidebar from './Sidebar'

test('renders login page', () => {
    render(<Sidebar links={[]} userLinks={[]} />)
    const linkElement = screen.getByText(/SAPER/i)
    expect(linkElement).toBeInTheDocument()
})
