import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Project3DArchitecture({ activeProjectId }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xd2ff00, 3, 20);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x00f0ff, 2, 20);
    rimLight.position.set(-3, -3, -2);
    scene.add(rimLight);

    // 3. Dynamic Model Group based on Active Project
    const architectureGroup = new THREE.Group();
    scene.add(architectureGroup);

    // Objects to animate in loop
    const animatedItems = [];

    if (activeProjectId === 'xelta-ai') {
      // Xelta.ai: Containerized AI Microservices & Security Rings
      // Central AI inference cube
      const cubeGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
      const cubeMat = new THREE.MeshPhysicalMaterial({
        color: 0x111218,
        roughness: 0.2,
        metalness: 0.8,
        clearcoat: 1.0,
      });
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      architectureGroup.add(cube);

      // Wireframe cage (ECS / Docker)
      const wireGeo = new THREE.BoxGeometry(1.7, 1.7, 1.7);
      const wireMat = new THREE.MeshBasicMaterial({ color: 0xd2ff00, wireframe: true });
      const wire = new THREE.Mesh(wireGeo, wireMat);
      architectureGroup.add(wire);
      animatedItems.push({ mesh: wire, rx: 0.005, ry: 0.007 });

      // Security Rings (Trivy & SonarQube)
      const ringGeo = new THREE.TorusGeometry(2.3, 0.02, 16, 80);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xd2ff00, transparent: true, opacity: 0.6 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 3;
      architectureGroup.add(ring);
      animatedItems.push({ mesh: ring, rz: 0.01 });

      // Orbiting Docker pod spheres
      for (let i = 0; i < 4; i++) {
        const podGeo = new THREE.SphereGeometry(0.18, 16, 16);
        const podMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xd2ff00, emissiveIntensity: 0.5 });
        const pod = new THREE.Mesh(podGeo, podMat);
        architectureGroup.add(pod);
        animatedItems.push({ mesh: pod, orbit: { radius: 2.3, speed: 1.2, offset: (i * Math.PI) / 2 } });
      }

    } else if (activeProjectId === 'streamplay-ai') {
      // Streamplay.ai: High-Throughput Media Streaming Mesh
      // Central high-capacity stream sphere
      const sphereGeo = new THREE.IcosahedronGeometry(1.3, 2);
      const sphereMat = new THREE.MeshPhysicalMaterial({
        color: 0x140a08,
        roughness: 0.3,
        metalness: 0.9,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      architectureGroup.add(sphere);

      // Wireframe mesh
      const wireGeo = new THREE.IcosahedronGeometry(1.5, 2);
      const wireMat = new THREE.MeshBasicMaterial({ color: 0xff5500, wireframe: true });
      const wire = new THREE.Mesh(wireGeo, wireMat);
      architectureGroup.add(wire);
      animatedItems.push({ mesh: wire, ry: 0.008 });

      // Dual High-Speed Stream Rings
      const ringGeo1 = new THREE.TorusGeometry(2.2, 0.025, 16, 80);
      const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xff5500, transparent: true, opacity: 0.7 });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.rotation.x = Math.PI / 4;
      architectureGroup.add(ring1);
      animatedItems.push({ mesh: ring1, rz: 0.02 });

      // Data packets stream
      for (let i = 0; i < 6; i++) {
        const pktGeo = new THREE.SphereGeometry(0.12, 12, 12);
        const pktMat = new THREE.MeshBasicMaterial({ color: 0xff5500 });
        const pkt = new THREE.Mesh(pktGeo, pktMat);
        architectureGroup.add(pkt);
        animatedItems.push({ mesh: pkt, orbit: { radius: 2.2, speed: 2.0, offset: (i * Math.PI) / 3 } });
      }

    } else {
      // Healnova.ai: Multi-AZ High-Availability Healthcare Architecture
      // Dual synchronized RDS database monoliths
      const dbGeo = new THREE.CylinderGeometry(0.5, 0.5, 1.4, 20);
      const dbMat = new THREE.MeshPhysicalMaterial({ color: 0x071114, metalness: 0.9, roughness: 0.2 });

      const db1 = new THREE.Mesh(dbGeo, dbMat);
      db1.position.set(-1.0, 0, 0);
      architectureGroup.add(db1);

      const db2 = new THREE.Mesh(dbGeo, dbMat);
      db2.position.set(1.0, 0, 0);
      architectureGroup.add(db2);

      // Replication laser link
      const linePts = [new THREE.Vector3(-1.0, 0, 0), new THREE.Vector3(1.0, 0, 0)];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(linePts);
      const lineMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, linewidth: 3 });
      const line = new THREE.Line(lineGeo, lineMat);
      architectureGroup.add(line);

      // Outer Shield of Zero-Downtime High Availability
      const shieldGeo = new THREE.OctahedronGeometry(2.1, 1);
      const shieldMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.4 });
      const shield = new THREE.Mesh(shieldGeo, shieldMat);
      architectureGroup.add(shield);
      animatedItems.push({ mesh: shield, ry: 0.006, rx: 0.003 });
    }

    // 4. Mouse Drag & Orbit
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouse.x;
      const deltaY = e.clientY - prevMouse.y;
      architectureGroup.rotation.y += deltaX * 0.008;
      architectureGroup.rotation.x += deltaY * 0.008;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // 5. Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      if (!isDragging) {
        architectureGroup.rotation.y += 0.003;
      }

      animatedItems.forEach((item) => {
        if (item.rx) item.mesh.rotation.x += item.rx;
        if (item.ry) item.mesh.rotation.y += item.ry;
        if (item.rz) item.mesh.rotation.z += item.rz;

        if (item.orbit) {
          const angle = time * item.orbit.speed + item.orbit.offset;
          item.mesh.position.x = Math.cos(angle) * item.orbit.radius;
          item.mesh.position.z = Math.sin(angle) * item.orbit.radius;
          item.mesh.position.y = Math.sin(time * 2 + item.orbit.offset) * 0.3;
        }
      });

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
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeProjectId]);

  return (
    <div className="relative w-full h-72 sm:h-84 rounded-2xl bg-[#090a0f] border border-white/[0.08] overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing">
      {/* 3D Canvas */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Floating 3D Badge */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono-code text-[11px] text-zinc-300 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#d2ff00] animate-pulse" />
        <span>3D Architecture Model · Drag to Orbit</span>
      </div>
    </div>
  );
}

