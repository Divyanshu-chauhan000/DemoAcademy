import React from 'react';
import { Trophy, Medal, AlertCircle, Award } from 'lucide-react';
import { resultsData } from '../data/mockData';

const Results = () => {
  return (
    <section id="results" className="py-16 bg-gradient-to-b from-white to-sky-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-medium uppercase tracking-wider px-3.5 py-1 rounded-full border border-slate-200">
            <Trophy className="w-3.5 h-3.5 text-sky-600" />
            Our Academic Achievements
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            Consistent High Performance & <span className="text-sky-700 font-semibold">Top Ranks</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Our disciplined methodology consistently enables students to excel in national-level competitive examinations year after year.
          </p>

          <div className="inline-flex items-center gap-2 bg-slate-100/80 text-slate-600 border border-slate-200 text-xs px-3.5 py-1 rounded-full font-normal">
            <AlertCircle className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
            <span>Clearly labeled demo showcase of achievements for client evaluation.</span>
          </div>
        </div>

        {/* Results Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {resultsData.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Accent Icon */}
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Medal className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-800 bg-sky-100/70 px-2.5 py-0.5 rounded-md">
                {res.exam}
              </span>

              <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2 group-hover:text-sky-700 transition-colors">
                {res.achievement}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                {res.details}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-sky-700">
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-sky-600" />
                  Demonstration Metric
                </span>
                <span className="text-slate-400 font-normal">* Sample data</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner quote */}
        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-5 text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-slate-600 text-xs sm:text-sm italic font-normal">
            "Success in competitive exams is the cumulative result of daily disciplined practice, strategic test analysis, and unwavering guidance."
          </p>
          <span className="text-xs text-sky-700 font-medium mt-1.5 block">— Bright Future Academy Mentorship Team</span>
        </div>

      </div>
    </section>
  );
};

export default Results;
