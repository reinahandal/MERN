import React from 'react'
import { useState } from 'react'

const ProductForm = (props) => {
    const {initialTitle, initialDesc, initialPrice, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDesc] = useState(initialDesc);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
        setTitle("");
        setPrice(0);
        setDesc("");
    }

    return (
        <div className="container mt-5">
            <h1 className='text-center mb-4'>Product Manager</h1>
            <form onSubmit={handleSubmit}>
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

export default ProductForm
