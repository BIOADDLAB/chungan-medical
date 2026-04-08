'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';

const heroSlides = [
  {
    background: 'bg-[#020408]',
    overlay: (
      <>
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 h-full w-full object-cover z-0 opacity-72 brightness-[1.08] contrast-[0.95]"
          alt="medical interior"
        />
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-screen w-full z-10">
          <div className="absolute inset-0 bg-tech-grid opacity-16" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/18 via-[#050810]/18 to-[#050810]/38 pointer-events-none" />
        </div>
      </>
    ),
    title: '합리적인 피부미용 의료 장비,',
    highlight: '정확한 기술의 시작',
  },
  {
    background: 'bg-[#020408]',
    overlay: (
      <>
        <div className="absolute inset-0 bg-[#050810]/42 z-10" />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-72 mix-blend-normal brightness-[1.08] contrast-[0.96]"
          alt="office meeting"
        />
      </>
    ),
    title: '합리적인 피부미용 의료 장비,',
    highlight: '그리고 최고의 선택',
  },
  {
    background: 'bg-[#020408]',
    overlay: (
      <>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/52 to-[#050810]/18 z-10" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-78 mix-blend-normal brightness-[1.12] contrast-[0.94]"
          alt="abstract tech"
        />
      </>
    ),
    title: 'Do What is Right,',
    highlight: 'Not what is easy',
  },
];

export default function HeroSlider() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#020408]">
      <div className="absolute inset-0 z-20 pointer-events-none bg-tech-grid opacity-30 mix-blend-screen" />

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
          <SwiperSlide key={`${slide.title}-${index}`} className={`relative h-full w-full ${slide.background}`}>
            {slide.overlay}

            <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: 'clamp(72px, 7vw, 128px)' }}
                transition={{ duration: 0.8 }}
                className="hero-accent-line mb-10"
              />
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="hero-title mb-20"
              >
                <span className="hero-title-main">{slide.title}</span>
                <br />
                <span className="hero-title-highlight">{slide.highlight}</span>
              </motion.h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-hero-pagination absolute z-30 flex items-center justify-center gap-2 !bottom-32 !left-1/2 !-translate-x-1/2" />

      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
        <Link
          href="/#about"
          aria-label="Scroll down"
          className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white group-hover:text-black transition"
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
