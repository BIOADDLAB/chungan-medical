'use client';
export const dynamic = 'force-dynamic';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function UPulsePage() {
  return (
    <>
      {/* ① Hero Section (PICO-K Style) */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-[#020408]"
      >
        {/* 배경 이미지 레이어 */}
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 brightness-[0.5] contrast-[1.1]"
          alt="medical background"
        />
        {/* 그라디언트 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/30 via-transparent to-[#050810]/70 z-10" />
        {/* Tech Grid 오버레이 */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 mix-blend-screen z-10 pointer-events-none" />

        {/* 콘텐츠 */}
        <div className="relative z-20 flex flex-col items-center max-w-screen-xl mx-auto px-6 w-full">
          {/* 타이틀 */}
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tight uppercase leading-tight"
          >
            <span className="hero-title-main block md:inline">U - PULSE</span>
            <span className="hero-title-highlight ml-0 md:ml-4">DUAL</span>
          </motion.h1>

          {/* 부제 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-[2px] bg-primary mb-6 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
            <p className="text-slate-300 text-lg md:text-xl font-medium tracking-[0.2em] uppercase max-w-2xl">
              합리적인 피부미용 의료 장비, <span className="text-primary font-bold">그리고 최고의 선택</span>
            </p>
          </motion.div>
        </div>

        {/* 스크롤 유도 버튼 */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
          <Link
            href="#u-pulse-difference"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② U-Pulse Overview (PICO-K Style) */}
      <section id="u-pulse-difference" className="relative py-28 bg-[#020408] overflow-hidden">
        {/* 배경 장식: 테크 도트 및 블루 블러 */}
        <div className="absolute inset-0 bg-tech-dots opacity-20 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* 좌측: 텍스트 및 카드 (Revolutionary Header System) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* 배지 */}
              <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                U-Pulse Technology
              </div>

              {/* 타이틀 */}
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                <span className="hero-title-main">REVOLUTIONARY</span><br />
                <span className="hero-title-highlight">U - PULSE</span>
                <span className="hero-title-main"> TECHNOLOGY</span>
              </h2>
              <div className="w-20 h-[2px] bg-primary mb-8 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />

              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 max-w-xl">
                최첨단 High-Peak-Power 기술을 통해 피부 깊숙이 정밀한<br className="hidden md:block" />
                에너지를 전달하여 탁월한 치료 효과와 빠른 회복을 선사합니다.
              </p>

              {/* 특징 카드 그리드 (세로 리스트 배치) */}
              <div className="grid grid-cols-1 gap-4 max-w-lg">
                {[
                  {
                    label: 'Down Time',
                    title: '최소한의 Down Time',
                    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318z'
                  },
                  {
                    label: 'Recovery',
                    title: '빠른 회복',
                    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  },
                  {
                    label: 'Pain/Swelling',
                    title: '통증 및 붓기 최소화',
                    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  },
                  {
                    label: 'Spot Size',
                    title: '작은 스팟 (80-100um)',
                    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-panel p-5 flex items-center gap-6 hover:border-primary/50 transition duration-500 group cursor-default"
                  >
                    <div className="flex flex-col flex-shrink-0 items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-all duration-500">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                      </div>
                    </div>
                    <div className="w-[1px] h-8 bg-primary/20" />
                    <span className="text-xl font-bold text-white group-hover:text-primary transition">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 우측: 제품 이미지 (블루 네온 글로우 배경) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end relative"
            >
              <div className="relative group">
                {/* 배경 광채 */}
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-110 opacity-30 group-hover:opacity-50 transition duration-1000" />
                <img
                  src="images/machine/유펄스 사진.png"
                  className="max-w-full h-auto relative z-10 drop-shadow-[0_45px_100px_rgba(0,0,0,0.7)] group-hover:scale-[1.03] transition duration-1000 cursor-zoom-in"
                  alt="U-Pulse 장비"
                />

                {/* 하단 그림자 */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-black/40 blur-[40px] rounded-full translate-y-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ③ High-Peak-Power Pulsed Technology (Full Stable Container) */}
      <section id="u-pulse-tech" className="relative py-32 bg-[#020408] overflow-hidden">
        {/* 배경 장식 요소 */}
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          {/* 상단: 대형 타이틀 디자인 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col items-center"
          >
            {/* 배지 */}
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
              The Power of High-Peak
            </div>

            {/* 타이틀 */}
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-left">
              <span className="hero-title-main uppercase">REVOLUTIONARY</span><br />
              <span className="hero-title-highlight uppercase">HIGH - PEAK POWER</span>
            </h3>
            <div className="w-20 h-[2px] bg-primary mb-8" />
          </motion.div>

          {/* 중앙: 대형 펄스 그래프 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-7xl mx-auto aspect-[16/6] md:aspect-[21/9] overflow-visible mb-16 -mt-40"
          >
            <svg viewBox="0 0 1000 300" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="pulse-gradient-premium" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#00B7F1" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="#00B7F1" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00B7F1" stopOpacity="1" />
                </linearGradient>
                <filter id="point-glow-large">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <line x1="50" y1="230" x2="950" y2="230" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
              <line x1="50" y1="30" x2="50" y2="230" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
              <text x="35" y="45" className="fill-white/40 text-[12px] font-bold tracking-widest" textAnchor="end">W</text>
              <text x="145" y="25" className="fill-white font-black text-[14px] tracking-tight">100 W</text>

              {[...Array(6)].map((_, i) => (
                <motion.g key={i}>
                  <motion.path
                    d={`M ${120 + i * 140} 230 C ${150 + i * 140} 230 ${165 + i * 140} 40 ${185 + i * 140} 40 C ${205 + i * 140} 40 ${220 + i * 140} 230 ${250 + i * 140} 230`}
                    fill="url(#pulse-gradient-premium)"
                    stroke="#00B7F1"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.15 + 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="drop-shadow-[0_0_20px_rgba(0,183,241,0.4)] saturate-150"
                  />
                  <motion.circle
                    cx={185 + i * 140}
                    cy={40}
                    r="4"
                    fill="white"
                    filter="url(#point-glow-large)"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 1.5 }}
                    viewport={{ once: true }}
                  />
                </motion.g>
              ))}

              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
                viewport={{ once: true }}
              >
                <path d="M 680 255 L 820 255" stroke="white" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" />
                <path d="M 680 245 L 680 265 M 820 245 L 820 265" stroke="#00B7F1" strokeWidth="3" opacity="1" />
                <text x="750" y="295" className="fill-primary font-black text-[20px] tracking-tight" textAnchor="middle">100 ~ 200 us</text>
                <text x="750" y="320" className="fill-white/30 text-[12px] font-bold uppercase tracking-[0.4em]" textAnchor="middle">Duration</text>
              </motion.g>
            </svg>
          </motion.div>

          {/* 하단: 상세 정보 블록 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto -mt-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-panel p-12 relative overflow-hidden group border-primary/20"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[60px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
              <div className="relative z-10">
                <span className="text-primary/60 text-[11px] font-bold tracking-[0.4em] uppercase mb-4 block">Engineered Precision</span>
                <div className="flex flex-col gap-2">
                  <span className="text-white/40 text-lg font-medium tracking-tight">Peak Power</span>
                  <h4 className="text-[44px] md:text-[56px] font-black text-white tracking-tighter leading-none mb-4">
                    800 ~ 1000 W
                  </h4>
                  <div className="inline-flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-primary" />
                    <span className="text-[22px] font-bold text-primary tracking-tight uppercase">Ultra-Pulse</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="space-y-4">
                <p className="text-white text-xl md:text-2xl font-bold leading-snug tracking-tight">
                  유펄스는 <span className="text-primary">울트라펄스</span>와 높은 <br className="hidden md:block" />
                  <span className="text-primary">피크파워</span>를 통해 한 차원 높은 치료 경험을 제공합니다.
                </p>
                <div className="w-12 h-[1px] bg-white/20" />
                <p className="text-slate-400 text-lg md:text-[19px] leading-relaxed font-medium tracking-tight">
                  높은 피크파워는 주변 조직의 <span className="text-white">열 손상(Thermal Damage)</span>을 <br className="hidden md:block" />
                  최소화하여, 환자가 느끼는 통증은 줄이고 회복 속도는 <br className="hidden md:block" />
                  압도적으로 단축시키는 핵심 기술입니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Detail 02: Stable Ultra-Pulse Secret */}
      <section id="tech-social-secret" className="py-24 bg-[#0C111D] text-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
          {/* Revolutionary Header System (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 flex flex-col items-center"
          >
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
              Stable Tech Secret
            </div>

            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-10 text-center">
              <span className="hero-title-main">STABLE</span><br />
              <span className="hero-title-highlight uppercase">Ultra - Pulse</span>
            </h3>
            <div className="w-20 h-[2px] bg-primary mt-4 mb-14 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-5xl mx-auto text-left reveal-up">
            <div className="relative h-[480px] flex items-center justify-center">
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#257788]/50 to-transparent border border-white/10 -translate-y-24 backdrop-blur-md flex items-center justify-center">
                <span className="font-bold text-white/90 text-lg">파워보드</span>
              </div>
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-bl from-[#7D416D]/50 to-transparent border border-white/10 -translate-x-24 translate-y-20 backdrop-blur-md flex items-center justify-center">
                <span className="font-bold text-white/90 text-[17px] text-center leading-tight">
                  높은 파워의<br />글래스튜브
                </span>
              </div>
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#3B6B98]/50 to-transparent border border-white/10 translate-x-24 translate-y-20 backdrop-blur-md flex items-center justify-center">
                <span className="font-bold text-white/90 text-[17px] text-center leading-tight">
                  높은 볼트의<br />레귤레이터
                </span>
              </div>
              <div className="absolute w-24 h-24 bg-white/20 blur-[50px] rounded-full"></div>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                안정적인 울트라펄스
              </h3>
              <div className="text-lg md:text-xl font-medium leading-relaxed text-slate-400 space-y-2">
                <p>
                  SNJ만의 <span className="text-primary font-bold">파워보드, 높은 파워의 글래스 튜브,</span>
                  <br />
                  <span className="text-primary font-bold">높은 볼트의 레귤레이터</span> 3박자가 맞아 이루어 낸
                  <br />
                  타사와는 차별화 된 안정적인 울트라펄스
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Detail 03: Zoom Handpiece */}
      <section id="tech-zoom-handpiece" className="py-24 bg-[#0C111D] text-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal-up">
            <div className="space-y-4">
              {/* Revolutionary Header System */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12 flex flex-col items-start"
              >
                <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                  Precision Zoom
                </div>

                <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                  <span className="hero-title-main">VERSATILE</span><br />
                  <span className="hero-title-highlight uppercase">Zoom Handpiece</span>
                </h3>
                <div className="w-20 h-[2px] bg-primary mt-4 mb-10 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
              </motion.div>
              <div className="text-lg md:text-xl font-medium leading-relaxed text-slate-400">
                <p>1단계 (0.2mm) 부터 5단계</p>
                <p>(1.3mm) 까지 핸드피스 하나로</p>
                <p>다양한 스팟사이즈 변동 가능</p>
              </div>
            </div>

            <div className="relative w-full h-48 flex items-center justify-center">
              <svg viewBox="0 0 800 240" className="w-full h-auto">
                <defs>
                  <linearGradient id="laser-beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#E84A8A" />
                    <stop offset="100%" stopColor="#E84A8A" />
                  </linearGradient>
                </defs>

                <g transform="translate(40, 60)">
                  <path
                    d="M0,60 L140,60 L190,40 L340,40 L360,60 L360,100 L340,120 L190,120 L140,100 L0,100 Z"
                    fill="#1C2333"
                    stroke="#ffffff15"
                    strokeWidth="2"
                  />
                  <rect x="30" y="70" width="20" height="20" fill="#ffffff" opacity={0.1} />
                  <ellipse cx="160" cy="80" rx="8" ry="28" fill="#3B6B98" opacity={0.5} />
                  <ellipse cx="220" cy="80" rx="8" ry="28" fill="#3B6B98" opacity={0.5} />
                  <ellipse cx="280" cy="80" rx="8" ry="28" fill="#3B6B98" opacity={0.5} />
                  <line x1="80" y1="80" x2="360" y2="80" stroke="white" strokeWidth="1.2" opacity={0.6} />
                </g>

                <rect x="400" y="139.5" width="280" height="1.5" fill="url(#laser-beam-grad)" />

                <g transform="translate(680, 140)">
                  <circle cx="0" cy="0" r="80" stroke="white" strokeWidth="0.8" fill="none" opacity={0.1} />
                  <circle cx="0" cy="0" r="60" stroke="white" strokeWidth="0.8" fill="none" opacity={0.1} />
                  <circle cx="0" cy="0" r="40" stroke="white" strokeWidth="0.8" fill="none" opacity={0.1} />
                  <circle
                    cx="0"
                    cy="0"
                    r="20"
                    stroke="#00B7F1"
                    strokeWidth="1.5"
                    fill="#00B7F1"
                    fillOpacity="0.1"
                    opacity={0.5}
                  />

                  <line x1="-90" y1="0" x2="90" y2="0" stroke="white" strokeWidth="0.5" opacity={0.1} />
                  <line x1="0" y1="-90" x2="0" y2="90" stroke="white" strokeWidth="0.5" opacity={0.1} />

                  <text x="65" y="-65" fill="white" fontSize="16" fontWeight="bold" opacity={0.5}>
                    5단계
                  </text>
                  <text
                    x="0"
                    y="5"
                    fill="white"
                    fontSize="14"
                    fontWeight="bold"
                    textAnchor="middle"
                    opacity={0.9}
                  >
                    1단계
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Detail 04: Thermal-Free */}
      <section id="tech-thermal-free" className="py-24 bg-[#0C111D] text-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[26px] md:text-[32px] font-bold text-white mb-16 tracking-tight flex items-center reveal-up">
            <span className="w-1.5 h-1.5 rounded-full bg-white mr-4"></span>
            높은 출력만 가능한 Thermal-Free 멀티핀홀 기법
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto reveal-up">
            <div className="bg-[#1C2333]/40 rounded-xl p-8 border border-white/5 text-center shadow-inner">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[#252C3E] rounded-lg relative overflow-hidden">
                <svg viewBox="0 0 50 50" className="w-10 h-10" fill="none">
                  <line x1="12" y1="12" x2="12" y2="38" stroke="white" strokeWidth="1.5" opacity={0.3} />
                  <line x1="25" y1="12" x2="25" y2="38" stroke="white" strokeWidth="1.5" opacity={0.3} />
                  <line x1="38" y1="12" x2="38" y2="38" stroke="white" strokeWidth="1.5" opacity={0.3} />
                  <circle cx="12" cy="18" r="3.5" fill="#E84A8A" opacity={0.8} />
                  <circle cx="25" cy="32" r="3.5" fill="#E84A8A" opacity={0.8} />
                  <circle cx="38" cy="24" r="3.5" fill="#E84A8A" opacity={0.8} />
                  <circle cx="12" cy="18" r="3.5" fill="#E84A8A" className="blur-[3px]" />
                </svg>
              </div>
              <h4 className="text-[18px] font-bold mb-1 text-white/90">Easy Control</h4>
              <p className="text-[15px] text-white/40 font-medium">깊이 조절 가능</p>
            </div>

            <div className="bg-[#1C2333]/40 rounded-xl p-8 border border-white/5 text-center shadow-inner">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[#252C3E] rounded-lg relative">
                <svg viewBox="0 0 50 50" className="w-10 h-10" fill="none">
                  <rect
                    x="8"
                    y="8"
                    width="34"
                    height="34"
                    rx="3"
                    stroke="white"
                    strokeWidth="1.5"
                    opacity={0.3}
                  />
                  <path
                    d="M16,25 L22,31 L34,19"
                    stroke="#00B7F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16,25 L22,31 L34,19"
                    stroke="#00B7F1"
                    strokeWidth="2"
                    className="blur-[2px]"
                    opacity={0.6}
                  />
                </svg>
              </div>
              <h4 className="text-[18px] font-bold mb-1 text-white/90">표준화된 임상으로</h4>
              <p className="text-[15px] text-white/40 font-medium">쉽고 정확하게</p>
            </div>

            <div className="bg-[#1C2333]/40 rounded-xl p-8 border border-white/5 text-center shadow-inner">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[#252C3E] rounded-lg relative overflow-hidden">
                <svg viewBox="0 0 50 50" className="w-12 h-12" fill="none">
                  <circle cx="25" cy="22" r="13" stroke="white" strokeWidth="1.2" opacity={0.3} />
                  <path d="M15,20 Q25,12 35,20 M15,26 Q25,18 35,26" stroke="#E84A8A" strokeWidth="1.5" opacity={0.7} />
                  <path d="M25,30 V40 M21,36 L25,40 L29,36" stroke="white" strokeWidth="1.5" opacity={0.8} />
                </svg>
              </div>
              <h4 className="text-[18px] font-bold mb-1 text-white/90">Thermal Damage</h4>
              <p className="text-[15px] text-white/40 font-medium">없이 깊게</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Before & After */}
      <section id="u-pulse-before-after" className="py-24 bg-[#0C111D] text-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-[26px] md:text-[32px] font-bold text-white mb-16 tracking-tight flex items-center reveal-up">
            <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white mr-4"></span>
            Before & After
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-11 gap-y-20 lg:gap-x-8 px-2 md:px-0">
            <div className="lg:col-span-6 reveal-up">
              <div className="flex flex-col h-full w-full">
                <h4 className="text-[17px] md:text-[19px] font-bold mb-6 text-center text-white/90 shrink-0">
                  점 제거, 흉터 개선
                </h4>
                <div className="flex flex-col w-full flex-grow">
                  <div className="flex border border-white/10 rounded-sm overflow-hidden" style={{ background: '#131B2A' }}>
                    <div className="w-1/3 aspect-[4/5] bg-white/5 flex items-center justify-center border-r border-white/10">
                      <span className="text-white/10 font-bold text-[10px]">Image 1</span>
                    </div>
                    <div className="w-1/3 aspect-[4/5] bg-white/5 flex items-center justify-center border-r border-white/10">
                      <span className="text-white/10 font-bold text-[10px]">Image 2</span>
                    </div>
                    <div className="w-1/3 aspect-[4/5] bg-white/5 flex items-center justify-center">
                      <span className="text-white/10 font-bold text-[10px]">Image 3</span>
                    </div>
                  </div>
                  <div className="flex mt-auto pt-4 pb-1">
                    <div className="w-1/3 text-[14px] text-white/90 font-bold text-center">Before</div>
                    <div className="w-2/3 text-[14px] text-white/90 font-bold text-center">After</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-8 reveal-up">
              <div className="flex flex-col h-full w-full">
                <h4 className="text-[17px] md:text-[19px] font-bold mb-6 text-center text-white/90 shrink-0">
                  점, 검버섯 제거
                </h4>
                <div className="flex flex-col w-full flex-grow">
                  <div className="flex flex-col">
                    <div
                      className="aspect-[3/1] bg-white/5 rounded-sm border border-white/10 flex items-center justify-center"
                      style={{ background: '#131B2A' }}
                    >
                      <span className="text-white/10 font-bold text-[10px]">Image Slot</span>
                    </div>
                    <div className="text-[14px] text-white/90 font-bold text-center mt-3">Before</div>
                  </div>
                  <div className="flex flex-col mt-auto pt-6">
                    <div
                      className="aspect-[3/1] bg-white/5 rounded-sm border border-white/10 flex items-center justify-center"
                      style={{ background: '#131B2A' }}
                    >
                      <span className="text-white/10 font-bold text-[10px]">Image Slot</span>
                    </div>
                    <div className="text-[14px] text-white/90 font-bold text-center mt-3 pb-1">After</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-1 reveal-up">
              <h4 className="text-[17px] md:text-[19px] font-bold mb-6 text-center text-white/90">
                사마귀 제거
              </h4>
              <div className="flex flex-col w-full">
                <div className="flex border border-white/10 rounded-sm overflow-hidden" style={{ background: '#131B2A' }}>
                  <div className="w-1/2 aspect-square bg-white/5 flex items-center justify-center border-r border-white/10">
                    <span className="text-white/10 font-bold text-[10px]">Image Slot</span>
                  </div>
                  <div className="w-1/2 aspect-square bg-white/5 flex items-center justify-center">
                    <span className="text-white/10 font-bold text-[10px]">Image Slot</span>
                  </div>
                </div>
                <div className="flex mt-3">
                  <div className="w-1/2 text-[14px] text-white/90 font-bold text-center">Before</div>
                  <div className="w-1/2 text-[14px] text-white/90 font-bold text-center">After</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-7 reveal-up">
              <h4 className="text-[17px] md:text-[19px] font-bold mb-6 text-center text-white/90 tracking-tight">
                Congenital Melanocytic Nevus
              </h4>
              <div className="flex flex-col w-full">
                <div className="flex border border-white/10 rounded-sm overflow-hidden" style={{ background: '#131B2A' }}>
                  <div className="w-1/2 aspect-square bg-white/5 flex items-center justify-center border-r border-white/10">
                    <span className="text-white/10 font-bold text-[10px]">Image Slot</span>
                  </div>
                  <div className="w-1/2 aspect-square bg-white/5 flex items-center justify-center">
                    <span className="text-white/10 font-bold text-[10px]">Image Slot</span>
                  </div>
                </div>
                <div className="flex mt-3">
                  <div className="w-1/2 text-[14px] text-white/90 font-bold text-center">Before</div>
                  <div className="w-1/2 text-[14px] text-white/90 font-bold text-center">After</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Downtime Comparison */}
      <section id="u-pulse-downtime" className="py-24 bg-[#0C111D] text-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-4 gap-4 md:gap-8 reveal-up mb-6">
              <div className="col-span-3 grid grid-cols-3">
                <div className="text-center font-bold text-[17px] text-white/80">직후</div>
                <div className="text-center font-bold text-[17px] text-white/80">16h</div>
                <div className="text-center font-bold text-[17px] text-white/80">48h 경과</div>
              </div>
              <div className="col-span-1 flex items-end justify-center pb-2">
                <div className="font-bold text-[17px] text-white/80 shrink-0">Pulse 차이</div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 md:gap-8 items-stretch reveal-up mb-12">
              <div className="col-span-3 flex flex-col">
                <div className="grid grid-cols-3 bg-[#131B2A] rounded-t-sm border border-white/10">
                  <div className="aspect-[4/3] relative border-r border-white/10 flex items-center justify-center">
                    <span className="text-white/10 font-bold text-xs">Image Slot</span>
                  </div>
                  <div className="aspect-[4/3] relative border-r border-white/10 flex items-center justify-center">
                    <span className="text-white/10 font-bold text-xs">Image Slot</span>
                  </div>
                  <div className="aspect-[4/3] relative flex items-center justify-center">
                    <span className="text-white/10 font-bold text-xs">Image Slot</span>
                    <div className="absolute inset-x-[-1px] inset-y-[-1px] md:inset-x-[-2px] md:inset-y-[-2px] border-[3.5px] border-red-500 z-10 pointer-events-none shadow-[0_0_20px_rgba(239,68,68,0.2)]"></div>
                  </div>
                </div>
                <div className="bg-white/5 py-3 md:py-4 px-6 border-x border-b border-white/10 rounded-b-sm shadow-inner">
                  <span className="font-bold text-[17px] md:text-[19px] text-white/60">30W</span>
                </div>
              </div>
              <div
                className="col-span-1 flex items-center justify-center bg-white/5 rounded-sm border border-white/10 shadow-inner overflow-hidden w-full h-full min-h-[140px]"
                style={{ background: '#131B2A' }}
              >
                <span className="text-white/10 font-bold text-xs">Pulse Slot</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 md:gap-8 items-stretch reveal-up">
              <div className="col-span-3 flex flex-col">
                <div className="grid grid-cols-3 bg-[#131B2A] rounded-t-sm border border-white/10">
                  <div className="aspect-[4/3] relative border-r border-white/10 flex items-center justify-center">
                    <span className="text-white/10 font-bold text-xs">Image Slot</span>
                  </div>
                  <div className="aspect-[4/3] relative border-r border-white/10 flex items-center justify-center">
                    <span className="text-white/10 font-bold text-xs">Image Slot</span>
                  </div>
                  <div className="aspect-[4/3] relative flex items-center justify-center">
                    <span className="text-white/10 font-bold text-xs">Image Slot</span>
                    <div className="absolute inset-x-[-1px] inset-y-[-1px] md:inset-x-[-2px] md:inset-y-[-2px] border-[3.5px] border-red-500 z-10 pointer-events-none shadow-[0_0_20px_rgba(239,68,68,0.2)]"></div>
                  </div>
                </div>
                <div className="bg-white/5 py-3 md:py-4 px-6 border-x border-b border-white/10 rounded-b-sm shadow-inner">
                  <span className="font-bold text-[17px] md:text-[19px] text-white/90">100W</span>
                </div>
              </div>
              <div
                className="col-span-1 flex items-center justify-center bg-white/5 rounded-sm border border-white/10 shadow-inner overflow-hidden w-full h-full min-h-[140px]"
                style={{ background: '#131B2A' }}
              >
                <span className="text-white/10 font-bold text-xs">Pulse Slot</span>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-4 gap-4 md:gap-8 mt-6 mb-10 reveal-up">
            <div className="col-span-3 grid grid-cols-3">
              <div className="col-start-3 flex justify-center items-center">
                <h3 className="text-[22px] md:text-[28px] font-bold tracking-tight inline-flex items-center whitespace-nowrap">
                  <span className="text-[#E84A8A] mr-2">Less</span> <span className="text-white">Downtime</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Technical Specifications */}
      <section id="u-pulse-tech-specs" className="py-24 bg-[#0C111D] text-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16 reveal-up">
            <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight">
              Technical Specifications
            </h2>
          </div>

          <div className="max-w-5xl mx-auto border border-white/20 reveal-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/20">
              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-[1px] bg-white/20">
                <div className="bg-[#303540] py-4 md:py-5 px-3 flex items-center justify-center text-center font-bold text-[13px] md:text-[15px] text-white">
                  Wavelength
                </div>
                <div className="bg-[#0C111D] py-4 md:py-5 px-4 md:px-6 flex items-center font-bold text-[14px] md:text-[16px] text-white tracking-wide leading-snug whitespace-nowrap">
                  10,600nm
                </div>
              </div>
              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-[1px] bg-white/20">
                <div className="bg-[#303540] py-4 md:py-5 px-3 flex items-center justify-center text-center font-bold text-[13px] md:text-[15px] text-white">
                  Scan Shape
                </div>
                <div className="bg-[#0C111D] py-4 md:py-5 px-4 md:px-6 flex items-center font-bold text-[14px] md:text-[16px] text-white tracking-wide leading-snug whitespace-nowrap">
                  Square, Rectangle, Triangle, Circle
                </div>
              </div>

              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-[1px] bg-white/20">
                <div className="bg-[#303540] py-4 md:py-5 px-3 flex items-center justify-center text-center font-bold text-[13px] md:text-[15px] text-white">
                  Mode
                </div>
                <div className="bg-[#0C111D] py-4 md:py-5 px-4 md:px-6 flex items-center font-bold text-[14px] md:text-[16px] text-white tracking-wide leading-snug whitespace-nowrap">
                  FRX(Fractional) / CO2(Surgical)
                </div>
              </div>
              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-[1px] bg-white/20">
                <div className="bg-[#303540] py-4 md:py-5 px-3 flex items-center justify-center text-center font-bold text-[13px] md:text-[15px] text-white">
                  Scan Pattern
                </div>
                <div className="bg-[#0C111D] py-4 md:py-5 px-4 md:px-6 flex items-center font-bold text-[14px] md:text-[16px] text-white tracking-wide leading-snug whitespace-nowrap">
                  Standard, Alternate, Random, Scatter
                </div>
              </div>

              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-[1px] bg-white/20">
                <div className="bg-[#303540] py-4 md:py-5 px-3 flex items-center justify-center text-center font-bold text-[13px] md:text-[15px] text-white">
                  Max Power
                </div>
                <div className="bg-[#0C111D] py-4 md:py-5 px-4 md:px-6 flex items-center font-bold text-[14px] md:text-[16px] text-white tracking-wide leading-snug whitespace-nowrap">
                  100W
                </div>
              </div>
              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-[1px] bg-white/20">
                <div className="bg-[#303540] py-4 md:py-5 px-3 flex items-center justify-center text-center font-bold text-[13px] md:text-[15px] text-white">
                  Electrical
                </div>
                <div className="bg-[#0C111D] py-4 md:py-5 px-4 md:px-6 flex items-center font-bold text-[14px] md:text-[16px] text-white tracking-wide leading-snug whitespace-nowrap">
                  200-240VAC, 50/60Hz
                </div>
              </div>

              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-[1px] bg-white/20">
                <div className="bg-[#303540] py-4 md:py-5 px-3 flex items-center justify-center text-center font-bold text-[13px] md:text-[15px] text-white">
                  Scan Area
                </div>
                <div className="bg-[#0C111D] py-4 md:py-5 px-4 md:px-6 flex items-center font-bold text-[14px] md:text-[16px] text-white tracking-wide leading-snug whitespace-nowrap">
                  Up to 20x20mm
                </div>
              </div>
              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-[1px] bg-white/20">
                <div className="bg-[#303540] py-4 md:py-5 px-3 flex items-center justify-center text-center font-bold text-[13px] md:text-[15px] text-white">
                  Dimension
                </div>
                <div className="bg-[#0C111D] py-4 md:py-5 px-4 md:px-6 flex items-center font-bold text-[14px] md:text-[16px] text-white tracking-wide leading-snug whitespace-nowrap">
                  400(W) x 500(L) x 1500(H) mm
                </div>
              </div>

              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-[1px] bg-white/20">
                <div className="bg-[#303540] py-4 md:py-5 px-3 flex items-center justify-center text-center font-bold text-[13px] md:text-[15px] text-white">
                  Energy
                </div>
                <div className="bg-[#0C111D] py-4 md:py-5 px-4 md:px-6 flex items-center font-bold text-[14px] md:text-[16px] text-white tracking-wide leading-snug whitespace-nowrap">
                  5~300mJ
                </div>
              </div>
              <div className="grid grid-cols-[120px_1fr] md:grid-cols-[130px_1fr] gap-[1px] bg-white/20">
                <div className="bg-[#303540] py-4 md:py-5 px-3 flex items-center justify-center text-center font-bold text-[13px] md:text-[15px] text-white">
                  Weight
                </div>
                <div className="bg-[#0C111D] py-4 md:py-5 px-4 md:px-6 flex items-center font-bold text-[14px] md:text-[16px] text-white tracking-wide leading-snug whitespace-nowrap">
                  50kg (Max Weight: 60kg)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
