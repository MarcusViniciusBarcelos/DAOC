import styled, { css } from 'styled-components';

export const ProductInfoWrapper = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
  `}
`;

export const ProductInfoContent = styled.div`
  ${({ theme }) => css`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    h1 {
      color: ${theme.colors.primaryColor};
      margin-bottom: 1rem;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.3rem;
      margin-bottom: 1rem;
    }

    p {
      color: ${theme.colors.gray};
    }
  `}
`;

export const BackButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.3rem;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  `}
`;
