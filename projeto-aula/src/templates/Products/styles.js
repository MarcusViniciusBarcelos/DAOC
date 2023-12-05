import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

export const DeleteButton = styled.a`
  padding: 6px;
  background-color: #ff0000; /* Cor vermelha para o botão de apagar */
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 50px;
  margin-left: 160px; /* Ajuste para separar os botões */
`;

export const ProductCard = styled.div`
  width: 300px;
  margin: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  p {
    margin: 8px 0;
  }

  button {
    padding: 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export const AddProductButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  margin-bottom: 16px;
  border-radius: 5px;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;
