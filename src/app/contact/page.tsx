'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    hospital: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agree: false,
  });

  const products = [
    'PICO-K',
    'U-PULSE',
    'N-PULSE',
    'SYLFIRM X',
    'CELLINEW',
    'V-RO ADVANCE',
    'AQUAPURE',
    'REFIT',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. (데모)');
  };

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
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover z-0 grayscale-[20%]"
            alt="Contact background"
          />
        </div>

        <div className="relative z-20 max-w-screen-xl mx-auto">
          <h1 className="text-4xl md:text-8xl font-black leading-tight tracking-tighter text-white mb-6 uppercase reveal-up">
            CONTACT US
          </h1>
          <div className="reveal-up delay-100">
            <p className="text-[18px] md:text-[24px] font-bold text-white italic tracking-tight opacity-90">
              합리적인 피부미용 의료 장비,
            </p>
            <p className="text-[18px] md:text-[24px] font-bold text-white italic tracking-tight opacity-90 mt-1">
              그리고 최고의 선택
            </p>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <a
            href="#contact-form"
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

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-white text-black">
        <div className="max-w-[1000px] mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-10 reveal-up">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[15px] font-bold text-[#333] mb-2 after:content-['_*'] after:text-red-500">
                  병원명/회사명 (Hospital/Company)
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10 transition-all font-medium"
                  placeholder="병원명 또는 회사명을 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-[15px] font-bold text-[#333] mb-2 after:content-['_*'] after:text-red-500">
                  성함 (Name)
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10 transition-all font-medium"
                  placeholder="성함을 입력해주세요"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[15px] font-bold text-[#333] mb-2 after:content-['_*'] after:text-red-500">
                  연락받으실 이메일 (Email)
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10 transition-all font-medium"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-[15px] font-bold text-[#333] mb-2 after:content-['_*'] after:text-red-500">
                  전화번호 (Phone)
                </label>
                <input
                  type="tel"
                  required
                  className="w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10 transition-all font-medium"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>

            {/* Interested Products Grid */}
            <div className="border border-gray-100 bg-[#F9FBFF] p-8 rounded-xl ring-1 ring-[#00AEEF]/5">
              <label className="block text-[16px] font-black text-[#00AEEF] mb-6 flex items-center gap-2 uppercase">
                <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full"></span>
                관심 제품 (Interested Products)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-2">
                {products.map((product) => (
                  <label key={product} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 accent-[#00AEEF] rounded" />
                    <span className="text-[13px] font-medium text-gray-700 group-hover:text-[#00AEEF] transition">
                      {product}
                    </span>
                  </label>
                ))}
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 accent-[#00AEEF] rounded" />
                  <span className="text-[13px] font-extrabold text-[#00AEEF]">개원 문의</span>
                </label>
              </div>
            </div>

            {/* Subject Row */}
            <div>
              <label className="block text-[15px] font-bold text-[#333] mb-2 after:content-['_*'] after:text-red-500">
                문의제목 (Subject)
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10 transition-all font-medium"
                placeholder="문의 제목을 입력해주세요"
              />
            </div>

            {/* Message Row */}
            <div>
              <label className="block text-[15px] font-bold text-[#333] mb-2 after:content-['_*'] after:text-red-500">
                문의내용 (Message)
              </label>
              <textarea
                required
                className="w-full border border-gray-200 p-3 rounded-md focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/10 transition-all font-medium h-48 resize-none"
                placeholder="문의하실 내용을 상세하게 입력해주세요"
              ></textarea>
            </div>

            {/* File Upload Row */}
            <div className="py-4 border-t border-gray-100">
              <label className="block text-[15px] font-bold text-[#333] mb-4">첨부파일 (Attachments)</label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <label className="cursor-pointer bg-white border border-gray-300 rounded-md py-2 px-6 font-bold text-[14px] hover:bg-gray-50 flex items-center gap-2 transition shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  파일선택
                  <input type="file" className="hidden" />
                </label>
                <span className="text-[13px] text-gray-400 font-medium">허용 파일 : jpg, jpeg, png, gif, pdf (최대 10MB)</span>
              </div>
            </div>

            {/* Privacy Agreement */}
            <div className="pt-6 border-t border-gray-100">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" required className="w-4 h-4 accent-[#00AEEF]" />
                <span className="text-[14px] font-medium text-gray-600 underline underline-offset-4 decoration-gray-300 group-hover:decoration-[#00AEEF] transition">
                  기재하신 개인정보의 수집 및 이용에 동의합니다. (필수)
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-10 flex justify-center">
              <button
                type="submit"
                className="bg-[#00AEEF] hover:bg-black text-white text-[18px] font-black py-4 px-20 rounded-sm shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                문의하기 SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
