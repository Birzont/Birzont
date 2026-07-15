# Google Apps Script (진단 → Sheets)

프론트엔드 payload 키와 시트 헤더를 맞추기 위한 `doPost` 스크립트입니다.

## 원인

프론트가 `painPoint` / `betaInterest` 로 보내고, 시트·스크립트가 `biggestProblem` / `betaUsageIntent`(또는 한글 헤더)만 읽으면 두 열이 비게 됩니다.

현재 프론트는 **권장 키 + 기존 키를 모두** 전송합니다.

## 재배포 (필수)

1. [Apps Script](https://script.google.com)에서 해당 프로젝트 열기  
2. `Code.gs`에 `apps-script/Code.gs` 내용 반영 후 **저장**  
3. **배포 → 배포 관리 → 수정(연필)**  
4. 버전: **새 버전** → 배포  
5. `/exec` URL이 기존과 같은지 확인  
6. 실행 권한: 나 / 액세스: **모든 사용자**

## Sheet 헤더

다음 열이 있어야 합니다 (없으면 스크립트가 오른쪽에 추가):

- `베타 사용 의향`
- `가장 큰 문제점`
