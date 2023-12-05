import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';

export function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    photo_url: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar dados para o servidor usando o método POST
      const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        console.log('Produto adicionado com sucesso!');
        // Redirecionar de volta para a lista de produtos após adicionar
        navigate('/products');
      } else {
        console.error('Erro ao adicionar o produto:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao adicionar o produto:', error);
    }
  };

  return (
    <Styled.AddProductWrapper>
      <h1>Adicionar Produto</h1>
      <Styled.AddProductForm onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Preço:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="photo_url">URL da Foto:</label>
        <input
          type="text"
          id="photo_url"
          name="photo_url"
          value={product.photo_url}
          onChange={handleChange}
          required
        />

        <button type="submit">Adicionar Produto</button>
      </Styled.AddProductForm>
    </Styled.AddProductWrapper>
  );
}
