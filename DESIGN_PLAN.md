# 청안메디칼 리디자인 계획서
> 실제 스크린샷 직접 확인 후 작성 (2026-04-01)

---

## 실제 현황 — 스크린샷 분석

| 섹션 | 실제 상태 | 심각도 |
|------|-----------|--------|
| Hero | 순수 블랙 화면. 텍스트가 `whileInView`로 설정되어 **페이지 로드 시 아예 안 나타남** | 🔴 치명적 |
| About | 어두운 도시 건물 사진 배경 — 의료기기 업체와 무관한 이미지 | 🔴 치명적 |
| ProductLineup | 검정 배경 + 어두운 카드 = 장비 이미지 거의 안 보임 | 🔴 치명적 |
| PartnerMarquee | 검정 배경에 흰색 로고 opacity 40% — 로고 식별 불가 | 🟠 심각 |
| ConsultingOrbit | 어둡지만 애니메이션 구조는 유지 가능 | 🟡 보완 |
| Header | 초기 완전 투명이라 배경과 구분 안 됨 | 🟠 심각 |

---

## 디자인 방향 — "Clinical Precision"

의료기기 납품 업체의 정체성: **정밀함 + 신뢰 + 첨단**

> 어두운 사이버펑크 → **클린 프리미엄 테크**로 전환  
> 현재 "어두운 클럽" 느낌 → **하이엔드 의료장비 쇼룸** 느낌

참조 무드: 독일 의료장비사 웹사이트, 삼성 메디슨, Stryker 같은 B2B 의료장비 프리미엄 브랜드  
- 화이트/아이스 블루 라이트 섹션에서 장비가 돋보이게
- 딥 네이비 다크 섹션으로 브랜드 임팩트 강화
- `#00B7F1` 사이언 블루가 포인트로 **살아있도록**

---

## 컬러 팔레트

```
시그니처
  #00B7F1  Primary Cyan Blue  — 메인 포인트, 글로우, CTA
  #0284C7  Blue Deep          — 그라디언트 페어, 버튼 hover

다크 섹션 (Hero, ConsultingOrbit, Footer)
  #040D1F  Navy Deep          — 메인 다크 배경 (현재 #030508 대체 — 블루감 있음)
  #0A1F40  Navy Mid           — 그라디언트, 카드 배경

라이트 섹션 (About, ProductLineup, PartnerMarquee)
  #FFFFFF  White              — 카드, 패널 배경
  #F0F7FF  Ice Blue           — 라이트 섹션 배경
  #E8F4FD  Sky Tint           — hover 상태, subtle bg

텍스트
  #0D1B2E  Text Navy          — 라이트 섹션 제목
  #334155  Text Slate         — 라이트 섹션 본문
  #E2E8F0  Text Light         — 다크 섹션 본문
  #FFFFFF  Text White         — 다크 섹션 제목
```

---

## 타이포그래피

현재: Inter + Noto Sans KR → 너무 평범함

```
변경:
  Display (영문 제목): "Syne" — 기하학적, 테크니컬, 개성있음
  Body (본문):         "DM Sans" — 클린하되 Inter보다 세련됨
  Label (배지/코드):   "JetBrains Mono" — 테크 레이블용
  한국어:              "Noto Sans KR" 유지
```

Google Fonts CDN으로 `layout.tsx`에 추가 필요

---

## 섹션별 리디자인

---

### 1. Header
**현재 문제**: 초기 완전 투명 → 검정 배경과 구분 불가

**변경**:
- 초기부터 `rgba(4,13,31,0.7)` + `backdrop-blur-md` 적용 (스크롤 전도 헤더 보임)
- 로고 좌측에 `#00B7F1` 2px vertical accent bar 추가
- 스크롤 후: `rgba(4,13,31,0.95)` + 하단 블루 border 1px

---

### 2. HeroSlider — 다크 섹션
**현재 문제**: `whileInView` 사용 → 페이지 로드 시 텍스트 아예 안 나옴 (headless 스크린샷에서 완전 블랙으로 확인)

**핵심 수정**:
- `whileInView` → `animate` + `initial` 조합으로 교체 (로드 즉시 애니메이션 실행)
- 배경: `#030508` → `#040D1F` 딥 네이비 그라디언트

**비주얼 강화**:
```
배경 레이어 구성:
  1. #040D1F 베이스
  2. 중앙 radial-gradient: #00B7F1/20 → transparent (큰 블루 글로우)
  3. 우측 상단 radial-gradient: #0284C7/15 (세컨더리 글로우)
  4. tech-grid opacity 0.05 → 0.15 (더 선명하게)
  5. 좌하단 diagonal line 장식 (SVG, #00B7F1/10)
```

**슬라이드별**:
- Slide 1: 텍스트만 → 대형 타이포그래피 임팩트, 배지 + 주제목 + 서브
- Slide 2: 배경 이미지 `mix-blend-luminosity` → `mix-blend-overlay opacity-30`으로 덜 어둡게
- Slide 3: 우주/기술 이미지 유지, 텍스트 가독성 개선

---

