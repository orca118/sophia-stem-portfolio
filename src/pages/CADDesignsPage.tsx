import React, { useState } from 'react';
import { cadDesignsData } from '../data/cadDesigns';
import { CADLightbox } from '../components/CADLightbox';
import { Maximize2 } from 'lucide-react';

export const CADDesignsPage: React.FC = () => {
  const [selectedCADIndex, setSelectedCADIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedCADIndex(index);
  };

  const handleNext = () => {
    if (selectedCADIndex === null) return;
    setSelectedCADIndex((prev) => (prev! + 1) % cadDesignsData.length);
  };

  const handlePrev = () => {
    if (selectedCADIndex === null) return;
    setSelectedCADIndex((prev) => (prev! - 1 + cadDesignsData.length) % cadDesignsData.length);
  };

  // Duplicate the 12 items for seamless infinite horizontal scrolling track
  const duplicatedCarouselItems = [...cadDesignsData, ...cadDesignsData];

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
      {/* 1. Header Banner */}
      <div className="space-y-3 border-b border-slate-200 pb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
          CAD Design Gallery
        </h1>
        <p className="text-lg sm:text-xl font-medium text-teal-800/90 max-w-3xl">
          A collection of my mechanical designs and robotics engineering projects.
        </p>
      </div>

      {/* 2. AUTOMATIC CONTINUOUS SCROLLING GALLERY (12 Models) */}
      <section className="space-y-4">
        <div className="cad-carousel-container rounded-2xl bg-slate-950 p-4 sm:p-6 border border-slate-800 shadow-inner overflow-hidden select-none">
          <div className="cad-infinite-track flex gap-4 sm:gap-6">
            {duplicatedCarouselItems.map((item, index) => {
              const originalIndex = item.id - 1;
              return (
                <div
                  key={`${item.id}-${index}`}
                  onClick={() => handleOpenLightbox(originalIndex)}
                  className="w-[260px] sm:w-[320px] lg:w-[360px] shrink-0 bg-slate-900 border border-slate-800 hover:border-teal-500/80 rounded-xl overflow-hidden cursor-pointer group transition-all duration-200 hover:shadow-xl flex flex-col"
                >
                  {/* Preserving aspect ratio with object-contain */}
                  <div className="relative aspect-4/3 bg-slate-950 p-3 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5 p-1.5 bg-slate-900/80 rounded text-slate-400 group-hover:text-white transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Short Title Only */}
                  <div className="p-3.5 bg-slate-900/90 flex items-center justify-between border-t border-slate-800/80">
                    <h3 className="text-sm font-semibold font-display text-white truncate group-hover:text-teal-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-teal-400 shrink-0 ml-2">
                      #{String(item.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-slate-500 text-center">
          Hover to pause scrolling. Click any design to view full resolution. Swipe left or right on mobile devices.
        </p>
      </section>

      {/* 3. CLEAN RESPONSIVE GRID OF ALL 12 DESIGNS */}
      <section className="space-y-6 pt-6 border-t border-slate-200">
        <div>
          <h2 className="text-2xl font-bold font-display text-slate-900">
            All 12 Mechanical Designs
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Browse each individual design and mechanism.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cadDesignsData.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              {/* Image container using object-contain to retain full geometry */}
              <div className="relative aspect-4/3 bg-slate-950 p-3 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-xs text-teal-300 text-[10px] font-mono px-2 py-0.5 rounded border border-slate-800">
                  #{String(item.id).padStart(2, '0')}
                </div>
              </div>

              {/* Short title */}
              <div className="p-4 flex items-center justify-between border-t border-slate-100 bg-white">
                <h3 className="text-sm font-semibold font-display text-slate-900 group-hover:text-teal-700 transition-colors truncate">
                  {item.title}
                </h3>
                <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <CADLightbox
        designs={cadDesignsData}
        selectedIndex={selectedCADIndex}
        onClose={() => setSelectedCADIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectIndex={(idx) => setSelectedCADIndex(idx)}
      />
    </div>
  );
};
