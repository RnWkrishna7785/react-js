import { useContext } from 'react';
import { BgContext } from '../context/BackgroundProvider';
import ChangeColorButton from './ChangeColorButton';

const MainContainer = () => {
    const { bgColor } = useContext(BgContext);

    return (
        <div style={{ minHeight: '100vh', background: bgColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ChangeColorButton />
        </div>
    );
};

export default MainContainer;