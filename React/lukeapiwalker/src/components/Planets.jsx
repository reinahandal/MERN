import React, { useEffect, useState } from 'react'
import axios from 'axios';
import obiwan from '../obiwan.jpg';

const Planets = (props) => {
    const [result, setResult] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/'+props.id)
        .then(response => setResult(response.data))
        .catch(err=> setError(err))
    }, [props.id]);

    return (
        error ?
        <div className="mt-4">
            <h3 className='mb-4'>These aren't the droids you're looking for!</h3>
            <img style={{width:"400px"}} src={obiwan}></img>
        </div> : 
        <div className='mt-4'>
            <h1>{result.name}</h1>
            <p>Climate: {result.climate}</p>
            <p>Terrain: {result.terrain}</p>
            <p>Surface Water: {result.surface_water}</p>
            <p>Population: {result.population}</p>
        </div>
    )
}

export default Planets
