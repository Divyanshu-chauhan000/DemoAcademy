import React from 'react';
import { Calendar, Utensils, Sparkles } from 'lucide-react';
import { galleryImages } from '../data/restaurantData';

const SpecialOfferAndGallery = () => {
  return (
    <>
      {/* Special Offer Promotional CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950/80 relative overflow-hidden border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Special Evening Dining Experience
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight">
            Make Your Evening <span className="text-amber-400">Special</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Reserve your table and enjoy an unforgettable dining experience with curated chef specials and warm candlelit ambience.
          </p>

          <div>
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-8 py-3.5 rounded-xl shadow-xl shadow-amber-500/20 hover:scale-105 transition duration-300 text-base"
            >
              <Calendar className="w-5 h-5" />
              <span>Reserve a Table Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery" className="py-20 bg-stone-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-stone-900 border border-amber-500/30 text-amber-400 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
              Visual Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-white tracking-tight">
              Restaurant & Food <span className="text-amber-400">Gallery</span>
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-normal">
              A glimpse into our crafted dishes, rich interiors, and vibrant kitchen moments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="group relative h-60 sm:h-72 rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-lg"
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">{img.category}</span>
                    <h4 className="text-white text-sm font-bold font-serif-title">{img.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default SpecialOfferAndGallery;
