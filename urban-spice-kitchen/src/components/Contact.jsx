import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(restaurantInfo.whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-stone-900 border border-amber-500/30 text-amber-400 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
            Find Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-white tracking-tight">
            Contact & <span className="text-amber-400">Location</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-normal">
            Visit our restaurant or reach out for inquiries, private events, and party bookings.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            <div className="bg-stone-900/60 border border-stone-800 p-6 rounded-2xl space-y-5 shadow-sm">
              
              <h3 className="text-lg font-bold text-white font-serif-title border-b border-stone-800 pb-2.5">
                Restaurant Info
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm">Location Address</h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-0.5 leading-relaxed font-normal">{restaurantInfo.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm">Phone Contacts</h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-0.5 font-normal">{restaurantInfo.phone}</p>
                  <p className="text-stone-500 text-xs font-normal">{restaurantInfo.altPhone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm">Email Inquiry</h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-0.5 font-normal">{restaurantInfo.email}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm">Operating Hours</h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-0.5 font-normal">{restaurantInfo.openingHours}</p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Call to Action card */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-5 rounded-2xl shadow flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm font-serif-title">WhatsApp Table Assistance</h4>
                <p className="text-xs text-emerald-100 mt-0.5 font-normal">Chat directly for table availability or custom catering.</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-3.5 py-2 rounded-xl text-xs shadow flex items-center gap-1.5 whitespace-nowrap transition"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* Google Maps Embed Area */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-sm flex flex-col relative min-h-[360px]">
            <div className="bg-stone-950 text-white px-5 py-3 flex justify-between items-center text-xs font-medium border-b border-stone-800">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Urban Spice Kitchen Indiranagar Location Map (Demo)
              </span>
              <span className="text-stone-500">Google Map Embed</span>
            </div>

            <iframe
              title="Urban Spice Kitchen Demo Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.986874492723!2d77.6411544!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a70e7e174b%3A0x6b4f738ef9e141a0!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="flex-1 w-full min-h-[320px] border-0 filter grayscale opacity-90 contrast-125"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
