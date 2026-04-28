'use client';
export const dynamic = 'force-dynamic';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function UPulsePage() {
  return (
    <>
      {/* ① Hero Section (PICO-K Style) */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-sky-50"
      >
        {/* 배경 이미지 레이어 */}
        <img
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 brightness-[0.85] contrast-[1.05]"
          alt="medical background"
        />
        {/* 그라디언트 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40 z-10" />
        {/* Tech Grid 오버레이 */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 mix-blend-multiply z-10 pointer-events-none" />

        {/* 콘텐츠 */}
        <div className="relative z-20 flex flex-col items-center max-w-screen-xl mx-auto px-6 w-full">
          {/* 타이틀 */}
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tight uppercase leading-tight text-white"
          >
            <span className="hero-title-main !text-white inline">U - PULSE</span>
            <span className="hero-title-highlight ml-2 md:ml-4">DUAL</span>
          </motion.h1>

          {/* 부제 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-[2px] bg-primary mb-6" />
            <p className="text-white/90 text-lg md:text-xl font-medium tracking-[0.2em] uppercase max-w-2xl">
              합리적인 피부미용 의료 장비, <span className="text-primary font-bold">정확한 기술의 시작</span>
            </p>
          </motion.div>
        </div>

        {/* 스크롤 유도 버튼 */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
          <Link
            href="#u-pulse-difference"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-slate-300 rounded-full hover:bg-slate-100 hover:text-black transition duration-300 animate-bounce group bg-white/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700 group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② U-Pulse Dual: Dual System Overview (Refined Design) */}
      <section id="dual-system" className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none mix-blend-multiply" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">

          {/* Main Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            {/* 배지 (네모박스 스타일) */}
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">
              Fractional CO2 Laser
            </div>

            {/* 타이틀 (REVOLUTIONARY 스타일) - 크기 조정 (text-3xl md:text-5xl) */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
              <span className="hero-title-main">U-PULSE</span>{" "}
              <span className="hero-title-highlight">DUAL</span>
            </h2>
            <div className="w-20 h-[2px] bg-primary mt-8" />
          </motion.div>


          {/* 2 Column Content Section (Mode & Handle) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">

            {/* Mode Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-6 mb-8 h-10">
                <div className="flex items-center justify-center h-7 px-4 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase bg-primary/5 leading-none shrink-0">
                  Mode
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight uppercase leading-none relative -top-[2px]">COS, PIN, FRX, SOL</h3>
              </div>

              {/* Image Container (Matched to Photo Style) */}
              <div className="relative aspect-[16/9] bg-sky-50 border border-sky-100 overflow-hidden group">
                <Image
                  src="/images/upulse_dual/dualmode.png"
                  alt="Mode: COS, PIN, FRX, SOL"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none mix-blend-multiply" />

                {/* Corner Accents (L-Shapes) */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-300" />
              </div>
            </motion.div>

            {/* Handle Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-6 mb-8 h-10">
                <div className="flex items-center justify-center h-7 px-4 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase bg-primary/5 leading-none shrink-0">
                  Handle
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight uppercase leading-none relative -top-[2px]">Black</h3>
              </div>

              {/* Image Container (Matched to Photo Style) */}
              <div className="relative aspect-[16/9] bg-sky-50 border border-sky-100 overflow-hidden group">
                <Image
                  src="/images/upulse_dual/dualhand.png"
                  alt="Handle: Black"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none mix-blend-multiply" />

                {/* Corner Accents (L-Shapes) */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-300" />
              </div>
            </motion.div>
          </div>

          {/* Handpiece System Section (Row 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6 mb-8 h-10">
              <div className="flex items-center justify-center h-7 px-4 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase bg-primary/5 leading-none shrink-0">
                Handpiece
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight uppercase leading-none relative -top-[2px]">VERSATILE HANDPIECE SYSTEM</h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { title: '50 mm', img: 'dual50mm.png' },
                { title: '100 mm', img: 'dual100mm.png' },
                { title: 'ZOOM', img: 'dualzoom.png' },
                { title: 'Fractional', img: 'dualfractional.png' }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div className="relative aspect-[3/4] bg-sky-50 border border-sky-100 overflow-hidden flex items-center justify-center mb-4 transition-all duration-500 hover:border-primary/40">
                    <Image
                      src={`/images/upulse_dual/${item.img}`}
                      alt={item.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none mix-blend-multiply" />
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-300" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-300" />
                  </div>
                  <div className="py-3 bg-white border-t border-sky-100 text-center transition-colors group-hover:bg-primary/5">
                    <span className="text-base font-bold text-slate-900 tracking-tight uppercase group-hover:text-primary transition duration-300">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION: SOL Mode Description & Indications Grid */}
      <section id="sol-mode-detail" className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none mix-blend-multiply" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">

          {/* Part 1: SOL Mode Text Description (Redesigned with Typography Consistency) */}
          <div className="relative mb-32 py-20 overflow-hidden">
            {/* Background Decorative Element (Subtle) */}


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-screen-lg mx-auto text-center relative z-10"
            >
              {/* 배지 (Fractional CO2 Laser) */}
              <div className="inline-block px-6 py-2 border border-primary/30 text-primary text-[11px] md:text-xs font-bold tracking-[0.5em] uppercase mb-10 bg-primary/5 leading-none">
                Fractional CO2 Laser
              </div>

              {/* 타이틀: text-3xl md:text-5xl */}
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-tight">
                SOL <span className="text-primary">Mode</span>
              </h2>

              {/* 밑줄 효과 (타이틀 아래로 이동) */}
              <div className="flex justify-center mb-12">
                <div className="w-16 h-[2px] bg-primary" />
              </div>

              <div className="space-y-10">
                {/* 본문 텍스트 크기 규칙: text-xl md:text-2xl */}
                <p className="text-xl md:text-2xl font-bold leading-relaxed text-slate-700">
                  SOL 모드는 <span className="text-primary">CO2 Fractional Laser</span>를 기반으로<br />
                  피부 내 <span className="text-primary">Micro Hole</span>을 만들어주는 피부 재생 장비입니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-16 px-4">
                  <div className="glass-panel p-8 border-sky-100 bg-sky-50 hover:bg-sky-100 transition-all group">
                    <p className="text-base md:text-lg font-medium leading-relaxed text-slate-600 group-hover:text-slate-900 transition-colors">
                      높은 Peak Power와 낮은 Pulse Duration이 열 손상을
                      최소화하고 부작용이 거의 없는 새로운 <span className="text-slate-900 font-bold">DDS</span>입니다.
                    </p>
                  </div>
                  <div className="glass-panel p-8 border-sky-100 bg-sky-50 hover:bg-sky-100 transition-all group">
                    <p className="text-base md:text-lg font-medium leading-relaxed text-slate-600 group-hover:text-slate-900 transition-colors">
                      Micro Hole은 유효 성분 전달 통로 역할은 하면서
                      동시에 섬유아세포를 활성화해 콜라겐 생성을 유도합니다.
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-10 inline-block"
                >
                  <div className="px-8 py-6 border-l-4 border-primary bg-primary/5 backdrop-blur-sm">
                    <p className="text-xl md:text-2xl font-black text-slate-900 leading-relaxed tracking-tight">
                      피부 손상과 부작용은 <span className="text-primary">최소화</span> 하고<br className="md:hidden" />
                      약물 전달의 기능은 <span className="text-primary">최대화</span> 했습니다.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Part 2: Indications Comparison Grid (FRX vs SOL) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* FRX Mode Indications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase">FRX <span className="font-light text-slate-500">mode</span></h3>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
              </div>

              <div className="glass-panel border-sky-100 bg-white p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none mix-blend-multiply" />
                <div className="grid grid-cols-2 gap-x-6 gap-y-10 relative z-10">
                  {[
                    { label: '눈 밑 리프팅', img: '/images/upulse_dual/frx_mode/눈밑리프팅.png' },
                    { label: '잔주름 박피', img: '/images/upulse_dual/frx_mode/잔주름박피.png' },
                    { label: '나비존(코) 모공', img: '/images/upulse_dual/frx_mode/나비존모공.png' },
                    { label: '여드름 흉터', img: '/images/upulse_dual/frx_mode/여드름흉터.png' },
                    { label: '패인 흉터', img: '/images/upulse_dual/frx_mode/패인흉터.png' },
                    { label: '흉터', img: '/images/upulse_dual/frx_mode/흉터.png' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center bg-white rounded-full aspect-square p-4 w-full max-w-[160px] md:max-w-[200px] mx-auto border border-sky-100 group/item transition-all duration-300"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 transition-all duration-500 relative">
                        {item.img ? (
                          <Image src={item.img} alt={item.label} fill className="object-contain p-0" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            {/* Placeholder removed */}
                          </div>
                        )}
                      </div>
                      <span className="text-sm md:text-base font-black text-slate-900 group-hover/item:text-primary transition-colors text-center leading-tight px-2">{item.label}</span>
                    </motion.div>
                  ))}

                  {/* Vertical Divider Line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10 border-l border-dashed border-primary/20 -translate-x-1/2" />
                </div>
              </div>
            </motion.div>

            {/* SOL Mode Indications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase">SOL <span className="font-light text-slate-500">mode</span></h3>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
              </div>

              <div className="glass-panel border-sky-100 bg-white p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none mix-blend-multiply" />
                <div className="grid grid-cols-2 gap-x-6 gap-y-10 relative z-10">
                  {[
                    { label: '약물 침투', img: '/images/upulse_dual/sol_mode/약물침투.png' },
                    { label: '피부 재생', img: '/images/upulse_dual/sol_mode/피부재생.png' },
                    { label: '피부톤 개선', img: '/images/upulse_dual/sol_mode/피부톤개선.png' },
                    { label: '피부장벽 개선', img: '/images/upulse_dual/sol_mode/피부장벽개선.png' },
                    { label: '주름 감소', img: '/images/upulse_dual/sol_mode/주름감소.png' },
                    { label: '탄력 증가', img: '/images/upulse_dual/sol_mode/탄력증가.png' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center bg-white rounded-full aspect-square p-4 w-full max-w-[160px] md:max-w-[200px] mx-auto border border-sky-100 group/item transition-all duration-300"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 transition-all duration-500 relative">
                        {item.img ? (
                          <Image src={item.img} alt={item.label} fill className="object-contain p-0" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            {/* Placeholder removed */}
                          </div>
                        )}
                      </div>
                      <span className="text-sm md:text-base font-black text-slate-900 group-hover/item:text-primary transition-colors text-center leading-tight px-2">{item.label}</span>
                    </motion.div>
                  ))}

                  {/* Vertical Divider Line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10 border-l border-dashed border-primary/20 -translate-x-1/2" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* NEW SECTION: Skin Rejuvenation Process Flow */}
      <section id="skin-rejuvenation" className="relative py-28 bg-sky-50 overflow-hidden">


        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col items-center text-center"
          >
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
              Dermal Regeneration
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
              Skin <span className="text-primary">Rejuvenation</span>
            </h2>
            <div className="w-20 h-[2px] bg-primary mt-8" />
          </motion.div>

          {/* Flow Cards Container */}
          <div className="max-w-5xl mx-auto flex flex-col items-center">

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full bg-white border border-sky-100 p-8 md:p-10 relative group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/30 group-hover:bg-primary transition-colors" />
              <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed text-center">
                SOL Mode는 피부에 <span className="text-slate-900 border-b border-primary/40">Micro Hole</span>을 만들고 기계적인 자극을 주어 섬유아세포를 활성화시켜<br className="hidden md:block" />
                콜라겐과 엘라스틴의 생성을 증가시켜 피부 재생을 유도합니다.
              </p>
            </motion.div>

            {/* Down Arrow 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="py-8 flex flex-col items-center opacity-40"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-primary animate-pulse">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full bg-white border border-sky-100 p-8 md:p-10 relative group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-sky-100 group-hover:bg-sky-200 transition-colors" />
              <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed text-center">
                SOL Mode는 주변 조직에 <span className="text-slate-900 font-black underline decoration-primary/40 decoration-2 underline-offset-4">열 손상을 주지 않고</span>,<br className="hidden md:block" />
                적절한 열에너지를 피부에 전달해주어 섬유아세포를 활성화시키고 피부 재생을 유도합니다.
              </p>
            </motion.div>

            {/* Down Arrow 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="py-8 flex flex-col items-center opacity-40"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-primary animate-pulse">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full bg-white border border-sky-100 p-8 md:p-10 relative group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/30 group-hover:bg-primary transition-colors" />
              <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed text-center">
                SOL Mode로 뚫은 섬세한 Micro Hole은 <span className="text-slate-900">상부 진피층(Papillary layer)</span> 내의<br className="hidden md:block" />
                섬유아세포까지 유효 물질을 전달시켜주는 <span className="text-primary font-black border-b border-primary/60">통로</span>로 사용될 수 있습니다.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* NEW SECTION: SOL Mode Advantages & Benefits (Horizontal Layout) */}
      <section id="sol-mode-benefits" className="relative py-28 bg-white overflow-hidden">


        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 flex flex-col items-center text-center"
          >
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
              Clinical Performance
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
              SOL Mode <span className="text-primary">Key Features</span>
            </h2>
            <div className="w-20 h-[2px] bg-primary mt-8" />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

            {/* Left Column: Key Advantages Checklist */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-[40%] space-y-5"
            >
              {[
                '적은 통증',
                '시술 후 높은 만족도',
                'PIH 걱정 제로',
                '부작용 최소화',
                '다양한 피부 타입에 적용 가능',
                '유지 비용 없음'
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-5 group">
                  <div className="flex-shrink-0 w-7 h-7 rounded border border-sky-100 bg-sky-50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-slate-600 group-hover:text-primary transition-colors">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Right Column: Core Benefits Circular Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-[60%]"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                {[
                  {
                    title: <>약물 침투<br />피부 재생</>,
                    code: 'DDS',
                    img: '/images/upulse_dual/key1.png'
                  },
                  {
                    title: <>피부톤 개선<br />피부장벽 개선</>,
                    code: 'TONE',
                    img: '/images/upulse_dual/key2.png'
                  },
                  {
                    title: <>주름 감소<br />탄력 증가</>,
                    code: 'LIFT',
                    img: '/images/upulse_dual/key3.png'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="flex flex-col items-center bg-white rounded-[40px] p-10 md:p-12 border border-sky-100 group transition-all duration-500"
                  >
                    {/* Square Image Slot */}
                    <div className="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 flex items-center justify-center mb-8 relative group-hover:scale-110 transition-all duration-700">
                      {item.img ? (
                        <Image
                          src={item.img}
                          alt={item.code}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center rounded-2xl">
                          <span className="text-slate-500 font-black text-xl tracking-widest uppercase select-none">{item.code}</span>
                        </div>
                      )}
                    </div>

                    {/* Title Text */}
                    <div className="text-center">
                      <h4 className="text-lg md:text-xl font-black text-[#1A1D25] tracking-tight leading-snug group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />


















    </>
  );
}
