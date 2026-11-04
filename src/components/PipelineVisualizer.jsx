import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle2, ShieldCheck, AlertTriangle, Cpu, Terminal, ArrowRight, Zap, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

export default function PipelineVisualizer() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStage, setCurrentStage] = useState(0); // 0 = idle, 1 to 5 = stages, 6 = success
  const [logs, setLogs] = useState([
    '[INIT] Production SRE Pipeline Engine online.',
    '[READY] Click "TRIGGER ENTERPRISE PIPELINE" to simulate full DevSecOps deployment.'
  ]);

  const stages = [
    {
      id: 1,
      title: '1. SCM & TRIGGER',
      desc: 'Git push to main / Webhook dispatch',
      tool: 'GitHub Actions',
      status: 'pending'
    },
    {
      id: 2,
      title: '2. CODE QUALITY GATE',
      desc: 'Static code analysis & security rules',
      tool: 'SonarQube',
      status: 'pending'
    },
    {
      id: 3,
      title: '3. CONTAINER VULNERABILITY',
      desc: 'Deep image scan & CVE enforcement',
      tool: 'Trivy Scanner',
      status: 'pending'
    },
    {
      id: 4,
      title: '4. ZERO-DOWNTIME ROLLOUT',
      desc: 'Rolling pod replacement on AWS EKS/ECS',
      tool: 'AWS EKS / ECS',
      status: 'pending'
    },
    {
      id: 5,
      title: '5. SRE OBSERVABILITY',
      desc: 'Synthetics, CloudWatch & Grafana alerts',
      tool: 'Grafana & CW',
      status: 'pending'
    }
  ];

  const runPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStage(1);
    sound.playDeploy();
    setLogs([
      '[PIPELINE START] Dispatched deployment workflow #8491 for platform Healnova.ai...',
      '>> git checkout ref: origin/main @ commit a9f4c3',
      '>> Validating environment credentials & AWS IAM AssumeRole...'
    ]);

    // Step 2: SonarQube
    setTimeout(() => {
      setCurrentStage(2);
      sound.playClick(650);
      setLogs((prev) => [
        ...prev,
        '>> [SonarQube] Running continuous static analysis...',
        '>> [SonarQube] Reliability: A+ | Security: A+ | Maintainability: A+',
        '>> [SonarQube] Quality Gate Status: PASSED (0 Code Smells, 0 Bugs)'
      ]);
    }, 1800);

    // Step 3: Trivy
    setTimeout(() => {
      setCurrentStage(3);
      sound.playClick(800);
      setLogs((prev) => [
        ...prev,
        '>> [Trivy] Scanning container layers (healnova-ai:v2.4.1)...',
        '>> [Trivy] CVE Scan Result: 0 CRITICAL, 0 HIGH, 0 MEDIUM',
        '>> [Trivy] Container Security Gate: APPROVED FOR CLOUD REGISTRY'
      ]);
    }, 3600);

    // Step 4: EKS Deployment
    setTimeout(() => {
      setCurrentStage(4);
      sound.playClick(950);
      setLogs((prev) => [
        ...prev,
        '>> [AWS EKS] Executing Zero-Downtime Rolling Update on Multi-AZ cluster...',
        '>> [AWS EKS] Pod 1/4 terminated -> New Pod healthy (100% traffic shifted)',
        '>> [AWS EKS] Pods 2, 3, 4 upgraded. Nginx reverse proxy SSL session intact.'
      ]);
    }, 5400);

    // Step 5: SRE Monitoring & Complete
    setTimeout(() => {
      setCurrentStage(5);
      sound.playSuccess();
      setIsRunning(false);
      setLogs((prev) => [
        ...prev,
        '>> [CloudWatch & Grafana] Healthcheck HTTP GET /api/health -> 200 OK (11ms latency)',
        '>> [SRE STATUS] DEPLOYMENT 100% COMPLETE // ZERO DOWNTIME OBSERVED!',
        '=========================================================================='
      ]);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D2FF00', '#00F0FF', '#FF5500', '#ffffff']
      });
    }, 7200);
  };

  const resetPipeline = () => {
    setIsRunning(false);
    setCurrentStage(0);
    sound.playClick(400);
    setLogs([
      '[RESET] Pipeline state returned to standby.',
      '[READY] Ready for next release cycle simulation.'
    ]);
  };

  return (
    <section id="pipeline" className="py-16 relative bg-[#090a0e] border-y border-white/10 cyber-grid-dense">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D2FF00]" />
              <span className="font-mono-code text-xs text-[#D2FF00] font-bold tracking-widest uppercase">
                INTERACTIVE DEVSECOPS SIMULATION
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              ZERO-DOWNTIME PIPELINE ENGINE
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-1">
              Experience the automated security gates and deployment orchestration engineered for enterprise AI platforms.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={runPipeline}
              disabled={isRunning}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono-code font-bold text-xs uppercase tracking-wider transition-all ${
                isRunning
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed border border-white/10'
                  : 'bg-[#D2FF00] text-black hover:bg-[#b8e000] hover:shadow-neon-lime active:scale-95'
              }`}
            >
              <Play className={`w-4 h-4 fill-current ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'DEPLOYMENT RUNNING...' : 'TRIGGER ENTERPRISE PIPELINE'}</span>
            </button>

            <button
              onClick={resetPipeline}
              disabled={isRunning}
              className="p-3.5 rounded-xl bg-black/60 border border-white/15 text-gray-400 hover:text-white hover:border-white/40 transition-colors"
              title="Reset Simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5-Stage Interactive Pipeline Flow Track */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {stages.map((stage) => {
            const isCompleted = currentStage > stage.id || currentStage === 5;
            const isCurrent = currentStage === stage.id && isRunning;
            const isPending = currentStage < stage.id;

            return (
              <div
                key={stage.id}
                className={`relative p-4 rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-[#D2FF00]/10 border-[#D2FF00] shadow-neon-lime scale-[1.02]'
                    : isCompleted
                    ? 'bg-black/80 border-[#00F0FF]/40 text-gray-200'
                    : 'bg-[#0c0d12]/60 border-white/10 text-gray-400'
                }`}
              >
                {/* Status Dot */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[10px] uppercase font-bold tracking-wider text-gray-400">
                    {stage.tool}
                  </span>
                  {isCompleted ? (
                    <span className="flex items-center gap-1 text-[10px] font-mono-code text-[#00F0FF] font-bold">
                      <Check className="w-3.5 h-3.5" />
                      PASSED
                    </span>
                  ) : isCurrent ? (
                    <span className="flex items-center gap-1 text-[10px] font-mono-code text-[#D2FF00] font-bold animate-pulse">
                      <Cpu className="w-3.5 h-3.5 animate-spin" />
                      RUNNING
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono-code text-gray-500">IDLE</span>
                  )}
                </div>

                <h4 className="font-display font-bold text-sm text-white mb-1">
                  {stage.title}
                </h4>
                <p className="text-xs text-gray-400 leading-snug">
                  {stage.desc}
                </p>

                {/* Progress Line */}
                <div className="w-full bg-white/5 h-1 rounded-full mt-3 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isCompleted
                        ? 'w-full bg-[#00F0FF]'
                        : isCurrent
                        ? 'w-full bg-[#D2FF00] animate-pulse'
                        : 'w-0'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-time Streaming Terminal Box */}
        <div className="rounded-2xl border border-white/15 bg-black/90 p-4 font-mono-code text-xs overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-gray-400 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-gray-300 font-bold">STDOUT // CI-CD RUNNER CONSOLE</span>
            </div>
            <span className="text-[#D2FF00] text-[10px] font-bold">
              STATUS: {isRunning ? 'STREAMING' : currentStage === 5 ? 'COMPLETED' : 'STANDBY'}
            </span>
          </div>

          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-2 text-gray-300">
            {logs.map((log, index) => (
              <div 
                key={index}
                className={
                  log.includes('PASSED') || log.includes('COMPLETE') 
                    ? 'text-[#00F0FF] font-bold' 
                    : log.includes('SonarQube') || log.includes('Trivy')
                    ? 'text-[#D2FF00]'
                    : log.includes('EKS')
                    ? 'text-[#FF5500]'
                    : 'text-gray-400'
                }
              >
                {log}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

