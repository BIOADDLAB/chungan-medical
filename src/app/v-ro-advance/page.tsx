'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function VRoAdvancePage() {
  return (
    <main className="bg-[#050810] min-h-screen lowercase-titles overflow-x-hidden">
      {/* ① Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-[#050810]"
      >
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 brightness-[0.5] contrast-[1.1]"
          alt="medical background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/30 via-transparent to-[#050810]/70 z-10" />
        <div className="absolute inset-0 bg-tech-grid opacity-30 mix-blend-screen z-10 pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center max-w-screen-xl mx-auto px-6 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tight uppercase leading-tight text-white"
          >
            <span className="hero-title-main block md:inline">V-RO - </span>
            <span className="hero-title-highlight ml-0 md:ml-4">ADVANCE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-[2px] bg-primary mb-6 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
            <p className="text-slate-300 text-lg md:text-xl font-medium tracking-[0.2em] uppercase max-w-3xl">
              합리적인 피부미용 의료 장비, <span className="text-primary font-bold">그리고 최고의 선택</span>
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center text-white">
          <Link
            href="#overview"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② + ③ MERGED: V-RO Lifting Solution × Hybrid Core System */}
      <section id="overview" className="relative py-28 bg-[#050810] overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-8 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-primary/[0.04] blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">

          {/* 제목 블록 (PICO-K 황금표준 스타일 - 요청에 따라 간격 타이트하게 조정) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-col items-center text-center"
          >
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-5 bg-primary/5 leading-none">
              Advanced Lifting Solution
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">
              <span className="hero-title-main">고주파 + 하이푸</span><br />
              <span className="hero-title-highlight">V-RO</span>
              <span className="hero-title-main"> ADVANCE</span>
            </h2>
            <div className="w-20 h-[2px] bg-primary mb-6" />
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
              혁신적인 고주파와 하이푸의 결합으로
              리프팅의 새로운 기준을 제시합니다.
            </p>
          </motion.div>

          {/* 메인 콘텐츠: 좌측(HLA 카드) + 중앙(머신 이미지) + 우측(TECH 02 기능) */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center leading-none">

            {/* 좌측: HLA 핵심 기능 카드 */}
            <div className="lg:col-span-3 order-2 lg:order-1 w-full space-y-4 leading-none">
              <div className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase py-1 border-b border-primary/20 mb-6 leading-none">
                convenience
              </div>
              {[
                { id: 'H', title: '총 5개의 핸드피스', desc: '하나의 장비로 다양한 시술 가능' },
                { id: 'L', title: '핸드피스 서브 LCD', desc: '본체 조작 없이 정밀한 제어' },
                { id: 'A', title: '핸드피스 자동 인식', desc: 'GUI 자동 변경 스마트 시스템' }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-panel p-5 border-l-2 border-l-primary/30 group hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2 leading-none">
                    <span className="text-primary text-xl font-black font-inter leading-none">{feature.id}</span>
                    <h4 className="text-white text-sm font-black tracking-tighter uppercase leading-none">{feature.title}</h4>
                  </div>
                  <p className="text-slate-500 text-xs font-bold tracking-tighter leading-tight break-keep">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* 중앙: 머신 이미지 (하단 페이드 & 로고 추가) */}
            <div className="lg:col-span-6 relative flex flex-col items-center order-1 lg:order-2 w-full pt-10">
              {/* 배경 장식 로고 (Behind Machine - Image Based) */}
              <div className="absolute bottom-[2%] z-0 text-center pointer-events-none w-full flex justify-center">
                <img
                  src="images/machine/브이로어드밴스 로고.png"
                  alt="V-RO Logo Background"
                  className="w-full max-w-[300px]"
                />
              </div>

              {/* 머신 이미지 (하단 마스킹 페이드 - 더 공격적으로 희미하게 조정) */}
              <div className="relative z-10 w-full max-w-[420px] h-[630px] [mask-image:linear-gradient(to_bottom,black_50%,transparent_85%)]">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  src="images/machine/브이로어드밴스 사진.png"
                  alt="V-RO Advance Core"
                  className="w-full"
                />
              </div>
            </div>

            {/* 우측 TECH 02: Safety & TIS */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-10 order-3 w-full text-left leading-none flex flex-col justify-center"
            >
              {/* Safety Sensors */}
              <div className="space-y-5">
                <div className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase py-1 border-b border-primary/20 leading-none">SAFETY SENSORS</div>
                {[
                  { title: '접촉 감지 센서', desc: '밀착 시에만 에너지 활성화' },
                  { title: '이동 감지 센서', desc: '정지 시 조사 자동 차단' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group leading-none"
                  >
                    <h5 className="text-white font-black text-sm mb-1.5 tracking-tighter group-hover:text-primary transition-colors leading-none">{item.title}</h5>
                    <p className="text-slate-500 text-xs font-bold tracking-tighter leading-tight break-keep">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* TIS System */}
              <div className="space-y-5">
                <div className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase py-1 border-b border-primary/20 leading-none">TIS SYSTEM</div>
                {[
                  { title: 'Treatment History', desc: '시술 통계 및 패턴 자동 기록' },
                  { title: 'Clinical Intelligence', desc: '개별 맞춤형 시술 데이터 제공' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group leading-none"
                  >
                    <h5 className="text-white font-black text-sm mb-1.5 tracking-tighter group-hover:text-primary transition-colors leading-none">{item.title}</h5>
                    <p className="text-slate-500 text-xs font-bold tracking-tighter leading-tight break-keep">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* 수직 구분 라인 + 통합 슬로건 */}
              <div className="glass-panel p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none" />
                <p className="text-slate-400 text-xs font-bold tracking-tighter break-keep leading-relaxed relative z-10">
                  단 하나의 시스템으로<br />
                  <span className="text-primary font-black">고주파 × 하이푸의 완전한 시너지</span>를<br />
                  실현합니다
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="rm-mechanism" className="py-28 bg-[#050810] relative overflow-hidden border-t border-white/5 leading-none">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10 leading-none">
          {/* Header Title Area (PICO-K Style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center flex flex-col items-center"
          >
            {/* 배지 */}
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">
              HANDPIECE
            </div>

            {/* 타이틀 */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase font-inter leading-tight">
              <span className="hero-title-main">MULTI & </span>
              <span className="hero-title-highlight drop-shadow-[0_0_10px_rgba(0,183,241,0.3)]">MICRO</span>
            </h2>

            {/* 밑줄 */}
            <div className="w-20 h-[2px] bg-primary mb-8 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />

            {/* 설명 */}
            <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-xl break-keep drop-shadow-md text-center">
              RM 핸드피스로 <span className="text-primary font-bold">피부 속까지 전달하는 RF 에너지</span>를 구현합니다.
            </p>
          </motion.div>

          {/* Main Visual & Texts (Top) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center leading-none mb-16">

            {/* Left: Main Handpiece Tip Image Space */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 bg-white/[0.02] rounded-[32px] border border-white/10 hover:border-[#00B7F1]/50 hover:shadow-[0_0_30px_rgba(0,183,241,0.2)] transition-all duration-500 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl p-4 lg:p-6"
            >
              <div className="absolute inset-0 bg-tech-grid opacity-10" />
              <div className="w-24 h-24 bg-primary/10 blur-[40px] rounded-full group-hover:scale-[1.5] transition-transform duration-1000" />

              {/* 실제 이미지 */}
              <div className="relative z-10 w-full h-[180px] md:h-[200px] flex items-center justify-center">
                <img
                  src="/images/vro_advance/micro.png"
                  alt="V-RO Advance Micro Tip"
                  className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-165 transition-transform duration-500 scale-150 -mt-25"
                />
              </div>
            </motion.div>

            {/* Right: Technical Texts */}
            <div className="lg:col-span-6 flex flex-col justify-center gap-5 lg:pl-10">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[#050810] relative overflow-hidden rounded-[24px] border border-white/5 p-7 flex flex-col justify-center group hover:border-[#00B7F1]/30 transition-all duration-500 shadow-2xl w-full max-w-lg"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00B7F1]/5 blur-[30px] rounded-full transition-all duration-500 group-hover:bg-[#00B7F1]/10 group-hover:scale-150" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00B7F1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#00B7F1]/10 flex items-center justify-center border border-[#00B7F1]/20 shadow-[0_0_15px_rgba(0,183,241,0.1)]">
                    <span className="text-[#00B7F1] text-xs font-black tracking-widest">01</span>
                  </div>
                  <h4 className="text-xs border-b border-[#00B7F1]/30 pb-0.5 font-black tracking-widest text-[#00B7F1] uppercase">0.25Φ Microneedle</h4>
                </div>

                <h3 className="text-white text-xl lg:text-2xl font-bold mb-3 tracking-tighter leading-tight relative z-10 break-keep">
                  얇게 가공된 Microneelde 사용으로 정밀하게
                </h3>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#050810] relative overflow-hidden rounded-[24px] border border-white/5 p-7 flex flex-col justify-center group hover:border-[#D8B490]/50 transition-all duration-500 shadow-2xl w-full max-w-lg"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D8B490]/5 blur-[30px] rounded-full transition-all duration-500 group-hover:bg-[#D8B490]/10 group-hover:scale-150" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D8B490]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#D8B490]/10 flex items-center justify-center border border-[#D8B490]/30 shadow-[0_0_15px_rgba(216,180,144,0.1)]">
                    <span className="text-[#D8B490] text-xs font-black tracking-widest">02</span>
                  </div>
                  <h4 className="text-xs border-b border-[#D8B490]/40 pb-0.5 font-black tracking-widest text-[#D8B490] uppercase">Gold Plating</h4>
                </div>

                <h3 className="text-white text-xl lg:text-2xl font-bold mb-3 tracking-tighter leading-tight relative z-10 break-keep">
                  Gold Plating Microneedle 사용 에너지 절연               </h3>
              </motion.div>
            </div>
          </div>

          {/* Type Diagrams (Bottom) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto w-full">
            {/* INSULATED SECTION (LEFT) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 lg:gap-8"
            >
              {/* Depth Diagram */}
              <div className="relative overflow-hidden rounded-[24px] border-2 border-[#00B7F1]/30 bg-white flex items-center justify-center p-3 lg:p-5 h-[200px] lg:h-[250px]">
                <img src="/images/vro_advance/insulated.png" alt="Insulated Depth Diagram" className="w-[105%] max-w-full object-cover hover:scale-[1.02] transition-transform duration-700" />
              </div>

              {/* Type Tips */}
              <div className="relative p-6 lg:p-8 rounded-[24px] border-2 border-[#00B7F1]/30 bg-gradient-to-b from-[#00B7F1]/5 to-transparent flex flex-col items-center justify-center mt-2">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#050810] px-4 py-1">
                  <h5 className="text-[#00B7F1] text-base lg:text-lg font-black uppercase tracking-widest whitespace-nowrap drop-shadow-[0_0_10px_rgba(0,183,241,0.5)]">
                    INSULATED Type
                  </h5>
                </div>
                <div className="flex justify-center gap-6 mt-3 w-full">
                  <div className="flex flex-col items-center group/tip w-full">
                    <span className="text-white/80 text-xs font-bold mb-2 tracking-widest">25pin</span>
                    <img src="/images/vro_advance/I25.png" alt="Insulated 25pin Tip" className="h-[90px] lg:h-[120px] object-contain drop-shadow-[0_10px_15px_rgba(0,183,241,0.2)] group-hover/tip:-translate-y-2 group-hover/tip:scale-[1.05] transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col items-center group/tip w-full">
                    <span className="text-white/80 text-xs font-bold mb-2 tracking-widest">49pin</span>
                    <img src="/images/vro_advance/I49.png" alt="Insulated 49pin Tip" className="h-[90px] lg:h-[120px] object-contain drop-shadow-[0_10px_15px_rgba(0,183,241,0.2)] group-hover/tip:-translate-y-2 group-hover/tip:scale-[1.05] transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NON-INSULATED SECTION (RIGHT) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 lg:gap-8"
            >
              {/* Depth Diagram */}
              <div className="relative overflow-hidden rounded-[24px] border-2 border-[#FF4B4B]/30 bg-white flex items-center justify-center p-3 lg:p-5 h-[200px] lg:h-[250px]">
                <img src="/images/vro_advance/non_insulated.png" alt="Non-Insulated Depth Diagram" className="w-[105%] max-w-full object-cover hover:scale-[1.02] transition-transform duration-700" />
              </div>

              {/* Type Tips */}
              <div className="relative p-6 lg:p-8 rounded-[24px] border-2 border-[#FF4B4B]/30 bg-gradient-to-b from-[#FF4B4B]/5 to-transparent flex flex-col items-center justify-center mt-2">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#050810] px-4 py-1">
                  <h5 className="text-[#FF4B4B] text-base lg:text-lg font-black uppercase tracking-widest whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,75,75,0.5)]">
                    NON-INSULATED Type
                  </h5>
                </div>
                <div className="flex justify-center gap-6 mt-3 w-full">
                  <div className="flex flex-col items-center group/tip w-full">
                    <span className="text-white/80 text-xs font-bold mb-2 tracking-widest">25pin</span>
                    <img src="/images/vro_advance/N25.png" alt="Non-Insulated 25pin Tip" className="h-[90px] lg:h-[120px] object-contain drop-shadow-[0_10px_15px_rgba(255,75,75,0.2)] group-hover/tip:-translate-y-2 group-hover/tip:scale-[1.05] transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col items-center group/tip w-full">
                    <span className="text-white/80 text-xs font-bold mb-2 tracking-widest">49pin</span>
                    <img src="/images/vro_advance/N49.png" alt="Non-Insulated 49pin Tip" className="h-[90px] lg:h-[120px] object-contain drop-shadow-[0_10px_15px_rgba(255,75,75,0.2)] group-hover/tip:-translate-y-2 group-hover/tip:scale-[1.05] transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-end mt-4 max-w-6xl mx-auto w-full">
            <span className="text-slate-400 text-sm font-bold tracking-tighter bg-white/5 px-4 py-2 rounded-full border border-white/10">
              * 최소 0.1mm 단위로 세밀한 깊이 조절 가능
            </span>
          </div>
        </div>
      </section>

      {/* ⑤ SD (Synergy Dotting) Combination Mechanism Section */}
      <section id="sd-combination" className="py-28 bg-[#050810] relative overflow-hidden border-t border-white/5 leading-none text-left">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10 leading-none">
          {/* Header Title Area (PICO-K Style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center flex flex-col items-center"
          >
            {/* 배지 */}
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">
              SD(SYNERGY DOTTING) HANDPIECE
            </div>

            {/* 타이틀 */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase font-inter leading-tight">
              <span className="hero-title-main">02 COMPLETE</span><br />
              <span className="hero-title-highlight drop-shadow-[0_0_10px_rgba(0,183,241,0.3)]">COMBINATION</span>
            </h2>

            {/* 밑줄 */}
            <div className="w-20 h-[2px] bg-primary mb-8 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />

            {/* 설명 */}
            <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-xl break-keep drop-shadow-md text-center">
              단 하나의 핸드피스로 <span className="text-primary font-bold">HIFU와 RF를 동시에 구현</span>하여 최적의 시너지를 창출합니다.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 items-stretch leading-none">
            <div className="lg:w-[60%] space-y-12 leading-none">
              <div className="grid grid-cols-2 gap-8 leading-none">
                <div className="bg-white/[0.03] p-10 rounded-3xl border border-white/10 flex flex-col items-center group hover:bg-primary/[0.02] transition-all leading-none">
                  <div className="w-40 h-40 rounded-full border border-primary/20 flex items-center justify-center mb-6 shadow-[inset_0_0_30px_rgba(0,183,241,0.05)]">
                    <span className="text-primary text-4xl font-black italic font-inter uppercase">RF</span>
                  </div>
                  <p className="text-white/60 text-base font-bold tracking-tighter leading-none text-center">진피층 열 자극</p>
                </div>
                <div className="bg-white/[0.03] p-10 rounded-3xl border border-white/10 flex flex-col items-center group hover:bg-primary/[0.02] transition-all leading-none">
                  <div className="w-40 h-40 rounded-full border border-primary/20 flex items-center justify-center mb-6 shadow-[inset_0_0_30px_rgba(0,183,241,0.05)]">
                    <span className="text-primary text-4xl font-black italic font-inter uppercase">HIFU</span>
                  </div>
                  <p className="text-white/60 text-base font-bold tracking-tighter leading-none text-center">SMAS층 응고점 형성</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 lg:pt-8 leading-none">
                <div className="text-center group leading-none">
                  <span className="text-primary text-5xl md:text-6xl font-black font-inter tracking-tighter block mb-2 leading-none">+10Hz</span>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 text-[10px] font-black rounded-sm mb-4 uppercase font-inter tracking-widest leading-none">Speed Performance</div>
                  <p className="text-slate-500 font-bold text-sm tracking-tighter leading-tight">압도적으로 빨라진 시술 시간</p>
                </div>
                <div className="text-center group leading-none">
                  <span className="text-primary text-5xl md:text-6xl font-black font-inter tracking-tighter block mb-2 leading-none">High-V</span>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 text-[10px] font-black rounded-sm mb-4 uppercase font-inter tracking-widest leading-none">Energy Output</div>
                  <p className="text-slate-500 font-bold text-sm tracking-tighter leading-tight">SD 전용 RF 출력값 극대화</p>
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] bg-white/[0.02] rounded-[40px] border border-white/10 p-10 flex flex-col justify-between shadow-2xl relative leading-none">
              <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none" />
              <div className="space-y-4 group leading-none text-left">
                <span className="text-primary/40 text-[10px] font-black tracking-[0.4em] uppercase block mb-4 leading-none">Cartridge Engineering</span>
                <div className="flex flex-col gap-6 leading-none">
                  <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all leading-none">
                    <h6 className="text-white font-black text-lg mb-2 uppercase leading-none">Pen Type</h6>
                    <p className="text-slate-500 text-sm font-bold tracking-tighter leading-none">좁은 영역의 정밀 시술용 최적화</p>
                  </div>
                  <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all leading-none">
                    <h6 className="text-white font-black text-lg mb-2 uppercase leading-none">Long Type</h6>
                    <p className="text-slate-500 text-sm font-bold tracking-tighter leading-none">40mm 확장형 카트리지 시스템</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ Final Slogan Section */}
      <section id="bottom-banner" className="relative py-48 bg-[#050810] overflow-hidden border-t border-white/5 leading-none">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[1200px] h-[300px] bg-primary/[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-20 relative z-10 leading-none">
          <div className="md:w-1/2 flex justify-center items-center leading-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative w-full max-w-[500px] group leading-none"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-10" />
              <img
                src="images/machine/브이로어드밴스 사진.png"
                alt="V-RO ADVANCE Footer"
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_0_120px_rgba(0,183,241,0.15)] group-hover:scale-[1.02] transition-transform duration-1000"
              />
            </motion.div>
          </div>

          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-12 leading-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10 leading-none"
            >
              <p className="text-primary text-3xl md:text-5xl font-black tracking-tighter break-keep leading-tight">
                강력한 시너지가 만드는<br />
                <span className="text-white">리프팅의 압도적 진화</span>
              </p>
              <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-end md:gap-8 leading-none">
                <h2 className="text-[100px] md:text-[140px] font-black tracking-tighter text-white leading-none font-inter uppercase relative z-10">
                  V-RO
                </h2>
                <div className="bg-primary text-[#050810] px-10 py-5 rounded-[20px] transform md:translate-y-4 shadow-[0_0_50px_rgba(0,183,241,0.4)]">
                  <span className="text-[40px] md:text-[60px] font-black tracking-tighter uppercase leading-none block font-inter">
                    ADVANCE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
