import React from 'react'
import { useParams } from "react-router-dom";
const Admin = () => {
    const{ name } = useParams();

  return (
    <div>
      <h1>Admin Panel</h1>
          <p>Manage users and settings here.</p>
          
          <p>Only accessible to admins.</p>
            <h1>Welcome dear {name} admin page !</h1>
          

    </div>
  )
}

export default Admin
