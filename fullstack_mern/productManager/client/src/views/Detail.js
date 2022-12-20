import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
        .then(res=>setProduct(res.data))
        .catch(err=> console.log(err));
    },[]);
    
    const deleteProduct = productId => {
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res=>{
            navigate("/");
        })
        .catch(err => console.error(err));
    }

    return (
        <div className='container mt-5 text-center'>
            <h1>Product title: {product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/"+product._id + "/edit"}>Edit</Link>
            <button onClick={(e)=>{deleteProduct(product._id)}} className="btn btn-sm btn-danger ms-3">Delete</button>
        </div>
    )
}

export default Detail;
