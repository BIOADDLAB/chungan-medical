# 라이트 테마 전환 구현 계획서

> **목표**: 현재 "Tech-Premium Dark" (배경 `#020408`/`#050810`, 시안 블루 포인트) 디자인을
> "Clean Medical Light" (배경 흰색/하늘색, 시안 블루 포인트 유지)으로 전면 전환한다.
> 
> **원칙**: Primary 색상(`#00B3E4` 시안 블루)은 그대로 유지. 배경·텍스트·테두리만 밝은 계열로 반전.

---

## 1. 새 디자인 토큰 (New Design Tokens)

| 기존 토큰 | 기존 값 | 새 값 | 설명 |
|---|---|---|---|
| `--background` | `#050810` | `#FFFFFF` | 기본 페이지 배경 |
| `--foreground` | `#e2e8f0` | `#1E293B` | 기본 텍스트 (slate-800) |
| `bg-dark` (`#020408`) | 극어두운 블랙 | `#F0F9FF` | 섹션 배경 A (sky-50) |
| `bg-dark` (`#050810`) | 어두운 네이비 | `#FFFFFF` | 섹션 배경 B (흰색) |
| 교번 섹션 배경 | — | `#E0F2FE` | sky-100 (카드·패널 배경) |
| `--primary-glow` | 어두운 글로우 | 그대로 유지 | 밝은 배경에서도 OK |

---

## 2. 전환 클래스 매핑표

### 2-1. 배경색

| 기존 클래스 | 새 클래스 | 비고 |
|---|---|---|
| `bg-[#020408]` | `bg-sky-50` (`#F0F9FF`) | 모든 섹션 배경 |
| `bg-[#050810]` | `bg-white` | 교번 섹션 배경 |
| `bg-black` | `bg-white` | Footer 전용 |
| `.product-section { background: #020408 }` | `background: #F0F9FF` | CSS |
| `.glass-panel { background: rgba(5,8,16,0.6) }` | `background: rgba(255,255,255,0.75)` | 밝은 유리 패널 |
| `.glass-panel box-shadow` | `0 4px 30px rgba(0,0,0,0.08)` | 그림자 경량화 |
| `.product-card { background: rgba(15,23,42,0.6) }` | `background: rgba(255,255,255,0.9)` | 카드 배경 |
| `.product-card:hover box-shadow` | `0 0 20px rgba(0,183,241,0.2), 0 10px 40px rgba(0,183,241,0.08)` | 호버 그림자 |
| `.orbit-item { background: rgba(15,23,42,0.8) }` | `background: rgba(255,255,255,0.9)` | 오빗 아이템 |
| `.cn-plus-symbol { background: rgba(5,8,16,0.9) }` | `background: rgba(255,255,255,0.95)` | 오빗 센터 |
| `.site-header-scrolled` | `background-color: rgba(255,255,255,0.92)` | 헤더 스크롤 |
| `.partners-marquee-container` | `background-color: #F0F9FF` | 마퀴 배경 |

### 2-2. 텍스트색

| 기존 클래스 | 새 클래스 | 비고 |
|---|---|---|
| `text-white` (제목) | `text-slate-900` | 주 헤딩 |
| `text-slate-200` | `text-slate-700` | 기술 데이터 |
| `text-slate-300` | `text-slate-600` | 부제목·설명 |
| `text-slate-400` | `text-slate-500` | 보조 텍스트 |
| `text-primary` (강조) | `text-primary` | 유지 (`#00B3E4`) |
| `.hero-title-main { color: #ffffff }` | `color: #0F172A` | 슬레이트-900 |
| `nav text-white` | `text-slate-800` | 네비 링크 |
| `.orbit-item { color: #fff }` | `color: #1E293B` | 오빗 텍스트 |

### 2-3. 테두리·구분선

