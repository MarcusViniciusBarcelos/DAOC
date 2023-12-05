import styled, { css } from 'styled-components';

export const ProductCard = styled.div`
  ${({ theme }) => css`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: center;
  `}
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ProductTitle = styled.h2`
  color: #333;
`;

export const ProductPrice = styled.p`
  color: #777;
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  color: #555;
  margin-top: 8px;
`;

export const ProductsList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const ProductButton = styled.button`
  ${({ theme }) => css`
  background-color: ${theme.colors.primary};
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.primaryDark};
    }
  `}
`;
