/**
 * Google Apps Script Web App으로 팀 진단(베타) 신청을 저장합니다.
 * Sheets API를 프론트에서 직접 호출하지 않습니다.
 */
(function (global) {
  'use strict';

  var FALLBACK_APPS_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbxpBDmFpuHyL2dm8ittvAOFfxfW7cVnWAMCLosCQpo9bty0KcoTBDULoAMPBP7p4fHC/exec';

  function getAppsScriptUrl() {
    if (typeof global.BIRZONT_GOOGLE_APPS_SCRIPT_URL === 'string' && global.BIRZONT_GOOGLE_APPS_SCRIPT_URL) {
      return global.BIRZONT_GOOGLE_APPS_SCRIPT_URL;
    }
    var meta = document.querySelector('meta[name="birzont-apps-script-url"]');
    if (meta && meta.content) return meta.content.trim();
    return FALLBACK_APPS_SCRIPT_URL;
  }

  function emptyToString(value) {
    if (value === undefined || value === null) return '';
    return value;
  }

  function createSubmissionId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    return Date.now() + '-' + Math.random().toString(36).slice(2);
  }

  /**
   * 현재 폼에 점수/결과 유형 계산 로직은 없음.
   * 존재하는 질문·답변만 answers로 정규화하고, scores/result는 빈 기본값으로 둔다.
   */
  function buildAnswers(formData) {
    var answers = [
      {
        questionId: 'team-size',
        question: '팀 규모',
        answer: emptyToString(formData.teamSize),
        score: 0,
      },
      {
        questionId: 'ai-tools',
        question: '현재 쓰는 AI 도구',
        answer: (formData.aiTools || []).join(', '),
        score: 0,
      },
      {
        questionId: 'knowledge-sources',
        question: '팀 지식이 있는 곳',
        answer: (formData.knowledgeSources || []).join(', '),
        score: 0,
      },
      {
        questionId: 'pain-point',
        question: '가장 불편한 문제',
        answer: emptyToString(formData.painPoint),
        score: 0,
      },
      {
        questionId: 'beta-interest',
        question: '베타 사용 의향',
        answer: emptyToString(formData.betaInterest),
        score: 0,
      },
      {
        questionId: 'checklist',
        question: '체크리스트에서 선택한 항목',
        answer: (formData.checklistItems || []).join(' | '),
        score: 0,
      },
    ];

    return answers;
  }

  function createDiagnosisPayload(formData, submissionId) {
    var answers = buildAnswers(formData);
    var email = emptyToString(formData.email);
    var categoryScores = {};

    var nested = {
      submittedAt: new Date().toISOString(),
      submissionId: submissionId,
      source: 'birzont.com',
      diagnosisType: '우리 팀 진단하기',
      userInfo: {
        name: '',
        email: email,
        phone: '',
        company: '',
        teamName: '',
        position: '',
      },
      answers: answers,
      scores: {
        totalScore: 0,
        categoryScores: categoryScores,
      },
      result: {
        resultType: '',
        resultTitle: '',
        resultDescription: '',
      },
      metadata: {
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      },
      // 원본 폼 필드 (시트에서 컬럼으로 쓰기 쉽게)
      teamSize: emptyToString(formData.teamSize),
      aiTools: (formData.aiTools || []).join(', '),
      knowledgeSources: (formData.knowledgeSources || []).join(', '),
      painPoint: emptyToString(formData.painPoint),
      betaInterest: emptyToString(formData.betaInterest),
      checklistItems: (formData.checklistItems || []).join(' | '),
    };

    // Apps Script가 평탄 구조를 기대할 때를 위한 필드
    return {
      submittedAt: nested.submittedAt,
      submissionId: nested.submissionId,
      source: nested.source,
      diagnosisType: nested.diagnosisType,
      name: '',
      email: email,
      phone: '',
      company: '',
      teamName: '',
      position: '',
      teamSize: nested.teamSize,
      aiTools: nested.aiTools,
      knowledgeSources: nested.knowledgeSources,
      painPoint: nested.painPoint,
      betaInterest: nested.betaInterest,
      checklistItems: nested.checklistItems,
      totalScore: 0,
      resultType: '',
      resultTitle: '',
      resultDescription: '',
      answersJson: JSON.stringify(answers),
      categoryScoresJson: JSON.stringify(categoryScores),
      userInfoJson: JSON.stringify(nested.userInfo),
      scoresJson: JSON.stringify(nested.scores),
      resultJson: JSON.stringify(nested.result),
      metadataJson: JSON.stringify(nested.metadata),
      pageUrl: nested.metadata.pageUrl,
      userAgent: nested.metadata.userAgent,
      // 중첩 구조도 함께 전달 (Apps Script가 객체로 파싱하는 경우)
      userInfo: nested.userInfo,
      answers: answers,
      scores: nested.scores,
      result: nested.result,
      metadata: nested.metadata,
    };
  }

  /**
   * @param {unknown} data
   * @returns {Promise<unknown>}
   */
  async function submitDiagnosis(data) {
    var url = getAppsScriptUrl();
    if (!url) {
      throw new Error('Google Apps Script URL이 설정되지 않았습니다.');
    }

    var response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
      // Apps Script는 doPost 후 302로 echo URL을 넘김. follow 시 POST→GET으로 깨질 수 있음.
      redirect: 'manual',
    });

    // CORS opaque redirect / 수동 리다이렉트: 초기 POST에서 이미 저장된 경우가 많음
    if (
      response.type === 'opaqueredirect' ||
      response.type === 'opaque' ||
      response.status === 0 ||
      response.status === 301 ||
      response.status === 302 ||
      response.status === 303
    ) {
      return { success: true, message: '저장되었습니다.' };
    }

    if (!response.ok) {
      throw new Error('Google Sheets 저장 실패: ' + response.status);
    }

    var result = null;
    try {
      result = await response.json();
    } catch (_) {
      // 빈 응답·비JSON이어도 HTTP 성공이면 치명적 오류로 보지 않음
      return { success: true, message: '저장되었습니다.' };
    }

    if (result && result.success === false) {
      throw new Error(result.message || 'Google Sheets 저장에 실패했습니다.');
    }

    return result;
  }

  global.BirzontDiagnosis = {
    getAppsScriptUrl: getAppsScriptUrl,
    createSubmissionId: createSubmissionId,
    createDiagnosisPayload: createDiagnosisPayload,
    submitDiagnosis: submitDiagnosis,
  };
})(typeof window !== 'undefined' ? window : globalThis);
