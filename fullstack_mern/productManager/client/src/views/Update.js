import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [title,setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDesc] = useState("");

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res=> {
            setTitle(res.data.title);
            setDesc(res.data.description);
            setPrice(res.data.price);
        })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/'+id, {
            title,
            description,
            price
        })
        .then(res=> {console.log(res);navigate("/"+id)})
        .catch(err => console.error(err));
    }

    return (
        <div className="container mt-5">
            <h1 className='text-center mb-4'>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div className='mb-4'>
                    <label className='form-label'>Title</label>
                    <input type="text" className='form-control' onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                </div>
                <div className='mb-4'>
                    <label className='form-label'>Price</label>
                    <input type="number" className='form-control' onChange={(e)=>setPrice(e.target.value)} value={price}></input>
                </div>
                <div className='mb-4'>
                    <label className='form-label'>Description</label>
                    <input type="text" className='form-control' onChange={(e)=>setDesc(e.target.value)} value={description}></input>
                </div>
                <div className='text-center'>
                    <input type="submit" className='btn btn-dark'></input>
                </div>
            </form>
        </div>
    )
}

export default Update
