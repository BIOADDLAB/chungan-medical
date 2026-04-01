'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row">
      {/* Full Height & Width Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="/images/backgrounds/growth_bg.png" className="w-full h-full object-cover" alt="growth vision" />
        {/* 전체적인 톤 조절을 위한 은은한 오버레이 */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Left: Semi-Transparent Blue Overlay (Narrower: 35%) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full lg:w-[35%] bg-[#00B7F1]/85 p-12 md:p-16 lg:p-20 flex flex-col justify-start min-h-screen"
      >
        {/* Main Header Text (Top) */}
        <div className="mt-10 md:mt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-20 tracking-tight">
            다년간의 업적은<br />청안의 신뢰성과<br />진실성을 말해줍니다.
          </h2>
        </div>

        {/* Intro Body Text (Middle to Bottom) */}
        <div className="space-y-10 text-white/95 text-base md:text-lg leading-relaxed font-medium">
          <div className="space-y-4">
            <p className="font-bold text-white">안녕하세요.</p>
            <p>주식회사 청안메디칼 코퍼레이션입니다.</p>
            <p>청안은 지난 20년 동안 국내 피부미용 의료장비 시장에 몸담아 오고 있습니다.</p>
          </div>

          <div className="space-y-4">
            <p>병의원 원장님과 맺은 인간적인 유대감과 장비 및 개원관련 수많은 경험을 바탕으로 국내에 광범위한 유통망을 확보해왔습니다.</p>
          </div>

          <div className="space-y-4">
            <p>앞으로도 더 나은 서비스와 혁신적인 솔루션을 제공하며 끊임없이 발전하는 모습으로 보답하겠습니다.</p>
          </div>

          <div className="pt-10">
            <p className="font-bold text-xl md:text-2xl text-white">감사합니다.</p>
          </div>
        </div>
      </motion.div>

      {/* Right Content (상단 슬로건) */}
      <div className="relative z-10 hidden lg:flex flex-grow justify-end items-start p-16 md:p-20 text-right">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-6xl font-black italic tracking-tighter leading-[1.1] drop-shadow-2xl"
        >
          DO WHAT IS RIGHT,<br />NOT WHAT IS EASY.
        </motion.h3>
      </div>
    </section>
  );
}
