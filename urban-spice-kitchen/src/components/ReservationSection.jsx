import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, CheckCircle2, AlertCircle, Utensils } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2 Guests',
    specialRequest: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) errs.date = 'Reservation date is required';
    return errs;
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
    <section id="reservation" className="py-20 bg-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-stone-950 border border-amber-500/30 text-amber-400 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5" />
              Table Reservations
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-white tracking-tight">
              Book Your Table At <span className="text-amber-400">Urban Spice</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base font-normal leading-relaxed">
              Plan your dining experience in advance to ensure comfortable seating and instant table readiness upon arrival.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { title: 'Instant Booking Confirmation', desc: 'Receive real-time reservation confirmation via SMS / WhatsApp.' },
                { title: 'Special Dietary Requests', desc: 'Vegetarian, vegan, and allergen-free custom meal preparation options.' },
                { title: 'Celebration Seating', desc: 'Special arrangements available for birthdays, anniversaries, and private dinners.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3.5 items-start bg-stone-950 p-4 rounded-xl border border-stone-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white font-serif-title">{item.title}</h4>
                    <p className="text-xs text-stone-400 mt-0.5 font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-stone-950 border border-stone-800 p-4 rounded-xl text-stone-400 text-xs flex items-center gap-3">
              <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Frontend interactive reservation demo with instant visual feedback.</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif-title text-white">Table Reserved Successfully!</h3>
                  <p className="text-stone-300 text-sm max-w-md mx-auto font-normal">
                    Thank you <strong className="text-amber-400">{formData.name}</strong>. We look forward to welcoming <strong className="text-white">{formData.guests}</strong> on <strong className="text-white">{formData.date} at {formData.time}</strong>.
                  </p>
                  <p className="text-xs text-stone-500">
                    (Simulated demo response for client showcase)
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        date: '',
                        time: '19:30',
                        guests: '2 Guests',
                        specialRequest: ''
                      });
                    }}
                    className="mt-4 bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-bold px-6 py-2.5 rounded-xl shadow transition"
                  >
                    Book Another Table
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold font-serif-title text-white mb-2">Reservation Form</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Vikram Sharma"
                        className={`w-full bg-stone-900 border ${
                          errors.name ? 'border-red-500' : 'border-stone-800'
                        } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-500`}
                      />
                      {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className={`w-full bg-stone-900 border ${
                          errors.phone ? 'border-red-500' : 'border-stone-800'
                        } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-500`}
                      />
                      {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full bg-stone-900 border ${
                          errors.date ? 'border-red-500' : 'border-stone-800'
                        } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-500`}
                      />
                      {errors.date && <p className="text-red-400 text-[11px] mt-1">{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Time Slot *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                      >
                        <option value="12:30">12:30 PM (Lunch)</option>
                        <option value="13:30">01:30 PM (Lunch)</option>
                        <option value="19:00">07:00 PM (Dinner)</option>
                        <option value="19:30">07:30 PM (Dinner)</option>
                        <option value="20:30">08:30 PM (Dinner)</option>
                        <option value="21:30">09:30 PM (Late Dinner)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">
                        Guests *
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                      >
                        <option value="1 Guest">1 Person</option>
                        <option value="2 Guests">2 People</option>
                        <option value="4 Guests">4 People</option>
                        <option value="6 Guests">6 People</option>
                        <option value="8+ Large Group">8+ Large Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Special Request / Seating Preference (Optional)
                    </label>
                    <textarea
                      name="specialRequest"
                      rows={2.5}
                      value={formData.specialRequest}
                      onChange={handleChange}
                      placeholder="e.g. Window seat preferred, celebrating birthday..."
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-amber-500/20 transition duration-300 text-sm"
                  >
                    {isSubmitting ? 'Processing Request...' : 'Request Reservation'}
                  </button>

                  <p className="text-[11px] text-stone-500 text-center">
                    For large parties over 10 guests, please contact us directly at {restaurantInfo.phone}.
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

export default ReservationSection;
