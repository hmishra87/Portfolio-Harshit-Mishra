import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import Experience3DTrack from './components/Experience3DTrack';
import SkillsMatrix from './components/SkillsMatrix';
import CertificationsBento from './components/CertificationsBento';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050507] text-[#e4e4e7] selection:bg-[#d2ff00] selection:text-black">
      {/* Top Header Navigation */}
      <Navbar />

      <main>
        {/* Editorial Hero with Harshit's Cutout Portrait & 3D Architectural Sculpture */}
        <HeroSection />

        {/* Selected AI Cloud Case Studies */}
        <FeaturedProjects />

        {/* 3D Interactive Career Trajectory (First this -> Then this -> Then current) */}
        <Experience3DTrack />

        {/* Technical Competencies & Principles */}
        <SkillsMatrix />

        {/* Verified Certifications & Education */}
        <CertificationsBento />

        {/* Contact & Recruitment */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
