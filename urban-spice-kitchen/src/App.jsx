import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import MenuSection from './components/MenuSection';
import About from './components/About';
import SpecialOfferAndGallery from './components/SpecialOfferAndGallery';
import ReservationSection from './components/ReservationSection';
import WhyChooseUsAndReviews from './components/WhyChooseUsAndReviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <MenuSection />
        <About />
        <SpecialOfferAndGallery />
        <ReservationSection />
        <WhyChooseUsAndReviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
