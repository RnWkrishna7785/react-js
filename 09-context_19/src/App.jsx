import"./App.css";
import MainContainer from './componet/MainContainer';
import { BackgroundProvider }   from  './context/BackgroundProvider';

const App = () => {
  return (
    <BackgroundProvider>
      <MainContainer />
    </BackgroundProvider>
  );
};

export default App;
