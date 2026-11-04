import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { candidateInfo } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2, ChevronRight, ChevronLeft, Pause, Play } from 'lucide-react';

export default function Experience3DTrack() {
  // Chronological order: 
  // Index 0: Katyayan Group (2023 - 2024)
  // Index 1: HyperTechGlobal Technology (2025)
  // Index 2: Match Best Software (2026 - Present)
  const chronologicalExp = [...candidateInfo.experiences].reverse();
  const [activeStep, setActiveStep] = useState(0); // Starts at Katyayan as requested: "first show katyan then after 4 autometically hypertech and then matchbest"
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const canvasContainerRef = useRef(null);
  const activeStepRef = useRef(activeStep);
  activeStepRef.current = activeStep;
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  // Station 3D coordinates
  const stations = [
    { pos: new THREE.Vector3(-3.2, -0.6, 0), year: '2023 - 2024', name: 'Katyayan Group' },
    { pos: new THREE.Vector3(0, 0.2, 0.8), year: '2025', name: 'HyperTechGlobal' },
    { pos: new THREE.Vector3(3.2, 0.8, 0), year: '2026 - Present', name: 'Match Best Software' }
  ];

  // 4-Second Continuous Auto-rotation Timer with smooth visual progress
  useEffect(() => {
    const INTERVAL_DURATION = 4000; // 4 seconds
    const TICK_RATE = 40; // 40ms updates for smooth progress bar
    let elapsed = 0;

    const timer = setInterval(() => {
      if (isPausedRef.current) return;

      elapsed += TICK_RATE;
      const pct = Math.min(100, (elapsed / INTERVAL_DURATION) * 100);
      setProgress(pct);

      if (elapsed >= INTERVAL_DURATION) {
        elapsed = 0;
        setProgress(0);
        setActiveStep((prev) => (prev + 1) % 3); // 0 -> 1 -> 2 -> 0 -> 1 -> 2...
      }
    }, TICK_RATE);

    return () => clearInterval(timer);
  }, []);

  const handleSelectStep = (index) => {
    setActiveStep(index);
    setProgress(0); // Reset timer progress on click
  };

  // Three.js 3D Interactive Line & Clickable Dots
  useEffect(() => {
    if (!canvasContainerRef.current) return;

    const container = canvasContainerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xd2ff00, 3.5, 20);
    pointLight.position.set(0, 2, 4);
    scene.add(pointLight);

    // 3. 3D Career Transit Path (From first role -> intermediate -> current)
    const curvePoints = [
      new THREE.Vector3(-4.4, -0.9, -0.5),
      stations[0].pos,
      new THREE.Vector3(-1.6, -0.1, 0.4),
      stations[1].pos,
      new THREE.Vector3(1.6, 0.5, 0.4),
      stations[2].pos,
      new THREE.Vector3(4.4, 1.0, -0.5)
    ];

    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 90, 0.045, 12, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0x3f3f46,
      transparent: true,
      opacity: 0.4
    });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    scene.add(tube);

    // Glowing progressive segment
    const activeCurvePoints = curve.getPoints(120);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(activeCurvePoints);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xd2ff00,
      linewidth: 2,
      transparent: true,
      opacity: 0.7
    });
    const lineMesh = new THREE.Line(lineGeo, lineMat);
    scene.add(lineMesh);

    // 4. Moving Energy Packets (Data flow pulses traveling along the career line)
    const packetCount = 5;
    const packetGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xd2ff00 });
    const packets = [];

    for (let i = 0; i < packetCount; i++) {
      const p = new THREE.Mesh(packetGeo, packetMat);
      scene.add(p);
      packets.push({ mesh: p, offset: i / packetCount });
    }

    // 5. 3D Station Nodes with Clickable Interaction
    const stationMeshes = [];
    const clickableSpheres = [];

    stations.forEach((st, idx) => {
      const stationGroup = new THREE.Group();
      stationGroup.position.copy(st.pos);

      // Station Sphere
      const sphereGeo = new THREE.SphereGeometry(0.26, 24, 24);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0x222222,
        roughness: 0.2,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      sphere.userData = { index: idx };
      stationGroup.add(sphere);
      clickableSpheres.push(sphere);

      // Station Outer Pulse Ring
      const ringGeo = new THREE.RingGeometry(0.36, 0.42, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x71717a,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.userData = { index: idx };
      stationGroup.add(ring);
      clickableSpheres.push(ring);

      scene.add(stationGroup);
      stationMeshes.push({ group: stationGroup, sphere, ring, index: idx });
    });

    // 6. Raycasting for Clicking directly on 3D Dots
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handleCanvasClick = (e) => {
      const rect = container.getBoundingClientRect();
      mouseVector.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseVector.y = -((e.clientY - rect.top) / height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(clickableSpheres);

      if (intersects.length > 0) {
        const clickedIndex = intersects[0].object.userData.index;
        if (clickedIndex !== undefined) {
          handleSelectStep(clickedIndex);
        }
      }
    };

    const handleCanvasMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseVector.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseVector.y = -((e.clientY - rect.top) / height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(clickableSpheres);
      if (intersects.length > 0) {
        container.style.cursor = 'pointer';
      } else {
        container.style.cursor = 'default';
      }
    };

    container.addEventListener('click', handleCanvasClick);
    container.addEventListener('mousemove', handleCanvasMouseMove);

    // 7. Animation Loop & Camera Gliding
    let targetCamX = 0;
    let targetCamY = 0;
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Travel pulses along curve
      packets.forEach((p) => {
        const t = (time * 0.16 + p.offset) % 1;
        const pt = curve.getPoint(t);
        p.mesh.position.copy(pt);
      });

      // Update station rings and colors based on active step
      const currentActive = activeStepRef.current;
      stationMeshes.forEach((st) => {
        const isActive = st.index === currentActive;
        const isPast = st.index <= currentActive;

        st.ring.rotation.z += 0.02;
        st.ring.lookAt(camera.position);

        if (isActive) {
          const pulse = 1 + Math.sin(time * 5) * 0.18;
          st.sphere.scale.set(pulse, pulse, pulse);
          st.sphere.material.color.setHex(0xd2ff00);
          st.sphere.material.emissive.setHex(0xd2ff00);
          st.ring.material.color.setHex(0xd2ff00);
          st.ring.material.opacity = 1.0;
        } else if (isPast) {
          st.sphere.scale.set(1, 1, 1);
          st.sphere.material.color.setHex(0xffffff);
          st.sphere.material.emissive.setHex(0x444444);
          st.ring.material.color.setHex(0xa1a1aa);
          st.ring.material.opacity = 0.6;
        } else {
          st.sphere.scale.set(0.9, 0.9, 0.9);
          st.sphere.material.color.setHex(0x52525b);
          st.sphere.material.emissive.setHex(0x111111);
          st.ring.material.color.setHex(0x3f3f46);
          st.ring.material.opacity = 0.3;
        }
      });

      // Smooth camera interpolation based on active station
      const targetStationPos = stations[currentActive].pos;
      targetCamX = targetStationPos.x * 0.45;
      targetCamY = targetStationPos.y * 0.45;

      camera.position.x += (targetCamX - camera.position.x) * 0.06;
      camera.position.y += (targetCamY - camera.position.y) * 0.06;
      camera.lookAt(0, 0.2, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('click', handleCanvasClick);
      container.removeEventListener('mousemove', handleCanvasMouseMove);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const cur = chronologicalExp[activeStep];

  return (
    <section id="experience" className="py-20 border-t border-white/[0.08] bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-mono-code text-xs text-[#d2ff00] font-semibold uppercase tracking-widest block mb-2">
              Career Trajectory · Auto-Cycles Every 4s
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
              Interactive Career Progression
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 font-normal max-w-xl">
              Click any 3D station dot to inspect your milestones, or let it auto-advance seamlessly through each chapter.
            </p>
          </div>

          {/* Play / Pause Toggle & 4s Indicator */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono-code text-zinc-300 hover:text-white transition-colors"
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-[#d2ff00]" /> : <Pause className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{isPaused ? 'Resume 4s Loop' : 'Pause Loop'}</span>
            </button>
          </div>
        </div>

        {/* 3D Interactive Line Canvas with Clickable Dots */}
        <div className="relative w-full rounded-2xl surface-card border border-white/[0.08] overflow-hidden mb-8">
          
          {/* Top Hint Bar */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono-code text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-[#d2ff00] animate-ping" />
            <span>Click any 3D dot to inspect milestone</span>
          </div>

          {/* 3D Canvas Mount */}
          <div ref={canvasContainerRef} className="w-full h-64 sm:h-76" />

          {/* 4-Second Smooth Progress Line */}
          <div className="w-full bg-white/[0.04] h-1 overflow-hidden">
            <div
              className="h-full bg-[#d2ff00] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Clickable Chronological Stage Dots & Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {chronologicalExp.map((exp, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                key={idx}
                onClick={() => handleSelectStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden group cursor-pointer ${
                  isActive
                    ? 'bg-zinc-900/95 border-[#d2ff00] shadow-lg scale-[1.01]'
                    : isCompleted
                    ? 'bg-black/60 border-white/15 hover:border-white/30'
                    : 'bg-black/30 border-white/[0.06] text-zinc-500 hover:border-white/15'
                }`}
              >
                {/* Active Neon Line on Top of Tab */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#d2ff00]" />
                )}

                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full transition-all ${
                      isActive ? 'bg-[#d2ff00] ring-4 ring-[#d2ff00]/20' : 'bg-zinc-600'
                    }`} />
                    <span className={`text-[11px] font-mono-code font-bold uppercase ${
                      isActive ? 'text-[#d2ff00]' : 'text-zinc-400'
                    }`}>
                      Stage 0{idx + 1}
                    </span>
                  </div>
                  <span className="text-xs font-mono-code text-zinc-400">
                    {exp.period}
                  </span>
                </div>

                <h4 className={`font-display font-bold text-base mb-0.5 ${
                  isActive ? 'text-white' : 'text-zinc-300'
                }`}>
                  {exp.company}
                </h4>

                <p className="text-xs font-mono-code text-zinc-400">
                  {exp.role}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Milestone Deliverables Card for Active Stage */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="surface-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] relative transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-white/[0.06]">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono-code bg-[#d2ff00]/10 text-[#d2ff00] border border-[#d2ff00]/20 font-semibold">
                  Stage 0{activeStep + 1} of 03
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {cur.role}
                </h3>
              </div>
              <div className="text-sm font-mono-code text-zinc-300 mt-1">
                {cur.company}
              </div>
            </div>

            <div className="flex flex-col md:items-end text-xs font-mono-code text-zinc-400 gap-1">
              <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#d2ff00]" />
                {cur.period}
              </span>
              <span className="flex items-center gap-1.5 text-zinc-500">
                <MapPin className="w-3.5 h-3.5" />
                {cur.location}
              </span>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="py-5 space-y-3">
            <h4 className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider mb-2">
              Milestone Accomplishments & Impact:
            </h4>
            {cur.deliverables.map((item, dIdx) => (
              <div key={dIdx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#d2ff00] shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Stack Tags */}
          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono-code text-zinc-500 mr-2">Key Tech:</span>
            {cur.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded text-xs font-mono-code bg-black/60 text-zinc-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
