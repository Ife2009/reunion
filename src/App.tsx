import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar  onBookAppointment={
    () => alert("Hello")
    } />
    <Hero  onBookAppointment={
    () => alert("Hello")
    } />
    <Services />
     <h1>Hell</h1>
    </>
  )
}

export default App
