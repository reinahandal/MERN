import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    // considering we want to navigate the user back to the main page
    // no need to execute the removefromDOM function because it will rerender anyway
    // const {removeFromDom} = props;
    const navigate = useNavigate();

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
            <DeleteButton productId={product._id} successCallback={()=> navigate("/")}/>
        </div>
    )
}

export default Detail;