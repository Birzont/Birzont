// Global state
const state = {
  scrolled: false,
  fadeTriggered: false,
  activeCard: null,
  videoPlaying: false,
  blinking: true,
  activeIndexes: new Set(),
  isMobile: window.innerWidth <= 900,
  mobileMenuOpen: false,
  baseNumPixels: 150,
  pixelElements: [],
  activeYear: 2025,
  hideTimeout: null,
  activeAppCard: null
};

// Data
const products = [
  {
    title: "Birzont",
    description: "Supported by OpenAI, Claude, Grok and Gemini ",
    defaultLogoSrc: "https://birzont.github.io/BirzontArchive/res/Prompist.png",
    bgColor: "https://i.pinimg.com/736x/37/5f/ff/375fff127fbc42ea2c95ad3118c779ba.jpg",
    link: "https://google.com",
    index: 0,
    modalImage: "https://birzont.github.io/BirzontArchive/res/Prompistbg.png"
  },
  {
    title: "Bloxer",
    description: "이 앱은 사용자에게 혁신적인 서비스를 제공합니다. 간편한 인터페이스와 다양한 기능으로 일상 생활을 더욱 편리하게 만들어 드립니다.",
    defaultLogoSrc: "https://birzont.github.io/BirzontArchive/res/Bloxer.png",
    bgColor: "https://i.redd.it/vgr7nzhng0a51.jpg",
    link: "https://google.com",
    index: 1,
    modalImage: "https://play.ht/blog/wp-content/uploads/2024/04/what-is-perplexity-ai.webp"
  },
  {
    title: "Prompist",
    description: "Pepsi의 공식 앱으로, 최신 프로모션과 이벤트 정보를 확인할 수 있습니다. 다양한 음료 제품에 대한 정보와 특별 할인 혜택을 제공합니다.",
    defaultLogoSrc: "https://birzont.github.io/BirzontArchive/res/Jibung.png",
    bgColor: "https://i.pinimg.com/736x/72/08/4e/72084e6ead0494777077769b16d172cb.jpg",
    link: "https://google.com",
    index: 2,
    modalImage: "https://images.indianexpress.com/2025/04/perplexity.jpg"
  }
];

const topRowLogos = [
  {
    name: "Slack",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png",
  },
  {
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  },
  {
    name: "Facebook",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Facebook_logo_%282023%29.svg/2560px-Facebook_logo_%282023%29.svg.png",
  },
  {
    name: "OpenAI",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1280px-OpenAI_Logo.svg.png",
  },
  { name: "Amazon", src: "https://www.allaboutlean.com/wp-content/uploads/2019/10/Amazon-Logo.png" },
  {
    name: "Wrtn",
    src: "https://wrtn.io/wp-content/themes/wrtn-edited/images/logo.svg",
  },
];

const timelineEvents = [
  {
    year: 2025,
    title: "Innovation begins",
    subtitle: "첫 프로토타입 런칭",
    description: "첫 프로토타입을 런칭하였습니다.",
    imageSrc: "https://img.freepik.com/free-photo/gyeongbokgung-palace_74190-3180.jpg?semt=ais_hybrid&w=740",
  },
  {
    year: 2025,
    title: "User Growth Milestone",
    subtitle: "사용자 10만 명 돌파",
    description: "서비스 출시 후 빠른 성장을 이루며 사용자 10만 명을 돌파했습니다.",
    imageSrc: "https://img.freepik.com/free-photo/gyeongbokgung-palace_74190-3180.jpg?semt=ais_hybrid&w=740",
  },
  {
    year: 2025,
    title: "Partnership Announcement",
    subtitle: "주요 기업과 파트너십 체결",
    description: "글로벌 기술 기업과의 전략적 파트너십을 통해 서비스 확장을 가속화했습니다.",
    imageSrc: "https://img.freepik.com/free-photo/gyeongbokgung-palace_74190-3180.jpg?semt=ais_hybrid&w=740",
  },
  {
    year: 2025,
    title: "Product Launch",
    subtitle: "새로운 AI 기능 출시",
    description: "혁신적인 AI 기능을 추가하여 사용자 경험을 크게 개선했습니다.",
    imageSrc: "https://img.freepik.com/free-photo/gyeongbokgung-palace_74190-3180.jpg?semt=ais_hybrid&w=740",
  },
  {
    year: 2024,
    title: "Series A Funding",
    subtitle: "시리즈 A 투자 유치",
    description: "주요 벤처 캐피탈로부터 시리즈 A 투자를 유치하여 기술 개발 및 팀 확장을 가속화했습니다. 핵심 AI 알고리즘 개발을 완료했습니다.",
    imageSrc: "https://m.motemote.kr/file_data/motemote20160302/2022/10/12/61ef6bdb2d66b82aa4f992b11be460e6.jpg",
  },
  {
    year: 2023,
    title: "Research Breakthrough",
    subtitle: "연구 성과 달성",
    description: "AI 분야에서 중요한 연구 성과를 달성하여 주요 학술 저널에 게재되었습니다. 초기 팀을 구성하고 비전을 확립했습니다.",
    imageSrc: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    year: 2022,
    title: "Company Founded",
    subtitle: "회사 설립",
    description: "Birzont의 창립자들이 모여 회사를 설립했습니다. AI를 통해 인류와 가까운 친구들의 미래에 기여한다는 비전을 가지고 시작했습니다.",
    imageSrc: "https://i.namu.wiki/i/giX9o1762e3S2xNnyvmLXnE_wSMvJcWZB5EUnFw3TBo2KDxHVSDS9Vav9R7vlSldjbHc7fQi2t2oc1qrXr-TKA.webp",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "[ㅋㅋㅋ AI] AI가 대세라는데 우리 회사에 어떻게 활용할 수 있을까?",
    date: "2025.08.17",
    imageSrc: "https://i.pinimg.com/736x/14/b7/05/14b705fa261b1ab5dbbee32a601a253a.jpg",
    url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%BD%98%ED%85%90%EC%B8%A0-ai-ai%EA%B0%80-%EB%8C%80%EC%84%B8%EB%9D%BC%EB%8A%94%EB%8D%B0-%EC%9A%B0%EB%A6%AC-%ED%9A%8C%EC%82%AC%EC%97%90-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%99%9C%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-986706f87df",
  },
  {
    id: 2,
    title: "요즘 이슈인 초거대 AI를 데이터 보안 문제 없이 사용할 수 있을까?",
    date: "2025.08.03",
    imageSrc: "https://i.pinimg.com/736x/28/e3/c6/28e3c68e36eb1b330bb7b35e159337ce.jpg",
    url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%9A%94%EC%A6%98-%EC%9D%B4%EC%8A%88%EC%9D%B8-%EC%B4%88%EA%B1%B0%EB%8C%80-ai%EB%A5%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B3%B4%EC%95%88-%EB%AC%B8%EC%A0%9C-%EC%97%86%EC%9D%B4-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-9f4ea5abf88",
  },
  {
    id: 3,
    title: "자연어에 이어 이미지도 이제 초거대 AI의 득점 시작?",
    date: "2025.08.03",
    imageSrc: "https://i.pinimg.com/736x/81/2f/20/812f2077e9815b35ce4789d24a49b981.jpg",
    url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%9E%90%EC%97%B0%EC%96%B4%EC%97%90-%EC%9D%B4%EC%96%B4-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%8F%84-%EC%9D%B4%EC%A0%9C-%EC%B4%88%EA%B1%B0%EB%8C%80-ai%EC%9D%98-%EB%8F%85%EC%A0%90-%EC%8B%9C%EC%9E%91-fbd6dbaafacb",
  },
  {
    id: 4,
    title: "스탠포드 연구소와 벤처가 바라본 AI 동향: AI Index Report 2023",
    date: "2025.08.03",
    imageSrc: "https://i.pinimg.com/736x/f9/c3/db/f9c3db06ef9dee6428f38332c6fbd3bb.jpg",
    url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%8A%A4%ED%83%A0%ED%8F%AC%EB%93%9C-%EC%97%B0%EA%B5%AC%EC%86%8C%EC%99%80-%EB%A0%9B%EC%84%9C%EA%B0%80-%EB%B0%94%EB%9D%BC%EB%B3%B8-ai-%EB%8F%99%ED%96%A5-ai-index-report-2023-5ce69a86a3de",
  },
  {
    id: 5,
    title: "OpenAI의 상표권 문제, 너희 이제 진짜 CloseAI!?",
    date: "2025.08.03",
    imageSrc: "https://i.pinimg.com/736x/37/5f/ff/375fff127fbc42ea2c95ad3118c779ba.jpg",
    url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/openai%EC%9D%98-%EC%83%81%ED%91%9C%EA%B6%8C-%EB%AC%B8%EC%A0%9C-%EB%84%88%ED%9D%AC-%EC%9D%B4%EC%A0%9C-%EC%A7%84%EC%A7%A0-closeai%EB%8B%88-b76de3827540",
  },
  {
    id: 6,
    title: "AI에서 '멀티모달'이 무엇이고 왜 중요할까?",
    date: "2025.08.03",
    imageSrc: "https://i.pinimg.com/736x/72/08/4e/72084e6ead0494777077769b16d172cb.jpg",
    url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/ai%EC%97%90%EC%84%9C-%EB%A9%80%ED%8B%B0%EB%AA%A8%EB%8B%AC%EC%9D%B4-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%EC%99%9C-%EC%A4%91%EC%9A%94%ED%95%A0%EA%B9%8C-83b1733414f0",
  },
];

const navCardContent = {
  Company: {
    title: "회사 소개",
    items: [
      { text: "About Company", href: "about.html#about" },
      { text: "What we do", href: "about.html#what-we-do" },
      { text: "Our Team", href: "about.html#team" },
      { text: "Timeline", href: "about.html#timeline" }
    ],
    image: "https://birzont.github.io/BirzontArchive/res/CompassPen.png"
  },
  Product: {
    title: "제품 라인업",
    items: [
      { text: "Prompist", href: "#" },
      { text: "Bloxer", href: "#" },
      { text: "Jibung", href: "#" }
    ],
    image: "https://birzont.github.io/BirzontArchive/res/GatLamp.png"
  },
  Blog: {
    title: "블로그 카테고리",
    items: [
      { text: "Newsroom", href: "#" },
      { text: "AGI", href: "#" },
      { text: "Everything", href: "#" },
      { text: "Research", href: "#" }
    ],
    image: "https://birzont.github.io/BirzontArchive/res/CoffeeBook.png"
  },
  // Career: {
  //   title: "채용 정보",
  //   items: [
  //     { text: "Careers", href: "#" },
  //     { text: "Talent pool", href: "#" }
  //     // { text: "Culture Fits", href: "#" }
  //   ],
  //   image: "https://birzont.github.io/BirzontArchive/res/TreeBuilding.png"
  // },
  
};

