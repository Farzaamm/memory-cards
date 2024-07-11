import React,{ useState,  useEffect } from 'react'

function Header({score}) {
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score);
    }
  }, [score, highScore]);

  return (

    <div className='header'>
      <div className="header-left">
        <h1>Memory Cards</h1>
        <p>Get points by clicking on an image but don&apos;t click on any more than once!</p>
      </div>

      <div className="header-right">
        <h4>Score: {score}</h4>
        <h4>High Score: {highScore}</h4>
      </div>
    </div>
  )
}

export default Header
