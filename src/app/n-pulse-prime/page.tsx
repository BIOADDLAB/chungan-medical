'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NPulsePage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const drawGaussian = () => {
            const w = (canvas.width = canvas.offsetWidth * 2);
            const h = (canvas.height = canvas.offsetHeight * 2);

            const rows = 50;
            const cols = 50;
            const size = w * 0.75;
            const centerX = w / 2;
            const centerY = h / 2 + 150;

            ctx.clearRect(0, 0, w, h);
            ctx.lineWidth = 1;

            function getZ(x: number, y: number) {
                const d2 = x * x + y * y;
                return Math.exp(-d2 * 25) * 450;
            }

            function project(x: number, y: number, z: number) {
                const rotX = 1.2;
                const rotZ = 0.7;
                const px = (x * Math.cos(rotZ) - y * Math.sin(rotZ)) * size;
                const py = (x * Math.sin(rotZ) + y * Math.cos(rotZ)) * size;
                const finalY = py * Math.cos(rotX) - z * Math.sin(rotX);
                return { x: centerX + px, y: centerY + finalY, z: z };
            }

            const grid: { x: number; y: number; z: number }[][] = [];
            for (let i = 0; i <= rows; i++) {
                grid[i] = [];
                for (let j = 0; j <= cols; j++) {
                    const x = i / rows - 0.5;
                    const y = j / cols - 0.5;
                    const z = getZ(x, y);
                    grid[i][j] = project(x, y, z);
                }
            }

            // Draw rows
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    ctx.beginPath();
                    ctx.moveTo(grid[i][j].x, grid[i][j].y);
                    ctx.lineTo(grid[i + 1][j].x, grid[i + 1][j].y);
                    ctx.strokeStyle = `rgba(0, 196, 184, ${0.1 + (grid[i][j].z / 450) * 0.8})`;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.moveTo(grid[i][j].x, grid[i][j].y);
                    ctx.lineTo(grid[i][j + 1].x, grid[i][j + 1].y);
                    ctx.strokeStyle = `rgba(0, 196, 184, ${0.1 + (grid[i][j].z / 450) * 0.8})`;
                    ctx.stroke();
                }
            }
        };

        drawGaussian();
        window.addEventListener('resize', drawGaussian);

        return () => {
            window.removeEventListener('resize', drawGaussian);
        };
    }, []);

    return (
        <>
            {/* ① Hero Section (PICO-K Style) */}
            <section
                id="hero"
                className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-[#020408]"
            >
                {/* 배경 이미지 레이어 */}
                <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80"
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 brightness-[0.5] contrast-[1.1]"
                    alt="medical background"
                />
                {/* 그라디언트 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/30 via-transparent to-[#050810]/70 z-10" />
                {/* Tech Grid 오버레이 */}
                <div className="absolute inset-0 bg-tech-grid opacity-30 mix-blend-screen z-10 pointer-events-none" />

                {/* 콘텐츠 */}
                <div className="relative z-20 flex flex-col items-center max-w-screen-xl mx-auto px-6 w-full">
                    {/* 타이틀 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black mb-8 tracking-tight uppercase leading-tight"
                    >
                        <span className="hero-title-main block md:inline text-white">N - PULSE</span>
                        <span className="hero-title-highlight ml-0 md:ml-4">PRIME</span>
                    </motion.h1>

                    {/* 부제 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-16 h-[2px] bg-primary mb-6 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
                        <p className="text-slate-300 text-lg md:text-xl font-medium tracking-[0.2em] uppercase max-w-2xl">
                            합리적인 피부미용 의료 장비, <span className="text-primary font-bold">그리고 최고의 선택</span>
                        </p>
                    </motion.div>
                </div>

                {/* 스크롤 유도 버튼 */}
                <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
                    <Link
                        href="#prime-overview"
                        aria-label="Scroll down"
                        className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* ② N-PULSE PRIME: Product Overview (Premium Reveal) */}
            <section id="prime-overview" className="relative py-28 md:py-40 bg-[#020408] overflow-hidden">
                {/* 테크니컬 배경 요소 */}
                <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute -right-[10%] top-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
                        
                        {/* 좌측: 제품 정보 (6 Columns) */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="lg:col-span-6 space-y-10"
                        >
                            <div className="space-y-6">
                                {/* 배지 */}
                                <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase bg-primary/5 leading-none">
                                    The Next Generation Fractional CO2
                                </div>

                                {/* 타이틀: N-PULSE PRIME */}
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none">
                                    <span className="hero-title-main block mb-2">N - PULSE</span>
                                    <span className="hero-title-highlight text-primary">PRIME</span>
                                </h2>
                                
                                {/* 발광 막대 */}
                                <div className="w-20 h-[2px] bg-primary shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
                            </div>

                            {/* 설명 문구 */}
                            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl break-keep">
                                <span className="text-white font-bold">최상의 출력과 정밀함</span>을 결합한<br />
                                에스앤제이의 기술력이 집약된 <span className="text-primary font-bold">차세대 하이엔드 솔루션</span>입니다.
                            </p>

                            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg break-keep font-medium opacity-80">
                                N-PULSE PRIME은 기존 시리즈의 성능을 뛰어넘는 압도적인 Peak Power와 
                                정교한 빔 컨트롤을 통해 시술의 효율성과 환자의 만족도를 동시에 충족시킵니다.
                            </p>

                            {/* 핵심 사양 미니 그리드 */}
                            <div className="grid grid-cols-2 gap-4 max-w-md pt-4">
                                <div className="glass-panel p-6 border-white/5 bg-white/[0.02] group hover:border-primary/30 transition-all duration-500">
                                    <span className="text-[10px] font-bold text-primary/60 tracking-widest uppercase block mb-2">Output Mode</span>
                                    <span className="text-lg font-black text-white tracking-tight uppercase">Ultra Pulse</span>
                                </div>
                                <div className="glass-panel p-6 border-white/5 bg-white/[0.02] group hover:border-primary/30 transition-all duration-500">
                                    <span className="text-[10px] font-bold text-primary/60 tracking-widest uppercase block mb-2">Core Tech</span>
                                    <span className="text-lg font-black text-white tracking-tight uppercase">Prime Beam</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* 우측: 제품 이미지 (6 Columns) */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="lg:col-span-6 flex justify-center lg:justify-end relative"
                        >
                            <div className="relative group">
                                {/* 후면 글로우 오라 */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] rounded-full scale-150 opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />
                                
                                {/* 제품 이미지: prime.png */}
                                {/* 팁: 아래 className의 max-w-[440px] 숫자를 조절하면 이미지 크기를 변경할 수 있습니다. */}
                                <img 
                                    src="/images/npulse_prime/prime.png" 
                                    alt="N-PULSE PRIME" 
                                    className="w-full max-w-[340px] md:max-w-[440px] h-auto relative z-10 drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-1000 ease-out brightness-110 contrast-105"
                                />

                                {/* 하단 반사 효과 */}
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-primary/10 blur-[60px] rounded-full opacity-50" />
                            </div>

                            {/* 장식용 텍스트 오버레이 */}
                            <div className="absolute -bottom-10 right-0 pointer-events-none select-none opacity-[0.03]">
                                <span className="text-[120px] font-black tracking-tighter text-white uppercase leading-none">PRIME</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ③ Smart Interface & GUI Section (Intuitive Control) */}
            <section id="smart-interface" className="relative py-28 bg-[#020408] overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-tech-dots opacity-5 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">
                            User Experience
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-tight">
                            <span className="hero-title-main">SMART INTERFACE</span><br />
                            <span className="hero-title-highlight text-primary">& INTUITIVE GUI</span>
                        </h2>
                        <div className="w-20 h-[2px] bg-primary mx-auto mb-10 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
                    </motion.div>

                    {/* GUI Layout Grid */}
                    <div className="space-y-24 max-w-5xl mx-auto">
                        
                        {/* 1. COS Mode Row */}
                        <div className="relative">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                {/* Left GUI Image Placeholder */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="md:col-span-5"
                                >
                                    <div className="aspect-[1.5/1] glass-panel border-white/10 bg-black/40 relative overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col items-center justify-center p-2">
                                        <div className="absolute top-4 left-4 text-[10px] font-black text-primary/40 uppercase tracking-widest leading-none">GUI 01</div>
                                        <div className="text-white/20 font-black text-xl uppercase tracking-tighter group-hover:text-primary/40 transition-colors select-none">CW Mode Image</div>
                                        {/* <Image src="/images/npulse_prime/gui/cw.png" fill className="object-contain" /> */}
                                    </div>
                                </motion.div>

                                {/* Center Circle Label */}
                                <div className="md:col-span-2 flex justify-center py-8 md:py-0 relative z-20">
                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-primary/30 bg-[#020408] flex flex-col items-center justify-center text-center p-4 shadow-[0_0_30px_rgba(0,183,241,0.1)] relative group">
                                        <div className="absolute inset-0 rounded-full border border-primary animate-pulse opacity-10 group-hover:opacity-30 transition-opacity" />
                                        <span className="text-primary font-black text-lg md:text-xl leading-tight mb-1">COS <span className="font-light">Mode</span></span>
                                        <span className="text-slate-400 text-[10px] md:text-xs font-medium uppercase tracking-widest leading-none">(CW, Ultra)</span>
                                    </div>
                                    {/* Connecting Lines (Desktop only) */}
                                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-primary/20 via-transparent to-primary/20 -translate-y-1/2 -z-10" />
                                </div>

                                {/* Right GUI Image Placeholder */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="md:col-span-5"
                                >
                                    <div className="aspect-[1.5/1] glass-panel border-white/10 bg-black/40 relative overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col items-center justify-center p-2">
                                        <div className="absolute top-4 right-4 text-[10px] font-black text-primary/40 uppercase tracking-widest leading-none">GUI 02</div>
                                        <div className="text-white/20 font-black text-xl uppercase tracking-tighter group-hover:text-primary/40 transition-colors select-none">ULTRA Mode Image</div>
                                        {/* <Image src="/images/npulse_prime/gui/ultra.png" fill className="object-contain" /> */}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* 2. PIN Mode Row */}
                        <div className="relative">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                {/* Left GUI Image Placeholder */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="md:col-span-5"
                                >
                                    <div className="aspect-[1.5/1] glass-panel border-white/10 bg-black/40 relative overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col items-center justify-center p-2">
                                        <div className="absolute top-4 left-4 text-[10px] font-black text-primary/40 uppercase tracking-widest leading-none">GUI 03</div>
                                        <div className="text-white/20 font-black text-xl uppercase tracking-tighter group-hover:text-primary/40 transition-colors select-none">Single Mode Image</div>
                                        {/* <Image src="/images/npulse_prime/gui/single.png" fill className="object-contain" /> */}
                                    </div>
                                </motion.div>

                                {/* Center Circle Label */}
                                <div className="md:col-span-2 flex justify-center py-8 md:py-0 relative z-20">
                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-primary/30 bg-[#020408] flex flex-col items-center justify-center text-center p-4 shadow-[0_0_30px_rgba(0,183,241,0.1)] relative group">
                                        <div className="absolute inset-0 rounded-full border border-primary animate-pulse opacity-10 group-hover:opacity-30 transition-opacity" />
                                        <span className="text-primary font-black text-lg md:text-xl leading-tight mb-1">PIN <span className="font-light">Mode</span></span>
                                        <span className="text-slate-400 text-[10px] md:text-xs font-medium uppercase tracking-widest leading-none">(Single, Repeat)</span>
                                    </div>
                                    {/* Connecting Lines (Desktop only) */}
                                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-primary/20 via-transparent to-primary/20 -translate-y-1/2 -z-10" />
                                </div>

                                {/* Right GUI Image Placeholder */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="md:col-span-5"
                                >
                                    <div className="aspect-[1.5/1] glass-panel border-white/10 bg-black/40 relative overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col items-center justify-center p-2">
                                        <div className="absolute top-4 right-4 text-[10px] font-black text-primary/40 uppercase tracking-widest leading-none">GUI 04</div>
                                        <div className="text-white/20 font-black text-xl uppercase tracking-tighter group-hover:text-primary/40 transition-colors select-none">Repeat Mode Image</div>
                                        {/* <Image src="/images/npulse_prime/gui/repeat.png" fill className="object-contain" /> */}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Handpiece Lineup (Attached below GUI) */}
                        <div className="mt-32 pt-24 border-t border-white/5 max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-4">
                                    Precise <span className="text-primary">Handpieces</span>
                                </h3>
                                <div className="w-12 h-[1px] bg-primary/50 mx-auto shadow-[0_0_10px_rgba(0,183,241,0.5)]" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                                {[
                                    { size: '50 mm', label: 'Precise Targeting' },
                                    { size: '100 mm', label: 'Deep Reach' }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: idx * 0.2 }}
                                        viewport={{ once: true }}
                                        className="group flex flex-col items-center"
                                    >
                                        {/* Circle Container with Image Placeholder */}
                                        <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center mb-8">
                                            {/* Background Circle */}
                                            <div className="absolute inset-0 rounded-full bg-white opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500" />
                                            <div className="absolute inset-4 rounded-full border border-white/5 group-hover:border-primary/20 transition-all duration-500" />
                                            
                                            {/* Handpiece Image Placeholder (Horizontal) */}
                                            <div className="relative w-[120%] h-24 flex items-center justify-center z-10">
                                                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent flex items-center justify-center overflow-hidden border-y border-white/5 group-hover:border-primary/20 transition-all duration-500">
                                                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] group-hover:text-primary/40 transition-colors">
                                                        Handpiece Image ({item.size})
                                                    </span>
                                                </div>
                                                {/* Subtle Glow */}
                                                <div className="absolute inset-0 bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>

                                        {/* Label */}
                                        <div className="text-center">
                                            <div className="text-white font-black text-3xl md:text-4xl tracking-tight mb-2 group-hover:text-primary transition-colors">
                                                {item.size}
                                            </div>
                                            <div className="text-slate-500 text-xs md:text-sm font-bold tracking-widest uppercase leading-none">
                                                {item.label}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Features & Benefits (Attached below Handpieces) */}
                        <div className="mt-32 pt-24 border-t border-white/5">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                                
                                {/* 주요 특징 (Key Features) */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="space-y-10"
                                >
                                    <div className="space-y-4">
                                        <div className="text-primary font-bold text-xs tracking-widest uppercase">Technology Focus</div>
                                        <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">주요 <span className="text-primary">특징</span></h3>
                                        <div className="w-12 h-[2px] bg-primary shadow-[0_0_10px_rgba(0,183,241,0.5)]" />
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            { 
                                                title: '정교한 타겟 시술', 
                                                desc: '주변 조직의 열 손상을 최소화하면서 타겟 부위만 아주 정교하게 깎아냅니다. 시술 후 흉터 걱정을 줄여줍니다.' 
                                            },
                                            { 
                                                title: '빠르고 균일한 결과', 
                                                desc: '일정한 에너지를 조사하여 시술 시간이 짧고, 결과가 균일합니다.' 
                                            },
                                            { 
                                                title: '맞춤형 솔루션', 
                                                desc: '점, 잡티 제거뿐만 아니라 흉터 복원, 미세 박피 등 목적에 맞는 맞춤형 시술이 가능합니다.' 
                                            }
                                        ].map((item, idx) => (
                                            <div key={idx} className="glass-panel p-6 border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all duration-500 group min-h-[140px] flex flex-col justify-center">
                                                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-3">
                                                    <span className="w-1 h-4 bg-primary/40 rounded-full" />
                                                    {item.title}
                                                </h4>
                                                <p className="text-slate-400 text-base leading-relaxed break-keep">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Benefits (이점) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="space-y-10"
                                >
                                    <div className="space-y-4">
                                        <div className="text-primary font-bold text-xs tracking-widest uppercase">Patient Value</div>
                                        <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Prime <span className="text-primary">Benefits</span></h3>
                                        <div className="w-12 h-[2px] bg-primary shadow-[0_0_10px_rgba(0,183,241,0.5)]" />
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            { 
                                                title: '통증 및 부기 감소', 
                                                desc: '열 전달 범위를 좁혀 시술 시 통증이 적고 회복이 빠릅니다.' 
                                            },
                                            { 
                                                title: '빠른 일상 복귀', 
                                                desc: '주변 피부 손상이 적어 딱지가 생기는 기간이 단축됩니다.' 
                                            },
                                            { 
                                                title: '정밀한 시술 결과', 
                                                desc: '아주 작은 점이나 깊은 흉터도 정밀하게 치료하여 만족도가 높습니다.' 
                                            }
                                        ].map((item, idx) => (
                                            <div key={idx} className="glass-panel p-6 border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all duration-500 group min-h-[140px] flex flex-col justify-center">
                                                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-all shadow-[0_0_10px_rgba(0,183,241,0)] group-hover:shadow-[0_0_10px_rgba(0,183,241,1)]" />
                                                    {item.title}
                                                </h4>
                                                <p className="text-slate-400 text-base leading-relaxed break-keep">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ④ Advanced Technology Section (N-PULSE PRIME Evolution) */}
            <section id="advanced-tech" className="relative py-28 bg-[#020408] overflow-hidden">
                {/* 테크 배경 장식 */}
                <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    {/* 상단 라벨 */}
                    <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
                        <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase">PRIME EVOLUTION</span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            style={{ originX: 0 }}
                            className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                        {/* 좌측: 기술 리스트 */}
                        <div className="lg:col-span-6 space-y-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-black tracking-tight mb-16 uppercase"
                            >
                                <span className="hero-title-main">ADVANCED</span><br />
                                <span className="hero-title-highlight">Technology</span>
                            </motion.h2>

                            <div className="space-y-10">
                                {[
                                    {
                                        title: 'High Peak Power',
                                        desc: <>에스앤제이만의 독보적인 기술력을 바탕으로<br className="hidden md:block" /> 타협 없는 울트라 펄스 하이 피크 파워 구현</>
                                    },
                                    {
                                        title: 'Safe & Effective',
                                        desc: <>주변 조직의 열 손상을 최소화하면서도<br className="hidden md:block" /> 타겟 병변에만 에너지를 집중하여 시술 효과 극대화</>
                                    },
                                    {
                                        title: 'Convenient Design',
                                        desc: <>사용자 중심의 인체공학적 설계와 직관적인 GUI,<br className="hidden md:block" /> 다양한 핸드피스 지원으로 시술 편의성 증대</>
                                    }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group"
                                    >
                                        <div className="flex items-center gap-5 mb-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-all duration-500 shadow-[0_0_10px_rgba(0,183,241,0)] group-hover:shadow-[0_0_10px_rgba(0,183,241,1)]" />
                                            <h3 className="text-white font-black text-2xl tracking-tight group-hover:text-primary transition-colors duration-500 uppercase">{item.title}</h3>
                                        </div>
                                        <p className="text-slate-400 text-lg font-medium leading-relaxed pl-6.5 break-keep border-l border-white/5 group-hover:border-primary/20 transition-colors duration-500">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 우측: 비교 일러스트 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="lg:col-span-6 relative flex justify-center lg:justify-start"
                        >
                            <div className="relative w-full max-w-sm lg:max-w-md lg:ml-6 group rounded-xl border border-white/10 bg-black/40 p-6 md:p-8 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,183,241,0.25)] hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden">
                                {/* 텍스트 라벨 오버레이 */}
                                <div className="absolute top-8 left-0 w-full z-20 pointer-events-none">
                                    <span className="absolute left-[30%] -translate-x-1/2 text-[#888888] text-[10px] font-bold tracking-widest uppercase">General</span>
                                    <span className="absolute left-[59%] -translate-x-1/2 text-primary text-[10px] font-black tracking-widest uppercase shadow-primary/20">N-Pulse Prime</span>
                                </div>

                                <div className="absolute top-[49%] left-0 w-full z-20 pointer-events-none">
                                    <span className="absolute left-[37%] -translate-x-1/2 text-[#888888] text-[10px] font-bold tracking-widest uppercase">General</span>
                                    <span className="absolute left-[66%] -translate-x-1/2 text-primary text-[10px] font-black tracking-widest uppercase shadow-primary/20">N-Pulse Prime</span>
                                </div>

                                <img
                                    src="/images/npulse/advanced.png"
                                    alt="N-Pulse Prime Advanced Technology"
                                    className="w-full h-auto max-h-[480px] object-contain opacity-95 group-hover:opacity-100 transition-all duration-700 relative z-10"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ④ Treatment Results Section (Clinical Precision) */}
            <section id="treatment-results" className="relative py-28 bg-[#020408] overflow-hidden">
                <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        {/* 배지 */}
                        <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                            Clinical Performance
                        </div>

                        {/* 타이틀 */}
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 uppercase">
                            <span className="hero-title-main">THE RESULTS OF</span><br />
                            <span className="hero-title-highlight">TREATMENT</span>
                        </h2>
                        <div className="w-20 h-[2px] bg-primary mb-12 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />

                        {/* 카드 그리드 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { num: '01', text: '피부 깊숙이 빠르고 강하게\n열 에너지를 정밀하게 전달' },
                                { num: '02', text: '자연스러운 피부 재생을 위한\n최적의 콜라겐 형성을 유도' },
                                { num: '03', text: '콜라겐 재생 기전을 통해\n흉터와 주름을 근본적으로 개선' }
                            ].map((item, idx) => (
                                <div key={idx} className="glass-panel p-8 group hover:border-primary/40 transition-all duration-500 border-white/5 bg-white/[0.01]">
                                    <div className="text-primary font-black text-4xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">{item.num}</div>
                                    <p className="text-slate-200 text-lg md:text-xl font-bold leading-relaxed whitespace-pre-line break-keep">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Step Visualizer - clinical images integration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel-dark p-4 md:p-8 border-white/5 bg-black/50"
                    >
                        <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-6">
                            {/* Steps 1-3 Cluster: Unrolled for individual control */}
                            <div className="xl:w-[62%] flex items-center justify-between gap-0">
                                {/* Step 1 */}
                                <div className="relative group flex-1">
                                    <div className="aspect-[4/3] bg-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-primary/40 transition-all duration-500">
                                        <div className="absolute top-0 left-0 w-6 h-6 bg-white flex items-center justify-center text-[11px] font-black text-black z-20">1</div>
                                        <img src="/images/npulse/treatment1.png" alt="Treatment Step 1" className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-275 transition-all duration-700 scale-250 mt-25" />
                                    </div>
                                </div>

                                <div className="flex-shrink-0 px-1">
                                    <svg className="w-3 h-3 md:w-5 md:h-5 text-primary/60" viewBox="0 0 24 24" fill="currentColor"><path d="M10 17l5-5-5-5v10z" /></svg>
                                </div>

                                {/* Step 2 */}
                                <div className="relative group flex-1">
                                    <div className="aspect-[4/3] bg-black border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-primary/40 transition-all duration-500">
                                        <div className="absolute top-0 left-0 w-6 h-6 bg-white flex items-center justify-center text-[11px] font-black text-black z-20">2</div>
                                        <img src="/images/npulse/treatment2.png" alt="Treatment Step 2" className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-275 transition-all duration-700 scale-250 mt-25" />
                                    </div>
                                </div>

                                <div className="flex-shrink-0 px-1">
                                    <svg className="w-3 h-3 md:w-5 md:h-5 text-primary/60" viewBox="0 0 24 24" fill="currentColor"><path d="M10 17l5-5-5-5v10z" /></svg>
                                </div>

                                {/* Step 3 */}
                                <div className="relative group flex-1">
                                    <div className="aspect-[4/3] bg-[#0a0c10] border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-primary/40 transition-all duration-500">
                                        <div className="absolute top-0 left-0 w-6 h-6 bg-white flex items-center justify-center text-[11px] font-black text-black z-20">3</div>
                                        <img src="/images/npulse/treatment3.png" alt="Treatment Step 3" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                    </div>
                                </div>
                            </div>

                            {/* Triple Chevron Transition */}
                            <div className="flex xl:flex-row items-center gap-0.5 py-4 xl:py-0 px-2 lg:px-4">
                                {[0.3, 0.6, 1].map((op, i) => (
                                    <svg key={i} className="w-5 h-5 md:w-7 md:h-7 text-primary rotate-0" style={{ opacity: op }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Result Step 4 */}
                            <div className="w-full xl:w-[35%] flex-grow">
                                <div className="relative group">
                                    <div className="aspect-[16/11] border-2 border-primary/40 bg-black/60 flex items-center justify-center overflow-hidden group-hover:border-primary transition-all duration-500 shadow-[0_0_40px_rgba(0,183,241,0.15)]">
                                        <div className="absolute top-0 left-0 px-5 py-1.5 bg-primary/20 backdrop-blur-md border-r border-b border-primary/40 flex items-center justify-center text-sm font-black text-primary z-20">
                                            4
                                        </div>
                                        <img
                                            src="/images/npulse/treatment4.png"
                                            alt="Treatment Mechanism Result"
                                            className="w-full h-full object-cover group-hover:scale-160 transition-all duration-700 scale-150 mt-30"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ⑤ Beam Size Section (Micro-Precision Engineering) */}
            <section className="relative py-28 bg-[#020408] overflow-hidden">
                <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        {/* 배지 */}
                        <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                            Precision Engineering
                        </div>

                        {/* 타이틀 */}
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-tight">
                            <span className="hero-title-main">SMALLER BEAM SIZE</span><br />
                            <span className="hero-title-highlight text-primary">FRACTIONAL</span>
                            <span className="hero-title-main ml-3">LASER SYSTEM</span>
                        </h2>
                        <div className="w-20 h-[2px] bg-primary mx-auto mb-20 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-24">
                            {[
                                {
                                    id: '01',
                                    title: 'ULTRA MICRO BEAM',
                                    text: '정교하고 깊게 조사되어\n회복과 재생을 빠르게',
                                    align: 'left'
                                },
                                {
                                    id: '02',
                                    title: 'PATIENT COMFORT',
                                    text: '시술 횟수와 통증은 줄이고\n효과는 높게',
                                    align: 'right'
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: i * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative group p-0"
                                >
                                    <div className={`flex items-start gap-8 ${item.align === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                                        {/* Step Indicator with Pulse Line */}
                                        <div className="flex flex-col items-center flex-shrink-0 w-10">
                                            <div className="w-10 h-10 rounded-lg border border-primary/30 flex items-center justify-center text-primary font-black text-xs bg-primary/5 shadow-[0_0_15px_rgba(0,183,241,0.2)] group-hover:bg-primary group-hover:text-black transition-all duration-500 relative z-10">
                                                {item.id}
                                            </div>

                                            <div className="relative w-px h-16 mt-3 overflow-hidden">
                                                <div className="absolute inset-0 bg-white/10" />
                                                <motion.div
                                                    animate={{ y: ['-100%', '300%'] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                    className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-primary to-transparent opacity-60"
                                                />
                                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            </div>
                                        </div>

                                        <div className="flex-grow space-y-4 pt-1">
                                            <div className={`flex items-center pb-1 ${item.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                                                <span className="text-primary/70 font-black text-[10px] tracking-[0.3em] uppercase">{item.title}</span>
                                            </div>
                                            <div className="relative">
                                                <p className="text-white text-xl md:text-2xl font-black leading-tight tracking-tight whitespace-pre-line transition-all duration-500">
                                                    {item.text}
                                                </p>
                                            </div>
                                            <div className={`flex gap-1.5 opacity-20 group-hover:opacity-100 transition-opacity duration-700 ${item.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                                                {[1, 2, 3, 4, 5].map((dot) => (
                                                    <div key={dot} className="w-1 h-1 rounded-full bg-primary" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bottom: Technical Visualizations side-by-side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="text-center group">
                                <span className="text-primary/60 font-black text-[10px] tracking-[0.4em] uppercase block mb-1">Micro Beam Technology</span>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-white font-bold text-lg tracking-widest">Min. Beam Size</span>
                                    <span className="text-primary font-black text-xl tracking-tighter">80~100um</span>
                                </div>
                            </div>
                            <div className="aspect-[1.65/1] glass-panel bg-black/40 relative overflow-hidden flex items-center justify-center p-3 border-white/10 group transition-all duration-500 cursor-pointer hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,183,241,0.2)]">
                                <div className="absolute inset-0 bg-tech-grid opacity-20" />

                                {/* Unified Content Wrapper (Scales together) */}
                                <div className="relative w-full h-full flex items-center justify-center transition-all duration-700 scale-125 group-hover:scale-[1.45]">
                                    {/* Focal Point Circle */}
                                    <div className="absolute top-[34%] left-[53%] -translate-x-1/2 w-6 h-6 rounded-full border-2 border-primary z-20 shadow-[0_0_15px_rgba(0,183,241,0.4)]">
                                        <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-30" />
                                    </div>

                                    <img
                                        src="/images/npulse/smaller.png"
                                        alt="Micro Beam Technology"
                                        className="w-full h-full object-contain relative z-10 opacity-90 group-hover:opacity-100 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col h-full"
                        >
                            <div className="text-center mb-6">
                                <span className="text-primary/60 font-black text-[10px] tracking-[0.4em] uppercase block mb-1">Tissue Interaction</span>
                                <span className="text-white font-bold text-lg tracking-widest">Deep Layer Delivery</span>
                            </div>
                            <div className="aspect-[1.65/1] glass-panel bg-black/40 relative overflow-hidden flex flex-col items-center justify-center border-white/10 p-3 group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,183,241,0.2)] transition-all duration-500 cursor-pointer">
                                <div className="absolute inset-0 bg-tech-grid opacity-20" />
                                <img
                                    src="/images/npulse/deeplayer.png"
                                    alt="Deep Layer Delivery"
                                    className="w-full h-full object-contain relative z-10 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ⑥ Ultra Pulse Technology Section (Standardized Tech Style) */}
            <section id="ultra-pulse-tech" className="relative py-28 bg-[#020408] overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    {/* 상단 라벨 */}
                    <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
                        <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase">Ultra Pulse Core</span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            style={{ originX: 0 }}
                            className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        {/* 좌측: 상세 기술 카드 */}
                        <div className="lg:col-span-12 xl:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="mb-16"
                            >
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-tight">
                                    <span className="hero-title-main block mb-2">HIGH PEAK POWER</span>
                                    <span className="hero-title-highlight text-primary">ULTRA PULSE</span>
                                </h2>
                                <div className="w-20 h-[2px] bg-primary mb-12 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: 'MINIMIZED THERMAL DAMAGE', desc: '울트라 펄스를 통한 열손상 최소화로\n빠른 회복과 정교한 시술 가능' },
                                        { title: 'OPTIMIZED EFFICIENCY', desc: '시술 횟수와 통증은 획기적으로 낮추고\n임상 효과는 극대화' },
                                        { title: 'ELITE BEAM QUALITY', desc: '주변 조직 결손 없이 샤프하게 조사되는\n최상급 퀄리티의 레이저 빔' },
                                        { title: 'PRECISION CONTROL', desc: 'Frequency와 Duration 조절을 통한\n차원이 다른 섬세한 에너지 전달' }
                                    ].map((item, i) => (
                                        <div key={i} className="glass-panel-dark p-6 group border-white/5 hover:border-primary/20 transition-all duration-500">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-1 h-3 bg-primary/40 group-hover:bg-primary transition-all duration-500" />
                                                <h4 className="text-primary/70 font-black text-[11px] tracking-widest uppercase">{item.title}</h4>
                                            </div>
                                            <p className="text-white font-bold leading-relaxed whitespace-pre-line text-[15px] md:text-[16px]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* 우측: 통합 파워 시스템 시각화 */}
                        <div className="lg:col-span-12 xl:col-span-5 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-square max-w-[500px] mx-auto"
                            >
                                {/* 중앙 코어 에너지 효과 */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 blur-3xl animate-pulse" />

                                {/* 3개 코어 연결선 */}
                                <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                                    <path d="M200,80 L100,280 L300,280 Z" fill="none" stroke="#00B7F1" strokeWidth="1" strokeDasharray="5,5" />
                                    <circle cx="200" cy="80" r="4" fill="#00B7F1" />
                                    <circle cx="100" cy="280" r="4" fill="#00B7F1" />
                                    <circle cx="300" cy="280" r="4" fill="#00B7F1" />
                                </svg>

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    {/* 상단: 파워보드 */}
                                    <motion.div
                                        initial={{ borderColor: "rgba(0, 183, 241, 0.2)", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}
                                        whileHover={{
                                            borderColor: "#00B7F1",
                                            boxShadow: "0 0 50px rgba(0, 183, 241, 0.6)"
                                        }}
                                        transition={{ duration: 0 }}
                                        className="absolute -top-7 w-36 h-36 rounded-full glass-panel flex items-center justify-center text-center p-4 cursor-pointer pointer-events-auto z-30 border"
                                    >
                                        <div className="space-y-1">
                                            <div className="text-primary font-black text-[10px] tracking-widest">UNIT 01</div>
                                            <div className="text-white font-black text-[15px]">파워보드</div>
                                        </div>
                                    </motion.div>
                                    {/* 좌하단: 글래스튜브 */}
                                    <motion.div
                                        initial={{ borderColor: "rgba(0, 183, 241, 0.2)", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}
                                        whileHover={{
                                            borderColor: "#00B7F1",
                                            boxShadow: "0 0 50px rgba(0, 183, 241, 0.6)"
                                        }}
                                        transition={{ duration: 0 }}
                                        className="absolute bottom-10 left-0 w-36 h-36 rounded-full glass-panel flex items-center justify-center text-center p-4 cursor-pointer pointer-events-auto z-30 border"
                                    >
                                        <div className="space-y-1">
                                            <div className="text-primary font-black text-[10px] tracking-widest">UNIT 02</div>
                                            <div className="text-white font-black text-[15px]">높은 파워의<br />글래스튜브</div>
                                        </div>
                                    </motion.div>
                                    {/* 우하단: 레귤레이터 */}
                                    <motion.div
                                        initial={{ borderColor: "rgba(0, 183, 241, 0.2)", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}
                                        whileHover={{
                                            borderColor: "#00B7F1",
                                            boxShadow: "0 0 50px rgba(0, 183, 241, 0.6)"
                                        }}
                                        transition={{ duration: 0 }}
                                        className="absolute bottom-10 right-0 w-36 h-36 rounded-full glass-panel flex items-center justify-center text-center p-4 cursor-pointer pointer-events-auto z-30 border"
                                    >
                                        <div className="space-y-1">
                                            <div className="text-primary font-black text-[10px] tracking-widest">UNIT 03</div>
                                            <div className="text-white font-black text-[15px]">고성능의<br />레귤레이터</div>
                                        </div>
                                    </motion.div>

                                    {/* 중앙 에너지 코어 노드 */}
                                    <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_#00B7F1] animate-ping opacity-40" />
                                    <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff] z-20" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ⑦ Indication Section */}
            <section id="indication" className="relative py-28 bg-[#020408] overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-screen-xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                            Clinical Applications
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-tight">
                            <span className="hero-title-main">INDICATION</span>
                        </h2>
                        <div className="w-20 h-[2px] bg-primary mx-auto mb-12 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />

                        <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-3xl mx-auto mb-20 break-keep">
                            N-Pulse Prime은 점·사마귀·쥐젖 제거와 기미·검버섯 개선 등,<br className="hidden md:block" />
                            다양한 병변에 효과적일 뿐만 아니라 외과수술에서도 정밀한 활용이 가능합니다.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    ko: '점, 검버섯',
                                    en: 'Mole, Melasma',
                                    img: '/images/npulse/indication1.png'
                                },
                                {
                                    ko: '편평 사마귀, 사마귀, 쥐젖',
                                    en: 'Verruca Plana, Wart',
                                    img: '/images/npulse/indication2.png'
                                },
                                {
                                    ko: '한관종, 비립종',
                                    en: 'Syringoma, Milium',
                                    img: '/images/npulse/indication3.png'
                                },
                                {
                                    ko: '흉터 (화상, 모공, 여드름)',
                                    en: 'Scar (Burn, Pore, Acne)',
                                    img: '/images/npulse/indication4.png'
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center group cursor-pointer"
                                >
                                    <div className="w-full max-w-[160px] md:max-w-[190px] aspect-square relative rounded-full mb-6 p-1.5 bg-gradient-to-br from-white/10 via-transparent to-transparent flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,183,241,0.3)] transition-all duration-500 bg-black/40">
                                        {/* Image */}
                                        <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#0A0C10] flex items-center justify-center border border-white/5">
                                            {item.img ? (
                                                <img src={item.img} alt={item.en} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                            ) : (
                                                <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest text-center px-2">Image Area</div>
                                            )}
                                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                                        </div>
                                    </div>
                                    <h4 className="text-white font-bold text-[14px] md:text-[16px] mb-1.5 group-hover:text-primary transition-colors duration-300 break-keep">
                                        {item.ko}
                                    </h4>
                                    <p className="text-slate-400 font-medium text-[11px] md:text-[13px] uppercase tracking-wider text-center">
                                        {item.en}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specification Section - Premium HUD 리뉴얼 */}
            <section className="py-32 bg-black overflow-hidden relative">
                {/* 배경 네온 글로우 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        {/* HUD Header - 일관된 디자인 적용 */}
                        {/* 상단 라벨 */}
                        <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
                            <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase">SPECIFICATION</span>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                style={{ originX: 0 }}
                                className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none"
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
                            {/* Pro Image - 좌측 위치 유지 */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="hidden lg:block w-1/4 relative order-1 self-stretch min-h-[600px]"
                            >
                                <img
                                    src="images/machine/엔펄스pro 사진.png"
                                    alt="N-Pulse Pro"
                                    className="absolute bottom-0 -right-[390px] w-[1100px] max-w-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,183,241,0.2)] z-20 hover:scale-105 transition-transform duration-700 ease-out origin-bottom"
                                />
                            </motion.div>

                            {/* Photo-Parity Matching Table - 중앙 위치 유지 */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full lg:w-1/2 order-2 overflow-x-auto self-center z-30"
                            >
                                <div className="shadow-2xl active-table-container">
                                    <table className="w-full border-collapse text-[14px] md:text-[15px] border border-primary/20 text-center min-w-[500px] bg-black/40 backdrop-blur-md">
                                        <thead>
                                            <tr className="h-16">
                                                <th className="bg-black/80 text-primary border border-primary/20 font-black uppercase tracking-widest w-[28%] text-[11px]">Product Name</th>
                                                <th className="bg-white/5 text-slate-300 border border-primary/20 font-black w-[36%]">N-Pulse Pro</th>
                                                <th className="bg-white/5 text-slate-300 border border-primary/20 font-black w-[36%]">N-Pulse FX</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-slate-300 font-medium">
                                            <tr className="h-14 border-b border-white/5">
                                                <td className="bg-primary/10 text-primary border border-primary/20 font-black px-4 text-[11px] uppercase tracking-widest">Mode</td>
                                                <td className="border border-white/5 bg-white/[0.02]">CO2 (Surgical)</td>
                                                <td className="border border-white/5 bg-white/[0.02]">CO2 (Surgical),<br />FRX (Fractional)</td>
                                            </tr>
                                            <tr className="h-14 border-b border-white/5">
                                                <td className="bg-primary/10 text-primary border border-primary/20 font-black px-4 text-[11px] uppercase tracking-widest">Laser System</td>
                                                <td colSpan={2} className="border border-white/5 bg-white/[0.02]">Fractional CO2 Laser</td>
                                            </tr>
                                            <tr className="h-14 border-b border-white/5">
                                                <td className="bg-primary/10 text-primary border border-primary/20 font-black px-4 text-[11px] uppercase tracking-widest">Wavelength</td>
                                                <td colSpan={2} className="border border-white/5 bg-white/[0.02]">10,600 nm</td>
                                            </tr>
                                            <tr className="h-16 border-b border-white/5">
                                                <td className="bg-primary/10 text-primary border border-primary/20 font-black px-4 text-[11px] uppercase tracking-widest leading-tight">Power (COS)</td>
                                                <td className="border border-white/5 bg-white/[0.02]">0.5 ~ 30 W</td>
                                                {/* 사진과 똑같은 Energy (FRX) 강조 디자인 - 프리미엄 블루 박스 */}
                                                <td className="border border-white/5 p-0 bg-white/[0.02]">
                                                    <div className="flex h-16 w-full items-stretch">
                                                        <div className="flex-1 bg-primary text-black flex items-center justify-center font-black text-[12px] uppercase tracking-tighter px-2 shadow-[0_0_20px_rgba(0,183,241,0.3)]">
                                                            Energy (FRX)
                                                        </div>
                                                        <div className="flex-1 flex items-center justify-center px-2 font-black text-white">
                                                            2 ~ 300mJ
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="h-14 border-b border-white/5">
                                                <td className="bg-primary/10 text-primary border border-primary/20 font-black px-4 text-[11px] uppercase tracking-widest">Electrical</td>
                                                <td colSpan={2} className="border border-white/5 bg-white/[0.02]">220~240 VAC, 50/60 Hz, 1,100VA</td>
                                            </tr>
                                            <tr className="h-14 border-b border-white/5">
                                                <td className="bg-primary/10 text-primary border border-primary/20 font-black px-4 text-[11px] uppercase tracking-widest leading-tight">User Interface</td>
                                                <td colSpan={2} className="border border-white/5 bg-white/[0.02]">10.2 Inch</td>
                                            </tr>
                                            <tr className="h-14 border-b border-white/5">
                                                <td className="bg-primary/10 text-primary border border-primary/20 font-black px-4 text-[11px] uppercase tracking-widest">Dimension</td>
                                                <td colSpan={2} className="border border-white/5 bg-white/[0.02]">340(W) X 350(D) X 1,100(H) mm</td>
                                            </tr>
                                            <tr className="h-14">
                                                <td className="bg-primary/10 text-primary border border-primary/20 font-black px-4 text-[11px] uppercase tracking-widest">Weight</td>
                                                <td colSpan={2} className="border border-white/5 bg-white/[0.02]">35 kg</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>

                            {/* FX Image - 우측 위치 유지 */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="hidden lg:block w-1/4 relative order-3 self-stretch min-h-[600px]"
                            >
                                <img
                                    src="images/machine/엔펄스fx 사진.png"
                                    alt="N-Pulse FX"
                                    className="absolute bottom-0 -left-12 h-[102%] max-w-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,183,241,0.2)] z-20 hover:scale-105 transition-transform duration-700 ease-out origin-bottom"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
