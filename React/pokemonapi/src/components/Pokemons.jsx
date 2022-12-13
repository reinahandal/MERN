import React, { useEffect, useState } from 'react'

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [clicked, setClicked] = useState(false);
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemons(response.results))
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

export default Pokemons
