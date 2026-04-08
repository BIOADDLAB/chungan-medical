import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-20 pb-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="mb-12 h-20 flex justify-start items-center">
          <img
            src="/images/청안로고.png"
            alt="CHEONGAN"
            className="w-100 opacity-100 brightness-0 invert object-contain object-left -ml-20"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24">
          {/* Footer Left */}
          <div className="space-y-4 text-[0.9rem]">
            <div className="flex">
              <span className="w-24 font-bold text-gray-500">대표명</span>
              <span className="text-gray-300 font-medium">황현</span>
            </div>
            <div className="flex">
              <span className="w-24 font-bold text-gray-500">이메일</span>
              <span className="text-gray-300 font-medium">chungan@naver.co.kr</span>
            </div>
            <div className="flex">
              <span className="w-24 font-bold text-gray-500">사업자번호</span>
              <span className="text-gray-300 font-medium">733-20-01131</span>
            </div>
            <div className="flex mt-2">
              <span className="w-24 font-bold text-gray-500 shrink-0">주소</span>
              <div className="text-gray-400 leading-[1.8] flex flex-col gap-1 whitespace-nowrap">
                <p><strong className="text-gray-300 font-medium">본사</strong> 서울특별시 강남구 테헤란로 70길 12 H타워 148,302-1호</p>
                <p><strong className="text-gray-300 font-medium">영업본부</strong> 경기도 수원시 영통구 광교중앙로 170 광교효성해링턴타워 A동 1802호</p>
                <p><strong className="text-gray-300 font-medium">전라제주지사</strong> 전라북도 전주시 덕진구 동부대로 1229 메가월드 B동 322호</p>
              </div>
            </div>
          </div>

          {/* Footer Right */}
          <div className="md:text-right">
            <p className="text-gray-500 mb-8 font-medium space-x-4 text-sm">
              <Link href="/#about" className="hover:text-white transition duration-300">회사소개</Link>
              <span>|</span>
              <Link href="/#customers" className="hover:text-white transition duration-300">미래비전</Link>
              <span>|</span>
              <Link href="/contact" className="hover:text-white transition duration-300 uppercase">CONTACT</Link>
            </p>
            <h3 className="text-2xl md:text-4xl font-bold font-inter mb-6 hover:text-primary transition duration-300 cursor-pointer text-white">
              chungan@naver.co.kr
            </h3>
            <p className="text-gray-400 mb-2 font-inter text-sm">
              <span className="text-gray-500 mr-2">TEL</span> 010-5115-6293
            </p>
            <p className="text-gray-400 font-inter text-sm">
              <span className="text-gray-500 mr-2">FAX</span> 0504-172-6293
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex space-x-12 mb-6 md:mb-0">
            <Link href="https://pf.kakao.com/_nEETxj" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-black fill-current" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.68 2.531-.777 2.89-.112.411.139.405.293.303.119-.078 1.884-1.282 2.646-1.791.84.12 1.696.183 2.568.183 4.97 0 9-3.185 9-7.115S16.97 3 12 3z" /></svg>
              </div>
              <span className="font-bold tracking-wider text-[0.7rem] group-hover:text-white transition-colors">KAKAO</span>
            </Link>
            <Link href="https://www.instagram.com/chungan_medical_corporation" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <span className="font-bold tracking-wider text-[0.7rem] group-hover:text-white transition-colors">INSTAGRAM</span>
            </Link>
            <Link href="https://blog.naver.com/hwangh6293" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-green-600 transition-colors">
                <span className="text-[10px] font-black text-gray-400 group-hover:text-white">b</span>
              </div>
              <span className="font-bold tracking-wider text-[0.7rem] group-hover:text-white transition-colors">BLOG</span>
            </Link>
          </div>
          <div className="font-inter">Copyright© CHEONGAN. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
