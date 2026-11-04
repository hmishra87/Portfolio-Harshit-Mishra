import React, { useState } from 'react';
import { candidateInfo } from '../data/portfolioData';
import { CheckCircle2, ArrowUpRight, Layers, Cpu, Server, Activity } from 'lucide-react';
import Project3DArchitecture from './Project3DArchitecture';

export default function FeaturedProjects() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const activeProject = candidateInfo.projects[activeProjectIdx];

  // Mouse tilt helper for 3D card effect
  const handleMouseMove = (e, cardId) => {
    const card = document.getElementById(cardId);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  };

  const handleMouseLeave = (cardId) => {
    const card = document.getElementById(cardId);
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <section id="projects" className="py-20 border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono-code text-xs text-[#d2ff00] font-semibold uppercase tracking-widest block mb-2">
            Selected Work & 3D Topologies
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
            Production Cloud & AI Infrastructure
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            Architected and maintained containerized environments, automated DevSecOps pipelines, and real-time observability stacks for high-throughput AI platforms.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {candidateInfo.projects.map((proj, idx) => {
            const isSelected = activeProjectIdx === idx;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProjectIdx(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-zinc-900 border-[#d2ff00] shadow-md'
                    : 'bg-black/40 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono-code uppercase font-bold text-zinc-400">
                    Case Study 0{idx + 1}
                  </span>
                  <span 
                    className="text-[10px] font-mono-code px-2 py-0.5 rounded font-semibold border"
                    style={{
                      color: proj.accentColor,
                      borderColor: `${proj.accentColor}40`,
                      backgroundColor: `${proj.accentColor}10`
                    }}
                  >
                    {proj.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-0.5">
                  {proj.name}
                </h3>
                <p className="text-xs font-mono-code text-zinc-400">
                  {proj.category}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Project 3D Showcase & Engineering Card */}
        <div
          id="active-project-card"
          onMouseMove={(e) => handleMouseMove(e, 'active-project-card')}
          onMouseLeave={() => handleMouseLeave('active-project-card')}
          className="surface-card rounded-2xl p-6 sm:p-10 border border-white/[0.08] transition-all duration-300"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 3D Architecture Canvas */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Project3DArchitecture activeProjectId={activeProject.id} />
              <span className="text-center font-mono-code text-[11px] text-zinc-500 mt-2 block">
                {activeProject.name} · Real-time 3D Infrastructure Topology
              </span>
            </div>

            {/* Right Detailed Case Study Specs */}
            <div className="lg:col-span-7 space-y-5 lg:border-l lg:border-white/[0.06] lg:pl-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono-code text-xs text-[#d2ff00] font-semibold">
                    {activeProject.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {activeProject.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono-code text-zinc-400 mt-0.5">
                  {activeProject.subtitle}
                </p>
                <p className="text-sm text-zinc-300 font-normal leading-relaxed mt-3">
                  {activeProject.description}
                </p>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-2.5 py-2.5 px-3 rounded-xl bg-black/60 border border-white/[0.06] font-mono-code text-center">
                {Object.entries(activeProject.metrics).map(([key, val], i) => (
                  <div key={i}>
                    <span className="text-[10px] text-zinc-500 uppercase block">{key}</span>
                    <span className="text-xs font-bold text-white">{val}</span>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider mb-2.5">
                  Key Production Accomplishments:
                </h4>
                <ul className="space-y-2.5">
                  {activeProject.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d2ff00] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5 items-center">
                <span className="text-xs font-mono-code text-zinc-500 mr-2">Stack:</span>
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded text-xs font-mono-code bg-black/50 text-zinc-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
