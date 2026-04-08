'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'site-header-scrolled' : ''
        }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo Text */}
        <Link
          href="/#home"
          className="hover:opacity-100 transition-all duration-500 w-64 flex-shrink-0 group flex items-center"
        >
          <img
            src="/images/청안로고.png"
            alt="CHEONGAN"
            className="h-16 w-auto object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-14 font-medium text-white relative">
          <Link href="/#about" className="nav-link hover:text-primary transition duration-300 relative py-6">
            회사소개
          </Link>

          {/* Dropdown Menu */}
          <div className="group relative py-6 cursor-pointer">
            <span className="nav-link hover:text-primary transition duration-300">제품소개</span>
            {/* Dropdown Content */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-[-8px] w-auto min-w-[240px] bg-[#111111]/95 backdrop-blur-md border border-[#333] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden whitespace-nowrap z-50 text-left">
              <Link
                href="/pico-k"
                className="px-6 py-4 hover:bg-[#222]/80 hover:text-primary transition duration-300 text-sm border-b border-[#222]"
              >
                피코K
              </Link>
              <Link
                href="/u-pulse"
                className="px-6 py-4 hover:bg-[#222]/80 hover:text-primary transition duration-300 text-sm border-b border-[#222]"
              >
                U-Pulse, U-Pulse DUAL
              </Link>
              <Link
                href="/n-pulse"
                className="px-6 py-4 hover:bg-[#222]/80 hover:text-primary transition duration-300 text-sm border-b border-[#222]"
              >
                N-Pulse, N-Pulse FX
              </Link>
              <Link
                href="/sylfirm-x"
                className="px-6 py-4 hover:bg-[#222]/80 hover:text-primary transition duration-300 text-sm border-b border-[#222]"
              >
                실펌엑스
              </Link>
              <Link
                href="/cellinew"
                className="px-6 py-4 hover:bg-[#222]/80 hover:text-primary transition duration-300 text-sm border-b border-[#222]"
              >
                셀리뉴
              </Link>
              <Link
                href="/v-ro-advance"
                className="px-6 py-4 hover:bg-[#222]/80 hover:text-primary transition duration-300 text-sm"
              >
                브이로어드밴스
              </Link>
            </div>
          </div>

          <Link href="/#customers" className="nav-link hover:text-primary transition duration-300 relative py-6">
            미래비전
          </Link>
          <Link
            href="/contact"
            className="nav-link hover:text-primary transition duration-300 relative py-6 uppercase"
          >
            contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2 font-bold cursor-pointer hover:text-primary transition w-64 justify-end flex-shrink-0 text-white">
          <span>KOR</span>
          <span className="text-xs">▾</span>
        </div>
      </div>
    </header>
  );
}
