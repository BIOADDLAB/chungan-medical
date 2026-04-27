'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';

const PARTNERS_ROW_1 = [
  { name: 'ISOI', className: '' },
  { name: 'Dr.Plus', className: '' },
  { name: 'MEDI HUB', className: '' },
  { name: '애경', className: '' },
  { name: 'PICO-K', className: 'tracking-widest' },
  { name: 'Johnson & Johnson', className: 'italic' },
  { name: 'Rejuran', className: 'uppercase' },
  { name: 'Olive Young', className: 'font-serif' },
];

const PARTNERS_ROW_2 = [
  { name: 'Hironic', className: 'lowercase' },
  { name: 'SNJ', className: '' },
  { name: 'Viol', className: '' },
  { name: 'Lutronic', className: '' },
  { name: 'Cynosure', className: '' },
  { name: 'Alma', className: '' },
  { name: 'Lumenis', className: '' },
  { name: 'Candela', className: 'uppercase' },
];

export default function PartnerMarquee() {
  return (
    <section id="partners" className="partners-section pt-24 pb-0 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5"
        >
          Global Network
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-slate-900 text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase"
        >
          <span className="hero-title-main">Our</span> <span className="hero-title-highlight">Partners</span> <span className="hero-title-main">& Clients</span>
        </motion.h2>
        <div className="w-20 h-[2px] bg-primary mx-auto mb-8" />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed"
        >
          병원 분과별 맞춤 세팅 시스템. 당신의<br className="md:hidden" /> 브랜드가 가장 주목받는 의료 공간에서<br />
          최적의 솔루션과 만나는 혁신적인<br className="md:hidden" /> 네트워크를 경험하세요.
        </motion.p>
      </div>

      <div className="partners-marquee-container space-y-12 py-16 bg-sky-50/60 backdrop-blur-sm border-y border-sky-100">
        {/* Row 1: Left to Right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-4 relative"
        >
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#F0F9FF] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#F0F9FF] to-transparent z-20 pointer-events-none" />

          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            loop={true}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            className="partner-marquee-1"
          >
            {[...PARTNERS_ROW_1, ...PARTNERS_ROW_1, ...PARTNERS_ROW_1].map((partner, idx) => (
              <SwiperSlide key={`row1-${idx}`} className="!w-auto px-12">
                <div className={`text-xl md:text-3xl font-black tracking-tighter transition-all duration-500 hover:text-slate-900 group relative ${partner.className}`}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400/40 to-slate-400/10 group-hover:from-slate-800 group-hover:to-primary group-hover:text-glow transition-all duration-500">
                    {partner.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Row 2: Right to Left (Reverse movement) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-4 relative flex"
        >
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#F0F9FF] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#F0F9FF] to-transparent z-20 pointer-events-none" />

          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            loop={true}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            className="partner-marquee-2"
          >
            {[...PARTNERS_ROW_2, ...PARTNERS_ROW_2, ...PARTNERS_ROW_2].map((partner, idx) => (
              <SwiperSlide key={`row2-${idx}`} className="!w-auto px-12">
                <div className={`text-xl md:text-3xl font-black tracking-tighter transition-all duration-500 hover:text-slate-900 group relative ${partner.className}`}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400/40 to-slate-400/10 group-hover:from-slate-800 group-hover:to-primary transition-all duration-500">
                    {partner.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
