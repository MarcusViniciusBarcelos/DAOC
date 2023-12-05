import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 1rem 2rem;
    z-index: ${theme.layers.menu};
    background-color: black;
    border-bottom: 0.1rem solid ${theme.colors.primaryColor};
  `}
`;

export const NavLink = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    color: white;
    font-size: 3rem;
    margin-right: 1.5rem;
    padding-bottom: 0.5rem;

    &:hover {
      border-bottom: 0.2rem solid ${theme.colors.primaryColor};
    }

    &:last-child {
      margin-right: 0;
    }

    &.active {
      border-bottom: 0.2rem solid ${theme.colors.primaryColor};
    }
  `}
`;
