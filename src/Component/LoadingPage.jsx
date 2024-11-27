import React from 'react';
import './LoadingPage.css';

const LoadingPage = () => {
  return (
    <div className="loading-page" style={{ backgroundImage: 'url(public/loading-bg.jpg)' }}>
      <h1>Welcome To Spot The Difference Game</h1>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingPage;