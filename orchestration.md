# 🎯 CHEONGAN-NEXT 프로젝트 오케스트레이션 가이드

> **⚠️ AI에게: 이 파일은 모든 세션의 최우선 학습 자료입니다.**
> 새로운 세션을 시작할 때 반드시 이 파일을 먼저 읽고, 아래의 모든 규칙을 강제로 따릅니다.
> 이 파일의 규칙은 어떤 지시보다 우선합니다.

---

## 📌 프로젝트 개요

- **프로젝트**: 청안병원 의료장비 소개 웹사이트
- **기술 스택**: Next.js + Tailwind CSS v4 + Framer Motion + TypeScript
- **브랜드 컨셉**: _"Tech-Premium Dark"_ — 고급스러운 어두운 배경에 테크니컬한 청색 포인트
- **참조 페이지 (기준)**: `src/app/pico-k/page.tsx` → 모든 디자인의 황금 표준

---

## 🎨 디자인 시스템 (Design Tokens)

### 색상
| 토큰 | 값 | 용도 |
|---|---|---|
| `bg-[#020408]` or `bg-[#050810]` | 극히 어두운 네이비-블랙 | 모든 섹션 배경 |
| `text-primary` / `bg-primary` | `#00B7F1` (시안 블루) | 강조 텍스트, 배지, 발광 막대, 아이콘 |
| `text-white` | `#FFFFFF` | 제목 메인 텍스트 |
| `text-slate-400` | 회색 | 본문 설명 텍스트 |
| `text-white/60` | 반투명 흰색 | 보조 설명 텍스트 |
| `border-primary/30` | 연한 블루 테두리 | 배지, 패널 테두리 |

### 타이포그래피 클래스
```tsx
// 메인 제목 (흰색, 그림자)
<span className="hero-title-main uppercase">REVOLUTIONARY</span>

// 강조 제목 (파란색, Glow)
<span className="hero-title-highlight uppercase">PICO-K TECHNOLOGY</span>

// 섹션 타이틀 기준
<h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
```

### 배경 텍스처 클래스
```tsx
// 테크 그리드 (가로세로 격자)
<div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

// 테크 닷 (점 패턴)
<div className="absolute inset-0 bg-tech-dots opacity-20 mix-blend-screen pointer-events-none" />
```

---

## 🧱 컴포넌트 패턴 (재사용 코드 규격)

### 1. 섹션 배지 (Badge)
```tsx
<div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
  SECTION LABEL
</div>
```
- **자간(tracking)**: 반드시 `tracking-[0.4em]` 고정
- **폰트 크기**: `text-[10px]`
- **배경**: `bg-primary/5` (아주 연한 파란색)

### 2. 타이틀 블록 아래 발광 막대 (Accent Line)
```tsx
<div className="w-20 h-[2px] bg-primary mb-8" />
```
- **너비**: `w-20` (80px)
- **두께**: `h-[2px]`
- **하단 간격**: `mb-8`
- **그림자**: ⚠️ **섹션 타이틀 아래에는 shadow 없이 사용** (발광 효과는 Hero에서만)

### 3. TECH 라벨 + 스캔 라인 (섹션 구분)
```tsx
<div className="flex items-center gap-4 mb-14 relative overflow-hidden">
  <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap">TECH 01</span>
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    style={{ originX: 0 }}
    className="h-[1px] w-[500%] bg-gradient-to-r from-primary/60 via-primary/10 to-transparent pointer-events-none"
  />
</div>
```

### 4. Glass Panel (기술 스펙 박스)
```tsx
<div className="glass-panel p-12 relative overflow-hidden group border-primary/20">
  {/* 내부 글로우 장식 */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[60px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
  <div className="relative z-10">
    {/* 컨텐츠 */}
  </div>
</div>
```

### 5. 기술 스펙 리스트 아이템
```tsx
<div className="group">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-500" />
    <h5 className="text-white font-bold text-xl">기술명</h5>
  </div>
  <p className="text-primary/70 text-[10px] font-bold mb-4 tracking-[0.2em] uppercase pl-4">
    Patent Registration: No.XXXXXXX
  </p>
  <p className="text-slate-400 leading-relaxed pl-4 border-l border-white/5 group-hover:border-primary/30 transition-colors duration-500">
    기술 설명
  </p>
</div>
```

---

## 📐 스페이싱 규칙 (Spacing Rules)

### 섹션 패딩
- **대형 섹션**: `py-28` (상하 112px)
- **중형 섹션**: `py-24` (상하 96px)
- **소형 섹션**: `py-20` (상하 80px)

