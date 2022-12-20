import axios from 'axios';
import React from 'react'

const DeleteButton = (props) => {
    const {productId, successCallback} = props;

    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res=>{
            successCallback();
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            <button onClick={deleteProduct} className="btn btn-sm btn-danger ms-3">Delete</button>
        </div>
    )
}

export default DeleteButton
