import React from 'react';
import { GraduationCap, Heart, ArrowUp } from 'lucide-react';
import { academyInfo, coursesData } from '../data/mockData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold shadow-md shadow-sky-600/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                {academyInfo.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Providing premier coaching for JEE, NEET, and Foundation courses with structured learning paths, expert educators, and personal attention.
            </p>
            <div className="pt-2 text-xs text-slate-500 italic">
              * Fictional demo client showcase template built with React & Tailwind CSS.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About Us', 'Courses', 'Faculty', 'Results', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Academic Programs</h4>
            <ul className="space-y-2 text-sm">
              {coursesData.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <a href="#courses" className="hover:text-sky-400 transition-colors truncate block">
                    {course.title.split('(')[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary & Social */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Contact Info</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{academyInfo.address}</p>
            <p className="text-xs text-sky-400 font-semibold">{academyInfo.phone}</p>
            <p className="text-xs text-slate-400">{academyInfo.email}</p>

            {/* Social Icons Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              {['FB', 'TW', 'YT', 'IN'].map((soc) => (
                <a
                  key={soc}
                  href="#home"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500 text-slate-400 hover:text-sky-400 flex items-center justify-center text-xs font-bold transition"
                  title={`${soc} Demo Link`}
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {academyInfo.name}. All rights reserved. Demo Client Showcase.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 px-3.5 py-2 rounded-xl border border-slate-800 transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
