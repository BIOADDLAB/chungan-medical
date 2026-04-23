'use client';
export const dynamic = 'force-dynamic';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FutureVisionPage() {
  return (
    <>
      {/* ① Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-[#020408]"
      >
        {/* 배경 이미지 레이어 */}
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 brightness-[0.6] contrast-[1.05]"
          alt="future vision background"
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
            <span className="hero-title-main block md:inline">FUTURE - </span>
            <span className="hero-title-highlight ml-0 md:ml-4">VISION</span>
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
              청안메디칼이 그리는 <span className="text-primary font-bold">내일의 가치</span>
            </p>
          </motion.div>
        </div>

        {/* 스크롤 유도 버튼 */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
          <Link
            href="#vision-content"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② Vision Content Section - AI Research Lab */}
      <section id="vision-content" className="relative py-28 bg-[#020408] overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 bg-tech-dots opacity-20 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* 좌측: 설명 텍스트 (Orchestration Standard 적용) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">
                Next-Gen R&D
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                <span className="text-primary font-black uppercase">AI 기반</span><br />
                <span className="text-white uppercase">의료 제조 및 연구소</span>
              </h2>
              <div className="w-20 h-[2px] bg-primary mb-8" />
              
              <div className="space-y-6">
                <p className="text-slate-200 font-bold text-xl leading-snug">
                  청안메디칼 AI 통합 연구소 설립 예정
                </p>
                <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl break-keep">
                  단순한 제조를 넘어 인공지능 기술을 결합한 지능형 의료 장비 연구를 위해 전용 R&D 센터 설립을 준비하고 있습니다. 더 정밀하고 안전한 내일의 의료 환경을 청안메디칼이 선도하겠습니다.
                </p>
              </div>
            </motion.div>

            {/* 우측: 연구소 이미지 (Generated Image 적용) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative glass-panel aspect-[4/3] overflow-hidden border-white/10 group-hover:border-primary/50 transition-all duration-1000">
                <img
                  src="/images/ai_medical_lab_vision.png"
                  alt="AI Medical Research Lab Vision"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* 오버레이 글로우 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-primary font-black text-xs tracking-widest uppercase bg-black/40 backdrop-blur-md px-3 py-1 border border-primary/30">
                    Proposed R&D Center
                  </span>
                </div>
              </div>
              {/* 이미지 하단 그림자/글로우 효과 */}
              <div className="absolute -bottom-6 inset-x-10 h-10 bg-primary/20 blur-[60px] opacity-50" />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
