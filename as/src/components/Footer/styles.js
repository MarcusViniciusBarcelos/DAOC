import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../../components/SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};
    padding: 1rem;
    color: ${theme.colors.white};
    font-weight: bold;
    background-color: ${theme.colors.primaryColor};

    & ${SectionContainer} {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  `}
`;
