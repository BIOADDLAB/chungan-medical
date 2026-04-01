export default function CellinewPage() {
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
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="medical background"
          />
        </div>
        <div className="relative z-20 max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6 uppercase reveal-up uppercase">
            셀리뉴 (CELLINEW)
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium max-w-3xl mx-auto reveal-up delay-100">
            합리적인 피부미용 의료 장비,<br />그리고 최고의 선택
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <a
            href="#content"
            className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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

      {/* CELLINEW Introduction Section */}
      <section
        id="content"
        className="py-24 bg-white text-black overflow-hidden section-reveal"
      >
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="flex flex-col items-center mb-16">
            <img
              src="images/machine/셀리뉴 로고.png"
              alt="CELLINEW Logo"
              className="h-8 md:h-12 object-contain mb-6"
            />
            <p className="text-[#888] text-[20px] md:text-[28px] font-medium tracking-tight mb-20 whitespace-nowrap">
              Renew Your skin : 피부를 리뉴얼하다
            </p>

            <div className="flex flex-col lg:flex-row items-center w-full">
              <div className="w-full lg:w-[60%] z-10 text-center space-y-12 lg:pr-10">
                <h2 className="text-[#000] text-[22px] md:text-[30px] font-extrabold leading-snug tracking-tight">
                  매순간 변화하는 당신의 피부를 위한 프리미엄 고주파 에너지, 셀리뉴
                </h2>

                <div className="space-y-4 text-[#333] text-[18px] md:text-[24px] font-semibold tracking-tight leading-[1.6]">
                  <p>셀리뉴만의 Auto Fit은</p>
                  <p>피부 부위별 특성에 맞춰 자동으로 에너지를 전달하는 시스템으로</p>
                  <p>매순간 변화하는 피부에</p>
                  <p>실시간으로 최적화된 에너지를 전달시켜줍니다.</p>
                </div>

                <div className="pt-8">
                  <p className="text-[#B5916A] text-[18px] md:text-[24px] font-extrabold tracking-tight">
                    딱 맞는 에너지로 오랜 기간동안 유지되는 효과를 경험해보세요.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[40%] mt-12 lg:mt-0 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[450px] lg:max-w-[1000px] transform lg:translate-x-24">
                  <img
                    src="images/machine/셀리뉴 임시.png"
                    alt="CELLINEW Machine"
                    className="w-full h-auto object-contain drop-shadow-[-30px_40px_60px_rgba(0,0,0,0.18)] grayscale-[0.1]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CELLINEW Monopolar RF & Mechanism Section */}
      <section id="mechanism" className="relative bg-white text-black py-24">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-5 mb-16">
              <div className="w-[8px] h-12 bg-[#B5916A] shrink-0"></div>
              <h2 className="text-[#000] text-[28px] md:text-[42px] font-black tracking-tight leading-tight">
                6.78MHz Monopolar RF
              </h2>
            </div>

            <div className="text-center w-full">
              <h3 className="text-[#B5916A] text-[22px] md:text-[30px] font-black mb-10">
                6.78MHz Monopolar RF, 셀리뉴
              </h3>

              <div className="space-y-6 text-[#000] text-[18px] md:text-[24px] font-bold leading-[1.6] tracking-tighter">
                <p>셀리뉴는 6.78MHz Monopolar RF로</p>
                <p>진피층에 열을 발생시켜</p>
                <p>노화의 근본적인 원인이 되는 콜라겐 셀을 리뉴얼 시켜줍니다.</p>
              </div>

              <div className="mt-16 space-y-4 text-[#333] text-[18px] md:text-[24px] font-bold leading-[1.6] tracking-tighter">
                <p>피부 속부터 탄력있고 건강하게 가꾸어</p>
                <p>주름, 피부결 뿐 아니라 종합적인 피부 개선 효과를 기대할 수 있습니다.</p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-24">
            <div className="inline-block bg-white border border-black rounded-t-2xl px-14 py-5 translate-y-[1px] relative z-20">
              <h4 className="text-[20px] md:text-[26px] font-black">Mechanism</h4>
            </div>

            <div className="bg-white border border-black rounded-b-3xl rounded-tr-3xl p-10 md:p-14 relative z-10">
              <div className="flex flex-col lg:flex-row gap-0">
                {/* Step 1 */}
                <div className="flex-1 lg:pr-14 flex flex-col">
                  <div className="flex items-center gap-5 mb-12">
                    <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center shrink-0">
                      <span className="text-[20px] font-black">1차</span>
                    </div>
                    <h5 className="text-[20px] md:text-[24px] font-black tracking-tight">
                      열로 인한 콜라겐 수축 → 즉각 타이트닝
                    </h5>
                  </div>

                  <div className="flex items-start gap-4">
                    <ul className="flex-1 space-y-5 text-[#555] text-[16px] md:text-[19px] font-semibold tracking-tight">
                      <li className="flex items-start gap-2 leading-snug">
                        <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full shrink-0"></span>
                        열이 가해지면 콜라겐의 실타래모양을 유지하게 하는 연결고리가 끊어지며 리모델링이 시작됨
                      </li>
                      <li className="flex items-start gap-2 leading-snug">
                        <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full shrink-0"></span>
                        콜라겐 번들은 짧아지고 두께가 두톰해짐 (약35% 길이 수축)
                      </li>
                    </ul>
                    <div className="w-[140px] md:w-[180px] shrink-0 transform translate-y-6">
                      <div className="relative w-full h-[120px] flex items-center justify-center">
                        <svg viewBox="0 0 120 70" className="w-full h-full opacity-80">
                          <g stroke="#B5916A" strokeWidth="2.5" fill="none">
                            <path d="M5 25 C 15 15, 25 15, 35 25 S 55 35, 75 25 S 95 15, 115 25" />
                            <path d="M5 35 C 15 25, 25 25, 35 35 S 55 45, 75 35 S 95 25, 115 35" />
                            <path d="M5 45 C 15 35, 25 35, 35 45 S 55 55, 75 45 S 95 35, 115 45" />
                          </g>
                          <circle cx="55" cy="40" r="6" fill="#FF4D4D" opacity="0.4" />
                          <line x1="55" y1="40" x2="55" y2="60" stroke="#000" strokeWidth="1.5" />
                          <path
                            d="M50 55 L 55 60 L 60 55"
                            stroke="#000"
                            strokeWidth="1.5"
                            fill="none"
                          />
                          <text x="45" y="68" fontSize="7" fontWeight="black">
                            HEAT
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block w-[1px] border-l-2 border-dotted border-gray-300 self-stretch my-4"></div>

                {/* Step 2 */}
                <div className="flex-1 lg:pl-14 pt-12 lg:pt-0">
                  <div className="flex items-center gap-5 mb-12">
                    <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center shrink-0">
                      <span className="text-[20px] font-black">2차</span>
                    </div>
                    <h5 className="text-[20px] md:text-[24px] font-black tracking-tight">
                      운드힐링을 통한 콜라겐 생성 → 진피 리모델링
                    </h5>
                  </div>
                  <ul className="space-y-6 text-[#555] text-[16px] md:text-[19px] font-semibold tracking-tight">
                    <li className="flex items-start gap-2 leading-snug">
                      <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full shrink-0"></span>
                      진피와 섬유격막에 변성이 일어나 섬유아세포 활동증가로 신생 콜라겐 생성
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full shrink-0"></span>
                      자가상처 치유 과정을 통해 기존 콜라겐의 리모델링
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <span className="mt-2.5 w-1 h-1 bg-gray-400 rounded-full shrink-0"></span>
                      2~6개월의 기간에 걸쳐 새로운 콜라겐 생성 및 리모델링
                    </li>
                    <li className="flex items-start gap-2 leading-snug pt-6">
                      <span className="mt-2.5 w-1 h-1 bg-black rounded-full shrink-0"></span>
                      <span className="text-black font-black">
                        결과적으로, ① 콜라겐 밀도 증가 ② 진피층 두께 증가
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CELLINEW Main Features Section */}
      <section id="features" className="relative py-24 bg-[#111] overflow-hidden text-center">
        <div className="absolute inset-0 z-0 scale-110">
          <img
            src="images/machine/셀리뉴 임시.png"
            alt="Background"
            className="w-full h-full object-cover opacity-10 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-transparent to-[#111]"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h4 className="text-[#B5916A] text-[18px] md:text-[22px] font-bold mb-4 tracking-wider uppercase">
              CELLINEW's Main Features
            </h4>
            <h2 className="text-white text-[32px] md:text-[48px] font-black mb-10 leading-tight">
              오랜기간 지속되는 탄력
            </h2>
            <div className="text-gray-300 text-[16px] md:text-[20px] font-semibold leading-relaxed space-y-2">
              <p>셀리뉴는 개인 피부특성에 최적화된 에너지를 더욱 효과적으로 전달하여</p>
              <p>탄력 효과를 최대한 오랜기간 유지시켜 줍니다.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#B5916A] rounded-[50px] p-12 flex flex-col items-center text-white min-h-[500px] shadow-2xl transition-transform hover:-translate-y-3 duration-500">
              <span className="text-[20px] font-black opacity-100 mb-2">01</span>
              <h5 className="text-[28px] md:text-[34px] font-black mb-2">Customized</h5>
              <p className="text-[15px] md:text-[17px] font-bold opacity-100 mb-10">개인 피부 특성에 맞춘 에너지</p>
              <div className="w-full h-[1px] bg-white opacity-30 mb-10"></div>
              <div className="space-y-6">
                <h6 className="text-[22px] md:text-[26px] font-black">Auto Fit : Energy Match</h6>
                <div className="text-[15px] md:text-[17px] font-bold leading-relaxed space-y-1">
                  <p>피부 부위별 특성에 맞춰</p>
                  <p>자동으로 출력 조절</p>
                </div>
              </div>
            </div>

            <div className="bg-[#B5916A] rounded-[50px] p-12 flex flex-col items-center text-white min-h-[500px] shadow-2xl transition-transform hover:-translate-y-3 duration-500 mt-0 md:mt-0">
              <span className="text-[20px] font-black opacity-100 mb-2">02</span>
              <h5 className="text-[28px] md:text-[34px] font-black mb-2">Efficiency</h5>
              <p className="text-[15px] md:text-[17px] font-bold opacity-100 mb-10">동일 샷 대비 최대 효과</p>
              <div className="w-full h-[1px] bg-white opacity-30 mb-10"></div>
              <div className="space-y-6">
                <h6 className="text-[22px] md:text-[26px] font-black">Repetition Mode</h6>
                <div className="text-[15px] md:text-[17px] font-bold leading-relaxed space-y-1">
                  <p>최단시간 Interval로</p>
                  <p>열 누적 효율 향상</p>
                </div>
              </div>
            </div>

            <div className="bg-[#B5916A] rounded-[50px] p-12 flex flex-col items-center text-white min-h-[500px] shadow-2xl transition-transform hover:-translate-y-3 duration-500">
              <span className="text-[20px] font-black opacity-100 mb-2">03</span>
              <h5 className="text-[28px] md:text-[34px] font-black mb-2">Safety</h5>
              <p className="text-[15px] md:text-[17px] font-bold opacity-100 mb-10">안전한 시술환경</p>
              <div className="w-full h-[1px] bg-white opacity-30 mb-10"></div>
              <div className="space-y-6">
                <h6 className="text-[22px] md:text-[26px] font-black leading-tight">Monitoring & Control</h6>
                <div className="text-[15px] md:text-[17px] font-bold leading-relaxed space-y-1">
                  <p>냉각 시스템, 피부 온도,</p>
                  <p>시술자의 압력 등을</p>
                  <p>실시간 모니터링 & 제어</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CELLINEW Safe Monitoring & Control Section */}
      <section id="safety-detail" className="py-24 bg-white text-black text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-14">
            <h4 className="text-[32px] md:text-[40px] font-black leading-none mb-3">CELLINEW's</h4>
            <h2 className="text-[#B5916A] text-[32px] md:text-[40px] font-black italic">
              Safe Monitoring & Control
            </h2>
          </div>

          <div className="bg-[#B5916A] py-8 px-10 rounded-sm mb-28 max-w-5xl mx-auto shadow-lg">
            <p className="text-white text-[17px] md:text-[22px] font-medium tracking-tight">
              안전한 시술환경을 제공하기 위해 <span className="font-black">피부 온도, 시술자의 압력, 냉각시스템을</span>{' '}
              <span className="font-black underline underline-offset-4 decoration-white/40">
                실시간으로 모니터링하고 제어
              </span>합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 mb-12 text-[#B5916A]">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M32 10a8 8 0 0 0-8 8v20a12 12 0 1 0 16 0V18a8 8 0 0 0-8-8z" />
                  <circle cx="32" cy="46" r="4" fill="currentColor" />
                  <path
                    d="M44 20c4 0 6 2 6 6s-2 6-6 6M20 20c-4 0-6 2-6 6s2 6 6 6"
                    opacity="0.3"
                    strokeDasharray="2 4"
                  />
                  <circle cx="50" cy="20" r="2" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
              <h5 className="text-[#B5916A] text-[24px] font-black mb-2 tracking-tight">Skin Temperature</h5>
              <p className="text-[#B5916A]/70 text-[18px] font-bold mb-8 italic">Skin Surface Protection</p>
              <div className="text-[#333] text-[17px] font-bold leading-relaxed space-y-1">
                <p>시술 부위의 온도를 확인하여</p>
                <p>일정온도 이내에서만</p>
                <p>고주파 에너지 전달</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-28 h-28 mb-12 text-[#B5916A]">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 10l10 10 10-10M32 20v24" />
                  <path d="M14 44h36M14 50h36M14 56h36" opacity="0.5" />
                  <circle cx="38" cy="14" r="4" fill="none" opacity="0.4" />
                  <path d="M38 11l2 3-2 3" opacity="0.4" />
                </svg>
              </div>
              <h5 className="text-[#B5916A] text-[24px] font-black mb-2 tracking-tight">Operator Pressure</h5>
              <p className="text-[#B5916A]/70 text-[18px] font-bold mb-8 italic">Procedure with Complete Contact Surface</p>
              <div className="text-[#333] text-[17px] font-bold leading-relaxed space-y-1">
                <p>피부와 Tip이 완전하게 밀착되고</p>
                <p>균일하게 압력이 가해질 경우에만</p>
                <p>안전하게 고주파 에너지 전달</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-28 h-28 mb-12 text-[#B5916A]">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M10 32h44M20 32a12 12 0 1 1 24 0H20z" />
                  <path d="M32 10v10M32 44v10M10 22l6 4M48 22l6-4" opacity="0.5" />
                  <path d="M54 28l-4 4 4 4M10 28l4 4-4 4" strokeLinecap="round" />
                  <circle cx="32" cy="32" r="3" fill="currentColor" />
                </svg>
              </div>
              <h5 className="text-[#B5916A] text-[24px] font-black mb-2 tracking-tight">Internal Cooling System</h5>
              <p className="text-[#B5916A]/70 text-[18px] font-bold mb-8 italic">Monitoring & Control</p>
              <div className="text-[#333] text-[17px] font-bold leading-relaxed space-y-1">
                <p>온도의 변화에 민감한 가스를</p>
                <p>섬세하게 컨트롤하여 균일한 양의 가스 전달</p>
                <p>안전한 시술환경 제공</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
