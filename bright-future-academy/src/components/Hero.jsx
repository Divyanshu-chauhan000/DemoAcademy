import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, BookOpen, Users2 } from 'lucide-react';
import { academyInfo } from '../data/mockData';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 overflow-hidden">
      {/* Dynamic background light blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-amber-200/30 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Admissions Open for New Batches 2025-26</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Shape Your Future With The <span className="bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">Right Guidance</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {academyInfo.heroSubtitle}
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-2 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              {[
                'IIT/NEET Expert Educators',
                'Small Batch Size Guarantee',
                'Interactive Doubt Sessions',
                'Proven Track Record'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#courses"
                className="w-full sm:w-auto bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-sky-600/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#enquiry"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-sky-300 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-base shadow-sm"
              >
                <span>Enquire Now</span>
              </a>
            </div>

            {/* Demo Notice Disclaimer */}
            <p className="text-xs text-slate-400 italic">
              * Fictional institute demo layout designed for educational client presentation.
            </p>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Card Framing */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-amber-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-2xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                  alt="Students studying together at Bright Future Academy"
                  className="rounded-2xl w-full h-[360px] sm:h-[420px] object-cover"
                />

                {/* Floating Achievement Card 1 */}
                <div className="absolute top-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Teaching Quality</div>
                    <div className="text-sm font-bold text-slate-800">100% Certified</div>
                  </div>
                </div>

                {/* Floating Achievement Card 2 */}
                <div className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Batch Enrollment</div>
                    <div className="text-sm font-bold text-slate-900">Limited Students/Batch</div>
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
