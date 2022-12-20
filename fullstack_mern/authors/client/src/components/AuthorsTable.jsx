import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorsTable = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            setAuthors(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    }, []);

    const removeFromDOM = authorId => {
        setAuthors(authors.filter(author => author._id !=authorId));
    }

    return (
        <div>
        <table>
            <tr>
                <th>Author</th>
                <th>Actions Available</th>
            </tr>
            {loaded && authors.map((author,i)=> {
                return <tr key={i}>
                    <td>{author.name}</td>
                    <td><Link to={"/edit/"+author._id}>Edit</Link> | <DeleteButton authorId={author._id} successCallback={()=>removeFromDOM(author._id)}/></td>
                </tr>
            })}
        </table>
        </div>
    )
}

export default AuthorsTable
