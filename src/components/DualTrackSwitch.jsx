import React from 'react';
import { sound } from '../utils/sound';
import { Server, Award, Radio } from 'lucide-react';

export default function DualTrackSwitch({ activeTrack, onChangeTrack }) {
  return (
    <div className="w-full flex justify-center my-8 px-4">
      <div className="relative inline-flex p-1.5 rounded-2xl bg-[#0c0d12] border border-white/15 shadow-2xl">
        {/* On-Cluster Tab */}
        <button
          onClick={() => {
            sound.playToggle(true);
            onChangeTrack('on-cluster');
          }}
          className={`relative z-10 flex items-center gap-2.5 px-6 py-3 rounded-xl font-mono-code text-xs sm:text-sm font-extrabold tracking-wider transition-all uppercase ${
            activeTrack === 'on-cluster'
              ? 'bg-[#D2FF00] text-black shadow-neon-lime'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Server className={`w-4 h-4 ${activeTrack === 'on-cluster' ? 'text-black' : 'text-[#D2FF00]'}`} />
          <span>ON-CLUSTER // PRODUCTION AI</span>
          {activeTrack === 'on-cluster' && (
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          )}
        </button>

        {/* Off-Cluster Tab */}
        <button
          onClick={() => {
            sound.playToggle(false);
            onChangeTrack('off-cluster');
          }}
          className={`relative z-10 flex items-center gap-2.5 px-6 py-3 rounded-xl font-mono-code text-xs sm:text-sm font-extrabold tracking-wider transition-all uppercase ${
            activeTrack === 'off-cluster'
              ? 'bg-[#00F0FF] text-black shadow-[0_0_25px_rgba(0,240,255,0.4)]'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Award className={`w-4 h-4 ${activeTrack === 'off-cluster' ? 'text-black' : 'text-[#00F0FF]'}`} />
          <span>OFF-CLUSTER // CERTS & ARCH</span>
          {activeTrack === 'off-cluster' && (
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          )}
        </button>
      </div>
    </div>
  );
}

