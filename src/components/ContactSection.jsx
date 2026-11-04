import React, { useState } from 'react';
import { candidateInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, Download, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono-code text-xs text-[#d2ff00] font-semibold uppercase tracking-widest block mb-2">
            Get in Touch · 15 Days Notice
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            Available for Senior / Lead DevOps, Cloud Infrastructure, and Site Reliability Engineering positions. Immediate joiner with a 15-day notice period.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="surface-card rounded-2xl p-5 border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-code text-zinc-500 uppercase block">Email Address</span>
                  <a href={`mailto:${candidateInfo.email}`} className="text-xs sm:text-sm font-mono-code text-white hover:text-[#d2ff00] transition-colors">
                    {candidateInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(candidateInfo.email, 'email')}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-[#d2ff00]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="surface-card rounded-2xl p-5 border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-code text-zinc-500 uppercase block">Phone / Mobile</span>
                  <a href={`tel:${candidateInfo.phone}`} className="text-xs sm:text-sm font-mono-code text-white hover:text-[#d2ff00] transition-colors">
                    {candidateInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => copyToClipboard(candidateInfo.phone, 'phone')}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#d2ff00]" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`https://wa.me/918707626490`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-zinc-400 hover:text-[#d2ff00] hover:bg-white/5 transition-colors"
                  title="Open WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="surface-card rounded-2xl p-5 border border-white/[0.08] flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono-code text-zinc-500 uppercase block">Location & Mobility</span>
                <span className="text-xs sm:text-sm font-medium text-white block">{candidateInfo.location}</span>
                <span className="text-[11px] text-zinc-500">Open to Remote / Hybrid / Relocation</span>
              </div>
            </div>

            {/* Notice Period Pill Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono-code text-zinc-400 block">Availability</span>
                <span className="text-sm sm:text-base font-semibold text-white">15 Days Notice Period</span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono-code bg-[#d2ff00]/10 text-[#d2ff00] border border-[#d2ff00]/20 font-semibold">
                Immediate
              </span>
            </div>

            {/* Print CV */}
            <button
              onClick={() => window.print()}
              className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-mono-code text-xs font-medium border border-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              <span>Save / Print Curriculum Vitae</span>
            </button>

          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 surface-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
            <h3 className="font-display font-bold text-xl text-white mb-1.5">
              Send an Opportunity or Message
            </h3>
            <p className="text-xs font-mono-code text-zinc-400 mb-6">
              Direct dispatch to Harshit Mishra. Inquiries receive response within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-zinc-900/80 border border-[#d2ff00]/30 text-center space-y-3">
                <Check className="w-7 h-7 text-[#d2ff00] mx-auto" />
                <h4 className="font-display font-bold text-base text-white">
                  Message Transmitted Successfully
                </h4>
                <p className="text-xs text-zinc-400 font-mono-code">
                  Thank you for reaching out. Harshit will get in touch promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono-code text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 uppercase text-[10px] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.08] text-white focus:border-white/30 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 uppercase text-[10px] mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.08] text-white focus:border-white/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 uppercase text-[10px] mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Scale AI, AWS, Stripe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.08] text-white focus:border-white/30 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 uppercase text-[10px] mb-1">
                    Message / Position Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="We are looking for a Senior DevOps & Cloud Infrastructure Specialist to join our team..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/[0.08] text-white focus:border-white/30 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white hover:bg-[#d2ff00] text-black font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 fill-current" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
