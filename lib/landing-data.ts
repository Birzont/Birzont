import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Brain,
  FileText,
  FolderOpen,
  Layers,
  Link2,
  MessageSquare,
  RefreshCw,
  Sparkles,
  Users,
  Wand2,
  Zap,
} from "lucide-react";

/** 스크롤 순서와 동일하게 정렬 */
export const NAV_ITEMS = [
  { label: "제품", href: "#product" },
  { label: "활용 사례", href: "#use-cases" },
  { label: "작동 방식", href: "#how-it-works" },
  { label: "보안", href: "#security" },
  { label: "베타 신청", href: "#beta-form" },
  { label: "요금제", href: "#pricing" },
] as const;

export const FOOTER_LINKS = [
  { label: "제품", href: "#product" },
  { label: "활용 사례", href: "#use-cases" },
  { label: "작동 방식", href: "#how-it-works" },
  { label: "보안", href: "#security" },
  { label: "베타 신청", href: "#beta-form" },
  { label: "요금제", href: "#pricing" },
  { label: "문의", href: "mailto:contact@birzont.com" },
] as const;

export const CTA_LINKS = {
  primary: { label: "베타 신청하기", href: "#beta-form" },
  secondary: { label: "30초 제품 흐름 보기", href: "#product" },
  b2b: { label: "팀 도입 문의하기", href: "mailto:contact@birzont.com" },
  diagnosis: { label: "우리 팀 AI 활용 진단받기", href: "#beta-form" },
} as const;

export type PricingPlan = {
  name: string;
  price: string;
  period?: string;
  descriptionParts: readonly string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    price: "무료",
    descriptionParts: ["Birzont의 핵심 동기화를", "개인이 먼저 체험합니다."],
    cta: "출시 알림 받기",
    features: [
      "월 5회 지식 동기화",
      "지식 소스 1개 연결",
      "Markdown 변환",
      "Cursor 기본 연동",
      "맥락 스냅샷 1개 저장",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "/월",
    descriptionParts: ["매일 AI와 일하는", "개인에게 필요한", "자동 동기화."],
    cta: "베타 대기자 등록",
    highlighted: true,
    badge: "출시 전 베타",
    features: [
      "무제한 지식 동기화",
      "지식 소스 5개 연결",
      "CLAUDE.md · Cursor Rules 자동 생성",
      "Notion · 로컬 폴더 연동",
      "맥락 스냅샷 10개 저장",
      "에이전트 맥락 우선 반영",
    ],
  },
  {
    name: "Team",
    price: "$29",
    period: "/월",
    descriptionParts: ["팀 전체가", "같은 맥락으로", "AI와 일하게 만듭니다."],
    cta: "팀 베타 문의하기",
    features: [
      "무제한 지식 소스 · 동기화",
      "팀 워크스페이스 · 공용 에이전트 맥락",
      "Slack · Notion · Confluence 연동",
      "팀 전용 프롬프트 라이브러리",
      "맥락 스냅샷 50개 저장",
      "우선 동기화 · 신기능 조기 액세스",
    ],
  },
];

export type PricingComparisonRow = {
  feature: string;
  free: string;
  pro: string;
  team: string;
};

export const PRICING_COMPARISON: PricingComparisonRow[] = [
  { feature: "월 동기화", free: "5회", pro: "무제한", team: "무제한" },
  { feature: "지식 소스 연결", free: "1개", pro: "5개", team: "무제한" },
  { feature: "에이전트 환경", free: "Cursor", pro: "Cursor + Claude", team: "팀 전체" },
  { feature: "CLAUDE.md / Cursor Rules", free: "기본 템플릿", pro: "자동 생성", team: "팀 공유" },
  { feature: "저장된 맥락 스냅샷", free: "1개", pro: "10개", team: "50개" },
  { feature: "Notion · Confluence", free: "—", pro: "Notion", team: "전체 연동" },
  { feature: "팀 워크스페이스", free: "—", pro: "—", team: "포함" },
  { feature: "팀 맥락 공유", free: "—", pro: "—", team: "포함" },
  { feature: "조기 기능 액세스", free: "—", pro: "—", team: "우선" },
];

