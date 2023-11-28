import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { useFetch } from '../../hooks/useFetch';

export function Products() {
  const context = useContext(ProductContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [datax, request] = useFetch('http://localhost:3001', 'products');

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
  }, [context]);

  function handleClick(id) {
    navigate(`/products/${id}`);
  }

  return (
    <div>
      <h1>Products</h1>
      {data &&
        data.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => handleClick(product.id)}>Info</button>
          </div>
        ))}
    </div>
  );
}
