export default function VRoAdvancePage() {
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
            src="https://images.unsplash.com/photo-1512677859289-868722942457?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="medical background"
          />
        </div>
        <div className="relative z-20 max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6 uppercase reveal-up uppercase">
            브이로어드밴스 (V-RO Advance)
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

      {/* High-end Banner Section */}
      <section id="content" className="pt-32 pb-16 bg-white text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-block bg-[#B5916A] p-12 md:p-20 text-left rounded-sm shadow-2xl relative overflow-hidden group reveal-up">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <h4 className="text-white text-[24px] md:text-[32px] font-medium mb-4 tracking-tight">고주파 + 하이푸</h4>
            <h2 className="text-white text-[56px] md:text-[86px] font-black leading-none mb-8 tracking-tighter">
              브이로 리프팅
            </h2>
            <h3 className="text-white text-[38px] md:text-[54px] font-bold italic tracking-tighter opacity-95">
              V-RO <span className="text-[24px] md:text-[32px] not-italic font-medium ml-1">LIFTING</span>
            </h3>
          </div>
        </div>
      </section>

      {/* Handpiece Features Section */}
      <section id="handpiece-features" className="pb-24 bg-white text-black text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center reveal-up">
              <div className="w-64 h-64 rounded-full bg-[#F3F0EC] flex items-center justify-center mb-8 overflow-hidden shadow-inner border border-[#E5DACE] relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                <span className="text-[#B5916A]/20 text-[120px] font-black select-none">H</span>
              </div>
              <h4 className="text-[28px] font-black mb-4">총 5개의 핸드피스</h4>
              <div className="text-[#333] text-[18px] font-medium leading-relaxed">
                <p>하나의 장비로 총 5개의</p>
                <p>핸드피스 사용 가능</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center reveal-up delay-100">
              <div className="w-64 h-64 rounded-full bg-[#F3F0EC] flex items-center justify-center mb-8 overflow-hidden shadow-inner border border-[#E5DACE] relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                <span className="text-[#B5916A]/20 text-[120px] font-black select-none">L</span>
              </div>
              <h4 className="text-[28px] font-black mb-4">핸드피스 서브 LCD</h4>
              <div className="text-[#333] text-[18px] font-medium leading-relaxed">
                <p>본체 조작 없이 시술 가능</p>
                <p>서브 LCD 스위치 or 풋 스위치</p>
                <p>선택 사용 가능</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center reveal-up delay-200">
              <div className="w-64 h-64 rounded-full bg-[#F3F0EC] flex items-center justify-center mb-8 overflow-hidden shadow-inner border border-[#E5DACE] relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                <span className="text-[#B5916A]/20 text-[120px] font-black select-none">A</span>
              </div>
              <h4 className="text-[28px] font-black mb-4">핸드피스 자동 인식</h4>
              <div className="text-[#333] text-[18px] font-medium leading-relaxed">
                <p>핸드피스 자동 인식을 통한</p>
                <p>GUI 자동 변경 시스템 탑재</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & TIS System Section */}
      <section id="safety-tis" className="py-24 bg-[#F8F7F5] text-black overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0 mt-10">
            {/* Left: Safety Sensors */}
            <div className="lg:w-1/3 flex flex-col items-center lg:items-end text-center lg:text-right space-y-24 reveal-up">
              <div className="inline-block bg-[#B5916A] text-white px-6 py-2 rounded-sm shadow-md mb-8">
                <span className="text-[20px] font-black">특허 받은 안전 센서 2종</span>
                <p className="text-[12px] opacity-80 italic">특허 제 10-1075878호, 특허 제 10-2149062호</p>
              </div>

              <div className="flex flex-col items-center lg:items-end group">
                <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center mb-6 shadow-md border border-[#E5DACE] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B5916A]/5 to-transparent"></div>
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#B5916A] opacity-30" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <h5 className="text-[26px] font-black mb-3">접촉 감지 센서</h5>
                <div className="text-[#555] text-[18px] font-bold leading-relaxed">
                  <p>피부 표면과 밀착되지 않았을 경우,</p>
                  <p>에너지 조사를 중지하여 화상 방지</p>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end group">
                <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center mb-6 shadow-md border border-[#E5DACE] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B5916A]/5 to-transparent"></div>
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#B5916A] opacity-30" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
                <h5 className="text-[26px] font-black mb-3">이동 감지 센서</h5>
                <div className="text-[#555] text-[18px] font-bold leading-relaxed">
                  <p>핸드피스가 움직이지 않을 경우,</p>
                  <p>에너지 조사를 중지하여 화상 방지</p>
                </div>
              </div>
            </div>

            {/* Center: Machine Image */}
            <div className="lg:w-1/3 flex flex-col items-center relative py-10 reveal-up delay-150">
              <img
                src="images/machine/브이로어드밴스 사진.png"
                alt="V-RO Advance Machine"
                className="w-full max-w-[500px] drop-shadow-2xl z-10 relative"
              />
              <div className="absolute bottom-10 z-20">
                <h2 className="text-[#B5916A] text-[60px] md:text-[80px] font-black italic tracking-tighter opacity-70">
                  V-RO <span className="not-italic text-[20px] md:text-[30px] font-medium ml-1">LIFTING</span>
                </h2>
              </div>
            </div>

            {/* Right: TIS System */}
            <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-24 reveal-up delay-300">
              <div className="inline-block bg-[#B5916A] text-white px-10 py-2 rounded-sm shadow-md mb-8">
                <span className="text-[28px] font-black uppercase">TIS</span>
                <p className="text-[12px] opacity-80 italic">(Treatment Information System)</p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="w-56 h-40 bg-white border border-[#E5DACE] rounded-lg shadow-lg relative overflow-hidden mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#B5916A]/5 to-transparent"></div>
                  <div className="w-12 h-1 bg-[#B5916A]/10 rounded-full"></div>
                </div>
                <h5 className="text-[26px] font-black mb-3">Treatment History</h5>
                <div className="text-[#555] text-[18px] font-bold leading-relaxed">
                  <p>핸드피스 별 사용량을 기록하여</p>
                  <p>시술 통계 확인 가능</p>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="w-56 h-40 bg-white border border-[#E5DACE] rounded-lg shadow-lg relative overflow-hidden mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#B5916A]/5 to-transparent"></div>
                  <div className="w-12 h-1 bg-[#B5916A]/10 rounded-full"></div>
                </div>
                <h5 className="text-[26px] font-black mb-3">Patients Information</h5>
                <div className="text-[#555] text-[18px] font-bold leading-relaxed">
                  <p>환자별 시술 이력 확인을 통한</p>
                  <p>맞춤형 시술 제공</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RM (RF-Microneedle) Mechanism Section */}
      <section id="rm-mechanism" className="py-32 bg-white text-black overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-baseline gap-6 mb-20 relative reveal-up">
            <span className="text-[140px] font-black text-[#F3F0EC] leading-none select-none -ml-4">01</span>
            <div className="z-10 border-b border-[#E5DACE] w-full pb-8">
              <h2 className="text-[#B5916A] text-[52px] md:text-[72px] font-black leading-none mb-4 uppercase tracking-tighter">
                Multi & Micro
              </h2>
              <h4 className="text-[22px] md:text-[26px] font-medium text-black mb-6 tracking-tight">
                RM(RF-Microneedle) Handpiece
              </h4>
              <p className="text-[26px] md:text-[34px] font-black text-black tracking-tight">
                RM 핸드피스로 <span className="font-black text-black">피부 속까지 전달하는 RF 에너지</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-20 mb-32 reveal-up">
            <div className="lg:w-[45%] w-full">
              <div className="aspect-square bg-[#F9F8F6] rounded-2xl border border-[#E5DACE] flex items-center justify-center relative overflow-hidden group shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                <div className="w-24 h-[2px] bg-[#B5916A]/10"></div>
              </div>
            </div>

            <div className="lg:w-[55%] pt-10 space-y-16">
              <div>
                <div className="inline-block bg-[#B5916A] text-white px-8 py-3 text-[22px] font-black rounded-sm mb-6 shadow-sm">
                  0.25Φ Microneedle
                </div>
                <div className="text-[22px] md:text-[26px] font-medium leading-snug text-[#333]">
                  <p>얇게 가공된 Microneedle 사용으로</p>
                  <p>정밀하게</p>
                </div>
              </div>
              <div>
                <div className="inline-block bg-[#B5916A] text-white px-8 py-3 text-[22px] font-black rounded-sm mb-6 shadow-sm">
                  Gold Plating
                </div>
                <div className="text-[22px] md:text-[26px] font-medium leading-snug text-[#333]">
                  <p>Gold Plating Microneedle 사용으로</p>
                  <p>에너지 절연 가능</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-32 space-y-12 reveal-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-6 bg-[#3498db]"></div>
                  <h5 className="text-[#3498db] text-[22px] font-black uppercase">INSULATED Type</h5>
                </div>
                <div className="aspect-[16/9] bg-[#F9F8F6] rounded-xl border border-[#E5DACE] flex items-center justify-center">
                  <div className="w-12 h-[1px] bg-[#3498db]/20"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-6 bg-[#e74c3c]"></div>
                  <h5 className="text-[#e74c3c] text-[22px] font-black uppercase">NON-INSULATED Type</h5>
                </div>
                <div className="aspect-[16/9] bg-[#F9F8F6] rounded-xl border border-[#E5DACE] flex items-center justify-center">
                  <div className="w-12 h-[1px] bg-[#e74c3c]/20"></div>
                </div>
              </div>
            </div>
            <p className="text-right text-[17px] text-[#888] font-bold">* 최소 0.1mm 단위로 세밀한 깊이 조절 가능</p>
          </div>
        </div>
      </section>

      {/* SD (Synergy Dotting) Combination Mechanism Section */}
      <section id="sd-combination" className="py-32 bg-white text-black overflow-hidden border-t border-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-baseline gap-6 mb-20 relative reveal-up">
            <span className="text-[140px] font-black text-[#F3F0EC] leading-none select-none -ml-4">02</span>
            <div className="z-10 border-b border-[#E5DACE] w-full pb-8">
              <h2 className="text-[#B5916A] text-[52px] md:text-[72px] font-black leading-none mb-4 uppercase tracking-tighter">
                Combination of HIFU+RF
              </h2>
              <h4 className="text-[22px] md:text-[26px] font-medium text-black mb-6 tracking-tight">
                SD(Synergy Dotting) Handpiece
              </h4>
              <p className="text-[26px] md:text-[34px] font-black text-black tracking-tight">
                단 하나의 핸드피스로 <span className="font-black text-black uppercase">HIFU+RF를 한 번에</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 reveal-up">
            <div className="lg:w-[60%] space-y-20">
              <div className="inline-block bg-[#B5916A] text-white px-10 py-3 text-[22px] font-black rounded-sm shadow-sm">
                HIFU와 RF의 장점을 한 번의 Combination 시술로!
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12 py-10">
                <div className="w-64 h-64 rounded-full bg-[#F9F8F6] border border-[#E5DACE] flex items-center justify-center relative overflow-hidden flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-[#B5916A]/20"></div>
                  <div className="absolute w-[2px] h-full bg-[#B5916A]/5 rotate-45"></div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[#B5916A] text-[32px] font-black italic">RF</span>
                    <p className="text-[20px] font-bold text-[#333]">피부와 피하조직의 열 발생</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[#B5916A] text-[32px] font-black italic">HIFU</span>
                    <p className="text-[20px] font-bold text-[#333]">Target하는 깊이에만 열 집중</p>
                  </div>
                </div>
              </div>

              <div className="space-y-16 border-t border-gray-100 pt-16">
                <h3 className="text-[#B5916A] text-[42px] font-black tracking-tighter border-b-2 border-[#B5916A] inline-block pb-2 mb-4">
                  빠르고, 안전하게, 강력하게
                </h3>

                <div className="flex items-center gap-10 reveal-up">
                  <span className="text-[72px] md:text-[96px] font-black text-[#B5916A]/80 tracking-tighter leading-none">
                    +43%
                  </span>
                  <div className="space-y-1">
                    <div className="inline-block bg-[#B5916A]/10 text-[#B5916A] px-4 py-1 text-[18px] font-black rounded-sm mb-2">
                      Shot Speed
                    </div>
                    <p className="text-[20px] md:text-[24px] font-black text-[#333]">최대 10Hz의 속도 향상으로,</p>
                    <p className="text-[20px] md:text-[24px] font-black text-[#333]">더 빨라진 시술 속도</p>
                    <p className="text-[14px] text-gray-400 font-bold mt-2">*기존 자사 장비 대비</p>
                  </div>
                </div>

                <div className="flex items-center gap-10 reveal-up delay-100">
                  <span className="text-[72px] md:text-[96px] font-black text-[#B5916A]/80 tracking-tighter leading-none">
                    +93%
                  </span>
                  <div className="space-y-1">
                    <div className="inline-block bg-[#B5916A]/10 text-[#B5916A] px-4 py-1 text-[18px] font-black rounded-sm mb-2">
                      RF Value
                    </div>
                    <p className="text-[20px] md:text-[24px] font-black text-[#333]">SD Type의 RF 출력 값 상승으로</p>
                    <p className="text-[20px] md:text-[24px] font-black text-[#333]">더 높아진 열적 효과</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] bg-[#F9F8F6] rounded-[40px] p-12 space-y-20 border border-[#E5DACE]/30 reveal-up">
              <div className="flex flex-col items-center">
                <h5 className="text-[#B5916A] text-[20px] font-bold mb-10 opacity-70">| Pen Type 카트리지 |</h5>
                <div className="flex gap-4 mb-10">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-16 h-32 bg-white rounded-lg border border-[#E5DACE] shadow-sm"></div>
                  ))}
                </div>
                <div className="text-center text-[18px] font-medium text-[#555] leading-snug">
                  <p>보다 작은 사이즈의 가벼운 카트리지로</p>
                  <p>시술 편의성을 높였습니다.</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h5 className="text-[#B5916A] text-[20px] font-bold mb-10 opacity-70">| Long Type 카트리지 |</h5>
                <div className="flex gap-4 mb-10">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-20 h-40 bg-white rounded-xl border border-[#E5DACE] shadow-sm"></div>
                  ))}
                </div>
                <div className="text-center text-[18px] font-medium text-[#555] leading-snug">
                  <p>40mm 길어진 카트리지의</p>
                  <p>증류수 양이 증대되어 장시간 사용 시에도</p>
                  <p>안정적인 시술을 제공합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Slogan Section */}
      <section id="bottom-banner" className="relative py-48 bg-[#D2C8BE] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 reveal-up">
          <div className="md:w-1/2 flex justify-center md:justify-end items-center">
            <div className="relative w-full max-w-[650px]">
              <img
                src="images/machine/브이로어드밴스 사진.png"
                alt="V-RO ADVANCE"
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left pt-12 md:pt-0">
            <div className="space-y-4">
              <p className="text-[26px] md:text-[38px] font-black italic tracking-tighter text-[#111] leading-none mb-4">
                두가지 에너지로 강력한 맞춤 리프팅
              </p>
              <div className="flex items-center gap-4">
                <h2 className="text-[80px] md:text-[120px] lg:text-[160px] font-black tracking-tighter text-[#000] leading-none uppercase">
                  V-RO
                </h2>
                <div className="bg-[#000] text-white px-6 py-2 md:px-10 md:py-5 rounded-[12px] md:rounded-[20px] transform translate-y-1 md:translate-y-4">
                  <span className="text-[34px] md:text-[54px] lg:text-[76px] font-bold tracking-tighter uppercase leading-none block">
                    ADVANCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
