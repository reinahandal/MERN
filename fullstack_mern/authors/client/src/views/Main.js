import React from 'react'
import { Link } from 'react-router-dom'
import AuthorsTable from '../components/AuthorsTable'

const Main = () => {
    return (
        <div>
        <h1>Favorite Authors</h1>
        <Link to={"/new"}>Add an author</Link>
        <p>We have quotes by:</p>
        <AuthorsTable/>
        </div>
    )
}

export default Main
