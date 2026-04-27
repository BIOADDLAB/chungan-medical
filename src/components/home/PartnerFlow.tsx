'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PARTNERS_ROW_1 = [
  { name: 'ISOI', style: 'font-serif tracking-tighter' },
  { name: 'Dr.Plus', style: 'font-bold italic' },
  { name: 'MEDI HUB', style: 'font-black tracking-tight' },
  { name: '애경', style: 'font-medium' },
  { name: 'PICO-K', style: 'font-black tracking-[0.2em] text-primary' },
  { name: 'REJURAN', style: 'font-black uppercase tracking-[0.3em]' },
  { name: 'Olive Young', style: 'font-serif font-bold' },
];

const PARTNERS_ROW_2 = [
  { name: 'Hironic', style: 'lowercase font-bold' },
  { name: 'SNJ', style: 'font-black italic' },
  { name: 'Viol', style: 'font-medium tracking-widest' },
  { name: 'Lutronic', style: 'font-bold uppercase' },
  { name: 'Cynosure', style: 'font-serif' },
  { name: 'Alma', style: 'font-black tracking-tighter' },
  { name: 'CANDELA', style: 'uppercase font-black tracking-widest' },
];

export default function PartnerFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [100, -600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-600, 100]);

  return (
    <section 
      ref={containerRef}
      className="partners-flow-section pt-40 pb-40 bg-white overflow-hidden relative"
    >
      {/* High-Tech Background Decor */}
      <div className="absolute inset-0 bg-tech-grid opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Section Header */}
      <div className="max-w-screen-xl mx-auto px-6 mb-32 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-2 border border-primary/20 text-primary text-[11px] font-bold tracking-[0.4em] uppercase mb-12 bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Global Strategic Network
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-slate-900 text-5xl md:text-7xl font-black mb-12 tracking-[-0.04em] uppercase leading-[0.95]"
        >
          THE <span className="text-primary italic">FLOW</span> OF<br />
          <span className="relative">
            INNOVATION
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-2 left-0 h-1 bg-primary/30"
            />
          </span>
        </motion.h2>
      </div>

      {/* Infinite Streaming Viewport */}
      <div className="relative py-20">
        {/* Side Masks */}
        <div className="absolute inset-y-0 left-0 w-40 md:w-96 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 md:w-96 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex mb-20 overflow-hidden select-none">
          <motion.div 
            style={{ x: x1 }}
            className="flex flex-nowrap gap-12 items-center"
          >
            {[...PARTNERS_ROW_1, ...PARTNERS_ROW_1, ...PARTNERS_ROW_1].map((partner, idx) => (
              <LogoCard key={`f1-${idx}`} partner={partner} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden select-none">
          <motion.div 
            style={{ x: x2 }}
            className="flex flex-nowrap gap-12 items-center"
          >
            {[...PARTNERS_ROW_2, ...PARTNERS_ROW_2, ...PARTNERS_ROW_2].map((partner, idx) => (
              <LogoCard key={`f2-${idx}`} partner={partner} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LogoCard({ partner }: { partner: any }) {
  return (
    <motion.div
      whileHover={{ y: -15, scale: 1.05 }}
      className="group relative flex-shrink-0"
    >
      <div className="relative px-16 py-10 bg-white/40 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] transition-all duration-700 group-hover:bg-white group-hover:border-primary/50 group-hover:shadow-[0_40px_80px_-25px_rgba(0,179,228,0.25)]">
        <div className="absolute top-4 left-6 w-8 h-[1px] bg-slate-200 group-hover:bg-primary/40 transition-colors" />
        
        <span className={`text-3xl md:text-5xl font-black text-slate-200 transition-all duration-700 group-hover:text-slate-900 group-hover:tracking-tight ${partner.style}`}>
          {partner.name}
        </span>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-1/3 rounded-t-full" />
      </div>
      
      <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
    </motion.div>
  );
}
