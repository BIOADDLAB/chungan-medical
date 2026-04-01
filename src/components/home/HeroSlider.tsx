'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroSlider() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: '.custom-hero-pagination',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        className="hero-swiper h-full w-full"
      >
        {/* Slide 1: Medical Equipment Focus */}
        <SwiperSlide className="relative h-full w-full">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="medical equipment"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl font-medium mb-4 text-gray-200"
            >
              Dermatology Solutions
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-20"
            >
              CHEONGAN MEDICAL<br />Premium Device Frontier
            </motion.h1>
          </div>
        </SwiperSlide>

        {/* Slide 2: Message Focus */}
        <SwiperSlide className="relative h-full w-full">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="office meeting"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-6xl font-bold leading-tight text-white"
            >
              합리적인 피부미용 의료 장비,<br />그리고 최고의 선택
            </motion.h1>
          </div>
        </SwiperSlide>

        {/* Slide 3: Quote Focus */}
        <SwiperSlide className="relative h-full w-full">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="abstract tech"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-8xl font-black text-white italic tracking-tighter"
            >
              "Do what is Right,<br className="md:hidden" /> Not what is easy"
            </motion.h1>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Pagination Dots (Circular & Higher Up) */}
      <div className="custom-hero-pagination absolute z-30 flex justify-center items-center gap-3 !bottom-32 !left-1/2 !-translate-x-1/2" />

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <Link
          href="/#about"
          className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white group-hover:text-black transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
