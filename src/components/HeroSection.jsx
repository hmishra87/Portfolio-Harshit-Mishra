import React, { useState } from 'react';
import Hero3D from './Hero3D';
import { ArrowDownRight, ArrowUpRight, ShieldCheck, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { candidateInfo } from '../data/portfolioData';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [pinnedMode, setPinnedMode] = useState(null); // null = hover dynamic, '3d' = pinned 3D

  const show3D = pinnedMode === '3d' || isHovered;

  return (
    <section id="overview" className="relative pt-6 pb-16 subtle-grid select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Refined Editorial Presentation */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono-code text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#d2ff00] animate-pulse" />
              <span>DevOps Engineer · Cloud & Infrastructure Specialist</span>
            </div>

            {/* Well-proportioned, impactful Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.12]">
              Architecting resilient cloud systems for enterprise AI.
            </h1>

            {/* Subtitle / Summary */}
            <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-xl leading-relaxed">
              3+ years of production experience designing scalable AWS multi-tier environments, automated DevSecOps CI/CD pipelines, and high-availability database disaster recovery strategies for flagship AI platforms including <span className="text-white font-medium">Xelta.ai</span>, <span className="text-white font-medium">Streamplay.ai</span>, and <span className="text-white font-medium">Healnova.ai</span>.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="px-5 py-3 rounded-lg bg-white text-black font-mono-code text-xs font-semibold hover:bg-[#d2ff00] transition-colors flex items-center gap-2"
              >
                <span>View Case Studies</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="px-5 py-3 rounded-lg bg-zinc-900 border border-white/10 text-white font-mono-code text-xs font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <span>Career Progression Line</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Metrics Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/[0.08] font-mono-code">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">3+ Yrs</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-wider">Cloud Exp</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-[#d2ff00] block">99.9%</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-wider">SRE Uptime</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block">70%</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-wider">Effort Cut</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-zinc-300 block">15 Days</span>
                <span className="text-[11px] text-zinc-500 uppercase tracking-wider">Notice Period</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Hover-to-Reveal 3D Core */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Minimal Mode Pill */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-zinc-900/90 border border-white/10 mb-3 z-20 font-mono-code text-[11px]">
              <button
                onClick={() => setPinnedMode(null)}
                className={`px-3.5 py-1 rounded-full transition-all ${
                  pinnedMode === null
                    ? 'bg-white text-black font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Hover 3D Morph
              </button>
              <button
                onClick={() => setPinnedMode(pinnedMode === '3d' ? null : '3d')}
                className={`px-3.5 py-1 rounded-full transition-all ${
                  pinnedMode === '3d'
                    ? 'bg-[#d2ff00] text-black font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Pin 3D Core
              </button>
            </div>

            {/* Interactive Morphing Container */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full max-w-sm sm:max-w-md h-[420px] sm:h-[460px] rounded-2xl surface-card border border-white/[0.08] overflow-hidden flex items-end justify-center group cursor-pointer"
            >
              
              {/* Ambient Backlight Halo */}
              <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full blur-[80px] pointer-events-none transition-all duration-700 ${
                show3D ? 'bg-[#d2ff00]/25 scale-125' : 'bg-[#d2ff00]/15 scale-100'
              }`} />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/10 blur-[70px] pointer-events-none rounded-full" />

              {/* Layer 1: 3D Architectural Core (Revealed on hover / pinned) */}
              <div className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${
                show3D ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}>
                <Hero3D />
              </div>

              {/* Layer 2: Profile Portrait Cutout of Harshit Mishra */}
              <div className={`relative w-full h-full flex flex-col items-center justify-end z-20 transition-all duration-700 ease-in-out ${
                show3D
                  ? 'opacity-0 scale-95 pointer-events-none'
                  : 'opacity-100 scale-100 pointer-events-auto'
              }`}>
                {/* Transparent Cutout Image */}
                <img
                  src="/harshit-mishra.png"
                  alt="Harshit Mishra — DevOps & Cloud Specialist"
                  className="relative z-10 max-h-[94%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter brightness-[1.02] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Smooth Gradient Pedestal Blend at Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-transparent z-10 pointer-events-none" />

                {/* Floating Verified Badge */}
                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 font-mono-code text-xs">
                  <div>
                    <span className="text-white font-semibold block text-xs">HARSHIT MISHRA</span>
                    <span className="text-[10px] text-zinc-400">AWS SAA-C03 & Azure AZ-104</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#d2ff00]/10 text-[#d2ff00] border border-[#d2ff00]/20">
                    Verified
                  </span>
                </div>
              </div>

              {/* Floating Top Status Indicator */}
              <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-none font-mono-code text-[10px]">
                <span className={`px-2.5 py-1 rounded-full backdrop-blur-md border transition-all duration-500 ${
                  show3D
                    ? 'bg-[#d2ff00]/15 border-[#d2ff00]/40 text-[#d2ff00]'
                    : 'bg-black/60 border-white/10 text-zinc-400'
                }`}>
                  {show3D ? '● 3D ARCHITECTURE CORE ACTIVE' : '✦ HOVER FOR 3D CORE'}
                </span>

                <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-zinc-400 border border-white/10">
                  {show3D ? 'DRAG TO ROTATE' : 'PROFILE VIEW'}
                </span>
              </div>

            </div>

            {/* Subtitle Hint */}
            <span className="font-mono-code text-[11px] text-zinc-500 mt-2 text-center block">
              {show3D
                ? '3D Cloud Infrastructure Core · Drag to Orbit'
                : 'Move cursor over photo to reveal 3D Architecture Core'}
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
