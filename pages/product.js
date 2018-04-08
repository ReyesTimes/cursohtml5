import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import generalService from  '../services/generalService'
import Products from '../containers/Products'

class NewExample extends Component {
    static async getInitialProps() {
        const data = await generalService();

        return {
          products: data
        }
    }

    render() {
        console.log( this.props.products );
        return (
            <Products products={ this.props.products }/>
        )
    }
}

export default NewExample
