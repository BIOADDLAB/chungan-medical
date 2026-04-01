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
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Tech Overlay grid */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-tech-grid opacity-30 mix-blend-screen" />
      
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
        <SwiperSlide className="relative h-full w-full bg-[#030508]">
          <div className="absolute inset-0 pointer-events-none overflow-hidden h-screen w-full">
            <div className="absolute inset-0 bg-tech-grid opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/0 via-[#050810]/20 to-[#050810]/60 pointer-events-none" />
          </div>

          <div className="max-w-screen-xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="px-4 py-1 border border-[#00B7F1]/50 text-[#00B7F1] text-xs font-bold tracking-[0.3em] mb-6 uppercase bg-[#00B7F1]/10 backdrop-blur-sm"
            >
              SYS.ACTIVE // <span className="text-white">Dermatology Solutions</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tighter text-white mb-20 drop-shadow-2xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">CHEONGAN MEDICAL</span><br />
              <span className="text-glow text-primary font-inter italic tracking-tight">Premium Device Frontier</span>
            </motion.h1>
          </div>
        </SwiperSlide>

        {/* Slide 2: Message Focus */}
        <SwiperSlide className="relative h-full w-full bg-[#030508]">
          <div className="absolute inset-0 bg-[#050810]/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 mix-blend-luminosity"
            alt="office meeting"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '100px' }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-primary mb-8 glow-shadow"
            />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-black leading-tight text-white tracking-tight"
            >
              합리적인 피부미용 의료 장비,<br />
              <span className="text-primary text-glow">그리고 최고의 선택</span>
            </motion.h1>
          </div>
        </SwiperSlide>

        {/* Slide 3: Quote Focus */}
        <SwiperSlide className="relative h-full w-full bg-[#030508]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/90 to-[#050810]/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover z-0 mix-blend-screen opacity-60 filter hue-rotate-15"
            alt="abstract tech"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter"
            >
              <div className="text-gray-500 text-lg md:text-2xl font-bold tracking-widest mb-4">CORE PHILOSOPHY</div>
              <div className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                "Do what is Right<span className="text-primary">,</span><br className="md:hidden" /> Not what is easy"
              </div>
            </motion.h1>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Pagination Dots (Technical line style) */}
      <div className="custom-hero-pagination absolute z-30 flex justify-center items-center gap-2 !bottom-24 !left-1/2 !-translate-x-1/2" />

      {/* Tech Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <span className="text-[#00B7F1] text-[10px] font-bold tracking-widest uppercase mb-2 animate-pulse">Scroll Down</span>
        <Link
          href="/#about"
          className="inline-flex justify-center items-center w-10 h-14 border border-[#00B7F1]/30 rounded-full hover:border-[#00B7F1] transition duration-300 relative group bg-[#050810]/50 backdrop-blur-md overflow-hidden"
        >
          <div className="w-1 h-3 bg-[#00B7F1] rounded-full absolute top-2 animate-bounce shadow-[0_0_10px_#00B7F1]" />
        </Link>
      </div>
    </section>
  );
}
