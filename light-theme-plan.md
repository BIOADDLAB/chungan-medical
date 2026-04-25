# 라이트 테마 전환 구현 계획서 (v2 — 전수 조사 완료)

> **목표**: "Tech-Premium Dark" → "Clean Medical Light"  
> Primary `#00B3E4` 시안 블루는 유지. 배경·텍스트·테두리·필터만 밝은 계열로 전환.  
> **v2 신규 사항**: 전체 소스 grep 후 기존 계획서에 누락된 인라인 패턴 전수 추가.

---

## 1. 새 디자인 토큰

| 역할 | 기존 값 | 새 값 |
|---|---|---|
| 기본 페이지 배경 | `#050810` | `#FFFFFF` |
| 기본 텍스트 | `#e2e8f0` | `#1E293B` (slate-800) |
| 섹션 배경 A (홀수) | `bg-[#020408]` | `bg-white` |
| 섹션 배경 B (짝수) | `bg-[#050810]` | `bg-sky-50` (`#F0F9FF`) |
| 카드 / 패널 배경 | `rgba(15,23,42,0.6~0.8)` | `rgba(255,255,255,0.9)` |
| Primary | `#00B3E4` | 유지 |

---

## 2. 전환 매핑 전체표

### 2-A. 섹션 배경 클래스

| 기존 | 새 값 | 적용 위치 |
|---|---|---|
| `bg-[#020408]` | `bg-white` | 섹션 배경 |
| `bg-[#050810]` | `bg-sky-50` | 섹션 배경 |
| `bg-black` | `bg-sky-50` | Footer |
| `main className="bg-[#050810]"` | `main className="bg-white"` | cellinew, contact, sylfirm-x (main 래퍼) |
| `bg-[#050810]/60 backdrop-blur-[2px]` | `bg-white/60 backdrop-blur-[2px]` | future-vision 오버레이 |
| `bg-black/40 backdrop-blur-md` | `bg-white/80 backdrop-blur-md` | 테이블 배경 (n-pulse) |

### 2-B. 인라인 카드·패널 배경 (핵심 누락 항목)

페이지 파일 내에 직접 선언된 투명 블랙 배경들은 CSS만으로 해결 불가 → 각 파일에서 직접 변경 필요.

| 기존 인라인 클래스 | 새 클래스 | 용도 |
|---|---|---|
| `bg-black/40` | `bg-white/90` | 카드, 패널, 이미지 컨테이너 |
| `bg-black/60` | `bg-white/90` | 이미지 프레임 |
| `bg-black/50` | `bg-white/90` | 패널 (glass-panel-dark 내부) |
| `bg-black/20` | `bg-sky-50/60` | 섹션 서브 배경 |
| `bg-black/10 backdrop-blur-sm` | `bg-white/50 backdrop-blur-sm` | 스크롤 버튼 |
| `bg-[#0a0c10]` | `bg-sky-50` | n-pulse 이미지 컨테이너 |
| `bg-white/5` | `bg-sky-50` | 폼 입력 배경, 버튼 배경 |
| `bg-white/[0.02]` | `bg-sky-50/60` | 미세 패널 배경 (n-pulse-prime 카드) |
| `bg-black/40 backdrop-blur-sm` | `bg-white/80 backdrop-blur-sm` | cellinew 카드 |

### 2-C. 텍스트 색상

| 기존 | 새 값 | 비고 |
|---|---|---|
| `text-white` | `text-slate-900` | 제목, 카드 헤딩 모두 |
| `text-slate-200` | `text-slate-700` | 기술 데이터 |
| `text-slate-300` | `text-slate-600` | 부제목·설명 |
| `text-slate-400` | `text-slate-500` | 보조 텍스트 |
| `text-primary` | 유지 | 강조 텍스트 |
| `.hero-title-main color: #fff` | `color: #0F172A` | globals.css |
| `nav text-white` | `text-slate-800` | Header 네비 |
| `leading-none text-white` | `text-slate-900 leading-none` | contact 섹션 |
| `placeholder:text-slate-600` | `placeholder:text-slate-400` | 폼 placeholder |
| `group-hover:text-white` | `group-hover:text-primary` | 호버 시 흰 텍스트 → primary |

