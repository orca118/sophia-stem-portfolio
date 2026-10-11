import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { OrcaRoboticsPage } from './pages/OrcaRoboticsPage';
import { ScientificResearchPage } from './pages/ScientificResearchPage';
import { CADDesignsPage } from './pages/CADDesignsPage';
import { AboutMePage } from './pages/AboutMePage';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Sync with URL hash for shareable links & browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'robotics', 'research', 'cad', 'about'].includes(hash)) {
        setActiveTab(hash as NavTab);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-teal-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={handleSelectTab}
            onOpenResume={() => setResumeModalOpen(true)}
          />
        )}
        {activeTab === 'robotics' && <OrcaRoboticsPage />}
        {activeTab === 'research' && <ScientificResearchPage />}
        {activeTab === 'cad' && <CADDesignsPage />}
        {activeTab === 'about' && (
          <AboutMePage onOpenResume={() => setResumeModalOpen(true)} />
        )}
      </main>

      {/* Global Academic & STEM Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
