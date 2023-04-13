import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import 'i18n/i18n'

import { AuthContext } from 'store/authContext'
import NotFound from './NotFound'

test('renders notFound page', () => {
  render(
    <AuthContext.Provider value={{}}>
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </AuthContext.Provider>,
  )
  const linkElement = screen.getByText(/Página não encontrada/i)
  expect(linkElement).toBeInTheDocument()
})
