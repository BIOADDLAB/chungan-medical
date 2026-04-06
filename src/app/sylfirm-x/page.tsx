'use client';
export const dynamic = 'force-dynamic';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SylfirmXPage() {
  return (
    <>
      {/* ① Hero Section (PICO-K / U-Pulse Style) */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-[#020408]"
      >
        {/* 배경 이미지 레이어 */}
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 brightness-[0.5] contrast-[1.1]"
          alt="medical background"
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
            <span className="hero-title-main block md:inline">SYLFIRM - </span>
            <span className="hero-title-highlight ml-0 md:ml-4">X</span>
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
              합리적인 피부미용 의료 장비, <span className="text-primary font-bold">그리고 최고의 선택</span>
            </p>
          </motion.div>
        </div>

        {/* 스크롤 유도 버튼 */}
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
          <Link
            href="#content"
            aria-label="Scroll down"
            className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② Sylfirm-X Overview Section (Current Standard Tech Style) */}
      <section id="content" className="relative py-32 bg-[#020408] overflow-hidden">
        {/* 테크니컬 배경 요소 */}
        <div className="absolute inset-0 bg-tech-grid opacity-10 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          {/* 상단 라벨 및 구분선 */}
          <div className="flex items-center gap-4 mb-20 relative overflow-hidden">
            <span className="text-primary font-black text-xs md:text-sm tracking-[0.4em] font-inter whitespace-nowrap uppercase">CORE TECHNOLOGY</span>
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
            {/* 좌측: 장비 이미지 (강조 디자인) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1 flex justify-center"
            >
              <div className="relative group">
                {/* 배경 네온 글로우 */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-125 opacity-40 group-hover:opacity-60 transition duration-1000" />
                <img
                  src="images/machine/실펌x 사진.png"
                  alt="SYLFIRM X Advanced System"
                  className="relative z-10 w-full max-w-[420px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,183,241,0.2)] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>

            {/* 우측: 핵심 기술 설명 (Revolutionary Header System) */}
            <div className="relative order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-tight">
                    <span className="hero-title-main">WHAT IS</span><br />
                    <span className="hero-title-highlight">SYLFIRM - X</span>
                  </h2>
                  <div className="w-24 h-[2px] bg-primary mb-10 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
                </div>

                <div className="space-y-8">
                  {/* 기술 설명 블록 1 */}
                  <div className="flex gap-6 items-start">
                    <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,183,241,1)]" />
                    <div>
                      <p className="text-slate-200 text-lg md:text-xl font-black leading-relaxed mb-3">
                        바늘을 통한 정밀한 <span className="text-primary">고주파 전달</span>
                      </p>
                      <p className="text-slate-400 text-[15px] md:text-base font-medium leading-relaxed">
                        SYLFIRM X는 Needle RF장비로 피부 속 원하는 깊이에 바늘(Needle)이 침습(Invasive)해 피부 속에서 고주파 열을 전달해 효과를 내는 장비입니다.
                      </p>
                    </div>
                  </div>

                  {/* 기술 설명 블록 2 */}
                  <div className="flex gap-6 items-start">
                    <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,183,241,1)]" />
                    <div>
                      <p className="text-slate-200 text-lg md:text-xl font-black leading-relaxed mb-3">
                        피부 타입과 컬러에 구애받지 않는 <span className="text-primary">시술 솔루션</span>
                      </p>
                      <p className="text-slate-400 text-[15px] md:text-base font-medium leading-relaxed">
                        레이저와 달리 피부 타입, 피부 컬러에 상관없이 시술 가능하며, 민감해 레이저 시술이 불가능한 환자도 시술 가능합니다.
                      </p>
                    </div>
                  </div>

                  {/* 기술 설명 블록 3 */}
                  <div className="flex gap-6 items-start">
                    <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,183,241,1)]" />
                    <div>
                      <p className="text-slate-200 text-lg md:text-xl font-black leading-relaxed mb-3">
                        8가지 모드를 통한 <span className="text-primary">맞춤 치료</span>
                      </p>
                      <p className="text-slate-400 text-[15px] md:text-base font-medium leading-relaxed">
                        8가지 모드로 환자의 피부 상태 및 원하는 효과에 따라 모드를 선택해 시술합니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 로고 장식 */}
                <div className="pt-8 flex justify-end">
                  <img
                    src="images/machine/실펌x 로고.png"
                    alt="SYLFIRM X Logo"
                    className="h-8 md:h-10 object-contain opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Indication Section */}
      <section id="indication" className="py-24 bg-white text-black overflow-hidden border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="text-center mb-16 reveal-up">
            <h2 className="text-[#2C335E] text-[36px] md:text-[48px] font-extrabold tracking-tight mb-8">
              SYLFIRM X Indication
            </h2>
            <div className="space-y-3 text-[#555] text-[17px] md:text-[20px] font-medium leading-relaxed">
              <p>SYLFIRM X는 Continuous(CW) 방식만 가능한 타 Needle RF와 달리 Pulsed(PW)방식도 구현 가능합니다.</p>
              <p>PW모드 사용으로 기저막과 혈관벽의 선택적 열 반응을 통해 기미, 홍조, PIH 치료에 사용 가능합니다.</p>
            </div>
          </div>

          <div className="w-full overflow-x-auto reveal-up">
            <div className="min-w-[900px] border-t-2 border-[#A8C7DF]">
              <div className="flex text-center font-bold text-[16px] md:text-[18px]">
                <div className="flex-1 py-4 border-r border-[#A8C7DF] text-[#2C335E]">
                  <div>CW MODE</div>
                  <div className="text-sm font-medium">(Continuous Wave)</div>
                </div>
                <div className="flex-1 py-4 text-[#2C335E]">
                  <div>PW MODE</div>
                  <div className="text-sm font-medium">(Pulsed Wave)</div>
                </div>
              </div>

              <div className="flex border-t border-[#A8C7DF]">
                <div className="flex-1 border-r border-[#A8C7DF]">
                  <div className="bg-[#EEF4F9] p-6 h-[220px] flex flex-col items-center justify-center space-y-4 border-b border-[#A8C7DF]">
                    <div className="w-[80%] h-[120px] bg-white/50 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                      [CW Animation Path Placeholder]
                    </div>
                    <div className="text-center font-bold text-[14px] leading-tight text-gray-700">
                      진피부터 표피까지 피부 층 전체에 열 에너지 전달<br />
                      <span className="text-xs font-medium text-gray-500">기존의 모든 Needle RF device의 에너지 방식</span>
                    </div>
                  </div>
                  <div className="flex text-center font-bold text-sm select-none">
                    <div className="w-[30%] py-3 bg-[#EEF4F9] border-r border-[#A8C7DF] text-gray-700">Mode<br />(Duration)</div>
                    <div className="flex-1 py-3 bg-[#EEF4F9] text-gray-700">Indication</div>
                  </div>
                  <div className="flex text-center text-sm">
                    <div className="w-[30%] flex flex-col">
                      <div className="py-4 border-t border-b border-r border-[#A8C7DF] bg-[#D6E2ED] text-gray-700">CW1</div>
                      <div className="py-4 border-b border-r border-[#A8C7DF] bg-[#D6E2ED] text-gray-700">CW2</div>
                      <div className="py-4 border-b border-r border-[#A8C7DF] bg-[#D6E2ED] text-gray-700">CW3</div>
                      <div className="py-4 border-b border-r border-[#A8C7DF] bg-[#D6E2ED] text-gray-700">CW4</div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center font-medium">
                      <div className="py-4 border-t border-b border-[#A8C7DF] h-1/4 flex items-center justify-center text-gray-700">
                        두피 시술 (리프팅, 순환 등)
                      </div>
                      <div className="flex-1 flex items-center justify-center px-4 leading-relaxed border-b border-[#A8C7DF] text-gray-700">
                        타이트닝/리프팅<br />모공, 흉터, 여드름<br />이중턱
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-[#EEF4F9] p-6 h-[220px] flex flex-col items-center justify-center space-y-4 border-b border-[#A8C7DF]">
                    <div className="w-[80%] h-[120px] bg-white/50 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                      [PW Animation Path Placeholder]
                    </div>
                    <div className="text-center font-bold text-[14px] leading-tight text-gray-700">
                      기저막, 혈관벽에만 열 에너지가 선택적으로 반응<br />
                      <span className="text-xs font-medium text-gray-500">SYLFIRM에서부터 사용하던 비올의 기술력</span>
                    </div>
                  </div>
                  <div className="flex text-center font-bold text-sm select-none">
                    <div className="w-[30%] py-3 bg-[#EEF4F9] border-r border-[#A8C7DF] text-gray-700">Mode<br />(Duration)</div>
                    <div className="flex-1 py-3 bg-[#EEF4F9] text-gray-700">Indication</div>
                  </div>
                  <div className="flex text-center text-sm">
                    <div className="w-[30%] flex flex-col">
                      <div className="py-4 border-t border-b border-r border-[#A8C7DF] bg-[#D6E2ED] text-gray-700">PW1</div>
                      <div className="py-4 border-b border-r border-[#A8C7DF] bg-[#D6E2ED] text-gray-700">PW2</div>
                      <div className="py-4 border-b border-r border-[#A8C7DF] bg-[#D6E2ED] text-gray-700">PW3</div>
                      <div className="py-4 border-b border-r border-[#A8C7DF] bg-[#D6E2ED] text-gray-700">PW4</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center font-medium border-t border-b border-[#A8C7DF] px-4 leading-relaxed text-gray-700">
                      기미, 홍조<br />염증성 여드름
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-12">
            <img src="images/machine/실펌x 로고.png" alt="SYLFIRM X Logo" className="h-8 md:h-10 object-contain" />
          </div>
        </div>
      </section>

      {/* Feature List Section */}
      <section id="indication-features" className="py-24 bg-white text-black overflow-hidden border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="text-center mb-20 reveal-up">
            <h2 className="text-[#2C335E] text-[36px] md:text-[48px] font-extrabold tracking-tight text-gray-800">
              SYLFIRM X Key Benefits
            </h2>
          </div>

          <div className="space-y-24 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 reveal-up">
              <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] bg-[#E2E8F0] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                <span className="text-[#000] text-[48px] md:text-[64px] font-extrabold">300</span>
              </div>
              <div className="flex-1 pt-4 text-center md:text-left">
                <h3 className="text-[#000] text-[20px] md:text-[24px] font-extrabold mb-6 leading-tight">
                  최소 통증, 최소 마취 시술이 가능한 300마이크론(㎛) 모드
                </h3>
                <ul className="space-y-3 text-[#333] text-[16px] md:text-[18px] font-medium leading-relaxed list-none">
                  <li className="flex items-start justify-center md:justify-start">
                    <span className="mr-2 mt-2.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                    아기 피부에서 보이는 Type 3 Collagen과 섬유아세포가 많이 분포되어 있는 유두진피층을 타겟
                  </li>
                  <li className="flex items-start justify-center md:justify-start">
                    <span className="mr-2 mt-2.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                    10분 내외의 마취로 통증 없이 시술 가능
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 reveal-up delay-100">
              <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] bg-[#E2E8F0] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                <span className="text-[#000] text-[56px] md:text-[84px] font-extrabold tracking-tighter">C</span>
              </div>
              <div className="flex-1 pt-4 text-center md:text-left">
                <h3 className="text-[#000] text-[20px] md:text-[24px] font-extrabold mb-6 leading-tight text-gray-800">
                  피부 탄력&리프팅&흉터 개선에 최적화 된 셀모드(CW모드)
                </h3>
                <ul className="space-y-3 text-[#333] text-[16px] md:text-[18px] font-medium leading-relaxed list-none">
                  <li className="flex items-start justify-center md:justify-start">
                    <span className="mr-2 mt-2.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                    콜라겐, 엘라스틴파이버 생성으로 피부 탄력 개선
                  </li>
                  <li className="flex items-start justify-center md:justify-start">
                    <span className="mr-2 mt-2.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                    피부의 노화로 커지는 모공, 울퉁불퉁 흉터 개선
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 reveal-up delay-200">
              <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] bg-[#E2E8F0] rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                <span className="text-[#000] text-[56px] md:text-[84px] font-extrabold tracking-tighter">P</span>
              </div>
              <div className="flex-1 pt-4 text-center md:text-left">
                <h3 className="text-[#000] text-[20px] md:text-[24px] font-extrabold mb-6 leading-tight text-gray-800">
                  기미&홍조&색소침착에 최적화 된 리페어 모드(PW 모드)
                </h3>
                <ul className="space-y-3 text-[#333] text-[16px] md:text-[18px] font-medium leading-relaxed list-none text-gray-700">
                  <li className="flex items-start justify-center md:justify-start">
                    <span className="mr-2 mt-2.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                    기미의 원인이 되는 기저막 붕괴, 과 생성된 혈관 치료
                  </li>
                  <li className="flex items-start justify-center md:justify-start">
                    <span className="mr-2 mt-2.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                    단순한 기미 제거 뿐 아니라 전반적인 피부 톤, 피부 결, 큰 혈관 치료, 염증성 여드름 치료
                  </li>
                  <li className="flex items-start justify-center md:justify-start">
                    <span className="mr-2 mt-2.5 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                    레이저 시술 후 발생하는 PIH 및 화상 흉터 시술 가능
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-24">
            <img src="images/machine/실펌x 로고.png" alt="SYLFIRM X Logo" className="h-8 md:h-10 object-contain text-gray-800" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50 text-black overflow-hidden border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 relative text-gray-800">
          <div className="text-center mb-20 reveal-up">
            <h2 className="text-[#2C335E] text-[36px] md:text-[52px] font-extrabold tracking-tight mb-8">
              SYLFIRM X 시술 수가
            </h2>
            <div className="text-gray-400 text-[15px] md:text-[18px] font-medium leading-relaxed">
              <p>서울, 경기 평균 수가로 지역 및 원내 구비 장비에 따라 상이합니다.</p>
              <p>아래 사항은 예시로 병원에 맞는 장비 및 횟수로 조정하시면 됩니다.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 reveal-up">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm flex flex-col justify-center min-h-[220px]">
                <div className="flex flex-col md:flex-row lg:flex-col justify-between items-baseline gap-4">
                  <h3 className="text-[#000] text-[20px] md:text-[24px] font-extrabold leading-tight">
                    실펌X 단독<br />시술 1회
                  </h3>
                  <div className="text-[#2C335E] text-[32px] md:text-[42px] font-black">
                    25~30<span className="text-[18px] md:text-[22px] font-bold ml-1">만</span>
                  </div>
                </div>
                <div className="mt-8 space-y-2 text-gray-400 text-[12px] md:text-[13px] font-medium leading-normal">
                  <p>* CW모드로 리프팅 시술 시 시술 수가 더 높음</p>
                  <p>* 단독 시술 수가가 낮은 병원의 경우 TIP값 별도 측정</p>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4 flex flex-col md:flex-row gap-12 md:gap-16">
              <div className="flex-1 space-y-10">
                <PricingItem title="미백실펌X(기미,색소)" desc="실펌X + 토닝 + 미백/진정관리" price="45" />
                <PricingItem title="홍조실펌X" desc="실펌X + V레이저 / 홍조레이저 + 진정관리" price="40" />
                <div className="border-b border-gray-100 pb-8 flex justify-between items-end">
                  <div>
                    <h4 className="text-[#000] text-[20px] md:text-[22px] font-extrabold mb-2">물광실펌X</h4>
                    <p className="text-gray-500 text-[14px] md:text-[15px] font-medium">실펌X + Skin Booster</p>
                    <div className="text-gray-300 text-[10px] mt-1 italic">* 사용하는 부스터에 따라 가격 상이</div>
                    <p className="text-[#000] text-[15px] font-bold mt-4">실펌X + 스킨보톡스 + LDM + 재생관리</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-[#2C335E] text-[24px] md:text-[28px] font-black">
                      60<span className="text-[16px] md:text-[18px] font-bold ml-0.5 text-black">만</span>
                    </div>
                    <div className="text-[#2C335E] text-[24px] md:text-[28px] font-black mt-4">
                      50<span className="text-[16px] md:text-[18px] font-bold ml-0.5 text-black">만</span>
                    </div>
                  </div>
                </div>
                <PricingItem title="아기실펌X" desc="실펌X + 프락셀 + PRP" price="80" />
              </div>

              <div className="flex-1 space-y-10">
                <PricingItem title="색소" desc="실펌X 3회 + 토닝 5회 + 재생관리 5회" price="165" />
                <PricingItem title="홍조" desc="실펌X 5회 + 롱펄스레이저 5회 + 진정관리 5회" price="185" />
                <div className="border-b border-gray-100 pb-8 flex justify-between items-end">
                  <div>
                    <h4 className="text-[#000] text-[20px] md:text-[22px] font-extrabold mb-2 text-gray-800">모공/여드름</h4>
                    <p className="text-gray-500 text-[14px] md:text-[15px] font-medium">나비존 실펌X 시술 1회</p>
                    <p className="text-gray-500 text-[14px] md:text-[15px] font-medium mt-4 text-gray-800">
                      실펌X (얼굴전체) + 아쿠아필 + 압출 + 진정관리
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-[#2C335E] text-[24px] md:text-[28px] font-black text-gray-800">
                      15<span className="text-[16px] md:text-[18px] font-bold ml-0.5 text-gray-800">만</span>
                    </div>
                    <div className="text-[#2C335E] text-[24px] md:text-[28px] font-black mt-4 text-gray-800">
                      50<span className="text-[16px] md:text-[18px] font-bold ml-0.5 text-gray-800">만</span>
                    </div>
                  </div>
                </div>
                <PricingItem title="탄력/리프팅" desc="실펌X + HIFU + 보톡스 + 재생관리" price="80" />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-24 text-gray-800">
            <img src="images/machine/실펌x 로고.png" alt="SYLFIRM X Logo" className="h-8 md:h-10 object-contain text-gray-800" />
          </div>
        </div>
      </section>
    </>
  );
}

function PricingItem({ title, desc, price }: { title: string; desc: string; price: string }) {
  return (
    <div className="border-b border-gray-100 pb-8 flex justify-between items-end text-gray-800">
      <div>
        <h4 className="text-[#000] text-[20px] md:text-[22px] font-extrabold mb-2 text-gray-800">{title}</h4>
        <p className="text-gray-500 text-[14px] md:text-[15px] font-medium text-gray-800">{desc}</p>
      </div>
      <div className="text-[#2C335E] text-[24px] md:text-[28px] font-black text-gray-800">
        {price}
        <span className="text-[16px] md:text-[18px] font-bold ml-0.5 text-black">만</span>
      </div>
    </div>
  );
}
