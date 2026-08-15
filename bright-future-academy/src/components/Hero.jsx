import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, BookOpen, Users2 } from 'lucide-react';
import { academyInfo } from '../data/mockData';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 overflow-hidden">
      {/* Background light accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200/80 text-sky-800 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Admissions Open for Academic Session 2025-26</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Shape Your Future With The <span className="text-sky-700 font-bold">Right Guidance</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {academyInfo.heroSubtitle}
            </p>

            <p className="text-sm text-slate-500 leading-relaxed hidden sm:block max-w-2xl mx-auto lg:mx-0 font-normal">
              {academyInfo.heroDetailText}
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              {[
                'IIT/NEET Experienced Educators',
                'Small Batch Size Guarantee (Max 25)',
                'Daily Dedicated Doubt Resolution',
                'Proven Entrance Examination Record'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#courses"
                className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-medium px-7 py-3 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#enquiry"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-sky-400 font-medium px-7 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-sm"
              >
                <span>Enquire Now</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 font-normal">
              * Fictional coaching institute demonstration platform for client preview.
            </p>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative bg-white p-3 sm:p-4 rounded-2xl shadow-lg border border-slate-200/70">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                  alt="Students studying together at Bright Future Academy"
                  className="rounded-xl w-full h-[340px] sm:h-[380px] object-cover"
                />

                {/* Floating Card 1 */}
                <div className="absolute top-5 -left-5 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-md border border-slate-200 hidden sm:flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Teaching Methodology</div>
                    <div className="text-xs font-semibold text-slate-800">100% Concept Focused</div>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute -bottom-5 -right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-slate-200 flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Classroom Environment</div>
                    <div className="text-xs font-semibold text-slate-800">Personalized Mentorship</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
