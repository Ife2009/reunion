

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
// import AppointmentModal from './components/AppointmentModal'
import Footer from './components/Footer'

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
    <Doctors />
    <Testimonials />
    <Contact />
    {/* <AppointmentModal /> */}
    <Footer/>

    </>
  )
}

export default App