### 3. AboutSection — 라이트 섹션으로 완전 역전
**현재 문제**: 어두운 도시 건물 사진 → 의료기기 업체 이미지와 전혀 안 맞음

**변경**:
- 배경 이미지 제거 (도시 건물 사진 삭제)
- 배경: `#FFFFFF` → `#F0F7FF` 그라디언트 (라이트 아이스 블루)
- 왼쪽 패널: 다크 글래스 → `#FFFFFF` 화이트 카드 + 좌측 `#00B7F1` 4px border
- 텍스트: 흰색 → `#0D1B2E` 네이비
- 서브텍스트: slate-300 → `#334155`
- 우측 슬로건: 네이비 그라디언트 텍스트 + 블루 포인트

**추가 요소**:
- 수치 카운터 3개 (예: 20년 경험 / 병의원 파트너 수 / 취급 장비 수)
  ```
  [20+]     [500+]     [8+]
  년 경험   파트너 병원  취급 장비
  ```
- 배경에 `#00B7F1/5` 격자 패턴 (매우 연하게)

---

### 4. ProductLineup — 라이트 섹션
**현재 문제**: 검정 배경 + 어두운 카드 → 장비가 안 보임

**변경**:
- 섹션 배경: `#020408` → `#F0F7FF`
- 제목 텍스트: 흰색 → `#0D1B2E` 네이비
- 섹션 배지: 다크 패널 → `#00B7F1/10` 연한 블루 배지

**카드 완전 교체**:
```
현재 .product-card:
  background: rgba(15,23,42,0.6)  ← 어두운 다크
  border: rgba(255,255,255,0.05)  ← 거의 안 보임

변경:
  background: #FFFFFF
  border: 1px solid #E8F4FD
  box-shadow: 0 4px 24px rgba(0,183,241,0.08)
  
  hover:
    border-color: #00B7F1
    box-shadow: 0 8px 40px rgba(0,183,241,0.2)
    transform: translateY(-6px)
  
  상단 accent bar (::before):
    background: #00B7F1  (기존 유지, 스케일만 변경)
```

**이미지 필터**:
- `filter: drop-shadow(0 10px 15px rgba(0,0,0,0.5))` → 화이트 배경에 맞게
  `filter: drop-shadow(0 8px 20px rgba(0,183,241,0.15))`로 블루 섀도우

**nav 버튼**:
- 배경 `#050810` → `#FFFFFF` + 블루 보더
- hover: 블루 채움 유지

---

### 5. ConsultingOrbit — 다크 섹션 유지
**현재**: 구조는 좋음, 배경만 조정

**변경**:
- 배경: 현재 다크(약 `#020408`) → `#040D1F` 딥 네이비
- 오빗 글로우 강화: `box-shadow` opacity 올리기
- 섹션 상단/하단 `#00B7F1` divider line 추가

---

### 6. PartnerMarquee — 라이트 섹션
**현재 문제**: 검정 배경 + 흰 로고 40% opacity → 완전히 안 보임

**변경**:
- 배경: `#030508` → `#F5FAFF` (연한 아이스 화이트)
- 로고 필터: `brightness(0) invert(1) opacity(0.4)` → `opacity(0.6)` (다크 로고 그대로)
  - 원본 로고가 다크 컬러라면 필터 제거
  - hover: opacity 1.0 + 블루 컬러 틴트
- 배경 그리드: 블루 계열 → 연한 네이비 계열로 교체
- 상하 fade: `#030508` → `#F5FAFF` 맞춤

---

## 기술적 수정 사항

### 즉시 수정 필요 (버그)
```tsx
// HeroSlider.tsx — Hero 텍스트 안 나오는 문제
// 현재 (잘못됨): whileInView는 뷰포트 진입 시 실행 → Hero는 처음부터 보여야 함
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}  // ← 이게 Hero에서 문제
  ...
>

// 수정: animate 사용
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}      // ← 로드 즉시 실행
  transition={{ duration: 0.8, delay: 0.1 }}
>
```

### globals.css 변수 변경
```css
:root {
  /* 기존 */
  --background: #050810;
  
  /* 변경 */
  --background: #040D1F;
  --color-navy-mid: #0A1F40;
  --color-light-bg: #F0F7FF;
  --color-text-navy: #0D1B2E;
  --color-text-slate: #334155;
}
```

---

## 작업 순서

- [ ] 1. `globals.css` — 변수 교체, product-card 라이트 버전, 타이포그래피
- [ ] 2. `HeroSlider.tsx` — `whileInView` → `animate` 버그 수정 + 네이비 배경 + 글로우
- [ ] 3. `AboutSection.tsx` — 라이트 섹션 역전, 건물사진 제거, 수치 카운터 추가
- [ ] 4. `ProductLineup.tsx` — 라이트 배경 + 화이트 카드
- [ ] 5. `ConsultingOrbit.tsx` — 배경 네이비 조정
- [ ] 6. `PartnerMarquee.tsx` — 라이트 배경 + 로고 필터 교체
- [ ] 7. `Header.tsx` — 초기 반투명 처리
- [ ] 8. `layout.tsx` — Syne + DM Sans 폰트 추가
