import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm';

const Update = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=> {
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res=> {
            setProduct(res.data);
            setLoaded(true);
        })
    }, []);

    const updateProduct = (e,product) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/'+id, product)
        .then(res=> {console.log(res);navigate("/"+id)})
        .catch(err => console.error(err));
    }

    return (
        loaded && 
            <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialDesc={product.description} initialPrice={product.price}/>
    )
}

export default Update
