import React from "react";
import DogApi from "./components/DogApi";
const App = () => {
  return (
    <>
      <h1>Dog Image Fetcher</h1>
      <DogApi />
      <p>Select a dog breed to see a random image.</p>
    </>
  );
};

export default App;
