import React from 'react';
import { Users, Award, Calendar, TrendingUp } from 'lucide-react';
import { statsData } from '../data/mockData';

const iconMap = {
  Users: Users,
  Award: Award,
  Calendar: Calendar,
  TrendingUp: TrendingUp,
};

const Stats = () => {
  return (
    <section className="py-12 bg-sky-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner disclaimer header */}
        <div className="text-center mb-8">
          <span className="bg-sky-800/80 text-sky-200 border border-sky-700 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            Demo Showcase Metrics
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat) => {
            const IconComponent = iconMap[stat.icon] || Users;
            return (
              <div
                key={stat.id}
                className="bg-sky-800/40 border border-sky-700/50 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-sky-800/70 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">
                  {stat.count}
                </h3>
                <p className="text-sm font-semibold text-sky-200">{stat.label}</p>
                <p className="text-xs text-sky-400 mt-0.5">{stat.subText}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[11px] text-sky-400/80 mt-6">
          * Figures displayed above are sample/demo figures for website presentation purposes.
        </p>
      </div>
    </section>
  );
};

export default Stats;
