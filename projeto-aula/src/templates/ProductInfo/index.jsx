import { useParams } from 'react-router-dom';
import * as Styled from './styles';
import { useContext, useEffect, useState } from 'react';
import { context } from 'msw';
import { ProductContext } from '../../context/ProductContext';

export function ProductInfo() {
  const params = useParams();
  const [data, setData] = useState([]);
  const context = useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = context.data;
        const product = products.filter((product) => product.id == params.id);
        setData(product[0]);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, [context.data, params.id]);

  return (
    <div>
      {data && (
        <div>
          <h1>
            Product Info {data.id} - {data.name} - {data.price}
          </h1>
        </div>
      )}
    </div>
  );
}
