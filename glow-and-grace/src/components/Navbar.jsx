import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Calendar, Phone } from 'lucide-react';
import { businessDetails } from '../data/mockData';

const Navbar = ({ onBookClick, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-rose-100' 
        : 'bg-white/80 backdrop-blur-sm py-4 border-b border-stone-200/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-700 via-rose-500 to-amber-300 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-stone-900 leading-none">
                GLOW <span className="text-rose-700 font-normal">&amp;</span> GRACE
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-stone-500 font-semibold mt-0.5">
                Beauty Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors relative py-1 hover:text-rose-700 ${
                  activeSection === link.href.substring(1) 
                    ? 'text-rose-700 font-semibold' 
                    : 'text-stone-700'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-600 rounded-full animate-fade-in" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href={`tel:${businessDetails.phone.replace(/[^0-9+]/g, '')}`}
              className="p-2 text-stone-600 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
              title="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={onBookClick}
              className="bg-stone-900 hover:bg-rose-800 text-white text-xs font-semibold px-5 py-2.5 rounded-full tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-rose-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onBookClick}
              className="bg-stone-900 text-white text-xs font-medium px-3 py-1.5 rounded-full cursor-pointer"
            >
              Book Now
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-rose-600 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-stone-800 hover:text-rose-700 font-medium py-2 px-3 rounded-lg hover:bg-rose-50/60 text-base transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
              <div className="text-xs text-stone-500 px-3 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-rose-600" />
                <span>{businessDetails.phone}</span>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full bg-rose-700 hover:bg-rose-800 text-white text-center py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
