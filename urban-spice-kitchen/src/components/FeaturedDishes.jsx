import React from 'react';
import { ShoppingBag, Sparkles, Utensils } from 'lucide-react';
import { featuredDishes } from '../data/restaurantData';

const FeaturedDishes = () => {
  return (
    <section id="featured" className="py-20 bg-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-stone-800 border border-amber-500/30 text-amber-400 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Chef's Culinary Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-white tracking-tight">
            Our Signature <span className="text-amber-400">Featured Dishes</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-normal leading-relaxed">
            Hand-picked customer favorites prepared fresh daily using artisanal technique and finest ingredients.
          </p>
        </div>

        {/* Dish Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Food Image */}
                <div className="relative h-56 overflow-hidden bg-stone-900">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-amber-400 border border-stone-800">
                    {dish.price}
                  </div>
                  {dish.isVeg && (
                    <div className="absolute top-3 left-3 bg-emerald-950/90 border border-emerald-500/50 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      Veg
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <span className="text-[11px] font-medium text-amber-500/90 uppercase tracking-wider">
                    {dish.category}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif-title group-hover:text-amber-400 transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed font-normal">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href="#reservation"
                  className="w-full bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-stone-300 font-semibold py-2.5 rounded-xl text-xs border border-stone-800 hover:border-amber-500 transition-all duration-300 flex items-center justify-center gap-1.5 shadow"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Order / Enquire</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-stone-500 mt-8">
          * Note: Prices listed are sample demonstration prices.
        </p>

      </div>
    </section>
  );
};

export default FeaturedDishes;
