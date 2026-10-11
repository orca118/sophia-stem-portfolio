import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface RoboticsPhoto {
  title: string;
  category: string;
  src: string;
  fallbackSrc?: string;
}

const roboticsPhotos: RoboticsPhoto[] = [
  {
    title: 'Team Competition Photograph',
    category: 'Competition & Alliance',
    src: '/images/robotics/team_competition.jpg',
    fallbackSrc: '/images/robotics/team_competition.svg',
  },
  {
    title: 'Competition Robot',
    category: 'FTC Robot Chassis & Mechanism',
    src: '/images/robotics/ftc_robot.jpg',
  },
  {
    title: 'Competition Action Photograph',
    category: 'Match Play & Scoring',
    src: '/images/robotics/competition_action.jpg',
    fallbackSrc: '/images/robotics/competition_action.svg',
  },
  {
    title: 'Team Activity Photograph',
    category: 'Engineering & Collaboration',
    src: '/images/robotics/team_activity.jpg',
    fallbackSrc: '/images/robotics/team_activity.svg',
  },
];

export const OrcaRoboticsPage: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-700">
          <span>FIRST Tech Challenge</span>
          <span aria-hidden="true">·</span>
          <span>Team #21587</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight mt-1">
          Orca Robotics
        </h1>
      </div>

      {/* Main Section: Text on Left + 4-Photo Collage on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Text */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold text-teal-800 uppercase tracking-wider">
              FTC Team #21587
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 leading-tight">
              More Than Just Robots
            </h2>
          </div>

          <div className="prose prose-slate text-slate-700 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              Founded in 2022, Orca Robotics FTC Team #21587 brings together students passionate about engineering, programming, CAD, robotics, problem-solving, teamwork, and community service.
            </p>
            <p>
              As the team's founder and captain, I have enjoyed working with teammates to design and build competitive robots, solve engineering challenges, and share our interest in STEM with younger students.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://orcarobotics.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 w-full sm:w-auto"
            >
              Visit Orca Robotics Website ↗
            </a>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 border-t border-slate-100">
            <span>Founded in 2022</span>
            <span aria-hidden="true">·</span>
            <span>Rockville, Maryland</span>
            <span aria-hidden="true">·</span>
            <span>FTC Team #21587</span>
          </div>
        </div>

        {/* Right Column: 4-Photo Collage */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {roboticsPhotos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setActivePhotoIndex(index)}
                className="group relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    if (photo.fallbackSrc && e.currentTarget.src !== photo.fallbackSrc) {
                      e.currentTarget.src = photo.fallbackSrc;
                    }
                  }}
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Hover Gradient & Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="text-[11px] font-mono text-teal-300 uppercase tracking-wider">
                    {photo.category}
                  </span>
                  <div className="flex items-center justify-between mt-0.5">
                    <h3 className="text-sm font-bold font-display text-white">
                      {photo.title}
                    </h3>
                    <Maximize2 className="w-4 h-4 text-slate-300 group-hover:text-white shrink-0 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for Enlarge Photo */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden text-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-teal-400">
                  {roboticsPhotos[activePhotoIndex].category}
                </span>
                <h3 className="text-base font-bold font-display">
                  {roboticsPhotos[activePhotoIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full"
                aria-label="Close photo viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-16/10 bg-slate-950 flex items-center justify-center p-4">
              <img
                src={roboticsPhotos[activePhotoIndex].src}
                alt={roboticsPhotos[activePhotoIndex].title}
                className="max-h-[70vh] w-full object-contain"
                onError={(e) => {
                  if (roboticsPhotos[activePhotoIndex].fallbackSrc) {
                    e.currentTarget.src = roboticsPhotos[activePhotoIndex].fallbackSrc;
                  }
                }}
                referrerPolicy="no-referrer"
              />

              <button
                onClick={() => setActivePhotoIndex((prev) => (prev! - 1 + roboticsPhotos.length) % roboticsPhotos.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full text-white"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActivePhotoIndex((prev) => (prev! + 1) % roboticsPhotos.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full text-white"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
