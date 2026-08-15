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
    <section id="about" className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            Why Choose Bright Future Academy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Designed for Student <span className="text-sky-700 font-bold">Excellence & Growth</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            We provide a holistic educational framework combining subject mastery, continuous practice, and individual mentoring to ensure every student reaches their full academic potential.
          </p>
        </div>

        {/* Grid of Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsData.map((item) => {
            const IconComp = iconMap[item.icon] || GraduationCap;
            return (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal pt-1 border-t border-slate-100">
                    {item.detailText}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-sky-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Academy Standard Feature</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-sky-950 via-sky-900 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl font-bold">Ready to Experience Premier Coaching?</h3>
            <p className="text-sky-200 text-xs sm:text-sm max-w-xl font-normal">
              Book a free counseling session or attend a demo class with our senior faculty today to evaluate our teaching methodology firsthand.
            </p>
          </div>
          <a
            href="#enquiry"
            className="bg-sky-600 hover:bg-sky-500 text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all whitespace-nowrap text-xs sm:text-sm"
          >
            Book Free Demo Class
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
