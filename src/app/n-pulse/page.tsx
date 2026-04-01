'use client';

import { useEffect, useRef } from 'react';

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
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="medical clinic background"
          />
        </div>
        <div className="relative z-20 max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6 uppercase reveal-up">
            N-PULSE, N-PULSE FX
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium max-w-3xl mx-auto reveal-up delay-100">
            합리적인 피부미용 의료 장비,<br />그리고 최고의 선택
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <a
            href="#content"
            className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white group-hover:text-black transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Machine Models Comparison Section */}
      <section id="content" className="pt-20 pb-0 md:pt-32 md:pb-10 bg-black text-white relative overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 relative z-20 min-h-[600px] md:min-h-[800px]">
            <div className="hidden md:block absolute left-1/2 top-4 bottom-10 w-[1px] bg-[#00C4B8]/40 -translate-x-1/2 z-10"></div>

            {/* Left Model: N-Pulse Pro */}
            <div className="relative w-full flex flex-col justify-start pt-10 md:pt-32 reveal-up h-full">
              <div className="relative z-30 pointer-events-none">
                <h3 className="text-[#00C4B8] font-bold text-[26px] md:text-[34px] tracking-tight mb-2 whitespace-nowrap">
                  Single Mode
                </h3>
                <h2 className="text-white font-extrabold text-[46px] md:text-[58px] tracking-tight leading-none mb-10 whitespace-nowrap">
                  N-Pulse Pro
                </h2>
                <p className="text-white/90 text-[18px] md:text-[24px] font-medium tracking-wide whitespace-nowrap">
                  CO2 (Surgical)
                </p>
              </div>
              <img
                src="images/machine/엔펄스pro 사진.png"
                alt="N-Pulse Pro"
                className="absolute right-[-140px] sm:right-[-180px] md:right-[-280px] lg:right-[-440px] bottom-6 md:bottom-20 h-[75%] md:h-[85%] lg:h-[90%] max-w-none object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20 pointer-events-auto hover:scale-105 transition-transform duration-700 ease-out origin-bottom"
              />
            </div>

            {/* Right Model: N-Pulse FX */}
            <div className="relative w-full flex flex-col justify-start pt-10 md:pt-32 md:pl-20 reveal-up h-full delay-150">
              <div className="relative z-30 pointer-events-none">
                <h3 className="text-[#00C4B8] font-bold text-[26px] md:text-[34px] tracking-tight mb-2 whitespace-nowrap">
                  Dual Mode
                </h3>
                <h2 className="text-white font-extrabold text-[46px] md:text-[58px] tracking-tight leading-none mb-10 whitespace-nowrap">
                  N-Pulse FX
                </h2>
                <p className="text-white/90 text-[18px] md:text-[24px] font-medium tracking-wide mb-1 whitespace-nowrap">
                  CO2 (Surgical)
                </p>
                <p className="text-white/90 text-[18px] md:text-[24px] font-medium tracking-wide whitespace-nowrap">
                  FRX (Fractional)
                </p>
              </div>
              <img
                src="images/machine/엔펄스fx 사진.png"
                alt="N-Pulse FX"
                className="absolute right-[-50px] lg:right-[-100px] bottom-6 md:bottom-20 h-[75%] md:h-[85%] lg:h-[90%] max-w-none object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20 pointer-events-auto hover:scale-105 transition-transform duration-700 ease-out origin-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section id="advanced-tech" className="py-24 md:py-32 bg-black text-white overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-6">
          <h2 className="text-[#00C4B8] text-[36px] md:text-[56px] font-black tracking-tighter mb-20 reveal-up">
            Advanced Technology
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            <div className="lg:col-span-6 space-y-16 py-4 flex flex-col justify-between">
              <div className="reveal-up">
                <h3 className="text-[#00C4B8] text-[28px] md:text-[38px] font-bold flex items-center mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00C4B8] mr-5"></span>
                  Technology
                </h3>
                <div className="pl-10 space-y-2 text-white/80 text-[18px] md:text-[22px] font-medium leading-snug">
                  <p>에스앤제이만의 기술력을 바탕으로</p>
                  <p>비교불가 하이 피크 파워 울트라 펄스 구현</p>
                </div>
              </div>

              <div className="reveal-up delay-100">
                <h3 className="text-[#00C4B8] text-[28px] md:text-[38px] font-bold flex items-center mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00C4B8] mr-5"></span>
                  Safe & Effective
                </h3>
                <div className="pl-10 space-y-2 text-white/80 text-[18px] md:text-[22px] font-medium leading-snug">
                  <p>열 손상 최소화</p>
                  <p>다양한 스팟 사이즈로 시술 효과 극대화</p>
                </div>
              </div>

              <div className="reveal-up delay-200">
                <h3 className="text-[#00C4B8] text-[28px] md:text-[38px] font-bold flex items-center mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00C4B8] mr-5"></span>
                  Convenient
                </h3>
                <div className="pl-10 space-y-2 text-white/80 text-[18px] md:text-[22px] font-medium leading-snug">
                  <p>3가지 핸드피스로 다양한 스팟사이즈 구현</p>
                  <p>사용자 중심의 인체공학적 디자인 & GUI</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 reveal-up lg:-mt-16 delay-300">
              <div className="bg-[#111] rounded-3xl p-8 md:p-14 border border-white/5 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C4B8]/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 space-y-16">
                  <div className="space-y-6">
                    <div className="flex justify-between items-end px-4">
                      <div className="text-white/40 font-bold text-sm md:text-[17px]">Other</div>
                      <div className="text-white font-black text-sm md:text-[17px] tracking-tight uppercase">
                        N-Pulse Pro
                      </div>
                    </div>
                    <div className="relative h-[220px] flex items-center justify-center">
                      <svg viewBox="0 0 500 220" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(100, 10)">
                          <path d="M0,0 L60,15 L70,120 L15,105 Z" fill="#D1D5DB" />
                          <path d="M45,115 L35,165 L43,165 L50,120 Z" fill="#D1D5DB" />
                          <path d="M68,123 L85,185" stroke="#D1D5DB" strokeWidth="2" />
                          <path
                            d="M75,185 Q85,175 100,185 Q110,195 95,205 Q80,200 75,185 Z"
                            fill="#D1D5DB"
                            opacity="0.6"
                          />
                        </g>
                        <g transform="translate(320, 10)">
                          <path d="M0,0 L60,15 L70,120 L15,105 Z" fill="#296576" />
                          <path d="M45,115 L35,165 L43,165 L50,120 Z" fill="#132F38" />
                          <path d="M68,123 L85,185" stroke="#132F38" strokeWidth="2" />
                          <circle cx="88" cy="195" r="10" fill="#00C4B8" opacity="0.9" />
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-white/10"></div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-end px-4">
                      <div className="text-white/40 font-bold text-sm md:text-[17px]">Other</div>
                      <div className="text-white font-black text-sm md:text-[17px] tracking-tight uppercase">
                        N-Pulse FX
                      </div>
                    </div>
                    <div className="relative h-[240px] flex items-center justify-center">
                      <svg viewBox="0 0 500 240" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                        <line x1="50" y1="20" x2="450" y2="20" stroke="white" strokeWidth="2" opacity="1" />
                        <g transform="translate(70, 20)">
                          <path d="M0,0 C0,220 180,220 180,0" fill="#D1D5DB" />
                          <path d="M40,0 C40,160 140,160 140,0" fill="#111" />
                        </g>
                        <g transform="translate(370, 20)">
                          <path d="M0,0 L50,0 L50,200 C50,225 0,225 0,200 Z" fill="#00C4B8" />
                          <path d="M15,0 L35,0 L35,190 C35,205 15,205 15,190 Z" fill="#ffffff" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results of Treatment Section */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="reveal-up mb-16">
              <h2 className="text-[#00C4B8] text-[32px] md:text-[42px] font-bold mb-8">The Results of Treatment</h2>
              <ul className="space-y-4 text-white text-[18px] md:text-[22px] font-medium list-none">
                <li className="flex items-start">
                  <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                  <div>피부 깊숙이 빠르고 강하게 열 에너지 전달</div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                  <div>피부 재생을 위한 콜라겐 형성을 유도</div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                  <div>콜라겐 재생을 통해 흉터, 주름 등을 개선</div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center reveal-up">
              <div className="lg:col-span-8 flex items-center bg-[#111] p-4 rounded-xl border border-white/5 space-x-2 md:space-x-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-1 items-center space-x-2 md:space-x-4">
                    <div className="relative w-full aspect-[4/3] bg-white/5 rounded-lg overflow-hidden border border-white/10">
                      <div className="absolute top-2 left-2 bg-white text-black font-bold px-2 py-0.5 text-xs z-10">
                        {step}
                      </div>
                      <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                    </div>
                    {step < 3 && (
                      <div className="flex flex-col space-y-1">
                        <svg className="w-4 h-6 text-[#00C4B8]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="hidden lg:flex flex-col space-y-1 items-center justify-center lg:col-span-1">
                <div className="flex space-x-[-10px]">
                  <svg className="w-6 h-10 text-[#00C4B8] opacity-30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <svg className="w-6 h-10 text-[#00C4B8] opacity-60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <svg className="w-6 h-10 text-[#00C4B8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="lg:col-span-3 relative aspect-[4/3] bg-white/5 rounded-xl overflow-hidden border-2 border-[#00C4B8]">
                <div className="absolute top-0 left-0 bg-[#00C4B8] text-white font-bold px-3 py-1 text-sm z-10">4</div>
                <div className="w-full h-full bg-gradient-to-br from-[#00C4B8]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smaller Beam Size Section */}
      <section className="py-24 bg-black overflow-hidden relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="reveal-up mb-20">
              <h2 className="text-[#00C4B8] text-[32px] md:text-[42px] font-bold mb-8">
                Smaller Beam Size Fractional Laser System
              </h2>
              <ul className="space-y-4 text-white text-[18px] md:text-[22px] font-medium list-none">
                <li className="flex items-start">
                  <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                  <div>정교하고 깊게 조사되어 회복과 재생을 빠르게</div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                  <div>시술 횟수와 통증은 줄이고 효과는 높게</div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal-up items-end">
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="text-center mb-10">
                  <p className="text-white text-[20px] md:text-[24px] font-bold mb-1">Min. Beam Size</p>
                  <p className="text-[#00C4B8] text-[20px] md:text-[24px] font-medium italic">80~100um</p>
                </div>
                <div className="relative w-full aspect-square bg-[#0f0f0f] rounded-[24px] border border-white/5 overflow-hidden flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-1.5 opacity-10">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    ))}
                  </div>
                  <div className="absolute top-[30%] right-[25%] w-10 h-10 border border-[#00C4B8] rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-[#00C4B8] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="w-full aspect-[16/9] bg-[#0f0f0f] rounded-[24px] border border-white/5 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center pl-10 space-x-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="w-[2px] h-[140px] bg-[#00C4B8]/40 blur-[1px]"></div>
                    ))}
                  </div>
                  {/* Skin simulation visual could go here */}
                </div>
              </div>
            </div>
          </div>
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
