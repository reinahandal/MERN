import React from 'react'
import { Link } from 'react-router-dom'


const ShowProducts = (props) => {
    return (
        <div className='text-center'>
        {props.products.map((product, i) => 
            <Link to={product._id}><p key={i}>{product.title}</p></Link>
        )}
        </div>
    )
}

export default ShowProducts