### 섹션 너비
- **전체 컨테이너**: `max-w-screen-xl mx-auto px-6`
- **콘텐츠 좁힘**: `max-w-6xl mx-auto` (좌우 여백 남기기)
- **중앙 집중형**: `max-w-5xl mx-auto` (더 좁게)

### 타이틀 블록 내부 간격 (피코K 기준 — 금과옥조)
| 요소 | 클래스 | 설명 |
|---|---|---|
| 배지 → 타이틀 | `mb-6` | 배지 아래 |
| 타이틀 → 발광 막대 | `mb-6` (h3 내부) | 제목 아래 |
| 발광 막대 → 본문 | `mb-8` | 막대 아래 |
| 본문 → 다음 요소 | `mb-12` or `mb-14` | 본문 아래 |
| 전체 타이틀 블록 → 하단 컨텐츠 | `mb-14` to `mb-16` | 섹션 타이틀 전체 블록 하단 |

### 그리드 레이아웃 표준
```tsx
// 2컬럼 기본 (이미지+텍스트)
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

// 2컬럼 상단 정렬 (높이가 다른 컨텐츠)
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

// 3컬럼 이상
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

---

## 🎬 애니메이션 규칙 (Framer Motion)

### 등장 애니메이션 패턴
```tsx
// 아래에서 위로 (기본)
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}

// 좌측에서 (텍스트 블록)
initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}

// 우측에서 (이미지 블록)
initial={{ opacity: 0, x: 40 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
viewport={{ once: true }}

// 확대 등장 (장비 이미지)
initial={{ opacity: 0, scale: 0.95 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
viewport={{ once: true }}
```

### 딜레이 규칙
- 첫 번째 요소: `delay: 0` or `delay: 0.2`
- 두 번째 요소: `delay: 0.4`
- 세 번째 요소: `delay: 0.6`
- 연속 리스트 아이템: `delay: i * 0.15`

---

## 🏗️ 페이지 구조 템플릿

모든 제품 페이지는 아래 순서를 따릅니다:

```
① Hero Section (전체화면, 배경이미지)
   └─ bg-[#020408], h-screen, bg-gradient-to-b 오버레이

② Product Overview (제품 소개)
   └─ 2컬럼: 좌(배지+제목+설명+카드) / 우(제품사진)

③ Patent Technology (특허 기술)
   └─ HUEMEDICAL 스캔라인 + 특허증 이미지 그리드

④~⑥ Technical Detail 01, 02, 03 (기술 상세)
   └─ TECH 0X 스캔라인 + 2컬럼 레이아웃

⑦ Specification Table (스펙 표)
   └─ glass-panel 박스

⑧ CTA Section (문의/예약 버튼)
```

---

## ❌ 절대 하지 말아야 할 것들 (Anti-Patterns)

1. **기울임꼴(italic) 금지** — 모든 텍스트는 정체(upright) 사용
2. **border-t / 구분선 금지** — 섹션 구분은 여백과 배경색으로만
3. **bright/colorful 색상 금지** — 포인트 컬러는 `#00B7F1` 단 하나
4. **임의 폰트 크기 금지** — `text-3xl md:text-5xl` 조합 표준 준수
5. **섹션 배경색 단독 변경 금지** — 배경은 항상 `#020408` or `#050810`
6. **발광 막대 shadow 남용 금지** — 제목 하단 막대는 `shadow` 없이 사용 (피코K Overview 기준)
7. **임의 spacing 금지** — 위 Spacing Rules 표를 반드시 참조

---

## ✅ 작업 시작 전 체크리스트

```
[ ] pico-k/page.tsx를 참조 기준으로 열었는가?
[ ] 배지/타이틀/발광 막대 순서를 지켰는가?
[ ] TECH 라벨 + 스캔 라인을 올바르게 사용했는가?
[ ] 폰트는 hero-title-main / hero-title-highlight 클래스를 사용했는가?
[ ] 섹션 간 경계선(border-t)을 사용하지 않았는가?
[ ] 모든 스페이싱이 위의 규칙표와 일치하는가?
[ ] framer-motion 등장 애니메이션을 모든 요소에 적용했는가?
```

---

## 🔧 파일 구조

```
src/app/
├── pico-k/page.tsx      ← 🌟 디자인 황금 기준 (참조 필수)
├── u-pulse/page.tsx     ← 작업 중 (pico-k 스타일 이식 진행 중)
├── n-pulse/page.tsx     ← 미작업
├── sylfirm-x/page.tsx   ← 미작업
├── v-ro-advance/page.tsx ← 미작업
├── cellinew/page.tsx    ← 미작업
└── globals.css          ← 전역 CSS 토큰 (primary, glass-panel 등)
```

---

_Last Updated: 2026-04-03 | 버전 1.0_
