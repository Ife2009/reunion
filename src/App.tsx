

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {


  return (
    <>
    <Navbar  onBookAppointment={
    () => alert("Hello")
    } />
    <Hero  onBookAppointment={
    () => alert("Hello")
    } />
    <Services />
     
    </>
  )
}

export default App
