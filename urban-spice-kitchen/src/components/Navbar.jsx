import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu as MenuIcon, X, Calendar, Utensils } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Featured', href: '#featured' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      
      {/* Top Bar */}
      <div className="bg-stone-950/95 text-stone-300 text-xs py-2 px-4 border-b border-stone-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{restaurantInfo.phone}</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium hover:text-amber-400 transition-colors">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>{restaurantInfo.openingHours}</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium hover:text-amber-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{restaurantInfo.address}</span>
            </span>
          </div>

          <a
            href="#reservation"
            className="bg-amber-600/20 text-amber-400 border border-amber-500/30 px-3 py-0.5 rounded text-[11px] font-semibold hover:bg-amber-600 hover:text-white transition-all flex items-center gap-1"
          >
            <Calendar className="w-3 h-3" />
            <span>Quick Table Booking</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${
        isScrolled ? 'bg-stone-950/95 backdrop-blur-md py-3 shadow-xl border-b border-stone-800/60' : 'bg-gradient-to-b from-stone-950/90 to-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
                <Utensils className="w-5 h-5 font-bold" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-serif-title block leading-none">
                  Urban Spice
                </span>
                <span className="text-[10px] tracking-widest text-amber-400 uppercase font-medium block mt-1">
                  Fine Dining & Kitchen
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Reservation CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#reservation"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-300 text-sm hover:scale-105"
              >
                Reserve a Table
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href="#reservation"
                className="bg-amber-500 text-stone-950 text-xs px-3 py-1.5 rounded-lg font-bold shadow"
              >
                Reserve
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-stone-300 hover:text-amber-400 hover:bg-stone-900 focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-900 px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
              <a
                href="#reservation"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-amber-500 text-stone-950 py-2.5 rounded-xl font-bold text-sm shadow-md"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
