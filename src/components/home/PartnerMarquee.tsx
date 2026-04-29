'use client';

import { motion } from 'framer-motion';

const PARTNERS_ROW_1 = [
  { name: 'REJURAN' },
  { name: 'Olive Young' },
  { name: 'ISOI' },
  { name: 'Dr.Plus' },
  { name: 'MEDI HUB' },
  { name: '애경' },
];

const PARTNERS_ROW_2 = [
  { name: 'Cynosure' },
  { name: 'Alma' },
  { name: 'Lumenis' },
  { name: 'CANDELA' },
  { name: 'hironic' },
  { name: 'SNJ' },
];

export default function PartnerMarquee() {
  return (
    <section id="partners" className="partners-section pt-24 pb-0 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 mb-16 text-center">
        {/* 이미지와 동일한 배지 디자인 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 border border-[#00B3E4]/30 text-[#00B3E4] text-[10px] font-bold tracking-[0.4em] uppercase mb-8"
        >
          Global Network
        </motion.div>
        
        {/* 이미지와 동일한 타이틀 스타일 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[#1E293B] text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase"
        >
          OUR <span className="text-[#00B3E4]">PARTNERS</span> & CLIENTS
        </motion.h2>
        
        <div className="w-16 h-[2px] bg-[#00B3E4]/40 mx-auto mb-10" />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed"
        >
          병원 분과별 맞춤 세팅 시스템. 당신의 브랜드가 가장 주목받는 의료 공간에서<br className="hidden md:block" />
          최적의 솔루션과 만나는 혁신적인 네트워크를 경험하세요.
        </motion.p>
      </div>

      {/* 로고가 흐르는 영역: 1층 구조로 통합 및 이미지 로고 적용 */}
      <div className="relative py-24 bg-[#F0F9FF] border-y border-[#00B3E4]/10 overflow-hidden group">
        {/* 아주 은은한 배경 그리드 라인 */}
        <div className="absolute inset-0 bg-tech-grid opacity-[0.03] pointer-events-none" />
        
        {/* 사이드 페이드 효과 */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#F0F9FF] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#F0F9FF] to-transparent z-10 pointer-events-none" />

        <div className="flex select-none">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex flex-nowrap gap-20 md:gap-24 items-center"
          >
            {/* Seamless Infinite Loop를 위해 로고 세트를 두 번 반복 (50% 지점에서 리셋) */}
            {[
              { name: 'SSES Studio', src: 'SSES_Studio.png' },
              { name: '디자인큼', src: '디자인큼.png' },
              { name: '바이오애드랩', src: '바이오애드랩.png' },
              { name: '상상하다', src: '상상하다3.png' },
              { name: '스마트브랜딩', src: '스마트브랜딩.png' },
              { name: '유노택스', src: '유노택스.png' },
            ].concat([
              { name: 'SSES Studio', src: 'SSES_Studio.png' },
              { name: '디자인큼', src: '디자인큼.png' },
              { name: '바이오애드랩', src: '바이오애드랩.png' },
              { name: '상상하다', src: '상상하다3.png' },
              { name: '스마트브랜딩', src: '스마트브랜딩.png' },
              { name: '유노택스', src: '유노택스.png' },
            ]).concat([
              { name: 'SSES Studio', src: 'SSES_Studio.png' },
              { name: '디자인큼', src: '디자인큼.png' },
              { name: '바이오애드랩', src: '바이오애드랩.png' },
              { name: '상상하다', src: '상상하다3.png' },
              { name: '스마트브랜딩', src: '스마트브랜딩.png' },
              { name: '유노택스', src: '유노택스.png' },
            ]).concat([
              { name: 'SSES Studio', src: 'SSES_Studio.png' },
              { name: '디자인큼', src: '디자인큼.png' },
              { name: '바이오애드랩', src: '바이오애드랩.png' },
              { name: '상상하다', src: '상상하다3.png' },
              { name: '스마트브랜딩', src: '스마트브랜딩.png' },
              { name: '유노택스', src: '유노택스.png' },
            ]).map((logo, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer px-4"
              >
                <img
                  src={`/images/down_logo/${logo.src}`}
                  alt={logo.name}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
