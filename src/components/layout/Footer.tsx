import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-20 pb-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="mb-12">
          {/* Note: The image src should ideally be downloaded and put into public/images/ */}
          {/* Actually the original points to https://addd.co.kr/assets/images/header_logo.png */}
          <img src="https://addd.co.kr/assets/images/header_logo.png" alt="addd logo" className="w-28 opacity-90" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
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
              <span className="w-24 font-bold text-gray-500 shrink-0 mt-1">주소</span>
              <span className="text-gray-400 leading-[1.8]">
                <strong className="text-gray-300 font-medium">본사</strong> 서울특별시 강남구 테헤란로 70길 12 H타워
                148,302-1호<br />
                <strong className="text-gray-300 font-medium">영업본부</strong> 경기도 수원시 영통구 광교중앙로 170 광교효성해링턴타워 A동 1802호
                <br />
                <strong className="text-gray-300 font-medium">전라제주지사</strong> 전라북도 전주시 덕진구 동부대로 1229 메가월드 B동 322호
              </span>
            </div>
          </div>

          {/* Footer Right */}
          <div className="md:text-right">
            <p className="text-gray-500 mb-8 font-medium space-x-4 text-sm">
              <span className="hover:text-white cursor-pointer transition">회사소개</span> <span>|</span>
              <span className="hover:text-white cursor-pointer transition">미래비전</span> <span>|</span>
              <span className="hover:text-white cursor-pointer transition">CONTACT</span>
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
        <div className="mt-24 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-gray-300 transition">이용약관</Link>
            <Link href="#" className="hover:text-gray-300 transition">개인정보 취급방침</Link>
            <Link href="#" className="hover:text-gray-300 transition">이메일무단수집거부</Link>
          </div>
          <div className="font-inter">Copyright© CHEONGAN. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
