import React from 'react';
import { Sparkles, ShieldCheck, Heart, Award, CheckCircle } from 'lucide-react';
import { businessDetails } from '../data/mockData';

const About = ({ onBookClick }) => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000"
                alt="Glow & Grace Studio Interior"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Overlapping Accent Card */}
            <div className="absolute -bottom-8 -right-4 sm:right-6 z-20 bg-rose-900 text-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-rose-800 flex items-center justify-center text-amber-300">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-title text-lg font-bold">12+ Years</h4>
                  <p className="text-xs text-rose-200">Excellence in Beauty &amp; Spa</p>
                </div>
              </div>
            </div>

            {/* Background Backdrop Accent */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-rose-100/70 rounded-3xl -z-10 transform -rotate-1" />
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-rose-700 bg-rose-100/80 px-3.5 py-1 rounded-full border border-rose-200">
              About Glow &amp; Grace
            </span>

            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
              Beauty, Care &amp; <span className="italic font-accent text-rose-700 font-normal">Confidence</span>
            </h2>

            <p className="text-stone-600 text-base leading-relaxed font-light">
              At <strong className="font-semibold text-stone-800">{businessDetails.name}</strong>, we believe true beauty begins with confidence and care. Our studio offers a serene sanctuary where modern aesthetics meet traditional hospitality and premium pampering.
            </p>

            <p className="text-stone-600 text-sm leading-relaxed font-light">
              From precision hair design and organic skin renewal treatments to couture bridal transformations, our master artists and estheticians use only hospital-grade sanitized tools and top-tier luxury cosmetics.
            </p>

            {/* Feature Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-800">100% Organic Formulations</h4>
                  <p className="text-xs text-stone-500">Cruelty-free &amp; dermatologist tested.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-800">Master Certified Team</h4>
                  <p className="text-xs text-stone-500">Internationally trained stylists.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-800">Strict Hygiene Standards</h4>
                  <p className="text-xs text-stone-500">Single-use kits &amp; UV sterilization.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-800">Tailored Consultations</h4>
                  <p className="text-xs text-stone-500">Customized care for your unique style.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onBookClick}
                className="bg-stone-900 hover:bg-rose-700 text-white font-medium px-7 py-3.5 rounded-full text-sm transition-all duration-300 shadow-md cursor-pointer"
              >
                Experience Glow &amp; Grace
              </button>

              <span className="text-xs text-stone-400 font-medium italic">
                *Fictional concept for showcase purposes
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
