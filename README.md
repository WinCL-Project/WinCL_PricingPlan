# WinCL 탄소 관리 요금제 추천 설문 앱

탄소 관리 플랫폼을 위한 요금제 추천 모바일 웹 앱입니다.

## 기능

- **12개 질문 기반 설문**: 4개 카테고리로 구성된 상세 설문

  - Part 1: 기업 기본 정보 (20%)
  - Part 2: 탄소 관리 성숙도 (25%)
  - Part 3: 규제 대응 및 외부 요구사항 (30%)
  - Part 4: 고급 기능 요구사항 (25%)

- **스마트 점수 계산**: 가중치 기반 점수 산정 시스템
- **요금제 추천**: Essential, Plus, Pro 플랜 자동 추천
- **모바일 최적화**: 터치 친화적인 모바일 UI/UX

## 시작하기

### 필요한 것들

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

프로덕션 빌드:

```bash
npm run build
npm start
```

## 기술 스택

- **Next.js 16** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 우선 CSS
- **App Router** - Next.js 최신 라우팅

## 프로젝트 구조

```
.
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 전역 스타일
├── lib/
│   ├── questions.ts        # 설문 질문 데이터
│   └── scoring.ts          # 점수 계산 및 추천 로직
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 요금제 추천 기준

- **Essential (무료)**: 0-60점
  - 소규모 기업, 탄소 관리 초기 단계
- **Plus (월 50만원)**: 61-150점
  - 중소·중견기업, Scope 1,2 상세 관리 필요
- **Pro (문의)**: 151점 이상
  - 대기업, Scope 3 필수, 글로벌 규제 대응

## 경계선 케이스

- **55-65점**: Essential과 Plus 경계, 업그레이드 안내
- **145-155점**: Plus와 Pro 경계, 단계적 도입 권유

## 라이선스

ISC

