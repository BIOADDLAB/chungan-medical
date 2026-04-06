'use client';

import { useEffect, useRef } from 'react';
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
                        <span className="hero-title-main block md:inline text-white">N - PULSE,</span>
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
                        <p className="text-slate-300 text-lg md:text-xl font-medium tracking-[0.2em] uppercase max-w-2xl">
                            합리적인 피부미용 의료 장비, <span className="text-primary font-bold">그리고 최고의 선택</span>
                        </p>
                    </motion.div>
                </div>

                {/* 스크롤 유도 버튼 */}
                <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
                    <Link
                        href="#content"
                        aria-label="Scroll down"
                        className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* ② Machine Models Comparison Section (Standardized Tech Style) */}
            <section id="content" className="relative pt-20 pb-0 md:pt-32 md:pb-20 bg-[#020408] overflow-hidden">
                {/* 테크 배경 장식 */}
                <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-[1350px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 relative min-h-[600px] md:min-h-[850px]">
                        {/* 중앙 테크 수직 구분선 */}
                        <div className="hidden md:block absolute left-1/2 top-10 bottom-32 w-[1px] bg-gradient-to-b from-transparent via-primary/40 to-transparent -translate-x-1/2 z-10">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(0,183,241,1)]" />
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
                                    <p className="text-slate-200 text-lg md:text-xl font-bold tracking-tight flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                        CO2 (Surgical)
                                    </p>
                                </div>
                            </div>
                            <img
                                src="images/machine/엔펄스pro 사진.png"
                                alt="N-Pulse Pro"
                                className="absolute right-[-140px] sm:right-[-180px] md:right-[-280px] lg:right-[-440px] bottom-6 md:bottom-20 h-[75%] md:h-[85%] lg:h-[90%] max-w-none object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-20 pointer-events-auto hover:scale-105 transition-transform duration-1000 ease-out origin-bottom brightness-[1.1] contrast-[1.05]"
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
                                    <p className="text-slate-200 text-lg md:text-xl font-bold tracking-tight flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                        CO2 (Surgical)
                                    </p>
                                    <p className="text-slate-200 text-lg md:text-xl font-bold tracking-tight flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                        FRX (Fractional)
                                    </p>
                                </div>
                            </div>
                            <img
                                src="images/machine/엔펄스fx 사진.png"
                                alt="N-Pulse FX"
                                className="absolute right-[-50px] lg:right-[-100px] bottom-6 md:bottom-20 h-[75%] md:h-[85%] lg:h-[90%] max-w-none object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-20 pointer-events-auto hover:scale-105 transition-transform duration-1000 ease-out origin-bottom brightness-[1.1] contrast-[1.05]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ③ Advanced Technology Section (Standardized Tech Style) */}
            <section id="advanced-tech" className="relative py-28 bg-[#020408] overflow-hidden">
                {/* 테크 배경 장식 */}
                <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none" />
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

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* 좌측: 기술 리스트 */}
                        <div className="lg:col-span-6 space-y-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-black tracking-tight mb-16"
                            >
                                <span className="hero-title-main">ADVANCED</span><br />
                                <span className="hero-title-highlight uppercase">Technology</span>
                            </motion.h2>

                            <div className="space-y-10">
                                {[
                                    {
                                        title: 'Technology',
                                        desc: '에스앤제이만의 기술력을 바탕으로 비교불가\n하이 피크 파워 울트라 펄스 구현'
                                    },
                                    {
                                        title: 'Safe & Effective',
                                        desc: '열 손상 최소화 및 다양한 스팟 사이즈로\n시술 효과 극대화'
                                    },
                                    {
                                        title: 'Convenient',
                                        desc: '3가지 핸드피스로 다양한 스팟사이즈 구현\n사용자 중심의 인체공학적 디자인 & GUI'
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
                                            <h3 className="text-white font-black text-2xl tracking-tight group-hover:text-primary transition-colors duration-500">{item.title}</h3>
                                        </div>
                                        <p className="text-slate-400 text-lg font-medium leading-relaxed pl-6.5 whitespace-pre-line border-l border-white/5 group-hover:border-primary/20 transition-colors duration-500">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 우측: 비교 일러스트 패널 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="lg:col-span-6 relative self-start"
                        >
                            <div className="glass-panel p-5 md:p-7 relative overflow-hidden bg-tech-grid/30">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

                                <div className="relative z-10 space-y-4">
                                    {/* Item 01: N-Pulse Pro */}
                                    <div className="space-y-2 group">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-slate-500 font-bold text-[9px] tracking-[0.4em] uppercase group-hover:text-primary/50 transition-colors">Pulse Analysis</span>
                                            <span className="text-white font-black text-[10px] tracking-widest uppercase">N-PULSE PRO</span>
                                        </div>
                                        <div className="relative aspect-[21/8] glass-panel-dark bg-black/40 flex items-center justify-center p-2 border-white/5 group-hover:border-primary/20 transition-all duration-700 overflow-hidden">
                                            <svg viewBox="0 0 500 120" className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700">
                                                {/* Comparison Label */}
                                                <text x="135" y="15" textAnchor="middle" className="fill-slate-500 text-[10px] font-bold uppercase tracking-widest">Other</text>
                                                <text x="365" y="15" textAnchor="middle" className="fill-primary text-[10px] font-black uppercase tracking-widest">N-Pulse PRO</text>

                                                {/* Left Side: Standard Tip */}
                                                <g transform="translate(100, 20) scale(0.55)">
                                                    <path d="M0,0 L60,15 L70,120 L15,105 Z" fill="#D1D5DB" opacity="0.4" />
                                                    <path d="M45,115 L35,165 L43,165 L50,120 Z" fill="#D1D5DB" opacity="0.6" />
                                                    <circle cx="43" cy="175" r="8" fill="#D1D5DB" opacity="0.3" className="blur-[2px]" />
                                                </g>

                                                {/* Right Side: Pro Tip (Sharp & Focused) */}
                                                <g transform="translate(330, 20) scale(0.55)">
                                                    <path d="M0,0 L60,15 L70,120 L15,105 Z" fill="#00B7F1" opacity="0.6" />
                                                    <path d="M45,115 L35,165 L43,165 L50,120 Z" fill="#00B7F1" />
                                                    <circle cx="43" cy="175" r="5" fill="#00B7F1" className="animate-pulse shadow-[0_0_15px_rgba(0,183,241,1)]" />
                                                </g>
                                                <line x1="220" y1="65" x2="280" y2="65" stroke="#00B7F1" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                    {/* Item 02: N-Pulse FX */}
                                    <div className="space-y-2 group">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-slate-500 font-bold text-[9px] tracking-[0.4em] uppercase group-hover:text-primary/50 transition-colors">Depth Control</span>
                                            <span className="text-white font-black text-[10px] tracking-widest uppercase">N-PULSE FX</span>
                                        </div>
                                        <div className="relative aspect-[21/9] glass-panel-dark bg-black/40 flex items-center justify-center p-2 border-white/5 group-hover:border-primary/20 transition-all duration-700">
                                            <svg viewBox="0 0 500 120" className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-700">
                                                <text x="135" y="15" textAnchor="middle" className="fill-slate-500 text-[10px] font-bold uppercase tracking-widest">Other</text>
                                                <text x="365" y="15" textAnchor="middle" className="fill-primary text-[10px] font-black uppercase tracking-widest">N-Pulse FX</text>
                                                <g transform="translate(70, 30)">
                                                    <path d="M0,0 C0,80 130,80 130,0" fill="none" stroke="#D1D5DB" strokeWidth="12" opacity="0.3" />
                                                </g>
                                                <g transform="translate(345, 30)">
                                                    <path d="M0,0 L40,0 L40,65 C40,75 0,75 0,65 Z" fill="#00B7F1" opacity="0.8" />
                                                    <path d="M12,0 L28,0 L28,60 C28,70 12,70 12,60 Z" fill="white" className="animate-pulse" />
                                                </g>
                                                <line x1="50" y1="30" x2="450" y2="30" stroke="white" strokeWidth="0.5" opacity="0.3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ④ Treatment Results Section */}
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
                        <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                            Clinical Performance
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                            <span className="hero-title-main">THE RESULTS OF</span><br />
                            <span className="hero-title-highlight">TREATMENT</span>
                        </h2>
                        <div className="w-20 h-[2px] bg-primary mb-12" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                '피부 깊숙이 빠르고 강하게\n열 에너지 전달',
                                '피부 재생을 위한\n콜라겐 형성을 유도',
                                '콜라겐 재생을 통해\n흉터, 주름 등을 개선'
                            ].map((text, idx) => (
                                <div key={idx} className="glass-panel p-8 group hover:border-primary/40 transition-all duration-500">
                                    <div className="text-primary font-black text-4xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                                    <p className="text-white text-lg md:text-xl font-bold leading-relaxed whitespace-pre-line">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Step Visualizer */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel-dark p-6 md:p-10 border-white/5"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-9 grid grid-cols-3 gap-4">
                                {[1, 2, 3].map((step) => (
                                    <div key={step} className="relative group">
                                        <div className="aspect-[4/3] rounded-xl bg-black/60 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-primary/30 transition-all duration-500">
                                            <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-black text-white group-hover:bg-primary group-hover:border-primary transition-colors">
                                                {step}
                                            </div>
                                            <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="lg:col-span-1 flex justify-center py-4 lg:py-0">
                                <div className="flex lg:flex-col items-center gap-1">
                                    {[0.3, 0.6, 1].map((op, i) => (
                                        <svg key={i} className="w-6 h-6 text-primary rotate-0 lg:rotate-90" style={{ opacity: op }} fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="aspect-square rounded-2xl bg-primary/10 border-2 border-primary flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                                    <span className="text-primary font-black text-4xl group-hover:scale-110 transition-transform duration-500">RE</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ⑤ Beam Size Section (Standardized Tech Style) */}
            <section className="relative py-28 bg-[#020408] overflow-hidden">
                <div className="absolute inset-0 bg-tech-dots opacity-10 pointer-events-none" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

                <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
                            Precision Engineering
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                            <span className="hero-title-main">SMALLER BEAM</span><br />
                            <span className="hero-title-highlight uppercase">SIZE</span>
                            <span className="hero-title-main ml-3">FRACTIONAL</span>
                        </h2>
                        <div className="w-20 h-[2px] bg-primary mb-12" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6">
                                {[
                                    '정교하고 깊게 조사되어 회복과 재생을 빠르게',
                                    '시술 횟수와 통증은 줄이고 효과는 높게',
                                    '미세 빔으로 손상을 줄이고 정교한 시술 가능'
                                ].map((text, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-5 p-6 glass-panel-dark hover:bg-white/5 transition-colors group"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shadow-[0_0_10px_rgba(0,183,241,1)]" />
                                        <p className="text-slate-200 text-lg md:text-xl font-bold leading-relaxed whitespace-pre-line group-hover:text-white transition-colors">
                                            {text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] glass-panel bg-tech-grid/20 flex flex-col items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-30" />
                                <svg viewBox="0 0 400 400" className="w-64 h-64 relative z-10">
                                    <circle cx="200" cy="200" r="180" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />
                                    <circle cx="200" cy="200" r="120" fill="none" stroke="#00B7F1" strokeWidth="1" opacity="0.3" />
                                    <circle cx="200" cy="200" r="5" fill="#00B7F1" className="shadow-[0_0_20px_rgba(0,183,241,1)]" />
                                    <line x1="200" y1="200" x2="350" y2="200" stroke="#00B7F1" strokeWidth="2" opacity="0.6">
                                        <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="5s" repeatCount="indefinite" />
                                    </line>
                                    <text x="200" y="360" textAnchor="middle" className="fill-slate-500 text-[12px] font-black tracking-[0.8em] uppercase">Scanning Precision</text>
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* High Peak Power Ultra Pulse Section */}
            <section className="py-24 bg-black overflow-hidden relative border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="reveal-up mb-6">
                            <h2 className="text-[#00C4B8] text-[32px] md:text-[42px] font-bold mb-10">High Peak Power Ultra Pulse</h2>
                            <ul className="space-y-4 text-white text-[18px] md:text-[22px] font-medium list-none">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                                    <div>울트라 펄스를 통한 열손상 최소화</div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                                    <div>
                                        시술 횟수와 통증은 <span className="font-bold underline underline-offset-4 decoration-[#00C4B8]/30">Down</span> 효과는{' '}
                                        <span className="font-bold underline underline-offset-4 decoration-[#00C4B8]/30">Up</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                                    <div>샤프하게 조사되는 고퀄리티 레이저 빔</div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                                    <div>
                                        <span className="font-bold">Frequency</span>와 <span className="font-bold">Duration</span>을 통해 섬세한 레이저 빔 조사
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center reveal-up pt-10">
                            <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="absolute top-[60px] w-[160px] h-[160px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-extrabold text-[16px] md:text-[18px] z-10">
                                        <span className="mb-4">파워보드</span>
                                    </div>
                                    <div className="absolute bottom-[80px] left-[60px] w-[160px] h-[160px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white font-extrabold text-[16px] md:text-[18px] text-center px-4 z-10">
                                        <span className="mb-2">높은 파워의<br />글래스튜브</span>
                                    </div>
                                    <div className="absolute bottom-[80px] right-[60px] w-[160px] h-[160px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white font-extrabold text-[16px] md:text-[18px] text-center px-4 z-10">
                                        <span className="mb-2">고성능의<br />레귤레이터</span>
                                    </div>
                                </div>
                                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 w-3 h-3 bg-[#00C4B8] rounded-full shadow-[0_0_15px_rgba(0,196,184,0.8)]"></div>
                            </div>

                            <div className="w-full aspect-square max-w-[480px] mx-auto bg-black rounded-[24px] overflow-hidden flex items-center justify-center relative border border-white/5">
                                <canvas ref={canvasRef} className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specification Section */}
            <section className="py-24 bg-black overflow-hidden relative border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-[#00C4B8] text-[42px] md:text-[56px] font-bold mb-20 reveal-up">Specification</h2>
                        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 reveal-up">
                            <div className="hidden lg:block w-1/4 relative order-1 self-stretch min-h-[600px]">
                                <img
                                    src="images/machine/엔펄스pro 사진.png"
                                    alt="N-Pulse Pro"
                                    className="absolute bottom-0 -right-[390px] w-[1100px] max-w-none object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] z-20 hover:scale-105 transition-transform duration-700 ease-out origin-bottom"
                                />
                            </div>

                            <div className="w-full lg:w-1/2 order-2 overflow-x-auto self-center">
                                <table className="w-full border-collapse text-[14px] md:text-[16px] text-center min-w-[500px] shadow-2xl border border-black">
                                    <thead>
                                        <tr className="h-16">
                                            <th className="w-[28%] bg-[#222] text-white border border-black font-bold">Product Name</th>
                                            <th className="w-[36%] bg-[#e0e0e0] text-black border border-black font-bold">N-Pulse Pro</th>
                                            <th colSpan={2} className="w-[36%] bg-[#e0e0e0] text-black border border-black font-bold">
                                                N-Pulse FX
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white text-black font-medium">
                                        <tr className="h-14">
                                            <td className="bg-[#444] text-white font-bold border border-black px-4">Mode</td>
                                            <td className="border border-black">CO2 (Surgical)</td>
                                            <td colSpan={2} className="border border-black py-2">
                                                CO2 (Surgical), <br />
                                                FR7 (Fractional)
                                            </td>
                                        </tr>
                                        <tr className="h-14">
                                            <td className="bg-[#444] text-white font-bold border border-black px-4">Laser System</td>
                                            <td colSpan={3} className="border border-black">
                                                Fractional CO2 Laser
                                            </td>
                                        </tr>
                                        <tr className="h-14">
                                            <td className="bg-[#444] text-white font-bold border border-black px-4">Wavelength</td>
                                            <td colSpan={3} className="border border-black">
                                                10,600 nm
                                            </td>
                                        </tr>
                                        <tr className="h-16">
                                            <td className="bg-[#444] text-white font-bold border border-black px-4">Power (COS)</td>
                                            <td className="border border-black">0.5 ~ 30 W</td>
                                            <td className="bg-black text-white border border-black font-bold text-[14px]">Energy (FRX)</td>
                                            <td className="border border-black">2 ~ 300mJ</td>
                                        </tr>
                                        <tr className="h-14">
                                            <td className="bg-[#444] text-white font-bold border border-black px-4">Electrical</td>
                                            <td colSpan={3} className="border border-black">
                                                220~240 VAC, 50/60 Hz, 1,100VA
                                            </td>
                                        </tr>
                                        <tr className="h-14">
                                            <td className="bg-[#444] text-white font-bold border border-black px-4">User Interface</td>
                                            <td colSpan={3} className="border border-black">
                                                10.2 Inch
                                            </td>
                                        </tr>
                                        <tr className="h-14">
                                            <td className="bg-[#444] text-white font-bold border border-black px-4">Dimension</td>
                                            <td colSpan={3} className="border border-black">
                                                340(W) X 350(D) X 1,100(H) mm
                                            </td>
                                        </tr>
                                        <tr className="h-14">
                                            <td className="bg-[#444] text-white font-bold border border-black px-4">Weight</td>
                                            <td colSpan={3} className="border border-black">
                                                35 kg
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="hidden lg:block w-1/4 relative order-3 self-stretch min-h-[600px]">
                                <img
                                    src="images/machine/엔펄스fx 사진.png"
                                    alt="N-Pulse FX"
                                    className="absolute bottom-0 -left-12 h-[102%] max-w-none object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] z-20 hover:scale-105 transition-transform duration-700 ease-out origin-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
