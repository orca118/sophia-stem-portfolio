import React from 'react';
import { NavTab } from '../components/Navbar';
import { ArrowRight, Microscope, ChevronRight } from 'lucide-react';
import { profileData } from '../data/profileData';

interface HomePageProps {
  onNavigate: (tab: NavTab) => void;
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Typographic Hierarchy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
                <span>Richard Montgomery High School</span>
                <span aria-hidden="true">·</span>
                <span>Class of 2028</span>
                <span aria-hidden="true">·</span>
                <span>Rockville, MD</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 text-balance leading-[1.08]">
                {profileData.headline}
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-teal-900/90 leading-snug">
                {profileData.subheadline}
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {profileData.introduction}
              </p>

              {/* Two Prominent Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('cad')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 active:bg-teal-800 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Explore My Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('research')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-xl transition-colors cursor-pointer"
                >
                  <Microscope className="w-4 h-4 text-teal-700" />
                  <span>View My Research</span>
                </button>
              </div>

              {/* Meta details list */}
              <div className="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 border-t border-slate-100">
                <span>FTC Team #21587 Captain</span>
                <span aria-hidden="true">·</span>
                <span>2 Published Papers</span>
                <span aria-hidden="true">·</span>
                <span>Comet 19P/Borrelly Research</span>
                <span aria-hidden="true">·</span>
                <span>100+ Hours SAT Tutoring</span>
              </div>
            </div>

            {/* Right Column: Sophia's Photo Container */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src="/images/sophia_decode.JPG"
                  alt="Sophia Wang"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE FEATURED SECTIONS (Orca Robotics, Scientific Research, CAD Designs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Featured Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Orca Robotics */}
            <div
              onClick={() => onNavigate('robotics')}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xl hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                  <img
                    src="/images/O1.JPG"
                    alt="Orca Robotics FTC Team #21587 Robot"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-xs font-mono px-2.5 py-1 rounded-md border border-slate-700">
                    FTC Team #21587
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-teal-700 transition-colors">
                    Orca Robotics
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Founded in 2022. Designing, building, and programming competitive robots and inspiring younger students in STEM.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-1.5 text-xs font-semibold text-teal-800 group-hover:translate-x-1 transition-transform">
                <span>View Team &amp; Robot Photos</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2: Scientific Research */}
            <div
              onClick={() => onNavigate('research')}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xl hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 bg-slate-950 overflow-hidden p-2 flex items-center justify-center">
                  <img
                    src="/images/research/alzheimers_paper_page1.svg"
                    alt="Scientific Research Paper Preview"
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-xs font-mono px-2.5 py-1 rounded-md border border-slate-700">
                    Published Studies
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-teal-700 transition-colors">
                    Scientific Research
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Published research in Alzheimer's disease transcriptomics, breast cancer survival analysis, and 3D modeling of Comet 19P/Borrelly.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-1.5 text-xs font-semibold text-teal-800 group-hover:translate-x-1 transition-transform">
                <span>View 3 Research Projects</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3: CAD Designs */}
            <div
              onClick={() => onNavigate('cad')}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xl hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 bg-slate-950 overflow-hidden p-2 flex items-center justify-center">
                  <img
                    src="/images/CAD1.png"
                    alt="CAD Design Gallery"
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-xs font-mono px-2.5 py-1 rounded-md border border-slate-700">
                    12 CAD Models
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-teal-700 transition-colors">
                    CAD Designs
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gallery of 12 mechanical models and assemblies with continuous horizontal scrolling and responsive grid views.
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-1.5 text-xs font-semibold text-teal-800 group-hover:translate-x-1 transition-transform">
                <span>Explore CAD Gallery</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
