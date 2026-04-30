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
            className="text-[30px] md:text-7xl font-black mb-8 tracking-tight uppercase leading-tight text-white whitespace-nowrap"
          >
            <span className="hero-title-main !text-white">FUTURE - </span>
            <span className="hero-title-highlight ml-2 md:ml-4">VISION</span>
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
              청안메디칼이 그리는 <br className="block md:hidden" /> <span className="text-primary font-bold">내일의 가치</span>
            </p>
          </motion.div>
        </div>

        {/* 스크롤 유도 버튼 */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
          <Link
            href="#full-announcement"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-slate-300 rounded-full hover:bg-slate-100 hover:text-black transition duration-300 animate-bounce group bg-white/50 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700 group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>





      {/* ④ Vision Content Section - Full Width Announcement */}
      <section id="full-announcement" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 전체 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ai_center_exterior.png"
            alt="AI Research Center Exterior"
            className="w-full h-full object-cover brightness-[0.7] saturate-[0.8] contrast-[1.1]"
          />
          {/* 어두운 오버레이 및 비네팅 효과 (가독성 극대화) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-10" />
        </div>

        {/* 중앙 텍스트 */}
        <div className="relative z-20 max-w-screen-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 border border-white/30 text-white text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-white/10 backdrop-blur-sm leading-none">
              Future Landmark
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-8 drop-shadow-lg">
              AI 관련 제조 및 연구소 <br />
              <span className="text-primary drop-shadow-md">설립 예정</span>
            </h2>
            <div className="w-24 h-[2px] bg-primary mx-auto drop-shadow-md" />
          </motion.div>
        </div>

        {/* 테크 그리드 오버레이 제거 */}
        <div className="absolute inset-0 pointer-events-none" />
      </section>
    </>
  );
}
