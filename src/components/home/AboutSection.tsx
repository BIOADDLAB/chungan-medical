'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row bg-white">
      {/* Full Height & Width Background with Tech Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="/images/backgrounds/medical_tech_bg.png" className="w-full h-full object-cover" alt="medical tech background" />

        <div className="absolute inset-0 bg-tech-dots opacity-40 mix-blend-multiply" />
      </div>

      {/* Left: Glassmorphism Panel (Replaces solid blue) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full lg:w-[40%] flex flex-col justify-start min-h-screen"
      >
        <div className="glass-panel w-full flex-1 flex flex-col justify-start p-8 md:p-16 lg:p-20 pt-24 md:pt-32 relative overflow-hidden">
          {/* Tech Accent Elements inside panel */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B7F1] to-transparent opacity-70" />
          <div className="absolute top-0 left-0 w-[4px] h-[100px] bg-[#00B7F1]" />

          {/* Main Header Text (Top) */}
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-20 tracking-tight tech-border-l pl-6 whitespace-normal md:whitespace-nowrap">
              다년간의 업적은 청안의<br /><span className="text-primary">신뢰성</span>과 진실성을 말해줍니다.
            </h2>
          </div>

          {/* Intro Body Text (Middle to Bottom) */}
          <div className="space-y-10 text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            <div className="space-y-2">
              <p className="font-bold text-slate-900 text-xl">안녕하세요.</p>
              <p className="text-slate-900/90">주식회사 청안메디칼 코퍼레이션입니다.</p>
              <p>청안은 지난 20년 동안 국내 피부미용 의료장비 시장에 몸담아 오고 있습니다.</p>
            </div>

            <div className="space-y-4">
              <p>병의원 원장님과 맺은 인간적인 유대감과 장비 및 개원관련 수많은 경험을 바탕으로 국내에 광범위한 유통망을 확보해왔습니다.</p>
            </div>

            <div className="space-y-4">
              <p>앞으로도 더 나은 서비스와 혁신적인 솔루션을 제공하며 끊임없이 발전하는 모습으로 보답하겠습니다.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Content (상단 슬로건 - Tech Style) */}
      <div className="relative z-10 hidden lg:flex flex-grow justify-end items-start p-16 md:p-20 pt-24 md:pt-32 text-right">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >

          <h3 className="text-white text-4xl md:text-6xl font-black tracking-tighter leading-[1] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            DO WHAT IS <span className="text-primary font-inter">RIGHT</span>,<br />NOT WHAT IS EASY.
          </h3>
          <div className="mt-6 flex justify-end gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-1 bg-[#00B7F1]" style={{ opacity: 1 - i * 0.2 }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
