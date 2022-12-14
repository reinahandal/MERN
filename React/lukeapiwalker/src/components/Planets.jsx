import React, { useEffect } from 'react'
import axios from 'axios';

const Planets = (props) => {
    const [result, setResult] = useEffect({});

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/'+props.id)
            .then(response => setResult(response.data))
            .catch(err=> console.log(err))
    }, []);

    return (
        <div>
            <h1>{result.name}</h1>
            <p>Climate: {result.climate}</p>
            <p>Terrain: {result.terrain}</p>
            <p>Surface Water: {result.surfaceWater}</p>
            <p>Population: {result.population}</p>
        </div>
    )
}

export default Planets
