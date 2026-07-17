# Google Apps Script — 진단응답

## Sheet

- ID: `1cJiJ4tiqkKe-lGHlabBwMiLXPna2YxH5jejwQaE-7pA`
- 탭 이름: **진단응답**
- Web App URL:  
  `https://script.google.com/macros/s/AKfycbx2DrVJ5C-0GrfMfV13H5IHgWawymb1OmLv1sM4oQSNCCp9_3AGSp3ZNozRMtQnEhoD/exec`

## 열 순서 (8열)

| 열 | 헤더 | payload key |
|----|------|-------------|
| A | 접수시간 | `submittedAt` |
| B | 이메일 | `email` |
| C | 팀 규모 | `teamSize` |
| D | 사용 AI | `usedAI` / `aiTools` |
| E | 지식 저장소 | `knowledgeStorage` |
| F | 가장 불편한 문제 | **`biggestProblem`** |
| G | 베타 사용 의향 | **`betaUsageIntent`** |
| H | 유입 경로 | `referralPath` / `source` |

## 재배포

1. `Code.gs` 내용을 Apps Script 편집기에 붙여넣기  
2. 저장 → **배포 → 배포 관리 → 수정 → 새 버전 → 배포**  
3. `/exec` URL 유지 확인  
4. 액세스: 모든 사용자  
