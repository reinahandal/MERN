import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthorForm = (props) => {
    const {initialName, onSubmitProp, errors} = props;
    const [name, setName] = useState(initialName);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp({name});
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            {errors.map((err,i)=> <p key={i}>{err}</p>)}
            <div>
                <label>Name:</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}></input>
            </div>
            <Link to={"/"}>Cancel</Link>
            <input type="submit"></input>
        </form>
        </div>
    )
}

export default AuthorForm
