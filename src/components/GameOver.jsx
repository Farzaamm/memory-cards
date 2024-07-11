import React from 'react'

function GameOver({ score, resetGame }) {
    return (
        <div className='game-over-screen'>
            <div className="game-over-message">
            <h1>Game Over!</h1> 
            <p>Your score was {score}</p>
            <button onClick={() => resetGame()}>Play Again</button>
            </div>
        </div>
    )
}

export default GameOver
