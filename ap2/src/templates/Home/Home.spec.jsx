import { render, screen } from '@testing-library/react';
import Home from '.';

it('dump test', () => {
  render(<Home />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});
