import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'


const ShowProducts = (props) => {
    const {removeFromDom} = props;

    const deleteProduct = productId => {
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res=>{
            removeFromDom(productId);
        })
        .catch(err => console.error(err));
    }

    return (
        <div className='text-center'>
        {props.products.map((product, i) => {
            return <div key={i} className="mb-3">
                <Link to={"/"+product._id}>{product.title}</Link>
                <button onClick={(e)=>{deleteProduct(product._id)}} className="btn btn-sm btn-danger ms-3">Delete</button>
            </div>
        }
        )}
        </div>
    )
}

export default ShowProducts
