import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, GraduationCap, ChevronRight } from 'lucide-react';
import { academyInfo } from '../data/mockData';

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
    { name: 'Courses', href: '#courses' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Results', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-3.5 shadow-sm'
    }`}>
      {/* Top Info Banner Bar */}
      <div className="bg-sky-950 text-slate-300 text-xs py-2 px-4 hidden md:block border-b border-sky-900/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call: {academyInfo.phone}</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>Email: {academyInfo.email}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-sky-900 text-sky-200 border border-sky-700/60 px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase">
              DEMO CLIENT PREVIEW
            </span>
            <span className="text-slate-400">{academyInfo.openingHours}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-700 to-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 block leading-tight tracking-tight">
                {academyInfo.name}
              </span>
              <span className="text-[10px] tracking-wider text-slate-500 font-semibold uppercase block">
                Coaching Excellence & Mentorship
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Phone Call button */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${academyInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-sky-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>{academyInfo.phone}</span>
            </a>
            <a
              href="#enquiry"
              className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-sky-600/20 hover:shadow-lg transition-all duration-300 flex items-center gap-1.5"
            >
              <span>Enquire Now</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="#enquiry"
              className="bg-sky-600 text-white text-xs px-3 py-1.5 rounded-lg font-semibold shadow"
            >
              Enquire
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-sky-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 mt-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#enquiry"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-sky-600 text-white py-2.5 rounded-xl font-semibold text-sm shadow-md"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
