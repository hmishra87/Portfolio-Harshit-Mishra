import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { candidateInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills & Architecture', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050507]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-display font-bold text-sm text-[#d2ff00] group-hover:border-[#d2ff00]/40 transition-colors">
            HM
          </div>
          <div>
            <span className="font-display font-bold text-base tracking-tight text-white block">
              HARSHIT MISHRA
            </span>
            <span className="text-[11px] font-mono-code text-zinc-500 block -mt-1">
              DevOps & Cloud Infrastructure
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono-code tracking-wide text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Status Pill */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-mono-code text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d2ff00]" />
            <span>15-Day Notice · Immediate</span>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-white text-black font-mono-code text-xs font-semibold hover:bg-[#d2ff00] transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a0f] border-b border-white/10 px-6 py-6 space-y-4 font-mono-code">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-[#d2ff00] text-black text-xs font-bold"
            >
              Contact Harshit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