| 기존 | 새 값 | 비고 |
|---|---|---|
| `border-white/20` | `border-sky-200` | 일반 테두리 |
| `border-white/5` | `border-sky-100` | 미세 테두리 |
| `border-primary/30` | `border-primary/40` | 유지 또는 약간 강화 |
| `product-card-footer border-top: dashed rgba(255,255,255,0.1)` | `rgba(0,183,241,0.2)` | 카드 푸터 구분선 |
| `border-b border-white/5` (헤더) | `border-b border-sky-100` | 헤더 하단선 |

### 2-4. 그라디언트 오버레이

| 기존 | 새 값 | 비고 |
|---|---|---|
| `from-[#050810]/30 via-transparent to-[#050810]/70` | `from-sky-50/20 via-transparent to-sky-50/40` | Hero 오버레이 |
| `from-[#050810]/80 via-[#050810]/40 to-[#050810]/60` | `from-white/60 via-white/20 to-white/40` | About 오버레이 |
| `from-[#050810]/52 to-[#050810]/18` | `from-sky-50/40 to-sky-50/10` | HeroSlider 오버레이 |
| `.partners-marquee-container::before gradient` | `from-sky-50 to-sky-50` (양끝 페이드) | 마퀴 페이드 |

### 2-5. 이미지 필터 (로고·파트너)

| 기존 | 새 값 | 비고 |
|---|---|---|
| `brightness-0 invert` (헤더 로고) | **원본 로고로 변경** 또는 `brightness-0` (검정 버전) | 밝은 배경에서 흰 로고 → 불가, 다크 로고 사용 |
| `brightness-0 invert` (Footer 로고) | 동일 → `brightness-0` (검정 로고) | |
| `.product-maker-logo-img { filter: brightness(0) invert(1) opacity(0.6) }` | `brightness(0) opacity(0.5)` | 다크 버전으로 전환 |
| `.product-footer-logo-img { filter: brightness(0) invert(1) opacity(0.9) }` | `brightness(0) opacity(0.7)` | |
| `partner-marquee img { filter: brightness(0) invert(1) opacity(0.4) }` | `brightness(0) opacity(0.35)` | 파트너 로고 |

### 2-6. 배경 텍스처 (Tech Grid / Tech Dots)

| 기존 설정 | 새 설정 | 비고 |
|---|---|---|
| `.bg-tech-grid` 라인 `rgba(0,183,241,0.05)` | `rgba(0,183,241,0.08)` | 밝은 배경에서 살짝 더 진하게 |
| 페이지 내 `opacity-10`, `opacity-20`, `opacity-30` | 유지 or `opacity-15`로 조정 | 밝은 배경에서 과하지 않게 |
| `mix-blend-screen` | `mix-blend-multiply` 또는 제거 | screen은 어두운 배경 전용 |

---

## 3. 파일별 수정 범위

### 3-1. `src/app/globals.css` — **핵심 파일**

