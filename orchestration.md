# 🎯 CHEONGAN-NEXT 프로젝트 오케스트레이션 가이드

> **⚠️ AI에게: 이 파일은 모든 세션의 최우선 학습 자료입니다.**
> 새로운 세션을 시작할 때 반드시 이 파일을 먼저 읽고, 아래의 모든 규칙을 강제로 따릅니다.
> 이 파일의 규칙은 어떤 지시보다 우선합니다.

---

## 📌 프로젝트 개요

- **프로젝트**: 청안병원 의료장비 소개 웹사이트
- **기술 스택**: Next.js + Tailwind CSS v4 + Framer Motion + TypeScript
- **브랜드 컨셉**: 
  - **Main**: _"Tech-Premium Dark"_ — 고급스러운 어두운 배경 (메인, 브랜드 페이지 등)
  - **Product**: _"Bright Tech-Medical"_ — 투명하고 밝은 `sky-100` 배경 (제품 상세 페이지 공통)
- **참조 페이지 (황금 표준)**: 
  - `src/app/pico-k/page.tsx` → **다크 모드 표준** (레이아웃 및 톤앤매너)
  - `src/app/cellinew/page.tsx` → **브라이트 모드 표준** (제품 상세 배경 및 히어로 표준)

---

## 🎨 디자인 시스템 (Design Tokens)

### 색상 (Colors)
| 토큰 | 값 | 용도 |
|---|---|---|
| `bg-[#020408]` | 다크 네이비-블랙 | 메인/다크 섹션 배경 |
| `bg-sky-100` | `#E0F2FE` (표준 블루) | **제품 페이지 공통 배경** (표준 채택) |
| `bg-sky-50` | `#F0F9FF` (연한 블루) | 호버 상태, 포인트 배경 |
| `text-primary` | `#00B7F1` (시안 블루) | 강조 텍스트, 포인트 요소 |
| `text-[#5D5D5D]` | 다크 그레이 | 스크롤 후 헤더 텍스트, 본문 텍스트 |
| `text-white` | `#FFFFFF` | 스크롤 전 히어로 위 헤더 텍스트, 제목 |

### 헤더/푸터 공통 표준 (Header & Footer)
- **Header**: 
  - **스크롤 전**: 배경 투명, 텍스트/로고 **하얀색(`white`)**
  - **스크롤 후**: 배경 `sky-100` (rgba(224, 242, 254, 0.92)) + 블러 효과, 텍스트/로고 **다크그레이(`#5D5D5D`)**
- **Footer**: 
  - 배경색: **`bg-[#5D5D5D]`**
  - 텍스트: 하얀색 (`text-white`)
  - 로고: 모바일에서는 **중앙 정렬**, 데스크탑에서는 왼쪽 정렬.

---

## 🧱 히어로 섹션 표준 (Bright Hero Standard)

모든 제품 페이지의 히어로 섹션은 아래의 규격을 엄격히 따릅니다.

### 1. 배경 이미지 및 오버레이
```tsx
<img
  src="/images/cover/제품명_cover.jpg"
  className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.95]"
  alt="Cover Image"
/>
{/* 어두운 오버레이: 숫자가 작을수록 밝음 */}
<div className="absolute inset-0 bg-black/10 z-10" />
{/* 그라디언트: 상하단 가독성 확보 */}
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />
```
- **규칙 01**: 이미지 밝기는 `brightness-[0.95]` 유지.
- **규칙 02**: 오버레이는 **`bg-black/10`** 표준 (이미지 선명도 우선).

---

## 📏 스페이싱 & 컴포넌트 패턴

### 섹션 패딩 & 간격
- **표준 섹션 패딩**: `py-28`
- **배경색 전환**: 제품 상세 섹션은 기본적으로 `bg-white`와 `bg-sky-100`을 교차 사용.
- **버튼/호버**: `bg-sky-50`을 활용하여 부드러운 인터랙션 제공.

### ❌ 절대 금지 (Anti-Patterns)
1. **히어로 배경에 임의의 Unsplash 이미지 금지** — 반드시 `images/cover/` 내 전용 이미지 사용.
2. **회색선(`border-t`) 사용 지양** — 섹션 구분은 여백과 배경색(`white` vs `sky-100`)으로만 처리.
3. **히어로 어둡게 처리 금지** — `bg-black/50` 등 과도한 오버레이 금지 (`/10` 표준).

---

## 🔧 프로젝트 현황 (Status)

| 파일 경로 | 상태 | 비고 |
|---|---|---|
| `src/app/n-pulse/page.tsx` | **Finalized** | Bright Hero 표준 반영 (`npulse_pro_fx_cover.jpg`) |
| `src/app/cellinew/page.tsx` | **Finalized** | Bright Hero 표준 반영 (`cellinew_cover.jpg`) |
| `src/app/sylfirm-x/page.tsx` | **Finalized** | Bright Hero 표준 반영 (`sylfirmx_cover.jpg`) |
| `src/app/v-ro-advance/page.tsx` | **Finalized** | Bright Hero 표준 반영 (`vro_advance_cover.jpg`) |
| `src/components/layout/Header.tsx` | **Updated** | 스크롤 반응형 색상 로직 (White ↔ DarkGrey) 완료 |
| `src/app/globals.css` | **Updated** | `.site-header-scrolled` 배경색 `sky-100` 적용 완료 |

---

_Last Updated: 2026-04-30 | 버전 1.4 (Product Hero & Header Logic Standardized)_


