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
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-sky-50"
      >
        {/* 배경 이미지 레이어 */}
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 brightness-[0.85] contrast-[1.05]"
          alt="future vision background"
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
            <span className="hero-title-main block md:inline !text-white">FUTURE - </span>
            <span className="hero-title-highlight ml-0 md:ml-4">VISION</span>
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
              청안메디칼이 그리는 <span className="text-primary font-bold">내일의 가치</span>
            </p>
          </motion.div>
        </div>

        {/* 스크롤 유도 버튼 */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
          <Link
            href="#vision-content"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-slate-300 rounded-full hover:bg-slate-100 hover:text-black transition duration-300 animate-bounce group bg-white/50 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700 group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② Vision Content Section - AI Research Lab */}
      <section id="vision-content" className="relative py-28 bg-white overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 bg-tech-dots opacity-10 mix-blend-multiply pointer-events-none" />
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
              <div className="inline-block px-4 py-1.5 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-slate-50 shadow-sm leading-none">
                Next-Gen R&D
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                <span className="text-primary font-black uppercase">AI 기반</span><br />
                <span className="text-slate-900 uppercase">의료 제조 및 연구소</span>
              </h2>
              <div className="w-20 h-[2px] bg-primary mb-8" />

              <div className="space-y-6">
                <p className="text-slate-800 font-bold text-xl leading-snug">
                  청안메디칼 AI 통합 연구소 설립 예정
                </p>
                <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl break-keep">
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
              <div className="relative glass-panel aspect-[4/3] overflow-hidden border border-slate-200 shadow-sm group-hover:border-primary/40 transition-all duration-1000">
                <img
                  src="/images/ai_medical_lab_vision.png"
                  alt="AI Medical Research Lab Vision"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* 오버레이 글로우 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-primary font-black text-xs tracking-widest uppercase bg-white/90 backdrop-blur-md px-3 py-1 border border-slate-200 shadow-sm">
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

      {/* ③ Vision Content Section - AI Data Visualization (Style 3) */}
      <section id="data-vision" className="relative py-28 bg-sky-50 overflow-hidden border-t border-sky-100">
        <div className="absolute inset-0 bg-tech-grid opacity-10 mix-blend-multiply pointer-events-none" />
        {/* 우측 상단 블루 글로우 */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* 좌측: 데이터 시각화 이미지 (lg:col-span-7) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative group"
            >
              <div className="relative glass-panel aspect-video overflow-hidden border border-slate-200 bg-white group-hover:border-primary/40 transition-all duration-1000 shadow-[0_20px_50px_rgba(0,183,241,0.1)]">
                <img
                  src="/images/ai_data_vision.png"
                  alt="AI Data Visualization Dashboard"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-40" />

                {/* 스캔 라인 애니메이션 효과 */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-1/2 w-full -translate-y-full animate-[scan_4s_linear_infinite] pointer-events-none" />
              </div>
              {/* 장식용 테크 요소 */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/30 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/30 pointer-events-none" />
            </motion.div>

            {/* 우측: 설명 텍스트 (lg:col-span-5) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="inline-block px-4 py-1.5 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-white shadow-sm leading-none">
                Data Integration
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
                <span className="text-slate-900 uppercase">지능형</span><br />
                <span className="text-primary font-black uppercase">데이터 솔루션</span>
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-8" />

              <div className="space-y-6">
                <p className="text-slate-800 font-bold text-xl leading-snug">
                  빅데이터 기반의 정밀 의료 알고리즘
                </p>
                <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl break-keep">
                  수만 건의 임상 데이터를 분석하여 최적의 에너지를 제안하는 스마트 알고리즘을 개발합니다. 청안메디칼의 모든 장비는 스스로 학습하고 진화하며 의료진에게 최상의 파트너가 될 것입니다.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ④ Vision Content Section - Full Width Announcement */}
      <section id="full-announcement" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* 전체 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ai_center_exterior.png"
            alt="AI Research Center Exterior"
            className="w-full h-full object-cover"
          />
          {/* 밝은 오버레이 및 틴트 */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-transparent to-white" />
        </div>

        {/* 중앙 텍스트 */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-white shadow-sm leading-none">
              Future Landmark
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-8 drop-shadow-sm">
              AI 관련 제조 및 연구소 <br className="hidden md:block" />
              <span className="text-primary">설립 예정</span>
            </h2>
            <div className="w-24 h-[2px] bg-primary mx-auto" />
          </motion.div>
        </div>

        {/* 테크 그리드 오버레이 (희미하게) */}
        <div className="absolute inset-0 bg-tech-grid opacity-10 mix-blend-multiply pointer-events-none" />
      </section>
    </>
  );
}
