import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter , setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter+1)
  }

  const removeCounter = () => {

    setCounter(counter-1)
  }

  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>AddCounter</button>
      <button onClick={removeCounter}>RemoveCounter</button>
    </>
  )
}

export default App
