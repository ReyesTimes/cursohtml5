import React from 'react';

const Product = ( props ) => (
    <li>
        <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Roboto');

            li {
                font-family: 'Roboto', sans-serif;
                width: 20%;
                border: 1px solid #FFA386;
                background-color: #FF8F6D;
                color: #fff;
                display: flex;
                padding: 12px 10px;
                margin: 10px;
                border-radius: 8px;
                position: relative;
                align-items: center;
                line-height: 32px;
                -webkit-box-shadow: 8px 9px 4px -9px rgba(255,143,109,0.55);
                -moz-box-shadow: 8px 9px 4px -9px rgba(255,143,109,0.55);
                box-shadow: 8px 9px 4px -9px rgba(255,143,109,0.55);
            }

            li:hover .product__category {
                opacity: 0.9;
            }

            .product__category {
                position: absolute;
                background-color: #29B28F;
                font-size: 0.6em;
                padding: 10px;
                border-radius: 8px;
                bottom: -9px;
                right: -9px;
                opacity: 0;
                transition: all 0.3s ease-in;
                line-height: 0px;
            }

            .circle {
                height: 30px;
                width: 30px;
                border-radius: 100%;
                background-color: #6DFFD9;
                display: inline-block;
                margin-right: 10px;
            }
        `}</style>
        <img className="circle" src={ props.product.img.url } /><span>{ props.product.name }</span> <span className="product__category">{ props.product.category }</span>
    </li>
)

export default Product
