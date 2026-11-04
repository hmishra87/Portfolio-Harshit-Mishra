import React from 'react';
import { candidateInfo } from '../data/portfolioData';
import { Cloud, GitBranch, Shield, Activity, Terminal } from 'lucide-react';

export default function SkillsMatrix() {
  const iconMap = {
    'Cloud Platforms': Cloud,
    'DevOps & CI/CD': GitBranch,
    'Security & DevSecOps': Shield,
    'Observability & SRE': Activity,
  };

  return (
    <section id="skills" className="py-20 border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono-code text-xs text-[#d2ff00] font-semibold uppercase tracking-widest block mb-2">
            Technical Stack & Principles
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
            Core Competencies & Tooling
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            Multi-cloud infrastructure management, secure container orchestration, and continuous release pipelines built with industry standard tools.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {candidateInfo.skillsCategories.map((group, idx) => {
            const Icon = iconMap[group.category] || Terminal;
            return (
              <div
                key={idx}
                className="surface-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-white/[0.18] transition-all"
              >
                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-white/[0.06]">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#d2ff00]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {group.category}
                    </h3>
                    <span className="text-[11px] font-mono-code text-zinc-500">
                      {group.badge}
                    </span>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/[0.08] text-xs font-mono-code text-zinc-300 hover:border-[#d2ff00]/40 transition-colors"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Strengths Strip */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl surface-card border border-white/[0.08]">
          <h4 className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider mb-5">
            Engineering Principles & Key Strengths
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {candidateInfo.keyStrengths.map((strength, i) => (
              <div key={i} className="space-y-1">
                <span className="font-display font-semibold text-sm text-white block">
                  {strength.title}
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {strength.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
