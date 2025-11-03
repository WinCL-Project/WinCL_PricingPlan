import { questions } from "./questions";

export interface ScoreResult {
  totalScore: number;
  partScores: {
    part1: number;
    part2: number;
    part3: number;
    part4: number;
  };
  weightedScore: number;
}

export interface PlanRecommendation {
  plan: "Essential" | "Plus" | "Pro";
  score: number;
  message: string;
  features: string[];
}

export function calculateScore(answers: Record<string, string>): ScoreResult {
  let part1Score = 0;
  let part2Score = 0;
  let part3Score = 0;
  let part4Score = 0;

  questions.forEach((question, index) => {
    const answerId = answers[question.id];
    if (!answerId) return;

    const option = question.options.find((opt) => opt.id === answerId);
    if (!option) return;

    const score = option.score;

    // 질문 번호에 따라 파트 구분
    if (index < 3) {
      // Q1-Q3: Part 1 => 기업 기본 정보
      part1Score += score;
    } else if (index < 6) {
      // Q4-Q6: Part 2 => 탄소 관리 성숙도
      part2Score += score;
    } else if (index < 9) {
      // Q7-Q9: Part 3 => 규제 대응
      part3Score += score;
    } else {
      // Q10-Q12: Part 4 => 고급 기능
      part4Score += score;
    }
  });

  const totalScore = part1Score + part2Score + part3Score + part4Score;

  // 가중치 적용 (Part1: 20%, Part2: 25%, Part3: 30%, Part4: 25%)
  const weightedScore =
    part1Score * 0.2 + part2Score * 0.25 + part3Score * 0.3 + part4Score * 0.25;

  return {
    totalScore,
    partScores: {
      part1: part1Score,
      part2: part2Score,
      part3: part3Score,
      part4: part4Score,
    },
    weightedScore,
  };
}

export function getRecommendation(
  totalScore: number,
  weightedScore: number
): PlanRecommendation {
  // 경계선 케이스 처리
  if (totalScore <= 60) {
    return {
      plan: "Essential",
      score: totalScore,
      message:
        "귀사는 Essential 플랜이 적합합니다. 탄소 관리를 처음 시작하시는 단계로, 무료로 법인 단위 기본 산정(Scope 1,2)과 간편 대시보드를 활용하실 수 있습니다. 탄소 관리의 첫 걸음을 부담 없이 시작해보세요.",
      features: [
        "법인 단위 기본 산정 (Scope 1, 2)",
        "간편 대시보드",
        "무료 제공",
      ],
    };
  } else if (totalScore >= 151) {
    return {
      plan: "Pro",
      score: totalScore,
      message:
        "귀사는 Pro 플랜이 필수적입니다.\n\n선택 이유:\n• 복잡한 사업 구조: 5개 사업장까지 등록 가능하여 전사 통합 관리가 가능합니다\n• 공급망 관리 필수: 협력사 및 고객사 등록을 통해 Scope 3 카테고리(1,2,5,14,15) 관리가 가능합니다\n• 무제한 배출원: 모든 에너지 사용 설비를 빠짐없이 등록하고 관리할 수 있습니다\n• 전체 검증: Scope 1,2는 물론 Scope 3 카테고리별 제3자 검증서 발급이 가능합니다\n• 고급 보고: 공시 대응 및 유관기관 제출용 상세 보고서를 자동 생성할 수 있습니다\n• 규제 대응: EU CBAM, ESRS 등 글로벌 탄소 규제에 즉시 대응하실 수 있습니다\n\n특별 혜택으로 1년 정기 구독 시 삼성 갤럭시북5 Pro가 제공됩니다.\n\n귀사의 탄소 관리 복잡도와 외부 요구사항을 고려할 때, Pro 플랜이 유일한 솔루션입니다. 상세한 도입 계획은 전문가 상담을 통해 맞춤 구성해드리겠습니다.",
      features: [
        "5개 사업장까지 등록 가능",
        "Scope 3 전체 카테고리 관리",
        "무제한 배출원 관리",
        "Scope 1,2,3 전체 검증",
        "공시 대응 상세 보고서",
        "글로벌 규제 즉시 대응",
        "1년 구독 시 갤럭시북5 Pro 제공",
      ],
    };
  } else {
    // Plus 플랜 (61-150점)
    return {
      plan: "Plus",
      score: totalScore,
      message:
        "귀사는 Plus 플랜을 추천합니다.\n\n선택 이유:\n• 사업장별 상세 산정으로 배출 현황을 정확히 파악하실 수 있습니다\n• 최대 50개 배출원 관리로 주요 에너지원을 체계적으로 추적할 수 있습니다\n• Scope 1,2 제3자 검증서 발급으로 외부 보고 시 신뢰성을 확보하실 수 있습니다\n• 감축 목표 관리 기능으로 중장기 계획을 수립하실 수 있습니다\n• 탄소 감축 관리 지표를 통해 개선 영역을 식별하실 수 있습니다\n\n현재 귀사의 탄소 관리 성숙도와 규제 대응 필요성을 고려할 때, Plus 플랜이 최적의 투자 대비 효과를 제공합니다.",
      features: [
        "사업장별 상세 산정",
        "최대 50개 배출원 관리",
        "Scope 1,2 제3자 검증",
        "감축 목표 관리",
        "탄소 감축 관리 지표",
        "월 50만원 / 연 500만원",
      ],
    };
  }
}

export function getBoundaryGuidance(totalScore: number): string | null {
  if (totalScore >= 55 && totalScore <= 65) {
    return "Essential과 Plus 경계 구간입니다. Essential로 시작 후 필요 시 Plus로 업그레이드하실 수 있습니다.";
  }
  if (totalScore >= 145 && totalScore <= 155) {
    return "Plus와 Pro 경계 구간입니다. 단계적 도입을 통해 Pro 전환을 검토해보실 수 있습니다.";
  }
  return null;
}
