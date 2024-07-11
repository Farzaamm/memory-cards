import React, { useCallback, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import GameOver from './components/GameOver';

function App() {
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  function resetGame() {
    setScore(0)
    setGameOver(false)
  }
  return (
    <>
      {gameOver && <GameOver score={score} resetGame={resetGame}/>}
      {!gameOver && <div className='app-component'>
        <Header score={score} />
        <Cards 
          score={score} 
          setScore={setScore} 
          setGameOverScreen={setGameOver}
        />
        <Footer />
      </div>}
    </>
  );
}

export default App;
