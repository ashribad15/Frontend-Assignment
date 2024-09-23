import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header and loading state', () => {
  render(<App />);
  
  // Check if the header is rendered
  const headerElement = screen.getByText(/display/i); // Adjust based on your actual header text
  expect(headerElement).toBeInTheDocument();

  // Check if the loading state is present initially
  const loaderElement = screen.getByText(/loading/i); // Adjust based on your loading indicator text
  expect(loaderElement).toBeInTheDocument();
});
