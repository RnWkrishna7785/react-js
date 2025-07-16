import { Link, NavLink } from "react-router-dom"
import React, { useState } from 'react'

const Headers = () => {
  const[active, setActive] = useState("")
  const handleActive = (e) => {
    e.preventDefault();

  };


  return (
    <>
      <form onSubmit={handleActive}>
        <input type="text" placeholder="Search..." value={active} on onChange={(e) => {
          setActive(e.target.value);
          
        }}/>
    </form>


     <div>
       <NavLink to="/home">Welcome to the home!</NavLink>
        <span> | </span>
        <Link to="/about">Welcome to the about!</Link>
        <span> | </span>
        <NavLink to={`/user/${active}`}>Welcome to the user!</NavLink>
     </div>
    </>
  )
}

export default Headers
