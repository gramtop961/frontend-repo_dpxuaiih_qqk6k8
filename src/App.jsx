import React from 'react';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import GalleryGrid from './components/GalleryGrid';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold text-white">Skyport Studio</a>
          <nav className="hidden gap-6 text-sm text-slate-200 sm:flex">
            <a href="#overview" className="hover:text-white">Overview</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <ProjectOverview />
        <div id="gallery">
          <GalleryGrid />
        </div>
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
