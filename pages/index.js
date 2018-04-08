import React, { Component } from 'react';
import UserContainer from '../containers/UserContainer';
import fetch from 'unfetch';

class Index extends Component {
    constructor() {
        super();

        this.state = {
            nameUser: 'Norma Cosio'
        }
    }

    getInitialProps() {
        return { show: 20 }
    }

    render() {
        return (
            <div>
                <UserContainer nameUser={ this.state.nameUser } userPosition="Diseñadora" >
                </UserContainer>
            </div>
        );
    }
}

export default Index;
