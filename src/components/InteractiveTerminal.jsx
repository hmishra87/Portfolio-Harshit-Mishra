import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { candidateInfo } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'SRE//ALPHA-01 INTERACTIVE CLI TERMINAL v3.2.0' },
    { type: 'system', text: 'Connected to AWS Global Infrastructure [OK]' },
    { type: 'system', text: 'Type "help" to see available commands or click quick chips below.' }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText) => {
    const rawCmd = (cmdText || inputVal).trim();
    if (!rawCmd) return;

    sound.playKeyBlip();
    const cmd = rawCmd.toLowerCase();
    const newEntry = { type: 'user', text: `$ ${rawCmd}` };

    let responseEntries = [];

    switch (cmd) {
      case 'help':
        responseEntries = [
          { type: 'output', text: 'AVAILABLE COMMANDS:' },
          { type: 'output', text: '  whoami       - Executive background of Harshit Mishra' },
          { type: 'output', text: '  skills       - Technical capabilities & cloud tooling' },
          { type: 'output', text: '  projects     - Featured AI platforms (Xelta, Streamplay, Healnova)' },
          { type: 'output', text: '  experience   - Production track record & accomplishments' },
          { type: 'output', text: '  certs        - AWS & Azure validated certifications' },
          { type: 'output', text: '  status       - Cluster telemetry & notice period' },
          { type: 'output', text: '  contact      - Direct email, phone, and recruitment channels' },
          { type: 'output', text: '  deploy       - Trigger high-velocity pipeline deployment' },
          { type: 'output', text: '  clear        - Clear console buffer' }
        ];
        break;

      case 'whoami':
        responseEntries = [
          { type: 'highlight', text: `${candidateInfo.name} — ${candidateInfo.title}` },
          { type: 'output', text: `Location: ${candidateInfo.location} | Experience: ${candidateInfo.experienceYears}` },
          { type: 'output', text: `Notice Period: ${candidateInfo.availability}` },
          { type: 'output', text: candidateInfo.summary }
        ];
        break;

      case 'skills':
        responseEntries = [
          { type: 'highlight', text: '=== TECHNICAL SKILLS MATRIX ===' },
          { type: 'output', text: 'Cloud Platforms: AWS (EC2, ECS, EKS, S3, RDS, ELB, VPC, IAM, CloudWatch), Azure (VM, VNet, NSG)' },
          { type: 'output', text: 'CI/CD & DevOps: Jenkins, GitHub Actions, Docker, Kubernetes, ArgoCD, CloudFormation, Terraform' },
          { type: 'output', text: 'DevSecOps & Gating: SonarQube Static Analysis, Trivy Vulnerability Scanning, SSL/TLS Automation' },
          { type: 'output', text: 'Observability & SRE: Grafana, AWS CloudWatch, Nginx Reverse Proxy, Point-in-Time DB Disaster Recovery' }
        ];
        break;

      case 'projects':
        responseEntries = [
          { type: 'highlight', text: '=== FEATURED AI CLOUD PROJECTS ===' },
          { type: 'output', text: '1. Xelta.ai       - AI Infrastructure, CI/CD & Container Security on AWS ECS/Docker' },
          { type: 'output', text: '2. Streamplay.ai  - Media Application Release Automation, Trivy & SonarQube' },
          { type: 'output', text: '3. Healnova.ai    - Healthcare AI Platform Deployment, Zero-Downtime Releases' }
        ];
        break;

      case 'certs':
        responseEntries = [
          { type: 'highlight', text: '=== VALIDATED CERTIFICATIONS ===' },
          { type: 'output', text: '[AWS]   AWS Certified Solutions Architect – Associate (SAA-C03)' },
          { type: 'output', text: '[AZURE] Microsoft Certified: Azure Administrator Associate (AZ-104)' },
          { type: 'output', text: '[NET]   Diploma in Network Administration (Jetking, Lucknow)' }
        ];
        break;

      case 'experience':
        responseEntries = [
          { type: 'highlight', text: '=== PROFESSIONAL EXPERIENCE ===' },
          { type: 'output', text: '• Match Best Software (Jan 2026 – Present): DevOps Engineer for AI Platforms' },
          { type: 'output', text: '• HyperTechGlobal Technology (Jan 2025 – Dec 2025): DevOps Engineer (70% deployment effort cut)' },
          { type: 'output', text: '• Katyayan Group (Jul 2023 – Dec 2024): Sr. Executive – IT (Hybrid Fleet Admin)' }
        ];
        break;

      case 'status':
        responseEntries = [
          { type: 'highlight', text: '=== CLUSTER SRE TELEMETRY ===' },
          { type: 'output', text: 'Status: ALL SYSTEMS NOMINAL' },
          { type: 'output', text: 'Production SLA: 99.9% Uptime' },
          { type: 'output', text: 'Notice Period: 15 Days (Immediate Joiner Availability)' }
        ];
        break;

      case 'contact':
        responseEntries = [
          { type: 'highlight', text: '=== DIRECT RECRUITMENT CHANNELS ===' },
          { type: 'output', text: `Email:    ${candidateInfo.email}` },
          { type: 'output', text: `Phone:    ${candidateInfo.phone}` },
          { type: 'output', text: `Location: ${candidateInfo.location}` },
          { type: 'output', text: `LinkedIn: ${candidateInfo.linkedin}` }
        ];
        break;

      case 'deploy':
        sound.playDeploy();
        responseEntries = [
          { type: 'highlight', text: '[TRIGGER] Executing production deploy sequence via GitHub Actions...' },
          { type: 'output', text: '>> SonarQube Quality Gate: PASSED (Grade A+)' },
          { type: 'output', text: '>> Trivy Container Scanner: PASSED (0 Critical Vulnerabilities)' },
          { type: 'output', text: '>> Rolling update completed on AWS EKS cluster with 0 downtime!' }
        ];
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        responseEntries = [
          { type: 'error', text: `Command not found: "${rawCmd}". Type "help" for a list of available commands.` }
        ];
    }

    setHistory((prev) => [...prev, newEntry, ...responseEntries]);
    setInputVal('');
  };

  const chips = ['help', 'whoami', 'skills', 'projects', 'certs', 'deploy', 'contact'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl rounded-2xl bg-[#08080c] border border-[#D2FF00]/40 shadow-neon-lime-lg flex flex-col h-[520px] overflow-hidden animate-fade-in font-mono-code">
        
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0f1016] border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-bold text-gray-200">
              harshit@sre-cluster:~# [K8S CONSOLE]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playClick(500);
                onClose();
              }}
              className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-black/50 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-gray-500 text-[10px] uppercase font-bold shrink-0">QUICK:</span>
          {chips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="px-2.5 py-0.5 rounded bg-white/5 hover:bg-[#D2FF00]/20 hover:text-[#D2FF00] hover:border-[#D2FF00]/40 border border-white/10 text-gray-300 transition-colors shrink-0"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Terminal Log Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-1.5 text-xs">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={
                item.type === 'user'
                  ? 'text-[#D2FF00] font-bold'
                  : item.type === 'highlight'
                  ? 'text-[#00F0FF] font-bold'
                  : item.type === 'error'
                  ? 'text-red-400'
                  : item.type === 'system'
                  ? 'text-gray-400 italic'
                  : 'text-gray-300'
              }
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Field */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand();
          }}
          className="flex items-center gap-2 p-3 bg-[#0d0e14] border-t border-white/10"
        >
          <span className="text-[#D2FF00] font-bold text-sm">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'skills', 'deploy'..."
            className="flex-1 bg-transparent text-white font-mono-code text-xs outline-none placeholder-gray-600"
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded bg-[#D2FF00] text-black font-bold text-xs uppercase hover:bg-[#b8e000]"
          >
            EXEC
          </button>
        </form>

      </div>
    </div>
  );
}

