import React, { useState } from 'react';
import { researchProjectsData, ResearchProject } from '../data/researchProjects';
import { ExternalLink, FileText, Download, Maximize2, X, Eye } from 'lucide-react';

export const ScientificResearchPage: React.FC = () => {
  const [enlargedProject, setEnlargedProject] = useState<ResearchProject | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-6 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
          Scientific Research
        </h1>
        <p className="text-lg sm:text-xl font-medium text-teal-800/90 max-w-3xl mt-2">
          Exploring biological datasets, genomic alterations, and planetary geometries through computational analysis.
        </p>
      </div>

      {/* 3 Research Project Cards: 1 Per Row */}
      <div className="space-y-8">
        {researchProjectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col lg:flex-row items-stretch"
          >
            {/* Left Column: Large Document or Poster Preview */}
            <div
              onClick={() => setEnlargedProject(project)}
              className="lg:w-5/12 bg-slate-950 p-4 sm:p-6 flex items-center justify-center relative group cursor-pointer select-none"
            >
              <div className="relative w-full max-h-[380px] flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={project.previewImage}
                  alt={`${project.title} Preview`}
                  className="max-h-[350px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-semibold shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to Enlarge {project.isPoster ? 'Poster' : 'Paper'}</span>
                </span>
              </div>
            </div>

            {/* Right Column: Research Information & Actions */}
            <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Publication or Mentor Metadata */}
                <div className="space-y-1">
                  {project.publication && (
                    <div className="text-xs font-mono font-semibold text-teal-700">
                      {project.publication}
                    </div>
                  )}
                  {project.mentor && (
                    <div className="text-xs font-mono font-semibold text-teal-800">
                      Research Mentor: {project.mentor}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-snug">
                  {project.title}
                </h2>

                {/* Authors */}
                <div className="text-xs font-medium text-slate-600">
                  <span className="font-semibold text-slate-700">Authors:</span> {project.authors}
                </div>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Buttons Row */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                {project.publicationUrl && (
                  <a
                    href={project.publicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 active:bg-teal-800 rounded-lg transition-colors shadow-xs"
                  >
                    <span>View Publication</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.pdfUrl && (
                  <a
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-600" />
                    <span>{project.isPoster ? 'View Full Poster' : 'View Full Paper'}</span>
                  </a>
                )}

                {project.isPoster && (
                  <button
                    onClick={() => setEnlargedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-teal-800 hover:text-teal-900 hover:bg-teal-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Enlarge Poster</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enlarged Lightbox Modal for Poster or Paper Preview */}
      {enlargedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative flex flex-col w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden text-slate-100 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
              <div className="pr-6">
                <span className="text-xs font-mono text-teal-400">
                  {enlargedProject.isPoster ? 'Research Poster Viewer' : 'Paper Preview'}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-white truncate max-w-xl">
                  {enlargedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setEnlargedProject(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
                aria-label="Close research preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex-1 bg-slate-950 flex items-center justify-center p-4 overflow-auto min-h-[400px]">
              <img
                src={enlargedProject.previewImage}
                alt={enlargedProject.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 bg-slate-900 border-t border-slate-800 text-xs text-slate-400">
              <span>{enlargedProject.authors}</span>
              <div className="flex items-center gap-3">
                {enlargedProject.publicationUrl && (
                  <a
                    href={enlargedProject.publicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline flex items-center gap-1"
                  >
                    <span>Official Article</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {enlargedProject.pdfUrl && (
                  <a
                    href={enlargedProject.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-teal-700 hover:bg-teal-600 text-white font-medium transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>View / Download PDF</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
