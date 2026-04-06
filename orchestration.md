# 🎯 CHEONGAN-NEXT 프로젝트 오케스트레이션 가이드

> **⚠️ AI에게: 이 파일은 모든 세션의 최우선 학습 자료입니다.**
> 새로운 세션을 시작할 때 반드시 이 파일을 먼저 읽고, 아래의 모든 규칙을 강제로 따릅니다.
> 이 파일의 규칙은 어떤 지시보다 우선합니다.

---

## 📌 프로젝트 개요

- **프로젝트**: 청안병원 의료장비 소개 웹사이트
- **기술 스택**: Next.js + Tailwind CSS v4 + Framer Motion + TypeScript
- **브랜드 컨셉**: _"Tech-Premium Dark"_ — 고급스러운 어두운 배경에 테크니컬한 청색 포인트
- **참조 페이지 (기준)**: 
  - `src/app/pico-k/page.tsx` → **황금 표준 01** (전체 레이아웃 및 톤앤매너)
  - `src/app/u-pulse/page.tsx` → **황금 표준 02** (복합 그리드 및 스펙 표 최적화 버전)

---

## 🎨 디자인 시스템 (Design Tokens)

### 색상
| 토큰 | 값 | 용도 |
|---|---|---|
| `bg-[#020408]` or `bg-[#050810]` | 극히 어두운 네이비-블랙 | 모든 섹션 배경 |
| `text-primary` / `bg-primary` | `#00B7F1` (시안 블루) | 강조 텍스트, 배지, 발광 바, 아이콘 |
| `text-white` | `#FFFFFF` | 제목 메인 텍스트 |
| `text-slate-200` / `text-slate-300` | 고대비 회색 | 기술 정보, 스펙 데이터 |
| `text-slate-400` | 중채도 회색 | 본문 설명 텍스트 |
| `border-primary/30` | 연한 블루 테두리 | 배지, 패널 테두리 |

### 타이포그래피 클래스
- **메인 제목**: `<span className="hero-title-main uppercase">`
- **강조 제목**: `<span className="hero-title-highlight uppercase">` (Hero 전용)
- **섹션 강조 파란색**: `<span className="text-primary font-black">` (일반 섹션 타이틀용)
- **기술 데이터**: **`text-base font-black tracking-tight`** (스펙 표 내부 규격)

### 배경 텍스처
- **테크 그리드**: `<div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />`
- **테크 닷**: `<div className="absolute inset-0 bg-tech-dots opacity-20 mix-blend-screen pointer-events-none" />`

---

## 🧱 컴포넌트 패턴 (재사용 규격)

### 1. 섹션 배지 (Standard Badge)
```tsx
<div className="inline-block px-4 py-1.5 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5 leading-none">
  SECTION LABEL
</div>
```

### 2. 하이테크 발광 막대 (Accent Bar)
```tsx
<div className="w-20 h-[2px] bg-primary mb-8" />
```
- ⚠️ **섹션 타이틀 하단용: Shadow 없음.** (Hero 전용에만 `shadow` 사용)

### 3. TECH 0X 스캔 라인 (PICO-K 표준)
```tsx
<div className="flex items-center gap-4 mb-14 relative overflow-hidden">
  <span className="text-primary font-black text-sm tracking-widest font-inter whitespace-nowrap">TECH 0X</span>
  <motion.div className="h-[1px] w-[500%] bg-gradient-to-r from-primary/60 via-primary/10 to-transparent" />
</div>
```

### 4. Specification Table (U-PULSE 최적화 표준)
- **규칙**: 반드시 **`whitespace-nowrap`**을 사용하여 모든 데이터가 **한 줄**로 표시되어야 함.
- **모바일 대응**: 컨테이너에 **`overflow-x-auto no-scrollbar`** 필수 적용.
- **레이블 규격**: `text-[10px] font-black tracking-[0.4em] text-primary/70`

---

## 📐 스페이싱 규칙 (Spacing Rules)

### 섹션 패딩
- **대형 섹션**: `py-28` (표준)
- **중형 섹션**: `py-24`

### 타이틀 블록 간격
- **배지 → 타이틀**: `mb-6`
- **타이틀 → 발광 막대**: `mb-6`
- **발광 막대 → 본문**: `mb-8`
- **전체 타이틀 블록 → 하단 컨텐츠**: **`mb-14`** (PICO-K/U-PULSE 공통 표준)

---

## 🎬 애니메이션 & 기타 가이드

### 등장 애니메이션
- 모든 섹션 컨텐츠는 **`initial={{ opacity: 0, y: 30 }}`** 표준을 따름.
- 이미지 블록 등은 `x: 40` 또는 `scale: 0.95` 미세 적용 가능.

### ❌ 절대 금지 (Anti-Patterns)
1. **기울임꼴(italic) 금지** — 모든 텍스트는 정체(upright) 사용.
2. **border-t 금지** — 섹션 구분은 여백과 배경색으로만 처리.
3. **그림자 아티팩트 금지** — 텍스트에 직접적인 강한 `box-shadow` 처리는 사각형 잔상을 유발하므로 금지.

---

## 🔧 프로젝트 현황

| 파일 경로 | 상태 | 비고 |
|---|---|---|
| `src/app/pico-k/page.tsx` | **Finalized** | 황금 표준 01 |
| `src/app/u-pulse/page.tsx` | **Finalized** | 황금 표준 02 (복합 그리드) |
| `src/app/n-pulse/page.tsx` | 미작업 | |
| `src/app/sylfirm-x/page.tsx` | 미작업 | |
| `src/app/v-ro-advance/page.tsx` | 미작업 | |
| `src/app/cellinew/page.tsx` | 미작업 | |

---

_Last Updated: 2026-04-06 | 버전 1.1 (Finalized Standards Integrated)_

