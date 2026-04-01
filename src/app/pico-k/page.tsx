export default function PicoKPage() {
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
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="medical background"
          />
        </div>
        <div className="relative z-20 max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6 uppercase reveal-up uppercase">
            피코K (PICO-K)
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium max-w-3xl mx-auto reveal-up delay-100 italic">
            합리적인 피부미용 의료 장비,<br />그리고 최고의 선택
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <a
            href="#overview"
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

      {/* Product Overview Section */}
      <section
        id="overview"
        className="relative py-24 bg-[radial-gradient(circle_at_80%_50%,rgba(0,183,241,0.1)_0%,rgba(10,10,10,1)_70%)] text-white overflow-hidden"
      >
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[130px] pointer-events-none z-0"></div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up text-left">
              <span className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6">
                Complete Solution
              </span>
              <h2 className="text-5xl md:text-[72px] font-black tracking-tight leading-[0.95] mb-10">
                Revolutionary<br />
                <span className="text-primary">Pico</span> Technology
              </h2>
              <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-xl">
                최첨단 피코 레이저 기술을 통해 더욱 빠르고 정밀한 색소 치료와<br className="hidden md:block" />
                피부 재생의 새로운 기준을 제시합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-primary/50 transition duration-500 group flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase mb-1">
                      Product Identity
                    </span>
                    <h3 className="text-lg font-bold text-white whitespace-nowrap">로고</h3>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10"></div>
                  <img
                    src="images/machine/피코케이 로고.png"
                    className="h-6 w-auto brightness-0 invert opacity-70 group-hover:opacity-100 transition"
                    alt="PICO-K"
                  />
                </div>

                <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-primary/50 transition duration-500 group flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase mb-1">
                      Official Manufacturer
                    </span>
                    <h3 className="text-lg font-bold text-white whitespace-nowrap">제조사</h3>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10"></div>
                  <img
                    src="images/machine/피코케이 제조사 로고.png"
                    className="h-6 w-auto brightness-0 invert opacity-70 group-hover:opacity-100 transition"
                    alt="Speclipse"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end reveal-up delay-200 relative">
              <div className="relative group">
                <img
                  src="images/machine/피코케이 사진.png"
                  className="max-w-full h-auto relative z-10 drop-shadow-[0_45px_100px_rgba(0,0,0,0.6)] group-hover:scale-[1.02] transition duration-1000"
                  alt="PICO-K"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-primary/20 blur-[90px] rounded-full scale-150 transform translate-y-4 opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Technology Section */}
      <section id="patents" className="py-32 bg-white text-black">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
            <div className="lg:w-3/5 reveal-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primary font-bold tracking-widest text-lg lg:text-xl">
                  CHEONGAN MEDICAL
                </span>
                <div className="h-[2px] w-12 bg-primary"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight">
                특허기술
              </h2>
              <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                수년간의 연구와 개발을 통해 다양한 특허를 바탕으로<br />
                시장에서 월등하고 혁신적인 솔루션을 제공하는 피코초 레이저입니다.
              </p>
            </div>

            <div className="lg:w-2/5 flex justify-center lg:justify-end gap-4 reveal-up delay-100">
              <div className="w-48 h-64 bg-gray-100 border border-gray-200 rounded-sm shadow-xl transform rotate-[-3deg] flex items-center justify-center text-gray-300 text-xs text-center p-4">
                특허증 이미지<br />(메인 1)
              </div>
              <div className="w-48 h-64 bg-gray-100 border border-gray-200 rounded-sm shadow-xl transform rotate-[3deg] -ml-12 mt-8 flex items-center justify-center text-gray-300 text-xs text-center p-4">
                특허증 이미지<br />(메인 2)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 reveal-up delay-200">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-gray-50 border border-gray-100 rounded-sm flex items-center justify-center text-[10px] text-gray-300"
              >
                특허증 {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Detail 01: Thermal Lens Effect */}
      <section id="thermal-lens-tech" className="pt-16 pb-24 bg-white text-black">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10 reveal-up">
            <span className="text-4xl font-extrabold text-primary leading-none">01</span>
            <div className="h-[2px] flex-grow bg-primary/40"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            <div className="lg:w-[45%] reveal-up">
              <div className="mb-10">
                <h2 className="text-4xl md:text-[44px] font-extrabold text-gray-900 mb-8 tracking-tight">
                  써멀렌즈 이펙트 최소화
                </h2>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-primary/80 font-inter tracking-tight">
                    Thermal Lens Effect
                  </span>
                </div>
                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                  렌즈의 과열로 부풀어올라 초점의 깊이가 변하는 현상
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-8 bg-gray-50 rounded-2xl border-l-[6px] border-primary/30">
                  <h4 className="text-[20px] font-bold text-gray-900 mb-4">빔 품질 유지</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    높은 반복율에서도 안정적인 빔 프로파일을 유지하여 정밀한 시술이 가능합니다.
                  </p>
                </div>
                <div className="p-8 bg-gray-50 rounded-2xl border-l-[6px] border-primary/30">
                  <h4 className="text-[20px] font-bold text-gray-900 mb-4">냉각 기술 적용</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    핵심 부품의 열 관리를 통해 장시간 사용 시 발생할 수 있는 에너지 변화를 최소화했습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[55%] reveal-up delay-200">
              <div className="relative aspect-video bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                <div className="text-primary/40 font-inter font-black text-xl italic tracking-[0.2em] uppercase">
                  Technical Illustration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Detail 02: 800um Big Spot Size */}
      <section id="big-spot-tech" className="py-24 bg-gray-50 text-black">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10 reveal-up">
            <span className="text-4xl font-extrabold text-primary leading-none">02</span>
            <div className="h-[2px] flex-grow bg-primary/20"></div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2 reveal-up">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tighter leading-none">
                800um Big Spot <span className="text-primary">Flat-Top</span>
              </h2>
              <p className="text-xl text-gray-600 font-bold mb-10 leading-relaxed">
                가장 큰 스팟 사이즈와 균일한 빔 패턴으로<br />
                빠른 시술과 낮은 통증을 동시에 구현했습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-primary">
                  <span className="block text-primary font-black text-2xl mb-2">Fast</span>
                  <p className="text-sm font-bold text-gray-500">대면적 시술 가능</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-primary">
                  <span className="block text-primary font-black text-2xl mb-2">Uniform</span>
                  <p className="text-sm font-bold text-gray-500">균일한 에너지 전달</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 reveal-up delay-200">
              <div className="relative p-1 bg-white rounded-[40px] shadow-2xl overflow-hidden">
                <img
                  src="images/machine/피코케이 임시1.png"
                  alt="Flat top beam illustration"
                  className="w-full h-auto rounded-[40px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
