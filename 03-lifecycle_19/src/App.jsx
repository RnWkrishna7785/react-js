import Counter from './componet/Counter'
import './App.css'
import { useState } from 'react'

function App() {

  let [flag, setFlag] = useState(false);

  let changeFlag= () => {
  setFlag(!flag)
}

  return (
    <>
      <button onClick={changeFlag}>Toggle counter</button>
     {flag? <Counter />:null}
    </>
  )
}

export default App
