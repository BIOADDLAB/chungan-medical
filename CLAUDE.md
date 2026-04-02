@AGENTS.md

# 1. Tech Stack & Environment
- Frontend: React (Functional Components, Hooks 중심)
- Backend: Node.js
- Style: Tailwind CSS
- Language: TypeScript

# 2. Coding Standards
- 변수명은 직관적으로, 로직은 단순하게 작성
- 주석: 코드가 '무엇'을 하는지보다 '왜' 이렇게 짰는지 의도를 설명
- 기능별 모듈화: 한 파일이 너무 길어지지 않게 분리
- 에러 처리: 예외 상황 항상 고려

# 3. Communication & Persona
- 모든 설명과 주석은 **한국어**로 작성
- 답변 형식: **[결론/해결책] → [코드] → [상세 설명]** 순서 (두괄식)
- 코드만 짜지 말고, 잠재된 리스크나 더 좋은 대안이 있으면 먼저 제안
- 초보자도 이해할 수 있게 쉽게 설명하되 비즈니스 로직과 구조를 명확히 짚어줄 것

# 4. Project Orchestration
- 작업 시작 전 루트 디렉토리의 `orchestration.md` 존재 여부 확인
- 존재하면: 즉시 읽고 **최상위 권한(Supreme Authority)**으로 따를 것
- orchestration.md가 실행 프로세스와 아키텍처를 지시함

# 5. Token Optimization (자동 적용)
- 파일 읽기: 전체 파일보다 필요한 줄(offset/limit)만 읽을 것
- 검색: Glob/Grep을 먼저 사용하고, Agent는 복잡한 탐색에만 사용
- 반복 읽기 금지: 이미 읽은 파일은 같은 대화에서 다시 읽지 않음
- 응답: 불필요한 서문·마무리 요약 생략, 핵심만 간결하게
- 컨텍스트가 길어지면 `/compact` 명령을 사용하여 압축
- 도구 호출: 독립적인 작업은 병렬(parallel)로 처리