### 2-D. 테두리·구분선 (핵심 누락 항목)

| 기존 | 새 값 | 빈도 |
|---|---|---|
| `border-white/20` | `border-sky-200` | 스크롤 버튼, 체크박스 |
| `border-white/10` | `border-sky-100` | 카드 테두리 (매우 빈번) |
| `border-white/5` | `border-sky-50` | 미세 패널 테두리 |
| `border-b border-white/10` | `border-b border-sky-100` | contact 폼 구분선 |
| `border-t border-white/5` | `border-t border-sky-100` | 섹션 divider (anti-pattern이나 존재함) |
| `border-t border-white/10` | `border-t border-sky-100` | contact 폼 영역 구분 |
| `hover:border-white/20` | `hover:border-sky-200` | 폼 입력 hover |
| `border-primary/30` | 유지 | 배지 테두리 |
| `border-primary/20` | 유지 | 테이블 테두리 |

### 2-E. 이미지 그림자 (Drop Shadow)

| 기존 | 새 값 | 위치 |
|---|---|---|
| `drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]` | `drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]` | n-pulse 장비 이미지 |
| `drop-shadow-[0_20px_50px_rgba(0,183,241,0.2)]` | 유지 | primary 글로우 드롭섀도 |
| `shadow-[0_20px_50px_rgba(0,0,0,0.5)]` | `shadow-[0_10px_30px_rgba(0,0,0,0.08)]` | future-vision glass-panel |
| `box-shadow: 0 4px 30px rgba(0,0,0,0.5)` | `0 4px 20px rgba(0,0,0,0.08)` | globals.css glass-panel |

### 2-F. Framer Motion 인라인 애니메이션 값 (n-pulse)

| 기존 initial/animate | 새 값 |
|---|---|
| `initial: { boxShadow: "0 4px 30px rgba(0,0,0,0.5)" }` | `"0 4px 20px rgba(0,0,0,0.08)"` |
| `animate: { boxShadow: "0 0 50px rgba(0,183,241,0.6)" }` | 유지 (밝은 배경에서도 OK) |

### 2-G. 배경 텍스처 & 블렌딩

| 기존 | 새 값 | 이유 |
|---|---|---|
| `mix-blend-screen` (tech-grid/dots) | `mix-blend-multiply` | screen은 어두운 배경 전용 |
| `.bg-tech-grid` 라인 `rgba(0,183,241,0.05)` | `rgba(0,183,241,0.10)` | 밝은 배경에서 더 진하게 |
| `.bg-tech-dots` 점 `rgba(0,183,241,0.15)` | `rgba(0,183,241,0.12)` | 과하지 않게 |

### 2-H. 이미지 필터 (로고류)

| 기존 | 새 값 | 위치 |
|---|---|---|
| `brightness-0 invert` (헤더 로고 unscrolled) | `brightness-0 invert` 유지 | Hero(어두운 배경) 위이므로 OK |
| `brightness-0 invert` (헤더 로고 scrolled) | `brightness-0` | 흰 헤더 위 → 검정 로고 |
| `brightness-0 invert` (Footer 로고) | Footer 색상 결정 후 결정 | 하단 참조 |
| `.product-maker-logo-img: brightness(0) invert(1) opacity(0.6)` | `brightness(0) opacity(0.5)` | 흰 배경 위 다크 로고 |
| `.product-footer-logo-img: brightness(0) invert(1) opacity(0.9)` | `brightness(0) opacity(0.7)` | |
| `.partner-marquee img: brightness(0) invert(1) opacity(0.4)` | `brightness(0) opacity(0.35)` | |
| `.partner-marquee img hover: brightness(0) invert(1) opacity(1)` | `brightness(0) opacity(0.8)` | |

### 2-I. Glass Panel 관련 (CSS + 인라인 혼재)

