import styled from 'styled-components';

export const AddProductWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const AddProductForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
  }

  input,
  textarea {
    margin-bottom: 16px;
    padding: 8px;
    font-size: 16px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    border: none;
    font-size: 16px;
  }
`;
