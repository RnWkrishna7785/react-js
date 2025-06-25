import React, { useState } from 'react';
import './Togglebtn/Togglebtn.css'

const Togglebtn = () => {

    const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <>
        <div className={`toggle ${isOn ? 'Light' : 'Dark'}`}>
          <div className="btn-body" >
              <span className="btn-title" >
      {isOn ? 'Welcome to Dark mode' : 'Welcome to The mode'}
          </span>
          <br />
          <span className={`btn ${isOn ? "onLight" : "onDark"}`} onClick={handleClick}>
      {isOn ? 'Light mode' : 'Dark mode'}
    </span>
        </div>
        </div>
    
    </>
  )
};

export default Togglebtn
