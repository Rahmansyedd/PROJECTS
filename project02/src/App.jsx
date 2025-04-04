import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  // variable
  // let counter = 15
  // arrow function
  const addValue = () => {
    // setCounter(counter + 1)
    setCounter((prevCounter) => prevCounter +1)
    setCounter((prevCounter) => prevCounter +1)
    setCounter((prevCounter) => prevCounter +1)
    setCounter((prevCounter) => prevCounter +1)
  }
  const reomveValue = ()=>{
    // setCounter(counter-1)
    setCounter((prevCounter) => prevCounter -1)
    setCounter((prevCounter) => prevCounter -1)
    setCounter((prevCounter) => prevCounter -1)
    setCounter((prevCounter) => prevCounter -1)
    
  }

  return (
    <>
      <h1>Countdown {counter}</h1>
      <h2>counter value:{counter}</h2>
      <button onClick = {addValue}
      >Add value</button>{" "}
      <button onClick={reomveValue}>Remove value</button>
      <p>footer:{counter}</p>

    </>
  )
}

export default App
