import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/actions';

const products = [
  { id: 1, name: 'Snake Plant', price: 10, image: '/images/snake.jpg' },
  { id: 2, name: 'Spider Plant', price: 15, image: '/images/spider.jpg' },
  // Add more plants...
];

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Our Plants</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              disabled={cart.some((item) => item.id === product.id)}
              onClick={() => handleAddToCart(product)}
            >
              {cart.some((item) => item.id === product.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
