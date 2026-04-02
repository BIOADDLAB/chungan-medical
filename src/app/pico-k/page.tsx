'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PicoKPage() {
  return (
    <>
      {/* ① Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-[#020408]"
      >
        {/* 배경 이미지 레이어 */}
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 brightness-[0.8]"
          alt="medical background"
        />
        {/* 그라디언트 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020408]/60 via-transparent to-[#020408]/80 z-10" />
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
            <span className="hero-title-main block md:inline">PREMIUM</span><br className="md:hidden" />
            <span className="hero-title-highlight ml-0 md:ml-4">PICO — K</span>
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
              합리적인 피부미용 의료 장비, <span className="text-primary font-bold">정확한 기술의 시작</span>
            </p>
          </motion.div>
        </div>

        {/* 스크롤 유도 버튼 */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
          <Link
            href="#overview"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② Product Overview Section */}
      <section id="overview" className="relative py-28 bg-[#020408] overflow-hidden">
        {/* 배경 장식 */}
        <div className="absolute inset-0 bg-tech-dots opacity-25 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* 좌측: 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* 배지 */}
              <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                Complete Solution
              </div>

              {/* 타이틀 */}
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                <span className="hero-title-main">Revolutionary</span><br />
                <span className="hero-title-highlight">Pico</span>
                <span className="hero-title-main"> Technology</span>
              </h2>
              <div className="w-20 h-[2px] bg-primary mb-8 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />

              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 max-w-xl">
                최첨단 피코 레이저 기술을 통해 더욱 빠르고 정밀한 색소 치료와<br className="hidden md:block" />
                피부 재생의 새로운 기준을 제시합니다.
              </p>

              {/* 카드 2개 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
                <div className="glass-panel p-6 flex items-center gap-5 hover:border-primary/50 transition duration-500 group">
                  <div className="flex flex-col flex-shrink-0">
                    <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mb-1">Product</span>
                    <span className="text-sm font-bold text-white">로고</span>
                  </div>
                  <div className="w-[1px] h-8 bg-primary/20" />
                  <img
                    src="/images/machine/피코케이 로고.png"
                    className="h-6 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition"
                    alt="PICO-K 로고"
                  />
                </div>
                <div className="glass-panel p-6 flex items-center gap-5 hover:border-primary/50 transition duration-500 group">
                  <div className="flex flex-col flex-shrink-0">
                    <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mb-1">Manufacturer</span>
                    <span className="text-sm font-bold text-white">제조사</span>
                  </div>
                  <div className="w-[1px] h-8 bg-primary/20" />
                  <img
                    src="/images/machine/피코케이 제조사 로고.png"
                    className="h-6 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition"
                    alt="Speclipse"
                  />
                </div>
              </div>
            </motion.div>

            {/* 우측: 제품 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end relative"
            >
              <div className="relative group">
                <img
                  src="/images/machine/피코케이 사진.png"
                  className="max-w-full h-auto relative z-10 drop-shadow-[0_45px_100px_rgba(0,0,0,0.7)] group-hover:scale-[1.02] transition duration-1000"
                  alt="PICO-K 장비"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-primary/15 blur-[80px] rounded-full scale-150 translate-y-4 opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ③ Patent Technology Section */}
      <section id="patents" className="relative py-28 bg-[#020408] overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
        {/* 상단 구분선 */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
              CHEONGAN MEDICAL
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              <span className="hero-title-main">특허</span>
              <span className="hero-title-highlight">기술</span>
            </h2>
            <div className="w-20 h-[2px] bg-primary mx-auto mb-8 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
            <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              수년간의 연구와 개발을 통해 다양한 특허를 바탕으로<br />
              시장에서 월등하고 혁신적인 솔루션을 제공하는 피코초 레이저입니다.
            </p>
          </motion.div>

          {/* 특허증 메인 2개 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-16"
          >
            <div className="w-44 h-60 glass-panel flex items-center justify-center transform rotate-[-3deg] shadow-[0_0_30px_rgba(0,183,241,0.1)] text-slate-600 text-xs text-center p-4">
              특허증 이미지<br />(메인 1)
            </div>
            <div className="w-44 h-60 glass-panel flex items-center justify-center transform rotate-[3deg] -ml-8 mt-8 shadow-[0_0_30px_rgba(0,183,241,0.1)] text-slate-600 text-xs text-center p-4">
              특허증 이미지<br />(메인 2)
            </div>
          </motion.div>

          {/* 특허증 그리드 9개 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] glass-panel flex items-center justify-center text-[10px] text-slate-600 hover:border-primary/40 transition duration-300"
              >
                특허증 {i + 1}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ④ Technical Detail 01: Thermal Lens Effect */}
      <section id="thermal-lens-tech" className="relative py-28 bg-[#020408] overflow-hidden">
        <div className="absolute inset-0 bg-tech-dots opacity-20 mix-blend-screen pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* 번호 라인 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-14"
          >
            <span className="text-5xl font-black text-primary leading-none">01</span>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* 좌측: 설명 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-[45%]"
            >
              <div className="mb-10">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                  <span className="hero-title-main">써멀렌즈</span><br />
                  <span className="hero-title-highlight">이펙트 최소화</span>
                </h2>
                <div className="w-20 h-[2px] bg-primary mb-6 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
                <div className="mb-2">
                  <span className="text-xl font-bold text-primary tracking-tight font-inter">
                    Thermal Lens Effect
                  </span>
                </div>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  렌즈의 과열로 부풀어올라 초점의 깊이가 변하는 현상
                </p>
              </div>

              <div className="space-y-4">
                <div className="glass-panel p-7 border-l-[3px] border-primary">
                  <h4 className="text-lg font-black text-white mb-3">빔 품질 유지</h4>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    높은 반복율에서도 안정적인 빔 프로파일을 유지하여 정밀한 시술이 가능합니다.
                  </p>
                </div>
                <div className="glass-panel p-7 border-l-[3px] border-primary">
                  <h4 className="text-lg font-black text-white mb-3">냉각 기술 적용</h4>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    핵심 부품의 열 관리를 통해 장시간 사용 시 발생할 수 있는 에너지 변화를 최소화했습니다.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 우측: 일러스트 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-[55%]"
            >
              <div className="relative aspect-video glass-panel flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <span className="text-primary/30 font-black text-sm tracking-[0.3em] uppercase font-inter">
                  Technical Illustration
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ⑤ Technical Detail 02: 800um Big Spot Size */}
      <section id="big-spot-tech" className="relative py-28 bg-[#020408] overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* 번호 라인 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-14"
          >
            <span className="text-5xl font-black text-primary leading-none">02</span>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent" />
          </motion.div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            {/* 우측(역방향): 설명 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                <span className="hero-title-main">800um Big Spot</span><br />
                <span className="hero-title-highlight">Flat-Top</span>
              </h2>
              <div className="w-20 h-[2px] bg-primary mb-8 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
              <p className="text-slate-400 text-lg font-medium mb-10 leading-relaxed">
                가장 큰 스팟 사이즈와 균일한 빔 패턴으로<br />
                빠른 시술과 낮은 통증을 동시에 구현했습니다.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-6 border-t-[2px] border-primary">
                  <span className="block text-primary font-black text-2xl mb-2">Fast</span>
                  <p className="text-slate-400 text-sm font-medium">대면적 시술 가능</p>
                </div>
                <div className="glass-panel p-6 border-t-[2px] border-primary">
                  <span className="block text-primary font-black text-2xl mb-2">Uniform</span>
                  <p className="text-slate-400 text-sm font-medium">균일한 에너지 전달</p>
                </div>
              </div>
            </motion.div>

            {/* 좌측(역방향): 이미지 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="glass-panel p-2 overflow-hidden">
                <img
                  src="/images/machine/피코케이 임시1.png"
                  alt="Flat top beam illustration"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
