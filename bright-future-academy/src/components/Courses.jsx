import React, { useState } from 'react';
import { Clock, BookCheck, ArrowRight, Check, Info } from 'lucide-react';
import { coursesData } from '../data/mockData';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section id="courses" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-sky-200/60">
            Our Academic Programs
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            Tailored Courses for <span className="text-sky-700 font-semibold">Every Goal</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Whether preparing for competitive engineering and medical entrance exams or strengthening school foundations, our structured courses deliver top academic results.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md hover:bg-white hover:border-sky-300 transition-all duration-300 relative group"
            >
              <div>
                {/* Header Tag & Badge */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-sky-800 bg-sky-100/90 px-2.5 py-0.5 rounded-full">
                    {course.targetClass}
                  </span>
                  <span className="text-[11px] font-medium text-slate-700 bg-slate-200/80 px-2 py-0.5 rounded-md">
                    {course.badge}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
                  {course.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-sm">
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
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3 pt-3 border-t border-slate-200/60">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>Duration: {course.duration}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="flex-1 bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-700 font-medium py-2 px-3 rounded-xl text-xs border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5 text-sky-600" />
                    <span>View Details</span>
                  </button>

                  <a
                    href="#enquiry"
                    className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-3 rounded-xl text-xs shadow transition-all flex items-center justify-center gap-1"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 text-sm"
            >
              ✕
            </button>

            <div className="inline-block bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {selectedCourse.targetClass}
            </div>

            <h3 className="text-xl font-bold text-slate-900">{selectedCourse.title}</h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{selectedCourse.longDescription || selectedCourse.description}</p>

            <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Key Course Modules & Benefits</h4>
              {selectedCourse.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <BookCheck className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-slate-500 bg-slate-100 border border-slate-200 p-2.5 rounded-lg">
              Note: Detailed batch timetables, fee structure, and offline classroom seating can be customized for your coaching center.
            </div>

            <div className="flex gap-2.5 pt-1">
              <button
                onClick={() => setSelectedCourse(null)}
                className="flex-1 bg-slate-100 text-slate-700 font-medium py-2.5 rounded-xl text-xs hover:bg-slate-200 transition"
              >
                Close
              </button>
              <a
                href="#enquiry"
                onClick={() => setSelectedCourse(null)}
                className="flex-1 text-center bg-sky-600 text-white font-medium py-2.5 rounded-xl text-xs hover:bg-sky-700 shadow transition"
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
