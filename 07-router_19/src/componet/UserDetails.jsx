import React from 'react'
import { useParams } from "react-router-dom";
const UserDetails = () => {

    const{ name } = useParams();
  return (
    <div>
            <h1>Welcome dear {name}!</h1>
      
    </div>
  )
}

export default UserDetails;


      