| 기존 | 새 값 |
|---|---|
| `.glass-panel { background: rgba(5,8,16,0.6) }` | `rgba(255,255,255,0.80)` |
| `.glass-panel { border: 1px solid rgba(0,183,241,0.2) }` | 유지 |
| `.glass-panel { box-shadow: 0 4px 30px rgba(0,0,0,0.5) }` | `0 4px 20px rgba(0,0,0,0.08)` |
| `glass-panel bg-black/40` (인라인 override) | `glass-panel bg-white/90` | bg-black/40이 CSS를 덮어씌우므로 직접 변경 필요 |
| `glass-panel border-white/5` (인라인 border override) | `glass-panel border-sky-100` | |
| `glass-panel border-white/10` (인라인 border override) | `glass-panel border-sky-100` | |
| `.glass-panel-dark` (CSS에 미정의, 인라인 사용) | globals.css에 **신규 추가** 필요 (하단 참조) |

### 2-J. 콘솔·기울기·원형 특수 요소

| 기존 | 새 값 | 위치 |
|---|---|---|
| `rounded-xl border border-white/10 bg-black/40` | `rounded-xl border border-sky-100 bg-white/90` | n-pulse 장비 비교 카드 |
| `rounded-full bg-[#020408]` (원형 UI) | `rounded-full bg-white` | n-pulse-prime 원형 인터페이스 |
| `bg-gradient-to-br from-white/10 via-transparent to-transparent` | `from-sky-100/40 via-transparent to-transparent` | n-pulse indication 이미지 링 |
| `bg-black/40 backdrop-blur-md px-3 py-1 border border-primary/30` | `bg-white/80 backdrop-blur-md` | future-vision 뱃지 |

### 2-K. 폼 요소 (contact/page.tsx — 별도 처리)

| 기존 | 새 값 |
|---|---|
| `bg-white/5 border border-white/10` (input) | `bg-white border border-sky-200` |
| `focus:border-primary focus:ring-primary/20` | 유지 |
| `hover:border-white/20` | `hover:border-primary/40` |
| `text-white` (input 텍스트) | `text-slate-900` |
| `placeholder:text-slate-600` | `placeholder:text-slate-400` |
| `bg-white/5 border border-white/10` (파일 업로드 버튼) | `bg-sky-50 border border-sky-200` |
| `appearance-none border border-white/20 rounded bg-white/5` (체크박스) | `border border-sky-200 bg-white` |
| `border-b border-white/10` (폼 구분선) | `border-b border-sky-100` |
| `border-t border-white/10` (폼 영역 구분) | `border-t border-sky-100` |
| `text-slate-400 group-hover:text-white` (체크박스 라벨) | `text-slate-500 group-hover:text-slate-900` |

---

## 3. globals.css 수정 항목 전체

```css
/* ① 루트 변수 */
--background: #050810 → #FFFFFF
--foreground: #e2e8f0 → #1E293B

/* ② .glass-panel */
background: rgba(5,8,16,0.6) → rgba(255,255,255,0.80)
box-shadow: 0 4px 30px rgba(0,0,0,0.5) → 0 4px 20px rgba(0,0,0,0.08)

/* ③ glass-panel-dark (신규 추가) */
.glass-panel-dark {
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0,183,241,0.15);
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

/* ④ .hero-title-main */
color: #ffffff → #0F172A
text-shadow 제거

/* ⑤ .site-header-scrolled */
background-color: rgba(5,8,16,0.85) → rgba(255,255,255,0.92)
(shadow 추가: box-shadow: 0 1px 20px rgba(0,0,0,0.08))

/* ⑥ .product-section::before 상단 라인 */
유지

/* ⑦ .product-card */
background: rgba(15,23,42,0.6) → rgba(255,255,255,0.92)
border: rgba(255,255,255,0.05) → rgba(0,183,241,0.15)
:hover box-shadow: 0 0 20px rgba(0,183,241,0.15), 0 10px 30px rgba(0,0,0,0.06)

/* ⑧ .product-card-footer */
border-top: dashed rgba(255,255,255,0.1) → dashed rgba(0,183,241,0.2)

/* ⑨ .product-machine-img filter */
drop-shadow(0 10px 15px rgba(0,0,0,0.5)) → drop-shadow(0 10px 15px rgba(0,0,0,0.10))

/* ⑩ .product-nav-btn */
background: rgba(255,255,255,0.05) → rgba(0,183,241,0.08)
border: rgba(255,255,255,0.1) → rgba(0,183,241,0.2)
color: white → #1E293B

/* ⑪ .product-maker-logo-img / .product-footer-logo-img */
brightness(0) invert(1) → brightness(0)

/* ⑫ .cn-plus-symbol (ConsultingOrbit) */
background: rgba(5,8,16,0.9) → rgba(255,255,255,0.95)

/* ⑬ .orbit-item */
background: rgba(15,23,42,0.8) → rgba(255,255,255,0.92)
color: #fff → #1E293B
:hover background: rgba(0,183,241,0.15) 유지

/* ⑭ .consulting-orbit-path::before */
border: rgba(255,255,255,0.05) → rgba(0,183,241,0.08)

/* ⑮ .partners-marquee-container */
background-color: #020408 → #F0F9FF
box-shadow: inset 0 0 50px rgba(0,0,0,0.8) → 제거
::before gradient: from #030508 → from #F0F9FF

/* ⑯ .partner-marquee img filter */
brightness(0) invert(1) opacity(0.4) → brightness(0) opacity(0.35)
:hover → brightness(0) opacity(0.8)

/* ⑰ .swiper-pagination-bullet */
background: rgba(255,255,255,0.25) → rgba(0,183,241,0.25)
border: rgba(255,255,255,0.1) → rgba(0,183,241,0.2)

/* ⑱ .bg-tech-grid */
라인 색: rgba(0,183,241,0.05) → rgba(0,183,241,0.10)

/* ⑲ .text-glow, .text-glow-primary */
opacity 70% 감소 (밝은 배경에서 글로우 약화)

/* ⑳ .nav-link.is-active */
유지 (text-primary + text-shadow)
```

