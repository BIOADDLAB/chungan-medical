# 청안메디칼 디자인 시스템 & 코드 규칙 문서
> Last Updated: 2026-04-08

---

## 1. 브랜드 컨셉

**"Tech-Premium Dark"**
고급스러운 극도로 어두운 배경 위에 테크니컬한 시안 블루 포인트를 올리는 스타일.
의료 장비 브랜드의 신뢰감과 최첨단 기술 이미지를 동시에 전달.

---

## 2. 색상 시스템 (Design Tokens)

### CSS 변수 (`globals.css`)
```css
--color-primary: #00B3E4;   /* 시안 블루 — 포인트 컬러 전반 */
--color-dark:   #050810;    /* 메인 배경색 (Deep Tech Blue-Black) */
--color-light:  #F9F9F9;    /* 밝은 텍스트용 (거의 미사용) */
--background:   #050810;    /* body 배경 */
--foreground:   #e2e8f0;    /* body 기본 텍스트 */
--primary-glow: 0 0 20px rgba(0,179,228,0.5), 0 0 40px rgba(0,179,228,0.2);
--tech-border:  1px solid rgba(0,179,228,0.3);
```

### Tailwind 색상 토큰 매핑
| 용도 | Tailwind 클래스 | 실제 색상 |
|---|---|---|
| 섹션 배경 (기본) | `bg-[#050810]` | Deep Blue-Black |
| 섹션 배경 (진한) | `bg-[#020408]` | Near-Black |
| 포인트 컬러 | `text-primary` / `bg-primary` | `#00B3E4` |
| 메인 흰 텍스트 | `text-white` | `#FFFFFF` |
| 기술 정보 텍스트 | `text-slate-200` / `text-slate-300` | 고대비 회색 |
| 본문 설명 텍스트 | `text-slate-400` | 중채도 회색 |
| 포인트 보더 | `border-primary/30` | 연한 블루 테두리 |

> ⚠️ `#020408` 과 `#050810` 을 혼용함. `#050810` 이 표준 배경이고,
> `#020408` 은 Product 섹션·HeroSlider처럼 더 어두워야 할 때 사용.

---

## 3. 타이포그래피

### 폰트 (`layout.tsx`)
```tsx
// Noto Sans KR: 한글 기본체 (한국어 본문/제목)
Noto_Sans_KR — weight: 400, 500, 700, 800
CSS Variable: --font-noto-sans-kr

// Inter: 영문 기술 데이터/레이블
Inter — weight: 400, 500, 700, 800
CSS Variable: --font-inter

// font-sans → Noto Sans KR → Inter → sans-serif 순서로 fallback
```

### Hero 타이틀 클래스 (`globals.css`)
```css
/* .hero-title: 제품 페이지 Hero H1의 컨테이너 클래스 */
font-size: clamp(2.9rem, 6vw, 5.75rem);  /* 반응형 */
font-weight: 800;
line-height: 1.2;
letter-spacing: -0.06em;
text-align: center;

/* 모바일 (max-width: 768px) */
font-size: clamp(2.4rem, 10vw, 3.75rem);
letter-spacing: -0.05em;
```

### Hero 텍스트 컬러 클래스
```tsx
// 흰색 제목 (기본)
<span className="hero-title-main uppercase">PRODUCT NAME</span>
// → color: #fff, text-shadow: 0 10px 40px rgba(0,0,0,0.35)

// 시안 강조 (포인트 단어)
<span className="hero-title-highlight uppercase">KEYWORD</span>
// → color: #00b7f1, text-shadow: 0 0 10px rgba(0,183,241,0.35)
```

### 섹션 내 타이틀
```tsx
// H2 표준 (섹션 타이틀)
<h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
  <span className="hero-title-main">WHITE PART</span>
  <span className="hero-title-highlight">BLUE PART</span>
</h2>

// 파란 강조 (hero-title-highlight 말고 일반 텍스트 내 강조용)
<span className="text-primary font-black">강조 키워드</span>

// 기술 데이터 (스펙 표 수치)
<span className="text-base font-black tracking-tight">532 nm</span>
```

