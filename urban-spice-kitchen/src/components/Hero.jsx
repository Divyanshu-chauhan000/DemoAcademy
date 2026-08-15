import React from 'react';
import { ArrowRight, Calendar, Sparkles, Utensils, Star } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-stone-950">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920"
          alt="Urban Spice Kitchen Interior Dining Atmosphere"
          className="w-full h-full object-cover opacity-30 scale-105 transition-transform duration-10000 animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-6 text-center sm:text-left">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Fictional Restaurant Demo Showcase</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-title font-bold text-white tracking-tight leading-none">
            Good Food. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Great Moments.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-stone-300 font-normal leading-relaxed max-w-2xl">
            {restaurantInfo.subheading}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start text-xs text-stone-400 pt-2 font-medium">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Organic Ingredients</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Crafted Recipes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Warm Hospitality</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a
              href="#menu"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-base"
            >
              <Utensils className="w-4 h-4" />
              <span>View Menu</span>
            </a>

            <a
              href="#reservation"
              className="w-full sm:w-auto bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-500/50 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-base backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Reserve a Table</span>
            </a>
          </div>

          <p className="text-[11px] text-stone-500 italic pt-2">
            * Demo website template built for potential restaurant client presentation.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