```
수정 항목:
① :root 변수
   --background: #050810 → #FFFFFF
   --foreground: #e2e8f0 → #1E293B

② .glass-panel
   배경: rgba(5,8,16,0.6) → rgba(255,255,255,0.75)
   box-shadow: 0 4px 30px rgba(0,0,0,0.5) → 0 4px 30px rgba(0,0,0,0.08)

③ .hero-title-main
   color: #ffffff → #0F172A
   text-shadow 제거

④ .site-header-scrolled
   background-color: rgba(5,8,16,0.85) → rgba(255,255,255,0.92)

⑤ .product-section::before (상단 라인)
   유지 (primary 색상 그대로)

⑥ .product-card
   배경: rgba(15,23,42,0.6) → rgba(255,255,255,0.9)
   border: rgba(255,255,255,0.05) → rgba(0,183,241,0.15)
   :hover box-shadow 경량화

⑦ .product-card-footer
   border-top: dashed rgba(255,255,255,0.1) → rgba(0,183,241,0.2)

⑧ .product-machine-img filter
   drop-shadow(0 10px 15px rgba(0,0,0,0.5)) → drop-shadow(0 10px 15px rgba(0,0,0,0.12))

⑨ .product-nav-btn
   배경: rgba(255,255,255,0.05) → rgba(0,183,241,0.08)
   border: rgba(255,255,255,0.1) → rgba(0,183,241,0.2)
   color: white → #1E293B

⑩ .product-maker-logo-img / .product-footer-logo-img
   filter: brightness(0) invert(1) opacity(X) → brightness(0) opacity(X)

⑪ .consulting-diagram-wrap 관련
   .cn-plus-symbol 배경: rgba(5,8,16,0.9) → rgba(255,255,255,0.95)
   .orbit-item 배경: rgba(15,23,42,0.8) → rgba(255,255,255,0.9)
   .orbit-item color: #fff → #1E293B
   .orbit-item:hover background: rgba(0,183,241,0.15) 유지

⑫ .partners-marquee-container
   배경: #020408 → #F0F9FF
   box-shadow: inset dark → 제거 또는 경량화
   border-top/bottom: rgba(0,183,241,0.2) 유지
   ::before 페이드: from #030508 → from #F0F9FF

⑬ .partner-marquee img filter
   brightness(0) invert(1) opacity(0.4) → brightness(0) opacity(0.35)
   :hover → brightness(0) opacity(0.8)

⑭ .swiper-pagination-bullet
   배경: rgba(255,255,255,0.25) → rgba(0,183,241,0.25)
   border: rgba(255,255,255,0.1) → rgba(0,183,241,0.2)

⑮ .tech-border-l::before
   box-shadow: 0 0 10px var(--color-primary) 유지 (OK)

⑯ .text-glow, .text-glow-primary — 밝은 배경에서 약화
   text-shadow 값 70% 감소

⑰ .bg-tech-dots
   mix-blend-screen → mix-blend-multiply (모든 사용처에서도 변경 필요)
```

---

### 3-2. `src/components/layout/Header.tsx`

```
수정 항목:
① 기본 헤더 배경 (unscrolled): 투명 유지 (Hero 배경 위)
   — Hero가 밝아지면 자연스럽게 처리됨

② 스크롤 시 클래스: site-header-scrolled (globals.css에서 처리)

③ 로고: brightness-0 invert → brightness-0 (검은 로고)
   — 단, Hero 위 (unscrolled) 에서는 흰 로고 필요하므로
   → scrolled 상태에 따라 조건부 클래스 적용
   scrolled=false: brightness-0 invert (흰색 로고)
   scrolled=true:  brightness-0 (검정 로고)
   ※ 또는 별도의 컬러 로고 파일이 있으면 조건부로 src 교체

④ Nav 링크 텍스트: text-white → text-slate-800
   hover:text-primary 유지
   
⑤ 모바일 메뉴 패널 배경:
   기존 bg-[#020408] → bg-white
   메뉴 링크 색상: text-white → text-slate-800

⑥ 드롭다운 메뉴 배경:
   기존 bg-[#020408]/95 → bg-white/95
   항목 hover: bg-primary/10 유지
```

---

### 3-3. `src/components/layout/Footer.tsx`

```
수정 항목:
① bg-black → bg-sky-50 또는 bg-slate-900 중 선택
   추천: bg-slate-900 유지 (Footer만 어둡게, 랜딩 전체 마감 역할)
   또는: bg-sky-50 + text-slate-700 로 완전 라이트화
   → 사용자 확인 필요

② 로고: brightness-0 invert → 
   bg-slate-900 유지 시: brightness-0 invert 그대로
   라이트 Footer 시: brightness-0

③ text-gray-500 → text-slate-400 (Footer 가 어두우면 유지, 밝으면 text-slate-500)
④ text-gray-300 → 동일 조건
```

---

### 3-4. `src/components/home/HeroSlider.tsx`

