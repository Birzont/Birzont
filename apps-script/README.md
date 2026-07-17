# Google Apps Script 재배포 안내

시트 열 순서 (고정):

| 열 | 헤더 | payload key |
|----|------|-------------|
| A | 접수시간 | `submittedAt` |
| B | 이메일 | `email` |
| C | 이름/팀명 | `nameOrTeam` |
| D | 팀 규모 | `teamSize` |
| E | 사용 AI | `usedAi` / `aiTools` |
| F | 지식 저장소 | `knowledgeStorage` / `knowledgeSources` |
| G | 가장 불편한 문제 | **`biggestProblem`** |
| H | 베타 사용 의향 | **`betaUsageIntent`** |
| I | 추가 의견 | `additionalComment` |
| J | 유입 경로 | `referralPath` / `source` |

## 재배포 (필수)

1. `apps-script/Code.gs` 내용을 Apps Script 편집기에 붙여넣기
2. 저장
3. **배포 → 배포 관리 → 수정(연필)**
4. 버전: **새 버전** → 배포
5. `/exec` URL 유지 확인
6. 액세스: 모든 사용자

프론트엔드만 바꿔도 G/H가 비면, **배포된 Apps Script가 아직 옛 코드**일 수 있습니다.
