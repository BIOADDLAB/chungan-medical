'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    hospital: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interestedProducts: [] as string[],
    agree: false,
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const products = [
    'PICO-K',
    'U-PULSE',
    'N-PULSE',
    'SYLFIRM X',
    'CELLINEW',
    'V-RO ADVANCE',
    'MIGLOW',
    'Terratalk'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (product: string) => {
    setFormData(prev => {
      const isSelected = prev.interestedProducts.includes(product);
      if (isSelected) {
        return { ...prev, interestedProducts: prev.interestedProducts.filter(p => p !== product) };
      } else {
        return { ...prev, interestedProducts: [...prev.interestedProducts, product] };
      }
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      
      // 현재 파일 개수 체크
      if (selectedFiles.length + newFiles.length > 5) {
        alert('최대 5개의 파일만 첨부할 수 있습니다.');
        return;
      }
      
      // 현재 선택된 파일들의 총 용량 계산
      const currentTotalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);
      
      // 새로 추가할 파일들 중 개별 용량(10MB) 및 전체 용량(4MB) 체크
      let addedSize = 0;
      const validFiles = newFiles.filter(file => {
        // 개별 파일은 4MB 내에서라면 10MB 체크는 의미가 없으므로 함께 4MB 기준으로 생각
        if (file.size > 4 * 1024 * 1024) {
          alert(`파일 '${file.name}'의 크기가 4MB를 초과합니다.`);
          return false;
        }
        
        if (currentTotalSize + addedSize + file.size > 4 * 1024 * 1024) {
          alert('전체 파일 크기는 4MB를 초과할 수 없습니다.');
          return false;
        }
        
        addedSize += file.size;
        return true;
      });

      // 기존 파일들과 합쳐서 업데이트
      setSelectedFiles(prev => [...prev, ...validFiles]);
      
      // input 초기화
      if (e.target) e.target.value = '';
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append('hospital', formData.hospital);
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('subject', formData.subject);
      submitData.append('message', formData.message);
      submitData.append('products', formData.interestedProducts.join(', '));
      
      // 여러 파일 추가
      selectedFiles.forEach(file => {
        submitData.append('file', file);
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        alert('문의가 성공적으로 발송되었습니다. 확인 후 연락드리겠습니다.');
        setFormData({
          hospital: '',
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          interestedProducts: [],
          agree: false,
        });
        setSelectedFiles([]);
        if (formRef.current) formRef.current.reset();
      } else {
        throw new Error('전송 실패');
      }
    } catch (error) {
      console.error('Email 전송 오류:', error);
      alert('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-sky-50"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 z-10"></div>
          <motion.img
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/images/cover/contact_cover.png"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 brightness-[0.85] contrast-[1.05]"
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
            CONTACT <span className="text-primary">US</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-[2px] bg-primary mb-6" />
            <p className="text-white/90 text-lg md:text-xl font-medium tracking-tight uppercase max-w-3xl leading-relaxed break-keep">
              합리적인 피부미용 의료 장비, <span className="text-primary font-bold">그리고 최고의 선택</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="pt-24 md:pt-32 pb-32 bg-white text-slate-900 leading-none">
        <div className="max-w-[1000px] mx-auto px-6">
          <form onSubmit={handleSubmit} ref={formRef} className="space-y-12 leading-none">

            {/* Form Header Info */}
            <div className="flex justify-between items-end border-b border-sky-100 pb-4 mb-10 md:mb-14">
              <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase font-inter text-slate-900">Inquiry Details</h2>
              <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">* Required Fields</span>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-[13px] font-black text-slate-600 mb-3 tracking-widest uppercase">
                  병원명/회사명 <span className="text-primary ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-400 hover:border-primary/50"
                  placeholder="HOSPITAL / COMPANY"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-[13px] font-black text-slate-600 mb-3 tracking-widest uppercase">
                  성함 <span className="text-primary ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-400 hover:border-primary/50"
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
                <label className="block text-[13px] font-black text-slate-600 mb-3 tracking-widest uppercase">
                  연락받으실 이메일 <span className="text-primary ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-400 hover:border-primary/50"
                  placeholder="EXAMPLE@EMAIL.COM"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-[13px] font-black text-slate-600 mb-3 tracking-widest uppercase">
                  전화번호 <span className="text-primary ml-1">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-400 hover:border-primary/50"
                  placeholder="010-0000-0000"
                />
              </motion.div>
            </div>

            {/* Interested Products Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-slate-200 bg-white p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-tech-dots opacity-10 mix-blend-multiply pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" />

              <label className="block text-[14px] font-black text-primary mb-8 flex items-center gap-3 uppercase tracking-widest leading-none">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                관심 제품 (INTERESTED PRODUCTS)
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4 relative z-10">
                {products.map((product) => (
                  <label key={product} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={formData.interestedProducts.includes(product)}
                        onChange={() => handleCheckboxChange(product)}
                        className="peer appearance-none w-5 h-5 border border-slate-300 rounded bg-slate-50 checked:bg-primary checked:border-primary transition-all cursor-pointer"
                      />
                      <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[13px] font-black text-slate-600 group-hover:text-primary transition tracking-tight">
                      {product}
                    </span>
                  </label>
                ))}
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={formData.interestedProducts.includes('개원 문의')}
                      onChange={() => handleCheckboxChange('개원 문의')}
                      className="peer appearance-none w-5 h-5 border border-primary/40 rounded bg-primary/5 checked:bg-primary checked:border-primary transition-all cursor-pointer"
                    />
                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-[13px] font-black text-primary">개원 문의</span>
                </label>
              </div>
            </motion.div>

            {/* Subject Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-[13px] font-black text-slate-600 mb-3 tracking-widest uppercase">
                문의제목 <span className="text-primary ml-1">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-400 hover:border-primary/50"
                placeholder="SUBJECT"
              />
            </motion.div>

            {/* Message Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-[13px] font-black text-slate-600 mb-3 tracking-widest uppercase">
                문의내용 <span className="text-primary ml-1">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-slate-900 placeholder:text-slate-400 hover:border-primary/50 h-56 resize-none leading-relaxed"
                placeholder="MESSAGE DETAILS..."
              ></textarea>
            </motion.div>

            {/* File Upload Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-10 border-t border-slate-200"
            >
              <label className="block text-[13px] font-black text-slate-600 mb-6 tracking-widest uppercase">첨부파일 (ATTACHMENTS)</label>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <label className="cursor-pointer bg-slate-50 border border-slate-200 rounded-full py-3 px-8 font-black text-[12px] tracking-widest text-primary hover:bg-primary/10 hover:border-primary/50 flex items-center gap-3 transition-all duration-300 uppercase shadow-sm group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transform group-hover:rotate-90 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                    </svg>
                    Add Files
                    <input 
                      type="file" 
                      multiple
                      className="hidden" 
                      onChange={handleFileChange}
                      ref={fileInputRef}
                    />
                  </label>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-slate-500 font-bold tracking-tight mb-1">TOTAL MAX: 4MB (MAX 5 FILES)</span>
                    <span className="text-[11px] text-slate-500 font-bold tracking-tight">SUPPORTED: JPG, PNG, GIF, PDF</span>
                  </div>
                </div>

                {/* File List Display */}
                <AnimatePresence>
                  {selectedFiles.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 mt-2"
                    >
                      {selectedFiles.map((file, index) => (
                        <motion.div 
                          key={`${file.name}-${index}`}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 10, opacity: 0 }}
                          className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-lg p-3 group hover:border-primary/30 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[13px] font-black text-slate-700 truncate max-w-[200px] md:max-w-md">{file.name}</span>
                              <span className="text-[11px] font-bold text-slate-400">{(file.size / 1024 / 1024).toFixed(2)}MB</span>
                            </div>
                          </div>
                          <button 
                            type="button"
                            onClick={() => removeFile(index)}
                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Privacy Agreement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-slate-200"
            >
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData(prev => ({ ...prev, agree: e.target.checked }))}
                  required
                  className="appearance-none w-5 h-5 border border-slate-300 rounded bg-slate-50 checked:bg-primary checked:border-primary transition-all cursor-pointer"
                />
                <span className="text-[12px] sm:text-[13px] font-bold text-slate-600 group-hover:text-primary transition tracking-tight whitespace-nowrap">
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
                disabled={isSubmitting}
                className="relative group bg-primary hover:bg-white text-white hover:text-primary text-[16px] md:text-[18px] font-black py-5 px-16 md:px-24 rounded-full shadow-sm transition-all duration-500 transform hover:-translate-y-1 uppercase tracking-widest font-inter border-2 border-transparent hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 transition-colors duration-500">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </button>
            </motion.div>
          </form>
        </div>
      </section>
    </main>
  );
}
