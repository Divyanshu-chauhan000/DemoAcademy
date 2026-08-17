import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/mockData';

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 bg-rose-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-rose-700 bg-rose-100/80 px-3.5 py-1 rounded-full border border-rose-200">
            Demo Testimonials
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900">
            Loved By Our Clients
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Read sample feedback from clients who experienced our salon and beauty spa treatments.
          </p>
        </div>

        {/* 3 Demo Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-rose-200 group-hover:text-rose-400 transition-colors" />
                </div>

                <p className="text-stone-700 text-sm italic leading-relaxed font-light">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-rose-200"
                />
                <div>
                  <h4 className="font-serif-title text-base font-bold text-stone-900">
                    {item.name}
                  </h4>
                  <span className="text-xs text-rose-700 font-medium">
                    {item.role}
                  </span>
                </div>
              </div>

              {/* Demo Badge on Card */}
              <span className="absolute top-4 right-4 text-[10px] bg-stone-100 text-stone-500 px-2 py-0.5 rounded font-medium">
                Demo Review
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
