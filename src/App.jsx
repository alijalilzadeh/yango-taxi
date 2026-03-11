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
import Question from './components/Question'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Request />
      <Benefits />
      <Manage />
      <Solution />
      <Registration />
      <Question />
      <Footer />
    </>
  )
}

export default App
