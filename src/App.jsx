import React, { useState, useEffect } from 'react';
import HomePage from './Component/HomePage';
import GamePage from './Component/GamePage';
import LoadingPage from './Component/LoadingPage'; 
import './App.css'; 

const App = () => {
  const [currentPage, setCurrentPage] = useState('loading'); 
  const [currentLevel, setCurrentLevel] = useState(1); 

  
  useEffect(() => {
    setTimeout(() => {
      setCurrentPage('home'); 
    }, 2000); 
  }, []);

  const handleBackToHome = () => {
    setCurrentPage('home'); 
  };

  const handleStartGame = () => {
    setCurrentPage('game'); 
    setCurrentLevel(1); 
  };

  const moveToCongratulations = () => {
    setCurrentPage('congratulations'); 
  };

  return (
    <div className="App">
      {currentPage === 'loading' && <LoadingPage />}
      {currentPage === 'home' && <HomePage onStartGame={handleStartGame} />}
      {currentPage === 'game' && (
        <GamePage
          level={currentLevel}
          onBackToHome={handleBackToHome}
          moveToCongratulations={moveToCongratulations}
        />
      )}
      {currentPage === 'congratulations' && <CongratulationsPage onBackToHome={handleBackToHome} />}
    </div>
  );
};

export default App;
