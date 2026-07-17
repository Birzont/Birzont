/**
 * Birzont diagnosis → Google Sheets
 *
 * Sheet columns (고정 순서):
 * A 접수시간 | B 이메일 | C 이름/팀명 | D 팀 규모 | E 사용 AI
 * F 지식 저장소 | G 가장 불편한 문제 | H 베타 사용 의향 | I 추가 의견 | J 유입 경로
 *
 * 배포: 저장 → 배포 → 배포 관리 → 수정 → 새 버전 → 배포
 * Sheet ID: 1cJiJ4tiqkKe-lGHlabBwMiLXPna2YxH5jejwQaE-7pA
 */

var SHEET_ID = '1cJiJ4tiqkKe-lGHlabBwMiLXPna2YxH5jejwQaE-7pA';
var SHEET_NAME = ''; // 비우면 첫 번째 시트

function doPost(e) {
  try {
    var raw = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    var data = JSON.parse(raw);

    var submittedAt = data.submittedAt || new Date().toISOString();
    var email = data.email || '';
    var nameOrTeam =
      data.nameOrTeam ||
      data.teamName ||
      data.name ||
      data.company ||
      '';
    var teamSize = data.teamSize || '';
    var usedAi = data.usedAi || data.aiTools || '';
    var knowledgeStorage =
      data.knowledgeStorage || data.knowledgeSources || '';

    var biggestProblem =
      data.biggestProblem ||
      data.painPoint ||
      data.mainProblem ||
      '';
    if (Object.prototype.toString.call(biggestProblem) === '[object Array]') {
      biggestProblem = biggestProblem.join(', ');
    }
    biggestProblem = String(biggestProblem == null ? '' : biggestProblem);

    var betaUsageIntent =
      data.betaUsageIntent ||
      data.betaInterest ||
      data.betaIntent ||
      '';
    betaUsageIntent = String(betaUsageIntent == null ? '' : betaUsageIntent);

    var additionalComment =
      data.additionalComment ||
      data.checklistItems ||
      '';
    var referralPath =
      data.referralPath ||
      data.source ||
      data.pageUrl ||
      '';

    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = SHEET_NAME ? ss.getSheetByName(SHEET_NAME) : ss.getSheets()[0];
    if (!sheet) {
      throw new Error('시트를 찾을 수 없습니다.');
    }

    // A..J 고정 순서 — 헤더 표시명과 무관하게 열 위치로 저장
    sheet.appendRow([
      submittedAt,       // A 접수시간
      email,             // B 이메일
      nameOrTeam,        // C 이름/팀명
      teamSize,          // D 팀 규모
      usedAi,            // E 사용 AI
      knowledgeStorage,  // F 지식 저장소
      biggestProblem,    // G 가장 불편한 문제
      betaUsageIntent,   // H 베타 사용 의향
      additionalComment, // I 추가 의견
      referralPath,      // J 유입 경로
    ]);

    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: true,
          message: '저장되었습니다.',
        })
      )
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(
        JSON.stringify({
          success: false,
          message: error.message || String(error),
        })
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(
      JSON.stringify({
        ok: true,
        service: 'Birzont diagnosis collector',
      })
    )
    .setMimeType(ContentService.MimeType.JSON);
}
