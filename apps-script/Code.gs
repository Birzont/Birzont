/**
 * Birzont — 「진단응답」시트 저장
 *
 * 열 순서 (8열):
 * A 접수시간 | B 이메일 | C 팀 규모 | D 사용 AI
 * E 지식 저장소 | F 가장 불편한 문제 | G 베타 사용 의향 | H 유입 경로
 *
 * Sheet ID: 1cJiJ4tiqkKe-lGHlabBwMiLXPna2YxH5jejwQaE-7pA
 * 배포 후: 배포 → 배포 관리 → 수정 → 새 버전 → 배포
 */

var SHEET_ID = '1cJiJ4tiqkKe-lGHlabBwMiLXPna2YxH5jejwQaE-7pA';
var SHEET_NAME = '진단응답';

function getFirstValue(data, keys) {
  for (var i = 0; i < keys.length; i++) {
    var value = data[keys[i]];
    if (value !== undefined && value !== null && String(value).trim() !== '') {
      return value;
    }
  }
  return '';
}

function normalizeValue(value) {
  if (Object.prototype.toString.call(value) === '[object Array]') {
    return value.join(', ');
  }
  if (value !== null && typeof value === 'object') {
    return JSON.stringify(value);
  }
  if (value === undefined || value === null) {
    return '';
  }
  return String(value);
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('POST 데이터가 없습니다.');
    }

    var data = JSON.parse(e.postData.contents);

    var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) {
      throw new Error("'진단응답' 시트를 찾을 수 없습니다.");
    }

    var submittedAt =
      getFirstValue(data, ['submittedAt', 'timestamp', 'createdAt']) || new Date();

    var email = getFirstValue(data, ['email', 'userEmail']);
    var teamSize = getFirstValue(data, ['teamSize', 'team_size']);
    var usedAI = getFirstValue(data, [
      'usedAI',
      'usedAi',
      'aiTools',
      'currentAITools',
    ]);
    var knowledgeStorage = getFirstValue(data, [
      'knowledgeStorage',
      'knowledgeSources',
      'knowledgeTools',
      'storageTools',
      'knowledgeBase',
    ]);
    var biggestProblem = getFirstValue(data, [
      'biggestProblem',
      'mainProblem',
      'painPoint',
      'biggestChallenge',
      'problem',
      'inconvenience',
    ]);
    var betaUsageIntent = getFirstValue(data, [
      'betaUsageIntent',
      'betaInterest',
      'betaIntent',
      'betaWillingness',
      'betaParticipation',
      'betaUsageWillingness',
    ]);
    var referralPath = getFirstValue(data, [
      'referralPath',
      'source',
      'referrer',
      'inflowPath',
    ]);

    biggestProblem = normalizeValue(biggestProblem);
    betaUsageIntent = normalizeValue(betaUsageIntent);

    console.log(
      JSON.stringify({
        receivedKeys: Object.keys(data),
        biggestProblem: biggestProblem,
        betaUsageIntent: betaUsageIntent,
      })
    );

    // A..H 정확히 8개 — 이름/팀명·추가 의견 열 없음
    sheet.appendRow([
      submittedAt, // A 접수시간
      normalizeValue(email), // B 이메일
      normalizeValue(teamSize), // C 팀 규모
      normalizeValue(usedAI), // D 사용 AI
      normalizeValue(knowledgeStorage), // E 지식 저장소
      biggestProblem, // F 가장 불편한 문제
      betaUsageIntent, // G 베타 사용 의향
      normalizeValue(referralPath), // H 유입 경로
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        receivedFields: {
          biggestProblem: biggestProblem !== '',
          betaUsageIntent: betaUsageIntent !== '',
        },
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error(error);
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: String(error.message || error),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      ok: true,
      service: 'Birzont diagnosis collector',
      sheet: SHEET_NAME,
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
