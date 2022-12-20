import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';


const ShowProducts = (props) => {
    const {removeFromDom} = props;

    return (
        <div className='text-center'>
        {props.products.map((product, i) => {
            return <div key={i} className="mb-3">
                <Link to={"/"+product._id}>{product.title}</Link>
                <DeleteButton productId={product._id} successCallback={()=> removeFromDom(product._id)}/>
            </div>
        }
        )}
        </div>
    )
}

export default ShowProducts
