'use client';
export const dynamic = 'force-dynamic';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PicoKPage() {
  return (
    <>
      {/* ① Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-[#020408]"
      >
        {/* 배경 이미지 레이어 (선명도 상향된 그레이 톤) */}
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 brightness-[0.6] contrast-[1.05]"
          alt="medical background"
        />
        {/* 그라디언트 오버레이 (Clear Matte Effect) */}
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
            <span className="hero-title-main block md:inline">PREMIUM</span><br className="md:hidden" />
            <span className="hero-title-highlight ml-0 md:ml-4">PICO — K</span>
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
              합리적인 피부미용 의료 장비, <span className="text-primary font-bold">정확한 기술의 시작</span>
            </p>
          </motion.div>
        </div>

        {/* 스크롤 유도 버튼 */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
          <Link
            href="#overview"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② Product Overview Section */}
      <section id="overview" className="relative py-28 bg-[#020408] overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 bg-tech-dots opacity-25 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* 좌측: 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* 배지 */}
              <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                Complete Solution
              </div>

              {/* 타이틀 */}
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                <span className="hero-title-main">REVOLUTIONARY</span><br />
                <span className="hero-title-highlight">PICO-K</span>
                <span className="hero-title-main"> TECHNOLOGY</span>
              </h2>
              <div className="w-20 h-[2px] bg-primary mb-8 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />

              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 max-w-xl">
                최첨단 피코 레이저 기술을 통해 더욱 빠르고 정밀한 색소 치료와<br className="hidden md:block" />
                피부 재생의 새로운 기준을 제시합니다.
              </p>

              {/* 카드 2개 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
                <div className="glass-panel p-6 flex items-center gap-5 hover:border-primary/50 transition duration-500 group">
                  <div className="flex flex-col flex-shrink-0">
                    <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mb-1">Product</span>
                    <span className="text-sm font-bold text-white">로고</span>
                  </div>
                  <div className="w-[1px] h-8 bg-primary/20" />
                  <img
                    src="/images/machine/피코케이 로고.png"
                    className="h-6 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition"
                    alt="PICO-K 로고"
                  />
                </div>
                <div className="glass-panel p-6 flex items-center gap-5 hover:border-primary/50 transition duration-500 group">
                  <div className="flex flex-col flex-shrink-0">
                    <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mb-1">Manufacturer</span>
                    <span className="text-sm font-bold text-white">제조사</span>
                  </div>
                  <div className="w-[1px] h-8 bg-primary/20" />
                  <img
                    src="/images/machine/피코케이 제조사 로고.png"
                    className="h-6 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition"
                    alt="Speclipse"
                  />
                </div>
              </div>
            </motion.div>

            {/* 우측: 제품 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end relative"
            >
              <div className="relative group">
                <img
                  src="/images/machine/피코케이 사진.png"
                  className="max-w-full h-auto relative z-10 drop-shadow-[0_45px_100px_rgba(0,0,0,0.7)] group-hover:scale-[1.02] transition duration-1000"
                  alt="PICO-K 장비"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-primary/15 blur-[80px] rounded-full scale-150 translate-y-4 opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ③ Patent Technology Section */}
      <section id="patents" className="relative py-20 bg-[#020408] overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* 긴 상단 강조선 (디자인 가이드 반영) */}
          <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
            <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap">HUEMEDICAL</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              className="h-[1px] w-[500%] bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none shadow-[0_0_15px_rgba(0,183,241,0.2)]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10 mb-20 relative z-10">
            {/* 좌측: 타이틀 및 설명 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="mb-14">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
                  <span className="hero-title-main">특허기술</span>
                </h2>
              </div>
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-lg">
                수년간의 연구와 개발을 통해 다양한 특허를 바탕으로 시장에서<br />
                월등하고 혁신적인 솔루션을 제공하는 피코초 레이저입니다.
              </p>
            </motion.div>

            {/* 우측: 메인 특허증 2개 (플로팅 레이아웃) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-end gap-6"
            >
              <div className="w-40 h-56 bg-white/95 rounded-sm shadow-2xl p-2 transform -rotate-3 hover:rotate-0 transition duration-500">
                <div className="w-full h-full border border-slate-200 flex items-center justify-center text-[10px] text-slate-400">Main Patent 01</div>
              </div>
              <div className="w-40 h-56 bg-white/95 rounded-sm shadow-2xl p-2 transform rotate-3 -mt-8 hover:rotate-0 transition duration-500">
                <div className="w-full h-full border border-slate-200 flex items-center justify-center text-[10px] text-slate-400">Main Patent 02</div>
              </div>
            </motion.div>
          </div>

          {/* 하단: 서브 특허증 그리드 (한눈에 보이도록 축소) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-white/90 rounded-sm shadow-lg p-1.5 hover:scale-105 transition duration-300 border border-transparent hover:border-primary/50 cursor-pointer"
              >
                <div className="w-full h-full border border-slate-100 flex items-center justify-center text-[8px] text-slate-400 font-bold">
                  Patent {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ④ Technical Detail 01: Thermal Lens Effect */}
      <section id="thermal-lens-tech" className="relative py-28 bg-[#020408] overflow-hidden">
        <div className="absolute inset-0 bg-tech-dots opacity-20 mix-blend-screen pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* TECH.01 라벨 — HUEMEDICAL과 동일하게 플렉스 외부에 배치 */}
          <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
            <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap">TECH 01</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              className="h-[1px] w-[500%] bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none shadow-[0_0_15px_rgba(0,183,241,0.2)]"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
            {/* 배경 테크 글로우 포인트 */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* 좌측: 설명 (Technical Blueprint Style) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-[45%] relative z-10 text-left"
            >
              {/* 메인 타이틀 & 넘버링 */}
              <div className="mb-14">
                <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                  <span className="hero-title-main">써멀렌즈</span><br />
                  <span className="hero-title-highlight">이펙트 최소화</span>
                </h3>
              </div>

              {/* 부제 및 기본 설명 */}
              <div className="mb-14 pl-4 border-l-2 border-primary/20">
                <h4 className="text-primary font-black text-xl md:text-2xl mb-2 tracking-tight">Thermal Lens Effect</h4>
                <p className="text-slate-400 font-medium leading-relaxed">렌즈의 과열로 부풀어올라 초점의 깊이가 변하는 현상</p>
              </div>

              {/* 기술 설명 상세 (도면 스타일) */}
              <div className="space-y-12">
                {/* 기술 01 */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary shadow-[0_0_8px_rgba(0,183,241,0)] group-hover:shadow-[0_0_8px_rgba(0,183,241,1)] transition-all duration-500" />
                    <h5 className="text-white font-bold text-xl">단일 챔버 레이저 발진 장치</h5>
                  </div>
                  <p className="text-primary/70 text-[10px] font-bold mb-4 tracking-[0.2em] uppercase pl-4">Patent Registration: No.10-165288</p>
                  <p className="text-slate-400 leading-relaxed max-w-lg pl-4 border-l border-white/5 group-hover:border-primary/30 transition-colors duration-500">
                    이중 챔버를 사용하는 기존 Q-switch레이저와 달리, 단일 챔버를 활용하여 기존 대비 효율은 10%이상 높이고, 제작 단가를 줄일 수 있는 기술입니다.
                  </p>
                </div>

                {/* 기술 02 */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary shadow-[0_0_8px_rgba(0,183,241,0)] group-hover:shadow-[0_0_8px_rgba(0,183,241,1)] transition-all duration-500" />
                    <h5 className="text-white font-bold text-xl">의료용 레이저 열 렌즈 효과 제어 시스템</h5>
                  </div>
                  <p className="text-primary/70 text-[10px] font-bold mb-4 tracking-[0.2em] uppercase pl-4">Patent Registration: No.10-2333260</p>
                  <p className="text-slate-400 leading-relaxed max-w-lg pl-4 border-l border-white/5 group-hover:border-primary/30 transition-colors duration-500">
                    열 렌즈 효과 제어를 위해 기계 스위치와 마이크로 컨트롤러를 활용하여 안정적인 출력에너지와 일관된 빔 크기를 유지합니다.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 우측: 일러스트 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-[55%]"
            >
              <div className="relative aspect-video glass-panel flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <span className="text-primary/30 font-black text-sm tracking-[0.3em] uppercase font-inter">
                  Technical Illustration
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ⑤ Technical Detail 02 & 03: Integrated Layout */}
      <section id="tech-integrated-detail" className="relative py-28 bg-[#020408] overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* 02. 출력안정성 쪽 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* 테드 라벨 02 */}
              <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
                <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap">TECH 02</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                  className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none"
                />
              </div>

              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-12">
                <span className="hero-title-main">출력안정성</span>
              </h3>

              <div className="mb-10">
                <p className="text-slate-200 font-bold text-xl leading-snug mb-6">
                  피코의 성능을 완성하는 출력안정성<br />
                  특허기술이 적용된 파워서플라이 채용
                </p>
                <p className="text-slate-400 font-medium leading-relaxed max-w-md">
                  PFC(Power Factor Correction)를 통합하여 일정하고<br />
                  안정적인 에너지 출력을 제공하는 데 도움을 줍니다.
                </p>
              </div>

              {/* 파워 서플라이 장치 이미지 + 특허 엠블럼 */}
              <div className="relative glass-panel p-4 bg-tech-grid/50 overflow-hidden mt-auto">
                {/* 파워 서플라이 장치 이미지 영역 (Empty Slot) */}
                <div className="relative glass-panel aspect-video bg-tech-grid/10 overflow-hidden flex items-center justify-center border-white/5">
                  <span className="text-white/20 text-xs font-black uppercase tracking-widest italic group-hover:text-primary/40 transition-colors">
                    Technical Device Illustration
                  </span>
                  <div className="absolute bottom-4 right-4 w-32 md:w-44 flex items-center justify-center aspect-[4/3] bg-white/5 border border-white/10 rounded-sm">
                    <span className="text-[10px] text-white/30 font-bold uppercase">Patent Emblem Area</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 03. 핵심 부품의 조화 쪽 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* 테드 라벨 03 */}
              <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
                <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap">TECH 03</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                  className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none"
                />
              </div>

              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-12">
                <span className="hero-title-main">핵심 부품의 조화</span>
              </h3>

              <div className="mb-10">
                <p className="text-slate-200 font-bold text-xl leading-snug mb-6">
                  순수 자체 기술을 통한 개발과 생산으로<br />
                  핵심 부품 간의 정밀한 매칭을 구현했습니다.
                </p>
                <p className="text-slate-400 font-medium leading-relaxed max-w-md">
                  부적합을 줄이고 최상의 퍼포먼스를 실현하여<br />
                  신뢰할 수 있는 안정성을 제공합니다.
                </p>
              </div>

              {/* 부품 조화 일러스트 영역 */}
              <div className="relative glass-panel p-8 bg-tech-grid/50 border-t border-primary/20 mt-auto">
                <div className="text-center mb-8">
                  <h4 className="text-primary/90 font-black text-xl tracking-tight leading-tight">
                    Core Components<br />Harmonization
                  </h4>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 relative">
                  {[
                    { label: 'OPTICS' },
                    { label: 'POWER SUPPLY' },
                    { label: 'CONTROLER' }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center group">
                      <div className="aspect-square rounded-xl border border-white/10 bg-white/5 overflow-hidden mb-3 group-hover:border-primary/50 transition-all duration-300 flex items-center justify-center">
                         <span className="text-[10px] text-white/20 font-black tracking-widest">{item.label} IMAGE</span>
                      </div>
                      <span className="text-[10px] text-white font-black tracking-widest group-hover:text-primary transition-colors uppercase">{item.label}</span>
                    </div>
                  ))}

                  {/* 연결 라인 장식 */}
                  <div className="absolute top-[35%] left-[20%] right-[20%] h-[1px] bg-primary/20 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ⑥ Technical Detail 04 & 05: Performance Standards */}
      <section id="tech-performance-standards" className="relative py-28 bg-[#020408] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none" />
        
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* 04. 국내최초 300PS 실명제 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              {/* 테드 라벨 04 */}
              <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
                <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase">TECH 04</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                  className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none"
                />
              </div>

              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-12">
                <span className="hero-title-main">국내최초 300PS 실명제</span>
              </h3>

              {/* 오실로스코프 파형 영역 (Empty Slot) */}
              <div className="relative glass-panel aspect-[16/10] bg-tech-grid/30 border border-white/10 rounded-sm mb-12 overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-[80%] h-[1px] bg-primary/40 shadow-[0_0_15px_rgba(0,183,241,1)]" />
                 </div>
                 <span className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] z-10">Oscilloscope Waveform Area</span>
              </div>

              {/* 핵심 스펙 타이포그래피 */}
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-8 border-l-2 border-primary/40 pl-6 group">
                  <div className="flex flex-col">
                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter group-hover:text-primary transition-colors">300ps</span>
                  </div>
                  <div className="flex flex-col justify-center pt-2">
                    <span className="text-slate-200 font-bold text-lg leading-tight mb-1">펄스 지속 시간</span>
                    <span className="text-slate-400 text-sm font-medium">표준편차 약 2% 이내 유지</span>
                  </div>
                </div>

                <div className="flex items-start gap-8 border-l-2 border-primary/40 pl-6 group">
                  <div className="flex flex-col">
                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter group-hover:text-primary transition-colors">2.0GW</span>
                  </div>
                  <div className="flex flex-col justify-center pt-2">
                    <span className="text-slate-200 font-bold text-lg leading-tight mb-1">최대 출력 보장</span>
                    <span className="text-slate-400 text-sm font-medium">일관된 고품질 빔 프로필 유지</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 font-medium text-lg leading-relaxed mt-auto max-w-xl">
                 부작용을 최소화하며 정확하고 일관된 레이저 치료를 제공받을 수 있도록 <br className="hidden md:block" />
                 300PS 실명제를 운영하며 투명한 QC 자료를 제공해 드립니다.
              </p>
            </motion.div>

            {/* 05. 얼라인먼트 변성방지 기술 적용 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              {/* 테드 라벨 05 */}
              <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
                <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase">TECH 05</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                  className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none"
                />
              </div>

              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-12">
                <span className="hero-title-main">얼라인먼트</span><br />
                <span className="hero-title-highlight">변성방지 기술 적용</span>
              </h3>

              <p className="text-slate-300 font-medium text-lg leading-relaxed mb-12 max-w-md">
                운송 또는 사용 중 내부 얼라인먼트 변형으로 장비출력 및 빔 품질에 영향을 줄 수 있는 
                <span className="text-primary/90 font-bold"> [외부충격]</span>에 취약한 광학레이저의 특성을 고려하여 솔루션을 개발, 적용하였습니다.
              </p>

              {/* 프로세스 아이콘 영역 */}
              <div className="glass-panel p-8 bg-tech-grid/30 mb-12 border-t border-primary/20">
                <div className="flex justify-between items-center gap-4">
                  {[
                    { label: '항공/해상\n운송 테스트' },
                    { label: '변성방지 솔루션\n개발 및 적용' },
                    { label: '스위스제\n철도 부품 사용' }
                  ].map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col items-center text-center gap-3">
                         <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <div className="w-8 h-8 border border-primary/40 rounded-sm opacity-40" />
                         </div>
                         <span className="text-[12px] text-slate-300 font-bold whitespace-pre-line leading-tight">{step.label}</span>
                      </div>
                      {idx < 2 && <div className="text-primary/40 font-black text-xl">+</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* 암(Arm) 일러스트 및 빔 테스트 영역 (Empty Slot) */}
              <div className="grid grid-cols-2 gap-8 mt-auto">
                 <div className="glass-panel aspect-square bg-tech-dots/10 flex items-center justify-center border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 border border-primary/10 group-hover:border-primary/30 transition-colors" />
                    <span className="text-[10px] text-white/30 font-black uppercase text-center leading-tight">Robot Arm<br />Alignment Area</span>
                 </div>
                 <div className="flex flex-col justify-center gap-4">
                    <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center bg-tech-grid/20">
                       <div className="w-[80%] h-[80%] rounded-full border border-primary/30 border-dashed" />
                    </div>
                    <div>
                       <span className="text-2xl font-black text-white tracking-widest uppercase">PICO-K</span><br />
                       <span className="text-lg font-black text-primary/80 uppercase tracking-tighter">BEAM TEST</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ⑦ Technical Detail 06: Multi-Diffraction Mode */}
      <section id="tech-multi-diffraction" className="relative py-28 bg-[#020408] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
        
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* 테드 라벨 06 */}
          <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
            <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase">TECH 06</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none"
            />
          </div>

          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-16">
            <span className="hero-title-main uppercase">TOP-HAT</span><span className="hero-title-main">에 가장 근접한</span><br />
            <span className="hero-title-highlight">멀티디프렉션 MODE</span>
          </h3>

          {/* 상단: 가로로 긴 통합 그래픽 영역 (1단 배치) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[21/9] md:aspect-[21/7] glass-panel bg-tech-grid/40 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center group mb-16 shadow-2xl"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40">
              <div className="w-[80%] h-full flex items-center justify-between px-12">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-48 border border-white/20 rounded-lg opacity-40" />
                  <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">Handpiece</span>
                </div>
                <div className="flex-1 flex items-center justify-center gap-8">
                  <div className="w-64 h-48 bg-primary/5 border border-primary/20 rounded-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-tech-grid opacity-20" />
                  </div>
                  <div className="text-primary/40 font-black text-2xl">→</div>
                  <div className="w-80 h-56 bg-primary/10 border border-primary/30 rounded-sm relative shadow-[0_0_50px_rgba(0,183,241,0.1)]">
                     <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-primary/40 shadow-[0_0_15px_rgba(0,183,241,1)]" />
                  </div>
                </div>
                <div className="w-48 h-48 rounded-full border border-white/10 bg-tech-dots/10 relative overflow-hidden">
                   <div className="absolute inset-2 rounded-full border border-primary/20 border-dashed" />
                </div>
              </div>
              <div className="absolute bottom-6 flex gap-12">
                 <span className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em]">Multi-Beam Pattern Analysis</span>
                 <span className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em]">Energy Fluorescence Mapping</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/80 to-transparent pointer-events-none" />
          </motion.div>

          {/* 하단: 설명 및 상세 스펙 (2단 배치) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
            {/* 좌측 설명 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-xl">
                PICO-K만의 멀티디프렉션모드는 TOP-HAT 빔과 가우시안 빔의 장점을 결합한 고품질 의료용 레이저로 100μm, 31.84 J/cm² 의 MLA빔이 최고의 L.I.O.B 효과를 이끌어냅니다.
              </p>
            </motion.div>

            {/* 우측 불렛 포인트 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-6">
                {[
                  { text: '에너지 손실없이 ', highlight: '260개', suffix: '의 마이크로빔이 동일하게 전달' },
                  { text: '최대 ', highlight: '31.84 J/cm²', suffix: ' 큰 출력값' },
                  { text: '', highlight: '100μm', suffix: '의 작은 빔 스폿 굵기로 피부표면에 손실 없이 전달' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 group-hover:scale-150 transition-transform" />
                    <span className="text-slate-200 text-xl font-bold leading-tight">
                      {item.text}
                      <span className="text-primary mx-1">{item.highlight}</span>
                      {item.suffix}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* 하단: BEAM QUALITY 테스트 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-white/5"
          >
            <div className="flex items-center gap-6 mb-12">
              <h4 className="text-white font-black text-xl tracking-tight whitespace-nowrap uppercase">BEAM QUALITY 테스트</h4>
              <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[ '12mJ', '23mJ', '45mJ', '68mJ', '113mJ' ].map((val, idx) => (
                <div key={idx} className="flex flex-col items-center gap-6 group">
                  <div className="relative w-full aspect-square rounded-full border border-white/10 overflow-hidden bg-tech-dots/10 group-hover:border-primary/50 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                       {/* 가상의 빔 패턴 그리드 */}
                       <div className="grid grid-cols-10 gap-1 opacity-20">
                         {Array.from({ length: 100 }).map((_, i) => (
                            <div key={i} className="w-0.5 h-0.5 rounded-full bg-white" />
                         ))}
                       </div>
                    </div>
                    {/* 패턴 이미지 플레이스홀더 */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-primary/5 transition-colors">
                       <span className="text-[10px] text-white/20 font-black tracking-widest uppercase">Beam Result</span>
                    </div>
                  </div>
                  <span className="text-slate-400 font-black text-lg tracking-widest group-hover:text-primary transition-colors">{val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 하단 푸터 느낌의 슬로건 */}
          <div className="mt-28 flex flex-col items-start gap-2">
            <span className="text-primary/30 text-xs font-bold tracking-[0.4em] uppercase italic">New Paradigm of</span>
            <span className="text-slate-600 text-lg font-black tracking-widest uppercase">PICOSECOND TECHNOLOGY</span>
          </div>
        </div>
      </section>
    </>
  );
}
