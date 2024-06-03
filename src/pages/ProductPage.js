// src/pages/ProductPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
