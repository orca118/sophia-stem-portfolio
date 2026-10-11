import React from 'react';
import { profileData } from '../data/profileData';
import { GraduationCap, MapPin, Mail, Download, ArrowUpRight, Award, CheckCircle } from 'lucide-react';

interface AboutMePageProps {
  onOpenResume: () => void;
}

export const AboutMePage: React.FC<AboutMePageProps> = ({ onOpenResume }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 text-center sm:text-left">
        <span className="text-xs font-mono text-teal-700">Richard Montgomery High School · Class of 2028</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight mt-1">
          About Sophia
        </h1>
      </div>

      {/* Main Split: Photo + Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Profile Photo & Quick Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="aspect-square w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
            <img
              src={profileData.photo}
              alt="Sophia, Richard Montgomery High School student"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs text-slate-700">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900">{profileData.school}</div>
                <div className="text-slate-600">Junior (11th Grade) · Rockville, Maryland</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900">Location</div>
                <div className="text-slate-600">Rockville, Maryland (Montgomery County)</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900">Contact</div>
                <a href={`mailto:${profileData.contact.email}`} className="text-teal-700 hover:underline">
                  {profileData.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={onOpenResume}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Full Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="/papers/sophia_stem_resume.pdf"
                download="Sophia_STEM_Resume.pdf"
                className="w-full py-2 px-4 rounded-xl text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors text-center flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Prose & Honors */}
        <div className="lg:col-span-7 space-y-8">
          <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-4">
            {profileData.bioParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Honors & Selected Activities */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <h2 className="text-lg font-bold font-display text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-700" />
              <span>Honors, Research & Key Activities</span>
            </h2>

            <ul className="space-y-3">
              {profileData.honorsAndHighlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-700 bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/80"
                >
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
