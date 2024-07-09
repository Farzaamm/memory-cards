import React from 'react'

function Card( { pokemonImg, name, onClick } ) {
  return (
    <div className="card" onClick={onClick}>
      <img src={pokemonImg} alt={`image of ${name}`} />
      <h4>{name}</h4>
    </div>
  )
}

export default Card
