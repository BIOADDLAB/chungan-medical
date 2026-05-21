'use client';
export const dynamic = 'force-dynamic';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FAQ_ITEMS = [
  {
    q: '케어 시간은 얼마나 소요되나요?',
    a: '약 15~20분 정도 소요됩니다.',
  },
  {
    q: '통증이 강한가요?',
    a: 'MIGLOW만의 컨택트 쿨링 시스템을 통해 통증을 현저히 줄였으며, 비침습적 방식으로 바늘이나 피부를 절개하지 않아 피부에 부담을 줄였습니다.',
  },
  {
    q: '안전한 시술인가요?',
    a: '핸드피스에 탑재된 센서로 화상 방지는 물론, 전자파 차단 구조로 안전하게 받을 수 있습니다.',
  },
  {
    q: '관리 효과는 언제부터 느낄 수 있나요?',
    a: '즉시 체감할 수 있습니다.',
  },
];

const SPECS = [
  { label: '에너지 타입', value: '극초단파 (UHF)' },
  { label: '주파수', value: '2.45GHz' },
  { label: '출력', value: '200W' },
  { label: '전기 사양', value: '100~240Vac / 50~60Hz / 1500VA' },
  { label: '제품 규격', value: '433(L) x 693(W) x 1089(H) mm' },
  { label: '무게', value: '60Kg' },
  { label: 'GUI', value: '12.1" 컬러 디스플레이 터치스크린' },
  { label: '스마트 핸드피스', value: '3mm, 7mm / 1.54" LCD / LED 시스템 / 4가지 버튼' },
];

