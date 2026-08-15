import React from 'react';
import { UtensilsCrossed, ChefHat, Sparkles, HeartHandshake, Star, Quote } from 'lucide-react';
import { whyChooseUsFeatures, customerReviews } from '../data/restaurantData';

const iconMap = {
  UtensilsCrossed: UtensilsCrossed,
  ChefHat: ChefHat,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake
};

const WhyChooseUsAndReviews = () => {
  return (
    <>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-stone-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 bg-stone-900 border border-amber-500/30 text-amber-400 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
              Our Core Promises
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-white tracking-tight">
              Why Dining At <span className="text-amber-400">Urban Spice Is Special</span>
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-normal">
              We take pride in delivering culinary excellence and thoughtful hospitality in every detail.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsFeatures.map((feat) => {
              const IconComp = iconMap[feat.icon] || UtensilsCrossed;
              return (
                <div
                  key={feat.id}
                  className="bg-stone-900/60 border border-stone-800 p-6 rounded-2xl hover:border-amber-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif-title mb-2 group-hover:text-amber-400 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-20 bg-stone-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 bg-stone-950 border border-amber-500/30 text-amber-400 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
              Guest Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-white tracking-tight">
              Customer <span className="text-amber-400">Reviews</span>
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-normal">
              Read sample reviews highlighting our food quality and dining atmosphere.
            </p>
            <span className="inline-block bg-stone-950 border border-stone-800 text-stone-400 text-xs px-3 py-0.5 rounded">
              Demo Customer Reviews (Sample Copy)
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {customerReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-stone-950 border border-stone-800 p-6 rounded-2xl flex flex-col justify-between hover:border-amber-500/30 transition shadow-lg"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-amber-500/30" />
                  </div>

                  <p className="text-stone-300 text-xs sm:text-sm italic font-normal leading-relaxed mb-6">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white font-serif-title">{rev.name}</h4>
                    <span className="text-[11px] text-amber-400 font-medium">{rev.visitType}</span>
                  </div>
                  <span className="text-[10px] text-stone-500 bg-stone-900 px-2 py-0.5 rounded font-mono">DEMO</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyChooseUsAndReviews;
