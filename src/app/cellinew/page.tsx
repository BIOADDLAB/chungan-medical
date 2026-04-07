'use client';
export const dynamic = 'force-dynamic';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CellinewPage() {
  return (
    <main className="bg-[#050810] min-h-screen lowercase-titles">
      {/* ① Hero Section (Standard Tech Style) */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-[#050810]"
      >
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 brightness-[0.5] contrast-[1.1]"
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
            <span className="hero-title-main block md:inline">CELLI - </span>
            <span className="hero-title-highlight ml-0 md:ml-4">NEW</span>
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
            href="#overview"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② CELLINEW Overview Section (Orchestration Standard) */}
      <section id="overview" className="relative py-28 bg-[#050810] overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content (Orchestration Aligned) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">
                PREMIUM RF ENERGY
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase text-white leading-[1.1] tracking-tighter">
                RENEW YOUR SKIN :<br />
                <span className="text-primary tracking-tighter font-sans uppercase">피부를 리뉴얼하다</span>
              </h2>
              <div className="w-20 h-[2px] bg-primary mb-14 shadow-[0_0_10px_rgba(0,183,241,0.5)]" />

              <div className="space-y-12">
                <h3 className="text-white text-[18px] md:text-xl font-bold leading-tight tracking-tighter break-keep opacity-95">
                  매순간 변화하는 당신의 피부를 위한<br />프리미엄 고주파 에너지, 셀리뉴
                </h3>

                <div className="space-y-6 text-slate-300 text-sm md:text-[17px] font-medium tracking-tight leading-relaxed break-keep">
                  <p>셀리뉴만의 <span className="text-primary font-black">Auto Fit</span>은</p>
                  <p>피부 부위별 특성에 맞춰 자동으로 에너지를 전달하는 시스템으로</p>
                  <p>매순간 변화하는 피부에 실시간으로<br />최적화된 에너지를 전달시켜줍니다.</p>
                </div>

                <div className="relative mt-8 inline-block group">
                  {/* Snap-fit HUD Bracket matching text height perfectly */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/50 shadow-[0_0_12px_rgba(0,183,241,0.4)]" />
                  <div className="absolute left-0 top-0 w-4 h-[2px] bg-primary/50" />
                  <div className="absolute left-0 bottom-0 w-4 h-[2px] bg-primary/50" />

                  <div className="pl-6 py-0.5">
                    <p className="text-primary text-[17px] md:text-[21px] font-black tracking-tighter leading-[1.3] text-glow-primary">
                      딱 맞는 에너지로 오랜 기간동안 유지되는<br />
                      효과를 직접 경험해보세요.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Device Image (Premium HUD Style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[500px] group cursor-pointer">
                {/* Visual Glow behind the machine (Hover only) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <img
                  src="images/cellinew/셀리뉴 사진.png"
                  alt="CELLINEW Machine"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_0_40px_rgba(0,183,241,0.3)] group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ③ CELLINEW Monopolar RF & Mechanism Section (Standard Tech Style) */}
      <section id="mechanism" className="relative py-28 bg-[#050810] overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-20 relative overflow-hidden">
            <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase leading-none">THEORY & MECHANISM</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none"
            />
          </div>

          <div className="flex flex-col items-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-5 mb-10"
            >
              <div className="w-[6px] h-10 bg-primary shrink-0 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
              <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] uppercase">
                6.78MHz <span className="text-primary font-inter">Monopolar RF</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center w-full max-w-4xl"
            >
              <div className="space-y-6 text-white/90 text-[17px] md:text-[21px] font-bold leading-relaxed tracking-tighter break-keep">
                <p>셀리뉴는 <span className="text-primary">6.78MHz Monopolar RF</span>로 진피층에 열을 발생시켜<br />노화의 근본적인 원인이 되는 콜라겐 셀을 리뉴얼 시켜줍니다.</p>
                <p className="text-slate-400 font-medium text-sm md:text-lg tracking-tight">
                  피부 속부터 탄력있고 건강하게 가꾸어 주름, 피부결 뿐 아니라<br />
                  종합적인 피부 개선 효과를 기대할 수 있습니다.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mechanism Detail Cards (Tech-Premium Dark Re-design) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 px-4 md:px-0"
          >
            {/* HUD Style Mechanism Tab */}
            <div className="inline-block bg-primary rounded-t-xl px-10 py-3 relative z-20 shadow-[0_-5px_20px_rgba(0,183,241,0.3)]">
              <span className="text-[#050810] font-black text-lg tracking-widest uppercase font-inter">Mechanism</span>
            </div>

            <div className="bg-[#0A0D14]/80 backdrop-blur-md rounded-b-[30px] rounded-tr-[30px] p-10 md:p-16 relative z-10 shadow-2xl border border-white/10 overflow-hidden">
              {/* Background ambient glow inside the card */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 lg:divide-x lg:divide-white/10">
                {/* Step 1 */}
                <div className="lg:pr-16 space-y-10 relative">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl border border-primary/40 bg-primary/5 shadow-[0_0_15px_rgba(0,183,241,0.2)]">
                      <span className="text-primary font-black text-xl font-inter">1ST</span>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-black text-white tracking-tighter leading-tight">
                        열로 인한 콜라겐 수축<br />
                        <span className="text-primary text-glow-primary">→ 즉각 타이트닝</span>
                      </h4>
                    </div>
                  </div>

                  <ul className="space-y-6 text-slate-400 text-sm md:text-[17px] font-medium tracking-tight leading-relaxed">
                    <li className="flex items-start gap-4">
                      <div className="mt-[10px] w-2 h-2 bg-primary shadow-[0_0_8px_rgba(0,183,241,0.6)] rounded-full shrink-0" />
                      <span>열이 가해지면 콜라겐의 <span className="text-white font-bold">실타래모양</span>을 유지하게 하는 연결고리가 끊어지며 리모델링이 시작됨</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-[10px] w-2 h-2 bg-primary shadow-[0_0_8px_rgba(0,183,241,0.6)] rounded-full shrink-0" />
                      <span>콜라겐 번들은 짧아지고 두께가 두툼해짐 <span className="text-primary font-black ml-1">(약 35% 길이 수축)</span></span>
                    </li>
                  </ul>

                  <div className="flex justify-center pt-6 mt-4">
                    <div className="relative w-full max-w-[460px] h-48 md:h-56 bg-white rounded-2xl overflow-hidden group/box hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,183,241,0.3)] border-2 border-transparent transition-all duration-500 p-2 flex items-center justify-center">
                      <img
                        src="/images/cellinew/mechanism.png"
                        alt="Mechanism Diagram"
                        className="w-full h-full object-contain transform group-hover/box:scale-135 transition-transform duration-700 ease-out scale-125 mt-3"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="lg:pl-16 space-y-10 relative">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl border border-primary/40 bg-primary/5 shadow-[0_0_15px_rgba(0,183,241,0.2)]">
                      <span className="text-primary font-black text-xl font-inter">2ND</span>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-black text-white tracking-tighter leading-tight">
                        운드힐링 콜라겐 생성<br />
                        <span className="text-primary text-glow-primary">→ 진피 리모델링</span>
                      </h4>
                    </div>
                  </div>

                  <ul className="space-y-6 text-slate-400 text-sm md:text-[17px] font-medium tracking-tight leading-relaxed">
                    <li className="flex items-start gap-4">
                      <div className="mt-[10px] w-2 h-2 bg-primary shadow-[0_0_8px_rgba(0,183,241,0.6)] rounded-full shrink-0" />
                      <span>진피와 섬유격막에 변성이 일어나 섬유아세포 활동 증가로 신생 콜라겐 생성</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-[10px] w-2 h-2 bg-primary shadow-[0_0_8px_rgba(0,183,241,0.6)] rounded-full shrink-0" />
                      <span>자가상처 치유 과정을 통해 기존 콜라겐의 리모델링</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-[10px] w-2 h-2 bg-primary shadow-[0_0_8px_rgba(0,183,241,0.6)] rounded-full shrink-0" />
                      <span>2~6개월의 기간에 걸쳐 새로운 콜라겐 생성 및 리모델링</span>
                    </li>
                    <li className="flex items-start gap-4 pt-6 border-t border-white/5 mt-6">
                      <div className="flex flex-col w-full">
                        <span className="text-white font-black text-[15px] md:text-lg border-l-2 border-primary pl-4 items-center flex gap-3 h-12 bg-primary/5">
                          결과적으로, ① 콜라겐 밀도 증가 ② 진피층 두께 증가
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ③ CELLINEW Main Features Section (Tech-Premium Standard) */}
      <section id="features" className="relative py-28 bg-[#050810] overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.02] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-primary/40" />
              <h4 className="text-primary text-xs md:text-sm font-black tracking-[0.4em] uppercase font-inter">
                CELLINEW's Main Features
              </h4>
              <div className="w-10 h-[1px] bg-primary/40" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white text-3xl md:text-5xl font-black mb-10 leading-[1.1] tracking-tighter"
            >
              오랜기간 지속되는 <span className="text-primary tracking-tighter">탄력</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto tracking-tight break-keep"
            >
              셀리뉴는 개인 피부특성에 최적화된 에너지를 더욱 효과적으로 전달하여<br />
              탄력 효과를 최대한 오랜기간 유지시켜 줍니다.
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Customized",
                subTitle: "개인 피부 특성에 맞춘 에너지",
                mainTitle: "Auto Fit : Energy Match",
                desc: "피부 부위별 특성에 맞춰\n자동으로 출력 조절"
              },
              {
                num: "02",
                title: "Efficiency",
                subTitle: "동일 샷 대비 최대 효과",
                mainTitle: "Repetition Mode",
                desc: "최단시간 Interval로\n열 누적 효율 향상"
              },
              {
                num: "03",
                title: "Safety",
                subTitle: "안전한 시술환경",
                mainTitle: "Monitoring & Control",
                desc: "냉각 시스템, 피부 온도,\n시술자의 압력 등을\n실시간 모니터링 & 제어"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/[0.03] backdrop-blur-md rounded-[40px] p-10 md:p-14 flex flex-col items-center border border-white/10 hover:border-primary/30 transition-all duration-500 shadow-2xl hover:shadow-primary/5 min-h-[520px]"
              >
                <span className="text-primary/40 font-black text-xl mb-3 font-inter group-hover:text-primary transition-colors duration-500">
                  {feature.num}
                </span>
                <h5 className="text-white text-2xl md:text-3xl font-black mb-2 tracking-tighter uppercase font-inter group-hover:text-glow-primary transition-all duration-500">
                  {feature.title}
                </h5>
                <p className="text-primary text-sm font-bold tracking-tight mb-10 opacity-70">
                  {feature.subTitle}
                </p>

                <div className="w-12 h-[1px] bg-white/10 mb-10 group-hover:w-full group-hover:bg-primary/20 transition-all duration-700" />

                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                  <h6 className="text-white text-[20px] md:text-[24px] font-black leading-tight tracking-tighter break-keep">
                    {feature.mainTitle}
                  </h6>
                  <div className="text-slate-400 text-sm md:text-base font-medium leading-relaxed whitespace-pre-line tracking-tight px-4">
                    {feature.desc}
                  </div>
                </div>

                {/* Subtle HUD background element for hover */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 border-t border-r border-primary/40" />
                </div>
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 border-b border-l border-primary/40" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ CELLINEW Safe Monitoring & Control Section (Tech-Premium Dark) */}
      <section id="safety-detail" className="relative py-28 bg-[#050810] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-primary/40" />
              <h4 className="text-primary text-xs md:text-sm font-black tracking-[0.4em] uppercase font-inter">
                CELLINEW's Main Features
              </h4>
              <div className="w-10 h-[1px] bg-primary/40" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white text-3xl md:text-5xl font-black mb-10 leading-tight tracking-tighter"
            >
              CELLINEW's<br />
              <span className="text-primary tracking-tighter">Safe Monitoring & Control</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative bg-white/[0.03] backdrop-blur-md py-10 px-8 md:px-16 rounded-2xl mb-24 max-w-5xl mx-auto shadow-2xl border-l-4 border-primary shadow-primary/5"
          >
            <p className="text-white text-[16px] md:text-[21px] font-bold tracking-tighter leading-relaxed break-keep">
              안전한 시술환경을 제공하기 위해 <span className="text-primary font-black">피부 온도, 시술자의 압력, 냉각시스템</span>을<br />
              <span className="text-glow-primary font-black underline underline-offset-8 decoration-primary/30">
                실시간으로 모니터링하고 정밀하게 제어
              </span>합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 pb-10">
            {[
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-full h-full">
                    {/* Thermometer */}
                    <path d="M24 12a6 6 0 0 1 12 0v20.5a10 10 0 1 1-12 0V12z" className="text-white/40" />
                    <path d="M30 38V14" className="text-primary" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="30" cy="44" r="4" fill="currentColor" className="text-primary" />
                    {/* Checkmark Circle */}
                    <circle cx="46" cy="24" r="10" className="text-primary/20" fill="currentColor" />
                    <circle cx="46" cy="24" r="10" className="text-primary" />
                    <path d="M41 24l3.5 3.5 6.5-6.5" className="text-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Wave lines */}
                    <path d="M12 40h4M12 46h4M12 52h4" className="text-white/20" strokeLinecap="round" />
                  </svg>
                ),
                title: "Skin Temperature",
                subTitle: "Skin Surface Protection",
                lines: ["시술 부위의 온도를 확인하여", "일정온도 이내에서만", "고주파 에너지 전달"]
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-full h-full">
                    {/* Downward Arrow */}
                    <path d="M32 8v20M24 20l8 8 8-8" className="text-primary" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Skin Layers */}
                    <path d="M12 36c4-2 8-2 12 0s8 2 12 0 8-2 12 0" className="text-white" strokeLinecap="round" />
                    <path d="M12 44h40M12 52h40" className="text-white/30" strokeDasharray="4 4" />
                    {/* Checkmark in circle */}
                    <circle cx="50" cy="18" r="8" className="text-primary/10" fill="currentColor" />
                    <circle cx="50" cy="18" r="8" className="text-primary" />
                    <path d="M46 18l2.5 2.5 4.5-4.5" className="text-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "Operator Pressure",
                subTitle: "Procedure with Contact Surface",
                lines: ["피부와 Tip이 완전하게 밀착되고", "균일하게 압력이 가해질 경우에만", "안전하게 고주파 에너지 전달"]
              },
              {
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-full h-full">
                    {/* Slider Control */}
                    <rect x="10" y="24" width="44" height="12" rx="6" className="text-white/20" fill="currentColor" stroke="none" />
                    <rect x="10" y="24" width="44" height="12" rx="6" className="text-white/40" />
                    <circle cx="28" cy="30" r="4" fill="currentColor" className="text-primary" />
                    {/* Snowflake Circle */}
                    <circle cx="50" cy="18" r="10" className="text-primary/20" fill="currentColor" />
                    <circle cx="50" cy="18" r="10" className="text-primary" />
                    <path d="M50 12v12M44 18h12M46 14l8 8M54 14l-8 8" className="text-primary" strokeWidth="2" />
                    {/* Interacting Hand */}
                    <path d="M30 35l6 14c1 2 4 1 3-2l-4-9 4 1 3-1-1-3-6-2" className="text-white" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: "Internal Cooling System",
                subTitle: "Monitoring & Control",
                lines: ["온도의 변화에 민감한 가스를", "섬세하게 제어하여 균일한 양 전달", "안전한 시술환경 제공"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 mb-10 transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(0,183,241,0.3)]">
                  {item.icon}
                </div>
                <h5 className="text-white text-xl md:text-2xl font-black mb-1 tracking-tighter group-hover:text-primary transition-colors">
                  {item.title}
                </h5>
                <p className="text-white text-sm md:text-base font-bold mb-8 tracking-tight">{item.subTitle}</p>
                <div className="text-slate-400 text-sm md:text-[17px] font-medium leading-relaxed space-y-1 text-center break-keep">
                  {item.lines.map((line, lidx) => (
                    <p key={lidx}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
