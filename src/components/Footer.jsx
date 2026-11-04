import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#030305] border-t border-white/[0.08] py-12 text-zinc-500 font-mono-code text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-zinc-300 font-semibold block mb-0.5">
            HARSHIT MISHRA
          </span>
          <span className="text-zinc-500 text-[11px]">
            DevOps Engineer — Cloud & Infrastructure Specialist · Lucknow, India
          </span>
        </div>

        <div className="flex items-center gap-6 text-[11px]">
          <span>AWS SAA-C03</span>
          <span>·</span>
          <span>Azure AZ-104</span>
          <span>·</span>
          <span>99.9% Uptime SLA</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-white/10 transition-colors ml-2"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
