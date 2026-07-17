/**
 * Google Apps Script Web App으로 팀 진단(베타) 신청을 저장합니다.
 * Sheets API를 프론트에서 직접 호출하지 않습니다.
 */
(function (global) {
  'use strict';

  var FALLBACK_APPS_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbyMT15cqn52l1n3PyNI1Jom2N3X6xDhaktwpYoKse67vp7mGdIbnnxt8rBa6-kTGI_-/exec';

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
    var biggestProblem = emptyToString(formData.biggestProblem || formData.painPoint);
    var betaUsageIntent = emptyToString(formData.betaUsageIntent || formData.betaInterest);
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
        questionId: 'biggestProblem',
        question: '가장 큰 문제점',
        answer: biggestProblem,
        score: 0,
      },
      {
        questionId: 'betaUsageIntent',
        question: '베타 사용 의향',
        answer: betaUsageIntent,
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
    // DOM/수집 단계에서 이미 통일된 키를 우선 사용
    var biggestProblem = emptyToString(
      formData.biggestProblem != null && formData.biggestProblem !== ''
        ? formData.biggestProblem
        : formData.painPoint
    );
    var betaUsageIntent = emptyToString(
      formData.betaUsageIntent != null && formData.betaUsageIntent !== ''
        ? formData.betaUsageIntent
        : formData.betaInterest
    );

    return {
      submittedAt: new Date().toISOString(),
      submissionId: submissionId,
      source: 'birzont.com',
      diagnosisType: '우리 팀 진단하기',
      name: '',
      email: email,
      phone: '',
      company: '',
      teamName: '',
      position: '',
      // Sheet 열 매핑용 (Apps Script appendRow A–J)
      nameOrTeam: '',
      teamSize: emptyToString(formData.teamSize),
      usedAi: (formData.aiTools || []).join(', '),
      aiTools: (formData.aiTools || []).join(', '),
      knowledgeStorage: (formData.knowledgeSources || []).join(', '),
      knowledgeSources: (formData.knowledgeSources || []).join(', '),
      biggestProblem: biggestProblem,
      betaUsageIntent: betaUsageIntent,
      additionalComment: (formData.checklistItems || []).join(' | '),
      checklistItems: (formData.checklistItems || []).join(' | '),
      referralPath: 'birzont.com',
      totalScore: 0,
      resultType: '',
      resultTitle: '',
      resultDescription: '',
      answersJson: JSON.stringify(answers),
      categoryScoresJson: JSON.stringify(categoryScores),
      userInfoJson: JSON.stringify({
        name: '',
        email: email,
        phone: '',
        company: '',
        teamName: '',
        position: '',
      }),
      scoresJson: JSON.stringify({ totalScore: 0, categoryScores: categoryScores }),
      resultJson: JSON.stringify({
        resultType: '',
        resultTitle: '',
        resultDescription: '',
      }),
      metadataJson: JSON.stringify({
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      }),
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      userInfo: {
        name: '',
        email: email,
        phone: '',
        company: '',
        teamName: '',
        position: '',
      },
      answers: answers,
      scores: { totalScore: 0, categoryScores: categoryScores },
      result: { resultType: '', resultTitle: '', resultDescription: '' },
      metadata: {
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      },
    };
  }

  /**
   * Apps Script appendRow(A–J)가 읽는 평탄 payload만 전송.
   * 중첩 객체(answers/userInfo 등)는 파싱·키 혼선을 줄이기 위해 body에서 제외.
   */
  function toSheetPayload(data) {
    var d = data && typeof data === 'object' ? data : {};
    var biggestProblem = emptyToString(d.biggestProblem || d.painPoint || '');
    var betaUsageIntent = emptyToString(d.betaUsageIntent || d.betaInterest || '');
    var usedAi = emptyToString(d.usedAi || d.aiTools || '');
    var knowledgeStorage = emptyToString(d.knowledgeStorage || d.knowledgeSources || '');

    return {
      submittedAt: emptyToString(d.submittedAt) || new Date().toISOString(),
      email: emptyToString(d.email),
      nameOrTeam: emptyToString(d.nameOrTeam || d.teamName || d.name),
      teamSize: emptyToString(d.teamSize),
      usedAi: usedAi,
      aiTools: usedAi,
      knowledgeStorage: knowledgeStorage,
      knowledgeSources: knowledgeStorage,
      // G / H — Apps Script 필수 키
      biggestProblem: biggestProblem,
      betaUsageIntent: betaUsageIntent,
      // 구버전 Apps Script 호환 별칭 (같은 사용자 입력값)
      painPoint: biggestProblem,
      betaInterest: betaUsageIntent,
      additionalComment: emptyToString(d.additionalComment || d.checklistItems),
      checklistItems: emptyToString(d.checklistItems || d.additionalComment),
      referralPath: emptyToString(d.referralPath || d.source || 'birzont.com'),
      source: emptyToString(d.source || d.referralPath || 'birzont.com'),
      pageUrl: emptyToString(d.pageUrl),
      submissionId: emptyToString(d.submissionId),
      diagnosisType: emptyToString(d.diagnosisType || '우리 팀 진단하기'),
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

    var sheetPayload = toSheetPayload(data);

    var response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(sheetPayload),
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
    toSheetPayload: toSheetPayload,
    submitDiagnosis: submitDiagnosis,
  };
})(typeof window !== 'undefined' ? window : globalThis);
