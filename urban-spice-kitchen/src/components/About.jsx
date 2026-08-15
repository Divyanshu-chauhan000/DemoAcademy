import React from 'react';
import { ChefHat, Heart, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
                alt="Urban Spice Kitchen Chef preparing fine dish"
                className="rounded-3xl shadow-2xl w-full h-[420px] object-cover border border-stone-800"
              />
              
              <div className="absolute -bottom-6 -right-4 bg-stone-950/95 backdrop-blur-md p-5 rounded-2xl border border-stone-800 shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <ChefHat className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-serif-title">Executive Chefs</h4>
                    <p className="text-xs text-stone-400 font-normal">15+ Years Culinary Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Story Content */}
          <div className="lg:col-span-6 space-y-6 text-stone-300">
            <div className="inline-flex items-center gap-2 bg-stone-950 border border-amber-500/30 text-amber-400 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              Our Culinary Heritage
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight leading-tight">
              Made With Passion, <br />
              <span className="text-amber-400">Served With Heart</span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed font-normal text-stone-300">
              At Urban Spice Kitchen, we believe dining is more than just a meal—it is a celebration of flavor, aroma, and human connection. Founded with a vision to marry traditional cooking techniques with contemporary presentation, every dish on our menu tells a story.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed text-stone-400 font-normal">
              We source our vegetables from local organic growers and import hand-picked spices to maintain absolute authenticity. Whether you are joining us for a cozy candlelight dinner, a family weekend brunch, or a corporate gathering, our warm atmosphere welcomes you like home.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
                <h4 className="text-amber-400 font-bold text-lg font-serif-title">100% Organic</h4>
                <p className="text-xs text-stone-400 font-normal mt-0.5">Farm fresh produce daily</p>
              </div>

              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
                <h4 className="text-amber-400 font-bold text-lg font-serif-title">Artisanal Spices</h4>
                <p className="text-xs text-stone-400 font-normal mt-0.5">Custom ground aromatics</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#reservation"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/20 text-sm transition"
              >
                <span>Book Your Dining Experience</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
