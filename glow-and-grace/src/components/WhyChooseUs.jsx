import React from 'react';
import { Award, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';
import { whyChooseUsData } from '../data/mockData';

const iconMap = {
  Award: Award,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-rose-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-rose-700 bg-rose-100/80 px-3.5 py-1 rounded-full border border-rose-200">
            Our Excellence
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900">
            Why Choose Glow &amp; Grace?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            We combine high-end European spa protocols with personal care to offer you an unmatched salon experience.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {whyChooseUsData.map((item) => {
            const IconComp = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.id}
                className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start space-y-4 group hover:-translate-y-1.5"
              >
                <div className="w-14 h-14 rounded-2xl bg-rose-100/70 text-rose-700 flex items-center justify-center group-hover:bg-rose-700 group-hover:text-white transition-colors duration-300 shadow-inner">
                  <IconComp className="w-7 h-7" />
                </div>

                <h3 className="font-serif-title text-xl font-bold text-stone-900 group-hover:text-rose-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-stone-600 text-xs leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
