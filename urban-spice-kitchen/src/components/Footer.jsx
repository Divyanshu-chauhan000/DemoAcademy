import React from 'react';
import { Utensils, ArrowUp } from 'lucide-react';
import { restaurantInfo, menuCategories } from '../data/restaurantData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-12 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 font-bold shadow-md shadow-amber-500/20">
                <Utensils className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-serif-title text-white tracking-tight">
                {restaurantInfo.name}
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Fine dining restaurant offering artisanal recipes, authentic wood-fired pizzas, rich Indian delicacies, and hand-crafted beverages.
            </p>
            <div className="pt-1 text-[11px] text-stone-500 italic">
              * Fictional demo client showcase template built with React & Tailwind CSS.
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-serif-title text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'Featured', 'Menu', 'About', 'Gallery', 'Reviews', 'Reservation', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-amber-400 transition-colors font-normal"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-serif-title text-sm tracking-wider uppercase">Menu Categories</h4>
            <ul className="space-y-2 text-xs">
              {menuCategories.slice(1, 7).map((cat) => (
                <li key={cat}>
                  <a href="#menu" className="hover:text-amber-400 transition-colors font-normal">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-serif-title text-sm tracking-wider uppercase">Visit Us</h4>
            <p className="text-xs text-stone-400 font-normal leading-relaxed">{restaurantInfo.address}</p>
            <p className="text-xs text-amber-400 font-medium">{restaurantInfo.phone}</p>
            <p className="text-xs text-stone-400 font-normal">{restaurantInfo.email}</p>

            {/* Social Placeholders */}
            <div className="flex items-center gap-2.5 pt-2">
              {['IG', 'FB', 'TW', 'TA'].map((soc) => (
                <a
                  key={soc}
                  href="#home"
                  className="w-7 h-7 rounded-lg bg-stone-900 border border-stone-800 hover:border-amber-500 text-stone-400 hover:text-amber-400 flex items-center justify-center text-[10px] font-bold transition"
                  title={`${soc} Social Link`}
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved. Demo Client Showcase.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 px-3.5 py-2 rounded-xl border border-stone-800 transition text-xs"
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
