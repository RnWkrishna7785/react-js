import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)
  const prevCountRef = useRef(count)
  const buttonRef = useRef(null)
  const intervalRef = useRef(null)

  const handleHighlight = () => {
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.classList.add('highlight')
      setTimeout(() => {
        inputRef.current.classList.remove('highlight')
      }, 800)
    }
  }

  const handleButtonClick = () => {
    if (buttonRef.current) {
      buttonRef.current.style.background = 'lightgreen'
      setTimeout(() => {
        buttonRef.current.style.background = ''
      }, 600)
    }
  }

  const startAutoIncrement = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount(c => c + 1)
      }, 1000)
    }
  }

  const stopAutoIncrement = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  // Update prevCountRef after each render
  // (should be placed after setCount or in useEffect)
  if (prevCountRef.current !== count) {
    prevCountRef.current = count
  }

  return (
    <div className="container">
      <h1>useRef Input Highlighter</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          placeholder="Click highlight to focus & glow"
        />
        <button onClick={handleHighlight}>
          Highlight & Focus
        </button>
      </div>
      <button ref={buttonRef} onClick={handleButtonClick}>
        Click to Highlight Me
      </button>
      <button onClick={startAutoIncrement}>Start Auto Increment</button>
      <button onClick={stopAutoIncrement}>Stop Auto Increment</button>
      <p>Previous count: {prevCountRef.current}</p>
    </div>
  )
}

export default App
