'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const PRODUCTS = [
  { id: 1, name: 'PICO-K' },
  { id: 2, name: '유펄스' },
  { id: 3, name: '유펄스듀얼' },
  { id: 4, name: '앤펄스FX' },
  { id: 5, name: '앤펄스 프라임' },
  { id: 6, name: 'SYLFIRM X' },
  { id: 7, name: 'CELLINEW' },
  { id: 8, name: '브이로어드밴스' },
];

export default function ProductLineup() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="services" className="product-section py-12 md:py-16 overflow-hidden bg-[#f9fbff]">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="product-header-new mb-10"
        >
          <div className="product-header-top mb-10">
            <div className="flex items-center gap-3">
              <svg width="42" height="42" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#00B7F1" strokeWidth="11" />
                <circle cx="60" cy="60" r="25" fill="none" stroke="#00B7F1" strokeWidth="9" />
                <circle cx="95" cy="25" r="16" fill="#00B7F1" />
                <path d="M95,18 v14 M88,25 h14" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <span className="text-[#00B7F1] font-bold text-[10px] tracking-widest leading-tight uppercase">
                CHUNG AN MEDICAL<br />CORPORATION
              </span>
            </div>
          </div>

          <div className="text-center">
            <h2 className="product-title-underlined inline-block mb-10">CHUNG AN LINE - UP</h2>
            <p className="product-desc-single-line mx-auto">
              (주)청안 메디칼 코퍼레이션은 병의원용 피부미용 장비를 판매하고 있으며 이를 통해 지속적으로 유통망을 확대해 나가고 있습니다. 청안의 다양한 제품을 만나보세요.
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <button ref={prevRef} className="product-prev product-nav-btn" aria-label="이전">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="w-12 h-[1px] bg-gray-300"></div>
              <button ref={nextRef} className="product-next product-nav-btn" aria-label="다음">
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
              1024: { slidesPerView: 4, spaceBetween: 40 },
            }}
            className="product-swiper"
          >
            {PRODUCTS.map((prod) => (
              <SwiperSlide key={prod.id}>
                <div className="product-card">
                  <div className="product-img-wrap">
                    {/* Note: In a real environment, different images per product id should be used */}
                    <img src="/images/machine/피코케이 사진.png" alt={`${prod.name} 장비`} className="product-machine-img" />
                  </div>
                  <div className="product-card-footer">
                    <img src="/images/machine/피코케이 로고.png" alt="제조사 로고" className="product-maker-logo-img" />
                    <img src="/images/machine/피코케이 제조사 로고.png" alt="제품 로고" className="product-footer-logo-img" />
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
