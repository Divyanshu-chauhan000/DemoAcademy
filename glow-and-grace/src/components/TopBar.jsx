import React from 'react';
import { Phone, Clock, MapPin, Calendar, Sparkles } from 'lucide-react';
import { businessDetails } from '../data/mockData';

const TopBar = ({ onBookClick }) => {
  return (
    <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800 hidden sm:block relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        
        {/* Left Side Info */}
        <div className="flex flex-wrap items-center gap-6">
          <a 
            href={`tel:${businessDetails.phone.replace(/[^0-9+]/g, '')}`} 
            className="flex items-center gap-1.5 hover:text-rose-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-rose-400" />
            <span>{businessDetails.phone}</span>
          </a>

          <div className="flex items-center gap-1.5 text-stone-400">
            <Clock className="w-3.5 h-3.5 text-rose-400" />
            <span>{businessDetails.hours.weekdays}</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-stone-400">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span className="truncate max-w-xs">{businessDetails.address}</span>
          </div>
        </div>

        {/* Right Side Demo badge & CTA */}
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1 bg-rose-950/80 text-rose-300 border border-rose-800/50 px-2.5 py-0.5 rounded-full font-medium text-[11px]">
            <Sparkles className="w-3 h-3 text-rose-400 animate-pulse" />
            {businessDetails.demoNotice}
          </span>

          <button
            onClick={onBookClick}
            className="flex items-center gap-1.5 text-xs bg-rose-600 hover:bg-rose-500 text-white font-medium px-3 py-1 rounded-md transition-colors shadow-sm cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
