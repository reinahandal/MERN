import React, { useEffect, useState } from 'react'
import axios from 'axios';
import obiwan from '../obiwan.jpg';

const People = (props) => {
    const [result, setResult] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/'+props.id)
            .then(response => {setResult(response.data); setError(null)})
            .catch(err=> setError(err))
    }, [props.id]);

    return (
        error ?
        <div className="mt-4">
            <h3 className='mb-4'>These aren't the droids you're looking for!</h3>
            <img style={{width:"400px"}} src={obiwan}></img>
        </div> : 
        <div className="mt-4">
            <h1>{result.name}</h1>
            <p>Height: {result.height}</p>
            <p>Mass: {result.mass}</p>
            <p>Hair Color: {result.hair_color}</p>
            <p>Skin Color: {result.skin_color}</p>
        </div>
    )
}

export default People
