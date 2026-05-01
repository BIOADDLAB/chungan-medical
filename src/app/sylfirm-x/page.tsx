'use client';
export const dynamic = 'force-dynamic';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SylfirmXPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ① Hero Section (Standard Tech Style) */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-sky-100"
      >
        <img
          src="/images/cover/sylfirmx_cover.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.95]"
          alt="Sylfirm X Cover"
        />
        {/* 어두운 오버레이 (밝기 낮추기) */}
        <div className="absolute inset-0 bg-black/10 z-10" />
        {/* 그라디언트 오버레이 (상하단 깊이감) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />
        {/* Tech Grid 오버레이 */}
        <div className="absolute inset-0 bg-tech-grid opacity-20 mix-blend-overlay z-10 pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center max-w-screen-xl mx-auto px-6 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tight uppercase leading-tight whitespace-nowrap text-white"
          >
            <span className="hero-title-main !text-white">SYLFIRM - </span>
            <span className="hero-title-highlight ml-1 md:ml-4">X</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-[2px] bg-primary mb-6" />
            <p className="text-white/90 text-lg md:text-xl font-medium tracking-tight uppercase max-w-2xl">
              합리적인 피부미용 의료 장비, <span className="text-primary font-bold">정확한 기술의 시작</span>
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
          <Link
            href="#content"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-slate-300 rounded-full hover:bg-slate-100 hover:text-black transition duration-300 animate-bounce group bg-white/50 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700 group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② Sylfirm-X Overview Section (Orchestration Standard) */}
      <section id="content" className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none mix-blend-multiply" />

        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
            <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase leading-none">CORE TECHNOLOGY</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1 flex justify-center"
            >
              <div className="relative group">

                <img
                  src="images/machine/실펌x 사진1.png"
                  alt="SYLFIRM X Advanced System"
                  className="relative z-10 w-full max-w-[200px] md:max-w-[250px] h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>

            <div className="relative order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase leading-tight">
                    <span className="hero-title-main">WHAT IS</span><br />
                    <span className="hero-title-main text-primary">SYLFIRM - X</span>
                  </h2>
                  <div className="w-20 h-[2px] bg-primary mb-8" />
                </div>

                <div className="space-y-10">
                  <div className="flex gap-6 items-start">
                    <div className="shrink-0 w-2 h-7 md:h-8 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="text-slate-900 text-lg md:text-xl font-black tracking-tight mb-2 uppercase font-inter leading-none h-7 md:h-8 flex items-center">PRECISION RF DELIVERY</p>
                      <p className="text-slate-600 text-[15px] md:text-[16px] font-medium leading-relaxed tracking-tight">
                        SYLFIRM X는 Needle RF장비로 피부 속 원하는 깊이에 바늘(Needle)이 <br className="hidden md:block" />
                        침습(Invasive)해 피부 속에서 고주파 열을 전달해 효과를 내는 장비입니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="shrink-0 w-2 h-7 md:h-8 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="text-slate-900 text-lg md:text-xl font-black tracking-tight mb-2 uppercase font-inter leading-none h-7 md:h-8 flex items-center">VERSATILE SOLUTIONS</p>
                      <p className="text-slate-600 text-[15px] md:text-[16px] font-medium leading-relaxed tracking-tight">
                        레이저와 달리 피부 타입 · 피부 컬러에 상관없이 시술 가능하며 <br className="hidden md:block" />
                        민감해 레이저 시술이 불가능한 환자도 시술 가능합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="shrink-0 w-2 h-7 md:h-8 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="text-slate-900 text-lg md:text-xl font-black tracking-tight mb-2 uppercase font-inter leading-none h-7 md:h-8 flex items-center">8 CUSTOM MODES</p>
                      <p className="text-slate-600 text-[15px] md:text-[16px] font-medium leading-relaxed tracking-tight">
                        8가지 모드로 환자의 피부 상태 및 원하는 효과에 따라 모드를 선택해 시술합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ Sylfirm-X Indication Section (Orchestration Standard) */}
      <section id="indication" className="relative py-28 bg-sky-100 overflow-hidden border-t border-sky-100">
        <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none mix-blend-multiply" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none"
            >
              Dual Mode System
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase h-auto"
            >
              <span className="hero-title-main">SYLFIRM - X</span><br className="md:hidden" />
              <span className="hero-title-main text-primary ml-0 md:ml-4">INDICATION</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ originX: 0.5 }}
              className="w-20 h-[2px] bg-primary mx-auto mb-8"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-1 text-slate-600 text-[15px] md:text-[16px] font-medium leading-relaxed tracking-tight text-center"
            >
              <p>SYLFIRM X는 Continuous(CW) 방식만 가능한 타 Needle RF와 달리 <span className="text-slate-900 font-bold">Pulsed(PW)방식도 완벽히 <br className="md:hidden" />구현</span> 가능합니다.</p>
              <p>PW모드 사용으로 기저막과 혈관벽의 선택적 열 반응을 통해 <span className="text-primary font-black">기미, 홍조, PIH</span> 치료에 탁월한 성과를 <br className="md:hidden" />보입니다.</p>
            </motion.div>
          </div>

          {/* Redesigned 2-Column Table Grid (Directly Following Reference Photo) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-screen-xl mx-auto border border-sky-100 bg-white rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 items-stretch">

              {/* LEFT COLUMN: CW MODE */}
              <div className="flex flex-col">
                <div className="flex flex-col flex-grow">
                  <div className="p-6 text-center border-b border-slate-200 bg-slate-50 shrink-0 h-[100px] flex flex-col justify-center">
                    <h3 className="text-xl font-black text-slate-900 font-inter tracking-[0.2em] mb-1 leading-none uppercase">CW MODE</h3>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest leading-none mt-2">(Continuous Wave)</p>
                  </div>

                  <div className="p-8 space-y-6 flex-grow flex flex-col justify-center bg-white">
                    <div className="aspect-[16/7] bg-sky-100 rounded-lg flex items-center justify-center relative overflow-hidden group shrink-0 border border-sky-100">
                      <img src="/images/sylfirmx/cw1.png" alt="CW Energy visualization" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                    <div className="text-center">
                      <p className="text-slate-900 text-[14px] md:text-[15px] font-bold mb-1 tracking-tight leading-relaxed">진피부터 표피까지 피부 층 전체에 <br className="md:hidden" />열 에너지 전달</p>
                      <p className="text-slate-500 text-[11px] font-medium tracking-tight leading-none">기존의 모든 Needle RF device의 에너지 방식</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 flex flex-col shrink-0">
                  <div className="grid grid-cols-[120px_1fr] bg-slate-50 border-b border-slate-200 h-[50px] shrink-0">
                    <div className="text-center text-slate-600 text-[10px] font-black uppercase font-inter border-r border-slate-200 flex items-center justify-center">Mode (Duration)</div>
                    <div className="text-center text-slate-600 text-[10px] font-black uppercase font-inter flex items-center justify-center tracking-[0.2em]">Indication</div>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] border-b border-slate-200 h-[80px] shrink-0">
                    <div className="flex items-center justify-center bg-slate-50 border-r border-slate-200">
                      <span className="text-primary text-xs font-black font-inter tracking-widest text-center">CW1</span>
                    </div>
                    <div className="flex items-center justify-center bg-transparent px-6">
                      <span className="text-slate-700 text-[14px] md:text-[15px] font-medium tracking-tight text-center">두피 시술 <br className="md:hidden" />(리프팅 / 순환 등)</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] h-[240px] shrink-0">
                    <div className="flex flex-col divide-y divide-slate-200 border-r border-slate-200 bg-slate-50">
                      {['CW2', 'CW3', 'CW4'].map(mode => (
                        <div key={mode} className="flex-1 flex items-center justify-center">
                          <span className="text-primary text-xs font-black font-inter tracking-widest text-center">{mode}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center text-center bg-transparent p-6">
                      <span className="text-slate-700 text-[14px] md:text-[15px] font-medium leading-relaxed tracking-tight">
                        타이트닝 / 리프팅<br />모공 / 흉터 / 여드름 / <br className="md:hidden" />이중턱
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: PW MODE */}
              <div className="flex flex-col">
                <div className="flex flex-col flex-grow">
                  <div className="p-6 text-center border-b border-slate-200 bg-slate-50 shrink-0 h-[100px] flex flex-col justify-center">
                    <h3 className="text-xl font-black text-slate-900 font-inter tracking-[0.2em] mb-1 leading-none uppercase">PW MODE</h3>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest leading-none mt-2">(Pulsed Wave)</p>
                  </div>

                  <div className="p-8 space-y-6 flex-grow flex flex-col justify-center bg-white">
                    <div className="aspect-[16/7] bg-sky-100 rounded-lg flex items-center justify-center relative overflow-hidden group shrink-0 border border-sky-100">
                      <img src="/images/sylfirmx/pw1.png" alt="PW Energy visualization" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                    <div className="text-center">
                      <p className="text-slate-900 text-[14px] md:text-[15px] font-bold mb-1 tracking-tight leading-relaxed">기저막, 혈관에만 열 에너지가 <br className="md:hidden" />선택적으로 반응</p>
                      <p className="text-slate-500 text-[11px] font-medium tracking-tight leading-none">SYLFIRM에서부터 사용하던 비올의 기술력</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 flex flex-col shrink-0">
                  <div className="grid grid-cols-[120px_1fr] bg-slate-50 border-b border-slate-200 h-[50px] shrink-0">
                    <div className="text-center text-slate-600 text-[10px] font-black uppercase font-inter border-r border-slate-200 flex items-center justify-center">Mode (Duration)</div>
                    <div className="text-center text-slate-600 text-[10px] font-black uppercase font-inter flex items-center justify-center tracking-[0.2em]">Indication</div>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] h-[320px] shrink-0">
                    <div className="flex flex-col divide-y divide-slate-200 border-r border-slate-200 bg-slate-50">
                      {['PW1', 'PW2', 'PW3', 'PW4'].map(mode => (
                        <div key={mode} className="flex-1 flex items-center justify-center">
                          <span className="text-primary text-xs font-black font-inter tracking-widest text-center">{mode}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center text-center bg-transparent p-6">
                      <span className="text-slate-700 text-[14px] md:text-[15px] font-medium leading-relaxed tracking-tight">
                        기미 / 홍조<br />염증성 여드름
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Cleaned Horizontal Detailed Indication Features Block */}
          <div className="max-w-screen-xl mx-auto mt-24 px-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

              {/* Card 1: 300 Mode */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white border border-sky-100 p-8 md:p-10 flex flex-col items-center group hover:bg-sky-50 transition-all duration-500 rounded-3xl"
              >
                <div className="shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#D1D9F0] to-[#E2E8F7] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl font-black text-[#1A1C23] font-inter leading-none">300</span>
                </div>
                <div className="text-center mb-8 h-[70px] flex items-center justify-center">
                  <h4 className="text-[17px] md:text-[18px] font-black text-slate-900 leading-relaxed break-keep">
                    최소 통증, 최소 마취 시술이 <br className="md:hidden" />
                    <span className="whitespace-nowrap">가능한 <span className="text-primary">300마이크론(μm) 모드</span></span>
                  </h4>
                </div>
                <div className="w-10 h-[1px] bg-primary/30 mb-8" />
                <ul className="space-y-4 text-slate-600 text-[14px] font-medium leading-relaxed tracking-tight text-left w-full">
                  <li className="flex items-start gap-3">
                    <div className="flex items-center h-[21px] shrink-0">
                      <span className="text-primary text-[8px]">●</span>
                    </div>
                    <span className="break-keep">아기 피부에서 보이는 Type 3 Collagen과 섬유아세포가 많이 분포된 유두진피층 타겟</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center h-[21px] shrink-0">
                      <span className="text-primary text-[8px]">●</span>
                    </div>
                    <span className="break-keep">10분 내외의 마취로 통증 없이 시술 가능</span>
                  </li>
                </ul>
              </motion.div>

              {/* Card 2: Cell Mode (C) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-sky-100 p-8 md:p-10 flex flex-col items-center group hover:bg-sky-50 transition-all duration-500 rounded-3xl"
              >
                <div className="shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#D1D9F0] to-[#E2E8F7] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-6xl font-black text-[#1A1C23] font-inter leading-none">C</span>
                </div>
                <div className="text-center mb-8 h-[70px] flex items-center justify-center">
                  <h4 className="text-[17px] md:text-[18px] font-black text-slate-900 leading-relaxed break-keep">
                    피부 탄력&리프팅&흉터 <br className="md:hidden" />
                    <span className="whitespace-nowrap">개선에 <span className="text-primary">최적화 된 셀모드(CW)</span></span>
                  </h4>
                </div>
                <div className="w-10 h-[1px] bg-primary/30 mb-8" />
                <ul className="space-y-4 text-slate-600 text-[14px] font-medium leading-relaxed tracking-tight text-left w-full">
                  <li className="flex items-start gap-3">
                    <div className="flex items-center h-[21px] shrink-0">
                      <span className="text-primary text-[8px]">●</span>
                    </div>
                    <span className="break-keep">콜라겐, 엘라스틴파이버 생성으로 피부 탄력 개선</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center h-[21px] shrink-0">
                      <span className="text-primary text-[8px]">●</span>
                    </div>
                    <span className="break-keep">피부의 노화로 커지는 모공, 울퉁불퉁 흉터</span>
                  </li>
                </ul>
              </motion.div>

              {/* Card 3: Repair Mode (P) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border border-sky-100 p-8 md:p-10 flex flex-col items-center group hover:bg-sky-50 transition-all duration-500 rounded-3xl"
              >
                <div className="shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#D1D9F0] to-[#E2E8F7] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-6xl font-black text-[#1A1C23] font-inter leading-none">P</span>
                </div>
                <div className="text-center mb-8 h-[70px] flex items-center justify-center">
                  <h4 className="text-[17px] md:text-[18px] font-black text-slate-900 leading-relaxed break-keep">
                    기미&홍조&색소침착에 <br className="md:hidden" />
                    <span className="text-primary whitespace-nowrap">최적화 된 리페어(PW)</span>
                  </h4>
                </div>
                <div className="w-10 h-[1px] bg-primary/30 mb-8" />
                <ul className="space-y-4 text-slate-600 text-[14px] font-medium leading-relaxed tracking-tight text-left w-full">
                  <li className="flex items-start gap-3">
                    <div className="flex items-center h-[21px] shrink-0">
                      <span className="text-primary text-[8px]">●</span>
                    </div>
                    <span className="break-keep">기미 원인인 기저막 붕괴 및 혈관 치료</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center h-[21px] shrink-0">
                      <span className="text-primary text-[8px]">●</span>
                    </div>
                    <span className="break-keep">피부 톤/결 개선, 큰 혈관, 염증성 여드름</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex items-center h-[21px] shrink-0">
                      <span className="text-primary text-[8px]">●</span>
                    </div>
                    <span className="break-keep">레이저 후 발생하는 PIH 및 화상 흉터</span>
                  </li>
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

