'use client';

import { motion } from 'framer-motion';

export default function ConsultingOrbit() {
  return (
    <section id="consulting" className="consulting-section items-center flex flex-col pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-screen-xl mx-auto px-6 w-full text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[#00B7F1] text-3xl md:text-4xl font-bold mb-4">01 병의원 개원컨설팅/턴키</h2>
          <p className="text-gray-700 text-lg font-medium">청안의 원팀 서비스는 원장님의 불안 요소를 줄이고 시간 가치는 높여 드립니다.</p>
        </motion.div>

        {/* Orbit Diagram Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="consulting-diagram-wrap relative mx-auto flex justify-center items-center"
        >
          {/* Central Logo: CN+ Style */}
          <div className="consulting-center-logo z-10">
            <div className="cn-plus-symbol">
              <svg viewBox="0 0 120 120" className="w-24 h-24">
                {/* C Shape */}
                <path d="M85,35 C85,20 60,15 45,20 C30,25 20,45 20,60 C20,75 35,95 55,90" fill="none" stroke="#00B7F1" strokeWidth="12" strokeLinecap="round" />
                {/* N Shape (Bar) overlaying */}
                <path d="M55,35 L55,85" fill="none" stroke="#00B7F1" strokeWidth="12" strokeLinecap="round" />
                {/* Accent Plus */}
                <circle cx="100" cy="35" r="14" fill="#00B7F1" />
                <path d="M100,28 v14 M93,35 h14" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-center mt-6 font-black text-[#00B7F1] leading-tight text-2xl tracking-tighter uppercase">
              CHUNG AN MEDICAL<br />
              <span className="text-[12px] font-bold text-gray-500 tracking-[0.3em] opacity-80">CORPORATION</span>
            </div>
          </div>

          {/* Orbiting Circles Wrapper */}
          <div className="consulting-orbit-path"></div>
          <div className="orbit-items-wrap">
            <div className="orbit-item item-1"><span>병의원 전문<br />MSO 운영/관리</span></div>
            <div className="orbit-item item-2"><span>국 · 내외<br />환자유치</span></div>
            <div className="orbit-item item-3"><span>병의원 전문<br />온라인 마케팅</span></div>
            <div className="orbit-item item-4"><span>병의원 전문<br />인테리어</span></div>
            <div className="orbit-item item-5"><span>병의원 전문<br />세무사/노무사</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
