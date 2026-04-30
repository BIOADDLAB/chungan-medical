'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';

const PARTNER_LOGOS = [
  { name: 'SSES Studio', src: 'SSES_Studio.png', width: 4167, height: 2084 },
  { name: '디자인큼', src: '디자인큼.png', width: 5906, height: 5906 },
  { name: '바이오애드랩', src: '바이오애드랩.png', width: 7166, height: 1891 },
  { name: '상상하다', src: '상상하다3.png', width: 2078, height: 821 },
  { name: '스마트브랜딩', src: '스마트브랜딩.png', width: 4167, height: 4167 },
  { name: '유노택스', src: '유노택스.png', width: 10779, height: 2457 },
];

export default function PartnerMarquee() {
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);

  useEffect(() => {
    const firstSet = firstSetRef.current;

    if (!firstSet) {
      return;
    }

    const updateSetWidth = () => {
      setSetWidth(firstSet.getBoundingClientRect().width);
    };

    updateSetWidth();

    const resizeObserver = new ResizeObserver(updateSetWidth);
    resizeObserver.observe(firstSet);
    window.addEventListener('resize', updateSetWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateSetWidth);
    };
  }, []);

  return (
    <section id="partners" className="partners-section pt-24 pb-0 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 border border-[#00B3E4]/30 text-[#00B3E4] text-[10px] font-bold tracking-[0.4em] uppercase mb-8"
        >
          Global Network
        </motion.div>

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
          병원 분과별 맞춤 세팅 시스템. 당신의 브랜드가 가장 주목받는 의료 공간에서
          <br className="hidden md:block" />
          최적의 솔루션과 만나는 혁신적인 네트워크를 경험하세요.
        </motion.p>
      </div>

      <div className="relative py-24 bg-[#e0f2fe] border-y border-[#00B3E4]/10 overflow-hidden group">
        <div className="absolute inset-0 bg-tech-grid opacity-[0.03] pointer-events-none" />

        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#e0f2fe] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#e0f2fe] to-transparent z-10 pointer-events-none" />

        <div className="flex select-none overflow-hidden">
          <div
            className="partner-logo-track flex w-max flex-nowrap items-center"
            style={{ '--marquee-distance': `${setWidth}px` } as CSSProperties}
          >
            {[0, 1, 2, 3].map((setIndex) => (
              <div
                key={setIndex}
                ref={setIndex === 0 ? firstSetRef : undefined}
                aria-hidden={setIndex > 0}
                className="flex flex-none items-center gap-20 pr-20 md:gap-24 md:pr-24"
              >
                {PARTNER_LOGOS.map((logo) => (
                  <div
                    key={`${setIndex}-${logo.src}`}
                    className="flex-shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer px-4"
                  >
                    <Image
                      src={`/images/down_logo/${logo.src}`}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      className="h-16 md:h-20 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
