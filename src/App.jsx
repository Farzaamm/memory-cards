import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
const [pokemon, setPokemon] = useState([])
// - pokemon is an array of pokemon with name and url

  function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then(res => res.json())
      // .then(data => console.log(data.results))
      .then(data => setPokemon(data.results))
      // - data.results is an array of pokemon with name and url
      // - data.results[0].url is the url of the first pokemon
  }

// - create a function to fetch the url and get the image from the returned data

  function renderPokemon() {
    return pokemon.map((pokemon, index) => {
      return (
        <Card 
          key={index}
          name={pokemon.name}
          pokemonImg={pokemon.url}
        />
      )
    })
  }


  return (
    <>
      <Header />
      <button onClick={getPokemon}>Get Pokemon</button>
      <Card />
      <Footer />
    </>
  )
}

export default App