// Utility functions
function updateMobileState() {
  const wasMobile = state.isMobile;
  state.isMobile = window.innerWidth <= 900;
  
  if (!wasMobile && state.isMobile) {
    state.mobileMenuOpen = false;
    updateMobileMenu();
  }
  
  if (wasMobile && !state.isMobile) {
    state.mobileMenuOpen = false;
    updateMobileMenu();
  }
}

function updateHeader() {
  const header = document.getElementById('navbar');
  const logoImg = document.getElementById('logo-img');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (!header || !logoImg) return;
  
  const shouldBeScrolled = window.scrollY > 0 || (state.isMobile && state.mobileMenuOpen);
  
  if (shouldBeScrolled) {
    header.classList.remove('bg-transparent');
    if (state.isMobile) {
      header.classList.add('backdrop-blur-md', 'bg-white', 'text-black', 'shadow-md');
      logoImg.src = state.mobileMenuOpen || state.scrolled ? 
        "https://birzont.github.io/BirzontArchive/res/birzont_bicon.png" : 
        "https://birzont.github.io/BirzontArchive/res/birzont_wicon.png";
      
      // 햄버거 버튼 색상 변경
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('text-white');
        mobileMenuBtn.classList.add('text-black');
      }
      if (menuIcon) {
        menuIcon.classList.remove('text-white');
        menuIcon.classList.add('text-black');
      }
      if (closeIcon) {
        closeIcon.classList.remove('text-white');
        closeIcon.classList.add('text-black');
      }
    } else {
      header.classList.add('backdrop-blur-md', 'bg-white', 'text-black', 'shadow-lg');
      logoImg.src = "https://birzont.github.io/BirzontArchive/res/birzont_black.png";
      
      // Update start button when scrolled
      const startBtn = document.getElementById('desktop-start-btn');
      if (startBtn) {
        startBtn.classList.remove('bg-transparent', 'text-white', 'border-white', 'hover:bg-white', 'hover:text-black', 'hover:border-black');
        startBtn.classList.add('bg-black', 'text-white', 'border-transparent', 'hover:bg-white', 'hover:text-black', 'hover:border-black');
      }
    }
    
    // Update nav links
    const navLinks = header.querySelectorAll('#desktop-nav a');
    navLinks.forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-gray-900');
    });
    
    state.scrolled = true;
    state.blinking = false;
  } else {
    if (state.isMobile) {
      header.classList.remove('backdrop-blur-md', 'bg-white', 'text-black', 'shadow-md');
      header.classList.add('bg-transparent');
      logoImg.src = "https://birzont.github.io/BirzontArchive/res/birzont_wicon.png";
      
      // 햄버거 버튼 색상 원래대로
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('text-black');
        mobileMenuBtn.classList.add('text-white');
      }
      if (menuIcon) {
        menuIcon.classList.remove('text-black');
        menuIcon.classList.add('text-white');
      }
      if (closeIcon) {
        closeIcon.classList.remove('text-black');
        closeIcon.classList.add('text-white');
      }
    } else {
      header.classList.remove('border-2', 'border-black', 'backdrop-blur-md', 'bg-white', 'text-black', 'shadow-lg');
      header.classList.add('bg-transparent');
      logoImg.src = "https://birzont.github.io/BirzontArchive/res/birzont_white.png";
      
      // Update start button when at top
      const startBtn = document.getElementById('desktop-start-btn');
      if (startBtn) {
        startBtn.classList.remove('bg-black', 'text-white', 'border-transparent', 'hover:bg-white', 'hover:text-black', 'hover:border-black');
        startBtn.classList.add('bg-transparent', 'text-white', 'border-white', 'hover:bg-white', 'hover:text-black', 'hover:border-black');
      }
    }
    
    // Update nav links
    const navLinks = header.querySelectorAll('#desktop-nav a');
    navLinks.forEach(link => {
      link.classList.add('text-white');
      link.classList.remove('text-gray-900');
    });
    
    state.scrolled = false;
    state.blinking = true;
  }
}

function updateMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (!menu || !menuIcon || !closeIcon) return;
  
  if (state.mobileMenuOpen) {
    menu.classList.remove('-translate-y-full', 'opacity-0');
    menu.classList.add('translate-y-0', 'opacity-100');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    menu.classList.remove('translate-y-0', 'opacity-100');
    menu.classList.add('-translate-y-full', 'opacity-0');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
  
  updateHeader();
}

function createPixels() {
  const pixelsRef = document.getElementById('pixels-ref');
  if (!pixelsRef) return;
  
  pixelsRef.innerHTML = '';
  state.pixelElements = [];
  
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < state.baseNumPixels; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.top = `${Math.random() * 100}%`;
    pixel.style.left = `${Math.random() * 100}%`;
    pixel.style.backgroundColor = "#fff";
    pixel.style.opacity = "0";
    
    if (i < 3) pixel.style.backgroundColor = "hotpink";
    else if (i < 5) pixel.style.backgroundColor = "lime";
    
    fragment.appendChild(pixel);
    state.pixelElements.push(pixel);
  }
  
  pixelsRef.appendChild(fragment);
}

function blinkRandomPixels() {
  if (!state.blinking || !state.pixelElements.length) return;
  
  const newLitIndexes = new Set();
  const blinkCount = Math.min(30 + Math.floor(state.baseNumPixels / 20), state.baseNumPixels);
  
  while (newLitIndexes.size < blinkCount) {
    const index = Math.floor(Math.random() * state.pixelElements.length);
    newLitIndexes.add(index);
  }
  
  state.activeIndexes = newLitIndexes;
  
  state.pixelElements.forEach((pixel, idx) => {
    if (newLitIndexes.has(idx)) {
      pixel.style.opacity = "0.8";
      pixel.style.transform = "translateY(0)";
    } else {
      pixel.style.opacity = "0";
    }
  });
}

function createAppCard(product) {
  const cardContainer = document.createElement('div');
  cardContainer.className = 'w-full app-card-container';
  
  const card = document.createElement('div');
  card.className = 'relative rounded-3xl aspect-square cursor-pointer overflow-hidden transition-all duration-500 flex flex-col group';
  card.style.backgroundImage = `url(${product.bgColor})`;
  card.style.backgroundSize = 'cover';
  card.style.backgroundPosition = 'center';
  
  const cardContent = document.createElement('div');
  const appCardBaseClasses = 'flex flex-col h-full animate-fadeIn p-4 sm:p-6 md:p-8 relative z-10';
  cardContent.className = appCardBaseClasses;
  cardContent.dataset.showDescription = 'false';
  cardContent.dataset.baseClass = appCardBaseClasses;
  
  const logoContainer = document.createElement('div');
  logoContainer.className = 'flex-grow flex items-center justify-center';
  
  const logoWrapper = document.createElement('div');
  logoWrapper.className = 'relative rounded-xl flex items-center justify-center overflow-hidden transition-all duration-200 bg-transparent';
  logoWrapper.style.width = state.isMobile ? '100%' : 'clamp(120px, 80%, 240px)';
  logoWrapper.style.height = state.isMobile ? '100%' : 'clamp(120px, 80%, 240px)';
  logoWrapper.style.maxWidth = '100%';
  
  const displayImageSrc = product.featureImage || product.defaultLogoSrc;
  const logoImg = document.createElement('img');
  logoImg.src = displayImageSrc;
  logoImg.alt = product.title;
  logoImg.className = 'object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert w-full h-auto';
  logoImg.style.maxWidth = 'clamp(100px, 100%, 230px)';
  logoImg.style.maxHeight = 'clamp(100px, 100%, 230px)';
  
  logoWrapper.appendChild(logoImg);
  logoContainer.appendChild(logoWrapper);
  cardContent.appendChild(logoContainer);
  
  const titleSection = document.createElement('div');
  titleSection.className = 'hidden md:flex justify-between items-center mt-4';
  
  const title = document.createElement('h2');
  title.className = 'font-bold text-black transition-colors duration-500 group-hover:text-white';
  title.style.fontSize = 'clamp(1rem, 2vw, 1.875rem)';
  title.textContent = product.title;
  
  const plusBtn = document.createElement('button');
  plusBtn.className = 'bg-black text-white rounded-full flex items-center justify-center border-none cursor-pointer transition-all duration-500 group-hover:bg-white group-hover:text-black';
  plusBtn.style.width = 'clamp(2rem, 3vw, 2.5rem)';
  plusBtn.style.height = 'clamp(2rem, 3vw, 2.5rem)';
  plusBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: clamp(0.875rem, 1.5vw, 1.25rem); height: clamp(0.875rem, 1.5vw, 1.25rem)">
      <path d="M5 12h14"></path>
      <path d="M12 5v14"></path>
    </svg>
  `;
  
  titleSection.appendChild(title);
  titleSection.appendChild(plusBtn);
  cardContent.appendChild(titleSection);
  
  card.appendChild(cardContent);
  
  const mobileTitle = document.createElement('h2');
  mobileTitle.className = 'md:hidden text-black mt-3 font-bold';
  mobileTitle.style.fontSize = 'clamp(1rem, 5vw, 1.25rem)';
  mobileTitle.textContent = product.title;
  
  const overlay = document.createElement('div');
  overlay.className = 'absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-30';
  
  card.appendChild(overlay);
  
  card.addEventListener('click', (e) => {
    if (state.isMobile) {
      showMobileModal(product);
    } else {
      toggleCardDescription(cardContent, product);
    }
  });
  
  cardContainer.appendChild(card);
  cardContainer.appendChild(mobileTitle);
  
  return cardContainer;
}

function toggleCardDescription(cardContent, product) {
  const showDescription = cardContent.dataset.showDescription === 'true';
  const baseClasses = cardContent.dataset.baseClass || 'flex flex-col h-full animate-fadeIn p-4 sm:p-6 md:p-8 relative z-10';
  const activeClasses = 'flex flex-col h-full animate-fadeIn p-8 text-white relative z-10 backdrop-blur-md bg-black/70 rounded-3xl';
  
  if (showDescription) {
    // Hide description
    cardContent.dataset.showDescription = 'false';
    cardContent.innerHTML = '';
    cardContent.className = baseClasses;
    
    // Recreate original content
    const logoContainer = document.createElement('div');
    logoContainer.className = 'flex-grow flex items-center justify-center';
    
    const logoWrapper = document.createElement('div');
    logoWrapper.className = 'relative rounded-xl flex items-center justify-center overflow-hidden transition-all duration-200 bg-transparent';
    logoWrapper.style.width = 'clamp(120px, 80%, 240px)';
    logoWrapper.style.height = 'clamp(120px, 80%, 240px)';
    logoWrapper.style.maxWidth = '100%';
    
    const logoImg = document.createElement('img');
    logoImg.src = product.defaultLogoSrc;
    logoImg.alt = product.title;
    logoImg.className = 'object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert w-full h-auto';
    logoImg.style.maxWidth = 'clamp(100px, 100%, 230px)';
    logoImg.style.maxHeight = 'clamp(100px, 100%, 230px)';
    
    logoWrapper.appendChild(logoImg);
    logoContainer.appendChild(logoWrapper);
    cardContent.appendChild(logoContainer);
    
    const titleSection = document.createElement('div');
    titleSection.className = 'hidden md:flex justify-between items-center mt-4';
    
    const title = document.createElement('h2');
    title.className = 'font-bold text-black transition-colors duration-500 group-hover:text-white';
    title.style.fontSize = 'clamp(1rem, 2vw, 1.875rem)';
    title.textContent = product.title;
    
    const plusBtn = document.createElement('button');
    plusBtn.className = 'bg-black text-white rounded-full flex items-center justify-center border-none cursor-pointer transition-all duration-500 group-hover:bg-white group-hover:text-black';
    plusBtn.style.width = 'clamp(2rem, 3vw, 2.5rem)';
    plusBtn.style.height = 'clamp(2rem, 3vw, 2.5rem)';
    plusBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: clamp(0.875rem, 1.5vw, 1.25rem); height: clamp(0.875rem, 1.5vw, 1.25rem)">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    `;
    
    titleSection.appendChild(title);
    titleSection.appendChild(plusBtn);
    cardContent.appendChild(titleSection);
  } else {
    // Show description - 먼저 기존 콘텐츠를 완전히 제거
    cardContent.dataset.showDescription = 'true';
    cardContent.innerHTML = ''; // 기존 로고, 텍스트, +버튼 제거
    cardContent.className = activeClasses;
    
    const header = document.createElement('div');
    header.className = 'flex items-center gap-3 mb-4';
    
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'bg-white p-2 rounded-md flex items-center justify-center';
    
    const iconImg = document.createElement('img');
    iconImg.src = product.defaultLogoSrc;
    iconImg.alt = `${product.title} 아이콘`;
    iconImg.width = 36;
    iconImg.height = 36;
    iconImg.className = 'object-contain';
    
    iconWrapper.appendChild(iconImg);
    header.appendChild(iconWrapper);
    
    const title = document.createElement('h2');
    title.className = 'font-bold transition-colors duration-500';
    title.style.fontSize = 'clamp(1.5rem, 3vw, 1.875rem)';
    title.textContent = product.title;
    header.appendChild(title);
    
    cardContent.appendChild(header);
    
    const content = document.createElement('div');
    content.className = 'flex flex-col';
    
    const description = document.createElement('p');
    description.className = 'transition-colors duration-500 mb-2';
    description.style.fontSize = 'clamp(0.875rem, 1.5vw, 1.125rem)';
    description.textContent = product.description;
    content.appendChild(description);
    
    const link = document.createElement('a');
    link.href = product.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'w-fit py-2 px-4 border border-white/70 text-white/80 rounded-xl no-underline transition-all duration-500 hover:bg-white hover:text-black hover:border-white flex items-center gap-2';
    link.style.fontSize = 'clamp(0.875rem, 1.5vw, 1.125rem)';
    link.innerHTML = '바로가기 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
    link.addEventListener('click', (e) => e.stopPropagation());
    content.appendChild(link);
    
    cardContent.appendChild(content);
    
    const spacer = document.createElement('div');
    spacer.className = 'flex-grow';
    cardContent.appendChild(spacer);
  }
}

