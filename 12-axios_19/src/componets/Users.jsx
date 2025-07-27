import React from 'react'
import {axiosInstance} from '../api/axios';
export default function Users() {
    const getUsers = async () => {
        const response = await axiosInstance.post('/posts/1', {
            name: 'John Doe',
            job: 'Software Engineer'
        });
        console.log(response.data);

    }
    getUsers();
    return <div>user</div>; 

     
}
