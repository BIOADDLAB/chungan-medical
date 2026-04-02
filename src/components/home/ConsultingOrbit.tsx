'use client';

import { motion } from 'framer-motion';

export default function ConsultingOrbit() {
  return (
    <section id="consulting" className="consulting-section items-center flex flex-col pt-12 pb-16 relative overflow-hidden bg-[#020408]">
      {/* Background Decorative Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-tech-grid opacity-10 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 w-full text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
            Service Protocol
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-black mb-6 tracking-tight">
            <span className="hero-title-main">병의원 개원컨설팅</span> / <span className="hero-title-highlight">TURN-KEY</span>
          </h2>
          <div className="w-20 h-[2px] bg-primary mx-auto mb-8 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
          <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            청안의 원팀 서비스는 원장님의 불안 요소를 줄이고<br />
            <span className="text-white">시간 가치는 극대화</span>해 드리는 정밀 솔루션입니다.
          </p>
        </motion.div>

        {/* Orbit Diagram Container (HUD Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="consulting-diagram-wrap relative mx-auto flex justify-center items-center"
        >
          {/* Central Logo: CN+ Tech Style */}
          <div className="consulting-center-logo z-10 transition-transform duration-500 hover:scale-105">
            <div className="cn-plus-symbol">
              <svg viewBox="0 0 120 120" className="w-20 h-20 drop-shadow-[0_0_15px_rgba(0,183,241,0.5)]">
                <path d="M85,35 C85,20 60,15 45,20 C30,25 20,45 20,60 C20,75 35,95 55,90" fill="none" stroke="#00B7F1" strokeWidth="10" strokeLinecap="round" />
                <path d="M55,35 L55,85" fill="none" stroke="#00B7F1" strokeWidth="10" strokeLinecap="round" />
                <circle cx="100" cy="35" r="14" fill="#00B7F1" />
                <path d="M100,28 v14 M93,35 h14" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* HUD Orbiting Circles */}
          <div className="consulting-orbit-path"></div>
          <div className="orbit-items-wrap">
            <div className="orbit-item item-1">
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-primary opacity-50" />
              <span>병의원 전문<br /><strong className="text-primary">MSO 운영/관리</strong></span>
            </div>
            <div className="orbit-item item-2">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-primary opacity-50" />
              <span>국 · 내외<br /><strong className="text-primary">환자유치</strong></span>
            </div>
            <div className="orbit-item item-3">
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-primary opacity-50" />
              <span>병의원 전문<br /><strong className="text-primary">온라인 마케팅</strong></span>
            </div>
            <div className="orbit-item item-4">
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-primary opacity-50" />
              <span>병의원 전문<br /><strong className="text-primary">인테리어</strong></span>
            </div>
            <div className="orbit-item item-5">
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-primary opacity-50" />
              <span>병의원 전문<br /><strong className="text-primary">세무사/노무사</strong></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
