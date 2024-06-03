// src/pages/HomePage.js

import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        Welcome to Our E-commerce Store
      </header>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
