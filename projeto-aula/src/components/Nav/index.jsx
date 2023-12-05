import P from 'prop-types';
import * as Styled from './styles';

export function Nav() {
  return (
    <Styled.Nav>
      <Styled.NavLink to="/" activeClassName="active">
        Home
      </Styled.NavLink>
      <Styled.NavLink to="/contact" activeClassName="active">
        Contact
      </Styled.NavLink>
      <Styled.NavLink to="/products" activeClassName="active">
        Products
      </Styled.NavLink>
    </Styled.Nav>
  );
}
