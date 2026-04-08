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
              RM(RF-Microneedle) HANDPIECE
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
              RM 핸드피스로 <span className="text-primary font-bold">피부 속까지 전달하는 RF 에너지</span>
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
              <span className="hero-title-main">COMBINATION of </span>
              <span className="hero-title-highlight drop-shadow-[0_0_10px_rgba(0,183,241,0.3)]">HIFU + RF</span>
            </h2>

            {/* 밑줄 */}
            <div className="w-20 h-[2px] bg-primary mb-8 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />

            {/* 설명 */}
            <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-xl break-keep drop-shadow-md text-center">
              단 하나의 핸드피스로 <span className="text-primary font-bold">HIFU + RF를 한 번에</span>
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch leading-none">
            {/* Left Column: Concept & Stats */}
            <div className="lg:w-[58%] flex flex-col gap-16 leading-none">
              {/* Concept Diagram Area (Left Top) - Comprehensive Catalog Layout with Signature Blue */}
              <div className="relative h-[480px] lg:h-[560px] bg-white/[0.02] rounded-[40px] border border-white/10 overflow-hidden flex flex-col items-stretch leading-none">
                <div className="absolute inset-0 bg-tech-grid opacity-[0.05] pointer-events-none" />

                {/* Refined Title Bar (Signature Integration) */}
                <div className="w-full bg-primary/20 backdrop-blur-md py-3 lg:py-4 text-center relative z-20 border-b border-primary/20">
                  <h4 className="text-primary text-lg lg:text-xl font-black tracking-tight px-4 drop-shadow-[0_0_10px_rgba(0,183,241,0.5)]">
                    HIFU와 RF의 장점을 한 번의 Combination 시술로!
                  </h4>
                </div>

                <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center px-6 lg:px-12 gap-4 lg:gap-8 mt-2 leading-none">
                  {/* Left: Enhanced Image with Highlights */}
                  <div className="relative flex items-center justify-center h-full">
                    <div className="relative w-72 h-72 lg:w-[380px] lg:h-[380px] flex items-center justify-center">
                      {/* Artistic Blue Glow */}
                      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[100px] opacity-30" />

                      {/* Enlarged Product Image */}
                      <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        src="/images/vro_advance/combination.png"
                        alt="V-RO Combination"
                        className="relative z-10 w-full h-full object-contain drop-shadow-[0_15px_45px_rgba(0,0,0,0.6)]"
                      />

                      {/* Explicit Interactive Dots (White highlights with Blue border) */}
                      {/* RF Dot (Top Right Electrode Area) */}
                      <div className="absolute top-[35%] right-[33%] z-20">
                        <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#00B7F1] border-2 border-primary animate-pulse" />
                      </div>
                      {/* HIFU Dot (Center) */}
                      <div className="absolute top-[51%] left-[49.5%] z-20 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-5 h-5 bg-white rounded-full shadow-[0_0_20px_#00B7F1] border-2 border-primary animate-pulse scale-110" />
                      </div>

                      {/* SVG Lines (Signature Blue theme) */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 100 100">
                        {/* Line to RF (Points to the new Top-Right location) */}
                        <motion.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          d="M 65,37 L 100,17"
                          stroke="#00B7F1"
                          strokeWidth="1"
                          fill="none"
                        />
                        {/* Line to HIFU (Points to center) */}
                        <motion.path
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          d="M 50,51 L 100,83"
                          stroke="#00B7F1"
                          strokeWidth="1"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Right: Informational Callouts (Premium Card Style) */}
                  <div className="absolute top-0 bottom-0 right-0 w-[48%] lg:w-[420px] z-20 pointer-events-none pr-4 lg:pr-8">
                    {/* RF Card Aligned to y=26 */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="absolute top-[13%] left-0 -translate-y-1/2 w-full lg:w-[380px] pointer-events-auto"
                    >
                      <div className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 lg:p-6 rounded-[24px] flex items-center gap-5 hover:bg-white/[0.06] hover:border-primary/30 transition-all duration-500 shadow-2xl">
                        <div className="flex flex-col items-center">
                          <span className="text-primary text-4xl lg:text-5xl font-black tracking-tighter leading-none font-inter drop-shadow-[0_0_15px_rgba(0,183,241,0.5)] group-hover:scale-110 transition-transform">RF</span>
                        </div>
                        <div className="h-10 w-[1px] bg-white/10 mx-1" />
                        <div className="flex flex-col">
                          <span className="text-white text-base lg:text-lg font-bold tracking-tighter leading-tight break-keep">
                            피부와 피하조직의<br />부드러운 열 발생
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* HIFU Card Aligned to y=75 */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="absolute top-[87%] left-0 -translate-y-1/2 w-full lg:w-[380px] pointer-events-auto"
                    >
                      <div className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 lg:p-6 rounded-[24px] flex items-center gap-5 hover:bg-white/[0.06] hover:border-primary/30 transition-all duration-500 shadow-2xl">
                        <div className="flex flex-col items-center">
                          <span className="text-primary text-4xl lg:text-5xl font-black tracking-tighter leading-none font-inter drop-shadow-[0_0_15px_rgba(0,183,241,0.5)] group-hover:scale-110 transition-transform">HIFU</span>
                        </div>
                        <div className="h-10 w-[1px] bg-white/10 mx-1" />
                        <div className="flex flex-col">
                          <span className="text-white text-base lg:text-lg font-bold tracking-tighter leading-tight break-keep">
                            Target하는 깊이에만<br />강력한 열 집중
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Performance Stats Area (Left Bottom) - Catalog Refined Layout */}
              <div className="flex flex-col gap-12 leading-none mt-4">
                <div className="flex items-center gap-4">
                  <h4 className="text-2xl lg:text-3xl font-black tracking-tighter text-white underline underline-offset-8 decoration-primary/50">
                    빠르고, 안전하게, 강력하게
                  </h4>
                </div>

                <div className="flex flex-col gap-14 lg:gap-16">
                  {/* Shot Speed +43% Row */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 group"
                  >
                    <div className="flex-shrink-0 min-w-[200px] lg:min-w-[240px]">
                      <span className="text-primary text-7xl lg:text-8xl font-black font-inter tracking-tighter block drop-shadow-[0_0_25px_rgba(0,183,241,0.5)] group-hover:scale-105 transition-transform duration-500">+43%</span>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary px-3 py-1 text-xs lg:text-sm font-black text-[#050810] uppercase tracking-wider">Shot Speed</div>
                        {/* Stopwatch Icon */}
                        <svg className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="13" r="8" />
                          <path d="M12 9v4l2 2M12 2v3M12 2c4.4 0 8 3.6 8 8" />
                          <path d="M19 4l-2 2" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-white font-bold text-xl lg:text-2xl tracking-tighter leading-tight break-keep">
                          최대 10Hz의 속도 향상으로, 더 빨라진 시술 속도
                        </p>
                        <p className="text-slate-500 font-bold text-sm tracking-tight">*기존 자사 장비 대비</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* RF Value +93% Row */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 group"
                  >
                    <div className="flex-shrink-0 min-w-[200px] lg:min-w-[240px]">
                      <span className="text-primary text-7xl lg:text-8xl font-black font-inter tracking-tighter block drop-shadow-[0_0_25px_rgba(0,183,241,0.5)] group-hover:scale-105 transition-transform duration-500">+93%</span>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary px-3 py-1 text-xs lg:text-sm font-black text-[#050810] uppercase tracking-wider">RF Value</div>
                        {/* Lightning Icon */}
                        <svg className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M13 7l-4 6h4l-1 4 4-6h-4l1-4z" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-white font-bold text-xl lg:text-2xl tracking-tighter leading-tight break-keep">
                          SD Type의 RF 출력 값 상승으로 더 높아진 열적 효과
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Column: Cartridge Engineering Sidebar (More compact with better spacing) */}
            <div className="lg:w-[42%] bg-white/[0.03] rounded-[40px] border border-white/10 p-6 lg:p-10 flex flex-col shadow-2xl relative overflow-hidden leading-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] opacity-20" />

              <div className="space-y-10 relative z-10 leading-none text-left">
                {/* Pen Type */}
                <div className="space-y-6 leading-none">
                  <div className="flex items-center justify-center gap-3 mb-6 leading-none">
                    <span className="text-slate-500 font-medium">|</span>
                    <h5 className="text-white font-black text-xl lg:text-2xl tracking-tighter leading-none text-center">Pen Type 카트리지</h5>
                    <span className="text-slate-500 font-medium">|</span>
                  </div>

                  {/* Cartridge Images (More compact vertical box) */}
                  <div className="flex justify-center py-2 lg:py-3 bg-white/[0.01] rounded-3xl border border-white/5 relative group overflow-hidden leading-none">
                    <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl scale-150" />

                    <motion.img
                      initial={{ opacity: 0, scale: 1.05 }}
                      whileInView={{ opacity: 1, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      src="/images/vro_advance/pentype.png"
                      alt="Pen Type Cartridges"
                      className="relative z-10 w-full max-w-[460px] h-44 lg:h-72 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:scale-115 transition-transform duration-700 mt-2"
                    />
                  </div>

                  <p className="text-slate-400 text-sm lg:text-base font-medium tracking-tighter leading-relaxed break-keep text-center mt-3">
                    보다 작은 사이즈의 가벼운 카트리지로<br />시술 편의성을 높였습니다.
                  </p>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Long Type */}
                <div className="space-y-6 leading-none">
                  <div className="flex items-center justify-center gap-3 mb-6 leading-none">
                    <span className="text-slate-500 font-medium">|</span>
                    <h5 className="text-white font-black text-xl lg:text-2xl tracking-tighter leading-none text-center">Long Type 카트리지</h5>
                    <span className="text-slate-500 font-medium">|</span>
                  </div>

                  {/* Cartridge Images (More compact vertical box) */}
                  <div className="flex justify-center py-2 lg:py-3 bg-white/[0.01] rounded-3xl border border-white/5 relative group overflow-hidden leading-none">
                    <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl scale-150" />

                    <motion.img
                      initial={{ opacity: 0, scale: 1.05 }}
                      whileInView={{ opacity: 1, scale: 1.1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      src="/images/vro_advance/longtype.png"
                      alt="Long Type Cartridges"
                      className="relative z-10 w-full max-w-[460px] h-48 lg:h-80 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:scale-115 transition-transform duration-700 mt-2"
                    />
                  </div>

                  <p className="text-slate-400 text-sm lg:text-base font-medium tracking-tighter leading-relaxed break-keep text-center mt-3">
                    40mm 길어진 카트리지의 증류수 양이 증대되어<br />장시간 사용 시에도 안정적인 시술을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ MFU Control Section - 카탈로그 2번 이미지 기준 재설계 */}
      <section id="mfu-control" className="relative py-24 lg:py-32 bg-[#050810] leading-none">
        <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10 leading-none">
          {/* Header Block — SD 섹션과 동일한 중앙 배지+대형 타이틀 패턴 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center flex flex-col items-center"
          >
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">
              FL(FOCUSED LINEAR) HANDPIECE
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 uppercase font-inter leading-tight">
              <span className="hero-title-main">MFU </span>
              <span className="hero-title-highlight drop-shadow-[0_0_10px_rgba(0,183,241,0.3)]">CONTROL</span>
            </h2>

            <div className="w-20 h-[2px] bg-primary mb-8" />

            <p className="text-slate-300 text-lg font-medium leading-relaxed max-w-xl break-keep text-center">
              다양하고 새로워진 <span className="text-primary font-bold">FL 카트리지</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start leading-none">
            {/* Left Content Area */}
            <div className="flex flex-col space-y-14 leading-none">

              {/* Dot & Line Mode 블록 */}
              <div className="space-y-8 leading-none">
                {/* 강조 배너 */}
                <div className="bg-primary/15 border-l-4 border-primary px-6 py-4 rounded-r-2xl w-fit">
                  <span className="text-white font-black text-xl lg:text-2xl tracking-tighter">
                    하나의 카트리지로 Dot &amp; Line Mode를 한 번에!
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  {/* Dot Mode Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#0a0e1a] rounded-2xl border border-white/10 overflow-hidden relative group"
                  >
                    <div className="absolute top-3 left-3 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-white border border-white/10">
                      · Dot Mode
                    </div>
                    <div className="aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                      <img
                        src="/images/vro_advance/dotmode.png"
                        alt="Dot Mode Illustration"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    </div>
                  </motion.div>

                  {/* Line Mode Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-[#0a0e1a] rounded-2xl border border-white/10 overflow-hidden relative group"
                  >
                    <div className="absolute top-3 left-3 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-white border border-white/10">
                      · Line Mode
                    </div>
                    <div className="aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                      <img
                        src="/images/vro_advance/linemode.png"
                        alt="Line Mode Illustration"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* 에너지 집중도 비교 블록 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8 pt-12 leading-none"
              >
                <h5 className="text-white font-black text-2xl lg:text-3xl tracking-tighter border-b-2 border-primary/40 pb-3 w-fit">
                  에너지 집중도를 강화한 새로운 카트리지
                </h5>

                <div className="bg-white/[0.025] p-8 lg:p-10 rounded-[36px] border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-tech-dots opacity-5 pointer-events-none" />

                  {/* 비교 다이어그램 (Simplified One-Arrow Layout) */}
                  <div className="flex items-start justify-center gap-4 lg:gap-6 relative z-10 pb-6">

                    {/* 기존 카트리지 — N4.5 (Simplified) */}
                    <div className="flex flex-col items-center">
                      <div className="px-4 py-1.5 mb-6">
                        <span className="text-white font-black text-sm">기존 카트리지</span>
                      </div>
                      <div className="flex flex-col items-center relative">
                        {/* Cartridge Image */}
                        <div className="w-32 lg:w-40 h-32 lg:h-36 flex items-center justify-center relative">
                          <img src="/images/vro_advance/cart/n4.5.png" alt="N4.5" className="max-w-full max-h-full object-contain opacity-50 grayscale" />
                        </div>

                        {/* Simple Directional Line to Focus */}
                        <div className="relative h-20 w-32 flex flex-col items-center">
                          <div className="absolute top-0 w-px h-[41px] bg-gradient-to-b from-amber-500/20 to-amber-500/80 right-13.5" />
                          <div className="absolute top-[41px] right-12.5 w-2.5 h-7 bg-amber-500/80 rounded-full blur-[2px] border border-amber-400/30 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                        </div>
                      </div>
                    </div>

                    {/* Central Arrow Decoration */}
                    <div className="flex items-center self-start pt-[115px] px-1 lg:px-2">
                      <div className="flex gap-1 text-primary/40 scale-110">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>

                    {/* 브이로 리프팅 카트리지 — A4.5 (Simplified) */}
                    <div className="flex flex-col items-center">
                      <div className="bg-primary px-4 py-1.5 rounded-sm mb-6 shadow-[0_4px_12px_rgba(0,183,241,0.2)]">
                        <span className="text-white font-black text-xs lg:text-sm tracking-tight whitespace-nowrap">브이로 리프팅 카트리지</span>
                      </div>

                      <div className="flex flex-col items-center relative">
                        {/* Persistent Target Depth Line */}
                        <div className="absolute top-[199px] right-[-100px] left-[-350px] h-px border-t border-dashed border-white/20 z-0 pointer-events-none" />
                        <span className="absolute top-[176px] left-[calc(100%+24px)] text-slate-500 text-[10px] font-bold tracking-widest whitespace-nowrap">Target Depth</span>

                        {/* Cartridge Image */}
                        <div className="w-32 lg:w-40 h-32 lg:h-36 flex items-center justify-center relative">
                          <img src="/images/vro_advance/cart/a4.5.png" alt="A4.5" className="max-w-full max-h-full object-contain relative z-10" />
                        </div>

                        {/* Simple Directional Line to Focus (Aligned to 183px) */}
                        <div className="relative h-20 w-32 flex flex-col items-center">
                          <div className="absolute top-0 w-px h-[50px] bg-gradient-to-b from-primary/20 to-amber-400 right-14" />
                          <div className="absolute top-[50px] w-2.5 h-2.5 right-13 bg-amber-400 rounded-full shadow-[0_0_10px_#fbbf24,0_0_20px_rgba(251,191,36,0.6)] animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm lg:text-base font-medium tracking-tighter leading-relaxed break-keep text-center">
                    Transducer의 곡률 반경이 축소된 Advanced 카트리지는<br />
                    열 초점이 보다 원에 가깝게 맺혀 <span className="text-white font-bold">에너지 집중도가 강화</span>되었습니다.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Side — 카트리지 선택 패널 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col leading-none"
            >
              <div className="bg-white/[0.055] backdrop-blur-2xl rounded-[44px] border border-white/15 p-8 lg:p-12 flex flex-col h-full shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 blur-[80px] opacity-40 pointer-events-none" />

                <h5 className="text-white font-black text-xl lg:text-2xl tracking-tighter leading-snug text-center break-keep mb-10 relative z-10">
                  원하는 카트리지로<br />
                  <span className="text-primary">개인별 맞춤형 시술 제공</span> 가능
                </h5>

                <div className="space-y-10 relative z-10">
                  {/* Slim & Normal Type */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex-1 h-px bg-white/15" />
                      <span className="text-slate-300 font-bold text-sm whitespace-nowrap">Slim &amp; Normal Type 카트리지</span>
                      <div className="flex-1 h-px bg-white/15" />
                    </div>

                    {/* 카트리지 그룹: S1.5 (대형) + S2, N3, N4.5 (소형) */}
                    <div className="flex items-end justify-center gap-5">
                      {/* 피처드 S1.5 */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-[100px] h-[130px] flex items-center justify-center">
                          <img
                            src="/images/vro_advance/cart/S1.5-정면.png"
                            alt="S1.5"
                            className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <span className="text-slate-400 text-[13px] font-bold">S1.5</span>
                      </div>
                      {/* 소형 S2, N3, N4.5 */}
                      {[
                        { name: 'S2', path: 'S2-정면.png' },
                        { name: 'N3', path: 'N3-정면.png' },
                        { name: 'N4.5', path: 'n4.5.png' }
                      ].map((item) => (
                        <div key={item.name} className="flex flex-col items-center gap-2">
                          <div className="w-[80px] h-[100px] flex items-center justify-center">
                            <img
                              src={`/images/vro_advance/cart/${item.path}`}
                              alt={item.name}
                              className="w-full h-full object-contain opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-500"
                            />
                          </div>
                          <span className="text-slate-500 text-[12px] font-bold">{item.name}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-slate-500 text-xs font-medium text-center break-keep leading-relaxed">
                      기존 자사 제품과 동일한 카트리지로<br />편리한 시술이 가능합니다.
                    </p>
                  </div>

                  {/* 구분선 */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* 브이로 리프팅 Type */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex-1 h-px bg-white/15" />
                      <span className="text-slate-300 font-bold text-sm whitespace-nowrap">브이로 리프팅 Type 카트리지</span>
                      <div className="flex-1 h-px bg-white/15" />
                    </div>

                    {/* 카트리지 그룹: A1.5 (대형 시안) + A2, A3, A4.5 (소형) */}
                    <div className="flex items-end justify-center gap-5">
                      {/* 피처드 A1.5 */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-[100px] h-[130px] flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-primary/10 blur-2xl opacity-50" />
                          <img
                            src="/images/vro_advance/cart/a1.5.png"
                            alt="A1.5"
                            className="w-full h-full object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(0,183,241,0.2)] hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <span className="text-primary text-[13px] font-bold">A1.5</span>
                      </div>
                      {/* 소형 A2, A3, A4.5 */}
                      {(['A2', 'A3', 'A4.5'] as const).map((name) => (
                        <div key={name} className="flex flex-col items-center gap-2">
                          <div className="w-[80px] h-[100px] flex items-center justify-center">
                            <img
                              src={`/images/vro_advance/cart/${name.toLowerCase()}.png`}
                              alt={name}
                              className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <span className="text-slate-500 text-[12px] font-bold">{name}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-slate-500 text-xs font-medium text-center break-keep leading-relaxed">
                      Transducer 곡률 반경 축소로<br />에너지 집중도가 향상된 시술이 가능합니다.
                    </p>
                  </div>
                </div>

                {/* 하단 CTA 텍스트 */}
                <div className="mt-auto pt-10 text-center leading-none relative z-10">
                  <p className="text-slate-400 text-sm lg:text-base font-medium tracking-tight break-keep leading-relaxed">
                    시술 강도 및 통증의 정도에 따른<br />시술 유형을 선택하여
                  </p>
                  <div className="mt-3 inline-block px-5 py-2.5 bg-primary/10 border border-primary/30 rounded-xl shadow-[0_0_20px_rgba(0,183,241,0.15)]">
                    <span className="text-primary font-black text-lg lg:text-xl tracking-tighter">개인별 맞춤형 시술 제공</span>
                  </div>
                  <p className="text-slate-400 text-sm font-medium mt-1.5">이 가능합니다.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ⑥ Final Slogan Section */}
      <section id="bottom-banner" className="relative py-48 bg-[#050810] overflow-hidden leading-none">
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

          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left leading-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center md:items-start leading-none"
            >
              {/* Sub-headline: Changed to Left Aligned */}
              <p className="text-white text-2xl md:text-3xl font-bold tracking-tighter mb-4 md:mb-6">
                두 가지 에너지로 강력한 맞춤 리프팅
              </p>

              {/* Brand Logo Image Replacement */}
              <div className="relative z-10 w-full max-w-[400px] md:max-w-[480px]">
                <img
                  src="/images/machine/브이로어드밴스 로고.png"
                  alt="V-RO ADVANCE Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
