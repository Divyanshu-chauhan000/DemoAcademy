import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle2, Sparkles, User, Phone, Sparkle } from 'lucide-react';
import { servicesData, packagesData } from '../data/mockData';

const BookAppointment = ({ selectedPresetService, onResetPreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPresetService) {
      setFormData(prev => ({ ...prev, service: selectedPresetService }));
    }
  }, [selectedPresetService]);

  const validate = () => {
    let errs = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s\-()]{7,15}$/.test(formData.phone)) {
      errs.phone = 'Enter a valid phone number';
    }
    if (!formData.service) errs.service = 'Please select a service or package';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a date';
    if (!formData.preferredTime) errs.preferredTime = 'Please select a time slot';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const allServiceOptions = [
    ...servicesData.map(s => s.name),
    ...packagesData.map(p => `Package: ${p.name}`)
  ];

  return (
    <section id="book-appointment" className="py-20 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info & Expectations */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-rose-300 bg-rose-950/80 px-3.5 py-1 rounded-full border border-rose-800/50">
              Online Booking
            </span>

            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-white leading-tight">
              Reserve Your <br />
              <span className="italic font-accent text-rose-300 font-normal">Pampering Session</span>
            </h2>

            <p className="text-stone-300 text-sm leading-relaxed font-light">
              Book your preferred time slot in advance. Our team will review your selection and contact you via phone or WhatsApp to confirm your appointment.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60">
                <div className="w-10 h-10 rounded-full bg-rose-900/60 text-rose-300 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Instant Confirmation</h4>
                  <p className="text-xs text-stone-400">Quick response within 1 hour during business hours.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60">
                <div className="w-10 h-10 rounded-full bg-rose-900/60 text-rose-300 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Flexible Scheduling</h4>
                  <p className="text-xs text-stone-400">Slots available Mon - Sun from 9 AM to 8 PM.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-rose-950/40 border border-rose-800/30 rounded-2xl text-xs text-rose-200">
              <span className="font-semibold block mb-1">📢 Demo Note:</span>
              This appointment form is a frontend concept demonstration. No actual booking will be processed.
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-white text-stone-900 p-8 sm:p-10 rounded-3xl shadow-2xl border border-rose-100 relative">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6 animate-fade-in">
                <div className="w-20 h-20 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif-title text-3xl font-bold text-stone-900">
                    Appointment Requested!
                  </h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-stone-900">{formData.name}</strong>. We have received your demo appointment request for <strong className="text-rose-700">{formData.service}</strong> on <strong className="text-stone-900">{formData.preferredDate}</strong>.
                  </p>
                </div>

                <div className="bg-rose-50 p-4 rounded-2xl border border-rose-200 text-xs text-stone-700 max-w-md mx-auto">
                  <span className="font-semibold text-rose-800 block">Demo Success State Verified:</span>
                  Frontend validation passed. Next step in real deployment would send SMS/WhatsApp notification to client.
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      service: '',
                      preferredDate: '',
                      preferredTime: '',
                      message: ''
                    });
                    if (onResetPreset) onResetPreset();
                  }}
                  className="bg-stone-900 hover:bg-rose-700 text-white font-medium px-8 py-3 rounded-full text-xs transition-colors cursor-pointer"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <h3 className="font-serif-title text-2xl font-bold text-stone-900">
                    Appointment Details
                  </h3>
                  {formData.service && (
                    <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                      Selected: {formData.service}
                    </span>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jessica Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500 bg-rose-50/50' : 'border-stone-200 focus:border-rose-600'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500 bg-rose-50/50' : 'border-stone-200 focus:border-rose-600'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                </div>

                {/* Service Select */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Select Service or Package *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors bg-white ${
                      errors.service ? 'border-rose-500 bg-rose-50/50' : 'border-stone-200 focus:border-rose-600'
                    }`}
                  >
                    <option value="">-- Choose a Service or Package --</option>
                    {allServiceOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-xs text-rose-600 mt-1">{errors.service}</p>}
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.preferredDate ? 'border-rose-500 bg-rose-50/50' : 'border-stone-200 focus:border-rose-600'
                      }`}
                    />
                    {errors.preferredDate && <p className="text-xs text-rose-600 mt-1">{errors.preferredDate}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Preferred Time Slot *
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors bg-white ${
                        errors.preferredTime ? 'border-rose-500 bg-rose-50/50' : 'border-stone-200 focus:border-rose-600'
                      }`}
                    >
                      <option value="">-- Select Time --</option>
                      <option value=" Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                    {errors.preferredTime && <p className="text-xs text-rose-600 mt-1">{errors.preferredTime}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Special Notes / Request (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Specify skin sensitivity, hair length, or special bridal requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-rose-600 text-sm focus:outline-none transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-700 to-rose-800 hover:from-rose-600 hover:to-rose-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-rose-700/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-base"
                >
                  <Sparkles className="w-5 h-5 text-rose-200" />
                  <span>Book Appointment Now</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default BookAppointment;
