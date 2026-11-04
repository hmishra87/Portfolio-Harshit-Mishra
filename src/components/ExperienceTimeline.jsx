import React from 'react';
import { candidateInfo } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono-code text-xs text-[#d2ff00] font-semibold uppercase tracking-widest block mb-2">
            Career Track
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-zinc-400 text-base mt-3 font-light leading-relaxed">
            3+ years advancing from hybrid enterprise systems administration to senior cloud infrastructure engineering for high-availability AI applications.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {candidateInfo.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="surface-card rounded-2xl p-8 sm:p-10 border border-white/[0.08]"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/[0.06]">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display font-bold text-2xl text-white">
                      {exp.role}
                    </h3>
                    {exp.status === 'CURRENT MISSION' && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono-code text-[#d2ff00] bg-[#d2ff00]/10 border border-[#d2ff00]/20 font-medium">
                        Present
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-mono-code text-zinc-300">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col md:items-end text-xs font-mono-code text-zinc-400 gap-1">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="py-6 space-y-3">
                {exp.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d2ff00] shrink-0 mt-1" />
                    <p className="text-sm text-zinc-300 leading-relaxed font-light">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-xs font-mono-code bg-black/50 text-zinc-400 border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
