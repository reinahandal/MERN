import { useEffect } from "react";
import React from 'react';
import axios from 'axios';

const People = (props) => {
    const [result, setResult] = useEffect({});

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/'+props.id)
            .then(response => setResult(response.data))
            .catch(err=> console.log(err))
    }, []);

    return (
        <div>
            <h1>{result.name}</h1>
            <p>Height: {result.height}</p>
            <p>Mass: {result.mass}</p>
            <p>Hair Color: {result.hairColor}</p>
            <p>Skin Color: {result.skinColor}</p>
        </div>
    )
}

export default People
