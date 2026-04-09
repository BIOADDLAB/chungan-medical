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

      {/* ④ Key Benefits / Features Section */}
      <section id="features" className="relative py-24 bg-[#05070a] overflow-hidden">
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
              <div className="relative w-full h-auto mt-12 group perspective-1000">
                {/* 상단 라벨 오버레이 (이미지 밖 상단으로 이동) */}
                <div className="absolute -top-12 left-0 w-full px-4 flex justify-between z-20 pointer-events-none transition-transform duration-1000 ease-out group-hover:translate-y-[-10px]">
                  <span className="text-slate-400 font-extrabold text-sm md:text-lg tracking-tight drop-shadow-lg">
                    [ 특허기술 미적용 ]
                  </span>
                  <span className="text-primary font-black text-sm md:text-lg tracking-tight drop-shadow-[0_0_10px_rgba(0,183,241,0.5)]">
                    [ 특허기술 적용 ]
                  </span>
                </div>

                {/* 메인 이미지 & 포인트 레이어 통합 확대 */}
                <div className="relative w-full h-full transition-transform duration-1000 ease-out group-hover:scale-105">
                  <img
                    src="/images/picok/Thermal.png"
                    alt="Thermal Lens Effect Control Logic"
                    className="w-full h-auto block"
                  />

                  {/* 과열 및 부풀어오름 지시선 및 라벨 (포인트 기준 왼쪽으로 배치) */}
                  <div className="absolute top-[38.5%] md:top-[40%] left-[-4%] md:left-[5.5%] z-20 pointer-events-none flex items-center flex-row">
                    {/* 설명 텍스트 (우측 정렬) */}
                    <div className="flex flex-col items-end text-right mr-2 transition-all duration-700">
                      <span className="text-[11px] md:text-sm font-black text-[#FF4D4D] tracking-tighter leading-none drop-shadow-md group-hover:scale-110 group-hover:text-[#FF6666] origin-right transition-all">
                        과열되어
                      </span>
                      <span className="text-[11px] md:text-sm font-black text-[#FF4D4D] tracking-tighter leading-none mt-1 drop-shadow-md group-hover:scale-110 group-hover:text-[#FF6666] origin-right transition-all">
                        부풀어 오름
                      </span>
                    </div>
                    {/* 지시선 (텍스트 우측에서 포인트로 연결) - 길이를 고정하여 포인트 지점을 명확히 유지 */}
                    <div className="w-8 md:w-16 h-[1px] bg-white/40 mr-1.5 shadow-sm transition-opacity duration-700 group-hover:bg-white/60" />
                    {/* 지점 포인트 (노란색 펄스) */}
                    <div className="relative transition-transform duration-700 group-hover:scale-125">
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,1)]" />
                      <div className="absolute inset-0 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping opacity-75" />
                    </div>
                  </div>
                </div>
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
              className="flex flex-col h-full"
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
                  PFC(Power Factor Correction)를 통합하여 일정하고 <br className="hidden md:block" />
                  안정적인 에너지 출력을 제공하는데 도움을 줍니다.
                </p>
              </div>

              {/* 파워 서플라이 장치 이미지 - 내부 테두리 제거 및 고정 비율 적용 */}
              <div className="relative glass-panel aspect-video bg-tech-grid/10 overflow-hidden mt-auto group flex items-center justify-center border-white/5">
                <img
                  src="/images/picok/pfc.png"
                  alt="PFC Power Supply Unit"
                  className="w-[95%] h-[95%] object-contain z-10 transition-transform duration-700 group-hover:scale-105"
                />
                {/* 하단 강조 글로우 */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-primary/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </motion.div>

            {/* 03. 핵심 부품의 조화 쪽 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
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
                  순수 자체 기술을 통한 개발과 생산으로 <br className="hidden md:block" />
                  핵심 부품 간의 정밀한 매칭을 구현했습니다.
                </p>
                <p className="text-slate-400 font-medium leading-relaxed max-w-md">
                  부적합을 줄이고 최상의 퍼포먼스를 실현하여<br className="hidden md:block" />
                  신뢰할 수 있는 안정성을 제공합니다.
                </p>
              </div>

              {/* 부품 조화 일러스트 영역 - 좌측과 동일한 aspect-video 적용 */}
              <div className="relative glass-panel aspect-video bg-tech-grid/50 border-t border-primary/20 mt-auto flex flex-col justify-center px-8 relative">
                <div className="text-center mb-6">
                  <h4 className="text-primary/90 font-black text-lg tracking-tight leading-tight uppercase">
                    Core Components Harmonization
                  </h4>
                </div>

                <div className="grid grid-cols-3 gap-4 relative">
                  {[
                    { label: 'OPTICS', img: 'core1.png' },
                    { label: 'POWER SUPPLY', img: 'core2.png' },
                    { label: 'CONTROLER', img: 'core3.png' }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center group">
                      <div className="aspect-square rounded-xl border border-white/10 bg-white/5 overflow-hidden mb-2 group-hover:border-primary/50 transition-all duration-500 flex items-center justify-center relative">
                        <img
                          src={`/images/picok/${item.img}`}
                          className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110"
                          alt={item.label}
                        />
                        <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <span className="text-[10px] text-white font-black tracking-widest group-hover:text-primary transition-colors uppercase">{item.label}</span>
                    </div>
                  ))}
                  {/* 연결 라인 장식 제거됨 */}
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
              className="flex flex-col h-full pb-10"
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
                <span className="hero-title-main">국내 최초 300PS <br className="md:hidden" /> 실명제</span>
              </h3>

              {/* 오실로스코프 파형 영역 (Empty Slot) */}
              <div className="relative glass-panel aspect-[16/10] bg-tech-grid/30 border border-white/10 rounded-sm mb-12 overflow-hidden flex items-center justify-center group/wave">
                <img
                  src="/images/picok/300ps.png"
                  alt="300ps Waveform"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover/wave:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/40 to-transparent pointer-events-none" />
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
                300PS 실명제를 운영하여 구매 고객들 대상으로 본사의 QC자료(PULSE DURATION)를
                투명하게 제공해드립니다.
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
                    { label: '항공/해상\n운송 테스트', img: '/images/picok/imo1.png' },
                    { label: '변성방지 솔루션\n개발 및 적용', img: '/images/picok/imo2.png' },
                    { label: '스위스제\n철도 부품 사용', img: '/images/picok/imo3.png' }
                  ].map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
                        <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:border-primary/60 group-hover:bg-primary/20 group-hover:shadow-[0_0_25px_rgba(0,183,241,0.3)]">
                          {step.img && (
                            <img
                              src={step.img}
                              alt={step.label}
                              className="w-[80%] h-[80%] object-contain brightness-0 invert opacity-80 transition-transform duration-500 group-hover:scale-110"
                            />
                          )}
                        </div>
                        <span className="text-[12px] text-slate-300 font-bold whitespace-pre-line leading-tight transition-colors duration-500 group-hover:text-primary">{step.label}</span>
                      </div>
                      {idx < 2 && <div className="text-primary/40 font-black text-xl">+</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* 암(Arm) 일러스트 및 빔 테스트 영역 (Empty Slot) */}
              <div className="grid grid-cols-2 gap-8 mt-auto">
                <div className="glass-panel aspect-square bg-tech-dots/10 flex items-center justify-center border-white/5 relative overflow-hidden group/arm cursor-help">
                  <img
                    src="/images/picok/arm.png"
                    alt="Robot Arm Alignment"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/arm:scale-105"
                  />

                  {/* 테두리 강조 레이어 */}
                  <div className="absolute inset-0 border border-primary/10 group-hover/arm:border-primary/40 transition-colors pointer-events-none" />

                  {/* 360도 회전 인디케이터 (상단 팔 관절 기둥에 맞춤) */}
                  <div className="absolute top-[28%] left-[42%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
                    <div className="relative flex items-center justify-center">
                      <svg
                        viewBox="0 0 200 100"
                        className="w-40 h-auto opacity-90 drop-shadow-[0_0_15px_rgba(255,62,62,0.4)] transition-all duration-700 group-hover/arm:opacity-100 group-hover/arm:scale-110 text-[#FF3E3E]"
                      >
                        <path
                          d="M40,50 C40,70 160,70 160,50 C160,30 40,30 40,50"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray="12 6"
                          className="animate-[pulse_3s_infinite]"
                        />
                        <path d="M155,50 L165,50 L160,60 Z" fill="currentColor" />
                      </svg>

                      <div className="absolute -right-16 -top-2 group-hover/arm:translate-x-3 transition-transform duration-700">
                        <span className="text-4xl md:text-5xl font-black text-[#FF3E3E] tracking-tighter italic drop-shadow-[0_0_25px_rgba(255,62,62,0.7)]">360°</span>
                      </div>
                    </div>
                  </div>

                  {/* 하단 캡션 (최종 밸런스 레이아웃) */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-black/60 backdrop-blur-md border border-white/10 px-6 py-2 shadow-2xl pointer-events-none w-fit">
                    <div className="w-[3px] h-10 bg-primary mr-5 shadow-[0_0_12px_rgba(0,183,241,0.8)]" />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[14px] font-black text-white tracking-[0.2em] uppercase leading-none whitespace-nowrap">
                        FULL ROTATION
                      </span>
                      <span className="text-[14px] font-black text-white tracking-[0.2em] uppercase leading-none mt-0.5 whitespace-nowrap">
                        ARM SYSTEM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-6">
                  {/* 정밀 빔 테스트 시각화 (circle.png 확대 버전) */}
                  <div className="relative w-48 h-48 flex items-center justify-center group/beam">
                    {/* 회전하는 은은한 빛의 링 */}
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite] opacity-50" />

                    {/* 메인 빔 테스트 이미지 */}
                    <img
                      src="/images/picok/circle.png"
                      alt="Beam Test Visualization"
                      className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,183,241,0.5)] transition-all duration-700 group-hover/beam:scale-110 group-hover/beam:rotate-6"
                    />

                    {/* 중앙 포인트 (동적 연출) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] group-hover/beam:scale-150 transition-transform" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-2xl font-black text-white tracking-widest uppercase">PICO-K</span><br />
                    <span className="text-lg font-black text-primary/80 uppercase tracking-tighter">BEAM TEST</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </>
  );
}
