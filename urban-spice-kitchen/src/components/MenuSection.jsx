import React, { useState } from 'react';
import { menuCategories, fullMenuItems } from '../data/restaurantData';
import { Utensils, Sparkles, Filter } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? fullMenuItems
    : fullMenuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-stone-900 border border-amber-500/30 text-amber-400 text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
            <Utensils className="w-3.5 h-3.5" />
            Culinary Selection
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-white tracking-tight">
            Explore Our <span className="text-amber-400">Delicious Menu</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-normal leading-relaxed">
            From wood-fired pizzas to authentic Indian specialties and hand-crafted desserts.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 font-bold'
                  : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-white border border-stone-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-stone-900/60 border border-stone-800/80 p-5 rounded-2xl flex justify-between gap-4 hover:border-amber-500/30 transition duration-300"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white font-serif-title">{item.name}</h3>
                  {item.isVeg ? (
                    <span className="w-3 h-3 rounded-full border border-emerald-500 bg-emerald-950 flex items-center justify-center p-0.5" title="Vegetarian">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    </span>
                  ) : (
                    <span className="w-3 h-3 rounded-full border border-rose-500 bg-rose-950 flex items-center justify-center p-0.5" title="Non-Vegetarian">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-400 font-normal leading-relaxed">{item.description}</p>
                <span className="text-[10px] text-amber-500/80 font-medium uppercase">{item.category}</span>
              </div>

              <div className="text-right">
                <span className="text-sm font-bold text-amber-400 block">{item.price}</span>
                <a
                  href="#reservation"
                  className="text-[11px] text-stone-400 hover:text-amber-400 underline mt-2 block"
                >
                  Order
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-500/50 px-6 py-3 rounded-xl text-sm font-semibold transition"
          >
            <span>View Full Menu & Table Booking</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;
