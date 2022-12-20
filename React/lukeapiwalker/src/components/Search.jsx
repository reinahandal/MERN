import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router';

const Search = (props) => {
    const [resource, setResource] = useState("people");
    const [id, setId] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        setId("");
        setResource("people");
        navigate('/'+resource+'/'+id)
    }

    return (
        <div className='mt-5 container'>
            <form onSubmit={handleSubmit}>
                <p>
                <label>Search for:</label>
                <select value={resource} onChange={e=>setResource(e.target.value)} className='mx-3'>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <label>ID:</label>
                <input type="text" value={id} onChange={e=>setId(e.target.value)} className='mx-3'></input>
                <input type="submit" value="Search" className='btn btn-outline-primary'></input>
                </p>
            </form>
        </div>
    )
}

export default Search
