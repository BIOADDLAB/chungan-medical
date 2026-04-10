'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { name: 'PICO-K', href: '/pico-k' },
    { name: 'U-Pulse, U-Pulse DUAL', href: '/u-pulse' },
    { name: 'N-Pulse PRO, N-Pulse FX', href: '/n-pulse' },
    { name: 'SYLFIRM X', href: '/sylfirm-x' },
    { name: 'CELLINEW', href: '/cellinew' },
    { name: 'V-RO ADVANCE', href: '/v-ro-advance' },
  ];

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'site-header-scrolled border-b border-white/5' : ''
          }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 h-20 md:h-28 flex justify-between items-center relative z-20">
          {/* Logo */}
          <div className="md:w-64 flex-shrink-0">
            <Link
              href="/#home"
              className="hover:opacity-100 transition-all duration-500 group flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src="/images/청안로고.png"
                alt="CHEONGAN"
                className="h-12 md:h-20 w-auto object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12 lg:gap-16 font-semibold text-white h-full px-4">
            <Link href="/#about" className="nav-link hover:text-primary transition duration-300 py-6 block whitespace-nowrap">
              회사소개
            </Link>

            {/* Products Dropdown - Reverted to Simple Compact Box */}
            <div className="relative h-full flex items-center group cursor-pointer">
              <span className="nav-link group-hover:text-primary transition duration-300 py-6 block whitespace-nowrap">
                제품소개
              </span>

              {/* Compact Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[80%] mt-2 w-auto min-w-[240px] bg-[#111]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 flex flex-col overflow-hidden z-50">
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="px-6 py-4 hover:bg-primary/10 hover:text-primary transition duration-300 text-[15px] font-medium border-b border-white/5 last:border-0 whitespace-nowrap"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/#customers" className="nav-link hover:text-primary transition duration-300 py-6 block whitespace-nowrap">
              미래비전
            </Link>
            <Link
              href="/contact"
              className="nav-link hover:text-primary transition duration-300 py-6 block uppercase whitespace-nowrap"
            >
              contact
            </Link>
          </nav>

          {/* Right Area */}
          <div className="md:w-64 flex justify-end flex-shrink-0">
            <div className="hidden md:flex items-center space-x-2 font-bold cursor-pointer hover:text-primary transition text-white">
              <span>KOR</span>
              <span className="text-xs">▾</span>
            </div>

            <button
              className="md:hidden text-white p-2 focus:outline-none z-[70]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.svg key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></motion.svg>
                ) : (
                  <motion.svg key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu (STAYS THE SAME) */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050810] z-[60] md:hidden flex flex-col pt-20"
          >
            {/* Top Bar Logo & Close Button */}
            <div className="absolute top-0 left-0 w-full h-20 md:h-28 flex items-center justify-between px-6 border-b border-white/5">
              <img src="/images/청안로고.png" alt="CHEONGAN" className="h-12 w-auto brightness-0 invert" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white hover:text-primary transition-colors focus:outline-none"
                aria-label="Close Menu"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pt-4">
              <nav className="flex flex-col">
                <Link href="/#about" className="px-8 py-8 flex justify-between items-center text-xl font-bold text-white border-b border-white/5 hover:bg-white/5 transition" onClick={() => setIsMenuOpen(false)}>
                  <span>회사소개</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </Link>
                <div className="border-b border-white/5">
                  <button className="w-full px-8 py-8 flex justify-between items-center text-xl font-bold text-white hover:bg-white/5 transition focus:outline-none" onClick={() => setIsProductsOpen(!isProductsOpen)}>
                    <span>제품소개</span>
                    <motion.svg animate={{ rotate: isProductsOpen ? 180 : 0 }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><polyline points="6 9 12 15 18 9"></polyline></motion.svg>
                  </button>
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-[#0a0d16]">
                        <div className="py-4 px-8 grid grid-cols-1 gap-6">
                          {products.map((p) => (
                            <Link key={p.href} href={p.href} className="text-lg text-slate-400 hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>{p.name}</Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link href="/#customers" className="px-8 py-8 flex justify-between items-center text-xl font-bold text-white border-b border-white/5 hover:bg-white/5 transition" onClick={() => setIsMenuOpen(false)}>
                  <span>미래비전</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </Link>
                <Link href="/contact" className="px-8 py-8 flex justify-between items-center text-xl font-bold text-white border-b border-white/5 hover:bg-white/5 transition uppercase" onClick={() => setIsMenuOpen(false)}>
                  <span>contact</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </Link>
                <div className="px-8 py-10 flex items-center gap-6 border-t border-white/5 mt-auto">
                  <span className="text-primary font-bold">KOR</span>
                  <span className="text-white/30 font-bold hover:text-white transition cursor-pointer">ENG</span>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
