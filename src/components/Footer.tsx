import React from 'react';
import { NavTab, navItems } from './Navbar';
import { ArrowUp, Mail, MapPin, GraduationCap } from 'lucide-react';
import { profileData } from '../data/profileData';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Bio / Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold font-display tracking-tight text-white">
                Sophia
              </span>
              <span className="text-xs text-slate-400 border-l border-slate-700 pl-2">
                STEM &amp; Robotics Portfolio
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              11th-grade student at Richard Montgomery High School in Rockville, Maryland.
              Robotics team founder and captain, computational biology researcher, and CAD designer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Richard Montgomery High School · Class of 2028</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Rockville, Maryland</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onSelectTab(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-teal-300 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Research & Robotics Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Portfolio Areas
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Orca Robotics — FTC Team #21587</li>
              <li>Alzheimer's Transcriptomics Research (NHSJS)</li>
              <li>Breast Cancer 17-Gene Analysis (JEI)</li>
              <li>Comet 19P/Borrelly 3D Modeling (Dr. Xiao-Duan Zou)</li>
              <li>CAD Engineering Design Gallery</li>
              <li>SAT Gold Tutor (100+ Hours)</li>
            </ul>
            <div className="pt-1">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profileData.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>© {new Date().getFullYear()} Sophia. All rights reserved.</span>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
