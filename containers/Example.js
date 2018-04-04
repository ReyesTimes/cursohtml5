import React, { Component } from 'react';


function ExampleComponentNew( props ) {
    return (
        <div>Este es un curso de HTML 5 ... { props.children }</div>
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
            <div>Este es un curso de HTML 5 { this.props.children } { this.state.example }</div>
        )
    }
}

export default ExampleComponentNew;
