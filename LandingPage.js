import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div style={{ backgroundImage: 'url(/path-to-image.jpg)', height: '100vh' }}>
    <h1>Houseplants Store</h1>
    <p>Welcome to the best online houseplant store. We offer a variety of beautiful houseplants!</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;
