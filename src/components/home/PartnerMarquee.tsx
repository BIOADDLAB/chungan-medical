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
    <section id="partners" className="partners-section pt-12 pb-0 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-4xl font-bold mb-4"
        >
          Our Partners & Clients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg"
        >
          병원 분과 별로 맞춤 세팅, 이제 당신의 브랜드가 가장 주목받는 의료 공간에서 가장 필요한 타겟과 만날 시간입니다
        </motion.p>
      </div>

      <div className="partners-marquee-container space-y-8">
        {/* Row 1: Left to Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-2"
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            className="partner-marquee-1"
          >
            {/* Repeat 3 times to ensure smooth infinite scroll */}
            {[...PARTNERS_ROW_1, ...PARTNERS_ROW_1, ...PARTNERS_ROW_1].map((partner, idx) => (
              <SwiperSlide key={`row1-${idx}`} className="!w-auto px-10">
                <div className={`text-2xl font-bold text-white/30 ${partner.className}`}>
                  {partner.name}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Row 2: Right to Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-2 flex flex-row-reverse"
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            loop={true}
            speed={4000}
            dir="rtl" // Right-to-left config
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            allowTouchMove={false}
            className="partner-marquee-2"
          >
            {[...PARTNERS_ROW_2, ...PARTNERS_ROW_2, ...PARTNERS_ROW_2].map((partner, idx) => (
              <SwiperSlide key={`row2-${idx}`} className="!w-auto px-10" dir="ltr">
                <div className={`text-2xl font-bold text-white/30 ${partner.className}`}>
                  {partner.name}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
