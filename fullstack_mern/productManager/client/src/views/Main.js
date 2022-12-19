import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ShowProducts from "../components/ShowProducts";

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
        .then(res =>{
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err=> console.log(err));
    }, [products]);

    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ShowProducts products={products}/>}
        </div>
    )
}