---

## 4. 파일별 수정 범위

### 4-1. `src/components/layout/Header.tsx`

```
① 로고 조건부 필터:
   scrolled=false: brightness-0 invert (흰 로고 — Hero 이미지 위)
   scrolled=true:  brightness-0       (검정 로고 — 흰 헤더 위)

② Nav 링크: text-white → text-slate-800
③ 드롭다운 패널: bg-[#020408]/95 → bg-white/95, text-white → text-slate-800
④ 모바일 메뉴 패널: bg-[#020408] → bg-white, text-white → text-slate-800
⑤ 모바일 메뉴 버튼: text-white → text-slate-800
```

### 4-2. `src/components/layout/Footer.tsx`

```
방침: Footer는 bg-slate-900 유지 (어두운 마감이 전체 리듬에 자연스러움)
→ 기존 코드 변경 없음. 단, 로고 brightness-0 invert 유지.
```

### 4-3. `src/components/home/HeroSlider.tsx`

```
① 슬라이드 background: bg-[#020408] → bg-sky-50
② 오버레이 그라디언트:
   from-[#050810]/18 via-[#050810]/18 to-[#050810]/38
   → from-sky-50/15 via-sky-50/10 to-sky-50/30
③ bg-[#050810]/42 → bg-sky-50/30
④ mix-blend-screen → mix-blend-multiply
⑤ 스크롤 버튼:
   border-white/20 → border-slate-300
   bg-black/10 → bg-white/50
   text-white (아이콘) → text-slate-700
```

### 4-4. `src/components/home/AboutSection.tsx`

```
① bg-[#020408] → bg-white
② 오버레이: from-[#050810]/80 ~ to-[#050810]/60
   → from-white/70 via-white/30 to-white/50
③ bg-tech-dots mix-blend-screen → mix-blend-multiply
④ glass-panel: globals.css에서 처리됨
⑤ 모든 text-white → text-slate-900
⑥ text-slate-300/400 → text-slate-600/500
```

### 4-5. `src/components/home/ProductLineup.tsx`

```
① 섹션 배경: globals.css product-section에서 처리됨
② 섹션 제목 text-white → text-slate-900
```

### 4-6. `src/components/home/ConsultingOrbit.tsx`, `TheraTalkSection.tsx`, `PartnerMarquee.tsx`

```
① 섹션 배경: bg-[#020408] → bg-white 또는 bg-sky-50 (교번)
② text-white → text-slate-900
③ PartnerMarquee: globals.css에서 처리됨
```

---

### 4-7. `src/app/sylfirm-x/page.tsx`

