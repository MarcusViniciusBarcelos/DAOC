import { Base } from '../Base';
import { ProductContext } from '../../Context/ProductContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import { useState } from 'react';
import { Products } from '../Products';
import * as Styled from './styles';
import { ProductTemplate } from '../ProductTemplate';
import { Contacts } from '../Contacts';

export function Home() {
  const [data, setData] = useState([]);
  return (
    <ProductContext.Provider value={{ data, setData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductTemplate />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Styled.NotFound>404</Styled.NotFound>} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}
