import React from 'react';
import { MessageCircle } from 'lucide-react';
import { academyInfo } from '../data/mockData';

const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${academyInfo.whatsappNumber}?text=${encodeURIComponent(academyInfo.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-semibold text-xs sm:text-sm pl-0 group-hover:pl-2">
        Chat with Counselor
      </span>
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
