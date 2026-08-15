import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { testimonialsData } from '../data/mockData';

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-800/60 border border-sky-700 text-sky-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <MessageSquare className="w-3.5 h-3.5" />
            Student & Parent Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What Our <span className="text-sky-400">Students Say</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Read sample feedback from parents and students about their learning journey.
          </p>

          <span className="inline-block bg-sky-950 border border-sky-800 text-sky-300 text-xs px-3 py-1 rounded-md font-semibold">
            Demo Testimonials (Sample Client Copy)
          </span>
        </div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-slate-800/80 border border-slate-700/80 p-8 rounded-3xl backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300 relative"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-sky-500/30 mb-4" />

                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-base">{t.name}</h3>
                  <p className="text-xs text-sky-400">{t.course}</p>
                </div>
                <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-1 rounded font-mono">
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
