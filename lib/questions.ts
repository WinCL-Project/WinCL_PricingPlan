export interface QuestionOption {
  id: string;
  label: string;
  score: number;
}

export interface Question {
  id: string;
  part: string;
  question: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: "q1",
    part: "Part 1: 기업 기본 정보",
    question: "귀사의 사업장 수는 몇 개입니까?",
    options: [
      { id: "q1a", label: "1개 법인만 있음", score: 0 },
      { id: "q1b", label: "2-3개 사업장", score: 5 },
      { id: "q1c", label: "4-5개 사업장", score: 10 },
      { id: "q1d", label: "6개 이상 사업장", score: 15 },
    ],
  },
  {
    id: "q2",
    part: "Part 1: 기업 기본 정보",
    question: "귀사의 연간 매출 규모는?",
    options: [
      { id: "q2a", label: "50억 미만", score: 0 },
      { id: "q2b", label: "50억~300억", score: 5 },
      { id: "q2c", label: "300억~1,000억", score: 10 },
      { id: "q2d", label: "1,000억 이상", score: 15 },
    ],
  },
  {
    id: "q3",
    part: "Part 1: 기업 기본 정보",
    question: "귀사가 속한 산업군은?",
    options: [
      { id: "q3a", label: "서비스업/소프트웨어", score: 0 },
      { id: "q3b", label: "유통/도소매", score: 5 },
      { id: "q3c", label: "제조업(경공업)", score: 10 },
      { id: "q3d", label: "제조업(중화학/에너지)", score: 15 },
    ],
  },

  {
    id: "q4",
    part: "Part 2: 탄소 관리 성숙도",
    question: "현재 귀사의 탄소배출량 관리 수준은?",
    options: [
      { id: "q4a", label: "전혀 관리하지 않음 / 처음 시작", score: 0 },
      { id: "q4b", label: "간단한 계산만 해본 적 있음", score: 7 },
      { id: "q4c", label: "엑셀이나 별도 툴로 주기적 관리 중", score: 15 },
      { id: "q4d", label: "전문 시스템으로 상세 관리 중", score: 20 },
    ],
  },
  {
    id: "q5",
    part: "Part 2: 탄소 관리 성숙도",
    question: "Scope 3 (공급망 배출) 관리가 필요하신가요?",
    options: [
      { id: "q5a", label: "필요 없음 / 잘 모르겠음", score: 0 },
      { id: "q5b", label: "향후 필요할 것 같음", score: 8 },
      { id: "q5c", label: "곧 필요함 (1년 내)", score: 15 },
      { id: "q5d", label: "현재 시급하게 필요함", score: 25 },
    ],
  },
  {
    id: "q6",
    part: "Part 2: 탄소 관리 성숙도",
    question: "배출원(에너지 사용 설비) 관리 필요 수준은?",
    options: [
      { id: "q6a", label: "전체 법인 단위로만 파악하면 충분", score: 0 },
      { id: "q6b", label: "주요 배출원 30개 미만 파악 필요", score: 10 },
      { id: "q6c", label: "50개 내외의 배출원 상세 관리 필요", score: 15 },
      { id: "q6d", label: "50개 이상, 무제한 배출원 관리 필요", score: 25 },
    ],
  },

  {
    id: "q7",
    part: "Part 3: 규제 대응 및 외부 요구사항",
    question: "EU CBAM, ESRS 등 글로벌 탄소 규제 대응이 필요하신가요?",
    options: [
      { id: "q7a", label: "해당 없음", score: 0 },
      { id: "q7b", label: "향후 대응 필요 (2년 이후)", score: 10 },
      { id: "q7c", label: "1-2년 내 대응 필요", score: 20 },
      { id: "q7d", label: "즉시 대응 필요", score: 30 },
    ],
  },
  {
    id: "q8",
    part: "Part 3: 규제 대응 및 외부 요구사항",
    question:
      "고객사나 투자자로부터 탄소 데이터 제출 요구를 받은 적이 있습니까?",
    options: [
      { id: "q8a", label: "없음", score: 0 },
      { id: "q8b", label: "1-2회 요청받음", score: 10 },
      { id: "q8c", label: "정기적으로 요청받음", score: 20 },
      { id: "q8d", label: "실시간/상시 관리 필요", score: 30 },
    ],
  },
  {
    id: "q9",
    part: "Part 3: 규제 대응 및 외부 요구사항",
    question: "협력사(공급망) 탄소 관리가 필요하신가요?",
    options: [
      { id: "q9a", label: "필요 없음", score: 0 },
      { id: "q9b", label: "향후 필요할 수 있음", score: 10 },
      { id: "q9c", label: "일부 협력사 관리 필요", score: 20 },
      { id: "q9d", label: "다수 협력사 통합 관리 필수", score: 35 },
    ],
  },

  {
    id: "q10",
    part: "Part 4: 고급 기능 요구사항",
    question: "제3자 검증이 필요하신가요?",
    options: [
      { id: "q10a", label: "필요 없음", score: 0 },
      { id: "q10b", label: "향후 필요할 수 있음", score: 8 },
      { id: "q10c", label: "Scope 1,2 검증 필요", score: 15 },
      { id: "q10d", label: "Scope 1,2,3 모두 검증 필요", score: 25 },
    ],
  },
  {
    id: "q11",
    part: "Part 4: 고급 기능 요구사항",
    question: "탄소 감축 목표 관리 기능이 필요하신가요?",
    options: [
      { id: "q11a", label: "필요 없음", score: 0 },
      { id: "q11b", label: "간단한 목표만 설정", score: 8 },
      { id: "q11c", label: "중장기 감축 로드맵 필요", score: 15 },
      { id: "q11d", label: "SBT, RE100 등 이니셔티브 대응 필요", score: 20 },
    ],
  },
  {
    id: "q12",
    part: "Part 4: 고급 기능 요구사항",
    question: "보고서 생성 기능의 필요 수준은?",
    options: [
      { id: "q12a", label: "필요 없음 (단순 데이터 확인만)", score: 0 },
      { id: "q12b", label: "엑셀 다운로드면 충분", score: 5 },
      { id: "q12c", label: "간편 보고서 자동 생성 필요", score: 15 },
      { id: "q12d", label: "공시 대응용 상세 보고서 필요", score: 25 },
    ],
  },
];
