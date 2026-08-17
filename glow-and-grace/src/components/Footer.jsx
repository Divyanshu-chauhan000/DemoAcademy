import React from 'react';
import { Sparkles, Heart, Phone, Mail, MapPin, Share2, Globe, MessageCircle } from 'lucide-react';
import { businessDetails } from '../data/mockData';

const Footer = ({ onBookClick }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceCategories = [
    'Hair Styling & Cuts',
    'Hair Spa & Nourishment',
    'Botanical Facials',
    'Deluxe Manicure & Pedicure',
    'Royal Bridal Makeup',
    'Party & Glam Makeup',
    'Swedish Spa & Aromatherapy'
  ];

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-700 to-amber-400 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-serif-title text-xl font-bold text-white tracking-tight">
                GLOW <span className="text-rose-400 font-normal">&amp;</span> GRACE
              </span>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Premium salon &amp; beauty spa concept created to deliver extraordinary pampering, radiant skincares, and couture hair experiences.
            </p>

            {/* Social Placeholders */}
            <div className="flex items-center space-x-3 pt-2">
              <a href={businessDetails.socials.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-rose-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors" title="Instagram">
                <Globe className="w-4 h-4" />
              </a>
              <a href={businessDetails.socials.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-rose-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors" title="Facebook">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={businessDetails.socials.pinterest} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-rose-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors" title="Pinterest">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif-title text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-rose-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-rose-300 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div>
            <h4 className="font-serif-title text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-rose-500 pl-3">
              Our Treatments
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {serviceCategories.map((serv, idx) => (
                <li key={idx} className="hover:text-stone-200 transition-colors">
                  {serv}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-serif-title text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-rose-500 pl-3">
              Contact Studio
            </h4>

            <div className="text-xs text-stone-400 space-y-2.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <span>{businessDetails.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>{businessDetails.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>{businessDetails.email}</span>
              </p>
            </div>

            <button
              onClick={onBookClick}
              className="mt-3 w-full bg-rose-700 hover:bg-rose-600 text-white font-medium py-2.5 rounded-xl text-xs transition-colors shadow-sm cursor-pointer"
            >
              Book Online Appointment
            </button>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {currentYear} Glow &amp; Grace Beauty Studio. Fictional Concept Demo Website.</p>

          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Beauty Salon Clients</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
