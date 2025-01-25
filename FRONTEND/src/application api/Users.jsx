import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';


const Users = () => {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    return (
        <div>Users</div>
    )
}

export default Users