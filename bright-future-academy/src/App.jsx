import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import AdmissionEnquiry from './components/AdmissionEnquiry';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Stats />
        <About />
        <Courses />
        <Faculty />
        <Results />
        <Testimonials />
        <AdmissionEnquiry />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call to Action */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
