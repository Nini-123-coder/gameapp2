// src/components/GamePage.jsx
import React, { useState, useEffect } from 'react';
import './GamePage.css'; 

const GamePage = ({ level, onBackToHome, moveToCongratulations }) => {
  const [answer, setAnswer] = useState('');
  const [hintVisible, setHintVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); 
  const [currentLevel, setCurrentLevel] = useState(1); 

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(false); 
    }

    const timer = timeLeft > 0 && setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]); 

  const image1 = `public/level1-1.jpg`;
  const image2 = `public/level1-2.jpg`;

  const handleAnswer = (manualSubmit = true) => {
    if (currentLevel === 1 && answer.toLowerCase() === 'blue red') {
      alert('Correct! Moving to Level 2.');
      moveToNextLevel();
    } else if (currentLevel === 2 && answer.toLowerCase() === 'dog cat') {
      alert('Correct! Moving to Level 3.');
      moveToNextLevel();
    } else if (currentLevel === 3 && answer.toLowerCase() === 'rabbit hare') {
      alert('Correct! Moving to Level 4.');
      moveToNextLevel();
    } else if (currentLevel === 4 && answer.toLowerCase() === 'tiger lion') {
      alert('Congratulations! You completed all levels.');
      moveToCongratulations();
    } else {
      if (manualSubmit) {
        alert('Incorrect! Please try again.');
        setAnswer(''); 
      }
      console.log('Incorrect answer, try again.');
    }
  };

  const moveToNextLevel = () => {
    const nextLevel = currentLevel + 1;
    setCurrentLevel(nextLevel); 
    setTimeLeft(10); 
    setAnswer(''); 
  };

  const handleBackToHome = () => {
    onBackToHome(); 
  };

  const toggleHint = () => {
    setHintVisible(!hintVisible);
  };

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="game-page" style={{ 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h1>Level {currentLevel}</h1>
      <div className="timer">Time Left: {formatTime(timeLeft)}</div>
      <div className="images">
        <img src={image1} alt={`Level ${currentLevel} Image 1`} />
        <img src={image2} alt={`Level ${currentLevel} Image 2`} />
        {currentLevel >= 2 && <img src={`public/level2-1.jpg`} alt={`Level ${currentLevel} Image 3`} />}
        {currentLevel >= 2 && <img src={`public/level2-2.jpg`} alt={`Level ${currentLevel} Image 4`} />}
        {currentLevel >= 3 && <img src={`public/leve3-1.jpg`} alt={`Level ${currentLevel} Image 5`} />}
        {currentLevel >= 3 && <img src={`public/level3-2.jpg`} alt={`Level ${currentLevel} Image 6`} />}
        {currentLevel >= 4 && <img src={`public/level4-1.jpeg`} alt={`Level ${currentLevel} Image 7`} />}
        {currentLevel >= 4 && <img src={`public/level4-2.jpg`} alt={`Level ${currentLevel} Image 8`} />}
      </div>
      <input
        type="text"
        placeholder="Type the differences"
        value={answer}
        onChange={handleInputChange}
      />
      <div className="button-group">
        <button onClick={() => handleAnswer(true)}>Submit</button>
        <button onClick={toggleHint}>Hint</button>
        <button onClick={handleBackToHome}>Back to Home</button>
      </div>
      {hintVisible && <p className="hint">Hint: The difference is behind and it's in front of you.</p>}
    </div>
  );
};

export default GamePage;