function showMobileModal(product) {
  // Remove existing modal if any
  const existingModal = document.getElementById('app-card-modal');
  if (existingModal) {
    const existingContent = existingModal.querySelector('.modal-content');
    if (existingContent) {
      existingContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      existingContent.style.opacity = '0';
      existingContent.style.transform = 'scale(0.95)';
    }
    setTimeout(() => {
      existingModal.remove();
      document.body.style.overflow = '';
    }, 300);
  }
  
  const modal = document.createElement('div');
  modal.id = 'app-card-modal';
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm';
  modal.style.opacity = '0';
  modal.style.transition = 'opacity 0.3s ease';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content team-modal-content relative';
  modalContent.style.opacity = '0';
  modalContent.style.transform = 'scale(0.95)';
  modalContent.addEventListener('click', (e) => e.stopPropagation());
  
  // Close on Escape key handler
  let escapeHandler = null;
  
  // Close function - define before using it
  const closeProductModal = () => {
    const content = modal.querySelector('.modal-content');
    if (content) {
      content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      content.style.opacity = '0';
      content.style.transform = 'scale(0.95)';
    }
    modal.style.opacity = '0';
    if (escapeHandler) {
      document.removeEventListener('keydown', escapeHandler);
      escapeHandler = null;
    }
    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = '';
    }, 300);
  };
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProductModal();
    }
  });
  
  // Close on Escape key
  escapeHandler = (e) => {
    if (e.key === 'Escape' && document.getElementById('app-card-modal')) {
      closeProductModal();
    }
  };
  document.addEventListener('keydown', escapeHandler);
  
  const header = document.createElement('div');
  header.className = 'flex justify-between items-center mb-4';
  
  const headerLeft = document.createElement('div');
  headerLeft.className = 'flex items-center gap-2 bg-[#f5f3f0] rounded-xl p-2 px-3';
  
  const iconImg = document.createElement('img');
  iconImg.src = product.defaultLogoSrc;
  iconImg.alt = product.title;
  iconImg.width = 40;
  iconImg.height = 40;
  iconImg.className = 'object-contain';
  
  const title = document.createElement('h2');
  title.className = 'text-2xl font-bold text-black leading-tight';
  title.style.fontSize = '28px';
  title.textContent = product.title;
  
  headerLeft.appendChild(iconImg);
  headerLeft.appendChild(title);
  
  header.appendChild(headerLeft);
  
  const closeBtn = document.createElement('button');
  closeBtn.className = 'absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors';
  closeBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `;
  closeBtn.addEventListener('click', closeProductModal);
  
  modalContent.appendChild(header);
  modalContent.appendChild(closeBtn);
  
  const imageContainer = document.createElement('div');
  imageContainer.className = 'relative w-full aspect-video mb-6 overflow-hidden rounded-xl';
  
  const image = document.createElement('img');
  image.src = product.modalImage || product.defaultLogoSrc;
  image.alt = `${product.title} 이미지`;
  image.className = 'object-cover w-full h-full';
  
  imageContainer.appendChild(image);
  modalContent.appendChild(imageContainer);
  
  const descriptionSection = document.createElement('div');
  descriptionSection.className = 'mb-6';
  
  const descTitle = document.createElement('h3');
  descTitle.className = 'text-lg font-medium mb-2 text-black';
  descTitle.textContent = '앱 설명';
  descriptionSection.appendChild(descTitle);
  
  const descText = document.createElement('p');
  descText.className = 'text-gray-700 mb-4';
  descText.textContent = product.description;
  descriptionSection.appendChild(descText);
  
  const extraText1 = document.createElement('p');
  extraText1.className = 'text-gray-700 mb-4';
  extraText1.textContent = '이 앱은 사용자 경험을 최우선으로 설계되었으며, 직관적인 인터페이스와 강력한 기능을 제공합니다. 최신 기술을 활용하여 개발된 이 앱은 사용자의 일상 생활과 업무 효율성을 크게 향상시킵니다.';
  descriptionSection.appendChild(extraText1);
  
  const extraText2 = document.createElement('p');
  extraText2.className = 'text-gray-700';
  extraText2.textContent = '다양한 기능과 맞춤형 설정으로 각 사용자의 필요에 맞게 조정할 수 있으며, 지속적인 업데이트를 통해 새로운 기능과 개선 사항이 추가됩니다.';
  descriptionSection.appendChild(extraText2);
  
  modalContent.appendChild(descriptionSection);
  
  const linkContainer = document.createElement('div');
  linkContainer.className = 'flex justify-center';
  
  const link = document.createElement('a');
  link.href = product.link;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'w-full bg-black text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 font-medium';
  link.innerHTML = '앱 바로가기 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
  link.addEventListener('click', (e) => e.stopPropagation());
  
  linkContainer.appendChild(link);
  modalContent.appendChild(linkContainer);
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  // Trigger animation
  setTimeout(() => {
    modal.style.opacity = '1';
    setTimeout(() => {
      modalContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      modalContent.style.opacity = '1';
      modalContent.style.transform = 'scale(1)';
    }, 10);
  }, 10);
}

function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Check if we're on about.html page - check if container has flex-col class (about.html uses flex-col, index.html uses grid)
  const isAboutPage = container.classList.contains('flex') && container.classList.contains('flex-col');
  
  if (isAboutPage) {
    // About page: Long horizontal cards with background images
    products.forEach(product => {
      const card = createAboutProductCard(product);
      container.appendChild(card);
    });
  } else {
    // Index page: Original square cards
    products.forEach(product => {
      const card = createAppCard(product);
      container.appendChild(card);
    });
  }
}

function createAboutProductCard(product) {
  const cardContainer = document.createElement('div');
  cardContainer.className = 'w-full about-product-card-container';
  
  const card = document.createElement('div');
  card.className = 'relative rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 group about-product-card';
  card.style.backgroundImage = `url(${product.bgColor})`;
  card.style.backgroundSize = 'cover';
  card.style.backgroundPosition = 'center';
  card.style.height = '140px';
  card.style.minHeight = '140px';
  card.style.maxWidth = '1200px';
  card.style.margin = '0 auto';
  
  // Dark overlay that appears on hover
  const overlay = document.createElement('div');
  overlay.className = 'absolute inset-0 bg-black opacity-20 transition-opacity duration-500 group-hover:opacity-60';
  
  // Content container
  const content = document.createElement('div');
  content.className = 'relative z-10 h-full flex items-center justify-between px-8 py-6';
  
  // Left side: Logo/Title
  const leftContent = document.createElement('div');
  leftContent.className = 'flex items-center gap-4';
  
  const logoImg = document.createElement('img');
  logoImg.src = product.defaultLogoSrc;
  logoImg.alt = product.title;
  logoImg.className = 'w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert';
  
  const title = document.createElement('h3');
  title.className = 'text-white text-2xl md:text-3xl font-medium';
  title.textContent = product.title;
  
  leftContent.appendChild(logoImg);
  leftContent.appendChild(title);
  
  // Right side: Plus icon
  const plusIcon = document.createElement('div');
  plusIcon.className = 'w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:bg-white/30';
  plusIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14"></path>
      <path d="M12 5v14"></path>
    </svg>
  `;
  
  content.appendChild(leftContent);
  content.appendChild(plusIcon);
  
  card.appendChild(overlay);
  card.appendChild(content);
  
  // Click handler - show modal (keep existing modal functionality)
  card.addEventListener('click', (e) => {
    showMobileModal(product);
  });
  
  cardContainer.appendChild(card);
  return cardContainer;
}

