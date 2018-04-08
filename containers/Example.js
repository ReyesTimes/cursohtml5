import React, { Component } from 'react';


function ExampleComponentNew( props ) {
    return (
        <div>Este es un curso de HTML 5 ... { props.children } { props.title }</div>
    )
}

class ExampleComponent extends Component {
    constructor() {
        super();

        this.state = {
            example: 10
        }
    }

    render() {
        return (
            <div>Este es un curso de HTML 5 { this.props.children }</div>
        )
    }
}

export default ExampleComponentNew;
