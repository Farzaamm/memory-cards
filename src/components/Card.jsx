import React from 'react'

function Card( { pokemonImg, name } ) {
  return (
    <div>
      <img src="{pokemonImg}" alt="" />
      <h4>{name}</h4>
    </div>
  )
}

export default Card
