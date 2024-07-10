import React from 'react'

function Header({score}) {
  return (
    <div>
      <div className="header-left">
        <h1>Memory Cards</h1>
        <p>Get points by clicking on an image but don&apos;t click on any more than once!</p>
      </div>

      <div className="header-right">
        <h4>Score: {score}</h4>
        <h4>High Score: 0</h4>
      </div>
    </div>
  )
}

export default Header
