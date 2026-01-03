import { useState } from 'react';
import AppointmentModal from './components/AppointmentModal';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar onBookAppointment={() => setIsOpen(true)} />
      <Hero onBookAppointment={() => setIsOpen(true)} />

      <AppointmentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <Services />
      <Doctors />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;