import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router';

const Search = (props) => {
    const [resource, setResource] = useState("people");
    const [id, setId] = useState("");

    // const [result, setResult] = useState("");
    // const [searchRes, setSearchRes] = useState({});
    
    // useEffect(() => {
    //     axios.get('https://swapi.dev/api/'+resource+'/'+id)
    //         .then(response => setResult(response.data))
    //         .catch(err=> console.log(err))
    // }, [id, resource]);
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(result);
    //     if(resource==="people"){
    //         setSearchRes({
    //             name: result.name,
    //             height: result.height,
    //             mass: result.mass,
    //             hairColor: result.hair_color,
    //             skinColor: result.skin_color
    //         })
    //         props.result(searchRes);
    //         console.log(searchRes);
    //     } 
    //     else {
    //         setSearchRes({
    //             name: result.name,
    //             climate: result.climate,
    //             terrain: result.terrain,
    //             surfaceWater: result.surface_water,
    //             population: result.population
    //         })
    //         props.result(searchRes);
    //         console.log(searchRes)
    //     }
    //     navigate('/'+resource+'/'+id)
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/'+resource+'/'+id)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                <label>Search for:</label>
                <select value={resource} onChange={e=>setResource(e.target.value)}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <label>ID:</label>
                <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
                <input type="submit" value="Search"></input>
                </p>
            </form>
        </div>
    )
}

export default Search