export const KNOWLEDGE_SOURCES = [
  { label: "Notion", icon: Layers },
  { label: "Confluence", icon: FileText },
  { label: "로컬 폴더", icon: FolderOpen },
  { label: "회의록", icon: MessageSquare },
  { label: "사내 문서", icon: FileText },
  { label: "프롬프트 라이브러리", icon: Sparkles },
] as const;

export const PROCESS_STATUSES = [
  "문서 읽는 중",
  "Markdown 변환 중",
  "에이전트 최신화 중",
] as const;

export const AGENT_OUTPUT_FORMATS = [
  { label: "Markdown", icon: FileText, active: true },
  { label: "CLAUDE.md", icon: Brain, active: true },
  { label: "Cursor Rules", icon: Zap, active: true },
  { label: "AI 에이전트 작업공간", icon: Bot, active: true },
] as const;

export const PROBLEMS: { title: string; bodyParts: readonly string[]; icon: LucideIcon }[] = [
  {
    title: "지식은 흩어져 있습니다",
    bodyParts: [
      "문서, 회의록, 결정사항, 업무 규칙은",
      "여러 도구에 쌓이지만",
      "에이전트는 그 맥락을",
      "보지 못합니다.",
    ],
    icon: Layers,
  },
  {
    title: "업데이트는 반영되지 않습니다",
    bodyParts: [
      "문서가 바뀔 때마다",
      "사람이 직접 복사하고 정리해야 합니다.",
      "그래서 에이전트는",
      "항상 한 발 늦습니다.",
    ],
    icon: RefreshCw,
  },
  {
    title: "팀의 답변 기준이 달라집니다",
    bodyParts: [
      "팀원마다 다른 AI 도구와",
      "다른 프롬프트를 사용합니다.",
      "같은 질문에도",
      "서로 다른 답이 나옵니다.",
    ],
    icon: Users,
  },
];

export const SOLUTIONS: { title: string; bodyParts: readonly string[]; icon: LucideIcon }[] = [
  {
    title: "지식 연결",
    bodyParts: [
      "Notion, Confluence,",
      "로컬 폴더, 사내 문서,",
      "프롬프트 라이브러리를",
      "연결합니다.",
    ],
    icon: Link2,
  },
  {
    title: "자동 구조화",
    bodyParts: [
      "긴 문서와 흩어진 정보를",
      "에이전트가 이해하기 쉬운",
      "지식 구조로 정리합니다.",
    ],
    icon: Wand2,
  },
  {
    title: "에이전트용 변환",
    bodyParts: [
      "Markdown, CLAUDE.md,",
      "Cursor Rules 등",
      "각 에이전트 환경에 맞는",
      "형태로 변환합니다.",
    ],
    icon: FileText,
  },
  {
    title: "자동 동기화",
    bodyParts: [
      "문서가 바뀌면",
      "에이전트 작업공간도",
      "최신 상태로",
      "업데이트합니다.",
    ],
    icon: RefreshCw,
  },
];

export const USE_CASES = [
  {
    title: "AI-first 스타트업",
    body: "Cursor, Claude, ChatGPT를 매일 쓰지만 팀 공통 맥락이 없는 팀",
  },
  {
    title: "빠르게 바뀌는 제품팀",
    body: "기획서, 정책, 고객 피드백, 회의록이 계속 바뀌는 팀",
  },
  {
    title: "반복 설명이 많은 운영팀",
    body: "같은 업무 규칙과 고객 응대를 AI에게 매번 다시 설명하는 팀",
  },
  {
    title: "문서·프롬프트 관리팀",
    body: "프롬프트, 레퍼런스 문서, 업무 지침을 하나의 에이전트 환경으로 묶고 싶은 팀",
  },
];

export const METRICS = [
  { value: "80%", label: "에이전트 환경 설정 시간 감소" },
  { value: "20%+", label: "반복 질문으로 낭비되는 토큰 절약" },
  { value: "항상 최신", label: "변경된 팀 지식을 에이전트에 자동 반영" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "연결하세요",
    bodyParts: ["Notion, 폴더,", "문서 저장소를", "선택합니다."],
  },
  {
    step: "02",
    title: "Birzont가 정리합니다",
    bodyParts: [
      "팀 지식을 요약하고",
      "구조화해",
      "에이전트용 문맥으로",
      "바꿉니다.",
    ],
  },
  {
    step: "03",
    title: "에이전트가 기억합니다",
    bodyParts: [
      "Cursor, Claude,",
      "로컬 에이전트가",
      "최신 팀 지식을",
      "참고합니다.",
    ],
  },
];

