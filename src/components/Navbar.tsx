import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export type NavTab = 'home' | 'robotics' | 'research' | 'cad' | 'about';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenResume?: () => void;
}

export const navItems: { id: NavTab; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'robotics', label: 'Orca Robotics' },
  { id: 'research', label: 'Scientific Research' },
  { id: 'cad', label: 'CAD Designs' },
  { id: 'about', label: 'About Me' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md py-1 cursor-pointer"
            aria-label="Sophia STEM Portfolio Home"
          >
            <span className="text-xl font-bold font-display tracking-tight text-slate-900 hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
              Sophia
            </span>
            <span className="hidden sm:inline text-xs font-medium text-slate-600 border-l border-slate-300 pl-2.5 py-0.5">
              RMHS STEM Portfolio
            </span>
          </button>

          {/* Zone 2: 5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 text-sm font-medium cursor-pointer ${
                    isActive
                      ? 'text-teal-800 bg-teal-50 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onOpenResume ? (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-teal-700 active:bg-teal-800 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            ) : (
              <button
                onClick={() => handleNavClick('about')}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-teal-700 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
              >
                <span>About Me</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-teal-800 bg-teal-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full text-center py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 transition-colors shadow-xs cursor-pointer"
              >
                View Resume
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