function createProductFeatureCard(product) {
  const cardContainer = document.createElement('div');
  cardContainer.className = 'w-full app-card-container';
  
  const card = document.createElement('div');
  card.className = 'product-feature-card relative rounded-3xl aspect-square cursor-pointer overflow-hidden transition-all duration-500 flex flex-col group shadow-2xl';
  card.style.backgroundImage = `url(${product.bgColor})`;
  card.style.backgroundSize = 'cover';
  card.style.backgroundPosition = 'center';
  
  // 아이콘 이미지 영역 - 위, 왼쪽, 오른쪽을 꽉 채움
  const logoArea = document.createElement('div');
  logoArea.className = 'absolute top-0 left-0 right-0 overflow-hidden product-card-logo-area';
  logoArea.style.padding = '0';
  logoArea.style.display = 'flex';
  logoArea.style.alignItems = 'center';
  logoArea.style.justifyContent = 'center';
  
  const displayImageSrc = product.featureImage || product.defaultLogoSrc;
  const logoImg = document.createElement('img');
  logoImg.src = displayImageSrc;
  logoImg.alt = product.title;
  logoImg.className = 'transition-all duration-500';
  logoImg.style.width = '100%';
  logoImg.style.height = '100%';
  logoImg.style.objectFit = 'cover';
  logoImg.style.display = 'block';
  
  logoArea.appendChild(logoImg);
  card.appendChild(logoArea);
  
  // 텍스트 영역 - 하단에 흰색 배경
  const textArea = document.createElement('div');
  textArea.className = 'absolute bottom-0 left-0 right-0 bg-white flex justify-between items-center product-card-text-area';
  
  const title = document.createElement('h2');
  title.className = 'font-bold text-black transition-colors duration-500 product-card-title';
  title.textContent = product.title;
  
  const arrowBtn = document.createElement('button');
  arrowBtn.className = 'rounded-full flex items-center justify-center border-none cursor-pointer transition-all duration-300';
  arrowBtn.style.width = 'clamp(2.25rem, 3vw, 2.75rem)';
  arrowBtn.style.height = 'clamp(2.25rem, 3vw, 2.75rem)';
  arrowBtn.style.backgroundColor = '#000';
  arrowBtn.style.color = '#fff';
  arrowBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `;
  arrowBtn.addEventListener('mouseenter', () => {
    arrowBtn.style.backgroundColor = '#111';
  });
  arrowBtn.addEventListener('mouseleave', () => {
    arrowBtn.style.backgroundColor = '#000';
  });
  
  textArea.appendChild(title);
  textArea.appendChild(arrowBtn);
  card.appendChild(textArea);
  
  // 클릭 시 설명 표시를 위한 컨텐츠 영역 (숨김)
  const cardContent = document.createElement('div');
  cardContent.className = 'absolute inset-0 flex flex-col h-full animate-fadeIn p-8 text-white relative z-10 backdrop-blur-md bg-black/70 rounded-3xl opacity-0 pointer-events-none transition-opacity duration-500';
  cardContent.dataset.showDescription = 'false';
  card.appendChild(cardContent);
  
  // overlay 제거 - 마우스 오버 시 배경이 어두워지지 않도록
  
  card.addEventListener('click', (e) => {
    toggleProductFeatureCardDescription(cardContent, logoArea, textArea, product);
  });
  
  cardContainer.appendChild(card);
  
  return cardContainer;
}

function toggleProductFeatureCardDescription(cardContent, logoArea, textArea, product) {
  const showDescription = cardContent.dataset.showDescription === 'true';
  const baseClasses = 'absolute inset-0 flex flex-col h-full animate-fadeIn p-8 text-white relative z-10 backdrop-blur-md bg-black/70 rounded-3xl transition-opacity duration-500';
  
  if (showDescription) {
    // Hide description
    cardContent.dataset.showDescription = 'false';
    cardContent.className = `${baseClasses} opacity-0 pointer-events-none`;
    cardContent.style.opacity = '0';
    cardContent.style.pointerEvents = 'none';
    cardContent.innerHTML = '';
    logoArea.style.opacity = '1';
    textArea.style.opacity = '1';
  } else {
    // Show description
    cardContent.dataset.showDescription = 'true';
    cardContent.innerHTML = '';
    cardContent.className = baseClasses;
    cardContent.style.opacity = '1';
    cardContent.style.pointerEvents = 'auto';
    
    const header = document.createElement('div');
    header.className = 'flex items-center gap-3 mb-4';
    
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'bg-white p-2 rounded-md flex items-center justify-center';
    
    const iconImg = document.createElement('img');
    iconImg.src = product.defaultLogoSrc;
    iconImg.alt = `${product.title} 아이콘`;
    iconImg.width = 36;
    iconImg.height = 36;
    iconImg.className = 'object-contain';
    
    iconWrapper.appendChild(iconImg);
    header.appendChild(iconWrapper);
    
    const title = document.createElement('h2');
    title.className = 'font-bold transition-colors duration-500 product-card-overlay-title';
    title.textContent = product.title;
    header.appendChild(title);
    
    cardContent.appendChild(header);
    
    const content = document.createElement('div');
    content.className = 'flex flex-col';
    
    const description = document.createElement('p');
    description.className = 'transition-colors duration-500 mb-2 product-card-overlay-description';
    description.textContent = product.description;
    content.appendChild(description);
    
    const link = document.createElement('a');
    link.href = product.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'w-fit py-2 px-4 border border-white/70 text-white/80 rounded-xl no-underline transition-all duration-500 hover:bg-white hover:text-black hover:border-white flex items-center gap-2 product-card-overlay-link';
    link.innerHTML = '바로가기 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
    link.addEventListener('click', (e) => e.stopPropagation());
    content.appendChild(link);
    
    cardContent.appendChild(content);
    
    const spacer = document.createElement('div');
    spacer.className = 'flex-grow';
    cardContent.appendChild(spacer);
    
    logoArea.style.opacity = '0';
    textArea.style.opacity = '0';
  }
}

function renderProductFeatures() {
  const container = document.getElementById('product-features-grid');
  if (!container) return;
  
  container.innerHTML = '';
  /**
 * Birzont Product Feature Data
 * 사업계획서의 기술적 경쟁력을 사용자 언어로 치환하여 구성
 */
const productFeatures = [
  {
    title: "독자적 AI 모델의 경제성",
    description: "Deepseek 기반으로 자체 튜닝된 Hearim & Tobaki 모델을 사용하여, 기존 API 대비 90% 낮은 비용으로 고품질 프롬프트를 제공합니다. [cite: 67, 68]",
    logo: "https://birzont.github.io/BirzontArchive/res/Prompist.png",
    bgColor: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    link: "https://birzont.ai/pricing",
    index: 0,
    modalImage: "https://birzont.github.io/BirzontArchive/res/Prompist.png",
    defaultLogoSrc: "https://birzont.github.io/BirzontArchive/res/Prompist.png",
    featureImage: "https://cdn-avatars.huggingface.co/v1/production/uploads/65072bf20c873319479d8f9d/XXPdlEku5msKe1y0FineF.jpeg"
  },
  {
    title: "실시간 학습형 추천 시스템",
    description: "사용자의 피드백과 사용 패턴을 Supabase 기반 데이터베이스로 분석하여, 쓰면 쓸수록 당신의 업무 스타일에 최적화되는 적응형 AI를 경험하세요. [cite: 46, 48]",
    logo: "https://birzont.github.io/BirzontArchive/res/Bloxer.png",
    bgColor: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    link: "https://birzont.ai/features",
    index: 1,
    modalImage: "https://birzont.github.io/BirzontArchive/res/Bloxer.png",
    defaultLogoSrc: "https://birzont.github.io/BirzontArchive/res/Bloxer.png",
    featureImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c6/d7/4e/brienz-rothorn-bahn.jpg?w=900&h=500&s=1"
  },
  {
    title: "글로벌 프롬프트 마켓",
    description: "전 세계 크리에이터들이 검증한 5,000개 이상의 프롬프트 자산을 자유롭게 거래하고, 한국어·영어·중국어를 포함한 11개 언어로 즉시 활용할 수 있습니다. [cite: 26, 122]",
    logo: "https://birzont.github.io/BirzontArchive/res/Jibung.png",
    bgColor: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
    link: "https://birzont.ai/marketplace",
    index: 2,
    modalImage: "https://birzont.github.io/BirzontArchive/res/Jibung.png",
    defaultLogoSrc: "https://birzont.github.io/BirzontArchive/res/Jibung.png",
    featureImage: "https://i.pinimg.com/736x/23/1d/71/231d71195172650c2c4488435b1ca7e6.jpg"
  }
];
  
  productFeatures.forEach(feature => {
    const card = createProductFeatureCard(feature);
    container.appendChild(card);
  });
}

function initDemoSocialCounts() {
  const likeBtn = document.querySelector('.demo-like');
  const shareBtn = document.querySelector('.demo-share');
  const bookmarkBtn = document.querySelector('.demo-bookmark');
  const likeCountEl = document.querySelector('.demo-like-count');
  const shareCountEl = document.querySelector('.demo-share-count');
  
  if (!likeBtn || !shareBtn || !bookmarkBtn || !likeCountEl || !shareCountEl) return;
  
  const randomCount = () => Math.floor(Math.random() * 31);
  
  let likeCount = randomCount();
  const shareCount = randomCount();
  
  likeCountEl.textContent = String(likeCount);
  shareCountEl.textContent = String(shareCount);
  
  let liked = false;
  likeBtn.addEventListener('click', () => {
    if (liked) return;
    liked = true;
    likeCount += 1;
    likeCountEl.textContent = String(likeCount);
    likeBtn.classList.add('liked');
  });
  
  let bookmarked = false;
  bookmarkBtn.addEventListener('click', () => {
    bookmarked = !bookmarked;
    bookmarkBtn.classList.toggle('bookmarked', bookmarked);
  });
}

function initUserPromptCards() {
  const promptCards = document.querySelectorAll('.user-prompt-card');
  
  promptCards.forEach(card => {
    const likeBtn = card.querySelector('.user-prompt-like');
    const bookmarkBtn = card.querySelector('.user-prompt-bookmark');
    const likeCountEl = card.querySelector('.user-prompt-like-count');
    
    if (!likeBtn || !bookmarkBtn || !likeCountEl) return;
    
    let liked = false;
    let likeCount = parseInt(likeCountEl.textContent) || 0;
    
    likeBtn.addEventListener('click', () => {
      liked = !liked;
      if (liked) {
        likeCount += 1;
        likeBtn.classList.add('liked');
      } else {
        likeCount -= 1;
        likeBtn.classList.remove('liked');
      }
      likeCountEl.textContent = String(likeCount);
    });
    
    let bookmarked = false;
    bookmarkBtn.addEventListener('click', () => {
      bookmarked = !bookmarked;
      bookmarkBtn.classList.toggle('bookmarked', bookmarked);
    });
  });
}

function renderLogoSlider() {
  const container = document.getElementById('logo-slider-container');
  if (!container) return;
  
  const wrapper = document.createElement('div');
  wrapper.className = 'bg-[#f8f6f0] rounded-3xl py-16 px-8 md:px-12';
  
  const header = document.createElement('div');
  header.className = 'text-center mb-8';
  
  const label = document.createElement('p');
  label.className = 'text-gray-600 font-medium mb-2';
  label.textContent = 'INTEGRATIONS';
  header.appendChild(label);
  
  const title = document.createElement('h2');
  title.className = 'text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#333]';
  title.textContent = 'Meet Our Partners';
  header.appendChild(title);
  
  const description = document.createElement('p');
  description.className = 'text-gray-600 max-w-2xl mx-auto text-center mb-12';
  description.textContent = '우리는 세계적인 기업들과 협력하여 혁신적인 AI 솔루션을 개발하고 있습니다. 함께 미래를 만들어가는 파트너들을 소개합니다.';
  header.appendChild(description);
  
  wrapper.appendChild(header);
  
  const sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'overflow-hidden';
  
  const slider = document.createElement('div');
  slider.className = 'flex whitespace-nowrap';
  slider.style.animation = 'marquee 15s linear infinite';
  slider.style.willChange = 'transform';
  
  // Create three sets for seamless loop
  for (let set = 0; set < 3; set++) {
    topRowLogos.forEach((logo, index) => {
      const logoDiv = document.createElement('div');
      logoDiv.className = `bg-white rounded-2xl ${state.isMobile ? 'px-6 py-4' : 'px-12 py-8'} flex items-center justify-center shadow-sm ${state.isMobile ? 'mx-1' : 'mx-5'} hover:shadow-md transition-all duration-300 hover:bg-[#0080ff] hover:text-white group`;
      logoDiv.style.minWidth = state.isMobile ? '160px' : '216px';
      logoDiv.style.height = state.isMobile ? '70px' : '96px';
      
      const img = document.createElement('img');
      img.src = logo.src;
      img.alt = logo.name;
      img.className = `${state.isMobile ? 'h-8' : 'h-12'} object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert`;
      
      logoDiv.appendChild(img);
      slider.appendChild(logoDiv);
    });
  }
  
  sliderWrapper.appendChild(slider);
  wrapper.appendChild(sliderWrapper);
  container.appendChild(wrapper);
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Check if we're on about.html page
  const isAboutPage = window.location.pathname.includes('about.html') || 
                      window.location.href.includes('about.html') ||
                      document.querySelector('title')?.textContent.includes('About');
  
  if (isAboutPage) {
    // About page: Vertical timeline with year tabs
    renderAboutTimeline(container);
  } else {
    // Index page: Original timeline with image card
    renderIndexTimeline(container);
  }
}

