import React from 'react';

const Product = ( props ) => (
    <li>
        { props.product.name }
        <img src={ props.product.img.url } />
    </li>
)

export default Product
