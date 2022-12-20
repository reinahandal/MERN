import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm'

const EditAuthor = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [author,setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors/'+id)
        .then(res=> {
            setAuthor(res.data);
            setLoaded(true);
        })
    }, []);

    const updateAuthor = (author) => {
        axios.put('http://localhost:8000/api/authors/'+id, author)
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
        loaded &&
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <p>Edit author:</p>
            <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} errors={errors}/>
        </div>
    )
}

export default EditAuthor