function renderAboutTimeline(container) {
  // Year tabs container (light rounded bar)
  const yearTabsContainer = document.createElement('div');
  yearTabsContainer.className = 'flex justify-center mb-12';
  
  const yearTabs = document.createElement('div');
  yearTabs.className = 'inline-flex gap-0 rounded-2xl bg-gray-100 p-1';
  
  const uniqueYears = [...new Set(timelineEvents.map(e => e.year))].sort((a, b) => b - a);
  
  uniqueYears.forEach(year => {
    const tab = document.createElement('button');
    tab.className = `px-6 py-2 font-medium transition-all duration-300 timeline-year-tab rounded-xl ${
      state.activeYear === year 
        ? 'bg-white text-black shadow-sm' 
        : 'text-gray-600 hover:text-gray-800'
    }`;
    tab.textContent = year;
    
    tab.addEventListener('click', () => {
      state.activeYear = year;
      renderTimeline();
    });
    yearTabs.appendChild(tab);
  });
  
  yearTabsContainer.appendChild(yearTabs);
  container.appendChild(yearTabsContainer);
  
  // Timeline wrapper
  const timelineWrapper = document.createElement('div');
  timelineWrapper.className = 'relative max-w-5xl mx-auto';
  
  // Timeline line (centered on all devices)
  const timelineLine = document.createElement('div');
  timelineLine.className = 'absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2';
  timelineLine.style.zIndex = '1';
  
  // Events for active year - sort by index (most recent first)
  const activeYearEvents = timelineEvents.filter(e => e.year === state.activeYear).reverse();
  
  const eventsContainer = document.createElement('div');
  eventsContainer.className = 'relative';
  
  activeYearEvents.forEach((event, index) => {
    const isLeft = index % 2 === 0; // Alternate left and right
    
    const eventItem = document.createElement('div');
    eventItem.className = 'relative pb-12 last:pb-0';
    if (state.isMobile) {
      eventItem.style.width = '45%';
    } else {
      eventItem.style.width = '48%';
    }
    eventItem.style[isLeft ? 'marginRight' : 'marginLeft'] = 'auto';
    eventItem.style.position = 'relative';
    eventItem.style.zIndex = '2';
    
    // Content
    const content = document.createElement('div');
    if (state.isMobile) {
      content.className = isLeft ? 'text-right pr-2' : 'text-left pl-2';
    } else {
      content.className = isLeft ? 'text-right pr-4' : 'text-left pl-4';
    }
    
    // Date (most recent first, so reverse the date number)
    const date = document.createElement('div');
    date.className = 'text-xl md:text-xl font-bold text-black mb-1';
    const totalEvents = activeYearEvents.length;
    const dateNumber = totalEvents - index;
    date.textContent = `${event.year}.${String(dateNumber).padStart(2, '0')}`;
    
    // Description
    const description = document.createElement('div');
    description.className = 'text-gray-600 text-base md:text-base';
    description.textContent = event.subtitle || event.description;
    
    content.appendChild(date);
    content.appendChild(description);
    
    eventItem.appendChild(content);
    eventsContainer.appendChild(eventItem);
    
    // Dot (positioned exactly on the timeline line at center)
    const dot = document.createElement('div');
    dot.className = 'absolute w-3 h-3 rounded-full bg-gray-600';
    dot.style.left = '50%';
    dot.style.transform = 'translateX(-50%)';
    dot.style.top = `${index * 12}rem`; // Approximate position based on index
    dot.style.zIndex = '3';
    eventsContainer.appendChild(dot);
  });
  
  // Update dot positions after rendering
  setTimeout(() => {
    const dots = eventsContainer.querySelectorAll('.absolute.w-3.h-3.rounded-full');
    const items = eventsContainer.querySelectorAll('.relative.pb-12');
    dots.forEach((dot, index) => {
      if (items[index]) {
        const itemTop = items[index].offsetTop;
        // Position dot slightly below the top (align with date text middle)
        dot.style.top = `${itemTop + 16}px`;
        dot.style.transform = 'translate(-50%, -50%)';
      }
    });
  }, 10);
  
  timelineWrapper.appendChild(timelineLine);
  timelineWrapper.appendChild(eventsContainer);
  container.appendChild(timelineWrapper);
}

function renderIndexTimeline(container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'w-full py-12';
  
  const header = document.createElement('div');
  header.className = 'flex flex-col md:flex-row w-full mb-12';
  
  const headerLeft = document.createElement('div');
  headerLeft.className = 'w-full md:w-1/2 mb-8 md:mb-0';
  
  const title = document.createElement('h2');
  title.className = 'text-4xl font-bold mb-4 text-[#333]';
  title.textContent = 'Company Timeline';
  headerLeft.appendChild(title);
  
  const headerRight = document.createElement('div');
  headerRight.className = 'w-full md:w-1/2 flex items-center';
  
  const description = document.createElement('p');
  description.className = 'text-gray-600 text-lg md:text-xl leading-relaxed';
  description.textContent = 'Birzont의 성장 과정과 주요 이정표를 확인하세요. 우리는 지속적인 혁신과 발전을 통해 AI 기술의 미래를 만들어가고 있습니다.';
  headerRight.appendChild(description);
  
  header.appendChild(headerLeft);
  header.appendChild(headerRight);
  wrapper.appendChild(header);
  
  const content = document.createElement('div');
  content.className = 'flex flex-col md:flex-row gap-8 mt-12';
  
  // Image card
  const activeEvent = timelineEvents.find(e => e.year === state.activeYear) || timelineEvents[0];
  
  const imageCard = document.createElement('div');
  imageCard.id = 'timeline-image-card';
  imageCard.className = 'w-full md:w-3/5 relative rounded-3xl overflow-hidden';
  imageCard.style.minHeight = '500px';
  imageCard.style.position = 'relative';
  
  const image = document.createElement('img');
  image.src = activeEvent.imageSrc;
  image.alt = `${activeEvent.year} - ${activeEvent.title}`;
  image.className = 'object-cover transition-opacity duration-500 ease-in-out';
  image.style.width = '100%';
  image.style.height = '100%';
  image.style.position = 'absolute';
  image.style.top = '0';
  image.style.left = '0';
  image.style.objectFit = 'cover';
  
  const overlay = document.createElement('div');
  overlay.className = 'absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ease-in-out';
  
  const textOverlay = document.createElement('div');
  textOverlay.className = 'absolute bottom-0 left-0 p-8 text-white';
  textOverlay.style.zIndex = '10';
  
  const yearTitle = document.createElement('h2');
  yearTitle.className = 'text-6xl font-bold mb-2';
  yearTitle.textContent = activeEvent.year;
  
  const eventTitle = document.createElement('h3');
  eventTitle.className = 'text-3xl font-bold mb-2';
  eventTitle.textContent = activeEvent.title;
  
  const subtitle = document.createElement('p');
  subtitle.className = 'text-xl mb-4';
  subtitle.textContent = activeEvent.subtitle;
  
  const eventDescription = document.createElement('p');
  eventDescription.className = 'text-lg';
  eventDescription.textContent = activeEvent.description;
  
  textOverlay.appendChild(yearTitle);
  textOverlay.appendChild(eventTitle);
  textOverlay.appendChild(subtitle);
  textOverlay.appendChild(eventDescription);
  
  imageCard.appendChild(image);
  imageCard.appendChild(overlay);
  imageCard.appendChild(textOverlay);
  
  // Timeline list
  const timelineList = document.createElement('div');
  timelineList.id = 'timeline-list';
  timelineList.className = 'w-full md:w-2/5 bg-gray-50 rounded-3xl p-8 flex items-start h-auto';
  
  const timelineInner = document.createElement('div');
  timelineInner.className = 'relative w-full';
  
  const timelineLine = document.createElement('div');
  timelineLine.className = 'absolute left-4 top-0 bottom-0 w-1 bg-black';
  timelineInner.appendChild(timelineLine);
  
  timelineEvents.forEach((event) => {
    const eventItem = document.createElement('div');
    eventItem.className = `relative pl-12 py-6 cursor-pointer transition-all duration-300 group ${state.activeYear === event.year ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`;
    eventItem.addEventListener('click', () => {
      state.activeYear = event.year;
      renderTimeline();
    });
    
    const dot = document.createElement('div');
    dot.className = `absolute left-4 w-4 h-4 rounded-full -translate-x-1/2 transition-all duration-300 ${state.activeYear === event.year ? 'bg-[#146bf7] transform scale-125' : 'bg-black group-hover:bg-[#146bf7]'}`;
    eventItem.appendChild(dot);
    
    const year = document.createElement('h3');
    year.className = `text-5xl font-bold transition-all duration-300 ${state.activeYear === event.year ? 'text-[#146bf7] opacity-100' : 'text-black group-hover:text-[#146bf7] opacity-90'}`;
    year.textContent = event.year;
    eventItem.appendChild(year);
    
    timelineInner.appendChild(eventItem);
  });
  
  timelineList.appendChild(timelineInner);
  
  content.appendChild(imageCard);
  content.appendChild(timelineList);
  wrapper.appendChild(content);
  container.appendChild(wrapper);
  
  // Update card height based on timeline height
  setTimeout(() => {
    const timelineListEl = document.getElementById('timeline-list');
    const imageCardEl = document.getElementById('timeline-image-card');
    if (timelineListEl && imageCardEl) {
      const timelineHeight = timelineListEl.offsetHeight;
      imageCardEl.style.height = `${timelineHeight}px`;
    }
  }, 100);
}

