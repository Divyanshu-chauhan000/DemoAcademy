import React, { useState } from 'react';
import { Clock, BookCheck, ArrowRight, Sparkles, Check, Info } from 'lucide-react';
import { coursesData } from '../data/mockData';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section id="courses" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Our Academic Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Courses for <span className="text-sky-600">Every Goal</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether preparing for competitive entrances or strengthening school foundations, our structured courses deliver top results.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:bg-white hover:border-sky-300 transition-all duration-300 relative group"
            >
              <div>
                {/* Header Tag & Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
                    {course.targetClass}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-100 border border-amber-200 px-2.5 py-0.5 rounded-md">
                    {course.badge}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  {course.highlights.map((hl, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer info & Button */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4 pt-3 border-t border-slate-200/60">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Duration: {course.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="flex-1 bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-700 font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm border border-slate-200 transition-colors flex items-center justify-center gap-1"
                  >
                    <Info className="w-4 h-4" />
                    <span>View Details</span>
                  </button>

                  <a
                    href="#enquiry"
                    className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            <div className="inline-block bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full">
              {selectedCourse.targetClass}
            </div>

            <h3 className="text-2xl font-bold text-slate-900">{selectedCourse.title}</h3>

            <p className="text-slate-600 text-sm leading-relaxed">{selectedCourse.description}</p>

            <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Highlights</h4>
              {selectedCourse.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <BookCheck className="w-4 h-4 text-sky-600" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="text-xs text-slate-500 bg-amber-50 border border-amber-200 p-3 rounded-xl">
              💡 Demo Note: Detailed batch timetables, fee structure, and offline classroom seating can be customized for your coaching center.
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setSelectedCourse(null)}
                className="flex-1 bg-slate-100 text-slate-700 font-semibold py-3 rounded-xl text-sm hover:bg-slate-200 transition"
              >
                Close
              </button>
              <a
                href="#enquiry"
                onClick={() => setSelectedCourse(null)}
                className="flex-1 text-center bg-sky-600 text-white font-semibold py-3 rounded-xl text-sm hover:bg-sky-700 shadow-md transition"
              >
                Enquire for Batch
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
