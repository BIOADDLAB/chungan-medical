import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-20 pb-12 border-t border-[#333]">
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
              <span className="w-24 font-bold text-gray-500">대표</span>
              <span className="text-gray-300 font-medium">안상현</span>
            </div>
            <div className="flex">
              <span className="w-24 font-bold text-gray-500">이메일</span>
              <span className="text-gray-300 font-medium">addd.cs@addd.co.kr</span>
            </div>
            <div className="flex">
              <span className="w-24 font-bold text-gray-500">Biz No.</span>
              <span className="text-gray-300 font-medium">616-88-01307</span>
            </div>
            <div className="flex mt-2">
              <span className="w-24 font-bold text-gray-500 shrink-0 mt-1">주소</span>
              <span className="text-gray-400 leading-[1.8]">
                <strong className="text-gray-300 font-medium">(대전 개발본부/본사)</strong> 대전광역시 서구 문정로
                148,302-1호<br />
                <strong className="text-gray-300 font-medium">(서울 사업본부)</strong> 강남구 역삼로 175, 현승빌딩 6층
                ADDD<br />
                <strong className="text-gray-300 font-medium">(Japan)</strong> 141-0022 東京都品川区東五反田2-3-5
                五反田中央ビル7F
              </span>
            </div>
          </div>

          {/* Footer Right */}
          <div className="md:text-right">
            <p className="text-gray-500 mb-8 font-medium space-x-4 text-sm">
              <span className="hover:text-white cursor-pointer transition">광고 집행</span> <span>|</span>
              <span className="hover:text-white cursor-pointer transition">매체 제휴</span> <span>|</span>
              <span className="hover:text-white cursor-pointer transition">기술문의</span>
            </p>
            <h3 className="text-2xl md:text-4xl font-bold font-inter mb-6 hover:text-primary transition duration-300 cursor-pointer text-white">
              addd.cs@addd.co.kr
            </h3>
            <p className="text-gray-400 mb-2 font-inter text-sm">
              <span className="text-gray-500 mr-2">T (KOR)</span> 02-6925-4446
            </p>
            <p className="text-gray-400 font-inter text-sm">
              <span className="text-gray-500 mr-2">T (JPN)</span> 050-8895-0272
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
          <div className="font-inter">Copyright© addd. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