```
수정 항목:
① 슬라이드 배경 클래스: bg-[#020408] → bg-sky-50
② 오버레이 그라디언트:
   from-[#050810]/18 via-[#050810]/18 to-[#050810]/38
   → from-sky-50/15 via-sky-50/10 to-sky-50/30
③ bg-[#050810]/42 → bg-sky-50/30
④ bg-tech-grid mix-blend-screen → mix-blend-multiply (혹은 제거)
⑤ Hero 제목: text-white / hero-title-main → text-slate-900
⑥ Hero 강조: text-primary / hero-title-highlight 유지
⑦ 버튼(스크롤 유도):
   border-white/20 → border-slate-300
   bg-black/10 → bg-white/50
   text-white → text-slate-700
⑧ Pagination bullet: globals.css에서 처리됨
```

---

### 3-5. `src/components/home/AboutSection.tsx`

```
수정 항목:
① 섹션 배경: bg-[#020408] → bg-white
② 배경 이미지 오버레이:
   from-[#050810]/80 via-[#050810]/40 to-[#050810]/60
   → from-white/70 via-white/30 to-white/50
③ bg-tech-dots mix-blend-screen → mix-blend-multiply
④ glass-panel: globals.css에서 라이트로 처리됨
⑤ 헤딩 텍스트: text-white → text-slate-900
⑥ 본문 텍스트: text-slate-300/400 → text-slate-600/500
⑦ tech-border-l 내 텍스트 컬러 조정
```

---

### 3-6. `src/components/home/ProductLineup.tsx`

```
수정 항목:
① 섹션 배경: bg-[#020408] → bg-sky-50
② product-card: globals.css에서 라이트로 처리됨
③ 제목/서브텍스트 색상: text-white → text-slate-900
④ product-nav-btn: globals.css에서 처리됨
⑤ product-maker-logo-img filter: globals.css에서 처리됨
```

---

### 3-7. `src/components/home/ConsultingOrbit.tsx`

```
수정 항목:
① 섹션 배경: bg-[#020408] → bg-white
② orbit 관련 CSS: globals.css에서 처리됨
③ 텍스트: text-white → text-slate-900
④ 기술 라벨/뱃지: text-primary 유지
```

---

### 3-8. `src/components/home/TheraTalkSection.tsx` / `PartnerMarquee.tsx`

```
수정 항목:
① 섹션 배경: 각 bg-[#020408] → bg-sky-50 또는 bg-white 교번 적용
② 파트너 마퀴: globals.css에서 처리됨
③ 텍스트 색상 일괄 전환
```

---

### 3-9. 제품 상세 페이지 (10개 page.tsx)

아래 파일 모두 동일한 패턴으로 일괄 수정:
- `src/app/pico-k/page.tsx`
- `src/app/u-pulse/page.tsx`
- `src/app/u-pulse-dual/page.tsx`
- `src/app/n-pulse/page.tsx`
- `src/app/n-pulse-prime/page.tsx`
- `src/app/sylfirm-x/page.tsx`
- `src/app/cellinew/page.tsx`
- `src/app/v-ro-advance/page.tsx`
- `src/app/future-vision/page.tsx`
- `src/app/contact/page.tsx`

```
각 page.tsx 공통 수정 패턴:

① Hero 섹션
   bg-[#020408] → bg-sky-50
   오버레이 그라디언트: from-[#050810]/30 ~ to-[#050810]/70
   → from-sky-50/20 ~ to-sky-50/50
   hero-title-main(흰 제목) → text-slate-900
   hero-title-highlight(primary) → 유지

② 일반 콘텐츠 섹션
   bg-[#020408] → bg-white (홀수 섹션)
   bg-[#050810] → bg-sky-50 (짝수 섹션, 교번 배경)
   
③ 텍스트
   text-white → text-slate-900 (제목)
   text-slate-200/300 → text-slate-700/600
   text-slate-400 → text-slate-500
   text-primary → 유지

④ 배지 (Standard Badge)
   bg-primary/5 → bg-primary/10
   border-primary/30 → 유지
   text-primary → 유지

⑤ 발광 막대 (Accent Bar)
   bg-primary → 유지
   shadow 제거 필요 없음

⑥ 스캔 라인 그라디언트
   from-primary/60 via-primary/10 to-transparent → 유지

⑦ Spec 테이블
   어두운 테이블 헤더/행 배경 → 라이트 버전
   bg-[#050810] / bg-primary/10 → bg-sky-50 / bg-primary/10
   테이블 border: border-primary/20 → 유지
   셀 텍스트: text-slate-300 → text-slate-700

⑧ Feature 카드
   glass-panel: globals.css에서 처리됨
   카드 배경 어두운 rgba → 흰색 rgba

⑨ mix-blend-screen → mix-blend-multiply (tech-grid, tech-dots 모든 인스턴스)

⑩ 배경 glow 블러:
   bg-primary/8 blur-[130px] → 유지 (밝은 배경에서도 자연스러움)
```

