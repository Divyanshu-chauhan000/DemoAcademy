import React from 'react';
import { Calendar, ArrowRight, Sparkles, Star, ShieldCheck } from 'lucide-react';
import { businessDetails } from '../data/mockData';

const Hero = ({ onExploreClick, onBookClick }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Background Salon/Spa Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Salon Spa Interior"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="max-w-2xl text-white space-y-6">
          {/* Subtle Demo Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs text-rose-200 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{businessDetails.demoNotice}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
            <span className="text-stone-300">Premium Beauty Experience</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Feel Beautiful. <br />
            <span className="italic font-accent font-normal text-rose-300">Feel Confident.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-stone-300 font-light leading-relaxed max-w-xl">
            {businessDetails.tagline} Premium beauty and wellness experiences designed to help you relax, refresh and feel your best.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-rose-600/30 transition-all duration-300 flex items-center justify-center gap-2.5 text-base cursor-pointer group"
            >
              <Calendar className="w-5 h-5 text-rose-200 group-hover:scale-110 transition-transform" />
              <span>Book Appointment</span>
            </button>

            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-base cursor-pointer group"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-rose-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Micro Proof Highlights */}
          <div className="pt-8 flex flex-wrap items-center justify-center md:justify-start gap-6 border-t border-white/10 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9/5 Rating</span>
              <span className="text-stone-400">(Demo Reviews)</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-400" />
              <span>100% Sanitized &amp; Premium Products</span>
            </div>
          </div>

        </div>

        {/* Hero Decorative Card */}
        <div className="hidden lg:block relative w-80 lg:w-96">
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white shadow-2xl space-y-4">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600"
              alt="Spa Treatment Experience"
              className="w-full h-48 object-cover rounded-2xl shadow-md"
            />
            <div>
              <span className="text-xs uppercase tracking-widest text-rose-300 font-semibold">Special Highlight</span>
              <h3 className="font-serif-title text-xl font-bold text-white mt-0.5">Hydra Glow Facial Therapy</h3>
              <p className="text-xs text-stone-300 mt-1">Deep cleansing &amp; skin revival package available today.</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
              <span className="text-stone-300">Starting from <strong className="text-white font-semibold">$80 (Demo)</strong></span>
              <button 
                onClick={onBookClick} 
                className="text-rose-300 hover:text-white font-semibold underline underline-offset-4 cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
