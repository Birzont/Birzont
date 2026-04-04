/**
 * Birzont Language Provider
 * Single source for text, media assets, and blog data.
 */
(function () {
  'use strict';

  const LANG_KEY = 'birzont-lang';
  const LATIN_LANGS = ['en', 'es', 'de', 'fr', 'it', 'id', 'pt'];
  const DEFAULT_LANG = 'en';

  const LANG = {
    en: {
      blog: {
        title: "Birzont's Diverse Stories",
        subtitle: "Sharing the latest insights and stories on AI and technology."
      },
      ui: {
        appDescriptionTitle: 'App description',
        appDescriptionBody1: 'This app is designed around user experience with an intuitive interface and powerful features.',
        appDescriptionBody2: 'Customize it to your workflow, and keep improving with continuous updates.',
        appOpenLink: 'Open app',
        quickLink: 'Go now',
        careersTitle: 'Looking for where to join?',
        careersText1: 'Build your ideas at Birzont.',
        careersText2: 'We are waiting for great talents like you.',
        careersCta: 'View job openings',
        partnersDescription: 'We partner with global companies to build innovative AI solutions for the future.',
        timelineDescription: "Explore Birzont's milestones and growth journey.",
        navCompanyTitle: 'Company',
        navProductTitle: 'Product Lineup',
        navBlogTitle: 'Blogs',
        navAboutCompany: 'About Company',
        navWhatWeDo: 'What we do',
        navOurTeam: 'Our Team',
        navTimeline: 'Timeline',
        navNewsroom: 'Newsroom',
        navEverything: 'Everything',
        navHome: 'Home',
        navPricing: 'Pricing',
        navCareers: 'Careers',
        navLogin: 'Log in',
        footerCompany: 'Company',
        footerProduct: 'Product',
        footerSupport: 'Support',
        footerDesc: "Building AI to serve humanity's future.\n© 2025 Birzont. All rights reserved.",
        footerAboutUs: 'About us',
        footerCareer: 'Career',
        footerBlog: 'Blog',
        footerBrand: 'Brand',
        footerHelp: 'Help Center',
        footerContact: 'Contact Us',
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms of Service',
        footerCookie: 'Cookie Policy',
        productDesc2: 'This app offers innovative services with an easy interface and practical features.',
        productDesc3: 'Official app with the latest promotions and event updates.',
        timeline1: 'Launched our first prototype.',
        timeline2: 'Launched our first prototype.',
        timeline3: 'Reached 100,000 users after launch with fast growth.',
        timeline4: 'Accelerated expansion through strategic partnerships.',
        timeline5: 'Improved UX with innovative AI features.',
        timeline6: 'Secured Series A and completed core AI algorithms.',
        job2Title: '[Talent Pool Registration] Product Manager',
        job2Location: 'Kyung Hee Startup Campus, Seoul',
        job2Salary: 'KRW 50k-100k',
        job3Title: '[Talent Pool Registration] Marketing Lead',
        job3Location: 'Kyung Hee Startup Campus, Seoul',
        job3Salary: 'KRW 50k-100k',
        heroTitle: 'Where the world builds prompts',
        heroSubtitle1: 'Discover, share, and build AI prompts and agents.',
        heroSubtitle2: 'A collaboration platform for prompt engineers and creators.',
        ctaGetStarted: 'Get Started',
        sectionExplore: 'Explore the Birzont',
        sectionExploreSub: 'One platform for prompt generation, extraction, workflow, sharing, and selling.',
        sectionHow: 'How it works',
        sectionHowSub: 'Generate, extract, connect, share, and sell prompts-all in one place.',
        sectionPlans: 'Plans',
        sectionPlansSub: 'Choose the plan that fits you',
        citySub: 'The hub for AI-powered creation and collaboration',
        cityHeadline: 'Bridge, Build, Automation. With Birzont.',
        cityBody: 'No more juggling tools for landing pages, copy, or agents. Birzont understands your brand, designs prompts, and shares with your team-all in one platform.',
        sectionHomePrompts: 'Birzont, Home of Prompts',
        sectionHomePromptsSub: 'Explore diverse prompts created by the community',
        promptExplore: 'Explore Prompts',
        builtForAny: 'Built for any',
        builtBusiness: 'Business',
        aboutHero1: 'Where the Bridge ends, Bird flies.',
        aboutHero2: 'Birzont can be the bridge.',
        aboutWhatWeDo: 'What we do',
        aboutVision: 'Our Vision',
        aboutTeam: 'Meet Our Team',
        aboutIntroTitle1: 'Birzont. we build AI',
        aboutIntroTitle2: 'the bridge to the future.',
        aboutIntroBody: "While no one can foresee every outcome AI will have on society, we do know that designing powerful technologies requires both bold steps forward and intentional pauses to consider the effects. That's why we focus on building tools with human benefit at their foundation.",
        productsTitle: 'Our Products',
        productsBody: 'Discover our innovative solutions designed to enhance your daily life and productivity. Each product is crafted with attention to detail and user experience.',
        introPlatformLabel: 'Prompt AI Platform',
        introVersionLabel: 'v1.0 MVP',
        introHeadline1: 'Just say your intent.',
        introHeadline2: 'Birzont creates the optimal prompt.',
        introTab1Title: 'Intent-based prompt generation',
        introTab1Body: 'Hearim 3.0 & Tobaki-2 models analyze your natural language and generate optimized prompts.',
        introTab2Title: 'Intelligent workflow chains',
        introTab2Body: 'Connect multi-step prompts into a single pipeline from planning to execution. Automate complex projects.',
        introTab3Title: 'Verified prompt marketplace',
        introTab3Body: 'Explore and share 5,000+ high-quality templates. 11 languages. Instant apply. Extract prompts from anywhere.',
        introTab4Title: 'Adaptive personalization',
        introTab4Body: 'Gets smarter with use. RLHF-based learning adapts to your feedback and delivers personalized results in real time.',
        promptCard1Title: 'Efficient task automation script generation',
        promptCard1Body: 'Generates Python scripts to automate repetitive tasks. Based on your description, it writes and optimizes code for you.',
        promptCard2Title: 'Creative idea brainstorming prompt',
        promptCard2Body: 'Generates original and innovative ideas around your topic. Expands and refines ideas from multiple perspectives to maximize creativity.',
        promptCard3Title: 'Test scenario generation and validation',
        promptCard3Body: 'Generates and validates diverse scenarios for software testing. Auto-creates test cases from your requirements to boost efficiency.',
        promptCard4Title: 'SNS & ad marketing copy generation',
        promptCard4Body: 'Input your brand tone and target-get multiple short, impactful copy versions by channel.',
        promptCard5Title: 'Long document & meeting notes summary',
        promptCard5Body: 'Paste PDF or text-get structured conclusions, action items, and timeline for easy review.',
        promptCard6Title: 'Research question design & citation formatting',
        promptCard6Body: 'Input a topic-get search-friendly sub-questions and proper citation formats for your answers.',
        bundleCardTitle1: 'Stock investing starter pack 🪴',
        bundleCardTitle2: 'AI writing bundle ✍️',
        bundleCardTitle3: 'Startup pitch full package 🚀',
        bundleCardTitle4: 'Data analysis intro set 📊',
        bundleCardTitle5: 'Content creator pack 🎬',
        bundleCardTitle6: 'Code review & refactor bundle 💻',
        bizChip1: 'Digital products',
        bizChip2: 'Agencies',
        bizChip3: 'E-commerce',
        bizChip4: 'SaaS',
        bizChip5: 'Mobile apps',
        bizChip6: 'Services',
        careerLabel: 'Open roles',
        careerTitle1: 'Build the future of AI with us.',
        careerTitle2: 'Your journey starts here.',
        timelineHeading1: "Watch Birzont's story",
        timelineHeading2: 'On artificial intelligence'
        , featureTitle1: 'Home of Prompts'
        , featureTagline1: '90% lower cost than existing APIs for high-quality prompts.'
        , featureDesc1: 'Our self-tuned Hearim & Tobaki models (Deepseek-based) deliver high-quality prompts at 90% lower cost than existing APIs.'
        , featureTitle2: 'We build Automations'
        , featureTagline2: 'Adaptive AI that gets better the more you use it.'
        , featureDesc2: 'We analyze your feedback and usage patterns via Supabase to deliver an adaptive AI that optimizes for your workflow over time.'
        , featureTitle3: 'Launch and grow'
        , featureTagline3: '5,000+ verified prompts in 11 languages. Use them instantly.'
        , featureDesc3: 'Trade 5,000+ creator-verified prompts globally. Use them instantly in 11 languages including Korean, English, and Chinese.'
        , integrationsLabel: 'INTEGRATIONS'
        , partnersTitle: 'Meet Our Partners'
        , companyTimelineTitle: 'Company Timeline'
        , seeMore: 'See more'
        , whatWeDoTitle: 'Inventing the infrastructure software for hyperscale AI'
        , whatWeDoBody: 'With the growing interest in LLMs and generative AI, many people are struggling to build and utilize large-scale AI infrastructure with thousands or more accelerators. The most difficult challenges in AI technology are now infrastructure-level problems such as parallelization, disaggregation, cluster scalability, performance optimization, and failover.'
        , ourVisionTitle: 'Breaking down infrastructure barriers to make AI more accessible'
        , ourVisionBody: 'The success of AI technology has been made possible by an open ecosystem, diverse participants, and the accumulation of collective experience. Our mission is to remove the technical barriers to infrastructure and make future AI technology more accessible to a wide range of customers.'
      },
      images: {
        heroBackground: "url('https://mir-s3-cdn-cf.behance.net/project_modules/source/5e882325659471.5634b8c4f0383.gif')",
        heroForegroundDesktop: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F0Dta4%2FdJMcag5iELI%2FAAAAAAAAAAAAAAAAAAAAAIbtCJcnkjIlQX1yCLLsXKHXl-qXKL_otOuIVhGv7VD3%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DXXxRBIydW%252B%252FBKnUsAvUWbi8xITI%253D",
        heroForegroundMobile: 'resources/product/mobile.png',
        productSlides: ['resources/mainp.png', 'resources/chainp.png', 'resources/boardp.png', 'resources/products/mainscreen.png']
      },
      video: {
        aboutUrl: 'https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1',
        aboutThumbnail: 'https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg'
      }
    },
    ko: {
      blog: {
        title: '버존트의 다양한 이야기',
        subtitle: 'AI와 기술에 대한 최신 인사이트와 이야기를 공유합니다.'
      },
      ui: {

        appDescriptionTitle: '앱 설명',
        appDescriptionBody1: '이 앱은 사용자 경험을 최우선으로 설계되었으며, 직관적인 인터페이스와 강력한 기능을 제공합니다.',
        appDescriptionBody2: '다양한 기능과 맞춤형 설정으로 사용자 필요에 맞게 조정되며, 지속적인 업데이트로 개선됩니다.',
        appOpenLink: '앱 바로가기',
        quickLink: '바로가기',
        careersTitle: '합류할 곳을 찾고 있나요?',
        careersText1: '버전트에서 아이디어를 실현하세요.',
        careersText2: '우리는 인재 여러분들을 기다리고 있습니다.',
        careersCta: '채용공고 보기',
        partnersDescription: '우리는 세계적인 기업들과 협력하여 혁신적인 AI 솔루션을 개발하고 있습니다. 함께 미래를 만들어가는 파트너들을 소개합니다.',
        timelineDescription: 'Birzont의 성장 과정과 주요 이정표를 확인하세요. 우리는 지속적인 혁신과 발전을 통해 AI 기술의 미래를 만들어가고 있습니다.',
        navCompanyTitle: '회사 소개',
        navProductTitle: '제품 라인업',
        navBlogTitle: '블로그',
        navAboutCompany: '회사 소개',
        navWhatWeDo: '우리가 하는 일',
        navOurTeam: '우리 팀',
        navTimeline: '연혁',
        navNewsroom: '뉴스룸',
        navEverything: '전체',
        navHome: '홈',
        navPricing: '요금제',
        navCareers: '채용',
        navLogin: '로그인',
        footerCompany: '회사',
        footerProduct: '제품',
        footerSupport: '지원',
        footerDesc: '인류의 미래를 위한 AI를 만듭니다.\n© 2025 Birzont. 모든 권리 보유.',
        footerAboutUs: '회사 소개',
        footerCareer: '채용',
        footerBlog: '블로그',
        footerBrand: '브랜드',
        footerHelp: '도움말 센터',
        footerContact: '문의하기',
        footerPrivacy: '개인정보처리방침',
        footerTerms: '이용약관',
        footerCookie: '쿠키 정책',
        productDesc2: '이 앱은 사용자에게 혁신적인 서비스를 제공합니다. 간편한 인터페이스와 다양한 기능으로 일상 생활을 더욱 편리하게 만들어 드립니다.',
        productDesc3: 'Pepsi의 공식 앱으로, 최신 프로모션과 이벤트 정보를 확인할 수 있습니다. 다양한 음료 제품에 대한 정보와 특별 할인 혜택을 제공합니다.',
        timeline1: '첫 프로토타입을 런칭하였습니다.',
        timeline2: '첫 프로토타입을 런칭하였습니다.',
        timeline3: '서비스 출시 후 빠른 성장을 이루며 사용자 10만 명을 돌파했습니다.',
        timeline4: '글로벌 기술 기업과의 전략적 파트너십을 통해 서비스 확장을 가속화했습니다.',
        timeline5: '혁신적인 AI 기능을 추가하여 사용자 경험을 크게 개선했습니다.',
        timeline6: '주요 벤처 캐피탈로부터 시리즈 A 투자를 유치하여 기술 개발 및 팀 확장을 가속화했습니다. 핵심 AI 알고리즘 개발을 완료했습니다.',
        job2Title: '[인재풀 등록] Product Manager',
        job2Location: '경희대학교 스타트업 캠퍼스, 서울',
        job2Salary: '₩5만-10만',
        job3Title: '[인재풀 등록] Marketing Lead',
        job3Location: '경희대학교 스타트업 캠퍼스, 서울',
        job3Salary: '₩5만-10만',
        heroTitle: '전 세계의 프롬프트가 만들어지는 곳',
        heroSubtitle1: 'AI 프롬프트와 에이전트를 발견하고, 공유하고, 만들어보세요.',
        heroSubtitle2: '프롬프트 엔지니어와 크리에이터를 위한 협업 플랫폼.',
        ctaGetStarted: '시작하기',
        sectionExplore: 'Birzont 살펴보기',
        sectionExploreSub: '프롬프트 생성, 추출, 워크플로우, 공유, 판매를 한 곳에서.',
        sectionHow: '작동 방식',
        sectionHowSub: '생성, 추출, 연결, 공유, 판매까지 한 번에.',
        sectionPlans: '요금제',
        sectionPlansSub: '나에게 맞는 플랜을 선택하세요',
        citySub: 'AI 기반 창작·협업의 허브',
        cityHeadline: '브릿지하고, 빌드하세요. Birzont와 함께',
        cityBody: '랜딩, 카피, 에이전트를 위해 여러 도구를 오갈 필요가 없습니다. Birzont는 브랜드를 이해하고 프롬프트를 설계하며 팀과 공유하는 올인원 플랫폼입니다.',
        sectionHomePrompts: 'Birzont, 프롬프트의 집',
        sectionHomePromptsSub: '커뮤니티가 만든 다양한 프롬프트를 탐색해보세요',
        promptExplore: '프롬프트 탐색',
        builtForAny: '모든 비즈니스를 위한',
        builtBusiness: '플랫폼',
        aboutHero1: '다리가 끝나는 곳에서, 새가 납니다.',
        aboutHero2: 'Birzont가 그 다리가 됩니다.',
        aboutWhatWeDo: '우리가 하는 일',
        aboutVision: '우리의 비전',
        aboutTeam: '우리 팀',
        aboutIntroTitle1: 'Birzont. 우리는 AI로',
        aboutIntroTitle2: '미래로 가는 다리를 만듭니다.',
        aboutIntroBody: 'AI가 사회에 가져올 모든 결과를 예측할 수는 없지만, 강력한 기술을 설계할 때는 과감한 전진과 영향에 대한 신중한 성찰이 함께 필요하다는 점은 분명합니다. 그래서 우리는 사람에게 실질적인 이익을 주는 도구를 만듭니다.',
        productsTitle: '우리의 제품',
        productsBody: '일상과 생산성을 높이기 위해 설계된 혁신적인 솔루션을 만나보세요. 모든 제품은 디테일과 사용자 경험을 중심으로 만들어졌습니다.',
        introPlatformLabel: '프롬프트 AI 플랫폼',
        introVersionLabel: 'v1.0 MVP',
        introHeadline1: '의도만 말하세요.',
        introHeadline2: '최적의 프롬프트는 Birzont가 만듭니다.',
        introTab1Title: '의도 기반 프롬프트 생성',
        introTab1Body: 'Hearim 3.0 & Tobaki-2 모델이 자연어를 분석해 최적화된 프롬프트를 생성합니다.',
        introTab2Title: '지능형 워크플로우 체인',
        introTab2Body: '기획부터 실행까지 다단계 프롬프트를 하나의 파이프라인으로 연결해 복잡한 프로젝트를 자동화합니다.',
        introTab3Title: '검증된 프롬프트 마켓플레이스',
        introTab3Body: '5,000+ 고품질 템플릿을 탐색/공유하고 11개 언어로 즉시 적용하세요.',
        introTab4Title: '적응형 개인화',
        introTab4Body: '사용할수록 더 똑똑해집니다. 피드백을 학습해 실시간 맞춤 결과를 제공합니다.',
        promptCard1Title: '효율적인 업무 자동화 스크립트 생성',
        promptCard1Body: '반복 업무를 자동화하는 Python 스크립트를 생성합니다. 설명을 기반으로 코드를 작성하고 최적화합니다.',
        promptCard2Title: '창의적 아이디어 브레인스토밍 프롬프트',
        promptCard2Body: '주제를 바탕으로 독창적 아이디어를 생성하고 다양한 관점으로 확장/구체화합니다.',
        promptCard3Title: '테스트 시나리오 생성 및 검증',
        promptCard3Body: '요구사항을 기반으로 테스트 시나리오와 케이스를 자동 생성해 검증 효율을 높입니다.',
        promptCard4Title: 'SNS·광고용 마케팅 카피 생성',
        promptCard4Body: '브랜드 톤과 타깃을 입력하면 채널별 짧고 임팩트 있는 카피를 여러 버전으로 제안합니다.',
        promptCard5Title: '긴 문서·회의록 핵심 요약',
        promptCard5Body: 'PDF/텍스트를 붙여넣으면 결론·액션아이템·타임라인으로 구조화해 요약합니다.',
        promptCard6Title: '리서치 질문 설계 & 출처 정리',
        promptCard6Body: '주제를 입력하면 검색 친화 하위 질문과 인용 형식을 함께 제안합니다.',
        bundleCardTitle1: '주식 투자 스타터팩 🪴',
        bundleCardTitle2: 'AI 글쓰기 번들 ✍️',
        bundleCardTitle3: '스타트업 피치 풀패키지 🚀',
        bundleCardTitle4: '데이터 분석 입문 세트 📊',
        bundleCardTitle5: '콘텐츠 크리에이터 팩 🎬',
        bundleCardTitle6: '코드 리뷰 & 리팩터링 번들 💻',
        bizChip1: '디지털 제품',
        bizChip2: '에이전시',
        bizChip3: '이커머스',
        bizChip4: 'SaaS',
        bizChip5: '모바일 앱',
        bizChip6: '서비스',
        careerLabel: '채용 포지션',
        careerTitle1: '우리와 함께 AI의 미래를 만드세요.',
        careerTitle2: '당신의 여정이 여기서 시작됩니다.',
        timelineHeading1: 'Birzont의 이야기를',
        timelineHeading2: '인공지능 위에서'
        , featureTitle1: '프롬프트의 집'
        , featureTagline1: '기존 API 대비 90% 낮은 비용으로 고품질 프롬프트를 제공합니다.'
        , featureDesc1: '자체 튜닝된 Hearim & Tobaki 모델로 더 낮은 비용에 높은 품질의 프롬프트를 제공합니다.'
        , featureTitle2: '자동화를 만듭니다'
        , featureTagline2: '사용할수록 더 좋아지는 적응형 AI'
        , featureDesc2: '피드백과 사용 패턴을 학습해 업무 흐름에 맞게 최적화됩니다.'
        , featureTitle3: '출시하고 성장하세요'
        , featureTagline3: '11개 언어, 5,000+ 검증 프롬프트를 즉시 활용'
        , featureDesc3: '크리에이터 검증 프롬프트를 글로벌로 거래하고 바로 실행할 수 있습니다.'
        , integrationsLabel: '연동'
        , partnersTitle: '파트너를 소개합니다'
        , companyTimelineTitle: '회사 연혁'
        , seeMore: '더 보기'
        , whatWeDoTitle: '하이퍼스케일 AI를 위한 인프라 소프트웨어를 만듭니다'
        , whatWeDoBody: 'LLM과 생성형 AI 수요가 커지면서 대규모 AI 인프라 구축과 운영이 어려워졌습니다. 병렬화, 분산, 확장성, 성능 최적화, 장애 복구 같은 핵심 문제를 소프트웨어로 해결합니다.'
        , ourVisionTitle: '인프라 장벽을 낮춰 AI를 더 많은 사람에게'
        , ourVisionBody: 'AI의 성공은 열린 생태계와 다양한 참여자에서 시작됩니다. 우리는 인프라 기술 장벽을 낮춰 더 많은 고객이 AI를 활용하도록 돕습니다.'
      },
      images: {
        heroBackground: "url('https://mir-s3-cdn-cf.behance.net/project_modules/source/5e882325659471.5634b8c4f0383.gif')",
        heroForegroundDesktop: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F0Dta4%2FdJMcag5iELI%2FAAAAAAAAAAAAAAAAAAAAAIbtCJcnkjIlQX1yCLLsXKHXl-qXKL_otOuIVhGv7VD3%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DXXxRBIydW%252B%252FBKnUsAvUWbi8xITI%253D",
        heroForegroundMobile: 'resources/product/mobile.png',
        productSlides: ['resources/mainp.png', 'resources/chainp.png', 'resources/boardp.png', 'resources/products/mainscreen.png']
      },
      video: {
        aboutUrl: 'https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1',
        aboutThumbnail: 'https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg'
      }
    },
    ja: {
      blog: { title: 'バージョントの多様なストーリー', subtitle: 'AIとテクノロジーに関する最新の洞察とストーリーを共有します。' },
      ui: { appDescriptionTitle: 'アプリ説明', appDescriptionBody1: 'このアプリは使いやすさを重視して設計されています。', appDescriptionBody2: '継続的なアップデートで改善されます。', appOpenLink: 'アプリを開く', careersTitle: '参加先を探していますか？', careersText1: 'Birzontでアイデアを実現しましょう。', careersText2: 'あなたの参加を待っています。', careersCta: '採用情報を見る' },
      images: { heroBackground: "url('https://mir-s3-cdn-cf.behance.net/project_modules/source/5e882325659471.5634b8c4f0383.gif')", heroForegroundDesktop: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F0Dta4%2FdJMcag5iELI%2FAAAAAAAAAAAAAAAAAAAAAIbtCJcnkjIlQX1yCLLsXKHXl-qXKL_otOuIVhGv7VD3%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DXXxRBIydW%252B%252FBKnUsAvUWbi8xITI%253D", heroForegroundMobile: 'resources/product/mobile.png', productSlides: ['resources/mainp.png', 'resources/chainp.png', 'resources/boardp.png', 'resources/products/mainscreen.png'] },
      video: { aboutUrl: 'https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1', aboutThumbnail: 'https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg' }
    },
    'zh-CN': {
      blog: { title: 'Birzont的多元故事', subtitle: '分享关于AI与技术的最新见解与故事。' },
      ui: { appDescriptionTitle: '应用说明', appDescriptionBody1: '该应用以用户体验为核心设计。', appDescriptionBody2: '通过持续更新不断优化。', appOpenLink: '打开应用', careersTitle: '正在寻找加入的地方吗？', careersText1: '在Birzont实现你的想法。', careersText2: '我们期待你的加入。', careersCta: '查看招聘' },
      images: { heroBackground: "url('https://mir-s3-cdn-cf.behance.net/project_modules/source/5e882325659471.5634b8c4f0383.gif')", heroForegroundDesktop: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F0Dta4%2FdJMcag5iELI%2FAAAAAAAAAAAAAAAAAAAAAIbtCJcnkjIlQX1yCLLsXKHXl-qXKL_otOuIVhGv7VD3%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DXXxRBIydW%252B%252FBKnUsAvUWbi8xITI%253D", heroForegroundMobile: 'resources/product/mobile.png', productSlides: ['resources/mainp.png', 'resources/chainp.png', 'resources/boardp.png', 'resources/products/mainscreen.png'] },
      video: { aboutUrl: 'https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1', aboutThumbnail: 'https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg' }
    },
    'zh-TW': {
      blog: { title: 'Birzont的多元故事', subtitle: '分享關於AI與技術的最新見解與故事。' },
      ui: { appDescriptionTitle: '應用說明', appDescriptionBody1: '此應用以使用者體驗為核心設計。', appDescriptionBody2: '透過持續更新不斷優化。', appOpenLink: '開啟應用', careersTitle: '正在尋找加入的地方嗎？', careersText1: '在Birzont實現你的想法。', careersText2: '我們期待你的加入。', careersCta: '查看職缺' },
      images: { heroBackground: "url('https://mir-s3-cdn-cf.behance.net/project_modules/source/5e882325659471.5634b8c4f0383.gif')", heroForegroundDesktop: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F0Dta4%2FdJMcag5iELI%2FAAAAAAAAAAAAAAAAAAAAAIbtCJcnkjIlQX1yCLLsXKHXl-qXKL_otOuIVhGv7VD3%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DXXxRBIydW%252B%252FBKnUsAvUWbi8xITI%253D", heroForegroundMobile: 'resources/product/mobile.png', productSlides: ['resources/mainp.png', 'resources/chainp.png', 'resources/boardp.png', 'resources/products/mainscreen.png'] },
      video: { aboutUrl: 'https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1', aboutThumbnail: 'https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg' }
    }
  };

  const BLOG_POSTS = {
    en: [
      { id: 1, title: "[AI] AI is the trend—how can our company use it?", date: "2025.08.17", imageSrc: "https://i.pinimg.com/736x/14/b7/05/14b705fa261b1ab5dbbee32a601a253a.jpg", url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%BD%98%ED%85%90%EC%B8%A0-ai-ai%EA%B0%80-%EB%8C%80%EC%84%B8%EB%9D%BC%EB%8A%94%EB%8D%B0-%EC%9A%B0%EB%A6%AC-%ED%9A%8C%EC%82%AC%EC%97%90-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%99%9C%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-986706f87df" },
      { id: 2, title: "Can we use frontier AI without data security concerns?", date: "2025.08.03", imageSrc: "https://i.pinimg.com/736x/28/e3/c6/28e3c68e36eb1b330bb7b35e159337ce.jpg", url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%9A%94%EC%A6%98-%EC%9D%B4%EC%8A%88%EC%9D%B8-%EC%B4%88%EA%B1%B0%EB%8C%80-ai%EB%A5%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B3%B4%EC%95%88-%EB%AC%B8%EC%A0%9C-%EC%97%86%EC%9D%B4-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-9f4ea5abf88" },
      { id: 3, title: "After language, is image the next frontier for AI?", date: "2025.08.03", imageSrc: "https://i.pinimg.com/736x/81/2f/20/812f2077e9815b35ce4789d24a49b981.jpg", url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%9E%90%EC%97%B0%EC%96%B4%EC%97%90-%EC%9D%B4%EC%96%B4-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%8F%84-%EC%9D%B4%EC%A0%9C-%EC%B4%88%EA%B1%B0%EB%8C%80-ai%EC%9D%98-%EB%8F%85%EC%A0%90-%EC%8B%9C%EC%9E%91-fbd6dbaafacb" }
    ],
    ko: [
      { id: 1, title: "[AI] AI가 대세라는데 우리 회사에 어떻게 활용할 수 있을까?", date: "2025.08.17", imageSrc: "https://i.pinimg.com/736x/14/b7/05/14b705fa261b1ab5dbbee32a601a253a.jpg", url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%BD%98%ED%85%90%EC%B8%A0-ai-ai%EA%B0%80-%EB%8C%80%EC%84%B8%EB%9D%BC%EB%8A%94%EB%8D%B0-%EC%9A%B0%EB%A6%AC-%ED%9A%8C%EC%82%AC%EC%97%90-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%99%9C%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-986706f87df" },
      { id: 2, title: "요즘 이슈인 초거대 AI를 데이터 보안 문제 없이 사용할 수 있을까?", date: "2025.08.03", imageSrc: "https://i.pinimg.com/736x/28/e3/c6/28e3c68e36eb1b330bb7b35e159337ce.jpg", url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%9A%94%EC%A6%98-%EC%9D%B4%EC%8A%88%EC%9D%B8-%EC%B4%88%EA%B1%B0%EB%8C%80-ai%EB%A5%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B3%B4%EC%95%88-%EB%AC%B8%EC%A0%9C-%EC%97%86%EC%9D%B4-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-9f4ea5abf88" },
      { id: 3, title: "자연어에 이어 이미지도 이제 초거대 AI의 득점 시작?", date: "2025.08.03", imageSrc: "https://i.pinimg.com/736x/81/2f/20/812f2077e9815b35ce4789d24a49b981.jpg", url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%9E%90%EC%97%B0%EC%96%B4%EC%97%90-%EC%9D%B4%EC%96%B4-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%8F%84-%EC%9D%B4%EC%A0%9C-%EC%B4%88%EA%B1%B0%EB%8C%80-ai%EC%9D%98-%EB%8F%85%EC%A0%90-%EC%8B%9C%EC%9E%91-fbd6dbaafacb" }
    ],
    ja: [
      { id: 1, title: "[AI] AIが主流だが、自社でどう活用できる？", date: "2025.08.17", imageSrc: "https://i.pinimg.com/736x/14/b7/05/14b705fa261b1ab5dbbee32a601a253a.jpg", url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%BD%98%ED%85%90%EC%B8%A0-ai-ai%EA%B0%80-%EB%8C%80%EC%84%B8%EB%9D%BC%EB%8A%94%EB%8D%B0-%EC%9A%B0%EB%A6%AC-%ED%9A%8C%EC%82%AC%EC%97%90-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%99%9C%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-986706f87df" },
      { id: 2, title: "注目のフロンティアAIをデータセキュリティ問題なく使える？", date: "2025.08.03", imageSrc: "https://i.pinimg.com/736x/28/e3/c6/28e3c68e36eb1b330bb7b35e159337ce.jpg", url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%9A%94%EC%A6%98-%EC%9D%B4%EC%8A%88%EC%9D%B8-%EC%B4%88%EA%B1%B0%EB%8C%80-ai%EB%A5%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B3%B4%EC%95%88-%EB%AC%B8%EC%A0%9C-%EC%97%86%EC%9D%B4-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-9f4ea5abf88" }
    ],
    'zh-CN': [
      { id: 1, title: "[AI] AI成主流，我们公司该如何活用？", date: "2025.08.17", imageSrc: "https://i.pinimg.com/736x/14/b7/05/14b705fa261b1ab5dbbee32a601a253a.jpg", url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%BD%98%ED%85%90%EC%B8%A0-ai-ai%EA%B0%80-%EB%8C%80%EC%84%B8%EB%9D%BC%EB%8A%94%EB%8D%B0-%EC%9A%B0%EB%A6%AC-%ED%9A%8C%EC%82%AC%EC%97%90-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%99%9C%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-986706f87df" }
    ],
    'zh-TW': [
      { id: 1, title: "[AI] AI成主流，我們公司該如何活用？", date: "2025.08.17", imageSrc: "https://i.pinimg.com/736x/14/b7/05/14b705fa261b1ab5dbbee32a601a253a.jpg", url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%BD%98%ED%85%90%EC%B8%A0-ai-ai%EA%B0%80-%EB%8C%80%EC%84%B8%EB%9D%BC%EB%8A%94%EB%8D%B0-%EC%9A%B0%EB%A6%AC-%ED%9A%8C%EC%82%AC%EC%97%90-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%99%9C%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-986706f87df" }
    ]
  };

  function getLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && LANG[saved]) return saved;
    } catch (_) { }
    return DEFAULT_LANG;
  }
  function normalizeBrowserLang(raw) {
    if (!raw) return DEFAULT_LANG;
    const lower = String(raw).toLowerCase();
    if (lower.startsWith('ko')) return 'ko';
    if (lower.startsWith('ja')) return 'ja';
    if (lower.startsWith('zh-tw') || lower.startsWith('zh-hk') || lower.startsWith('zh-mo')) return 'zh-TW';
    if (lower.startsWith('zh')) return 'zh-CN';
    if (lower.startsWith('es')) return 'es';
    if (lower.startsWith('de')) return 'de';
    if (lower.startsWith('fr')) return 'fr';
    if (lower.startsWith('it')) return 'it';
    if (lower.startsWith('id')) return 'id';
    if (lower.startsWith('pt')) return 'pt';
    if (lower.startsWith('en')) return 'en';
    return DEFAULT_LANG;
  }
  function getInitialLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && LANG[saved]) return saved;
    } catch (_) { }
    return normalizeBrowserLang(
      navigator.language || (navigator.languages && navigator.languages[0]) || DEFAULT_LANG
    );
  }
  function applyInitialLang() {
    const initial = getInitialLang();
    try { localStorage.setItem(LANG_KEY, initial); } catch (_) { }
    return initial;
  }
  function t(lang, key) {
    const keys = key.split('.');
    let obj = LANG[lang] || LANG.en;
    for (const k of keys) obj = obj && obj[k];
    if (obj != null) return obj;
    let fallback = LANG.en;
    for (const k of keys) fallback = fallback && fallback[k];
    return fallback;
  }
  function getBlogPosts(lang) { return BLOG_POSTS[lang] || BLOG_POSTS.en || []; }
  function getVideo(lang, key) { return t(lang, 'video.' + key); }
  function isLatinLang(lang) { return LATIN_LANGS.includes(lang); }
  function applyInstrumentFont() {
    const use = isLatinLang(getLang());
    document.documentElement.setAttribute('data-latin-lang', use ? 'true' : 'false');
    document.body && document.body.setAttribute('data-latin-lang', use ? 'true' : 'false');
    document.querySelectorAll('[data-instrument-font]').forEach((el) => {
      el.classList.toggle('font-instrument-heading', use);
    });

    // Hard-enforce non-latin fallback on key headings.
    const nonLatinTargets = document.querySelectorAll('.hero-title, .city-cta-headline, .biz-float-title, .biz-float-title-script, #product-features-grid .product-card-title');
    nonLatinTargets.forEach((el) => {
      if (use) {
        // Explicitly set Instrument Serif for latin languages.
        if (el.classList.contains('biz-float-title-script')) {
          el.style.setProperty('font-family', "'Instrument Serif Italic', 'Instrument Serif', ui-serif, Georgia, 'Times New Roman', serif", 'important');
          el.style.setProperty('font-style', 'italic', 'important');
        } else {
          el.style.setProperty('font-family', "'Instrument Serif', Georgia, 'Times New Roman', serif", 'important');
          el.style.setProperty('font-style', 'normal', 'important');
        }
      } else {
        el.style.setProperty('font-family', "'Inter', sans-serif", 'important');
        el.style.setProperty('font-style', 'normal', 'important');
      }
    });
  }
  function applyDataI18n(lang) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(lang, key);
      if (typeof val === 'string') el.textContent = val;
    });
  }
  function applyHeroAssets(lang) {
    const canvas = document.getElementById('image-canvas');
    if (!canvas) return;
    const img = t(lang, 'images');
    if (!img) return;
    if (img.heroBackground) canvas.style.backgroundImage = img.heroBackground;
    const desktop = canvas.querySelector('img.hero-foreground-gif:not(.hero-foreground-mobile)');
    const mobile = canvas.querySelector('img.hero-foreground-mobile');
    if (desktop && img.heroForegroundDesktop) desktop.src = img.heroForegroundDesktop;
    if (mobile && img.heroForegroundMobile) mobile.src = img.heroForegroundMobile;
    document.querySelectorAll('#product-carousel-slides .product-slide img').forEach((slide, i) => {
      if (img.productSlides && img.productSlides[i]) slide.src = img.productSlides[i];
    });
    const thumb = document.getElementById('video-thumbnail');
    if (thumb && t(lang, 'video.aboutThumbnail')) thumb.src = t(lang, 'video.aboutThumbnail');
  }
  function applyAll(lang) {
    const target = lang || getLang();
    applyDataI18n(target);
    applyHeroAssets(target);
    applyInstrumentFont();
    applyStaticPageText(target);
  }

  function ui(lang, key, fallback) {
    return t(lang, 'ui.' + key) || fallback;
  }

  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el && typeof value === 'string') el.textContent = value;
  }

  function applyStaticPageText(lang) {
    setText('.hero-title', ui(lang, 'heroTitle', 'Where the world builds prompts'));
    const heroSub = document.querySelector('p.blur-fade-once[data-hero-order="2"]');
    if (heroSub) heroSub.innerHTML = `${ui(lang, 'heroSubtitle1', 'Discover, share, and build AI prompts and agents.')}<br>${ui(lang, 'heroSubtitle2', 'A collaboration platform for prompt engineers and creators.')}`;
    setText('.try-free-button', ui(lang, 'ctaGetStarted', 'Get Started'));

    const headings = document.querySelectorAll('h3[data-instrument-font]');
    if (headings[0]) headings[0].textContent = ui(lang, 'sectionExplore', 'Explore the Birzont');
    if (headings[1]) headings[1].textContent = ui(lang, 'sectionHow', 'How it works');
    if (headings[2]) headings[2].textContent = ui(lang, 'sectionHomePrompts', 'Birzont, Home of Prompts');
    const planHeading = document.querySelector('h2[data-instrument-font]');
    if (planHeading) planHeading.textContent = ui(lang, 'sectionPlans', 'Plans');

    const centerSubs = document.querySelectorAll('p.text-lg.md\\:text-xl.text-gray-600.text-center');
    if (centerSubs[0]) centerSubs[0].textContent = ui(lang, 'sectionExploreSub', 'One platform for prompt generation, extraction, workflow, sharing, and selling.');
    if (centerSubs[1]) centerSubs[1].textContent = ui(lang, 'sectionHowSub', 'Generate, extract, connect, share, and sell prompts-all in one place.');
    if (centerSubs[2]) centerSubs[2].textContent = ui(lang, 'sectionPlansSub', 'Choose the plan that fits you');
    if (centerSubs[3]) centerSubs[3].textContent = ui(lang, 'sectionHomePromptsSub', 'Explore diverse prompts created by the community');

    setText('.city-cta-sub', ui(lang, 'citySub', 'The hub for AI-powered creation and collaboration'));
    setText('.city-cta-headline', ui(lang, 'cityHeadline', 'Bridge, Build, Automation. With Birzont.'));
    setText('.city-cta-body', ui(lang, 'cityBody', 'No more juggling tools for landing pages, copy, or agents.'));
    setText('a[href="https://birzont.ai"][class*="hover:underline"]', ui(lang, 'promptExplore', 'Explore Prompts'));
    const bizTitle = document.querySelector('.biz-float-title');
    if (bizTitle) {
      bizTitle.innerHTML = `${ui(lang, 'builtForAny', 'Built for any')} <span class="biz-float-title-script">${ui(lang, 'builtBusiness', 'Business')}</span>`;
    }
    const bizChips = document.querySelectorAll('.biz-float-chip');
    if (bizChips[0]) bizChips[0].lastChild.textContent = ` ${ui(lang, 'bizChip1', 'Digital products')}`;
    if (bizChips[1]) bizChips[1].lastChild.textContent = ` ${ui(lang, 'bizChip2', 'Agencies')}`;
    if (bizChips[2]) bizChips[2].lastChild.textContent = ` ${ui(lang, 'bizChip3', 'E-commerce')}`;
    if (bizChips[3]) bizChips[3].lastChild.textContent = ` ${ui(lang, 'bizChip4', 'SaaS')}`;
    if (bizChips[4]) bizChips[4].lastChild.textContent = ` ${ui(lang, 'bizChip5', 'Mobile apps')}`;
    if (bizChips[5]) bizChips[5].lastChild.textContent = ` ${ui(lang, 'bizChip6', 'Services')}`;

    // Intro left block in main product card
    const introHeaderSpans = document.querySelectorAll('.agent-card-left header .group h3 span');
    if (introHeaderSpans[0]) introHeaderSpans[0].textContent = ui(lang, 'introPlatformLabel', 'Prompt AI Platform');
    if (introHeaderSpans[1]) introHeaderSpans[1].textContent = ui(lang, 'introVersionLabel', 'v1.0 MVP');
    const introHeadline = document.querySelector('.agent-card-left header .group > p');
    if (introHeadline) introHeadline.innerHTML = `${ui(lang, 'introHeadline1', 'Just say your intent.')}<br>${ui(lang, 'introHeadline2', 'Birzont creates the optimal prompt.')}`;
    const introTabs = document.querySelectorAll('.agent-card-left .product-tab');
    if (introTabs[0]) {
      const t1 = introTabs[0].querySelector('.product-tab-summary');
      const b1 = introTabs[0].querySelector('.product-tab-content');
      if (t1) t1.textContent = ui(lang, 'introTab1Title', 'Intent-based prompt generation');
      if (b1) b1.textContent = ui(lang, 'introTab1Body', 'Hearim 3.0 & Tobaki-2 models analyze your natural language and generate optimized prompts.');
    }
    if (introTabs[1]) {
      const t2 = introTabs[1].querySelector('.product-tab-summary');
      const b2 = introTabs[1].querySelector('.product-tab-content');
      if (t2) t2.textContent = ui(lang, 'introTab2Title', 'Intelligent workflow chains');
      if (b2) b2.textContent = ui(lang, 'introTab2Body', 'Connect multi-step prompts into a single pipeline from planning to execution. Automate complex projects.');
    }
    if (introTabs[2]) {
      const t3 = introTabs[2].querySelector('.product-tab-summary');
      const b3 = introTabs[2].querySelector('.product-tab-content');
      if (t3) t3.textContent = ui(lang, 'introTab3Title', 'Verified prompt marketplace');
      if (b3) b3.textContent = ui(lang, 'introTab3Body', 'Explore and share 5,000+ high-quality templates. 11 languages. Instant apply. Extract prompts from anywhere.');
    }
    if (introTabs[3]) {
      const t4 = introTabs[3].querySelector('.product-tab-summary');
      const b4 = introTabs[3].querySelector('.product-tab-content');
      if (t4) t4.textContent = ui(lang, 'introTab4Title', 'Adaptive personalization');
      if (b4) b4.textContent = ui(lang, 'introTab4Body', 'Gets smarter with use. RLHF-based learning adapts to your feedback and delivers personalized results in real time.');
    }

    // User prompt cards
    const promptTitles = document.querySelectorAll('.user-prompt-card .user-prompt-title');
    const promptBodies = document.querySelectorAll('.user-prompt-card .user-prompt-description');
    if (promptTitles[0]) promptTitles[0].textContent = ui(lang, 'promptCard1Title', 'Efficient task automation script generation');
    if (promptBodies[0]) promptBodies[0].textContent = ui(lang, 'promptCard1Body', 'Generates Python scripts to automate repetitive tasks. Based on your description, it writes and optimizes code for you.');
    if (promptTitles[1]) promptTitles[1].textContent = ui(lang, 'promptCard2Title', 'Creative idea brainstorming prompt');
    if (promptBodies[1]) promptBodies[1].textContent = ui(lang, 'promptCard2Body', 'Generates original and innovative ideas around your topic. Expands and refines ideas from multiple perspectives to maximize creativity.');
    if (promptTitles[2]) promptTitles[2].textContent = ui(lang, 'promptCard3Title', 'Test scenario generation and validation');
    if (promptBodies[2]) promptBodies[2].textContent = ui(lang, 'promptCard3Body', 'Generates and validates diverse scenarios for software testing. Auto-creates test cases from your requirements to boost efficiency.');
    if (promptTitles[3]) promptTitles[3].textContent = ui(lang, 'promptCard4Title', 'SNS & ad marketing copy generation');
    if (promptBodies[3]) promptBodies[3].textContent = ui(lang, 'promptCard4Body', 'Input your brand tone and target-get multiple short, impactful copy versions by channel.');
    if (promptTitles[4]) promptTitles[4].textContent = ui(lang, 'promptCard5Title', 'Long document & meeting notes summary');
    if (promptBodies[4]) promptBodies[4].textContent = ui(lang, 'promptCard5Body', 'Paste PDF or text-get structured conclusions, action items, and timeline for easy review.');
    if (promptTitles[5]) promptTitles[5].textContent = ui(lang, 'promptCard6Title', 'Research question design & citation formatting');
    if (promptBodies[5]) promptBodies[5].textContent = ui(lang, 'promptCard6Body', 'Input a topic-get search-friendly sub-questions and proper citation formats for your answers.');

    // About page core sections
    setText('#what-we-do .uppercase', ui(lang, 'aboutWhatWeDo', 'What we do'));
    setText('#what-we-do h2', ui(lang, 'whatWeDoTitle', 'Inventing the infrastructure software for hyperscale AI'));
    setText('#what-we-do p', ui(lang, 'whatWeDoBody', ''));
    setText('#our-vision .uppercase', ui(lang, 'aboutVision', 'Our Vision'));
    setText('#our-vision h2', ui(lang, 'ourVisionTitle', 'Breaking down infrastructure barriers to make AI more accessible'));
    setText('#our-vision p', ui(lang, 'ourVisionBody', ''));

    const aboutHeroLines = document.querySelectorAll('section.relative.z-10 h1 span');
    if (aboutHeroLines[0]) aboutHeroLines[0].textContent = ui(lang, 'aboutHero1', 'Where the Bridge ends, Bird flies.');
    if (aboutHeroLines[1]) aboutHeroLines[1].textContent = ui(lang, 'aboutHero2', 'Birzont can be the bridge.');
    const aboutTags = document.querySelectorAll('.what-we-do-section .uppercase, .our-vision-section .uppercase');
    if (aboutTags[0]) aboutTags[0].textContent = ui(lang, 'aboutWhatWeDo', 'What we do');
    if (aboutTags[1]) aboutTags[1].textContent = ui(lang, 'aboutVision', 'Our Vision');
    setText('#team h2', ui(lang, 'aboutTeam', 'Meet Our Team'));
    const aboutIntroTitle = document.querySelector('#fade-in-section h1');
    if (aboutIntroTitle) {
      aboutIntroTitle.innerHTML = `${ui(lang, 'aboutIntroTitle1', 'Birzont. we build AI')}<br>${ui(lang, 'aboutIntroTitle2', 'the bridge to the future.')}`;
    }
    setText('#fade-in-section p[data-about-order="3"]', ui(lang, 'aboutIntroBody', "While no one can foresee every outcome AI will have on society, we do know that designing powerful technologies requires both bold steps forward and intentional pauses to consider the effects. That's why we focus on building tools with human benefit at their foundation."));
    setText('#products .products-title-container h2', ui(lang, 'productsTitle', 'Our Products'));
    setText('#products .products-title-container p', ui(lang, 'productsBody', 'Discover our innovative solutions designed to enhance your daily life and productivity. Each product is crafted with attention to detail and user experience.'));
    const timelineHeading = document.querySelector('#timeline h2');
    if (timelineHeading) timelineHeading.innerHTML = `${ui(lang, 'timelineHeading1', "Watch Birzont's story")}<br>${ui(lang, 'timelineHeading2', 'On artificial intelligence')}`;

    const careerLabel = document.querySelector('section.w-full.pt-\\[240px\\] h2');
    if (careerLabel) careerLabel.textContent = ui(lang, 'careerLabel', 'Open roles');
    const careerTitle = document.querySelector('section.w-full.pt-\\[240px\\] h1');
    if (careerTitle) careerTitle.innerHTML = `${ui(lang, 'careerTitle1', 'Build the future of AI with us.')}<br>${ui(lang, 'careerTitle2', 'Your journey starts here.')}`;

    // Top nav labels
    const desktopLinks = document.querySelectorAll('#desktop-nav a');
    if (desktopLinks[0]) desktopLinks[0].textContent = ui(lang, 'navHome', 'Home');
    if (desktopLinks[1]) desktopLinks[1].textContent = ui(lang, 'navPricing', 'Pricing');
    if (desktopLinks[2]) desktopLinks[2].textContent = ui(lang, 'navCompanyTitle', 'Company');
    if (desktopLinks[3]) desktopLinks[3].textContent = ui(lang, 'navBlogTitle', 'Blog');
    if (desktopLinks[4]) desktopLinks[4].textContent = ui(lang, 'navCareers', 'Careers');
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    if (mobileLinks[0]) mobileLinks[0].textContent = ui(lang, 'navHome', 'Home');
    if (mobileLinks[1]) mobileLinks[1].textContent = ui(lang, 'navPricing', 'Pricing');
    if (mobileLinks[2]) mobileLinks[2].textContent = ui(lang, 'navCompanyTitle', 'Company');
    if (mobileLinks[3]) mobileLinks[3].textContent = ui(lang, 'navBlogTitle', 'Blog');
    if (mobileLinks[4]) mobileLinks[4].textContent = ui(lang, 'navCareers', 'Careers');
    setText('#desktop-start-btn', ui(lang, 'navLogin', 'Log in'));
    const mobileLogin = document.querySelector('#mobile-menu a[href*="login"]');
    if (mobileLogin) mobileLogin.textContent = ui(lang, 'navLogin', 'Log in');

    // Bottom nav (footer)
    const footerHeads = document.querySelectorAll('#footer-injected h3');
    if (footerHeads[0]) footerHeads[0].textContent = ui(lang, 'footerCompany', 'Company');
    if (footerHeads[1]) footerHeads[1].textContent = ui(lang, 'footerProduct', 'Product');
    if (footerHeads[2]) footerHeads[2].textContent = ui(lang, 'footerSupport', 'Support');
    setText('#footer-injected p.text-gray-600.text-sm', ui(lang, 'footerDesc', "Building AI to serve humanity's future.\n© 2025 Birzont. All rights reserved."));
    const footerLinks = document.querySelectorAll('#footer-injected ul a');
    if (footerLinks[0]) footerLinks[0].textContent = ui(lang, 'footerAboutUs', 'About us');
    if (footerLinks[1]) footerLinks[1].textContent = ui(lang, 'footerCareer', 'Career');
    if (footerLinks[2]) footerLinks[2].textContent = ui(lang, 'footerBlog', 'Blog');
    if (footerLinks[3]) footerLinks[3].textContent = ui(lang, 'footerBrand', 'Brand');
    if (footerLinks[4]) footerLinks[4].textContent = 'Birzont';
    if (footerLinks[5]) footerLinks[5].textContent = 'Bloxer';
    if (footerLinks[6]) footerLinks[6].textContent = ui(lang, 'footerHelp', 'Help Center');
    if (footerLinks[7]) footerLinks[7].textContent = ui(lang, 'footerContact', 'Contact Us');
    if (footerLinks[8]) footerLinks[8].textContent = ui(lang, 'footerPrivacy', 'Privacy Policy');
    if (footerLinks[9]) footerLinks[9].textContent = ui(lang, 'footerTerms', 'Terms of Service');

    const footerBottomLinks = document.querySelectorAll('#footer-injected .border-t a');
    if (footerBottomLinks[0]) footerBottomLinks[0].textContent = ui(lang, 'footerPrivacy', 'Privacy Policy');
    if (footerBottomLinks[1]) footerBottomLinks[1].textContent = ui(lang, 'footerTerms', 'Terms of Service');
    if (footerBottomLinks[2]) footerBottomLinks[2].textContent = ui(lang, 'footerCookie', 'Cookie Policy');
  }

  window.addEventListener('birzont-lang-change', (e) => applyAll((e.detail && e.detail.lang) || getLang()));

  const provider = { LANG, BLOG_POSTS, getLang, t, getBlogPosts, getVideo, isLatinLang, applyAll, applyInstrumentFont, getInitialLang };
  window.LanguageProvider = provider;
  // backward compatibility
  window.BirzontI18n = provider;
  window.BirzontBlogs = { BLOG_POSTS, getBlogPosts };
  applyInitialLang();
})();
