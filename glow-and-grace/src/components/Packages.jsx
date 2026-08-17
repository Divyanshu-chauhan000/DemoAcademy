import React from 'react';
import { Check, Sparkles, Clock, Calendar, Star } from 'lucide-react';
import { packagesData } from '../data/mockData';

const Packages = ({ onBookPackage }) => {
  return (
    <section id="packages" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-rose-300 bg-rose-950/80 px-3.5 py-1 rounded-full border border-rose-800/50">
            Exclusive Packages
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-white">
            Curated Beauty &amp; Spa Experiences
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Combine our finest treatments into comprehensive wellness packages designed for maximum relaxation and savings.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-gradient-to-b from-stone-800 to-stone-900 border-2 border-rose-500/80 shadow-2xl shadow-rose-950 scale-105 lg:-translate-y-2'
                  : 'bg-stone-800/60 backdrop-blur-md border border-stone-700/80 hover:border-rose-400/50'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-rose-600 to-amber-600 text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-rose-300 font-semibold">{pkg.tagline}</span>
                  <h3 className="font-serif-title text-2xl font-bold text-white mt-1">{pkg.name}</h3>
                  <p className="text-stone-400 text-xs mt-2 font-light leading-relaxed">{pkg.description}</p>
                </div>

                {/* Price & Duration */}
                <div className="bg-stone-900/80 p-4 rounded-2xl border border-stone-700/50 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-bold text-white">{pkg.price}</span>
                    <span className="text-xs text-stone-500 line-through ml-2">{pkg.originalPrice}</span>
                    <span className="block text-[10px] text-stone-400 font-medium">Demo Price</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-900/40">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Included Services */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase text-stone-300 tracking-wider block">
                    What's Included:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.services.map((serv, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-stone-300">
                        <Check className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span>{serv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Book Now Button */}
              <div className="pt-8">
                <button
                  onClick={() => onBookPackage(pkg.name)}
                  className={`w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30'
                      : 'bg-white hover:bg-stone-100 text-stone-900'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Package</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Packages;
