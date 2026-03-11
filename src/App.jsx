import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Request from './components/Request'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Request />
    </>
  )
}

export default App
