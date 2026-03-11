import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Request from './components/Request'
import Benefits from './components/Benefits'
import Manage from './components/manageRides'
import Solution from './components/Solution'
import Registration from './components/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Request />
      <Benefits />
      <Manage />
      <Solution />
      <Registration />
    </>
  )
}

export default App
