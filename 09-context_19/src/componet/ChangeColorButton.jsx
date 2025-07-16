import  { useContext } from 'react';

import { BgContext } from '../context/BackgroundProvider';
const ChangeColorButton = () => {
    const { changeColor } = useContext(BgContext);
    

    return (
        <button onClick={changeColor}>
            Change Background Color
        </button>
    );
};

export default ChangeColorButton;