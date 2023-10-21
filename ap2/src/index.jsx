import React from 'react';
import './styles/global-styles.css';
import { Home } from './templates/Home';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);