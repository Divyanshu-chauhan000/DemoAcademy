import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { businessDetails } from '../data/mockData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-rose-700 bg-rose-100/80 px-3.5 py-1 rounded-full border border-rose-200">
            Get In Touch
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900">
            Visit &amp; Contact Us
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Have questions about our services or custom bridal packages? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-14 items-stretch">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="w-12 h-12 rounded-xl bg-rose-700 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-title text-lg font-bold text-stone-900">Studio Location</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">{businessDetails.address}</p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="w-12 h-12 rounded-xl bg-rose-700 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-title text-lg font-bold text-stone-900">Phone &amp; WhatsApp</h4>
                  <p className="text-xs text-stone-600 mt-1">{businessDetails.phone}</p>
                  <a
                    href={`https://wa.me/${businessDetails.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold mt-2 hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp Demo</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="w-12 h-12 rounded-xl bg-rose-700 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-title text-lg font-bold text-stone-900">Email Inquiries</h4>
                  <p className="text-xs text-stone-600 mt-1">{businessDetails.email}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-200/70">
                <div className="w-12 h-12 rounded-xl bg-rose-700 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-title text-lg font-bold text-stone-900">Operating Hours</h4>
                  <p className="text-xs text-stone-600 mt-1">{businessDetails.hours.weekdays}</p>
                  <p className="text-xs text-stone-600">{businessDetails.hours.weekend}</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <a
              href={`https://wa.me/${businessDetails.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3.5 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect via WhatsApp</span>
            </a>

          </div>

          {/* Google Maps Placeholder */}
          <div className="lg:col-span-7 bg-stone-100 rounded-3xl overflow-hidden border border-stone-200 shadow-lg relative min-h-[350px] flex flex-col items-center justify-center text-center p-8 group">
            
            {/* Styled Map Graphic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
            
            <div className="relative z-10 max-w-md space-y-4 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-stone-200">
              <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mx-auto">
                <MapPin className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif-title text-xl font-bold text-stone-900">Interactive Location Map</h3>
                <p className="text-xs text-stone-600">{businessDetails.address}</p>
              </div>

              <p className="text-[11px] text-stone-400 font-light">
                (Google Maps Embed Placeholder for Client Concept Preview)
              </p>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs bg-stone-900 hover:bg-rose-700 text-white font-medium px-4 py-2 rounded-xl transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
