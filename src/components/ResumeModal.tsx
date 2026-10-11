import React, { useEffect } from 'react';
import { X, Download, Printer, GraduationCap, Award, Wrench, BookOpen, Heart, Code2 } from 'lucide-react';
import { profileData } from '../data/profileData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative flex flex-col w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <h2 id="resume-modal-title" className="text-base font-bold font-display">
              Sophia — STEM Academic &amp; Engineering Resume
            </h2>
            <span className="text-xs text-slate-400 border-l border-slate-700 pl-3 hidden sm:inline">
              11th Grade · Richard Montgomery High School
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <a
              href="/papers/sophia_stem_resume.pdf"
              download="Sophia_STEM_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1 cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-50 space-y-8 print:p-0 print:bg-white">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-xs border border-slate-200 space-y-6">
            {/* Candidate Header */}
            <div className="border-b border-slate-200 pb-5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
                  Sophia Wang
                </h1>
                <p className="text-sm font-semibold text-teal-800 mt-1">
                  Student Researcher | Robotics Team Captain | CAD Designer
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Richard Montgomery High School · Rockville, MD · Class of 2028
                </p>
              </div>
              <div className="text-xs text-slate-500 text-right space-y-1">
                <div>Rockville, Maryland</div>
                <div>{profileData.contact.email}</div>
              </div>
            </div>

            {/* Education */}
            <section className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
                <GraduationCap className="w-4 h-4 text-teal-700" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Education</h3>
              </div>
              <div className="text-xs space-y-1">
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>Richard Montgomery High School</span>
                  <span>Rockville, MD (Expected June 2028)</span>
                </div>
                <p className="text-slate-600">
                  Current Grade: 11th Grade (Junior)
                </p>
              </div>
            </section>

            {/* Honors & Awards */}
            <section className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
                <Award className="w-4 h-4 text-teal-700" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Honors &amp; Recognitions</h3>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1.5">
                <li><strong className="text-slate-900">First Place</strong>, UMBC Invitational CAD competition</li>
                <li><strong className="text-slate-900">NASA Earth System Science Project Award</strong></li>
                <li><strong className="text-slate-900">National Capital Astronomers club invited speaker</strong></li>
                <li><strong className="text-slate-900">SAT Gold Tutor</strong> with more than 100 hours of peer and student tutoring</li>
              </ul>
            </section>

            {/* Robotics Leadership */}
            <section className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
                <Wrench className="w-4 h-4 text-teal-700" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Robotics &amp; Engineering Leadership</h3>
              </div>
              <div className="text-xs space-y-2">
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>Founder &amp; Team Captain — Orca Robotics (FTC #21587)</span>
                  <span className="font-mono text-slate-500">2022 – Present</span>
                </div>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Founded Orca Robotics FTC Team #21587 in 2022; lead robot mechanical design, CAD modeling, and match drive team.</li>
                  <li>Design 3D assemblies for chassis drivetrains, active roller intakes, and lift mechanisms in CAD.</li>
                  <li>Coordinate team STEM demonstrations and workshops for younger students in the local community.</li>
                </ul>
              </div>
            </section>

            {/* Scientific Research Publications */}
            <section className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
                <BookOpen className="w-4 h-4 text-teal-700" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Scientific Research &amp; Publications</h3>
              </div>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-semibold text-slate-900">
                    <span>Identifying Potential Drug Candidates for Alzheimer's Disease Using Transcriptomic Analysis</span>
                    <span className="font-mono text-teal-700">2026</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">Sophia Wang · National High School Journal of Science (NHSJS)</p>
                  <p className="text-slate-600 mt-0.5">
                    Analyzed public gene expression datasets to explore altered biological pathways in Alzheimer's disease and applied computational drug-repurposing methods to identify candidate compounds for further investigation.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between font-semibold text-slate-900">
                    <span>Integrated Expression, Mutation, and Survival Analysis of 17 Key Genes in Breast Cancer Using TCGA-BRCA Data</span>
                    <span className="font-mono text-teal-700">August 2026</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">Sophia Wang, Christopher Wang, Haiyan Lei · Journal of Emerging Investigators (JEI)</p>
                  <p className="text-slate-600 mt-0.5">
                    Investigated gene expression, mutation patterns, and patient survival associations for 17 breast cancer-related genes using TCGA-BRCA data.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between font-semibold text-slate-900">
                    <span>Modeling the Far Side of Comet 19P/Borrelly Using Blender: An Exploration of Potential Surface Geometries</span>
                    <span className="font-mono text-slate-500">Research Project</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">Sophia Wang, Daisy Hu, Christopher Wang, Xiao-Duan Zou · Mentor: Dr. Xiao-Duan Zou (Planetary Science Institute)</p>
                  <p className="text-slate-600 mt-0.5">
                    Developed three hypothetical 3D models of the unobserved far side of Comet 19P/Borrelly in Blender, exploring possible surface geometries based on the available near-side shape model.
                  </p>
                </div>
              </div>
            </section>

            {/* Tutoring & Service */}
            <section className="space-y-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
                <Heart className="w-4 h-4 text-teal-700" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Tutoring &amp; Community Service</h3>
              </div>
              <div className="text-xs text-slate-600 space-y-1">
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>SAT Gold Tutor</span>
                  <span className="font-mono text-slate-500">100+ Hours</span>
                </div>
                <p>
                  Provided over 100 hours of peer tutoring in high school algebra, geometry, and problem solving, guiding students through diagnostic test review and conceptual mastery.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs text-slate-600">
          <span>Student Resume of Sophia Wang · Richard Montgomery High School</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