```
① main className bg-[#050810] → bg-white
② 모든 섹션 bg-[#050810] → bg-white / bg-sky-50 교번
③ mix-blend-screen → mix-blend-multiply
④ text-white → text-slate-900
⑤ bg-black/40 rounded-lg → bg-sky-50 rounded-lg (CW/PW 파형 컨테이너)
⑥ bg-black/20 → bg-sky-50/60
⑦ border-white/5 → border-sky-100
⑧ glass-panel 인라인 override 없음 → globals.css로 처리됨
⑨ hover:bg-primary/10 — 유지
```

### 4-8. `src/app/cellinew/page.tsx`

```
① main className bg-[#050810] → bg-white
② 모든 섹션 bg-[#050810] → 교번 배경
③ bg-black/40 backdrop-blur-sm border-primary/20 (카드)
   → bg-white/90 backdrop-blur-sm border-primary/20
④ shadow-[0_5px_20px_rgba(0,0,0,0.3)] → shadow-[0_5px_20px_rgba(0,0,0,0.06)]
⑤ text-white → text-slate-900
⑥ border-white/5 → border-sky-100
```

### 4-9. `src/app/n-pulse/page.tsx` (Canvas 포함)

```
① Canvas 애니메이션 strokeStyle:
   rgba(0,196,184,0.1~0.9) → rgba(0,179,228,0.15~0.9)
   (teal → primary 색상으로 변경 + 최소 opacity 0.1→0.15 로 가시성 향상)
   
   ※ Canvas는 검정 배경(clearRect 미사용)인지 확인 필요
   → clearRect 없이 fillRect로 배경을 칠하면 변경 필요
   → ctx.fillStyle = 'rgba(2,4,8,0.3)' 같은 코드 → 'rgba(255,255,255,0.3)'

② bg-black/40 인라인 (다수) → bg-white/90
③ border border-white/10 (다수) → border border-sky-100
④ bg-[#0a0c10] → bg-sky-50
⑤ glass-panel bg-black/40 → glass-panel bg-white/90
⑥ glass-panel-dark → globals.css 신규 정의로 처리됨
⑦ drop-shadow rgba(0,0,0,0.9) → rgba(0,0,0,0.12)
⑧ Framer Motion initial boxShadow rgba(0,0,0,0.5) → rgba(0,0,0,0.08)
⑨ rounded-full 비교 카드: border-white/10 bg-black/40 → border-sky-100 bg-white/90
⑩ bg-gradient-to-br from-white/10 → from-sky-100/40
⑪ bg-black/60 이미지 프레임 → bg-white border-sky-100
```

### 4-10. `src/app/n-pulse-prime/page.tsx`

```
① 섹션 배경 교번 (bg-[#020408] → white/sky-50)
② bg-[#050810] 이미지 컨테이너 → bg-sky-50
③ bg-[#020408] 원형 UI → bg-white
④ border-white/10 → border-sky-100
⑤ glass-panel border-white/5 bg-white/[0.02] → border-sky-100 bg-sky-50/60
⑥ text-white 헤딩/카드 → text-slate-900
⑦ text-[120px] text-white → text-slate-100 (데코용 워터마크 텍스트)
⑧ 원형 shadow-[0_0_60px_rgba(0,183,241,0.25)] → 유지
```

### 4-11. `src/app/future-vision/page.tsx`

```
① 섹션 배경 교번
② bg-[#050810]/60 backdrop-blur-[2px] → bg-white/60 backdrop-blur-[2px]
③ bg-black/40 backdrop-blur-md (뱃지) → bg-white/80 backdrop-blur-md
④ glass-panel border-white/10 → border-sky-100 (인라인 override)
⑤ border-t border-white/5 → border-sky-100
⑥ shadow-[0_20px_50px_rgba(0,0,0,0.5)] → rgba(0,0,0,0.08)
⑦ text-white → text-slate-900
```

### 4-12. `src/app/contact/page.tsx`

```
① main bg-[#050810] → bg-white
② bg-[#050810] text-white 섹션 → bg-white text-slate-900
③ 폼 input:
   bg-white/5 border border-white/10 → bg-white border border-sky-200
   text-white → text-slate-900
   placeholder:text-slate-600 → placeholder:text-slate-400
   hover:border-white/20 → hover:border-primary/40
④ 체크박스:
   border-white/20 bg-white/5 → border-sky-200 bg-white
⑤ 파일 업로드 버튼:
   bg-white/5 border-white/10 → bg-sky-50 border-sky-200
   text-primary → 유지
⑥ 구분선:
   border-b border-white/10 → border-b border-sky-100
   border-t border-white/10 → border-t border-sky-100
⑦ 체크박스 라벨:
   text-slate-400 group-hover:text-white → text-slate-500 group-hover:text-slate-900
⑧ glass-panel (문의 패널) → globals.css로 처리됨
```

