import React from 'react';
import Product from './Product';

const Products = ( props ) => (
    <div>
        <style jsx>{`
            ul {
                list-style: none;
                padding: 0px;
                display: flex;
                flex-wrap: wrap;
            }

            ul li {

            }
        `}</style>
        <ul>
            {
                props.products.map( product => (
                    <Product key={ product._id } product={ product } />
                )
            )}
        </ul>
    </div>
)

export default Products
