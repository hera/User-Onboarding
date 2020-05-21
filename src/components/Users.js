import React from 'react';

function Users (props) {
    let usersData = props.usersData;

    if (usersData) {
        return (
            <code>{ JSON.stringify(usersData) }</code>
        );
    }
    return null;
}

export default Users;