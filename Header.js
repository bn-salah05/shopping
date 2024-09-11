import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
    </header>
  );
};

export default Header;
