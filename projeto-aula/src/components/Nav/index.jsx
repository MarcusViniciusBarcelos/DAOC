import P from 'prop-types';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <Styled.Nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/products">Products</Link>
    </Styled.Nav>
  );
}
