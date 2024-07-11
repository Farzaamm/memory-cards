import React, { useState, useEffect } from 'react';
import Card from './Card';

    function Cards({score, setScore, setGameOverScreen}) {
    const [pokemonArray, setPokemonArray] = useState([]);
    const [pokemonImageArray, setPokemonImageArray] = useState([]);
    const [clickedPokemonArray, setClickedPokemonArray] = useState([]);

    useEffect(() => {
        async function fetchPokemon() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
        const data = await response.json();
        setPokemonArray(data.results);
        }

        fetchPokemon();
    }, []);

    useEffect(() => {
        if (pokemonArray.length > 0) {
        const fetchImages = async () => {
            const imagesArray = await Promise.all(
            pokemonArray.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                const data = await res.json();
                return data.sprites.front_default;
            })
            );
            setPokemonImageArray(imagesArray);
        };

        fetchImages();
        }
    }, [pokemonArray]);

    function shuffleArray(array) {
        const newArray = array.slice();
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray
    }

    function gameOver() {
        setGameOverScreen(true);
        setClickedPokemonArray([]);
        const shuffledPokemon = shuffleArray(pokemonArray);
        setPokemonArray(shuffledPokemon);
    }


    function onCardClick(pokemon) {
        // console.log(`${pokemon.name} was clicked!`);
        if(clickedPokemonArray.includes(pokemon.name)) {
            // console.log(clickedPokemonArray)
            gameOver();
        }
        else{
            setClickedPokemonArray(prevArray => [...prevArray, pokemon.name]); 
            setScore(prevScore => prevScore + 1)  
            const shuffledPokemon = shuffleArray(pokemonArray);
            setPokemonArray(shuffledPokemon);
        }
    }



    // useEffect(() => {
    //     console.log(clickedPokemonArray);
    // }, [clickedPokemonArray]);

    return (
        <div className="cards-container">
            {pokemonArray.map((pokemon, index) => (
                <Card 
                    onClick={() => onCardClick(pokemon)}
                    key={index}
                    name={pokemon.name}
                    pokemonImg={pokemonImageArray[index]}
                />
            ))}
        </div>
    );
}

export default Cards;
