import React from 'react';
import Product from './Product';

const Products = ( props ) => (
    <ul>
        {
            props.products.map( product => (
                <Product key={ product._id } product={ product } />
            )
        )}
    </ul>
)

export default Products
