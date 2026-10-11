import React, { useEffect } from 'react';
import { CADDesignItem } from '../data/cadDesigns';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface CADLightboxProps {
  designs: CADDesignItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex: (index: number) => void;
}

export const CADLightbox: React.FC<CADLightboxProps> = ({
  designs,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
  onSelectIndex,
}) => {
  if (selectedIndex === null || !designs[selectedIndex]) return null;

  const current = designs[selectedIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Prevent body scrolling when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cad-lightbox-title"
    >
      <div className="relative flex flex-col w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        {/* Top Bar with Title and Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div>
            <span className="text-xs font-mono text-teal-400">
              CAD Design #{String(current.id).padStart(2, '0')} of {designs.length}
            </span>
            <h3 id="cad-lightbox-title" className="text-lg font-bold font-display text-white">
              {current.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Close CAD viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Large CAD Image Viewer */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center min-h-[350px] sm:min-h-[480px] p-4 sm:p-8 select-none">
          <img
            src={current.image}
            alt={current.title}
            className="max-h-[60vh] sm:max-h-[68vh] w-full object-contain drop-shadow-xl transition-transform duration-200"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Controls */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-800/90 text-slate-200 hover:text-white hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Previous CAD design"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-800/90 text-slate-200 hover:text-white hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Next CAD design"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 flex gap-2 overflow-x-auto justify-start sm:justify-center">
          {designs.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => onSelectIndex(idx)}
              className={`w-12 h-10 shrink-0 rounded-md overflow-hidden border transition-all ${
                idx === selectedIndex
                  ? 'border-teal-400 ring-2 ring-teal-400/30'
                  : 'border-slate-700 opacity-60 hover:opacity-100'
              }`}
              aria-label={`Select ${item.title}`}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-contain bg-slate-950" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
