import { render, screen } from '@testing-library/react';
import { Home } from '.';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