function renderBlog() {
  const container = document.getElementById('blog-container');
  if (!container) return;
  
  const header = document.createElement('div');
  header.className = 'flex justify-between items-center mb-16 md:mb-16 blog-header';
  
  const title = document.createElement('h2');
  title.className = 'text-4xl font-bold text-black';
  title.textContent = '버전트의 다양한 이야기';
  
  const moreLink = document.createElement('a');
  moreLink.href = '#';
  moreLink.className = 'px-5 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors duration-300 font-medium md:block hidden';
  moreLink.textContent = '더 알아보기';
  
  header.appendChild(title);
  header.appendChild(moreLink);
  
  // Mobile: List view, Desktop: Grid view
  const listContainer = document.createElement('div');
  listContainer.className = 'blog-list-container md:hidden';
  
  const grid = document.createElement('div');
  grid.className = 'hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 blog-grid';
  
  blogPosts.forEach((post, index) => {
    // Mobile: List item
    const listItem = document.createElement('a');
    listItem.href = post.url;
    listItem.target = '_blank';
    listItem.rel = 'noopener noreferrer';
    listItem.className = 'block blog-list-item';
    
    const listContent = document.createElement('div');
    listContent.className = 'py-4 border-b border-gray-200';
    
    const listTitle = document.createElement('h3');
    listTitle.className = 'text-lg font-medium text-black mb-2';
    listTitle.textContent = post.title;
    
    const listDate = document.createElement('p');
    listDate.className = 'text-gray-500 text-sm';
    listDate.textContent = post.date;
    
    listContent.appendChild(listTitle);
    listContent.appendChild(listDate);
    listItem.appendChild(listContent);
    listContainer.appendChild(listItem);
    
    // Desktop: Card with image
    const postLink = document.createElement('a');
    postLink.href = post.url;
    postLink.target = '_blank';
    postLink.rel = 'noopener noreferrer';
    postLink.className = 'group';
    
    const card = document.createElement('div');
    card.className = 'transition-all duration-300 transform hover:-translate-y-2';
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'relative aspect-video w-full overflow-hidden rounded-xl';
    
    const image = document.createElement('img');
    image.src = post.imageSrc;
    image.alt = post.title;
    image.className = 'object-cover transition-transform duration-500 group-hover:scale-105';
    image.style.width = '100%';
    image.style.height = '100%';
    image.style.position = 'absolute';
    image.style.top = '0';
    image.style.left = '0';
    image.style.objectFit = 'cover';
    
    imageContainer.appendChild(image);
    
    const content = document.createElement('div');
    content.className = 'mt-6 px-2';
    
    const postTitle = document.createElement('h3');
    postTitle.className = 'text-xl font-medium mb-3 line-clamp-2 text-black group-hover:text-[#664938] transition-colors duration-300';
    postTitle.textContent = post.title;
    
    const postDate = document.createElement('p');
    postDate.className = 'text-gray-500 text-sm';
    postDate.textContent = post.date;
    
    content.appendChild(postTitle);
    content.appendChild(postDate);
    
    card.appendChild(imageContainer);
    card.appendChild(content);
    postLink.appendChild(card);
    grid.appendChild(postLink);
  });
  
  container.appendChild(header);
  container.appendChild(listContainer);
  container.appendChild(grid);
}

function renderBlogPage() {
  const container = document.getElementById('blog-container');
  if (!container) return;
  
  // Clear container
  container.innerHTML = '';
  
  // Grid view for all devices
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 blog-grid';
  
  blogPosts.forEach((post, index) => {
    // Card with image
    const postLink = document.createElement('a');
    postLink.href = post.url;
    postLink.target = '_blank';
    postLink.rel = 'noopener noreferrer';
    postLink.className = 'group';
    
    const card = document.createElement('div');
    card.className = 'transition-all duration-300 transform hover:-translate-y-2';
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'relative aspect-video w-full overflow-hidden rounded-xl';
    
    const image = document.createElement('img');
    image.src = post.imageSrc;
    image.alt = post.title;
    image.className = 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105';
    
    imageContainer.appendChild(image);
    
    const content = document.createElement('div');
    content.className = 'mt-4 md:mt-6 px-1 md:px-2';
    
    const postTitle = document.createElement('h3');
    postTitle.className = 'text-2xl md:text-xl font-medium mb-2 md:mb-3 line-clamp-2 text-black group-hover:text-[#664938] transition-colors duration-300';
    postTitle.textContent = post.title;
    
    const postDate = document.createElement('p');
    postDate.className = 'text-gray-500 text-lg md:text-sm';
    postDate.textContent = post.date;
    
    content.appendChild(postTitle);
    content.appendChild(postDate);
    
    card.appendChild(imageContainer);
    card.appendChild(content);
    postLink.appendChild(card);
    grid.appendChild(postLink);
  });
  
  container.appendChild(grid);
}

function renderCareers() {
  const container = document.getElementById('careers-container');
  if (!container) return;
  
  const wrapper = document.createElement('div');
  wrapper.className = 'rounded-3xl py-24 px-8 md:px-12 text-center relative overflow-hidden careers-section';
  wrapper.style.backgroundImage = 'url(https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?cs=srgb&dl=pexels-eberhardgross-1421903.jpg&fm=jpg)';
  wrapper.style.backgroundSize = 'cover';
  wrapper.style.backgroundPosition = 'center';
  
  const overlay = document.createElement('div');
  overlay.className = 'absolute inset-0 bg-black opacity-35';
  
  const content = document.createElement('div');
  content.className = 'relative z-10 flex flex-col items-center justify-center min-h-[200px] careers-content';
  
  const title = document.createElement('h2');
  title.className = 'text-4xl font-bold mb-6 text-white careers-title';
  title.textContent = '합류할 곳을 찾고 있나요?';
  
  const text1 = document.createElement('p');
  text1.className = 'text-white/80 mb-2 careers-text';
  text1.textContent = '버전트에서 아이디어를 실현하세요.';
  
  const text2 = document.createElement('p');
  text2.className = 'text-white/80 mb-10 careers-text';
  text2.textContent = '우리는 인재 여러분들을 기다리고 있습니다.';
  
  const linkContainer = document.createElement('div');
  linkContainer.className = 'flex justify-center';
  
  const link = document.createElement('a');
  link.href = 'mailto:contact@birzont.com';
  link.className = 'inline-block border border-white/70 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg py-3 px-8 font-medium careers-button';
  link.textContent = '채용공고 보기';
  
  linkContainer.appendChild(link);
  
  content.appendChild(title);
  content.appendChild(text1);
  content.appendChild(text2);
  content.appendChild(linkContainer);
  
  wrapper.appendChild(overlay);
  wrapper.appendChild(content);
  container.appendChild(wrapper);
}

const careerJobs = [
  {
    id: 1,
    category: 'ENGINEERING',
    title: '[Talent Pool Registration] Founding Engineer',
    type: 'Full time',
    location: 'Flushing, NY',
    workType: 'On-site',
    salary: '$250k-$350k',
    equity: '0.25%-0.5%',
    flagEmoji: '🇺🇸',
    applyUrl: 'https://www.linkedin.com/company/birzont/'
  },
  {
    id: 2,
    category: 'ENGINEERING',
    title: '[인재풀 등록] Product Manager',
    type: 'Full time',
    location: '경희대학교 스타트업 캠퍼스, 서울',
    workType: 'Hybrid',
    salary: '₩10만-12만',
    equity: '0.2%',
    flagEmoji: '🇰🇷',
    applyUrl: 'https://www.linkedin.com/company/birzont/'
  },
  {
    id: 3,
    category: 'ENGINEERING',
    title: '[인재풀 등록] Marketing Lead',
    type: 'Full time',
    location: '경희대학교 스타트업 캠퍼스, 서울',
    workType: 'Hybrid',
    salary: '₩10만-12만',
    equity: '0.2%',
    flagEmoji: '🇰🇷',
    applyUrl: 'https://www.linkedin.com/company/birzont/'
  }
];

