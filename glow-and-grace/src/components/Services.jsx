import React, { useState } from 'react';
import { 
  Scissors, Sparkles, Flower2, Hand, Crown, Heart, Smile, Sun, 
  ArrowRight, Check, Calendar 
} from 'lucide-react';
import { servicesData } from '../data/mockData';

const iconMap = {
  Scissors: Scissors,
  Sparkles: Sparkles,
  Flower2: Flower2,
  Hand: Hand,
  Crown: Crown,
  Heart: Heart,
  Smile: Smile,
  Sun: Sun,
};

const Services = ({ onBookService }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Hair', 'Skincare', 'Makeup', 'Nails', 'Wellness', 'Body Care'];

  const filteredServices = activeCategory === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="services" className="py-20 bg-rose-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-rose-700 bg-rose-100/80 px-3.5 py-1 rounded-full border border-rose-200">
            Our Luxury Services
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900">
            Pampering &amp; Beauty Care
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Tailored beauty treatments designed to enhance your natural grace and rejuvenate your senses.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-rose-700 text-white shadow-md shadow-rose-700/20'
                  : 'bg-white text-stone-700 border border-stone-200 hover:border-rose-300 hover:bg-rose-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Image & Icon Header */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-medium px-2.5 py-1 rounded-md shadow-sm">
                    {service.category}
                  </span>

                  {/* Icon badge */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-rose-700 text-white flex items-center justify-center shadow-md">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif-title text-xl font-bold text-stone-900 group-hover:text-rose-700 transition-colors">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Service Feature Highlights */}
                    <ul className="space-y-1 pt-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-500">
                          <Check className="w-3 h-3 text-rose-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer & Price */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-medium">Starting from</span>
                      <span className="text-lg font-bold text-stone-900">
                        {service.price} <span className="text-[10px] font-normal text-stone-400">(demo)</span>
                      </span>
                    </div>

                    <button
                      onClick={() => onBookService(service.name)}
                      className="bg-stone-900 hover:bg-rose-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Now</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