### 4-13. 나머지 제품 페이지 (pico-k, u-pulse, u-pulse-dual, v-ro-advance)

공통 패턴만 존재하므로 아래 일괄 처리:

```
① 섹션 배경: bg-[#020408]/bg-[#050810] → white/sky-50 교번
② mix-blend-screen → mix-blend-multiply
③ text-white → text-slate-900 (카드 헤딩, 섹션 타이틀 모두)
④ border-white/10 → border-sky-100
⑤ border-white/5 → border-sky-50
⑥ 섹션 구분선 border-t border-white/5 → border-sky-100
⑦ glass-panel override (border-white/5 등) 직접 교체
⑧ Hero 오버레이: from-[#050810]/30 to-[#050810]/70 → from-sky-50/20 to-sky-50/50
⑨ 스펙 테이블: bg-[#050810] 헤더행 → bg-sky-100, 텍스트 text-slate-700
⑩ 스크롤 버튼: border-white/20 bg-black/10 → border-slate-300 bg-white/50
```

---

## 5. 작업 순서

```
Step 1: globals.css 수정 (glass-panel-dark 신규 추가 포함)
         → 전체 70% 자동 처리

Step 2: Header.tsx — 로고 조건부 필터 처리 (핵심)

Step 3: 홈 컴포넌트 6개 순서대로
         HeroSlider → AboutSection → ProductLineup → ConsultingOrbit → TheraTalk → PartnerMarquee

Step 4: 단순 패턴 제품 페이지 (pico-k, u-pulse, u-pulse-dual, v-ro-advance)
         — 병렬 처리 가능

Step 5: 특수 케이스 순서대로
         sylfirm-x → cellinew → future-vision → contact → n-pulse-prime → n-pulse (Canvas 마지막)

Step 6: orchestration.md 디자인 시스템 섹션 업데이트

Step 7: 시각적 QA
         - mix-blend 잔재: grep -r "mix-blend-screen" src/ 로 재확인
         - 인라인 다크: grep -r "bg-black\|020408\|050810\|0a0c10" src/ 로 잔재 확인
         - text-white 잔재: grep -r "text-white" src/app/ 로 확인 (text-primary 제외)
         - 로고 필터 각 페이지 확인
```

---

## 6. 잠재 리스크

| 리스크 | 내용 | 대응 |
|---|---|---|
| **Canvas 배경 칠 방식** | n-pulse Canvas가 clearRect 없이 dark fillRect로 배경을 칠하면 밝은 배경 위에 검정 사각형이 생김 | Canvas 함수 내 fillStyle 전수 확인 및 transparent/white로 교체 |
| **로고 가시성** | Hero unscrolled(이미지 위) = 흰 로고 OK, scrolled(흰 헤더) = 검정 로고 필요 | scrolled 조건부 className 분기 |
| **glass-panel 인라인 bg override** | `glass-panel bg-black/40`처럼 인라인으로 배경을 덮어쓴 요소는 CSS 변경만으로 안 잡힘 | 각 파일에서 직접 `bg-white/90`으로 교체 |
| **mix-blend-screen 잔재** | 페이지 파일에서 직접 선언된 것은 grep으로만 발견 가능 | `grep -r "mix-blend-screen" src/` |
| **워터마크 데코 텍스트** | `text-[120px] text-white/[0.02]` 같은 극히 투명한 텍스트 → 밝은 배경에서 안 보임 | `text-slate-200/40` 수준으로 교체 |
| **파트너 로고 원본** | 원본 로고가 밝은 색이면 `brightness(0)` 적용 시 검정 처리됨 — 정상 | 원본이 흰색인 로고는 가시성 확인 필요 |

---

_작성일: 2026-04-25 | v2 (전수 코드 조사 완료) | 대상: 구현 전담 에이전트_
