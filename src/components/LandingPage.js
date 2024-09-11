import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => (
  <div className="landing-page">
    <h1>Houseplants Store</h1>
    <p>Welcome to the best online houseplant store. We offer a variety of beautiful houseplants!</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;