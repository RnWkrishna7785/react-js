// 1. Create a context
import { createContext, useState } from 'react';

const BgContext  = createContext();

// 2. Create a provider component
const BackgroundProvider = ({ children }) => {
    const [bgColor, setBgColor] = useState('#ffffff');

    const changeColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBgColor(randomColor);
    };

    return (
        <BgContext.Provider value={{ bgColor, changeColor }}>
            {children}
        </BgContext.Provider>
    );
};
export { BackgroundProvider, BgContext };