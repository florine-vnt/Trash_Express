import React, { useState, useEffect } from 'react';
import '../styles/Game.css';
import trex from '../assets/trex.png';
import cactus from '../assets/cactus.png';

function Game() {
  const [isJumping, setIsJumping] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");

    function jump() {
      if (!isJumping) {
        setIsJumping(true);
        setTimeout(() => {
          setIsJumping(false);
        }, 300);
      }
    }

    const intervalId = setInterval(() => {
      const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
      const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        clearInterval(intervalId);
        setGameOver(true);
      }
    }, 10);

    document.addEventListener("keydown", jump);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("keydown", jump);
    };
  }, [isJumping]);

  const handleRestart = () => {
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <div className="game">
        <div id="dino" className={isJumping ? "jump" : ""} style={{ backgroundImage: `url(${trex})` }}></div>
        <div id="cactus" style={{ backgroundImage: `url(${cactus})` }}></div>
      </div>
      {gameOver && (
        <div className="game-over-box">
          <div>Game Over!</div>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default Game;

