'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80",
    alt: "medical interior",
    title: '합리적인 피부미용 의료 장비,',
    highlight: '정확한 기술의 시작',
    type: 'tech'
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    alt: "office meeting",
    title: '합리적인 피부미용 의료 장비,',
    highlight: '그리고 최고의 선택',
    type: 'office'
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    alt: "abstract tech",
    title: 'Do What is Right,',
    highlight: 'Not what is easy',
    type: 'vision'
  },
];

export default function HeroSlider() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-sky-50">
      <div className="absolute inset-0 z-20 pointer-events-none bg-tech-grid opacity-30 mix-blend-multiply" />

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: '.custom-hero-pagination',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={1000}
        className="hero-swiper h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full bg-sky-50">
            {({ isActive }) => (
              <>
                {/* Background Image with Animation tied to isActive */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    key={isActive ? `active-${index}` : `inactive-${index}`}
                    initial={{ scale: 1.0 }}
                    animate={isActive ? { scale: 1.05 } : { scale: 1.0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={slide.src}
                    className="absolute inset-0 h-full w-full object-cover z-0 opacity-85 brightness-[0.85] contrast-[1.05]"
                    alt={slide.alt}
                  />
                  
                  {/* Overlays */}
                  {slide.type === 'tech' && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden h-screen w-full z-10">
                      <div className="absolute inset-0 bg-tech-grid opacity-10" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />
                    </div>
                  )}
                  {slide.type === 'office' && (
                    <div className="absolute inset-0 bg-black/15 z-10" />
                  )}
                  {slide.type === 'vision' && (
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10" />
                  )}
                </div>

                {/* Content */}
                <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={isActive ? { opacity: 1, width: 'clamp(72px, 7vw, 128px)' } : { opacity: 0, width: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-accent-line mb-10"
                  />
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="hero-title mb-20"
                  >
                    <span className="hero-title-main !text-white">{slide.title}</span>
                    <br />
                    <span className="hero-title-highlight">{slide.highlight}</span>
                  </motion.h1>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-hero-pagination absolute z-30 flex items-center justify-center gap-2 !bottom-32 !left-1/2 !-translate-x-1/2" />

      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
        <Link
          href="/#about"
          aria-label="Scroll down"
          className="inline-flex justify-center items-center w-12 h-12 border border-slate-300 rounded-full hover:bg-slate-100 hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-white/50 backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-slate-700 group-hover:text-black transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