export const HOOKING_QUOTES = [
  "AI는 더 똑똑해졌습니다. 이제 팀 지식도 따라가야 합니다.",
  "좋은 답변은 좋은 맥락에서 나옵니다.",
  "프롬프트보다 중요한 것은, 에이전트가 알고 있는 지식입니다.",
  "팀의 문서가 바뀌면, 에이전트의 기억도 바뀌어야 합니다.",
  "더 이상 복사하고 붙여넣지 마세요.",
  "당신의 AI가 오늘의 팀 지식으로 답하게 하세요.",
  "모든 팀원이 같은 맥락으로 AI와 일하게 하세요.",
] as const;

export const TEAM_CHECKLIST_ITEMS = [
  "AI에게 제품 설명을 매번 붙여넣는다",
  "팀원마다 AI 답변이 다르다",
  "회의록과 문서가 AI에 반영되지 않는다",
  "Cursor와 Claude를 쓰지만 팀 지식은 따로 논다",
  "신규 팀원이 팀 맥락을 파악하는 데 오래 걸린다",
] as const;

export const BEFORE_AFTER_ITEMS = [
  {
    before: "AI에게 제품 설명을 매번 붙여넣음",
    after: "AI가 최신 제품 맥락을 자동 참고",
  },
  {
    before: "팀원마다 다른 답변",
    after: "팀 전체가 같은 기준으로 답변",
  },
  {
    before: "회의 결정사항이 AI에 반영되지 않음",
    after: "회의록 변경 시 AI 컨텍스트 업데이트",
  },
  {
    before: "신규 합류자가 맥락 파악에 오래 걸림",
    after: "팀 컨텍스트로 빠르게 온보딩",
  },
] as const;

export const MOBILE_FLOW_STEPS = [
  {
    title: "팀 지식 연결",
    body: "Notion, 회의록, 문서, 프롬프트를 연결합니다.",
    accent: "green" as const,
  },
  {
    title: "Birzont가 맥락 생성",
    body: "흩어진 정보를 에이전트가 읽기 좋은 구조로 바꿉니다.",
    accent: "neutral" as const,
  },
  {
    title: "AI 작업공간에 동기화",
    body: "Cursor, Claude, AI 에이전트가 같은 팀 맥락을 참고합니다.",
    accent: "blue" as const,
  },
] as const;

export const OUTPUT_EXAMPLES = [
  {
    title: "CLAUDE.md",
    snippet:
      "이 프로젝트의 핵심 고객은 AI를 팀 단위로 도입하기 시작한 스타트업과 제품팀입니다.",
  },
  {
    title: "Cursor Rules",
    snippet: "항상 최신 제품 정책과 팀 문서를 기준으로 답변하세요.",
  },
  {
    title: "Markdown Context",
    snippet: "최근 회의 결정사항, 제품 방향성, 고객 피드백 요약",
  },
] as const;

export const SECURITY_ITEMS = [
  "연결된 문서 해제 가능",
  "동기화 대상 선택 가능",
  "팀별 접근 권한 관리",
  "전송 및 저장 데이터 암호화",
  "어떤 지식이 어떤 에이전트에 반영되는지 확인 가능",
] as const;

export const SECURITY_FAQ = [
  {
    q: "연결한 문서를 언제든 삭제할 수 있나요?",
    a: "네. 연결 해제와 동기화 중단을 팀 단위로 관리할 수 있습니다.",
  },
  {
    q: "모든 문서가 자동으로 AI에 전달되나요?",
    a: "아니요. 사용자가 선택한 문서와 범위만 동기화되도록 설계합니다.",
  },
  {
    q: "팀원별 권한을 나눌 수 있나요?",
    a: "팀 단위 접근 권한 관리 기능을 제공합니다.",
  },
] as const;
