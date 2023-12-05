import { useParams, Link } from 'react-router-dom';
import * as Styled from './styles';
import { useContext, useEffect, useState } from 'react';
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
    <Styled.ProductInfoWrapper>
      {data && (
        <Styled.ProductInfoContent>
          <h1>
            Product Info {data.id} - {data.name} - ${data.price}
          </h1>
          <img src={data.photo_url} alt={data.name} />
          <p>{data.description}</p>
          <Link to="/products">
            <Styled.BackButton>Voltar para Produtos</Styled.BackButton>
          </Link>
        </Styled.ProductInfoContent>
      )}
    </Styled.ProductInfoWrapper>
  );
}
