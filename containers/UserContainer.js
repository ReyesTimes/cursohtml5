import React from 'react';
import fetch from 'unfetch';

const UserContainer = ( props ) => (
        <div>
            <div>{ props.nameUser }</div>
            <div>{ props.userPosition }</div>
        </div>
);

export default UserContainer;
