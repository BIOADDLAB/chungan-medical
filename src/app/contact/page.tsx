'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

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
    <main className="bg-[#050810] min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050810] z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1920&q=80"
            className="absolute inset-0 w-full h-full object-cover z-0 grayscale-[40%] opacity-50"
            alt="Contact background"
          />
        </div>

        <div className="relative z-20 max-w-screen-xl mx-auto flex flex-col items-center px-6 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tight uppercase leading-tight text-white font-inter"
          >
            CONTACT <span className="text-primary drop-shadow-[0_0_20px_rgba(0,183,241,0.4)]">US</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-[2px] bg-primary mb-6 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />
            <p className="text-slate-300 text-lg md:text-xl font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase max-w-3xl leading-relaxed break-keep">
              합리적인 피부미용 의료 장비, <span className="text-primary font-bold">그리고 최고의 선택</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="pb-32 bg-[#050810] text-white leading-none">
        <div className="max-w-[1000px] mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-12 leading-none">

            {/* Form Header Info */}
            <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-2">
              <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase font-inter">Inquiry Details</h2>
              <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">* Required Fields</span>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-[13px] font-black text-slate-400 mb-3 tracking-widest uppercase">
                  병원명/회사명 <span className="text-primary ml-1">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-white placeholder:text-slate-600 hover:border-white/20"
                  placeholder="HOSPITAL / COMPANY"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-[13px] font-black text-slate-400 mb-3 tracking-widest uppercase">
                  성함 <span className="text-primary ml-1">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-white placeholder:text-slate-600 hover:border-white/20"
                  placeholder="NAME"
                />
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-[13px] font-black text-slate-400 mb-3 tracking-widest uppercase">
                  연락받으실 이메일 <span className="text-primary ml-1">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-white placeholder:text-slate-600 hover:border-white/20"
                  placeholder="EXAMPLE@EMAIL.COM"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-[13px] font-black text-slate-400 mb-3 tracking-widest uppercase">
                  전화번호 <span className="text-primary ml-1">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-white placeholder:text-slate-600 hover:border-white/20"
                  placeholder="010-0000-0000"
                />
              </motion.div>
            </div>

            {/* Interested Products Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-tech-dots opacity-[0.03] pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />

              <label className="block text-[14px] font-black text-primary mb-8 flex items-center gap-3 uppercase tracking-widest leading-none">
                <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,183,241,0.8)]"></span>
                관심 제품 (INTERESTED PRODUCTS)
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4 relative z-10">
                {products.map((product) => (
                  <label key={product} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-white/5 checked:bg-primary checked:border-primary transition-all cursor-pointer" />
                      <svg className="absolute w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[13px] font-black text-slate-400 group-hover:text-white transition tracking-tight">
                      {product}
                    </span>
                  </label>
                ))}
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer appearance-none w-5 h-5 border border-primary/30 rounded bg-primary/5 checked:bg-primary checked:border-primary transition-all cursor-pointer" />
                    <svg className="absolute w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-[13px] font-black text-primary drop-shadow-[0_0_5px_rgba(0,183,241,0.3)]">개원 문의</span>
                </label>
              </div>
            </motion.div>

            {/* Subject Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-[13px] font-black text-slate-400 mb-3 tracking-widest uppercase">
                문의제목 <span className="text-primary ml-1">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-white placeholder:text-slate-600 hover:border-white/20"
                placeholder="SUBJECT"
              />
            </motion.div>

            {/* Message Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-[13px] font-black text-slate-400 mb-3 tracking-widest uppercase">
                문의내용 <span className="text-primary ml-1">*</span>
              </label>
              <textarea
                required
                className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-white placeholder:text-slate-600 hover:border-white/20 h-56 resize-none leading-relaxed"
                placeholder="MESSAGE DETAILS..."
              ></textarea>
            </motion.div>

            {/* File Upload Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-10 border-t border-white/10"
            >
              <label className="block text-[13px] font-black text-slate-400 mb-6 tracking-widest uppercase">첨부파일 (ATTACHMENTS)</label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <label className="cursor-pointer bg-white/5 border border-white/10 rounded-full py-3 px-8 font-black text-[12px] tracking-widest text-primary hover:bg-primary/10 hover:border-primary/50 flex items-center gap-3 transition-all duration-300 uppercase shadow-lg group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform group-hover:rotate-90 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                  </svg>
                  Select File
                  <input type="file" className="hidden" />
                </label>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-500 font-bold tracking-tight mb-1">MAX SIZE: 10MB</span>
                  <span className="text-[11px] text-slate-500 font-bold tracking-tight">SUPPORTED: JPG, PNG, GIF, PDF</span>
                </div>
              </div>
            </motion.div>

            {/* Privacy Agreement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-white/10"
            >
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" required className="appearance-none w-5 h-5 border border-white/20 rounded bg-white/5 checked:bg-primary checked:border-primary transition-all cursor-pointer" />
                <span className="text-[12px] sm:text-[13px] font-bold text-slate-400 group-hover:text-white transition tracking-tight whitespace-nowrap">
                  기재하신 개인정보의 수집 및 이용에 동의합니다. (필수)
                </span>
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-12 flex justify-center"
            >
              <button
                type="submit"
                className="relative group bg-primary hover:bg-white text-[#050810] text-[16px] md:text-[18px] font-black py-5 px-16 md:px-24 rounded-full shadow-[0_10px_30px_rgba(0,183,241,0.3)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] transition-all duration-500 transform hover:-translate-y-1 uppercase tracking-widest font-inter"
              >
                <span className="relative z-10 transition-colors duration-500">Send Message</span>
                {/* Fixed Uniform Hover Outline */}
                <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100 group-hover:inset-[-6px] transition-all duration-500 pointer-events-none" />
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </motion.div>
          </form>
        </div>
      </section>
    </main>
  );
}
