'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const PRODUCTS = [
  {
    id: 1,
    name: 'PICO-K',
    image: '/images/machine/피코케이 사진1.png',
    logo: '/images/machine/피코케이 로고.png',
    makerLogo: '/images/machine/specliose로고.png'
  },
  { id: 2, name: '유펄스', image: '/images/machine/유펄스 사진.png', logo: '/images/machine/유펄스 로고.png', makerLogo: '/images/machine/snj로고.png' },
  { id: 3, name: '유펄스듀얼', image: '/images/machine/유펄스듀얼 사진.png', logo: '/images/machine/유펄스듀얼 로고.png', makerLogo: '/images/machine/snj로고.png' },
  { id: 4, name: '엔펄스FX', image: '/images/machine/N-Pulse FX 01.png', logo: '', makerLogo: '/images/machine/snj로고.png' },
  { id: 5, name: '엔펄스 프로', image: '/images/machine/N-Pulse Pro 01.png', logo: '', makerLogo: '/images/machine/snj로고.png' },
  { id: 6, name: 'SYLFIRM X', image: '/images/machine/실펌x 사진1.png', logo: '/images/machine/실펌 로고.png', makerLogo: '/images/machine/비올 로고.png' },
  { id: 7, name: 'CELLINEW', image: '/images/machine/셀리뉴_수정.png', logo: '/images/machine/셀리뉴 로고.png', makerLogo: '/images/machine/비올 로고.png' },
  { id: 8, name: '브이로어드밴스', image: '/images/machine/브이로어드밴스 사진.png', logo: '/images/machine/브이로어드밴스 로고.png', makerLogo: '/images/machine/하이로닉 로고.png' },
];

export default function ProductLineup() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="services" className="product-section py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-tech-dots opacity-30 mix-blend-screen pointer-events-none" />
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4 bg-[#050810]/80 border border-[#00B7F1]/30 py-2 px-6 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(0,183,241,0.15)]">
              <svg width="24" height="24" viewBox="0 0 120 120" className="animate-[spin_10s_linear_infinite]">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#00B7F1" strokeWidth="8" strokeDasharray="10 20" />
                <circle cx="60" cy="60" r="30" fill="none" stroke="#00B7F1" strokeWidth="4" />
                <circle cx="60" cy="30" r="8" fill="#00B7F1" className="animate-ping" />
              </svg>
              <span className="text-[#00B7F1] font-bold text-xs tracking-[0.2em] leading-tight uppercase">
                CHUNGAN MEDICAL SYSTEM
              </span>
            </div>
          </div>

          <div className="text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase mb-6">
              <span className="hero-title-main">CHUNGAN</span> <span className="hero-title-highlight">LINE-UP</span>
            </h2>
            <div className="w-20 h-[2px] bg-primary mb-8 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
            <p className="text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed text-lg">
              (주)청안 메디칼 코퍼레이션은 병의원용 피부미용 장비의 새로운 기준을 제시합니다.<br className="hidden md:block" />
              정밀한 제어와 최상의 결과를 위한 청안의 하이엔드 라인업을 만나보세요.
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-12 w-full max-w-md mx-auto relative z-30">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00B7F1]/30 to-transparent -z-10" />
              <button ref={prevRef} className="product-prev product-nav-btn relative z-10" aria-label="이전">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#00B7F1] to-transparent shadow-[0_0_10px_#00B7F1] z-0"></div>
              <button ref={nextRef} className="product-next product-nav-btn relative z-10" aria-label="다음">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Swiper Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="product-swiper-outer"
        >
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="product-swiper"
          >
            {PRODUCTS.map((prod) => (
              <SwiperSlide key={prod.id} className="py-12">
                <div className="product-card group">
                  <div className="product-img-wrap">
                    <img
                      src={prod.image || "/images/machine/피코케이 사진1.png"}
                      alt={`${prod.name} 장비`}
                      className={`product-machine-img ${!prod.image ? 'opacity-20 grayscale' : ''}`}
                    />
                  </div>
                  <div className="product-card-footer">
                    {prod.logo && (
                      <img src={prod.logo} alt="제품 로고" className="product-maker-logo-img" />
                    )}
                    {prod.makerLogo && (
                      <img src={prod.makerLogo} alt="제조사 로고" className="product-footer-logo-img" />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
