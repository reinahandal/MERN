import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const Detail = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
        .then(res=>setProduct(res.data))
        .catch(err=> console.log(err));
    },[]);

    return (
        <div className='container mt-5 text-center'>
            <h1>Product title: {product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/"+product._id + "/edit"}>Edit</Link>
        </div>
    )
}

export default Detail;
