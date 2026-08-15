import React from 'react';
import { Star, Quote, MessageSquare, UserCheck } from 'lucide-react';
import { testimonialsData } from '../data/mockData';

const Testimonials = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-sky-950 border border-sky-800 text-sky-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <MessageSquare className="w-3.5 h-3.5" />
            Student & Parent Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            What Our <span className="text-sky-400">Students & Parents Say</span>
          </h2>
          <p className="text-slate-400 text-sm font-normal">
            Read sample feedback highlighting our academic environment and mentoring experience.
          </p>

          <span className="inline-block bg-slate-800 text-slate-300 border border-slate-700 text-[11px] px-3 py-0.5 rounded font-medium">
            Demo Testimonials (Sample Client Copy)
          </span>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-slate-800/90 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm shadow-lg flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 relative"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-sky-500/30" />
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal italic mb-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm">{t.name}</h3>
                  <p className="text-[11px] text-sky-400 font-medium">{t.course}</p>
                </div>
                <span className="text-[10px] bg-slate-950 text-slate-400 px-2 py-0.5 rounded font-mono">
                  DEMO
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
