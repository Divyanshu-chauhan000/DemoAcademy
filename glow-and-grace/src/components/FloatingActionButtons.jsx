import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { businessDetails } from '../data/mockData';

const FloatingActionButtons = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Phone Call Floating Button */}
      <a
        href={`tel:${businessDetails.phone.replace(/[^0-9+]/g, '')}`}
        className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-lg hover:bg-rose-700 hover:scale-110 transition-all duration-300 group"
        title="Call Salon"
      >
        <Phone className="w-5 h-5 text-rose-300 group-hover:text-white" />
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${businessDetails.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:bg-emerald-500 hover:scale-110 transition-all duration-300 animate-bounce-subtle"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
};

export default FloatingActionButtons;