function renderCareerListings() {
  const container = document.getElementById('career-listings-container');
  if (!container) return;
  
  // Clear container
  container.innerHTML = '';
  
  // Group jobs by category
  const jobsByCategory = {};
  careerJobs.forEach(job => {
    if (!jobsByCategory[job.category]) {
      jobsByCategory[job.category] = [];
    }
    jobsByCategory[job.category].push(job);
  });
  
  // Render each category
  Object.keys(jobsByCategory).forEach((category, categoryIndex) => {
    // Divider before category (except first)
    if (categoryIndex > 0) {
      const divider = document.createElement('hr');
      divider.className = 'border-gray-200 my-8 md:my-12';
      container.appendChild(divider);
    }
    
    // Category header
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'mb-6 md:mb-8';
    const categoryText = document.createElement('p');
    categoryText.className = 'text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider';
    categoryText.textContent = category;
    categoryHeader.appendChild(categoryText);
    container.appendChild(categoryHeader);
    
    // Divider after category header
    const divider = document.createElement('hr');
    divider.className = 'border-gray-200 mb-6 md:mb-8';
    container.appendChild(divider);
    
    // Jobs in this category
    jobsByCategory[category].forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.className = 'border-b border-gray-200 pb-6 md:pb-8 mb-6 md:mb-8';
      
      // Job header (title with type tag on the right)
      const jobHeader = document.createElement('div');
      jobHeader.className = 'flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2';
      
      const titleContainer = document.createElement('div');
      titleContainer.className = 'flex items-center gap-3 flex-wrap';
      
      const title = document.createElement('h3');
      title.className = 'text-xl md:text-2xl font-bold text-black';
      title.textContent = job.title;
      
      const typeTag = document.createElement('span');
      typeTag.className = 'inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium';
      typeTag.textContent = job.type;
      
      titleContainer.appendChild(title);
      titleContainer.appendChild(typeTag);
      
      jobHeader.appendChild(titleContainer);
      
      // Details section with location, compensation, and apply button
      const detailsSection = document.createElement('div');
      detailsSection.className = 'flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2';
      
      // Left side: location and compensation
      const leftDetails = document.createElement('div');
      leftDetails.className = 'flex flex-col gap-2';
      
      // Job details (location and work type)
      const jobDetails = document.createElement('div');
      jobDetails.className = 'flex flex-wrap items-center gap-2 text-gray-600 text-base md:text-lg';
      
      const locationContainer = document.createElement('div');
      locationContainer.className = 'flex items-center gap-2';
      
      // Flag icon
      const flagIcon = document.createElement('span');
      flagIcon.className = 'text-base';
      flagIcon.innerHTML = job.flagEmoji || '🇺🇸';
      
      const location = document.createElement('span');
      location.textContent = job.location;
      
      locationContainer.appendChild(flagIcon);
      locationContainer.appendChild(location);
      
      const dot1 = document.createElement('span');
      dot1.className = 'text-gray-400';
      dot1.textContent = '•';
      
      const workType = document.createElement('span');
      workType.textContent = job.workType;
      
      jobDetails.appendChild(locationContainer);
      jobDetails.appendChild(dot1);
      jobDetails.appendChild(workType);
      
      // Compensation
      const compensation = document.createElement('div');
      compensation.className = 'flex items-center gap-2 text-gray-600 text-base md:text-lg';
      
      const salary = document.createElement('span');
      salary.textContent = job.salary;
      
      const dot2 = document.createElement('span');
      dot2.className = 'text-gray-400';
      dot2.textContent = '•';
      
      const equity = document.createElement('span');
      equity.textContent = job.equity;
      
      compensation.appendChild(salary);
      compensation.appendChild(dot2);
      compensation.appendChild(equity);
      
      leftDetails.appendChild(jobDetails);
      leftDetails.appendChild(compensation);
      
      // Apply button (right aligned, vertically centered with location info)
      const applyButton = document.createElement('a');
      applyButton.href = job.applyUrl;
      applyButton.className = 'inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 text-sm md:text-base md:-mt-2';
      applyButton.textContent = 'Apply now';
      
      detailsSection.appendChild(leftDetails);
      detailsSection.appendChild(applyButton);
      
      jobCard.appendChild(jobHeader);
      jobCard.appendChild(detailsSection);
      
      container.appendChild(jobCard);
    });
  });
}

function handleNavHover(item, index) {
  if (state.isMobile) return;
  
  clearTimeout(state.hideTimeout);
  
  const navCard = document.getElementById('nav-card');
  const navCardContentEl = document.getElementById('nav-card-content');
  const navCardImage = document.getElementById('nav-card-image');
  const header = document.getElementById('navbar');
  
  if (!navCard || !navCardContentEl || !navCardImage || !header) return;
  
  const content = navCardContent[item];
  if (!content) return;
  
  const headerRect = header.getBoundingClientRect();
  const cardWidth = 480;
  
  // Get start button position
  const startBtn = document.getElementById('desktop-start-btn');
  const startBtnRect = startBtn ? startBtn.getBoundingClientRect() : null;
  const startBtnRight = startBtnRect ? startBtnRect.right + window.scrollX : window.innerWidth;
  
  const navItem = document.querySelector(`[data-item="${item}"]`);
  if (!navItem) return;
  
  const rect = navItem.getBoundingClientRect();
  let left = rect.left + window.scrollX + rect.width / 2 - cardWidth / 2;
  
  if (item === "Career") {
    // Career: 카드의 오른쪽 가장자리가 시작하기 버튼의 오른쪽 가장자리를 넘지 않도록
    const calculatedLeft = rect.left + window.scrollX + rect.width / 2 - cardWidth / 2;
    const cardRight = calculatedLeft + cardWidth;
    if (cardRight > startBtnRight - 16) {
      left = startBtnRight - cardWidth - 16;
    } else {
      left = calculatedLeft;
    }
  }
  
  left = Math.max(16, Math.min(left, window.innerWidth - cardWidth - 16));
  
  navCard.style.top = `${headerRect.bottom + 5}px`;
  navCard.style.left = `${left}px`;
  
  state.activeCard = item;
  updateNavCard();
}

function handleNavLeave() {
  state.hideTimeout = setTimeout(() => {
    state.activeCard = null;
    updateNavCard();
  }, 200);
}

function handleCardEnter() {
  clearTimeout(state.hideTimeout);
}

function handleCardLeave() {
  state.activeCard = null;
  updateNavCard();
}

function updateNavCard() {
  const navCard = document.getElementById('nav-card');
  const navCardContentEl = document.getElementById('nav-card-content');
  const navCardImage = document.getElementById('nav-card-image');
  
  if (!navCard || !navCardContentEl || !navCardImage) return;
  
  if (state.activeCard && navCardContent[state.activeCard]) {
    const content = navCardContent[state.activeCard];
    
    navCardContentEl.innerHTML = `
      <h3 class="font-bold text-lg mb-4">${content.title}</h3>
      <ul class="space-y-2">
        ${content.items.map(item => `
          <li>
            <a href="${item.href}" class="text-gray-700 hover:text-black transition-colors">${item.text}</a>
          </li>
        `).join('')}
      </ul>
    `;
    
    navCardImage.innerHTML = `
      <div class="w-full aspect-square relative rounded-xl overflow-hidden">
        <img src="${content.image}" alt="${state.activeCard}" class="object-cover w-full h-full">
      </div>
    `;
    
    navCard.classList.add('show');
  } else {
    navCard.classList.remove('show');
  }
}

// Product Carousel State
const productCarouselState = {
  currentSlide: 0,
  totalSlides: 4
};

