import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
const Setting = ({isAdmin}) => {
 const {name} = useParams();
 
    const gotoHome = useNavigate();
    
    const handleClick = () => {
        if (isAdmin) {
            gotoHome('/admin');
        }
        else {
            gotoHome('/page404');
        }
    }
    return (
    <div>
            <h1>Welcome to setting page {name}</h1>
     <button onClick={handleClick}>Login user</button>       
    </div>

    )

}

export default Setting;