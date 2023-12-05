import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    padding: 1rem;
    text-align: center;

    p {
      margin: 0;
      font-size: 0.9rem;
    }
  `}
`;
