import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 1rem 2rem;
    z-index: ${theme.layers.menu};
    background: ${theme.colors.white};
    border-bottom: 0.1rem solid ${theme.colors.primaryColor};
  `}
`;
