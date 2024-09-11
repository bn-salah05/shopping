import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Snake Plant', price: 10, image: '/images/snake-plant.jpg', category: 'Succulents' },
  { id: 2, name: 'Spider Plant', price: 15, image: '/images/spider-plant.jpg', category: 'Low Light' },
];

const ProductListingPage = () => (
  <div>
    <h2>Our Plants</h2>
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductListingPage;