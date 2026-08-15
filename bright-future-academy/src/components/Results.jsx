import React from 'react';
import { Trophy, Star, Medal, Sparkles, AlertCircle } from 'lucide-react';
import { resultsData } from '../data/mockData';

const Results = () => {
  return (
    <section id="results" className="py-20 bg-gradient-to-b from-white to-sky-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            Our Academic Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consistent High Performance & <span className="text-sky-600">Top Ranks</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our disciplined methodology consistently enables students to excel in national-level competitive examinations.
          </p>

          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 border border-slate-300 text-xs px-3.5 py-1.5 rounded-full font-medium">
            <AlertCircle className="w-4 h-4 text-sky-600" />
            <span>Clearly labeled demo showcase of achievements for client evaluation.</span>
          </div>
        </div>

        {/* Results Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {resultsData.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:border-amber-400/50 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Accent Icon */}
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Medal className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full">
                {res.exam}
              </span>

              <h3 className="text-2xl font-extrabold text-slate-900 mt-4 mb-3 group-hover:text-sky-700 transition-colors">
                {res.achievement}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {res.details}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-600">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  Demonstration Metric
                </span>
                <span className="text-slate-400 font-normal">* Sample data</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner quote */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-slate-700 text-sm italic">
            "Success is the sum of small efforts repeated day in and day out."
          </p>
          <span className="text-xs text-sky-600 font-semibold mt-2 block">— Bright Future Academy Mentorship Team</span>
        </div>

      </div>
    </section>
  );
};

export default Results;
