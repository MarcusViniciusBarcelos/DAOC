import styled, { css } from 'styled-components';

export const ContactWrapper = styled.div`
  ${({ theme }) => css`
    padding: 2rem;
  `}
`;

export const ContactContent = styled.div`
  ${({ theme }) => css`
    max-width: 600px;
    margin: 0 auto;
    text-align: center;

    h1 {
      color: ${theme.colors.primaryColor};
    }

    p {
      margin-top: 1rem;
      color: ${theme.colors.gray};
    }
  `}
`;

export const ContactForm = styled.form`
  ${({ theme }) => css`
    margin-top: 2rem;
    display: grid;
    gap: 1rem;

    label {
      font-weight: bold;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid ${theme.colors.primaryColor};
      border-radius: 0.3rem;
    }

    textarea {
      resize: vertical;
    }
  `}
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.secondaryColor};
    }
  `}
`;
