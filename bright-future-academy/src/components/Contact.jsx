import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { academyInfo } from '../data/mockData';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${academyInfo.whatsappNumber}?text=${encodeURIComponent(academyInfo.whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Reach Out To Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & <span className="text-sky-600">Location</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Visit our campus center or reach out via phone, email, or WhatsApp for quick assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Details Panel */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl space-y-6 shadow-sm">
              
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
                Academy Campus Info
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Campus Address</h4>
                  <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">{academyInfo.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Phone Contacts</h4>
                  <p className="text-slate-600 text-sm mt-0.5">{academyInfo.phone}</p>
                  <p className="text-slate-500 text-xs">{academyInfo.altPhone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Email Inquiry</h4>
                  <p className="text-slate-600 text-sm mt-0.5">{academyInfo.email}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Opening Hours</h4>
                  <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">{academyInfo.openingHours}</p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Call to Action card */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 rounded-3xl shadow-lg flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-base">Quick WhatsApp Inquiry</h4>
                <p className="text-xs text-emerald-100 mt-1">Chat directly with our counselor for instant replies.</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow flex items-center gap-1.5 whitespace-nowrap transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* Right Google Maps Embed Area */}
          <div className="lg:col-span-7 bg-slate-100 border border-slate-200 rounded-3xl overflow-hidden shadow-md flex flex-col relative min-h-[380px]">
            <div className="bg-slate-900 text-white px-6 py-3.5 flex justify-between items-center text-xs font-semibold">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                Bright Future Academy Main Campus Location Map (Demo)
              </span>
              <span className="text-slate-400">Interactive Map Preview</span>
            </div>

            <iframe
              title="Bright Future Academy Demo Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.882190825316!2d77.3695277!3d28.5856428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ff8e910701886e!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="flex-1 w-full min-h-[340px] border-0"
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