---

## 4. 컴포넌트 패턴 (재사용 규격)

### 4-1. 섹션 배지 (Standard Badge)
```tsx
<div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">
  SECTION LABEL
</div>
```
- `mb-6`: 배지 → 타이틀 간격

### 4-2. 하이테크 발광 막대 (Accent Bar)
```tsx
{/* 섹션 타이틀 하단 (Shadow 없음) */}
<div className="w-20 h-[2px] bg-primary mb-8" />

{/* Hero 내부 전용 (Shadow 있음 — Hero 한정 허용) */}
<div className="w-16 h-[2px] bg-primary mb-6 shadow-[0_0_15px_rgba(0,183,241,0.5)]" />

{/* Hero 슬라이더 애니메이션 발광선 */}
<motion.div
  initial={{ opacity: 0, width: 0 }}
  whileInView={{ opacity: 1, width: 'clamp(72px, 7vw, 128px)' }}
  transition={{ duration: 0.8 }}
  className="hero-accent-line mb-10"
/>
```

### 4-3. TECH 스캔 라인 (섹션 구분선 대체)
```tsx
<div className="flex items-center gap-4 mb-14 relative overflow-hidden">
  <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap uppercase leading-none">
    TECH 01
  </span>
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    style={{ originX: 0 }}
    className="h-[1px] w-full bg-gradient-to-r from-primary/60 via-primary/10 to-transparent"
  />
</div>
```
- `mb-14`: 스캔 라인 → 본문 컨텐츠 간격 (표준)

### 4-4. Glass Panel (카드/패널)
```tsx
<div className="glass-panel p-6 ...">
  {/* 내용 */}
</div>
```
**`.glass-panel` CSS:**
```css
background: rgba(5, 8, 16, 0.6);
backdrop-filter: blur(16px);
border: 1px solid rgba(0, 183, 241, 0.2);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
```

### 4-5. Specification Table (U-PULSE 표준)
```tsx
<div className="overflow-x-auto no-scrollbar">
  <table className="w-full min-w-[600px]">
    <thead>
      <tr>
        <th className="text-[10px] font-black tracking-[0.4em] text-primary/70 whitespace-nowrap">
          SPEC LABEL
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-base font-black tracking-tight whitespace-nowrap">
          532 nm / 1064 nm
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
> 규칙: 모든 데이터 셀에 **`whitespace-nowrap`** 필수 → 한 줄 유지

### 4-6. Detailed Feature Cards (Sylfirm-X 표준)
```tsx
<div className="glass-panel p-6">
  {/* 고정 높이 헤더 — 카드 간 수평 정렬 유지 */}
  <div className="h-[70px] flex items-center justify-center">
    <span className="text-primary font-black text-sm tracking-widest">FEATURE</span>
  </div>
  <div className="border-t border-primary/20 pt-4">
    {/* 불렛 아이템 */}
    <div className="flex items-start gap-3">
      {/* 불렛 도트 — 첫 줄 중앙 정렬 래퍼 */}
      <div className="flex items-center h-[21px] shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      </div>
      <p className="text-slate-300 text-sm">설명 텍스트</p>
    </div>
  </div>
</div>
```

### 4-7. 배경 텍스처 오버레이
```tsx
{/* Tech Grid — 섹션 배경 미세 격자 */}
<div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

{/* Tech Dots — 점 패턴 */}
<div className="absolute inset-0 bg-tech-dots opacity-20 mix-blend-screen pointer-events-none" />

{/* 앰비언트 글로우 — 섹션마다 1개 허용 */}
<div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 blur-[130px] rounded-full pointer-events-none" />
```

### 4-8. 스크롤 유도 버튼 (공통)
```tsx
<div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
  <Link
    href="#next-section"
    aria-label="Scroll down"
    className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-300 animate-bounce group shadow-2xl bg-black/10 backdrop-blur-sm"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white group-hover:text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </Link>
