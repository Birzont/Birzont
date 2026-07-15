/**
 * Birzont — 진단 신청 Google Sheets 저장용 Apps Script
 *
 * 사용법:
 * 1. 스프레드시트(또는 script.google.com)에서 이 파일 내용을 Code.gs에 붙여넣기
 * 2. 저장 후 [배포] → [배포 관리] → 연필(수정) → 버전: 새 버전 → 배포
 * 3. /exec URL이 기존과 같은지 확인
 *
 * Sheet ID: 1cJiJ4tiqkKe-lGHlabBwMiLXPna2YxH5jejwQaE-7pA
 *
 * 원인 요약:
 * 프론트는 예전 키(painPoint, betaInterest)와 권장 키(biggestProblem, betaUsageIntent)를
 * 함께 보냅니다. 이 스크립트는 둘 다 읽고, 헤더명 기준으로 열에 기록합니다.
 */

var SHEET_ID = '1cJiJ4tiqkKe-lGHlabBwMiLXPna2YxH5jejwQaE-7pA';
// 시트 탭 이름 — 실제 탭명과 다르면 여기를 바꾸세요. 비우면 첫 번째 시트를 사용합니다.
var SHEET_NAME = '';

/**
 * 헤더에 없으면 오른쪽에 추가할 열 (한글 헤더 = 시트 표시명)
 */
var REQUIRED_HEADERS = [
  'submittedAt',
  'submissionId',
  'email',
  'teamSize',
  'aiTools',
  'knowledgeSources',
  'checklistItems',
  '베타 사용 의향',
  '가장 큰 문제점',
  'totalScore',
  'resultType',
  'answersJson',
];

function doPost(e) {
  try {
    var raw = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var data = JSON.parse(raw);

    var betaUsageIntent =
      data.betaUsageIntent ||
      data.betaInterest ||
      data.betaWillingness ||
      '';

    var biggestProblemRaw =
      data.biggestProblem ||
      data.painPoint ||
      data.mainProblem ||
      data.biggestChallenge ||
      '';

    var biggestProblem = Array.isArray(biggestProblemRaw)
      ? biggestProblemRaw.join(', ')
      : String(biggestProblemRaw == null ? '' : biggestProblemRaw);

    // 개발 확인용 (Apps Script 실행 로그)
    // Logger.log({ betaUsageIntent: betaUsageIntent, biggestProblem: biggestProblem });

    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = SHEET_NAME ? ss.getSheetByName(SHEET_NAME) : ss.getSheets()[0];
    if (!sheet) {
      throw new Error('시트를 찾을 수 없습니다.');
    }

    ensureHeaders_(sheet);

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var row = headers.map(function (header) {
      return valueForHeader_(header, data, betaUsageIntent, biggestProblem);
    });

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: '저장되었습니다.',
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: error.message || String(error),
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Birzont diagnosis endpoint is running.',
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function ensureHeaders_(sheet) {
  var lastCol = Math.max(sheet.getLastColumn(), 1);
  var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  var existing = {};
  headers.forEach(function (h) {
    if (h) existing[String(h)] = true;
  });

  var toAdd = [];
  REQUIRED_HEADERS.forEach(function (h) {
    if (!existing[h]) toAdd.push(h);
  });

  // 한글 헤더만 따로 보장 (이미 영문 키가 헤더일 수도 있음)
  ['베타 사용 의향', '가장 큰 문제점', 'betaUsageIntent', 'biggestProblem'].forEach(function (h) {
    if (!existing[h] && toAdd.indexOf(h) === -1) {
      // REQUIRED에 이미 있으면 스킵 — 한글만 없을 때 추가
      if (h === '베타 사용 의향' || h === '가장 큰 문제점') {
        if (!existing[h]) toAdd.push(h);
      }
    }
  });

  if (toAdd.length) {
    var startCol = sheet.getLastColumn() + 1;
    if (sheet.getLastColumn() === 0) startCol = 1;
    sheet.getRange(1, startCol, 1, startCol + toAdd.length - 1).setValues([toAdd]);
  }
}

function valueForHeader_(header, data, betaUsageIntent, biggestProblem) {
  var h = String(header || '').trim();

  if (h === '베타 사용 의향' || h === 'betaUsageIntent' || h === 'betaInterest') {
    return betaUsageIntent;
  }
  if (h === '가장 큰 문제점' || h === '가장 불편한 문제' || h === 'biggestProblem' || h === 'painPoint') {
    return biggestProblem;
  }

  // 평탄 필드 직접 매핑
  if (Object.prototype.hasOwnProperty.call(data, h) && data[h] != null && typeof data[h] !== 'object') {
    return data[h];
  }

  // 흔한 별칭
  var aliases = {
    submittedAt: ['submittedAt'],
    submissionId: ['submissionId'],
    email: ['email'],
    teamSize: ['teamSize'],
    aiTools: ['aiTools'],
    knowledgeSources: ['knowledgeSources'],
    checklistItems: ['checklistItems'],
    totalScore: ['totalScore'],
    resultType: ['resultType'],
    answersJson: ['answersJson'],
    name: ['name'],
    company: ['company'],
    source: ['source'],
    diagnosisType: ['diagnosisType'],
  };

  if (aliases[h]) {
    for (var i = 0; i < aliases[h].length; i++) {
      var key = aliases[h][i];
      if (data[key] != null && typeof data[key] !== 'object') return data[key];
    }
  }

  return '';
}
