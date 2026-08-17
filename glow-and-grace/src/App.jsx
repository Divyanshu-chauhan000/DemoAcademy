import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import BookAppointment from './components/BookAppointment';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActionButtons from './components/FloatingActionButtons';

function App() {
  const [selectedServicePreset, setSelectedServicePreset] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToAppointment = (serviceName = '') => {
    if (serviceName) {
      setSelectedServicePreset(serviceName);
    }
    const el = document.getElementById('book-appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-rose-50/20 text-stone-800 antialiased selection:bg-rose-200 selection:text-rose-900">
      {/* 1. Top Bar */}
      <TopBar onBookClick={() => scrollToAppointment()} />

      {/* 2. Navbar */}
      <Navbar 
        onBookClick={() => scrollToAppointment()} 
        activeSection={activeSection} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 3. Hero */}
        <Hero 
          onExploreClick={scrollToServices} 
          onBookClick={() => scrollToAppointment()} 
        />

        {/* 4. Services */}
        <Services onBookService={(serviceName) => scrollToAppointment(serviceName)} />

        {/* 5. Packages */}
        <Packages onBookPackage={(pkgName) => scrollToAppointment(`Package: ${pkgName}`)} />

        {/* 6. About */}
        <About onBookClick={() => scrollToAppointment()} />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Gallery */}
        <Gallery />

        {/* 9. Book Appointment */}
        <BookAppointment 
          selectedPresetService={selectedServicePreset}
          onResetPreset={() => setSelectedServicePreset('')}
        />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. Contact */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer onBookClick={() => scrollToAppointment()} />

      {/* Floating Action Buttons */}
      <FloatingActionButtons onBookClick={() => scrollToAppointment()} />
    </div>
  );
}

export default App;
