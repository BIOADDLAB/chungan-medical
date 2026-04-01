document.addEventListener("DOMContentLoaded", () => {
    // 1. 스크롤 애니메이션 (Reveal Up)
    const revealItems = document.querySelectorAll('.reveal-up');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1 
    });

    revealItems.forEach(item => {
        item.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
        revealObserver.observe(item);
    });

    // 2. 헤더 스크롤 상태 및 네비게이션 액티브 처리
    const header = document.getElementById('header');
    const sections = document.querySelectorAll("main section[id], footer[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const scrollObserver = () => {
        // 헤더 배경 토글
        if (window.scrollY > 50) {
            header.classList.add('site-header-scrolled');
        } else {
            header.classList.remove('site-header-scrolled');
        }

        // 현재 위치 기반 네비게이션 하이라이트
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('is-active', '!text-primary');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('is-active', '!text-primary');
            }
        });
    };

    window.addEventListener('scroll', scrollObserver);
    scrollObserver(); // 초기 실행


    // 3. 고객사 로고 무한 롤링 슬라이드 (Marquee Swiper)
    const marqueeWrapper = document.querySelector('.customer-marquee .swiper-wrapper');
    if (marqueeWrapper) {
        // 루프를 위해 슬라이드 2배 복제
        marqueeWrapper.innerHTML += marqueeWrapper.innerHTML;
    }
    
    if (typeof Swiper !== 'undefined' && document.querySelector('.customer-marquee')) {
        new Swiper(".customer-marquee", {
            spaceBetween: 100,
            centeredSlides: true,
            speed: 5000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: false, 
        });
    }

    // 4. 히어로 섹션 스와이퍼 (3개 탭, 자동 페이드)
    if (typeof Swiper !== 'undefined' && document.querySelector('.hero-swiper')) {
        new Swiper(".hero-swiper", {
            speed: 1500,
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            on: {
                slideChangeTransitionStart: function () {
                    this.slides.forEach(slide => {
                        const reveals = slide.querySelectorAll('.reveal-up');
                        reveals.forEach(r => {
                            r.classList.remove('opacity-100', 'translate-y-0');
                            r.classList.add('opacity-0', 'translate-y-8');
                        });
                    });
                },
                slideChangeTransitionEnd: function () {
                    const activeSlide = this.slides[this.activeIndex];
                    const reveals = activeSlide.querySelectorAll('.reveal-up');
                    reveals.forEach((r, i) => {
                        setTimeout(() => {
                            r.classList.add('opacity-100', 'translate-y-0');
                            r.classList.remove('opacity-0', 'translate-y-8');
                        }, i * 150);
                    });
                }
            }
        });
    }

    // 5. 장비 라인업 Product Swiper (최대 4개, 커스텀 ← → 버튼)
    if (typeof Swiper !== 'undefined' && document.querySelector('.product-swiper')) {
        new Swiper(".product-swiper", {
            speed: 1000, // 전환 속도 1초로 늦춤
            slidesPerView: 4,
            slidesPerGroup: 4, 
            slidesPerGroupSkip: 0,
            spaceBetween: 30,
            grabCursor: true,
            roundLengths: true,
            centerInsufficientSlides: true,
            watchSlidesProgress: true,

            // 반응형: 화면 크기별 표시 개수 변경
            breakpoints: {
                0:    { slidesPerView: 1.2, slidesPerGroup: 1, spaceBetween: 16 },
                480:  { slidesPerView: 2,   slidesPerGroup: 2, spaceBetween: 20 },
                768:  { slidesPerView: 3,   slidesPerGroup: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4,   slidesPerGroup: 4, spaceBetween: 30 },
            },

            // 커스텀 버튼(.product-prev, .product-next)과 연결
            navigation: {
                prevEl: ".product-prev",
                nextEl: ".product-next",
                disabledClass: "swiper-button-disabled",
            },

            // 초기화 및 슬라이드 변경 시 버튼 상태 갱신
            on: {
                init: function () { syncProductNavBtns(this); },
                slideChange: function () { syncProductNavBtns(this); }
            }
        });
    }

    /**
     * 커스텀 Prev/Next 버튼의 disabled 클래스 동기화
     * - Swiper 내부 isBeginning / isEnd 상태 기반으로 처리
     */
    function syncProductNavBtns(swiper) {
        const prev = document.querySelector('.product-prev');
        const next = document.querySelector('.product-next');
        if (!prev || !next) return;

        swiper.isBeginning
            ? prev.classList.add('swiper-button-disabled')
            : prev.classList.remove('swiper-button-disabled');

        swiper.isEnd
            ? next.classList.add('swiper-button-disabled')
            : next.classList.remove('swiper-button-disabled');
    }

    // 6. 파트너사 무한 롤링 (Partner Marquee - Two Rows)
    const initMarquee = (selector, isReverse = false, speed = 8000) => {
        if (document.querySelector(selector)) {
            new Swiper(selector, {
                speed: speed,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: isReverse
                },
                loop: true,
                slidesPerView: 'auto',
                allowTouchMove: false,
                freeMode: true,
                // 루프 슬라이드 수를 실제 개수(24) 이상으로 설정하여 정지 현상 방지
                loopedSlides: 30, 
                observer: true,
                observeParents: true,
            });
        }
    };

    initMarquee(".partner-marquee-1", false, 8000);
    initMarquee(".partner-marquee-2", true, 10000); // 2행 역방향
});