---

## 4. orchestration.md 업데이트 필요 사항

구현 완료 후 반드시 `orchestration.md`의 디자인 시스템 섹션을 업데이트:

```
변경 항목:
① 브랜드 컨셉: "Tech-Premium Dark" → "Clean Medical Light"
② 색상 토큰 표 전면 갱신
③ 섹션 배경 토큰: bg-[#020408]/bg-[#050810] → bg-white/bg-sky-50
④ 기본 텍스트: text-white → text-slate-900
⑤ 보조 텍스트: text-slate-200~400 → text-slate-700~500
⑥ mix-blend-screen 주의사항 → mix-blend-multiply로 표준 변경
⑦ glass-panel → 라이트 버전 정의 업데이트
⑧ 황금 표준 01/02/03 파일 경로는 유지 (내용만 라이트화됨)
```

---

## 5. 작업 순서 (권장)

```
Step 1: globals.css 수정 (토큰·CSS 클래스 전환)
         → 전체 테마의 70%가 자동으로 적용됨

Step 2: Header.tsx 수정
         → 로고 조건부 렌더링 처리가 핵심

Step 3: 홈 컴포넌트 수정 (HeroSlider → AboutSection → ProductLineup → ConsultingOrbit → TheraTalk → PartnerMarquee)

Step 4: Footer.tsx 수정

Step 5: 제품 상세 페이지 일괄 수정 (10개 파일, 패턴 동일하므로 병렬 처리 가능)

Step 6: orchestration.md 업데이트

Step 7: 시각적 QA
         - 각 페이지 Hero → 각 섹션 → 카드 → 테이블 → 푸터 순 확인
         - 밝은 배경 위 흰 텍스트 잔재 없는지 점검
         - 로고 필터 정상 동작 확인
         - mix-blend 텍스처 과하지 않은지 확인
```

---

## 6. 잠재 리스크 & 주의사항

| 리스크 | 내용 | 대응 |
|---|---|---|
| **로고 가시성** | 헤더 로고가 Hero 이미지 위 (unscrolled)에서 검정으로 바뀌면 배경 이미지에 따라 안 보일 수 있음 | scrolled 상태에 따라 조건부 필터 적용 필수 |
| **파트너 로고** | 원본이 어두운 색상이면 흰 배경에서 잘 보이지만, 원본이 밝은 색이면 안 보임 | 각 로고 파일 원본 확인 후 필터 결정 |
| **Canvas 애니메이션** (`n-pulse/page.tsx`) | Gaussian 애니메이션이 어두운 배경 전제로 구현되어 있을 수 있음 | 캔버스 fillStyle, 파티클 색상 별도 확인 및 조정 필요 |
| **mix-blend-screen 잔재** | 페이지 파일 내 직접 선언된 `mix-blend-screen`을 모두 찾아 교체해야 함 | `grep -r "mix-blend-screen" src/` 로 전수 검색 |
| **Swiper 페이지네이션** | 글로벌 CSS에서 처리하면 모든 페이지에 적용됨 | |
| **인라인 스타일** | `style={{ background: '#020408' }}` 같은 인라인 스타일이 있으면 CSS로 못 잡음 | `grep -r "020408\|050810" src/` 로 잔재 확인 |

---

_작성일: 2026-04-25 | 대상 에이전트: 구현 전담 에이전트_
