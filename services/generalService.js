import config from './config'
import fetch from 'isomorphic-unfetch'

const generalService = async () => {
    let res = await fetch( 'https://aerolab-challenge.now.sh/products', {
        method: 'get',
        headers: ({
            'Authorization': `Bearer ${ config.token }`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    })

    return res.json()
}

export default generalService;
