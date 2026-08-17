import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { galleryData } from '../data/mockData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Salon Interior', 'Hair Styling', 'Makeup', 'Facial/Spa', 'Nail Care', 'Beauty Setup'];

  const filteredGallery = activeTab === 'All'
    ? galleryData
    : galleryData.filter(g => g.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-rose-700 bg-rose-100/80 px-3.5 py-1 rounded-full border border-rose-200">
            Visual Showcase
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-stone-900">
            Studio Gallery
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Take a look inside our state-of-the-art studio environment, hair sessions, and aesthetic beauty transformations.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-stone-100 text-stone-600 hover:bg-rose-50 hover:text-rose-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-stone-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-rose-300 font-semibold">{item.category}</span>
                  <h4 className="font-serif-title text-lg font-bold leading-tight">{item.title}</h4>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-rose-600 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[75vh] mx-auto"
              />
            </div>

            <div className="p-6 bg-stone-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-rose-300 uppercase tracking-widest font-semibold">{selectedImage.category}</span>
                <h3 className="font-serif-title text-2xl font-bold mt-0.5">{selectedImage.title}</h3>
              </div>
              <span className="text-xs text-stone-400 italic">Demo Gallery Preview</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
