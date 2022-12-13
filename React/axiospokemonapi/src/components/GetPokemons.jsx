import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GetPokemons = () => {
    const [pokemons, setPokemons] = useState(null);
    const [clicked, setClicked] = useState(false);
    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => setPokemons(response.data.results))
    }, []);
    
    return (
        <div>
            <button onClick={(e)=>setClicked(true)}>Fetch Pokémon</button>
            <ol>
                {clicked && pokemons.map((poke,i)=> {
                    return (<li key={i}>{poke.name}</li>)
                })}
            </ol>
        </div>
    )
}

export default GetPokemons
