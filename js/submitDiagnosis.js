/**
 * Google Apps Script Web App으로 팀 진단 신청을 저장합니다.
 * Sheet「진단응답」열: A접수시간 B이메일 C팀규모 D사용AI E지식저장소 F가장불편한문제 G베타사용의향 H유입경로
 */
(function (global) {
  'use strict';

  var FALLBACK_APPS_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbx2DrVJ5C-0GrfMfV13H5IHgWawymb1OmLv1sM4oQSNCCp9_3AGSp3ZNozRMtQnEhoD/exec';

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
    return String(value);
  }

  function createSubmissionId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    return Date.now() + '-' + Math.random().toString(36).slice(2);
  }

  /**
   * 「진단응답」시트 8열에 맞는 평탄 payload만 구성.
   * biggestProblem / betaUsageIntent 는 최상위 필드로 유지.
   */
  function toSheetPayload(data) {
    var d = data && typeof data === 'object' ? data : {};
    var usedAI = emptyToString(d.usedAI || d.usedAi || d.aiTools || '').trim();
    var knowledgeStorage = emptyToString(
      d.knowledgeStorage || d.knowledgeSources || d.knowledgeTools || ''
    ).trim();
    var biggestProblem = emptyToString(
      d.biggestProblem || d.painPoint || d.mainProblem || ''
    ).trim();
    var betaUsageIntent = emptyToString(
      d.betaUsageIntent || d.betaInterest || d.betaIntent || ''
    ).trim();

    return {
      submittedAt: emptyToString(d.submittedAt).trim() || new Date().toISOString(),
      email: emptyToString(d.email).trim(),
      teamSize: emptyToString(d.teamSize).trim(),
      usedAI: usedAI,
      usedAi: usedAI,
      aiTools: usedAI,
      knowledgeStorage: knowledgeStorage,
      knowledgeSources: knowledgeStorage,
      biggestProblem: biggestProblem,
      betaUsageIntent: betaUsageIntent,
      // Apps Script 별칭 호환 (동일 사용자 입력값)
      painPoint: biggestProblem,
      betaInterest: betaUsageIntent,
      referralPath: emptyToString(d.referralPath || d.source || 'birzont.com').trim(),
      source: emptyToString(d.source || d.referralPath || 'birzont.com').trim(),
      pageUrl: emptyToString(d.pageUrl).trim(),
      submissionId: emptyToString(d.submissionId).trim(),
    };
  }

  function createDiagnosisPayload(formData, submissionId) {
    var biggestProblem = emptyToString(formData.biggestProblem || formData.painPoint || '').trim();
    var betaUsageIntent = emptyToString(
      formData.betaUsageIntent || formData.betaInterest || ''
    ).trim();
    var usedAI = (formData.aiTools || []).join(', ');
    var knowledgeStorage = (formData.knowledgeSources || []).join(', ');

    return toSheetPayload({
      submittedAt: new Date().toISOString(),
      submissionId: submissionId,
      email: formData.email,
      teamSize: formData.teamSize,
      usedAI: usedAI,
      aiTools: usedAI,
      knowledgeStorage: knowledgeStorage,
      knowledgeSources: knowledgeStorage,
      biggestProblem: biggestProblem,
      betaUsageIntent: betaUsageIntent,
      referralPath: 'birzont.com',
      source: 'birzont.com',
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
    });
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

    // 이미 평탄 payload여도 한 번 더 정규화해 F/G 키가 최상위에 있도록 보장
    var payload = toSheetPayload(data);

    var response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
      redirect: 'manual',
    });

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