export default function MiglowPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ① Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-sky-100"
      >
        <motion.img
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src="/images/cover/miglow_cover.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.95]"
          alt="MIGLOW Cover"
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />
        <div className="absolute inset-0 bg-tech-grid opacity-20 mix-blend-overlay z-10 pointer-events-none" />

        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
          <Link
            href="#overview"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-slate-300 rounded-full hover:bg-slate-100 hover:text-black transition duration-300 animate-bounce group bg-white/50 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700 group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② Overview */}
      <section id="overview" className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 mix-blend-multiply pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-slate-50">
                WHAT IS MIGLOW
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase leading-tight">
                <span className="hero-title-main">2.45 GHz</span><br />
                <span className="hero-title-highlight text-primary">극초단파</span>
                <span className="hero-title-main"> &amp; 파워 쿨링</span>
              </h2>
              <div className="w-20 h-[2px] bg-primary mb-8" />
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8 break-keep">
                MIGLOW는 극초단파(Ultra High Frequency)를 활용한 특수한 에너지 전달 방식을 통해,
                비침습적 방식으로 얼굴부터 바디까지 원하는 부위에 넓고 세밀한 관리를 구현합니다.
              </p>
              <div className="space-y-4">
                {[
                  '필요한 부위에만 열을 전달해 집중적으로 관리',
                  '쿨링 시스템이 피부를 보호해 편안한 관리 경험',
                  '다양한 핸드피스로 사용 목적에 맞게 선택 가능',
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-slate-700 text-[15px] md:text-base font-medium leading-relaxed break-keep">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { num: '01', title: '정확성', desc: 'CNF 매칭 기술로 국소 부위에 에너지를 정확하게 전달' },
                { num: '02', title: '다양성', desc: '3mm · 7mm 스마트 핸드피스로 페이스 & 바디 맞춤 케어' },
                { num: '03', title: '편의성', desc: 'GUI · TIS · RMS로 효율적인 관리 환경 제공' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 border border-sky-100 hover:border-primary/40 transition-all duration-500 group text-center"
                >
                  <span className="text-primary font-black text-2xl font-inter">{item.num}</span>
                  <h3 className="text-slate-900 text-xl font-black mt-3 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed break-keep">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ③ UHF Technology */}
      <section id="technology" className="relative py-28 bg-sky-100 overflow-hidden border-t border-sky-100">
        <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none mix-blend-multiply" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-14">
            <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase">THEORY & MECHANISM</span>
            <div className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent" />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 uppercase">
              극초단파 <span className="text-primary font-inter">(UHF)</span> 소개
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto break-keep">
              2.45GHz 전자기 에너지가 피부 속 세포 조직을 부드럽게 진동시켜 열을 발생합니다.
              표피에 자극을 주지 않고 진피층의 섬유아세포만 정밀하게 활성화하여,
              주변 조직 손상 없이 얼굴과 바디라인을 효과적으로 개선합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white border border-sky-100 p-8 md:p-10 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-slate-400 font-black text-sm tracking-widest uppercase">RF</span>
                <span className="text-slate-500 text-sm font-bold">기존 고주파 리프팅</span>
              </div>
              <ul className="space-y-4">
                {[
                  { title: '제한적 침투 깊이', desc: '열 에너지가 주로 피부 표면과 상부 진피층에만 제한적으로 발생' },
                  { title: '표피 열 손실', desc: '에너지 전달 과정에서 표피층에서 상당 부분 소실되거나 과도한 열 발생 가능' },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-slate-300 text-[8px] mt-2">●</span>
                    <div>
                      <p className="text-slate-900 font-black text-sm mb-1">{item.title}</p>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed break-keep">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-primary/30 p-8 md:p-10 rounded-2xl relative"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-[10px] font-black tracking-widest uppercase rounded">
                VS
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary font-black text-sm tracking-widest uppercase">UHF</span>
                <span className="text-slate-900 text-sm font-bold">극초단파</span>
              </div>
              <ul className="space-y-4">
                {[
                  { title: '심부 타겟팅 효율', desc: '진피층의 과도한 열 상승 없이 깊은 지방층과 하부 진피층까지 충분한 열 에너지 전달' },
                  { title: '표피 보호 및 에너지 보존', desc: '표피층을 투과하여 타겟 층에 도달, 표면 열 손상을 줄이고 에너지 전달 효율 극대화' },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-primary text-[8px] mt-2">●</span>
                    <div>
                      <p className="text-slate-900 font-black text-sm mb-1">{item.title}</p>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed break-keep">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ④ CNF & Safety */}
      <section id="safety" className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none mix-blend-multiply" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
              MIGLOW&apos;s Accuracy
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase">
              CNF 매칭 <span className="text-primary">기술</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto break-keep">
              Complex matching을 통해 근거리 에너지의 집중도를 향상시키는 MIGLOW만의 특별한 기술로,
              국소 부위에 에너지를 정확하게 전달합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: '자이로 센서',
                sub: 'Moving Sensor',
                lines: ['핸드피스에 탑재된 안전한 화상 방지 시스템', 'Contact뿐 아니라 Moving을 인식해 안전한 사용 환경 고려'],
              },
              {
                title: '컨택트 쿨링',
                sub: 'Contact Cooling System',
                lines: ['핸드피스 일체형 쿨링으로 피부 열 손상 보호', '열감을 즉각 상쇄, 마취 없이도 편안한 케어'],
              },
              {
                title: '전자파 차단',
                sub: 'EM Shielding',
                lines: ['공기 중 에너지 출력을 낮춰 안정적인 사용 환경', '방사 전력 0.10W — 가정용 Wi-Fi 공유기 수준'],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-full bg-sky-50 border border-sky-100 p-8 rounded-2xl group-hover:border-primary/40 transition-all duration-500 h-full">
                  <h3 className="text-slate-900 text-xl font-black mb-1 tracking-tight">{item.title}</h3>
                  <p className="text-primary text-xs font-bold tracking-widest uppercase mb-6">{item.sub}</p>
                  <div className="text-slate-600 text-sm font-medium leading-relaxed space-y-2 break-keep">
                    {item.lines.map((line, lidx) => (
                      <p key={lidx}>{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ Handpieces */}
      <section id="handpieces" className="relative py-28 bg-sky-100 overflow-hidden border-t border-sky-100">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase">
              스마트 <span className="text-primary">핸드피스</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium break-keep">
              사용 목적에 따른 맞춤형 핸드피스로 페이스 &amp; 바디 케어를 유연하게 적용할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {[
              {
                size: '3mm',
                title: '페이스 스킨 관리',
                tag: 'Facial Parts',
                areas: ['얼굴 전체 · 라인 · 윤곽', '눈가 · 입가 피부 컨디션 관리', '얼굴 전반의 피부 컨디션 케어'],
              },
              {
                size: '7mm',
                title: '바디 쉐이핑 관리',
                tag: 'Body Parts',
                areas: ['복부 · 복부 주변 · 옆구리', '힙 라인 · 허벅지 라인', '겨드랑이 및 바디 특정 부위'],
              },
            ].map((hp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white border border-sky-100 p-8 md:p-10 rounded-3xl group hover:border-primary/40 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <span className="text-2xl font-black text-amber-800 font-inter">{hp.size}</span>
                  </div>
                  <div>
                    <p className="text-primary text-[10px] font-black tracking-widest uppercase">{hp.tag}</p>
                    <h3 className="text-slate-900 text-xl font-black tracking-tight">{hp.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {hp.areas.map((area, aidx) => (
                    <li key={aidx} className="flex gap-3 items-start text-slate-600 text-sm font-medium leading-relaxed break-keep">
                      <span className="text-primary text-[8px] mt-2 shrink-0">●</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {['1.54" LCD 스크린', '컨택트 쿨링 시스템', 'LED 표시등', 'Energy Up/Down · Start/Stop'].map((feat, idx) => (
              <div key={idx} className="text-center p-4 bg-white/70 border border-sky-100 rounded-xl">
                <p className="text-slate-700 text-xs md:text-sm font-bold break-keep">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ Care Process & Convenience */}
      <section id="convenience" className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none mix-blend-multiply" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                Care Process
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 uppercase leading-tight">
                쉽고 빠른<br /><span className="text-primary">15분</span> 케어
              </h2>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: '15분', desc: '짧은 케어 시간' },
                  { label: '0', desc: '다운타임' },
                  { label: '3단계', desc: '간편한 프로세스' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4 bg-sky-50 border border-sky-100 rounded-xl">
                    <p className="text-primary font-black text-2xl font-inter">{item.label}</p>
                    <p className="text-slate-600 text-xs font-bold mt-2 break-keep">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-base font-medium leading-relaxed break-keep">
                마취 없이 편안한 경험이 가능하며, 회복 기간에 대한 부담 없이 일상생활로의 빠른 복귀가 가능합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  title: 'TIS',
                  sub: 'Treatment Information System',
                  desc: '관리 데이터를 기반으로 맞춤형 프로토콜을 구성하고, 환자별 관리 이력을 지속적으로 축적·활용합니다.',
                },
                {
                  title: 'RMS',
                  sub: 'Remote Maintenance System',
                  desc: '기기 스스로 상태를 진단하여 소모품 교체 시점을 안내하고, 잠재적 문제를 사전에 예방합니다.',
                },
                {
                  title: 'GUI',
                  sub: 'User Friendly Interface',
                  desc: '12.1" 터치스크린에 통합된 가이드, 튜토리얼 및 관리 이력 기능으로 사용 효율성을 높였습니다.',
                },
              ].map((sys, idx) => (
                <div key={idx} className="glass-panel p-6 border border-sky-100 hover:border-primary/40 transition-all duration-500">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-slate-900 text-xl font-black font-inter">{sys.title}</h3>
                    <span className="text-primary text-[10px] font-bold tracking-widest uppercase">{sys.sub}</span>
                  </div>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed break-keep">{sys.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ⑦ FAQ */}
      <section id="faq" className="relative py-28 bg-sky-100 overflow-hidden border-t border-sky-100">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
              Q &amp; A
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
              MIGLOW <span className="text-primary">FAQ</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {FAQ_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white border border-sky-100 p-6 md:p-8 rounded-2xl"
              >
                <p className="text-slate-900 font-black text-base md:text-lg mb-3 break-keep">Q. {item.q}</p>
                <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed break-keep">{item.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {['#자극이 강한 관리는 부담스러운 분', '#통증이 무서워 망설이는 분', '#피부 컨디션 관리가 필요한 분'].map((tag, idx) => (
              <span key={idx} className="px-4 py-2 bg-white border border-primary/20 text-primary text-xs font-bold rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ⑧ Specifications & Legal */}
      <section id="specs" className="relative py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
              SPECIFICATIONS
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
              TECHNICAL <span className="text-primary">DETAILS</span>
            </h2>
            <div className="w-20 h-[2px] bg-primary mt-8" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-panel overflow-hidden border-sky-100 bg-white mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {SPECS.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-stretch border-b border-sky-100 last:border-b-0 ${idx % 2 === 0 ? 'md:border-r md:border-sky-100' : ''} group hover:bg-sky-50/50 transition-colors`}
                >
                  <div className="w-32 md:w-40 bg-sky-50 py-5 px-5 flex items-center shrink-0 border-r border-sky-100">
                    <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-primary/70 group-hover:text-primary transition-colors uppercase leading-snug break-keep">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-grow py-5 px-5 md:px-6 flex items-center">
                    <span className="text-sm md:text-base font-black text-slate-700 tracking-tight break-keep group-hover:text-slate-900 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto text-center space-y-3">
            <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed break-keep">
              *주의사항 및 법적 고지: 본 제품은 미용기기로 미용 목적 외 어떠한 의료 목적도 제공하지 않습니다.
            </p>
            <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed break-keep">
              *이 제품은 KC 인증을 받은 피부미용기기입니다.
            </p>
            <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed break-keep">
              *MIGLOW는 장비명이며, 와따(WATTAA)는 마케팅 목적의 시술명입니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