function initProductCarousel() {
  const tabs = document.querySelectorAll('.product-tablist .product-tab');
  const indicators = document.querySelectorAll('.product-indicator');
  const slides = document.querySelectorAll('.product-slide');
  const mobileCarouselImgs = document.querySelectorAll('.mobile-carousel-img');
  const prevBtn = document.getElementById('product-carousel-prev');
  const nextBtn = document.getElementById('product-carousel-next');
  
  function goToSlide(index) {
    if (index < 0 || index >= productCarouselState.totalSlides) return;
    
    productCarouselState.currentSlide = index;
    
    // Update tabs
    tabs.forEach((tab, i) => {
      const content = tab.querySelector('.product-tab-content');
      if (i === index) {
        tab.classList.add('product-tab-active');
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');
        // Show content for active tab
        if (content) {
          content.classList.add('product-tab-content-visible');
        }
      } else {
        tab.classList.remove('product-tab-active');
        tab.setAttribute('aria-selected', 'false');
        tab.setAttribute('tabindex', '-1');
        // Hide content for inactive tabs
        if (content) {
          content.classList.remove('product-tab-content-visible');
        }
      }
    });
    
    // Update indicators
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add('product-indicator-active');
        indicator.setAttribute('aria-selected', 'true');
      } else {
        indicator.classList.remove('product-indicator-active');
        indicator.setAttribute('aria-selected', 'false');
      }
    });
    
    // Update slides (desktop)
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('product-slide-active');
        slide.removeAttribute('hidden');
        slide.setAttribute('aria-hidden', 'false');
      } else {
        slide.classList.remove('product-slide-active');
        slide.setAttribute('hidden', '');
        slide.setAttribute('aria-hidden', 'true');
      }
    });
    
    // Update mobile carousel images
    mobileCarouselImgs.forEach((img, i) => {
      if (i === index) {
        img.classList.add('mobile-carousel-img-active');
      } else {
        img.classList.remove('mobile-carousel-img-active');
      }
    });
    
    // Update control buttons
    if (prevBtn) {
      prevBtn.style.display = index === 0 ? 'none' : 'flex';
    }
    if (nextBtn) {
      nextBtn.style.display = index === productCarouselState.totalSlides - 1 ? 'none' : 'flex';
    }
  }
  
  // Tab click handlers
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      goToSlide(index);
    });
  });
  
  // Indicator click handlers
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      goToSlide(index);
    });
  });
  
  // Previous/Next button handlers
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(productCarouselState.currentSlide - 1);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(productCarouselState.currentSlide + 1);
    });
  }
  
  // Initialize first slide
  goToSlide(0);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
      updateMobileMenu();
    });
  }
  
  // Scroll handler
  window.addEventListener('scroll', () => {
    updateHeader();
    
    // Fade in section
    if (!state.fadeTriggered) {
      const fadeInSection = document.getElementById('fade-in-section');
      if (fadeInSection) {
        const rect = fadeInSection.getBoundingClientRect();
        if (window.scrollY > rect.top - window.innerHeight + 100) {
          state.fadeTriggered = true;
          fadeInSection.classList.remove('opacity-0', 'translate-y-[30px]');
          fadeInSection.classList.add('opacity-100', 'translate-y-0');
        }
      }
    }
  });
  
  // Resize handler
  window.addEventListener('resize', () => {
    updateMobileState();
    updateHeader();
  });
  
  // Video play button
  const playVideoBtn = document.getElementById('play-video-btn');
  const videoThumbnail = document.getElementById('video-thumbnail');
  const videoPlayerContainer = document.getElementById('video-player-container');
  const videoIframe = document.getElementById('video-iframe');
  
  if (playVideoBtn && videoThumbnail && videoPlayerContainer && videoIframe) {
    playVideoBtn.addEventListener('click', () => {
      state.videoPlaying = true;
      videoThumbnail.style.display = 'none';
      playVideoBtn.style.display = 'none';
      videoPlayerContainer.style.display = 'block';
      videoIframe.src = 'https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1';
    });
  }
  
  // Nav hover handlers
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item, index) => {
    const itemName = item.dataset.item;
    if (itemName) {
      item.addEventListener('mouseenter', () => handleNavHover(itemName, index));
      item.addEventListener('mouseleave', handleNavLeave);
    }
  });
  
  const navCard = document.getElementById('nav-card');
  if (navCard) {
    navCard.addEventListener('mouseenter', handleCardEnter);
    navCard.addEventListener('mouseleave', handleCardLeave);
  }
  
  const initBlurFadeOnce = () => {
    const targets = document.querySelectorAll('.blur-fade-once');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(target => target.classList.add('blur-fade-once-visible'));
      return;
    }

    // Hero 섹션 요소들을 순차적으로 나타나게 하는 함수
    const initHeroSequence = () => {
      const heroTitle = document.querySelector('.hero-title');
      if (!heroTitle) return;
      
      const heroSection = heroTitle.closest('section');
      if (!heroSection) return;
      
      // Hero 섹션의 순서가 있는 요소들
      const heroElements = [
        heroTitle,
        heroSection.querySelector('p.blur-fade-once[data-hero-order="2"]'),
        heroSection.querySelector('button.blur-fade-once[data-hero-order="3"]')
      ].filter(Boolean);
      
      const heroImage = document.getElementById('image-canvas');
      
      // 첫 번째 요소가 나타나면 다음 요소들을 순차적으로 트리거
      const triggerNextElement = (index) => {
        if (index >= heroElements.length) {
          // 모든 텍스트 요소가 나타났으므로 이미지 트리거
          if (heroImage && heroImage.classList.contains('hero-image-slide-up') && 
              !heroImage.classList.contains('hero-image-slide-up-visible')) {
            setTimeout(() => {
              heroImage.classList.add('hero-image-slide-up-visible');
            }, 150);
          }
          return;
        }
        
        const currentElement = heroElements[index];
        if (currentElement && !currentElement.classList.contains('blur-fade-once-visible')) {
          currentElement.classList.add('blur-fade-once-visible');
          
          // 다음 요소를 0.5초 후에 트리거
          setTimeout(() => {
            triggerNextElement(index + 1);
          }, 500);
        }
      };
      
      // 첫 번째 요소가 화면에 보이면 시작
      const checkHeroStart = () => {
        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && heroElements.length > 0) {
          // 첫 번째 요소가 아직 나타나지 않았다면 나타나게 함
          if (!heroElements[0].classList.contains('blur-fade-once-visible')) {
            heroElements[0].classList.add('blur-fade-once-visible');
            setTimeout(() => {
              triggerNextElement(1);
            }, 500);
          }
        }
      };
      
      // 초기 체크
      setTimeout(checkHeroStart, 100);
      
      // 첫 번째 요소를 관찰하여 시작
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target === heroElements[0]) {
            if (!heroElements[0].classList.contains('blur-fade-once-visible')) {
              heroElements[0].classList.add('blur-fade-once-visible');
              setTimeout(() => {
                triggerNextElement(1);
              }, 500);
            }
            heroObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      if (heroElements[0]) {
        heroObserver.observe(heroElements[0]);
      }
    };

    // Hero 섹션이 아닌 일반 요소들을 위한 observer
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        // Hero 섹션의 순서가 있는 요소들은 제외
        if (entry.target.hasAttribute('data-hero-order')) {
          return;
        }
        
        if (entry.isIntersecting) {
          entry.target.classList.add('blur-fade-once-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    // Hero 섹션이 아닌 요소들만 observer에 추가
    targets.forEach(target => {
      if (!target.hasAttribute('data-hero-order')) {
        observer.observe(target);
      }
    });
    
    // Hero 섹션 초기화
    initHeroSequence();
  };

  // Initialize
  createPixels();
  renderProducts();
  renderTimeline();
  renderBlog();
  renderCareers();
  renderProductFeatures();
  initDemoSocialCounts();
  initUserPromptCards();
  updateMobileState();
  updateHeader();
  initProductCarousel();
  initBlurFadeOnce();
  
  // Pixel blinking
  setInterval(blinkRandomPixels, 1000);
  
  // Prompt carousel for mobile
  const promptGrid = document.querySelector('.user-prompts-grid');
  const promptPrevBtn = document.getElementById('prompt-prev-btn');
  const promptNextBtn = document.getElementById('prompt-next-btn');
  
  if (promptGrid) {
    let currentPromptIndex = 0;
    const promptCards = promptGrid.querySelectorAll('.user-prompt-card');
    const totalPromptCards = promptCards.length;
    let autoSlideInterval = null;
    
    function scrollToPromptCard(index) {
      const cardWidth = promptCards[0].offsetWidth;
      const gap = 16; // 1rem gap
      const scrollPosition = index * (cardWidth + gap);
      promptGrid.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
    
    function nextSlide() {
      currentPromptIndex = currentPromptIndex + 1;
      if (currentPromptIndex >= totalPromptCards) {
        currentPromptIndex = 0; // Loop to first
      }
      scrollToPromptCard(currentPromptIndex);
    }
    
    function prevSlide() {
      currentPromptIndex = currentPromptIndex - 1;
      if (currentPromptIndex < 0) {
        currentPromptIndex = totalPromptCards - 1; // Loop to last
      }
      scrollToPromptCard(currentPromptIndex);
    }
    
    function startAutoSlide() {
      if (state.isMobile && !autoSlideInterval) {
        autoSlideInterval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
      }
    }
    
    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }
    
    function resetAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }
    
    // Button event listeners
    if (promptPrevBtn) {
      promptPrevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
      });
    }
    
    if (promptNextBtn) {
      promptNextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });
    }
    
    // Manual scroll detection to sync currentPromptIndex
    let scrollTimeout;
    promptGrid.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const cardWidth = promptCards[0].offsetWidth;
        const gap = 16;
        const scrollLeft = promptGrid.scrollLeft;
        const newIndex = Math.round(scrollLeft / (cardWidth + gap));
        if (newIndex !== currentPromptIndex) {
          currentPromptIndex = newIndex;
          resetAutoSlide();
        }
      }, 100);
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
      const wasMobile = state.isMobile;
      state.isMobile = window.innerWidth <= 900;
      
      if (state.isMobile && !wasMobile) {
        startAutoSlide();
      } else if (!state.isMobile && wasMobile) {
        stopAutoSlide();
      }
    });
    
    // Start auto-slide on mobile
    startAutoSlide();
  }
  
  // Canvas height update is no longer needed for the new centered layout
  
  // Team Members - wait a bit to ensure window.teamMembers is loaded
  setTimeout(() => {
    renderTeamMembers();
    initTeamMemberModal();
  }, 100);
});

// Render Team Members from JSON data
function renderTeamMembers() {
  const teamGrid = document.getElementById('team-members-grid');
  
  if (!teamGrid) {
    console.warn('Team members grid not found - this page may not have a team section');
    return;
  }
  
  if (!window.teamMembers || !Array.isArray(window.teamMembers) || window.teamMembers.length === 0) {
    console.warn('Team members data not found or empty');
    return;
  }
  
  console.log('Rendering team members:', window.teamMembers.length);

  teamGrid.innerHTML = '';

  window.teamMembers.forEach(member => {
    const card = document.createElement('div');
    card.className = 'team-member-card blur-fade-once cursor-pointer';
    card.setAttribute('data-member', JSON.stringify(member));
    
    card.innerHTML = `
      <div class="relative mb-6 md:mb-6 team-member-image-container">
        <img 
          src="${member.image}" 
          alt="${member.name}" 
          class="w-full aspect-square object-cover rounded-2xl"
        >
        <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="absolute top-3 right-3 md:top-3 md:right-3 bg-white rounded-lg p-2 md:p-2 shadow-lg hover:bg-gray-50 transition-colors team-linkedin-badge" onclick="event.stopPropagation();">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="text-gray-700 team-linkedin-icon md:w-5 md:h-5">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
      <h3 class="text-2xl font-bold text-black mb-2 md:mb-2 team-member-name">${member.name}</h3>
      <p class="text-gray-600 text-lg team-member-role">${member.role}</p>
    `;
    
    teamGrid.appendChild(card);
  });
  
  // Re-initialize blur fade for new cards
  setTimeout(() => {
    const newCards = teamGrid.querySelectorAll('.blur-fade-once');
    newCards.forEach(card => {
      if (!card.classList.contains('blur-fade-once-visible')) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('blur-fade-once-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });
        observer.observe(card);
      }
    });
  }, 100);
}

// Team Member Modal Functions
function initTeamMemberModal() {
  const modal = document.getElementById('team-member-modal');
  const closeBtn = document.getElementById('team-modal-close');
  const memberCards = document.querySelectorAll('.team-member-card[data-member]');

  if (!modal || !closeBtn) return;

  // Open modal
  memberCards.forEach(card => {
    card.addEventListener('click', () => {
      const memberData = JSON.parse(card.getAttribute('data-member'));
      openTeamModal(memberData);
    });
  });

  // Close modal
  closeBtn.addEventListener('click', closeTeamModal);
  
  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeTeamModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeTeamModal();
    }
  });
}

function openTeamModal(memberData) {
  const modal = document.getElementById('team-member-modal');
  const nameEl = document.getElementById('modal-member-name');
  const roleEl = document.getElementById('modal-member-role');
  const imageEl = document.getElementById('modal-member-image');
  const descriptionEl = document.getElementById('modal-member-description');
  const linkedinEl = document.getElementById('modal-member-linkedin');

  if (!modal) return;

  // Update modal content
  if (nameEl) nameEl.textContent = memberData.name;
  if (roleEl) roleEl.textContent = memberData.role;
  if (imageEl) {
    imageEl.src = memberData.image;
    imageEl.alt = memberData.name;
  }
  if (descriptionEl) {
    // <br> 태그를 줄바꿈으로 처리
    descriptionEl.innerHTML = memberData.description.replace(/\<br\>/gi, '<br>');
  }
  if (linkedinEl) {
    linkedinEl.href = memberData.linkedin || '#';
    if (memberData.linkedin === '#') {
      linkedinEl.style.pointerEvents = 'none';
      linkedinEl.style.opacity = '0.5';
    } else {
      linkedinEl.style.pointerEvents = 'auto';
      linkedinEl.style.opacity = '1';
    }
  }

  // Show modal
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  // Trigger animation
  setTimeout(() => {
    const modalContent = modal.querySelector('.team-modal-content');
    if (modalContent) {
      modalContent.style.opacity = '0';
      modalContent.style.transform = 'scale(0.95)';
      setTimeout(() => {
        modalContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        modalContent.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
      }, 10);
    }
  }, 10);
}

function closeTeamModal() {
  const modal = document.getElementById('team-member-modal');
  if (!modal) return;

  const modalContent = modal.querySelector('.team-modal-content');
  if (modalContent) {
    modalContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    modalContent.style.opacity = '0';
    modalContent.style.transform = 'scale(0.95)';
  }

  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }, 300);
}

