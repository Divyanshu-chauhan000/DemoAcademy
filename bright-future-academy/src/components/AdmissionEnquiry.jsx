import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { coursesData } from '../data/mockData';

const AdmissionEnquiry = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    studentClass: '',
    courseInterested: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.studentClass) newErrors.studentClass = 'Please select class';
    if (!formData.courseInterested) newErrors.courseInterested = 'Please select course';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="enquiry" className="py-16 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-sky-200/60">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Admissions Open 2025-26
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
              Get Started with <span className="text-sky-700 font-semibold">Bright Future Academy</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Fill out the admission enquiry form to book a free academic counseling session or reserve a demo seat in our upcoming batch.
            </p>

            <div className="space-y-3 pt-1">
              {[
                { title: 'Free Academic Counseling', desc: 'Detailed academic assessment with senior subject experts.' },
                { title: 'Demo Classroom Access', desc: 'Attend 2 complimentary trial lectures before finalizing enrollment.' },
                { title: 'Scholarship Test Eligibility', desc: 'Qualify for up to 50% merit-based fee concessions.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 font-medium text-xs mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-200/70 border border-slate-300/80 p-3.5 rounded-xl text-slate-600 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-sky-600 flex-shrink-0" />
              <span>Frontend interactive form demo. Submissions show instant simulated success feedback.</span>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200/90">
              
              {submitted ? (
                <div className="text-center py-10 space-y-3 animate-fadeIn">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted Successfully!</h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto font-normal">
                    Thank you <strong className="text-slate-800 font-semibold">{formData.studentName}</strong>. Our academic counselor will contact you shortly on <strong>{formData.phone}</strong>.
                  </p>
                  <p className="text-[11px] text-slate-400">
                    (This is a frontend demonstration response)
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        studentName: '',
                        parentName: '',
                        phone: '',
                        studentClass: '',
                        courseInterested: '',
                        message: ''
                      });
                    }}
                    className="mt-3 bg-sky-600 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow hover:bg-sky-700 transition"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Admission Enquiry Form</h3>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full bg-slate-50 border ${
                          errors.studentName ? 'border-red-500' : 'border-slate-300'
                        } rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500`}
                      />
                      {errors.studentName && (
                        <p className="text-red-500 text-[11px] mt-1">{errors.studentName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Parent / Guardian Name
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Mr. Rajesh Sharma"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className={`w-full bg-slate-50 border ${
                          errors.phone ? 'border-red-500' : 'border-slate-300'
                        } rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Current Class *
                      </label>
                      <select
                        name="studentClass"
                        value={formData.studentClass}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border ${
                          errors.studentClass ? 'border-red-500' : 'border-slate-300'
                        } rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500`}
                      >
                        <option value="">Select Current Class</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                        <option value="12th Passout / Dropper">12th Passout / Dropper</option>
                      </select>
                      {errors.studentClass && (
                        <p className="text-red-500 text-[11px] mt-1">{errors.studentClass}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Course Interested In *
                    </label>
                    <select
                      name="courseInterested"
                      value={formData.courseInterested}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border ${
                        errors.courseInterested ? 'border-red-500' : 'border-slate-300'
                      } rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500`}
                    >
                      <option value="">Select Target Course</option>
                      {coursesData.map(c => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                    {errors.courseInterested && (
                      <p className="text-red-500 text-[11px] mt-1">{errors.courseInterested}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Additional Message / Query (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={2.5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ask about batch timings, fee structures, or demo class schedules..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-5 rounded-xl shadow-md transition duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    We respect your privacy. Your information will only be used for academic counseling.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AdmissionEnquiry;
