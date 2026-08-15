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
    <section className="py-12 bg-sky-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <span className="bg-sky-900 text-sky-200 border border-sky-800 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-medium">
            Demo Showcase Metrics
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {statsData.map((stat) => {
            const IconComponent = iconMap[stat.icon] || Users;
            return (
              <div
                key={stat.id}
                className="bg-sky-900/30 border border-sky-800/50 rounded-xl p-5 text-center backdrop-blur-sm hover:bg-sky-900/60 transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-0.5 tracking-tight">
                  {stat.count}
                </h3>
                <p className="text-xs font-semibold text-sky-200">{stat.label}</p>
                <p className="text-[11px] text-sky-400 mt-0.5 font-normal">{stat.subText}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 max-w-3xl mx-auto text-center space-y-1">
          <p className="text-xs text-sky-200/90 leading-relaxed font-normal">
            Every statistic represents our commitment to academic precision, structured evaluation, and comprehensive student growth.
          </p>
          <p className="text-[10px] text-sky-400/70 italic">
            * Note: Sample metrics for demonstration purposes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