</div>
```

---

## 5. 레이아웃 & 스페이싱 규칙

### 페이지 최대 너비
```tsx
<div className="max-w-screen-xl mx-auto px-6">
```

### 섹션 패딩
| 섹션 크기 | 클래스 |
|---|---|
| 대형 (Hero·핵심 정보) | `py-28` |
| 중형 | `py-24` |

### 타이틀 블록 간격 (순서대로)
```
배지 (Badge)         → mb-6
H2 타이틀            → mb-6
발광 막대 (AccentBar) → mb-8
본문 설명 (p)         → mb-12
──────────────────────────────
전체 타이틀 블록 → 하단 컨텐츠: mb-14
```

### 그리드 레이아웃
```tsx
{/* 2열 기본 (텍스트 + 이미지) */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

{/* 2열 (텍스트 많을 때) */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

{/* 수가 테이블 (4:8 비율) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
  <div className="lg:col-span-4"> {/* 단독 하이라이트 */} </div>
  <div className="lg:col-span-8"> {/* 상세 수가 리스트 */} </div>
</div>
```

---

## 6. 애니메이션 표준 (Framer Motion)

### 등장 애니메이션 (표준)
```tsx
// 스크롤 등장 (모든 섹션 컨텐츠 기본)
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

// 좌측에서 등장 (텍스트 컬럼)
initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}

// Hero 제목 (페이지 로드 시 — whileInView 아닌 animate)
initial={{ opacity: 0, y: 30, scale: 0.95 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
transition={{ duration: 0.8, delay: 0.2 }}
```

### 스캔 라인 Easing
```tsx
// TECH 스캔 라인 전용 (부드러운 슬라이드)
transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
style={{ originX: 0 }}
```

### CSS 애니메이션 유틸
| 클래스 | 동작 |
|---|---|
| `animate-bounce` | 스크롤 유도 버튼 상하 바운스 |
| `animate-float` | 6초 상하 부유 (30px 진폭) |
| `animate-pulse-light` | 3초 opacity + 글로우 펄스 |
| `reveal-up` + `is-visible` | JS 기반 스크롤 reveal (CSS) |

---

## 7. CSS 유틸 클래스 목록

| 클래스 | 용도 |
|---|---|
| `.glass-panel` | 반투명 블러 카드 패널 |
| `.bg-tech-grid` | 40px 격자 배경 |
| `.bg-tech-dots` | 20px 점 패턴 배경 |
| `.text-glow` | 약한 시안 글로우 (text-shadow) |
| `.text-glow-primary` | 강한 시안 글로우 |
| `.text-glow-white` | 흰 글로우 |
| `.hero-accent-line` | Hero 발광 수평선 (2px, 글로우 포함) |
| `.hero-title` | Hero H1 폰트 기본 설정 |
| `.hero-title-main` | 흰 Hero 텍스트 |
| `.hero-title-highlight` | 시안 Hero 텍스트 |
| `.tech-border-l` | 왼쪽 시안 2px 보더 + 흰 스파크 |
| `.product-card` | 제품 카드 (hover: 시안 보더 + 부상) |
| `.product-machine-img` | 장비 이미지 (240px, contain) |
| `.product-nav-btn` | Swiper 기울어진 nav 버튼 |
| `.site-header-scrolled` | 스크롤 시 헤더 반투명 블러 |
| `.nav-link.is-active` | 활성 네비 링크 시안 색상 |
| `.reveal-up` / `.is-visible` | IntersectionObserver 기반 reveal |

---

## 8. 헤더 구조

```
높이: h-20 (80px), fixed top-0, z-50
최대너비: max-w-screen-xl mx-auto px-6

[로고 (w-64)] ─── [nav 링크 5개] ─── [KOR 언어 (w-64)]

스크롤 전: 완전 투명
스크롤 50px+: .site-header-scrolled (bg rgba(5,8,16,0.85) + blur(12px))

제품소개 드롭다운:
- hover:group 으로 표시
- bg-[#111111]/95 backdrop-blur-md border border-[#333] rounded-xl
- 각 항목: border-b border-[#222]
```

**네비게이션 항목:**
```
회사소개 → /#about
제품소개 (드롭다운) → /pico-k, /u-pulse, /n-pulse, /sylfirm-x, /cellinew, /v-ro-advance
미래비전 → /#customers
contact  → /contact
```

---

## 9. 페이지 구조 (제품 페이지 표준)

```
① Hero Section            — h-screen, 배경 이미지 + tech-grid 오버레이
   ├─ H1 (hero-title)
   ├─ Accent Bar (발광선)
   ├─ 부제 텍스트
   └─ 스크롤 유도 버튼

② Overview Section        — py-28, 2열 그리드
   ├─ 배지 → H2 → AccentBar → 설명
   └─ 제품 이미지 / 장비 이미지

③ Technology Section      — TECH 스캔 라인 + 핵심 기능
   └─ Feature Cards (glass-panel)

④ Specification Section   — 스펙 테이블 (overflow-x-auto)

⑤ Pricing / 수가 Section  — lg:grid-cols-12 (4:8 비율)

⑥ CTA / Contact Section   — 문의 유도
```

---

## 10. 이미지 처리 규칙

```tsx
// 배경 이미지 (Unsplash 사용 중)
className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 brightness-[0.6] contrast-[1.05]"

// 그라디언트 오버레이 (배경 이미지 위)
className="absolute inset-0 bg-gradient-to-b from-[#050810]/30 via-transparent to-[#050810]/70 z-10"

// 로고 이미지 (흑백 반전)
className="brightness-0 invert opacity-60 group-hover:opacity-100 transition"

// 파트너 로고 마퀴 (흑백 반전 + 반투명)
filter: brightness(0) invert(1) opacity(0.4);
hover: opacity(1) + drop-shadow(0 0 8px rgba(255,255,255,0.5))

// 제품 장비 이미지
className="product-machine-img"  /* height:240px, object-fit:contain */
```

---

## 11. 절대 금지 (Anti-Patterns)

| 금지 항목 | 이유 |
|---|---|
| `italic` (기울임꼴) | 브랜드 톤과 맞지 않음 |
| `border-t` 섹션 구분선 | 여백·배경색으로만 구분 (리스트 내부 제외) |
| 텍스트에 강한 `box-shadow` 직접 적용 | 사각형 잔상 아티팩트 발생 |
| `whiteSpace` 없는 스펙 테이블 셀 | 데이터가 줄바꿈되어 레이아웃 깨짐 |
| 스펙 테이블에 `overflow-x-auto` 누락 | 모바일에서 가로 스크롤 불가 |
| Feature Card 헤더 고정 높이(`h-[70px]`) 누락 | 카드 간 구분선 수평 정렬 틀어짐 |

---

## 12. 황금 표준 파일 (참조 기준)

| 파일 | 표준 내용 |
|---|---|
| `src/app/pico-k/page.tsx` | **황금 표준 01** — 전체 레이아웃 구조, 기본 톤앤매너 |
| `src/app/u-pulse/page.tsx` | **황금 표준 02** — 복합 그리드, 스펙 테이블 최적화 |
| `src/app/sylfirm-x/page.tsx` | **황금 표준 03** — 상세 Feature Card, 수가 리스트 |

---

## 13. 작업 현황

| 파일 | 상태 |
|---|---|
| `src/app/pico-k/page.tsx` | ✅ Finalized |
| `src/app/u-pulse/page.tsx` | ✅ Finalized |
| `src/app/sylfirm-x/page.tsx` | ✅ Finalized |
| `src/app/n-pulse/page.tsx` | ✅ Finalized |
| `src/app/v-ro-advance/page.tsx` | ✅ Finalized |
| `src/app/cellinew/page.tsx` | ✅ Finalized |
| `src/components/home/*` | ✅ HeroSlider, AboutSection, ProductLineup, ConsultingOrbit, PartnerMarquee 완료 |
| `src/app/contact/page.tsx` | ✅ 완료 |
