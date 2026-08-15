import React from 'react';
import { Award, BookOpen, AlertCircle, GraduationCap } from 'lucide-react';
import { facultyData } from '../data/mockData';

const Faculty = () => {
  return (
    <section id="faculty" className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-sky-200/60">
            Our Mentors & Educators
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            Learn From Experienced <span className="text-sky-700 font-semibold">Subject Experts</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Our team comprises experienced educators dedicated to student success, analytical clarity, and systematic competitive exam mentorship.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-slate-200/80 text-slate-600 border border-slate-300/80 text-xs px-3.5 py-1 rounded-full font-normal">
            <AlertCircle className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
            <span>Demo Profiles Notice: Faculty cards shown below are fictional demo profiles for showcase purposes.</span>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyData.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-md text-xs font-semibold text-sky-900 shadow border border-slate-100">
                    {faculty.subject}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {faculty.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-600">
                    {faculty.qualification}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                    <Award className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>{faculty.experience}</span>
                  </div>

                  <p className="text-xs text-slate-500 font-normal leading-relaxed pt-2 border-t border-slate-100">
                    {faculty.bio}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1">
                <a
                  href="#enquiry"
                  className="w-full block text-center bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 font-medium py-2 rounded-xl text-xs border border-slate-200 transition"
                >
                  Book Session with {faculty.subject.split(' ')[0]}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faculty;
