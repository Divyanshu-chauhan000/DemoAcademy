import React from 'react';
import { Award, BookOpen, AlertCircle } from 'lucide-react';
import { facultyData } from '../data/mockData';

const Faculty = () => {
  return (
    <section id="faculty" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Our Mentors & Educators
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Learn From Experienced <span className="text-sky-600">Subject Experts</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our team comprises experienced educators dedicated to student success and concept mastery.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 text-xs px-3 py-1 rounded-md font-semibold">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Demo Content Notice: Faculty profiles shown are fictional demo profiles.</span>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyData.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-sky-800 shadow">
                    {faculty.subject}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {faculty.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500">
                    {faculty.qualification}
                  </p>

                  <div className="pt-3 flex items-center gap-2 text-xs font-medium text-slate-600">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>{faculty.experience}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <a
                  href="#enquiry"
                  className="w-full block text-center bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 font-semibold py-2 rounded-xl text-xs border border-slate-200 transition"
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
