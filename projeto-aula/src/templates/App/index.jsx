import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Contact } from '../Contact';
import { Products } from '../Products';
import * as Styled from './styles';
import { Nav } from '../../components/Nav';
import { ProductInfo } from '../ProductInfo';
import { ProductContext } from '../../context/ProductContext';
import { useState } from 'react';

export function App() {
  const [data, setData] = useState();
  return (
    <ProductContext.Provider value={{ data, setData }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductInfo />} />
          <Route path="*" element={<Styled.NotFound>404</Styled.NotFound>} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}
