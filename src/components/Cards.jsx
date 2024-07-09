import React, { useState, useEffect } from 'react';
import Card from './Card';

function Cards() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonImage, setPokemonImage] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
      const data = await response.json();
      setPokemon(data.results);
    }

    fetchPokemon();
  }, []);

  useEffect(() => {
    if (pokemon.length > 0) {
      const fetchImages = async () => {
        const images = await Promise.all(
          pokemon.map(async (p) => {
            const res = await fetch(p.url);
            const data = await res.json();
            return data.sprites.front_default;
          })
        );
        setPokemonImage(images);
      };

      fetchImages();
    }
  }, [pokemon]);

  return (
    <div className="cards-container">
      {pokemon.map((pokemon, index) => (
        <Card 
          key={index}
          name={pokemon.name}
          pokemonImg={pokemonImage[index]}
        />
      ))}
    </div>
  );
}

export default Cards;
