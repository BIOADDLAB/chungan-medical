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
                        className="text-4xl md:text-7xl font-black mb-8 tracking-tight uppercase leading-tight text-white drop-shadow-xl"
                    >
                        <span className="hero-title-main block md:inline !text-white">N - PULSE PRO,</span>
                        <span className="hero-title-highlight ml-0 md:ml-4">N - PULSE FX</span>
                    </motion.h1>

                    {/* 부제 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-16 h-[2px] bg-primary mb-6 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
                        <p className="text-white/90 text-lg md:text-xl font-medium tracking-[0.2em] uppercase max-w-2xl drop-shadow-md">
                            합리적인 피부미용 의료 장비, <span className="text-primary font-bold">정확한 기술의 시작</span>
                        </p>
                    </motion.div>
                </div>

                {/* 스크롤 유도 버튼 */}
                <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
                    <Link
                        href="#content"
                        aria-label="Scroll down"
                        className="inline-flex justify-center items-center w-12 h-12 border border-slate-300 rounded-full hover:bg-slate-100 hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-white/50 backdrop-blur-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700 group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* ② Machine Models Comparison Section (Standardized Tech Style) */}
            <section id="content" className="relative pt-20 pb-0 md:pt-32 md:pb-20 bg-white overflow-hidden">
                {/* 테크 배경 장식 */}
                <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none mix-blend-multiply" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />


                <div className="max-w-[1350px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 relative min-h-[600px] md:min-h-[850px]">
                        {/* 중앙 테크 수직 구분선 */}
                        <div className="hidden md:block absolute left-1/2 top-10 bottom-32 w-[1px] bg-gradient-to-b from-transparent via-primary/40 to-transparent -translate-x-1/2 z-10">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                        </div>

                        {/* Left Model: N-Pulse Pro */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-full flex flex-col justify-start pt-10 md:pt-32 h-full"
                        >
                            <div className="relative z-30 pointer-events-none mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-[1px] bg-primary" />
                                    <span className="text-primary font-black text-sm tracking-widest uppercase">Single Mode</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-tight">
                                    <span className="hero-title-main">N - PULSE</span><br />
                                    <span className="hero-title-highlight">PRO</span>
                                </h2>
                                <div className="space-y-2">
                                    <p className="text-slate-700 text-lg md:text-xl font-bold tracking-tight flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,183,241,0.6)] animate-pulse" />
                                        CO2 (Surgical)
                                    </p>
                                </div>
                            </div>
                            <img
                                src="images/machine/엔펄스pro 사진.png"
                                alt="N-Pulse Pro"
                                className="absolute right-[-140px] sm:right-[-180px] md:right-[-280px] lg:right-[-440px] bottom-6 md:bottom-20 h-[75%] md:h-[85%] lg:h-[90%] max-w-none object-contain object-bottom z-20 pointer-events-auto hover:scale-105 transition-transform duration-1000 ease-out origin-bottom brightness-[1.1] contrast-[1.05]"
                            />
                        </motion.div>

                        {/* Right Model: N-Pulse FX */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-full flex flex-col justify-start pt-10 md:pt-32 md:pl-24 h-full"
                        >
                            <div className="relative z-30 pointer-events-none mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-[1px] bg-primary" />
                                    <span className="text-primary font-black text-sm tracking-widest uppercase">Dual Mode</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-tight">
                                    <span className="hero-title-main">N - PULSE</span><br />
                                    <span className="hero-title-highlight">FX</span>
                                </h2>
                                <div className="space-y-2">
                                    <p className="text-slate-700 text-lg md:text-xl font-bold tracking-tight flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,183,241,0.6)] animate-pulse" />
                                        CO2 (Surgical)
                                    </p>
                                    <p className="text-slate-700 text-lg md:text-xl font-bold tracking-tight flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,183,241,0.6)] animate-pulse" />
                                        FRX (Fractional)
                                    </p>
                                </div>
                            </div>
                            <img
                                src="images/machine/엔펄스fx 사진.png"
                                alt="N-Pulse FX"
                                className="absolute right-[-50px] lg:right-[-100px] bottom-6 md:bottom-20 h-[75%] md:h-[85%] lg:h-[90%] max-w-none object-contain object-bottom z-20 pointer-events-auto hover:scale-105 transition-transform duration-1000 ease-out origin-bottom brightness-[1.1] contrast-[1.05]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ③ Advanced Technology Section (Standardized Tech Style) */}
            <section id="advanced-tech" className="relative py-28 bg-sky-50 overflow-hidden">
                {/* 테크 배경 장식 */}
                <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none mix-blend-multiply" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    {/* 상단 라벨 */}
                    <div className="flex items-center gap-4 mb-14 relative overflow-hidden">
                        <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase">ADVANCED CORE</span>
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
                                className="text-3xl md:text-5xl font-black tracking-tight mb-16"
                            >
                                <span className="hero-title-main text-slate-900">ADVANCED</span><br />
                                <span className="hero-title-highlight uppercase">Technology</span>
                            </motion.h2>

                            <div className="space-y-10">
                                {[
                                    {
                                        title: 'Technology',
                                        desc: <>에스앤제이만의 기술력을 바탕으로 비교불가 <br className="hidden md:block" /> 하이 피크 파워 울트라 펄스 구현</>
                                    },
                                    {
                                        title: 'Safe & Effective',
                                        desc: <>열 손상 최소화 및 다양한 스팟 사이즈로 <br className="hidden md:block" /> 시술 효과 극대화</>
                                    },
                                    {
                                        title: 'Convenient',
                                        desc: <>3가지 핸드피스로 다양한 스팟사이즈 구현 <br className="hidden md:block" /> 사용자 중심의 인체공학적 디자인 & GUI</>
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
                                            <h3 className="text-slate-900 font-black text-2xl tracking-tight group-hover:text-primary transition-colors duration-500">{item.title}</h3>
                                        </div>
                                        <p className="text-slate-600 text-lg font-medium leading-relaxed pl-6.5 break-keep border-l border-slate-200 group-hover:border-primary/20 transition-colors duration-500">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 우측: 비교 일러스트 (투명 배경 PNG에 맞게 테두리 단순화 및 제거) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="lg:col-span-6 relative flex justify-center lg:justify-start"
                        >
                            {/* 푸른 빛의 이중 테두리/그라데이션 싹 제거, 깔끔한 단일 컨테이너로 통일 */}
                            <div className="relative w-full max-w-sm lg:max-w-md lg:ml-6 group rounded-xl border border-slate-200 bg-white p-6 md:p-8 hover:border-primary/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:scale-[1.02] transition-all duration-500 cursor-pointer overflow-hidden">
                                {/* 텍스트 라벨 오버레이 (상단) */}
                                <div className="absolute top-8 left-0 w-full z-20 pointer-events-none">
                                    <span className="absolute left-[30%] -translate-x-1/2 text-slate-500 text-sm md:text-base font-medium tracking-tight">Other</span>
                                    <span className="absolute left-[59%] -translate-x-1/2 text-slate-900 text-sm md:text-base font-black tracking-tight">N-Pulse Pro</span>
                                </div>

                                {/* 텍스트 라벨 오버레이 (하단) */}
                                <div className="absolute top-[49%] left-0 w-full z-20 pointer-events-none">
                                    <span className="absolute left-[37%] -translate-x-1/2 text-slate-500 text-sm md:text-base font-medium tracking-tight">Other</span>
                                    <span className="absolute left-[66%] -translate-x-1/2 text-slate-900 text-sm md:text-base font-black tracking-tight">N-Pulse FX</span>
                                </div>

                                <img
                                    src="/images/npulse/advanced.png"
                                    alt="N-Pulse Advanced Technology"
                                    className="w-full h-auto max-h-[480px] object-contain opacity-95 group-hover:opacity-100 transition-all duration-700 relative z-10"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ④ Treatment Results Section */}
            <section id="treatment-results" className="relative py-28 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none mix-blend-multiply" />

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                            Clinical Performance
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                            <span className="hero-title-main text-slate-900">THE RESULTS OF</span><br />
                            <span className="hero-title-highlight">TREATMENT</span>
                        </h2>
                        <div className="w-20 h-[2px] bg-primary mb-12" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                '피부 깊숙이 빠르고 강하게\n열 에너지 전달',
                                '피부 재생을 위한\n콜라겐 형성을 유도',
                                '콜라겐 재생을 통해\n흉터, 주름 등을 개선'
                            ].map((text, idx) => (
                                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 group hover:border-primary/40 transition-all duration-500 shadow-sm">
                                    <div className="text-primary font-black text-4xl mb-6 opacity-40 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                                    <p className="text-slate-900 text-lg md:text-xl font-bold leading-relaxed whitespace-pre-line">
                                        {text}
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
                        className="bg-sky-50 border border-sky-100 p-4 md:p-8 shadow-sm rounded-2xl"
                    >
                        <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-6">
                            {/* Steps 1-3 Cluster: Unrolled for individual control */}
                            <div className="xl:w-[62%] flex items-center justify-between gap-0">
                                {/* Step 1 */}
                                <div className="relative group flex-1">
                                    <div className="aspect-[4/3] bg-white border border-slate-200 flex items-center justify-center overflow-hidden group-hover:border-primary/40 transition-all duration-500 rounded-xl">
                                        <div className="absolute top-0 left-0 w-6 h-6 bg-slate-100 flex items-center justify-center text-[11px] font-black text-slate-900 z-20">1</div>
                                        <img src="/images/npulse/treatment1.png" alt="Treatment Step 1" className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-275 transition-all duration-700 scale-250 mt-25" />
                                    </div>
                                </div>

                                <div className="flex-shrink-0 px-1">
                                    <svg className="w-3 h-3 md:w-5 md:h-5 text-primary/60" viewBox="0 0 24 24" fill="currentColor"><path d="M10 17l5-5-5-5v10z" /></svg>
                                </div>

                                {/* Step 2 */}
                                <div className="relative group flex-1">
                                    <div className="aspect-[4/3] bg-white border border-slate-200 flex items-center justify-center overflow-hidden group-hover:border-primary/40 transition-all duration-500 rounded-xl">
                                        <div className="absolute top-0 left-0 w-6 h-6 bg-slate-100 flex items-center justify-center text-[11px] font-black text-slate-900 z-20">2</div>
                                        <img src="/images/npulse/treatment2.png" alt="Treatment Step 2" className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-275 transition-all duration-700 scale-250 mt-25" />
                                    </div>
                                </div>

                                <div className="flex-shrink-0 px-1">
                                    <svg className="w-3 h-3 md:w-5 md:h-5 text-primary/60" viewBox="0 0 24 24" fill="currentColor"><path d="M10 17l5-5-5-5v10z" /></svg>
                                </div>

                                {/* Step 3 */}
                                <div className="relative group flex-1">
                                    <div className="aspect-[4/3] bg-white border border-slate-200 flex items-center justify-center overflow-hidden group-hover:border-primary/40 transition-all duration-500 rounded-xl">
                                        <div className="absolute top-0 left-0 w-6 h-6 bg-slate-100 flex items-center justify-center text-[11px] font-black text-slate-900 z-20">3</div>
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
                                    <div className="aspect-[16/11] border-2 border-primary/20 bg-white flex items-center justify-center overflow-hidden group-hover:border-primary transition-all duration-500 shadow-sm rounded-xl">
                                        <div className="absolute top-0 left-0 px-5 py-1.5 bg-primary/10 backdrop-blur-md border-r border-b border-primary/20 flex items-center justify-center text-sm font-black text-primary z-20">
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

            {/* ⑤ Beam Size Section (Standardized Tech Style) */}
            <section className="relative py-28 bg-sky-50 overflow-hidden">
                <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none mix-blend-multiply" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                            Precision Engineering
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-tight">
                            <span className="hero-title-main text-slate-900">SMALLER BEAM SIZE</span><br />
                            <span className="hero-title-highlight">FRACTIONAL</span>
                            <span className="hero-title-main ml-3 text-slate-900">LASER SYSTEM</span>
                        </h2>
                        <div className="w-20 h-[2px] bg-primary mx-auto mb-20" />

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
                                            <div className="w-10 h-10 rounded-lg border border-primary/30 flex items-center justify-center text-primary font-black text-xs bg-white shadow-sm group-hover:bg-primary group-hover:text-black transition-all duration-500 relative z-10">
                                                {item.id}
                                            </div>

                                            <div className="relative w-px h-16 mt-3 overflow-hidden">
                                                <div className="absolute inset-0 bg-slate-200" />
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
                                                <p className="text-slate-900 text-xl md:text-2xl font-black leading-tight tracking-tight whitespace-pre-line transition-all duration-500">
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
                                    <span className="text-slate-900 font-bold text-lg tracking-widest">Min. Beam Size</span>
                                    <span className="text-primary font-black text-xl tracking-tighter">80~100um</span>
                                </div>
                            </div>
                            <div className="aspect-[1.65/1] bg-white border border-slate-200 shadow-sm relative overflow-hidden flex items-center justify-center p-3 group transition-all duration-500 cursor-pointer hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,183,241,0.2)] rounded-xl">
                                <div className="absolute inset-0 bg-tech-grid opacity-10 mix-blend-multiply" />

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
                                <span className="text-slate-900 font-bold text-lg tracking-widest">Deep Layer Delivery</span>
                            </div>
                            <div className="aspect-[1.65/1] bg-white border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center justify-center p-3 group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,183,241,0.2)] transition-all duration-500 cursor-pointer rounded-xl">
                                <div className="absolute inset-0 bg-tech-grid opacity-10 mix-blend-multiply" />
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
            <section id="ultra-pulse-tech" className="relative py-28 bg-white overflow-hidden border-t border-sky-100">
                <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none mix-blend-multiply" />
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
                                    <span className="hero-title-main text-slate-900">HIGH PEAK POWER</span><br />
                                    <span className="hero-title-highlight">ULTRA PULSE</span>
                                </h2>
                                <div className="w-20 h-[2px] bg-primary mb-12" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: 'MINIMIZED THERMAL DAMAGE', desc: '울트라 펄스를 통한 열손상 최소화로\n빠른 회복과 정교한 시술 가능' },
                                        { title: 'OPTIMIZED EFFICIENCY', desc: '시술 횟수와 통증은 획기적으로 낮추고\n임상 효과는 극대화' },
                                        { title: 'ELITE BEAM QUALITY', desc: '주변 조직 결손 없이 샤프하게 조사되는\n최상급 퀄리티의 레이저 빔' },
                                        { title: 'PRECISION CONTROL', desc: 'Frequency와 Duration 조절을 통한\n차원이 다른 섬세한 에너지 전달' }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-slate-50 border border-slate-200 shadow-sm rounded-2xl p-6 group hover:border-primary/20 transition-all duration-500">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-1 h-3 bg-primary/40 group-hover:bg-primary transition-all duration-500" />
                                                <h4 className="text-primary/70 font-black text-[11px] tracking-widest uppercase">{item.title}</h4>
                                            </div>
                                            <p className="text-slate-900 font-bold leading-relaxed whitespace-pre-line text-[15px] md:text-[16px]">
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
                                        className="absolute -top-7 w-36 h-36 rounded-full bg-white border-slate-200 shadow-sm flex items-center justify-center text-center p-4 cursor-pointer pointer-events-auto z-30 border"
                                    >
                                        <div className="space-y-1">
                                            <div className="text-primary font-black text-[10px] tracking-widest">UNIT 01</div>
                                            <div className="text-slate-900 font-black text-[15px]">파워보드</div>
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
                                        className="absolute bottom-10 left-0 w-36 h-36 rounded-full bg-white border-slate-200 shadow-sm flex items-center justify-center text-center p-4 cursor-pointer pointer-events-auto z-30 border"
                                    >
                                        <div className="space-y-1">
                                            <div className="text-primary font-black text-[10px] tracking-widest">UNIT 02</div>
                                            <div className="text-slate-900 font-black text-[15px]">높은 파워의<br />글래스튜브</div>
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
                                        className="absolute bottom-10 right-0 w-36 h-36 rounded-full bg-white border-slate-200 shadow-sm flex items-center justify-center text-center p-4 cursor-pointer pointer-events-auto z-30 border"
                                    >
                                        <div className="space-y-1">
                                            <div className="text-primary font-black text-[10px] tracking-widest">UNIT 03</div>
                                            <div className="text-slate-900 font-black text-[15px]">고성능의<br />레귤레이터</div>
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
            <section id="indication" className="relative py-28 bg-sky-50 overflow-hidden border-t border-sky-100">
                <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none mix-blend-multiply" />
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
                            <span className="hero-title-main text-slate-900">INDICATION</span>
                        </h2>
                        <div className="w-20 h-[2px] bg-primary mx-auto mb-12" />

                        <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-20 break-keep">
                            N-Pulse Pro와 N-Pulse FX는 점·사마귀·쥐젖 제거와 기미·검버섯 개선 등,<br className="hidden md:block" />
                            다양한 병변에 효과적일 뿐만 아니라 외과수술에서도 활용이 가능합니다.
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
                                    <div className="w-full max-w-[160px] md:max-w-[190px] aspect-square relative rounded-full mb-6 p-1.5 bg-gradient-to-br from-slate-200 via-transparent to-transparent flex items-center justify-center overflow-hidden border border-slate-200 group-hover:border-primary/50 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 bg-white shadow-sm">
                                        {/* Image */}
                                        <div className="absolute inset-[3px] rounded-full overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-200">
                                            {item.img ? (
                                                <img src={item.img} alt={item.en} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                            ) : (
                                                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest text-center px-2">Image Area</div>
                                            )}
                                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                                        </div>
                                    </div>
                                    <h4 className="text-slate-900 font-bold text-[14px] md:text-[16px] mb-1.5 group-hover:text-primary transition-colors duration-300 break-keep">
                                        {item.ko}
                                    </h4>
                                    <p className="text-slate-500 font-medium text-[11px] md:text-[13px] uppercase tracking-wider text-center">
                                        {item.en}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specification Section - Premium HUD 리뉴얼 */}
            <section className="py-32 bg-white overflow-hidden relative">
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
                                <div className="shadow-sm active-table-container">
                                    <table className="w-full border-collapse text-[14px] md:text-[15px] border border-slate-200 text-center min-w-[500px] bg-white backdrop-blur-md">
                                        <thead>
                                            <tr className="h-16">
                                                <th className="bg-slate-100 text-slate-700 border border-slate-200 font-black uppercase tracking-widest w-[28%] text-[11px]">Product Name</th>
                                                <th className="bg-slate-50 text-slate-900 border border-slate-200 font-black w-[36%]">N-Pulse Pro</th>
                                                <th className="bg-slate-50 text-slate-900 border border-slate-200 font-black w-[36%]">N-Pulse FX</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-slate-700 font-medium">
                                            <tr className="h-14 border-b border-slate-200">
                                                <td className="bg-slate-50 text-slate-900 border border-slate-200 font-black px-4 text-[11px] uppercase tracking-widest">Mode</td>
                                                <td className="border border-slate-200 bg-white">CO2 (Surgical)</td>
                                                <td className="border border-slate-200 bg-white">CO2 (Surgical),<br />FRX (Fractional)</td>
                                            </tr>
                                            <tr className="h-14 border-b border-slate-200">
                                                <td className="bg-slate-50 text-slate-900 border border-slate-200 font-black px-4 text-[11px] uppercase tracking-widest">Laser System</td>
                                                <td colSpan={2} className="border border-slate-200 bg-white">Fractional CO2 Laser</td>
                                            </tr>
                                            <tr className="h-14 border-b border-slate-200">
                                                <td className="bg-slate-50 text-slate-900 border border-slate-200 font-black px-4 text-[11px] uppercase tracking-widest">Wavelength</td>
                                                <td colSpan={2} className="border border-slate-200 bg-white">10,600 nm</td>
                                            </tr>
                                            <tr className="h-16 border-b border-slate-200">
                                                <td className="bg-slate-50 text-slate-900 border border-slate-200 font-black px-4 text-[11px] uppercase tracking-widest leading-tight">Power (COS)</td>
                                                <td className="border border-slate-200 bg-white">0.5 ~ 30 W</td>
                                                {/* 사진과 똑같은 Energy (FRX) 강조 디자인 - 프리미엄 블루 박스 */}
                                                <td className="border border-slate-200 p-0 bg-white">
                                                    <div className="flex h-16 w-full items-stretch">
                                                        <div className="flex-1 bg-primary text-white flex items-center justify-center font-black text-[12px] uppercase tracking-tighter px-2 shadow-sm">
                                                            Energy (FRX)
                                                        </div>
                                                        <div className="flex-1 flex items-center justify-center px-2 font-black text-slate-900">
                                                            2 ~ 300mJ
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="h-14 border-b border-slate-200">
                                                <td className="bg-slate-50 text-slate-900 border border-slate-200 font-black px-4 text-[11px] uppercase tracking-widest">Electrical</td>
                                                <td colSpan={2} className="border border-slate-200 bg-white">220~240 VAC, 50/60 Hz, 1,100VA</td>
                                            </tr>
                                            <tr className="h-14 border-b border-slate-200">
                                                <td className="bg-slate-50 text-slate-900 border border-slate-200 font-black px-4 text-[11px] uppercase tracking-widest leading-tight">User Interface</td>
                                                <td colSpan={2} className="border border-slate-200 bg-white">10.2 Inch</td>
                                            </tr>
                                            <tr className="h-14 border-b border-slate-200">
                                                <td className="bg-slate-50 text-slate-900 border border-slate-200 font-black px-4 text-[11px] uppercase tracking-widest">Dimension</td>
                                                <td colSpan={2} className="border border-slate-200 bg-white">340(W) X 350(D) X 1,100(H) mm</td>
                                            </tr>
                                            <tr className="h-14">
                                                <td className="bg-slate-50 text-slate-900 border border-slate-200 font-black px-4 text-[11px] uppercase tracking-widest">Weight</td>
                                                <td colSpan={2} className="border border-slate-200 bg-white">35 kg</td>
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
