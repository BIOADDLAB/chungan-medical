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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-end">

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
              <div className="relative group lg:scale-[1.2] origin-bottom lg:translate-x-12 lg:translate-y-10 transition-all duration-1000">
                {/* 배경 수직 광채 (확대된 크기에 맞춰 범위 확장) */}
                <div className="absolute inset-y-0 -inset-x-20 bg-primary/10 blur-[120px] rounded-full opacity-40 group-hover:opacity-60 transition duration-1000" />

                {/* 하단 바닥 글로우 (더 크게 확장) */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-primary/20 blur-[80px] rounded-full scale-150 translate-y-8 opacity-50" />

                <img
                  src="/images/machine/유펄스 사진1.png"
                  className="max-w-full h-auto relative z-10 drop-shadow-[0_45px_100px_rgba(0,0,0,0.7)] group-hover:scale-[1.03] transition duration-1000 cursor-zoom-in"
                  alt="U-Pulse 장비"
                />

                {/* 하단 그림자 강화 */}
                <div className="absolute inset-x-0 bottom-0 h-8 bg-black/60 blur-[30px] rounded-full translate-y-6 opacity-80" />
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
                    transition={{ duration: 0.8, delay: i * 0.08 + 0.3, ease: "easeInOut" }}
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
                    transition={{ duration: 0.4, delay: i * 0.08 + 0.8 }}
                    viewport={{ once: true }}
                  />
                </motion.g>
              ))}

              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
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
              transition={{ duration: 0.8, delay: 1.5 }}
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
              transition={{ duration: 0.8, delay: 1.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="space-y-4">
                <p className="text-white text-xl md:text-2xl font-bold leading-snug tracking-tight">
                  유펄스는 <span className="text-primary">울트라펄스</span>와 높은 <br className="hidden md:block" />
                  <span className="text-primary">피크파워</span>를 통해 한 차원 높은 치료 경험을 제공합니다.
                </p>
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
      <section id="tech-social-secret" className="py-28 bg-[#050810] text-white overflow-hidden relative">
        {/* 테크 배경 텍스처 */}
        <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none" />
        <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10 flex flex-col items-center">
          {/* Revolutionary Header System (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col items-center"
          >
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
              Stable Tech Secret
            </div>

            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-center leading-tight">
              <span className="hero-title-main">STABLE</span><br />
              <span className="hero-title-highlight uppercase">Ultra - Pulse</span>
            </h3>
            <div className="w-20 h-[2px] bg-primary mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-5xl mx-auto">
            {/* 좌측: 벤다이어그램 시스템 (Overlapping Circle Venn Diagram) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative aspect-square w-full max-w-[440px] mx-auto flex items-center justify-center p-4 h-[440px]"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* 상단 원 (파워보드) */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="absolute top-4 w-[240px] h-[240px] rounded-full bg-gradient-to-b from-[#00B7F1]/40 to-[#00B7F1]/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mix-blend-screen shadow-[0_0_40px_rgba(0,183,241,0.1)]"
                >
                  <span className="font-bold text-white text-lg tracking-tighter">파워보드</span>
                </motion.div>

                {/* 좌측 하단 (글래스튜브) */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-4 left-0 w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-[#3B6B98]/40 to-[#3B6B98]/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mix-blend-screen shadow-[0_0_40px_rgba(59,107,152,0.1)]"
                >
                  <span className="font-bold text-white/90 text-center leading-tight tracking-tighter">
                    높은 파워의<br />글래스튜브
                  </span>
                </motion.div>

                {/* 우측 하단 (레귤레이터) */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="absolute bottom-4 right-0 w-[240px] h-[240px] rounded-full bg-gradient-to-tl from-[#00B7F1]/30 to-[#00B7F1]/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mix-blend-screen shadow-[0_0_40px_rgba(0,183,241,0.1)]"
                >
                  <span className="font-bold text-white/90 text-center leading-tight tracking-tighter">
                    높은 볼트의<br />레귤레이터
                  </span>
                </motion.div>

                {/* 중심 글로우 코어 */}
                <div className="absolute w-24 h-24 bg-primary/20 blur-[60px] rounded-full z-0" />
              </div>
            </motion.div>

            {/* 우측: 상세 기술 설명 (Technical Blueprint Style) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12 text-left"
            >
              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary shadow-[0_0_8px_rgba(0,183,241,0.6)] transition-all duration-500" />
                  <h5 className="text-white font-bold text-2xl">안정적인 울트라펄스</h5>
                </div>
                <p className="text-primary/70 text-[10px] font-bold mb-4 tracking-[0.2em] uppercase pl-4">Patent Registration: No.10-XXXXXX</p>
                <div className="space-y-4 pl-4 border-l border-white/5 group-hover:border-primary/30 transition-colors duration-500">
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">
                    SNJ만의 <span className="text-white font-bold">파워보드, 높은 파워의 글래스 튜브,<br className="hidden md:block" /> 높은 볼트의 레귤레이터</span> 3박자가 어우러진<br className="hidden md:block" />
                    안정적인 울트라펄스 기술입니다.
                  </p>
                  <p className="text-slate-500 text-base leading-relaxed">
                    타사와는 차별화된 균일한 에너지를 투광하여 <br className="hidden md:block" />
                    정교하고 일관적인 치료 효과를 실현합니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Detail 03: Zoom Handpiece */}
      <section id="tech-zoom-handpiece" className="py-28 bg-[#050810] text-white overflow-hidden relative border-t border-white/5">
        <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Revolutionary Header System */}
              <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                Precision Zoom
              </div>
              <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                <span className="hero-title-main uppercase leading-tight">VERSATILE</span><br />
                <span className="hero-title-highlight uppercase leading-tight">Zoom Handpiece</span>
              </h3>
              <div className="w-20 h-[2px] bg-primary mb-8" />
              <div className="text-lg md:text-xl font-medium leading-relaxed text-slate-400 space-y-2 pl-4 border-l border-white/5">
                <p>1단계 (0.2mm) 부터 5단계</p>
                <p>(1.3mm) 까지 핸드피스 하나로</p>
                <p>다양한 스팟사이즈 변동 가능</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center p-12 glass-panel bg-tech-dots/5 overflow-visible min-h-[320px]"
            >
              <svg viewBox="0 0 800 300" className="w-full h-auto overflow-visible">
                <defs>
                  <linearGradient id="laser-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="20%" stopColor="#00B7F1" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00B7F1" stopOpacity="1" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* 핸드피스 메인 케이싱 (Technical Cross-section) */}
                <g transform="translate(50, 100)">
                  {/* 바디 외곽선 */}
                  <path
                    d="M0,30 L160,30 L220,10 L380,10 L420,40 L420,60 L380,90 L220,90 L160,70 L0,70 Z"
                    fill="#1A1F2E"
                    stroke="#ffffff20"
                    strokeWidth="1.5"
                  />
                  {/* 내부 광학 경로 하이라이트 */}
                  <rect x="20" y="48" width="400" height="4" fill="#00B7F110" />

                  {/* 렌즈 시스템 (3개 뭉치) */}
                  <g className="opacity-80">
                    <ellipse cx="180" cy="50" rx="6" ry="25" fill="#00B7F140" stroke="#00B7F1" strokeWidth="1" />
                    <ellipse cx="240" cy="50" rx="6" ry="25" fill="#00B7F140" stroke="#00B7F1" strokeWidth="1" />
                    <ellipse cx="300" cy="50" rx="6" ry="25" fill="#00B7F140" stroke="#00B7F1" strokeWidth="1" />
                  </g>

                  {/* 앞단 노즐 포인트 */}
                  <rect x="420" y="42" width="10" height="16" fill="#4A5568" />
                </g>

                {/* 레이저 빔 발사 (Dynamic Beam) */}
                <line
                  x1="480" y1="150" x2="680" y2="150"
                  stroke="url(#laser-glow)"
                  strokeWidth="2"
                  filter="url(#glow)"
                  className="animate-pulse"
                />

                {/* 타겟 레티클 (Concentric Reticle) */}
                <g transform="translate(680, 150)">
                  {/* 십자선 */}
                  <line x1="-100" y1="0" x2="100" y2="0" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  <line x1="0" y1="-100" x2="0" y2="100" stroke="white" strokeWidth="0.5" opacity="0.2" />

                  {/* 다중 동심원 (1단계~5단계) */}
                  {[90, 70, 50, 30].map((r, i) => (
                    <circle key={i} cx="0" cy="0" r={r} stroke="white" strokeWidth="0.8" fill="none" opacity={0.15 - i * 0.03} />
                  ))}

                  {/* 1단계 핵심 타겟 */}
                  <circle cx="0" cy="0" r="15" stroke="#00B7F1" strokeWidth="2" fill="#00B7F120" filter="url(#glow)" />

                  {/* 지표 텍스트 */}
                  <text x="70" y="-70" fill="white" fontSize="12" fontWeight="bold" opacity="0.4" className="tracking-tighter">5단계</text>
                  <text x="0" y="4" fill="white" fontSize="11" fontWeight="extrabold" textAnchor="middle" filter="url(#glow)">1단계</text>

                  {/* 눈금선 가이드 */}
                  <line x1="0" y1="0" x2="65" y2="-65" stroke="white" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.3" />
                </g>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Detail 04: Thermal-Free Multi-Pinhole */}
      <section id="tech-thermal-free" className="py-28 bg-[#050810] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-tech-dots opacity-5 pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col items-center"
          >
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
              Advanced Technique
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
              <span className="hero-title-main">높은 출력만 가능한</span><br />
              <span className="hero-title-highlight uppercase">Thermal-Free 멀티핀홀 기법</span>
            </h3>
            <div className="w-20 h-[2px] bg-primary" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Easy Control */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-panel p-10 flex flex-col items-center group hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-20 h-20 mb-8 flex items-center justify-center bg-white/5 rounded-2xl relative overflow-hidden group-hover:bg-white/10 transition-colors duration-500">
                <svg viewBox="0 0 40 40" className="w-16 h-16">
                  <g stroke="#00B7F1" strokeWidth="1.5" fill="none">
                    <line x1="10" y1="5" x2="10" y2="35" opacity="0.3" />
                    <line x1="20" y1="5" x2="20" y2="35" opacity="0.3" />
                    <line x1="30" y1="5" x2="30" y2="35" opacity="0.3" />
                    <circle cx="10" cy="15" r="3" fill="#00B7F1" />
                    <circle cx="20" cy="25" r="3" fill="#00B7F1" />
                    <circle cx="30" cy="10" r="3" fill="#00B7F1" />
                  </g>
                </svg>
                <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-white font-bold text-xl mb-1">Easy Control</h4>
              <p className="text-slate-400 text-sm font-medium">깊이 조절 가능</p>
            </motion.div>

            {/* Card 2: Clinical Normalization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-10 flex flex-col items-center group hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-20 h-20 mb-8 flex items-center justify-center bg-white/5 rounded-2xl relative overflow-hidden group-hover:bg-white/10 transition-colors duration-500">
                <svg viewBox="0 0 40 40" className="w-16 h-16">
                  <rect x="8" y="8" width="24" height="24" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
                  <path d="M12,20 L18,26 L28,14" stroke="#00B7F1" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-white font-bold text-xl mb-1">표준화된 임상으로</h4>
              <p className="text-slate-400 text-sm font-medium">쉽고 정확하게</p>
            </motion.div>

            {/* Card 3: Thermal Damage Zero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-10 flex flex-col items-center group hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-20 h-20 mb-8 flex items-center justify-center bg-white/5 rounded-2xl relative overflow-hidden group-hover:bg-white/10 transition-colors duration-500">
                <svg viewBox="0 0 40 40" className="w-16 h-16">
                  <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="1.2" fill="none" opacity="0.3" />
                  <path d="M10,18 Q15,14 20,18 T30,18" stroke="#FB7185" strokeWidth="1.5" fill="none" />
                  <path d="M10,24 Q15,20 20,24 T30,24" stroke="#00B7F1" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <path d="M20,10 L20,30 M15,25 L20,30 L25,25" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
                <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-white font-bold text-xl mb-1">Thermal Damage</h4>
              <p className="text-slate-400 text-sm font-medium">없이 깊게</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Before & After - Tech Enhanced */}
      <section id="u-pulse-before-after" className="py-28 bg-[#020408] text-white overflow-hidden relative">
        {/* Tech Decor Background */}
        <div className="absolute inset-0 bg-tech-dots opacity-20 mix-blend-screen pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* Header section with Tech Label - Exact Match to PICO-K TECH 01 */}
          <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
            <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase">CLINICAL DATA</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              className="h-[1px] w-[500%] bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none shadow-[0_0_15px_rgba(0,183,241,0.2)]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-14 text-left"
          >
            <div className="mb-0">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                <span className="hero-title-main">BEFORE & </span>
                <span className="hero-title-highlight uppercase">AFTER</span>
              </h2>
            </div>
          </motion.div>


          {/* Grid Layout (Restored 6:4:5:5 structure with premium tech styling) */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-y-24 lg:gap-x-12 px-2 md:px-0">

            {/* Case 1: 점 제거, 흉터 개선 (6 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-6 group"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,183,241,0.8)] animate-pulse" />
                  <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase">CS_01</span>
                </div>
                <span className="h-px w-16 bg-gradient-to-r from-primary/40 to-transparent"></span>
              </div>
              <h4 className="text-2xl font-black mb-8 text-white tracking-tight group-hover:text-primary transition-colors duration-500">
                점 제거, 흉터 개선
              </h4>
              <div className="relative glass-panel-dark overflow-hidden border-[#ffffff15] group-hover:border-primary/50 transition-all duration-700 shadow-2xl">
                <div className="absolute inset-0 bg-tech-grid opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="grid grid-cols-3 relative">
                  {[1, 2, 3].map((idx) => (
                    <div key={idx} className="aspect-[4/5] border-r border-white/10 last:border-none flex items-center justify-center relative overflow-hidden group/slot">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/slot:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-2 left-2 text-[8px] font-black text-white/20 tracking-widest uppercase">POS_0{idx}</div>
                      <span className="text-white/10 font-bold text-[10px] tracking-[0.4em] uppercase z-10 group-hover:text-primary/40 transition-all duration-500 group-hover:scale-110">Image Data</span>
                      {/* Corner Accents for Slot */}
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10" />
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex mt-8 px-4 justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-lg font-black text-white/40 tracking-[0.1em] uppercase group-hover:text-white/60 transition-colors">Before Treatment</span>
                </div>
                <div className="w-12 h-px bg-primary/30 mb-2"></div>
                <div className="flex flex-col text-right">
                  <span className="text-lg font-black text-primary tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(0,183,241,0.2)]">After Result</span>
                </div>
              </div>
            </motion.div>

            {/* Case 2: 점, 검버섯 제거 (4 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-11 lg:mt-0 xl:col-span-4 xl:col-start-8 group"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,183,241,0.8)] animate-pulse" />
                  <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase">CS_02</span>
                </div>
                <span className="h-px w-16 bg-gradient-to-r from-primary/40 to-transparent"></span>
              </div>
              <h4 className="text-2xl font-black mb-8 text-white tracking-tight group-hover:text-primary transition-colors duration-500">
                점, 검버섯 제거
              </h4>
              <div className="flex flex-col gap-10">
                <div className="relative glass-panel-dark aspect-[3/1] border-[#ffffff15] group-hover:border-primary/40 transition-all duration-700 overflow-hidden flex items-center justify-center group/slot shadow-lg">
                  <div className="absolute inset-0 bg-tech-dots opacity-15" />
                  <span className="text-white/10 font-bold text-[10px] tracking-[0.4em] uppercase z-10 group-hover/slot:text-white/30 transition-colors">Pre-Condition</span>
                  <div className="absolute top-0 right-0 p-3 text-[9px] font-black text-white/30 uppercase tracking-[0.2em] border-l border-b border-white/10 bg-white/5">Raw Scan</div>
                  <div className="absolute bottom-0 left-0 w-8 h-px bg-white/20"></div>
                </div>
                <div className="relative glass-panel-dark aspect-[3/1] border-primary/30 bg-primary/5 group-hover:border-primary transition-all duration-700 overflow-hidden flex items-center justify-center shadow-[0_0_40px_rgba(0,183,241,0.1)] group/slot">
                  <div className="absolute inset-0 bg-tech-dots opacity-20" />
                  <span className="text-primary/40 font-bold text-[10px] tracking-[0.4em] uppercase z-10 group-hover/slot:text-primary group-hover/slot:scale-110 transition-all duration-500">Post-Optimize</span>
                  <div className="absolute top-0 right-0 p-3 text-[9px] font-black text-primary/60 uppercase tracking-[0.2em] border-l border-b border-primary/20 bg-primary/10">Result</div>
                  <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-primary animate-pulse"></div>
                </div>
              </div>
            </motion.div>

            {/* Case 3: 사마귀 제거 (5 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-5 group"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase">CS_03</span>
                </div>
                <div className="flex-1 mx-6 h-[1px] bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>
              <h4 className="text-2xl font-black mb-8 text-white tracking-tight group-hover:text-primary transition-colors duration-500">
                사마귀 제거
              </h4>
              <div className="relative glass-panel-dark overflow-hidden border-[#ffffff15] group-hover:border-primary/50 transition-all duration-700 shadow-xl">
                <div className="absolute inset-0 bg-tech-grid opacity-15" />
                <div className="grid grid-cols-2 relative h-full">
                  <div className="aspect-square border-r border-white/10 flex items-center justify-center relative group/slot overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/slot:opacity-100 transition-opacity" />
                    <span className="text-white/10 font-bold text-[10px] tracking-[0.4em] uppercase z-10 group-hover/slot:text-white/30 transition-colors">Before</span>
                    <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/10" />
                  </div>
                  <div className="aspect-square flex items-center justify-center relative group/slot overflow-hidden bg-primary/5">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/slot:opacity-100 transition-opacity" />
                    <span className="text-primary/40 font-bold text-[10px] tracking-[0.4em] uppercase z-10 group-hover/slot:text-primary transition-all group-hover/slot:scale-110">After Match</span>
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-primary/30" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case 4: CMN (5 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:col-start-7 group"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,183,241,0.8)] animate-pulse" />
                  <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase">CS_04</span>
                </div>
                <div className="flex-1 mx-6 h-[1px] bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>
              <h4 className="text-2xl font-black mb-8 text-white tracking-tight uppercase group-hover:text-primary transition-colors duration-500">
                Congenital Melanocytic Nevus
              </h4>
              <div className="relative glass-panel-dark overflow-hidden border-[#ffffff15] group-hover:border-primary/50 transition-all duration-700 shadow-xl">
                <div className="absolute inset-0 bg-tech-dots opacity-15" />
                <div className="grid grid-cols-2 relative h-full">
                  <div className="aspect-square border-r border-white/10 flex items-center justify-center relative group/slot overflow-hidden">
                    <span className="text-white/10 font-bold text-[10px] tracking-[0.4em] uppercase z-10">Initial</span>
                    <div className="absolute top-0 left-0 w-full h-full bg-tech-grid opacity-5" />
                  </div>
                  <div className="aspect-square flex items-center justify-center relative group/slot overflow-hidden bg-primary/5 border-l border-primary/10">
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20" />
                    <span className="text-primary/40 font-bold text-[10px] tracking-[0.4em] uppercase z-10 group-hover/slot:text-primary transition-all">Cleared Result</span>
                    <div className="absolute top-3 right-3 text-[8px] font-black text-primary/40">VERIFIED</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Section: Downtime Comparison */}
      <section id="u-pulse-downtime" className="py-28 bg-[#050810] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-14 flex flex-col items-center"
          >
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
              Efficiency Test
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-center">
              <span className="hero-title-main">LESS</span> <span className="hero-title-highlight">DOWNTIME</span>
            </h3>
            <div className="w-20 h-[2px] bg-primary mb-8" />
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* 30W Row */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-2 text-center lg:text-left">
                <span className="text-3xl font-black text-white/20 tracking-tighter">30W</span>
                <p className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase mt-1">Output Level</p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-3 gap-3">
                {["Immediate", "16H", "48H"].map((label, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="aspect-[4/3] bg-white/5 border border-white/5 rounded-sm flex items-center justify-center relative group overflow-hidden">
                      <span className="text-primary/10 font-bold text-[10px] tracking-widest uppercase">Img_{idx + 1}</span>
                      {idx === 2 && <div className="absolute inset-0 border-2 border-primary/30 z-10 pointer-events-none" />}
                    </div>
                    <p className="text-center text-[10px] font-bold text-slate-400 tracking-widest uppercase">{label}</p>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-2 h-full">
                <div className="h-full min-h-[100px] flex flex-col items-center justify-center bg-primary/5 border border-primary/20 rounded-sm p-4">
                  <div className="w-6 h-6 border border-primary/40 rounded-full flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  </div>
                  <span className="text-[10px] font-black text-primary tracking-widest uppercase">Pulse Analysing</span>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            {/* 100W Row (Fast Recovery) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-2 text-center lg:text-left">
                <span className="text-3xl font-black text-primary tracking-tighter">100W</span>
                <p className="text-[10px] font-bold text-primary/60 tracking-[0.3em] uppercase mt-1">High-Peak</p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-3 gap-3">
                {["Immediate", "16H", "48H"].map((label, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="aspect-[4/3] bg-white/5 border border-white/5 rounded-sm flex items-center justify-center relative group overflow-hidden">
                      <span className="text-primary/10 font-bold text-[10px] tracking-widest uppercase">Img_{idx + 1}</span>
                      {idx === 2 && <div className="absolute inset-0 border-2 border-primary animate-pulse z-10 pointer-events-none" />}
                    </div>
                    <p className="text-center text-[10px] font-bold text-slate-400 tracking-widest uppercase">{label}</p>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-2 h-full">
                <div className="h-full min-h-[100px] flex flex-col items-center justify-center bg-primary/10 border border-primary/40 rounded-sm p-4 shadow-[0_0_20px_rgba(0,183,241,0.1)]">
                  <div className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center mb-2 shadow-[0_0_10px_rgba(0,183,241,0.5)]">
                    <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(0,183,241,1)]" />
                  </div>
                  <span className="text-[10px] font-black text-white tracking-widest uppercase">Fast Recovery</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Technical Specifications - Orchestration Compliant */}
      <section id="u-pulse-tech-specs" className="py-28 bg-[#020408] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-14 flex flex-col items-center text-center"
          >
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">
              SPECIFICATIONS
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase leading-tight">
              TECHNICAL <span className="text-primary font-black">DETAILS</span>
            </h3>
            <div className="w-20 h-[2px] bg-primary mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-panel p-0 overflow-hidden border-primary/20 bg-primary/[0.02] shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {[
                { label: 'WAVELENGTH', value: '10,600nm' },
                { label: 'SCAN SHAPE', value: 'Square, Rectangle, Triangle, Circle' },
                { label: 'MODE', value: 'FRX (Fractional) / CO2 (Surgical)' },
                { label: 'SCAN PATTERN', value: 'Standard, Alternate, Random, Scatter' },
                { label: 'MAX POWER', value: '100W' },
                { label: 'ELECTRICAL', value: '200-240VAC, 50/60Hz' },
                { label: 'SCAN AREA', value: 'Up to 20x20mm' },
                { label: 'DIMENSION', value: '400(W) x 500(L) x 1500(H) mm' },
                { label: 'ENERGY', value: '5 ~ 300mJ' },
                { label: 'WEIGHT', value: '50kg (Max Weight: 60kg)' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-stretch border-b border-white/5 last:border-b-0 ${idx % 2 === 0 ? 'md:border-r' : ''} group hover:bg-white/[0.01] transition-colors`}
                >
                  <div className="w-32 md:w-36 lg:w-40 bg-white/[0.03] py-5 px-5 flex items-center shrink-0 border-r border-white/5">
                    <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-primary/70 group-hover:text-primary transition-colors uppercase leading-none whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-grow py-5 px-5 md:px-6 flex items-center overflow-x-auto no-scrollbar">
                    <span className="text-sm md:text-base font-black text-slate-200 tracking-tight whitespace-nowrap group-hover:text-white transition-colors">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}

            </div>

            <div className="absolute bottom-4 right-6 opacity-[0.05] pointer-events-none select-none">
              <span className="text-[40px] md:text-[60px] font-black italic tracking-tighter text-primary/30 leading-none">U-PULSE</span>
            </div>
          </motion.div>
        </div>
      </section>


    </>
  );
}
