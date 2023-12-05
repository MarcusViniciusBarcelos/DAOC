import * as Styled from './styles';
import { useContext, useEffect } from 'react';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { ProductContext } from '../../Context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';

export const Products = () => {
  const context = useContext(ProductContext);
  const navigate = useNavigate();
  const [data, request] = useFetch('http://localhost:3001', 'products');

  useEffect(() => {
    request();
  }, [request]);

  function handleClick(id) {
    navigate(`${id}`);
  }

  return (
    <>
      <Menu />
      <Styled.ProductsList>
        {Array.isArray(data) &&
          data.map((product) => (
            <Styled.ProductCard key={product.id}>
              <Styled.ProductImage src={product.photo_url} alt={product.name} />
              <Styled.ProductTitle>{product.name}</Styled.ProductTitle>
              <Styled.ProductPrice>
                ${product.price.toFixed(2)}
              </Styled.ProductPrice>
              <Styled.ProductDescription>
                {product.description}
              </Styled.ProductDescription>
              <Styled.ProductButton onClick={() => handleClick(product.id)}>
                Ver Detalhes
              </Styled.ProductButton>
            </Styled.ProductCard>
          ))}
      </Styled.ProductsList>
      <Footer />
    </>
  );
};
