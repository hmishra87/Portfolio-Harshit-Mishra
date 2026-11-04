import React from 'react';
import { candidateInfo } from '../data/portfolioData';
import { Award, ShieldCheck, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function CertificationsBento() {
  return (
    <section id="certifications" className="py-20 border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono-code text-xs text-[#d2ff00] font-semibold uppercase tracking-widest block mb-2">
            Validated Credentials
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
            Certifications & Education
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            Officially verified cloud architecture and systems administration credentials backed by formal business and engineering studies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {candidateInfo.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="surface-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] flex flex-col justify-between hover:border-white/[0.18] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="px-2.5 py-1 rounded text-xs font-mono-code text-zinc-300 bg-white/[0.05] border border-white/10 uppercase font-semibold">
                    {cert.code}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono-code text-[#d2ff00]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-1.5 leading-snug">
                  {cert.title}
                </h3>

                <span className="text-xs font-mono-code text-zinc-400 block mb-3">
                  Issuer: {cert.issuer}
                </span>

                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono-code text-zinc-500">
                <span>Specialization</span>
                <span className="text-zinc-300">{cert.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Education Row */}
        <div className="surface-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Academic Background
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {candidateInfo.education.map((edu, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-[#d2ff00] font-semibold">{edu.timeline}</span>
                  <span className="text-zinc-500">Accredited Degree</span>
                </div>
                <h4 className="font-display font-bold text-base text-white">
                  {edu.degree}
                </h4>
                <p className="text-xs sm:text-sm font-mono-code text-zinc-400">
                  {edu.institution}
                </p>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed pt-1">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
