import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthorForm from "../components/AuthorForm";

const AddAuthor = () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
        .then(res=>navigate("/"))
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            <AuthorForm onSubmitProp={createAuthor} initialName="" errors={errors}/>
        </div>
    )
}

export default AddAuthor
