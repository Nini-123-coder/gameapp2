// src/components/HomePage.jsx
import React from 'react';
import './HomePage.css'; // Import your CSS file for HomePage

const HomePage = ({ onStartGame }) => {
  const handleStartGame = () => {
    onStartGame(); // Call the callback function to start the game
  };

  return (
    <div className="home-page">
      <div className="letter-animation">
        <span>C</span>
        <span>A</span>
        <span>N</span>
        <span> </span>
        <span>Y</span>
        <span>O</span>
        <span>U</span>
        <span> </span>
        <span>S</span>
        <span>P</span>
        <span>O</span>
        <span>T</span>
        <span> </span>
        <span>T</span>
        <span>H</span>
        <span>E</span>
        <span> </span>
        <span>D</span>
        <span>I</span>
        <span>F</span>
        <span>F</span>
        <span>E</span>
        <span>R</span>
        <span>E</span>
        <span>N</span>
        <span>C</span>
        <span>E</span>
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default HomePage;
