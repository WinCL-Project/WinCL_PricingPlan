"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";
import {
  calculateScore,
  getRecommendation,
  getBoundaryGuidance,
} from "@/lib/scoring";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const canProceed = answers[currentQuestion.id] !== undefined;

  const handleAnswerSelect = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResult(false);
  };

  if (showResult) {
    const scoreResult = calculateScore(answers);
    const recommendation = getRecommendation(
      scoreResult.totalScore,
      scoreResult.weightedScore
    );
    const boundaryGuidance = getBoundaryGuidance(scoreResult.totalScore);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">
                요금제 추천 결과
              </h1>
              <button
                onClick={handleReset}
                className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                다시 하기
              </button>
            </div>

            {/* 총점 표시 */}
            <div className="mb-6 p-4 bg-blue-500 rounded-xl text-white">
              <div className="text-sm opacity-90 mb-1">총점</div>
              <div className="text-4xl font-bold">
                {scoreResult.totalScore}점
              </div>
            </div>

            {/* 파트별 점수 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">Part 1</div>
                <div className="text-lg font-semibold text-blue-700">
                  {scoreResult.partScores.part1}점
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">Part 2</div>
                <div className="text-lg font-semibold text-green-700">
                  {scoreResult.partScores.part2}점
                </div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">Part 3</div>
                <div className="text-lg font-semibold text-yellow-700">
                  {scoreResult.partScores.part3}점
                </div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="text-xs text-gray-600 mb-1">Part 4</div>
                <div className="text-lg font-semibold text-purple-700">
                  {scoreResult.partScores.part4}점
                </div>
              </div>
            </div>

            {/* 추천 플랜 */}
            <div
              className={`mb-6 rounded-xl p-6 ${
                recommendation.plan === "Essential"
                  ? "bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300"
                  : recommendation.plan === "Plus"
                  ? "bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300"
                  : "bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`text-3xl font-bold ${
                    recommendation.plan === "Essential"
                      ? "text-green-700"
                      : recommendation.plan === "Plus"
                      ? "text-blue-700"
                      : "text-purple-700"
                  }`}
                >
                  {recommendation.plan} 플랜
                </div>
                {recommendation.plan === "Pro" && (
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-semibold">
                    PREMIUM
                  </span>
                )}
              </div>

              {/* 메시지 */}
              <div className="text-gray-700 whitespace-pre-line mb-4 text-sm leading-relaxed">
                {recommendation.message}
              </div>

              {/* 주요 기능 */}
              <div className="mt-4 pt-4 border-t border-gray-300">
                <div className="text-sm font-semibold text-gray-700 mb-2">
                  주요 기능:
                </div>
                <ul className="space-y-2">
                  {recommendation.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 경계선 가이드 */}
            {boundaryGuidance && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-600 text-xl">💡</span>
                  <div className="text-sm text-gray-700 mt-[5px]">
                    {boundaryGuidance}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 문의하기 버튼 일단 보류 */}
          {/* <div className="bg-white rounded-xl shadow-lg p-6">
            <button className="w-full py-4 bg-blue-500 text-white rounded-xl font-semibold text-lg hover:bg-blue-400 transition-all shadow-lg">
              전문가 상담 신청하기
            </button>
            <div className="text-center text-xs text-gray-500 mt-3">
              더 자세한 상담이 필요하시면 문의하기 버튼을 눌러주세요.
            </div>
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* 진행률 표시 바 */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              {currentQuestionIndex + 1} / {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(
                ((currentQuestionIndex + 1) / questions.length) * 100
              )}
              %
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / questions.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        {/* 질문 카드 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="text-xs text-gray-500 mb-3">
            {currentQuestion.part}
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-6 leading-relaxed">
            {currentQuestion.question}
          </h2>

          {/* 질문지 */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentQuestion.id] === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-400 bg-white"
                      }`}
                    >
                      {isSelected && (
                        <div className="w-3 h-3 rounded-full bg-white" />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isSelected ? "text-blue-900" : "text-gray-700"
                      }`}
                    >
                      {option.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="flex gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex-1 py-4 rounded-xl font-semibold transition-all ${
              currentQuestionIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-300"
            }`}
          >
            이전
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`flex-1 py-4 rounded-xl font-semibold text-white transition-all ${
              canProceed
                ? "bg-blue-500 hover:bg-blue-400 shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isLastQuestion ? "결과 보기" : "다음"}
          </button>
        </div>
      </div>
    </div>
  );
}
