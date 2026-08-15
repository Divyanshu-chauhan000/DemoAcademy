import React from 'react';
import { GraduationCap, UserCheck, ClipboardCheck, HelpCircle, BookOpen, BarChart3, CheckCircle } from 'lucide-react';
import { whyChooseUsData } from '../data/mockData';

const iconMap = {
  GraduationCap: GraduationCap,
  UserCheck: UserCheck,
  ClipboardCheck: ClipboardCheck,
  HelpCircle: HelpCircle,
  BookOpen: BookOpen,
  BarChart3: BarChart3
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Why Choose Bright Future Academy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Student <span className="text-sky-600">Excellence & Growth</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We provide a holistic educational framework combining subject mastery, continuous practice, and individual mentoring to ensure every student reaches their full potential.
          </p>
        </div>

        {/* Grid of Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item) => {
            const IconComp = iconMap[item.icon] || GraduationCap;
            return (
              <div
                key={item.id}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-sky-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Academy Standard Feature</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside About */}
        <div className="mt-16 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Ready to Experience Premier Coaching?</h3>
            <p className="text-sky-200 text-sm max-w-xl">
              Book a free counseling session or attend a demo class with our senior faculty today.
            </p>
          </div>
          <a
            href="#enquiry"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-md transition-all whitespace-nowrap"
          >
            Book Free Demo Class
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
