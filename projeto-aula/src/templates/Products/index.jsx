import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import * as Styled from './styles';

export function Products() {
  const context = useContext(ProductContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('http://localhost:3001/products');
        const products = await result.json();
        setData(products);
        context.setData(products);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, []);

  function handleClick(id) {
    navigate(`/products/${id}`);
  }
  function handleAddProduct() {
    navigate('/add-product');
  }

  function handleDelete(id) {
    // Fazer uma requisição para apagar o produto com o ID fornecido
    fetch(`http://localhost:3001/products/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        // Atualizar a lista de produtos após a exclusão
        const updatedProducts = data.filter((product) => product.id !== id);
        setData(updatedProducts);
      })
      .catch((error) => {
        console.error('Erro ao apagar produto:', error);
      });
  }

  return (
    <>
      <Styled.AddProductButton onClick={handleAddProduct}>
        Adicionar Produto
      </Styled.AddProductButton>
      <Styled.ProductContainer>
        {data &&
          data.map((product) => (
            <Styled.ProductCard key={product.id}>
              <img src={product.photo_url} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <p>{product.description}</p>
              <button onClick={() => handleClick(product.id)}>Info</button>
              <Styled.DeleteButton onClick={() => handleDelete(product.id)}>
                Apagar
              </Styled.DeleteButton>
            </Styled.ProductCard>
          ))}
      </Styled.ProductContainer>
    </>
  );
}
