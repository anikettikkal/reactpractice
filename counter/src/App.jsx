import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter , setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>counter value : {counter}</h1>
      <button onClick={addValue}>AddCounter</button>
      <button onClick={removeValue}>RemoveCounter</button>
    </>
  )
}

export default App
