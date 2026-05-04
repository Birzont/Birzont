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
        heroTitle1: 'The home for better prompts',
        heroTitle2: 'that upscale your ideas',
        heroSubtitle1: 'Enhance, collaborate, and share your prompt templates with the world.',
        heroSubtitle2: ' ',
        ctaGetStarted: 'Get Started',
        sectionExplore: 'Explore the Birzont',
        sectionExploreSub: ' ',
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
        heroBackground: "url('https://img.freepik.com/premium-photo/golden-gate-bridge-serene-sunset_944420-99764.jpg?semt=ais_incoming&w=740&q=80')",
        heroForegroundDesktop: "resources/products/mainscreen.png",
        heroForegroundMobile: 'resources/products/mobile.png',
        productSlides: ['resources/products/agent.png', 'resources/products/template.png', 'resources/products/market.png', 'resources/products/custom.png']
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
        heroTitle1: '전 세계의 프롬프트가',
        heroTitle2: '만들어지는 곳',
        heroSubtitle1: '프롬프트 템플릿을 발견하고, 협업하고, 빌드하세요.',
        heroSubtitle2: ' ',
        ctaGetStarted: '시작하기',

        sectionExplore: '당신의 프롬프트를 위한 협업 플랫폼과 빌더.',
        sectionExploreSub: ' ',
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
        
        introPlatformLabel: '당신의 첫 AI 프롬프트 에이전트',
        introVersionLabel: ' ',
        introHeadline1: '빌드하고, 협업하고, 공유하세요.',
        introHeadline2: '최적의 프롬프트는 Birzont가 만듭니다.', //One line, perfect prompt

        introTab1Title: '의도 한줄로 구체적인 프롬프트 만들기',
        introTab1Body: '의도만 말하세요. 프롬프트는 Birzont가 만듭니다.',
        introTab2Title: '1만개+의 프롬프트와 템플릿 적용하기',
        introTab2Body: '16가지 언어를 동시에 지원하는 1만+ 이상의 프롬프트와 템플릿을 둘러보세요.',
        introTab3Title: '프롬프트 템플릿으로 협업하기',
        introTab3Body: '프롬프트 템플릿을 편집하고 협업하며 Slack, Notion과 연동하세요.',
        introTab4Title: '나만의 프롬프트 저장공간',
        introTab4Body: '프롬프트와 템플릿을 저장해 언제 어디서든 마음에 드는 프롬프트를 즉시 사용하세요.',

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
        timelineHeading2: '인공지능 위에서',

        featureTitle1: '프롬프트의 집',
        featureTagline1: '기존 API 대비 90% 낮은 비용으로 고품질 프롬프트를 제공합니다.',
        featureDesc1: '자체 튜닝된 Hearim & Tobaki 모델로 더 낮은 비용에 높은 품질의 프롬프트를 제공합니다.',
        featureTitle2: '자동화를 만듭니다',
        featureTagline2: '사용할수록 더 좋아지는 적응형 AI',
        featureDesc2: '피드백과 사용 패턴을 학습해 업무 흐름에 맞게 최적화됩니다.',
        featureTitle3: '출시하고 성장하세요',
        featureTagline3: '11개 언어, 5,000+ 검증 프롬프트를 즉시 활용',
        featureDesc3: '크리에이터 검증 프롬프트를 글로벌로 거래하고 바로 실행할 수 있습니다.',
        integrationsLabel: '연동',
        partnersTitle: '파트너를 소개합니다',
        companyTimelineTitle: '회사 연혁',
        seeMore: '더 보기',
        whatWeDoTitle: '하이퍼스케일 AI를 위한 인프라 소프트웨어를 만듭니다',
        whatWeDoBody: 'LLM과 생성형 AI 수요가 커지면서 대규모 AI 인프라 구축과 운영이 어려워졌습니다. 병렬화, 분산, 확장성, 성능 최적화, 장애 복구 같은 핵심 문제를 소프트웨어로 해결합니다.',
        ourVisionTitle: '인프라 장벽을 낮춰 AI를 더 많은 사람에게',
        ourVisionBody: 'AI의 성공은 열린 생태계와 다양한 참여자에서 시작됩니다. 우리는 인프라 기술 장벽을 낮춰 더 많은 고객이 AI를 활용하도록 돕습니다.',
      },
      images: {
        heroBackground: "url('https://www.agoda.com/wp-content/uploads/2019/05/Seoul-itinerary-Seoul-Bukchon-Hanok-Village.jpg')",
        heroForegroundDesktop: "resources/products/mainscreen.png",
        heroForegroundMobile: 'resources/product/mobile.png',
        productSlides: ['resources/products/agent.png', 'resources/products/template.png', 'resources/products/market.png', 'resources/products/custom.png']
      },
      video: {
        aboutUrl: 'https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1',
        aboutThumbnail: 'https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg'
      }
    },
    ja: {
      blog: {
        title: "Birzontの多様なストーリー",
        subtitle: "AIとテクノロジーに関する最新のインサイトとストーリーをお届けします。"
      },
      ui: {
        appDescriptionTitle: 'アプリの説明',
        appDescriptionBody1: 'このアプリは直感的なインターフェースと強力な機能でユーザー体験を中心に設計されています。',
        appDescriptionBody2: '自分のワークフローに合わせてカスタマイズし、継続的なアップデートで改善し続けましょう。',
        appOpenLink: 'アプリを開く',
        quickLink: '今すぐ移動',
        careersTitle: '参加する場所をお探しですか？',
        careersText1: 'Birzontであなたのアイデアを実現しましょう。',
        careersText2: 'あなたのような優秀な人材をお待ちしています。',
        careersCta: '求人を見る',
        partnersDescription: '私たちはグローバル企業と連携し、未来に向けた革新的なAIソリューションを構築しています。',
        timelineDescription: "Birzontのマイルストーンと成長の歩みをご覧ください。",
        navCompanyTitle: '会社',
        navProductTitle: '製品ラインナップ',
        navBlogTitle: 'ブログ',
        navAboutCompany: '会社概要',
        navWhatWeDo: '私たちの取り組み',
        navOurTeam: 'チーム紹介',
        navTimeline: 'タイムライン',
        navNewsroom: 'ニュースルーム',
        navEverything: 'すべて',
        navHome: 'ホーム',
        navPricing: '料金',
        navCareers: '採用情報',
        navLogin: 'ログイン',
        footerCompany: '会社',
        footerProduct: '製品',
        footerSupport: 'サポート',
        footerDesc: "人類の未来のためのAIを構築しています。\n© 2025 Birzont. All rights reserved.",
        footerAboutUs: '私たちについて',
        footerCareer: '採用情報',
        footerBlog: 'ブログ',
        footerBrand: 'ブランド',
        footerHelp: 'ヘルプセンター',
        footerContact: 'お問い合わせ',
        footerPrivacy: 'プライバシーポリシー',
        footerTerms: '利用規約',
        footerCookie: 'Cookieポリシー',
        productDesc2: 'このアプリは使いやすいインターフェースと実用的な機能で革新的なサービスを提供します。',
        productDesc3: '最新のプロモーションやイベント情報をお届けする公式アプリです。',
        timeline1: '最初のプロトタイプをリリース。',
        timeline2: '最初のプロトタイプをリリース。',
        timeline3: 'リリース後、急成長により10万ユーザーを達成。',
        timeline4: '戦略的パートナーシップを通じて拡大を加速。',
        timeline5: '革新的なAI機能でUXを向上。',
        timeline6: 'シリーズAを調達し、コアAIアルゴリズムを完成。',
        job2Title: '【タレントプール登録】プロダクトマネージャー',
        job2Location: '慶熙スタートアップキャンパス、ソウル',
        job2Salary: '5万〜10万KRW',
        job3Title: '【タレントプール登録】マーケティングリード',
        job3Location: '慶熙スタートアップキャンパス、ソウル',
        job3Salary: '5万〜10万KRW',
        heroTitle1: '世界がプロンプトを',
        heroTitle2: '作る場所',
        heroSubtitle1: 'AIプロンプトとエージェントを発見・共有・構築しましょう。',
        heroSubtitle2: 'プロンプトエンジニアとクリエイターのためのコラボレーションプラットフォーム。',
        ctaGetStarted: '始める',
        sectionExplore: 'Birzontを探索する',
        sectionExploreSub: ' ',
        sectionHow: '使い方',
        sectionHowSub: 'プロンプトの生成・抽出・連携・共有・販売をすべて一か所で。',
        sectionPlans: 'プラン',
        sectionPlansSub: 'あなたに合ったプランをお選びください',
        citySub: 'AIによる創造とコラボレーションのハブ',
        cityHeadline: 'ブリッジ、ビルド、自動化。Birzontで。',
        cityBody: 'ランディングページ、コピー、エージェントのためにツールを使い分ける必要はもうありません。Birzontはあなたのブランドを理解し、プロンプトを設計し、チームと共有します―すべてひとつのプラットフォームで。',
        sectionHomePrompts: 'Birzont、プロンプトのホーム',
        sectionHomePromptsSub: 'コミュニティが作った多様なプロンプトを探索しましょう',
        promptExplore: 'プロンプトを探索する',
        builtForAny: 'あらゆる',
        builtBusiness: 'ビジネスのために',
        aboutHero1: '橋の先で、鳥は飛ぶ。',
        aboutHero2: 'Birzontはその橋になれる。',
        aboutWhatWeDo: '私たちの取り組み',
        aboutVision: '私たちのビジョン',
        aboutTeam: 'チームに会う',
        aboutIntroTitle1: 'Birzont。私たちはAIを構築する、',
        aboutIntroTitle2: '未来への橋を。',
        aboutIntroBody: "AIが社会に与えるすべての影響を予測できる人はいませんが、強力な技術を設計するには大胆な前進と、その影響を考慮するための意図的な立ち止まりの両方が必要だということは分かっています。だからこそ、私たちは人間の利益を根幹に据えたツール作りに集中しています。",
        productsTitle: '私たちの製品',
        productsBody: '日常生活と生産性を高めるために設計された革新的なソリューションをご紹介します。各製品は細部へのこだわりとユーザー体験を大切に作られています。',
        introPlatformLabel: 'プロンプトAIプラットフォーム',
        introVersionLabel: 'v1.0 MVP',
        introHeadline1: '意図を伝えるだけで。',
        introHeadline2: 'Birzontが最適なプロンプトを作ります。',
        introTab1Title: '意図ベースのプロンプト生成',
        introTab1Body: 'Hearim 3.0とTobaki-2モデルが自然言語を解析し、最適化されたプロンプトを生成します。',
        introTab2Title: 'インテリジェントなワークフローチェーン',
        introTab2Body: '複数ステップのプロンプトを計画から実行までひとつのパイプラインに繋げます。複雑なプロジェクトを自動化しましょう。',
        introTab3Title: '認証済みプロンプトマーケットプレイス',
        introTab3Body: '5,000以上の高品質テンプレートを探索・共有できます。11言語対応。即時適用。どこからでもプロンプトを抽出できます。',
        introTab4Title: 'アダプティブパーソナライゼーション',
        introTab4Body: '使えば使うほど賢くなります。RLHFベースの学習があなたのフィードバックに適応し、リアルタイムでパーソナライズされた結果を提供します。',
        promptCard1Title: '効率的なタスク自動化スクリプト生成',
        promptCard1Body: '繰り返し作業を自動化するPythonスクリプトを生成します。説明を入力するだけで、コードを書いて最適化します。',
        promptCard2Title: 'クリエイティブなアイデアブレインストーミングプロンプト',
        promptCard2Body: 'テーマに沿ったオリジナルで革新的なアイデアを生成します。複数の視点からアイデアを展開・洗練させ、創造性を最大化します。',
        promptCard3Title: 'テストシナリオ生成と検証',
        promptCard3Body: 'ソフトウェアテスト用の多様なシナリオを生成・検証します。要件からテストケースを自動生成し、効率を高めます。',
        promptCard4Title: 'SNS・広告マーケティングコピー生成',
        promptCard4Body: 'ブランドのトーンとターゲットを入力するだけで、チャネル別に複数の短くインパクトのあるコピーバージョンが生成されます。',
        promptCard5Title: '長文ドキュメント・議事録の要約',
        promptCard5Body: 'PDFやテキストを貼り付けると、結論・アクションアイテム・タイムラインが構造化されて出力されます。',
        promptCard6Title: '研究質問設計と引用フォーマット',
        promptCard6Body: 'トピックを入力すると、検索に適したサブ質問と回答に対応する適切な引用フォーマットが生成されます。',
        bundleCardTitle1: '株式投資スターターパック 🪴',
        bundleCardTitle2: 'AIライティングバンドル ✍️',
        bundleCardTitle3: 'スタートアップピッチ完全パッケージ 🚀',
        bundleCardTitle4: 'データ分析入門セット 📊',
        bundleCardTitle5: 'コンテンツクリエイターパック 🎬',
        bundleCardTitle6: 'コードレビュー＆リファクタリングバンドル 💻',
        bizChip1: 'デジタル製品',
        bizChip2: 'エージェンシー',
        bizChip3: 'Eコマース',
        bizChip4: 'SaaS',
        bizChip5: 'モバイルアプリ',
        bizChip6: 'サービス',
        careerLabel: '募集中のポジション',
        careerTitle1: '私たちと一緒にAIの未来を構築しましょう。',
        careerTitle2: 'あなたの旅はここから始まります。',
        timelineHeading1: "Birzontのストーリーを見る",
        timelineHeading2: '人工知能について'
        , featureTitle1: 'プロンプトのホーム'
        , featureTagline1: '高品質なプロンプトを既存APIより90%低コストで。'
        , featureDesc1: '自社チューニングのHearim & Tobaki モデル（Deepseekベース）が、既存APIより90%低コストで高品質なプロンプトを提供します。'
        , featureTitle2: '自動化を構築する'
        , featureTagline2: '使えば使うほど賢くなるアダプティブAI。'
        , featureDesc2: 'Supabaseを通じてフィードバックと使用パターンを分析し、時間をかけてあなたのワークフローに最適化するアダプティブAIを実現します。'
        , featureTitle3: 'ローンチして成長する'
        , featureTagline3: '11言語で5,000以上の認証済みプロンプト。即時利用可能。'
        , featureDesc3: 'クリエイターが認証した5,000以上のプロンプトをグローバルに取引できます。韓国語・英語・中国語を含む11言語で即時利用可能です。'
        , integrationsLabel: 'インテグレーション'
        , partnersTitle: 'パートナー紹介'
        , companyTimelineTitle: '会社タイムライン'
        , seeMore: 'もっと見る'
        , whatWeDoTitle: 'ハイパースケールAIのインフラソフトウェアを発明する'
        , whatWeDoBody: 'LLMと生成AIへの関心が高まる中、多くの人が数千台以上のアクセラレータを用いた大規模AIインフラの構築・活用に苦労しています。AI技術における最も困難な課題は、並列化・分散化・クラスターのスケーラビリティ・パフォーマンス最適化・フェイルオーバーといったインフラレベルの問題になっています。'
        , ourVisionTitle: 'インフラの壁を取り除き、AIをより身近に'
        , ourVisionBody: 'AI技術の成功は、オープンなエコシステム、多様な参加者、そして集合的な経験の蓄積によって実現されてきました。私たちのミッションは、インフラへの技術的障壁を取り除き、未来のAI技術をより幅広いお客様に届けることです。'
      },
      images: {
        heroBackground: "url('https://www.artsoullifemagazine.com/wp-content/uploads/2023/09/Image-01-2.jpg')",
        heroForegroundDesktop: "resources/products/mainscreen.png",
        heroForegroundMobile: 'resources/product/mobile.png',
        productSlides: ['resources/products/agent.png', 'resources/products/template.png', 'resources/products/market.png', 'resources/products/custom.png']
      },
      video: {
        aboutUrl: 'https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1',
        aboutThumbnail: 'https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg'
      }
    },
    'zh-CN': {
      blog: {
        title: "Birzont的多元故事",
        subtitle: "分享AI与科技领域的最新洞察与故事。"
      },
      ui: {
        appDescriptionTitle: '应用简介',
        appDescriptionBody1: '本应用以用户体验为核心，具备直观的界面和强大的功能。',
        appDescriptionBody2: '根据您的工作流程进行个性化定制，持续更新不断优化。',
        appOpenLink: '打开应用',
        quickLink: '立即前往',
        careersTitle: '正在寻找加入的机会？',
        careersText1: '在Birzont实现您的想法。',
        careersText2: '我们期待像您一样的优秀人才。',
        careersCta: '查看招聘职位',
        partnersDescription: '我们与全球企业合作，共同构建面向未来的创新AI解决方案。',
        timelineDescription: "探索Birzont的发展里程碑与成长历程。",
        navCompanyTitle: '公司',
        navProductTitle: '产品阵容',
        navBlogTitle: '博客',
        navAboutCompany: '公司简介',
        navWhatWeDo: '我们的业务',
        navOurTeam: '团队介绍',
        navTimeline: '发展历程',
        navNewsroom: '新闻中心',
        navEverything: '全部',
        navHome: '首页',
        navPricing: '定价',
        navCareers: '招聘',
        navLogin: '登录',
        footerCompany: '公司',
        footerProduct: '产品',
        footerSupport: '支持',
        footerDesc: "构建服务人类未来的AI。\n© 2025 Birzont. 保留所有权利。",
        footerAboutUs: '关于我们',
        footerCareer: '招聘',
        footerBlog: '博客',
        footerBrand: '品牌',
        footerHelp: '帮助中心',
        footerContact: '联系我们',
        footerPrivacy: '隐私政策',
        footerTerms: '服务条款',
        footerCookie: 'Cookie政策',
        productDesc2: '本应用提供创新服务，界面简洁易用，功能实用高效。',
        productDesc3: '官方应用，及时推送最新优惠活动与活动资讯。',
        timeline1: '发布首个原型。',
        timeline2: '发布首个原型。',
        timeline3: '上线后快速增长，用户突破10万。',
        timeline4: '通过战略合作伙伴关系加速扩张。',
        timeline5: '以创新AI功能提升用户体验。',
        timeline6: '完成A轮融资，核心AI算法研发完毕。',
        job2Title: '【人才库登记】产品经理',
        job2Location: '庆熙创业校区，首尔',
        job2Salary: '5万～10万韩元',
        job3Title: '【人才库登记】市场营销负责人',
        job3Location: '庆熙创业校区，首尔',
        job3Salary: '5万～10万韩元',
        heroTitle1: '全球构建',
        heroTitle2: '提示词的地方',
        heroSubtitle1: '探索、分享并构建AI提示词与智能体。',
        heroSubtitle2: '面向提示词工程师与创作者的协作平台。',
        ctaGetStarted: '立即开始',
        sectionExplore: '探索Birzont',
        sectionExploreSub: ' ',
        sectionHow: '使用方式',
        sectionHowSub: '生成、提取、连接、共享并销售提示词——一站式搞定。',
        sectionPlans: '套餐方案',
        sectionPlansSub: '选择最适合您的方案',
        citySub: 'AI驱动创作与协作的枢纽',
        cityHeadline: '连接、构建、自动化。与Birzont同行。',
        cityBody: '无需再为落地页、文案或智能体切换不同工具。Birzont理解您的品牌，设计提示词，并与团队共享——全部在一个平台上完成。',
        sectionHomePrompts: 'Birzont，提示词之家',
        sectionHomePromptsSub: '探索社区创作的多元提示词',
        promptExplore: '探索提示词',
        builtForAny: '专为各类',
        builtBusiness: '业务打造',
        aboutHero1: '桥的尽头，鸟儿展翅飞翔。',
        aboutHero2: 'Birzont可以成为那座桥。',
        aboutWhatWeDo: '我们的业务',
        aboutVision: '我们的愿景',
        aboutTeam: '认识我们的团队',
        aboutIntroTitle1: 'Birzont。我们构建AI，',
        aboutIntroTitle2: '通往未来的桥梁。',
        aboutIntroBody: "没有人能预见AI对社会的所有影响，但我们知道，设计强大技术既需要大胆前行，也需要有意识地停下来思考其影响。这就是为什么我们专注于构建以人类利益为根本的工具。",
        productsTitle: '我们的产品',
        productsBody: '探索我们精心设计的创新解决方案，提升您的日常生活与工作效率。每款产品都注重细节与用户体验。',
        introPlatformLabel: '提示词AI平台',
        introVersionLabel: 'v1.0 MVP',
        introHeadline1: '只需表达您的意图。',
        introHeadline2: 'Birzont为您生成最优提示词。',
        introTab1Title: '基于意图的提示词生成',
        introTab1Body: 'Hearim 3.0与Tobaki-2模型分析您的自然语言，生成优化后的提示词。',
        introTab2Title: '智能工作流链',
        introTab2Body: '将多步骤提示词串联为从规划到执行的单一流水线，自动化复杂项目。',
        introTab3Title: '经认证的提示词市场',
        introTab3Body: '探索并分享5,000+高质量模板，支持11种语言，即时应用，可从任意位置提取提示词。',
        introTab4Title: '自适应个性化',
        introTab4Body: '越用越智能。基于RLHF的学习适应您的反馈，实时提供个性化结果。',
        promptCard1Title: '高效任务自动化脚本生成',
        promptCard1Body: '生成用于自动化重复任务的Python脚本。根据您的描述自动编写并优化代码。',
        promptCard2Title: '创意头脑风暴提示词',
        promptCard2Body: '围绕您的主题生成原创且富有创意的想法，从多个角度拓展并提炼创意，最大化创造力。',
        promptCard3Title: '测试场景生成与验证',
        promptCard3Body: '为软件测试生成并验证多样化场景，根据需求自动创建测试用例，提升效率。',
        promptCard4Title: '社交媒体与广告营销文案生成',
        promptCard4Body: '输入品牌调性与目标受众，即可按渠道获得多个简洁有力的文案版本。',
        promptCard5Title: '长文档与会议纪要摘要',
        promptCard5Body: '粘贴PDF或文本，即可获得结构化的结论、行动项与时间线，便于快速回顾。',
        promptCard6Title: '研究问题设计与引用格式化',
        promptCard6Body: '输入主题，即可获得适合检索的子问题及对应答案的规范引用格式。',
        bundleCardTitle1: '股票投资入门包 🪴',
        bundleCardTitle2: 'AI写作套装 ✍️',
        bundleCardTitle3: '创业路演完整包 🚀',
        bundleCardTitle4: '数据分析入门套装 📊',
        bundleCardTitle5: '内容创作者套装 🎬',
        bundleCardTitle6: '代码审查与重构套装 💻',
        bizChip1: '数字产品',
        bizChip2: '代理机构',
        bizChip3: '电商',
        bizChip4: 'SaaS',
        bizChip5: '移动应用',
        bizChip6: '服务',
        careerLabel: '开放职位',
        careerTitle1: '与我们共同构建AI的未来。',
        careerTitle2: '您的旅程从这里开始。',
        timelineHeading1: "见证Birzont的故事",
        timelineHeading2: '关于人工智能'
        , featureTitle1: '提示词之家'
        , featureTagline1: '高质量提示词，成本比现有API低90%。'
        , featureDesc1: '我们自主调优的Hearim & Tobaki模型（基于Deepseek），以比现有API低90%的成本提供高质量提示词。'
        , featureTitle2: '构建自动化'
        , featureTagline2: '越用越智能的自适应AI。'
        , featureDesc2: '通过Supabase分析您的反馈与使用模式，打造随时间推移持续优化您工作流的自适应AI。'
        , featureTitle3: '上线并持续成长'
        , featureTagline3: '支持11种语言的5,000+认证提示词，即时可用。'
        , featureDesc3: '全球交易创作者认证的5,000+提示词，支持韩语、英语、中文在内的11种语言，即时可用。'
        , integrationsLabel: '集成'
        , partnersTitle: '认识我们的合作伙伴'
        , companyTimelineTitle: '公司发展历程'
        , seeMore: '查看更多'
        , whatWeDoTitle: '发明超大规模AI的基础设施软件'
        , whatWeDoBody: '随着LLM与生成式AI受到越来越多的关注，许多人在构建和利用拥有数千台乃至更多加速器的大规模AI基础设施时面临重重困难。AI技术中最具挑战性的问题已上升至基础设施层面，包括并行化、解耦、集群可扩展性、性能优化与故障切换等。'
        , ourVisionTitle: '打破基础设施壁垒，让AI触手可及'
        , ourVisionBody: 'AI技术的成功离不开开放的生态系统、多元的参与者以及集体经验的积累。我们的使命是消除基础设施的技术壁垒，让未来的AI技术惠及更广泛的用户群体。'
      },
      images: {
        heroBackground: "url('https://www.fabionodariphoto.com/wp-content/uploads/2025/09/Great-Wall-sunrise.jpg')",
        heroForegroundDesktop: "resources/products/mainscreen.png",
        heroForegroundMobile: 'resources/product/mobile.png',
        productSlides: ['resources/products/agent.png', 'resources/products/template.png', 'resources/products/market.png', 'resources/products/custom.png']
      },
      video: {
        aboutUrl: 'https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1',
        aboutThumbnail: 'https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg'
      }
    },
    'zh-TW': {

      blog: {
        title: "Birzont的多元故事",
        subtitle: "分享AI与科技领域的最新洞察与故事。"
      },
      ui: {
        appDescriptionTitle: '应用简介',
        appDescriptionBody1: '本应用以用户体验为核心，具备直观的界面和强大的功能。',
        appDescriptionBody2: '根据您的工作流程进行个性化定制，持续更新不断优化。',
        appOpenLink: '打开应用',
        quickLink: '立即前往',
        careersTitle: '正在寻找加入的机会？',
        careersText1: '在Birzont实现您的想法。',
        careersText2: '我们期待像您一样的优秀人才。',
        careersCta: '查看招聘职位',
        partnersDescription: '我们与全球企业合作，共同构建面向未来的创新AI解决方案。',
        timelineDescription: "探索Birzont的发展里程碑与成长历程。",
        navCompanyTitle: '公司',
        navProductTitle: '产品阵容',
        navBlogTitle: '博客',
        navAboutCompany: '公司简介',
        navWhatWeDo: '我们的业务',
        navOurTeam: '团队介绍',
        navTimeline: '发展历程',
        navNewsroom: '新闻中心',
        navEverything: '全部',
        navHome: '首页',
        navPricing: '定价',
        navCareers: '招聘',
        navLogin: '登录',
        footerCompany: '公司',
        footerProduct: '产品',
        footerSupport: '支持',
        footerDesc: "构建服务人类未来的AI。\n© 2025 Birzont. 保留所有权利。",
        footerAboutUs: '关于我们',
        footerCareer: '招聘',
        footerBlog: '博客',
        footerBrand: '品牌',
        footerHelp: '帮助中心',
        footerContact: '联系我们',
        footerPrivacy: '隐私政策',
        footerTerms: '服务条款',
        footerCookie: 'Cookie政策',
        productDesc2: '本应用提供创新服务，界面简洁易用，功能实用高效。',
        productDesc3: '官方应用，及时推送最新优惠活动与活动资讯。',
        timeline1: '发布首个原型。',
        timeline2: '发布首个原型。',
        timeline3: '上线后快速增长，用户突破10万。',
        timeline4: '通过战略合作伙伴关系加速扩张。',
        timeline5: '以创新AI功能提升用户体验。',
        timeline6: '完成A轮融资，核心AI算法研发完毕。',
        job2Title: '【人才库登记】产品经理',
        job2Location: '庆熙创业校区，首尔',
        job2Salary: '5万～10万韩元',
        job3Title: '【人才库登记】市场营销负责人',
        job3Location: '庆熙创业校区，首尔',
        job3Salary: '5万～10万韩元',
        heroTitle1: '全球构建',
        heroTitle2: '提示词的地方',
        heroSubtitle1: '探索、分享并构建AI提示词与智能体。',
        heroSubtitle2: '面向提示词工程师与创作者的协作平台。',
        ctaGetStarted: '立即开始',
        sectionExplore: '探索Birzont',
        sectionExploreSub: ' ',
        sectionHow: '使用方式',
        sectionHowSub: '生成、提取、连接、共享并销售提示词——一站式搞定。',
        sectionPlans: '套餐方案',
        sectionPlansSub: '选择最适合您的方案',
        citySub: 'AI驱动创作与协作的枢纽',
        cityHeadline: '连接、构建、自动化。与Birzont同行。',
        cityBody: '无需再为落地页、文案或智能体切换不同工具。Birzont理解您的品牌，设计提示词，并与团队共享——全部在一个平台上完成。',
        sectionHomePrompts: 'Birzont，提示词之家',
        sectionHomePromptsSub: '探索社区创作的多元提示词',
        promptExplore: '探索提示词',
        builtForAny: '专为各类',
        builtBusiness: '业务打造',
        aboutHero1: '桥的尽头，鸟儿展翅飞翔。',
        aboutHero2: 'Birzont可以成为那座桥。',
        aboutWhatWeDo: '我们的业务',
        aboutVision: '我们的愿景',
        aboutTeam: '认识我们的团队',
        aboutIntroTitle1: 'Birzont。我们构建AI，',
        aboutIntroTitle2: '通往未来的桥梁。',
        aboutIntroBody: "没有人能预见AI对社会的所有影响，但我们知道，设计强大技术既需要大胆前行，也需要有意识地停下来思考其影响。这就是为什么我们专注于构建以人类利益为根本的工具。",
        productsTitle: '我们的产品',
        productsBody: '探索我们精心设计的创新解决方案，提升您的日常生活与工作效率。每款产品都注重细节与用户体验。',
        introPlatformLabel: '提示词AI平台',
        introVersionLabel: 'v1.0 MVP',
        introHeadline1: '只需表达您的意图。',
        introHeadline2: 'Birzont为您生成最优提示词。',
        introTab1Title: '基于意图的提示词生成',
        introTab1Body: 'Hearim 3.0与Tobaki-2模型分析您的自然语言，生成优化后的提示词。',
        introTab2Title: '智能工作流链',
        introTab2Body: '将多步骤提示词串联为从规划到执行的单一流水线，自动化复杂项目。',
        introTab3Title: '经认证的提示词市场',
        introTab3Body: '探索并分享5,000+高质量模板，支持11种语言，即时应用，可从任意位置提取提示词。',
        introTab4Title: '自适应个性化',
        introTab4Body: '越用越智能。基于RLHF的学习适应您的反馈，实时提供个性化结果。',
        promptCard1Title: '高效任务自动化脚本生成',
        promptCard1Body: '生成用于自动化重复任务的Python脚本。根据您的描述自动编写并优化代码。',
        promptCard2Title: '创意头脑风暴提示词',
        promptCard2Body: '围绕您的主题生成原创且富有创意的想法，从多个角度拓展并提炼创意，最大化创造力。',
        promptCard3Title: '测试场景生成与验证',
        promptCard3Body: '为软件测试生成并验证多样化场景，根据需求自动创建测试用例，提升效率。',
        promptCard4Title: '社交媒体与广告营销文案生成',
        promptCard4Body: '输入品牌调性与目标受众，即可按渠道获得多个简洁有力的文案版本。',
        promptCard5Title: '长文档与会议纪要摘要',
        promptCard5Body: '粘贴PDF或文本，即可获得结构化的结论、行动项与时间线，便于快速回顾。',
        promptCard6Title: '研究问题设计与引用格式化',
        promptCard6Body: '输入主题，即可获得适合检索的子问题及对应答案的规范引用格式。',
        bundleCardTitle1: '股票投资入门包 🪴',
        bundleCardTitle2: 'AI写作套装 ✍️',
        bundleCardTitle3: '创业路演完整包 🚀',
        bundleCardTitle4: '数据分析入门套装 📊',
        bundleCardTitle5: '内容创作者套装 🎬',
        bundleCardTitle6: '代码审查与重构套装 💻',
        bizChip1: '数字产品',
        bizChip2: '代理机构',
        bizChip3: '电商',
        bizChip4: 'SaaS',
        bizChip5: '移动应用',
        bizChip6: '服务',
        careerLabel: '开放职位',
        careerTitle1: '与我们共同构建AI的未来。',
        careerTitle2: '您的旅程从这里开始。',
        timelineHeading1: "见证Birzont的故事",
        timelineHeading2: '关于人工智能'
        , featureTitle1: '提示词之家'
        , featureTagline1: '高质量提示词，成本比现有API低90%。'
        , featureDesc1: '我们自主调优的Hearim & Tobaki模型（基于Deepseek），以比现有API低90%的成本提供高质量提示词。'
        , featureTitle2: '构建自动化'
        , featureTagline2: '越用越智能的自适应AI。'
        , featureDesc2: '通过Supabase分析您的反馈与使用模式，打造随时间推移持续优化您工作流的自适应AI。'
        , featureTitle3: '上线并持续成长'
        , featureTagline3: '支持11种语言的5,000+认证提示词，即时可用。'
        , featureDesc3: '全球交易创作者认证的5,000+提示词，支持韩语、英语、中文在内的11种语言，即时可用。'
        , integrationsLabel: '集成'
        , partnersTitle: '认识我们的合作伙伴'
        , companyTimelineTitle: '公司发展历程'
        , seeMore: '查看更多'
        , whatWeDoTitle: '发明超大规模AI的基础设施软件'
        , whatWeDoBody: '随着LLM与生成式AI受到越来越多的关注，许多人在构建和利用拥有数千台乃至更多加速器的大规模AI基础设施时面临重重困难。AI技术中最具挑战性的问题已上升至基础设施层面，包括并行化、解耦、集群可扩展性、性能优化与故障切换等。'
        , ourVisionTitle: '打破基础设施壁垒，让AI触手可及'
        , ourVisionBody: 'AI技术的成功离不开开放的生态系统、多元的参与者以及集体经验的积累。我们的使命是消除基础设施的技术壁垒，让未来的AI技术惠及更广泛的用户群体。'
      },
      images: {
        heroBackground: "url('https://fromental.com/cdn/shop/articles/RS_Hero_banner_traditional_chinese_art_2000x.png?v=1750345986')",
        heroForegroundDesktop: "resources/products/mainscreen.png",
        heroForegroundMobile: 'resources/product/mobile.png',
        productSlides: ['resources/products/agent.png', 'resources/products/template.png', 'resources/products/market.png', 'resources/products/custom.png']
      },
      video: {
        aboutUrl: 'https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1',
        aboutThumbnail: 'https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg'
      }

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
    const heroTitleEl = document.querySelector('.hero-title');
    if (heroTitleEl) {
      const ht1 = ui(lang, 'heroTitle1', 'The home for better prompts');
      const ht2 = ui(lang, 'heroTitle2', 'that upscale your ideas');
      if (ht2) heroTitleEl.innerHTML = `${ht1}<br>${ht2}`;
      else heroTitleEl.textContent = ht1;
    }
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
    if (introHeadline) {
      const h1 = ui(lang, 'introHeadline1', 'Just say your intent.');
      const h2 = ui(lang, 'introHeadline2', 'Birzont creates the optimal prompt.');
      introHeadline.textContent = h2 ? `${h1} ${h2}` : h1;
    }
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
