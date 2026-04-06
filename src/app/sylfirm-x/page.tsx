'use client';
export const dynamic = 'force-dynamic';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SylfirmXPage() {
  return (
    <main className="bg-[#020408] min-h-screen">
      {/* ① Hero Section (Standard Tech Style) */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-[#020408]"
      >
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 brightness-[0.5] contrast-[1.1]"
          alt="medical background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/30 via-transparent to-[#050810]/70 z-10" />
        <div className="absolute inset-0 bg-tech-grid opacity-30 mix-blend-screen z-10 pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center max-w-screen-xl mx-auto px-6 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tight uppercase leading-tight"
          >
            <span className="hero-title-main block md:inline">SYLFIRM - </span>
            <span className="hero-title-highlight ml-0 md:ml-4">X</span>
          </motion.h1>

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

        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center text-white">
          <Link
            href="#content"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② Sylfirm-X Overview Section (Orchestration Standard) */}
      <section id="content" className="relative py-28 bg-[#020408] overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

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
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-125 opacity-40 group-hover:opacity-60 transition duration-1000" />
                <img
                  src="images/machine/실펌x 사진.png"
                  alt="SYLFIRM X Advanced System"
                  className="relative z-10 w-full max-w-[420px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,183,241,0.2)] group-hover:scale-105 transition-transform duration-700 ease-out"
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
                  <div className="w-20 h-[2px] bg-primary mb-8 shadow-[0_0_10px_rgba(0,183,241,0.5)]" />
                </div>

                <div className="space-y-10">
                  <div className="flex gap-6 items-start">
                    <div className="flex items-center h-[1.75rem] md:h-[2.25rem] shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="text-slate-200 text-lg md:text-xl font-black tracking-tight mb-2 uppercase font-inter">PRECISION RF DELIVERY</p>
                      <p className="text-slate-400 text-[15px] md:text-[16px] font-medium leading-relaxed tracking-tight">
                        SYLFIRM X는 Needle RF장비로 피부 속 원하는 깊이에 바늘(Needle)이 침습(Invasive)해 피부 속에서 고주파 열을 전달해 효과를 내는 장비입니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="flex items-center h-[1.75rem] md:h-[2.25rem] shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="text-slate-200 text-lg md:text-xl font-black tracking-tight mb-2 uppercase font-inter">VERSATILE SOLUTIONS</p>
                      <p className="text-slate-400 text-[15px] md:text-[16px] font-medium leading-relaxed tracking-tight">
                        레이저와 달리 피부 타입, 피부 컬러에 상관없이 시술 가능하며, 민감해 레이저 시술이 불가능한 환자도 시술 가능합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="flex items-center h-[1.75rem] md:h-[2.25rem] shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="text-slate-200 text-lg md:text-xl font-black tracking-tight mb-2 uppercase font-inter">8 CUSTOM MODES</p>
                      <p className="text-slate-400 text-[15px] md:text-[16px] font-medium leading-relaxed tracking-tight">
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
      <section id="indication" className="relative py-28 bg-[#050810] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">
              Dual Mode System
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase h-auto">
              <span className="hero-title-main">SYLFIRM - X</span><br className="md:hidden" />
              <span className="hero-title-main text-primary ml-0 md:ml-4">INDICATION</span>
            </h2>
            <div className="w-20 h-[2px] bg-primary mx-auto mb-8 shadow-[0_0_10px_rgba(0,183,241,0.5)]" />
            <div className="max-w-4xl mx-auto space-y-1 text-slate-400 text-[15px] md:text-[16px] font-medium leading-relaxed tracking-tight text-center">
              <p>SYLFIRM X는 Continuous(CW) 방식만 가능한 타 Needle RF와 달리 <span className="text-white font-bold">Pulsed(PW)방식도 완벽히 구현</span> 가능합니다.</p>
              <p>PW모드 사용으로 기저막과 혈관벽의 선택적 열 반응을 통해 <span className="text-primary font-black">기미, 홍조, PIH</span> 치료에 탁월한 성과를 보입니다.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* CW MODE PANEL */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-panel p-8 md:p-12 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 select-none pointer-events-none">
                <span className="text-6xl font-black text-white/5 uppercase font-inter">CW</span>
              </div>
              <div className="mb-12">
                <div className="text-primary text-xs font-black tracking-widest mb-2 uppercase font-inter">CONTINUOUS WAVE</div>
                <h3 className="text-3xl font-black text-white uppercase font-inter">CW MODE</h3>
                <p className="text-slate-400 text-sm mt-3">진피부터 표피까지 피부 층 전체에 열 에너지 전달</p>
              </div>
              <div className="relative w-full aspect-video bg-[#0A0D16] border border-white/5 rounded-lg mb-12 overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-tech-dots opacity-20" />
                 <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 border-2 border-primary/20 rounded-full flex items-center justify-center animate-pulse mb-4">
                       <div className="w-8 h-8 bg-primary/40 rounded-full blur-sm" />
                    </div>
                    <span className="text-[10px] text-primary/40 font-bold tracking-widest uppercase mb-4">Waveform Visualization</span>
                 </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/20" />
                  <span className="text-[11px] font-black tracking-[0.2em] text-primary/60 uppercase">Indications</span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/20" />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between items-center py-4 px-6 bg-white/[0.02] border border-white/5 rounded-lg group-hover:border-primary/20 transition duration-500">
                    <span className="text-slate-300 font-bold text-sm">Scalp Treatment</span>
                    <span className="text-primary text-sm font-black uppercase">두피 시술 (리프팅/순환)</span>
                  </div>
                  <div className="flex justify-between items-center py-4 px-6 bg-white/[0.02] border border-white/5 rounded-lg group-hover:border-primary/20 transition duration-500">
                    <span className="text-slate-300 font-bold text-sm">Face Rejuvenation</span>
                    <span className="text-primary text-sm font-black uppercase">타이트닝 / 리프팅</span>
                  </div>
                  <div className="flex justify-between items-center py-4 px-6 bg-white/[0.02] border border-white/5 rounded-lg group-hover:border-primary/20 transition duration-500">
                    <span className="text-slate-300 font-bold text-sm">Pore & Scars</span>
                    <span className="text-primary text-sm font-black uppercase">모공 / 흉터 / 여드름</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PW MODE PANEL */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-panel p-8 md:p-12 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 select-none pointer-events-none">
                <span className="text-6xl font-black text-white/5 uppercase font-inter">PW</span>
              </div>
              <div className="mb-12">
                <div className="text-primary text-xs font-black tracking-widest mb-2 uppercase font-inter">PULSED WAVE</div>
                <h3 className="text-3xl font-black text-white uppercase font-inter">PW MODE</h3>
                <p className="text-slate-400 text-sm mt-3">기저막, 혈관벽에만 열 에너지가 선택적으로 반응</p>
              </div>
              <div className="relative w-full aspect-video bg-[#0A0D16] border border-white/5 rounded-lg mb-12 overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-tech-dots opacity-20" />
                 <div className="relative z-10 flex flex-col items-center">
                    <div className="flex gap-2">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="w-3 h-12 bg-primary/40 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                       ))}
                    </div>
                    <span className="text-[10px] text-primary/40 font-bold tracking-widest uppercase mt-4">Pulsed Visualization</span>
                 </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/20" />
                  <span className="text-[11px] font-black tracking-[0.2em] text-primary/60 uppercase">Indications</span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/20" />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between items-center py-4 px-6 bg-white/[0.02] border border-white/5 rounded-lg group-hover:border-primary/20 transition duration-500">
                    <span className="text-slate-300 font-bold text-sm">Pigmentation</span>
                    <span className="text-primary text-sm font-black uppercase">기미 / PIH</span>
                  </div>
                  <div className="flex justify-between items-center py-4 px-6 bg-white/[0.02] border border-white/5 rounded-lg group-hover:border-primary/20 transition duration-500">
                    <span className="text-slate-300 font-bold text-sm">Vascular</span>
                    <span className="text-primary text-sm font-black uppercase">홍조 / 혈관 치료</span>
                  </div>
                  <div className="flex justify-between items-center py-4 px-6 bg-white/[0.02] border border-white/5 rounded-lg group-hover:border-primary/20 transition duration-500">
                    <span className="text-slate-300 font-bold text-sm">Inflammatory</span>
                    <span className="text-primary text-sm font-black uppercase">염증성 여드름</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ④ Pricing Section (Orchestration Standard) */}
      <section id="pricing" className="relative py-28 bg-[#020408] overflow-hidden border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-14">
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">PRICING POLICY</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 uppercase text-white">SYLFIRM X 시술 수가</h2>
            <div className="w-20 h-[2px] bg-primary mx-auto mb-8 shadow-[0_0_10px_rgba(0,183,241,0.5)]" />
            <div className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-3xl mx-auto">
              <p>서울, 경기 평균 수가로 지역 및 원내 구비 장비에 따라 상이합니다.</p>
              <p>아래 사항은 예시로 병원에 맞는 장비 및 횟수로 조정하시면 됩니다.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left uppercase font-inter">
             <div className="glass-panel p-8">
                <h3 className="text-primary text-xs font-black mb-4 uppercase">SINGLE TREATMENT</h3>
                <p className="text-2xl font-black text-white mb-6">실펌X 단독 시술 1회</p>
                <div className="text-4xl font-black text-white mb-8">25~30<span className="text-lg ml-1">만</span></div>
                <div className="text-[11px] text-slate-500 font-medium leading-relaxed font-sans normal-case">
                   * CW모드로 리프팅 시술 시 수가 상향 가능<br />
                   * 팁 값 별도 측정 가능
                </div>
             </div>
             <div className="glass-panel p-8 border-primary/30 bg-primary/5">
                <h3 className="text-primary text-xs font-black mb-4 uppercase">COMBINATION A</h3>
                <p className="text-2xl font-black text-white mb-6">미백/홍조 복합 솔루션</p>
                <div className="text-4xl font-black text-white mb-8">40~45<span className="text-lg ml-1">만</span></div>
                <div className="text-[11px] text-slate-300 font-medium leading-relaxed font-sans normal-case">
                   실펌X + 토닝/레이저 + 특수 진정 관리 포함
                </div>
             </div>
             <div className="glass-panel p-8">
                <h3 className="text-primary text-xs font-black mb-4 uppercase">COMBINATION B</h3>
                <p className="text-2xl font-black text-white mb-6">아기 피부 리페어</p>
                <div className="text-4xl font-black text-white mb-8">60~80<span className="text-lg ml-1">만</span></div>
                <div className="text-[11px] text-slate-500 font-medium leading-relaxed font-sans normal-case">
                   실펌X + 스킨부스터/PRP + 재생 관리 포함
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
