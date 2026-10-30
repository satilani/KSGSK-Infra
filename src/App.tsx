/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { StatutoryBanner } from './components/StatutoryBanner';
import { Navbar, NavView } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ProjectsView } from './components/ProjectsView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { ComplianceModal } from './components/ComplianceModal';

export default function App() {
  const [currentView, setCurrentView] = useState<NavView>('home');
  const [isComplianceModalOpen, setIsComplianceModalOpen] = useState(false);

  // Sync with URL hash for direct navigational links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavView;
      if (['home', 'about', 'projects', 'contact'].includes(hash)) {
        setCurrentView(hash);
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: NavView) => {
    setCurrentView(view);
    window.location.hash = view === 'home' ? '' : view;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Statutory Header Ribbon */}
      <StatutoryBanner onOpenModal={() => setIsComplianceModalOpen(true)} />

      {/* Main Top Bar Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenComplianceModal={() => setIsComplianceModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenComplianceModal={() => setIsComplianceModalOpen(true)}
          />
        )}
        {currentView === 'about' && (
          <AboutView
            onOpenComplianceModal={() => setIsComplianceModalOpen(true)}
          />
        )}
        {currentView === 'projects' && (
          <ProjectsView
            onNavigate={handleNavigate}
            onOpenComplianceModal={() => setIsComplianceModalOpen(true)}
          />
        )}
        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Global Statutory Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenComplianceModal={() => setIsComplianceModalOpen(true)}
      />

      {/* UPRERA Statutory Compliance Dossier Modal */}
      <ComplianceModal
        isOpen={isComplianceModalOpen}
        onClose={() => setIsComplianceModalOpen(false)}
      />
    </div>
  );
}
