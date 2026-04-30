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
                className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-sky-50"
            >
                {/* 배경 이미지 레이어 */}
                <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80"
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 brightness-[0.85] contrast-[1.05]"
                    alt="medical background"
                />
                {/* 그라디언트 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40 z-10" />
                {/* Tech Grid 오버레이 */}
                <div className="absolute inset-0 bg-tech-grid opacity-30 mix-blend-multiply z-10 pointer-events-none" />

                {/* 콘텐츠 */}
                <div className="relative z-20 flex flex-col items-center max-w-screen-xl mx-auto px-6 w-full">
                    {/* 타이틀 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black mb-8 tracking-tight uppercase leading-tight text-white"
                    >
                        <span className="hero-title-main block md:inline !text-white">N - PULSE</span>
                        <span className="hero-title-highlight ml-0 md:ml-4">PRIME</span>
                    </motion.h1>

                    {/* 부제 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-16 h-[2px] bg-primary mb-6" />
                        <p className="text-white/90 text-lg md:text-xl font-medium tracking-tight uppercase max-w-2xl">
                            합리적인 피부미용 의료 장비, <span className="text-primary font-bold">정확한 기술의 시작</span>
                        </p>
                    </motion.div>
                </div>

                {/* 스크롤 유도 버튼 */}
                <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
                    <Link
                        href="#prime-overview"
                        aria-label="Scroll down"
                        className="inline-flex justify-center items-center w-12 h-12 border border-slate-300 rounded-full hover:bg-slate-100 hover:text-black transition duration-300 animate-bounce group bg-white/50 backdrop-blur-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700 group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* ② N-PULSE PRIME: Product Overview (Premium Reveal) */}
            <section id="prime-overview" className="relative py-28 md:py-40 bg-white overflow-hidden">
                {/* 테크니컬 배경 요소 */}
                <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none mix-blend-multiply" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />


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
                                <div className="inline-block px-4 py-1.5 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase bg-white leading-none">
                                    The Next Generation Fractional CO2
                                </div>

                                {/* 타이틀: N-PULSE PRIME */}
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none md:whitespace-normal whitespace-nowrap">
                                    <span className="hero-title-main md:block md:mb-2 inline text-slate-900">N - PULSE</span>
                                    <span className="hero-title-highlight text-primary ml-2 md:ml-0">PRIME</span>
                                </h2>

                                {/* 발광 막대 */}
                                <div className="w-20 h-[2px] bg-primary" />
                            </div>

                            {/* 설명 문구 */}
                            <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-xl break-keep">
                                <span className="text-slate-900 font-bold">최상의 출력과 정밀함</span>을 결합한<br />
                                에스앤제이의 기술력이 집약된 <span className="text-primary font-bold">차세대 하이엔드 솔루션</span>입니다.
                            </p>

                            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg break-keep font-medium opacity-80">
                                N-PULSE PRIME은 기존 시리즈의 성능을 뛰어넘는 압도적인 Peak Power와
                                정교한 빔 컨트롤을 통해 시술의 효율성과 환자의 만족도를 동시에 충족시킵니다.
                            </p>

                            {/* 핵심 사양 미니 그리드 */}
                            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md pt-4">
                                <div className="bg-slate-50 p-4 md:p-6 border border-slate-200 group hover:border-primary/30 transition-all duration-500 rounded-xl">
                                    <span className="text-[10px] font-bold text-primary/60 tracking-widest uppercase block mb-2">Output Mode</span>
                                    <span className="text-base md:text-lg font-black text-slate-900 tracking-tight uppercase whitespace-nowrap">Ultra Pulse</span>
                                </div>
                                <div className="bg-slate-50 p-4 md:p-6 border border-slate-200 group hover:border-primary/30 transition-all duration-500 rounded-xl">
                                    <span className="text-[10px] font-bold text-primary/60 tracking-widest uppercase block mb-2">Core Tech</span>
                                    <span className="text-base md:text-lg font-black text-slate-900 tracking-tight uppercase whitespace-nowrap">Prime Beam</span>
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


                                {/* 제품 이미지: prime.png */}
                                {/* 팁: 아래 className의 max-w-[440px] 숫자를 조절하면 이미지 크기를 변경할 수 있습니다. */}
                                <img
                                    src="/images/npulse_prime/prime.png"
                                    alt="N-PULSE PRIME"
                                    className="w-full max-w-[340px] md:max-w-[440px] h-auto relative z-10 group-hover:scale-105 transition-transform duration-1000 ease-out brightness-110 contrast-105"
                                />

                                {/* 하단 반사 효과 */}

                            </div>

                            {/* 장식용 텍스트 오버레이 */}

                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ③ Smart Interface & GUI Section (Intuitive Control) */}
            <section id="smart-interface" className="relative py-28 bg-sky-50 overflow-hidden border-t border-sky-100">
                <div className="absolute inset-0 bg-tech-dots opacity-10 mix-blend-multiply pointer-events-none" />


                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <div className="inline-block px-4 py-1.5 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-white leading-none">
                            User Experience
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase leading-tight">
                            <span className="hero-title-main text-slate-900">SMART INTERFACE</span><br />
                            <span className="text-primary">& INTUITIVE GUI</span>
                        </h2>
                        <div className="w-20 h-[2px] bg-primary mx-auto mb-14" />
                    </motion.div>


                    {/* GUI Layout Grid */}
                    <div className="space-y-28 md:space-y-40 max-w-6xl mx-auto">

                        {/* 1. COS Mode Row */}
                        <div className="relative">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center relative">

                                {/* Background Accent Line */}
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 -z-10 hidden md:block" />

                                {/* Left GUI: CW */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                    className="md:col-span-5 relative group"
                                >
                                    {/* Tech Frame Decoration */}
                                    <div className="absolute -inset-2 border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary/50 z-20" />
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary/50 z-20" />

                                    <div className="aspect-[1.5/1] relative overflow-hidden flex items-center justify-center bg-white border border-slate-200 group-hover:border-primary/40 transition-all duration-700 rounded-xl">
                                        <img
                                            src="/images/npulse_prime/cw.png"
                                            alt="CW Mode"
                                            className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-1000 ease-out brightness-100"
                                        />

                                        {/* Scanning Effect (Framer Motion) */}
                                        <motion.div
                                            className="absolute left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-primary/10 to-transparent z-20 pointer-events-none"
                                            animate={{ top: ['-100%', '100%'] }}
                                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                        />



                                        {/* Corner Accents */}
                                        <div className="absolute top-4 left-4 w-10 h-[1px] bg-primary/30 z-20" />
                                        <div className="absolute top-4 left-4 w-[1px] h-10 bg-primary/30 z-20" />
                                    </div>

                                    <div className="mt-4 flex flex-col items-start">
                                        <span className="text-[10px] font-black text-primary/60 tracking-[0.4em] uppercase mb-1">Module Alpha 01</span>
                                        <h4 className="text-slate-900 font-black text-lg tracking-widest uppercase">CW CONTROL GUI</h4>
                                    </div>
                                </motion.div>

                                {/* Center: HUD Orbit */}
                                <div className="md:col-span-2 flex justify-center py-10 md:py-0 relative z-30">
                                    <div className="relative">
                                        {/* Animated HUD Rings */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-[-25px] border border-dashed border-primary/20 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-[-12px] border border-primary/30 rounded-full"
                                        />


                                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-primary/30 bg-white flex flex-col items-center justify-center text-center p-6 relative overflow-hidden group">


                                            <span className="text-primary font-black text-2xl md:text-3xl leading-none mb-1 tracking-tighter uppercase">
                                                COS
                                                <span className="font-light text-slate-500 block text-[10px] mt-2 tracking-[0.4em] indent-[0.4em]">MODE</span>
                                            </span>
                                            <div className="w-10 h-[1px] bg-primary/30 my-4" />
                                            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] indent-[0.3em] leading-none opacity-80">CW · ULTRA</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right GUI: ULTRA */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                    className="md:col-span-5 relative group"
                                >
                                    {/* Tech Frame Decoration */}
                                    <div className="absolute -inset-2 border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                    <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary/50 z-20" />
                                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary/50 z-20" />

                                    <div className="aspect-[1.5/1] relative overflow-hidden flex items-center justify-center bg-white border border-slate-200 group-hover:border-primary/40 transition-all duration-700 rounded-xl">
                                        <img
                                            src="/images/npulse_prime/ultra.png"
                                            alt="ULTRA Mode"
                                            className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-1000 ease-out brightness-100"
                                        />

                                        {/* Scanning Effect (Framer Motion) */}
                                        <motion.div
                                            className="absolute left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-primary/10 to-transparent z-20 pointer-events-none"
                                            animate={{ top: ['-100%', '100%'] }}
                                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                        />



                                        {/* Corner Accents */}
                                        <div className="absolute top-4 right-4 w-10 h-[1px] bg-primary/30 z-20" />
                                        <div className="absolute top-4 right-4 w-[1px] h-10 bg-primary/30 z-20" />
                                    </div>

                                    <div className="mt-4 flex flex-col items-end text-right">
                                        <span className="text-[10px] font-black text-primary/60 tracking-[0.4em] uppercase mb-1">Module Alpha 02</span>
                                        <h4 className="text-slate-900 font-black text-lg tracking-widest uppercase">ULTRA CONTROL GUI</h4>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* 2. PIN Mode Row */}
                        <div className="relative">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center relative">

                                {/* Background Accent Line */}
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 -z-10 hidden md:block" />

                                {/* Left GUI: SINGLE */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="md:col-span-5 relative group"
                                >
                                    {/* Tech Frame Decoration */}
                                    <div className="absolute -inset-2 border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary/50 z-20" />
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary/50 z-20" />

                                    <div className="aspect-[1.5/1] relative overflow-hidden flex items-center justify-center bg-white border border-slate-200 group-hover:border-primary/40 transition-all duration-700 rounded-xl">
                                        <img
                                            src="/images/npulse_prime/pin1.png"
                                            alt="Single Mode"
                                            className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-1000 ease-out brightness-100"
                                        />

                                        {/* Scanning Effect (Framer Motion) */}
                                        <motion.div
                                            className="absolute left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-primary/10 to-transparent z-20 pointer-events-none"
                                            animate={{ top: ['-100%', '100%'] }}
                                            transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                                        />



                                        {/* Corner Accents */}
                                        <div className="absolute top-4 left-4 w-10 h-[1px] bg-primary/30 z-20" />
                                        <div className="absolute top-4 left-4 w-[1px] h-10 bg-primary/30 z-20" />
                                    </div>

                                    <div className="mt-4 flex flex-col items-start">
                                        <span className="text-[10px] font-black text-primary/60 tracking-[0.4em] uppercase mb-1">Module Beta 01</span>
                                        <h4 className="text-slate-900 font-black text-lg tracking-widest uppercase">SINGLE PULSE GUI</h4>
                                    </div>
                                </motion.div>

                                {/* Center: HUD Orbit */}
                                <div className="md:col-span-2 flex justify-center py-10 md:py-0 relative z-30">
                                    <div className="relative">
                                        {/* Animated HUD Rings */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-[-25px] border border-dashed border-primary/20 rounded-full"
                                        />
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-[-12px] border border-primary/30 rounded-full"
                                        />


                                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-primary/30 bg-white flex flex-col items-center justify-center text-center p-6 relative overflow-hidden group">


                                            <span className="text-primary font-black text-2xl md:text-3xl leading-none mb-1 tracking-tighter uppercase">
                                                PIN
                                                <span className="font-light text-slate-500 block text-[10px] mt-2 tracking-[0.4em] indent-[0.4em]">MODE</span>
                                            </span>
                                            <div className="w-10 h-[1px] bg-primary/30 my-4" />
                                            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] indent-[0.3em] leading-none opacity-80">SINGLE · REPEAT</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right GUI: REPEAT */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="md:col-span-5 relative group"
                                >
                                    {/* Tech Frame Decoration */}
                                    <div className="absolute -inset-2 border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                    <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary/50 z-20" />
                                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary/50 z-20" />

                                    <div className="aspect-[1.5/1] relative overflow-hidden flex items-center justify-center bg-white border border-slate-200 group-hover:border-primary/40 transition-all duration-700 rounded-xl">
                                        <img
                                            src="/images/npulse_prime/pin2.png"
                                            alt="Repeat Mode"
                                            className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-1000 ease-out brightness-100"
                                        />

                                        {/* Scanning Effect (Framer Motion) */}
                                        <motion.div
                                            className="absolute left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-primary/10 to-transparent z-20 pointer-events-none"
                                            animate={{ top: ['-100%', '100%'] }}
                                            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                                        />



                                        {/* Corner Accents */}
                                        <div className="absolute top-4 right-4 w-10 h-[1px] bg-primary/30 z-20" />
                                        <div className="absolute top-4 right-4 w-[1px] h-10 bg-primary/30 z-20" />
                                    </div>

                                    <div className="mt-4 flex flex-col items-end text-right">
                                        <span className="text-[9px] font-black text-primary/60 tracking-[0.4em] uppercase mb-1">Module Beta 02</span>
                                        <h4 className="text-slate-900 font-black text-lg tracking-widest uppercase">REPEAT PULSE GUI</h4>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Handpiece Lineup (Attached below GUI) */}
                        <div className="mt-40 pt-32 border-t border-slate-200 relative overflow-hidden">
                            {/* Background Tech Grid for this section */}
                            <div className="absolute inset-0 bg-tech-grid opacity-10 mix-blend-multiply -z-10" />

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="text-center mb-24"
                            >
                                <div className="inline-block px-4 py-1.5 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-white leading-none">
                                    Module Extension
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase leading-tight">
                                    <span className="hero-title-main text-slate-900">PRECISE</span><br />
                                    <span className="text-primary">HANDPIECE LINEUP</span>
                                </h2>
                                <div className="w-20 h-[2px] bg-primary mx-auto mb-14" />
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 max-w-5xl mx-auto px-6">
                                {[
                                    { size: '50 mm', label: 'Precise Targeting', id: 'N-PULSE PRIME 50mm' },
                                    { size: '100 mm', label: 'Deep Reach', id: 'N-PULSE PRIME 100mm' }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: idx * 0.2 }}
                                        viewport={{ once: true }}
                                        className="group flex flex-col items-center relative"
                                    >


                                        {/* HUD Container */}
                                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-12">
                                            {/* Rotating Rings */}
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 border border-dashed border-primary/20 rounded-full"
                                            />
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-8 border border-primary/10 rounded-full"
                                            />

                                            {/* Glow Aura */}
                                            <div className="absolute inset-12 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                            {/* Background Circle */}
                                            <div className="absolute inset-4 rounded-full bg-white border border-slate-200 group-hover:border-primary/30 transition-colors duration-500" />

                                            {/* Handpiece Image */}
                                            <div className="relative w-[130%] h-48 flex items-center justify-center z-10">
                                                <img
                                                    src={`/images/npulse_prime/${idx === 0 ? '주사1.png' : '주사2.png'}`}
                                                    alt={item.size}
                                                    className="w-full h-full object-contain relative z-20 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-1000 ease-out"
                                                />

                                                {/* Tech Scan Line */}
                                                <motion.div
                                                    animate={{ left: ['-10%', '110%'] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                    className="absolute top-0 bottom-0 w-[1px] bg-primary/50 z-30 opacity-0 group-hover:opacity-100 transition-opacity"
                                                />
                                            </div>

                                            {/* ID Badge */}
                                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[8px] font-black tracking-[0.3em] indent-[0.3em] rounded-full z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
                                                {item.id}
                                            </div>
                                        </div>

                                        {/* Info Block */}
                                        <div className="text-center">
                                            <div className="relative inline-block mb-3">
                                                <h4 className="text-slate-900 font-black text-4xl md:text-5xl tracking-tighter group-hover:text-primary transition-colors duration-500">
                                                    {item.size}
                                                </h4>
                                                <div className="absolute -right-4 -top-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                                            </div>
                                            <p className="text-slate-500 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] indent-[0.5em] leading-none opacity-60 group-hover:opacity-100 transition-opacity">
                                                {item.label}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ④ Features & Benefits Section */}
            <section className="relative py-32 bg-white overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <div className="pt-24 border-t border-slate-200">
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
                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">주요 <span className="text-primary">특징</span></h3>
                                    <div className="w-12 h-[2px] bg-primary" />
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
                                        <div key={idx} className="bg-slate-50 border border-slate-200 p-6 hover:border-primary/30 transition-all duration-500 group min-h-[140px] flex flex-col justify-center rounded-xl">
                                            <h4 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-3">
                                                <span className="w-1 h-4 bg-primary/40 rounded-full group-hover:bg-primary transition-colors duration-500" />
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-600 text-base leading-relaxed break-keep">
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
                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Prime <span className="text-primary">Benefits</span></h3>
                                    <div className="w-12 h-[2px] bg-primary" />
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
                                        <div key={idx} className="bg-slate-50 border border-slate-200 p-6 hover:border-primary/30 transition-all duration-500 group min-h-[140px] flex flex-col justify-center rounded-xl">
                                            <h4 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-3">
                                                <span className="w-1 h-4 bg-primary/40 rounded-full group-hover:bg-primary transition-colors duration-500" />
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-600 text-base leading-relaxed break-keep">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </section>






        </>
    );
}
