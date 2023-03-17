import React from 'react';
import { render, screen } from '@testing-library/react';
import Clock from './Clock';

test('renders learn react link', () => {
  render(<Clock />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
