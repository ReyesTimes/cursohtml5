import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import generalService from  '../services/generalService'

class NewExample extends Component {
    static async getInitialProps() {
        const data = await generalService();

        return {
          products: data
        }
    }

    render() {
        return (
            <ul>
                {
                    this.props.products.map( product => (
                        <li key={ product._id }>
                            { product.name }
                            <img src={ product.img.url } />
                        </li>
                    )
                )}
            </ul>
        )
    }
}

export default NewExample
