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
    title: "Prompist",
    description: "Supported by OpenAI, Claude, Grok and Gemini ",
    defaultLogoSrc: "https://birzont.github.io/BirzontArchive/res/Prompist.png",
    bgColor: "https://img.freepik.com/premium-photo/old-paper-texture-empty-vintage-background-text_84485-2503.jpg",
    link: "https://google.com",
    index: 0,
    modalImage: "https://birzont.github.io/BirzontArchive/res/Prompistbg.png"
  },
  {
    title: "Bloxer",
    description: "이 앱은 사용자에게 혁신적인 서비스를 제공합니다. 간편한 인터페이스와 다양한 기능으로 일상 생활을 더욱 편리하게 만들어 드립니다.",
    defaultLogoSrc: "https://birzont.github.io/BirzontArchive/res/Bloxer.png",
    bgColor: "https://img.freepik.com/premium-photo/old-paper-texture-empty-vintage-background-text_84485-2503.jpg",
    link: "https://google.com",
    index: 1,
    modalImage: "https://play.ht/blog/wp-content/uploads/2024/04/what-is-perplexity-ai.webp"
  },
  {
    title: "Jibung",
    description: "Pepsi의 공식 앱으로, 최신 프로모션과 이벤트 정보를 확인할 수 있습니다. 다양한 음료 제품에 대한 정보와 특별 할인 혜택을 제공합니다.",
    defaultLogoSrc: "https://birzont.github.io/BirzontArchive/res/Jibung.png",
    bgColor: "https://img.freepik.com/premium-photo/old-paper-texture-empty-vintage-background-text_84485-2503.jpg",
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
    title: "[콘텐츠 AI] AI가 대세라는데 우리 회사에 어떻게 활용할 수 있을까?",
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
      { text: "About Company", href: "#" },
      { text: "Brand identity", href: "#" },
      { text: "Our Team", href: "#" }
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
  Career: {
    title: "채용 정보",
    items: [
      { text: "Careers", href: "#" },
      { text: "Talent pool", href: "#" },
      { text: "Culture Fits", href: "#" }
    ],
    image: "https://birzont.github.io/BirzontArchive/res/TreeBuilding.png"
  },
  BiAI: {
    title: "BiAI 플랫폼",
    items: [
      { text: "기능 소개", href: "#" },
      { text: "사용 사례", href: "#" },
      { text: "가격 정책", href: "#" },
      { text: "개발자 문서", href: "#" },
      { text: "API 레퍼런스", href: "#" }
    ],
    image: "https://birzont.github.io/BirzontArchive/res/CobbleMac.png"
  }
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
  
  if (!header || !logoImg) return;
  
  const shouldBeScrolled = window.scrollY > 0 || (state.isMobile && state.mobileMenuOpen);
  
  if (shouldBeScrolled) {
    header.classList.remove('bg-transparent');
    if (state.isMobile) {
      header.classList.add('backdrop-blur-md', 'bg-white', 'text-black', 'shadow-md');
      header.classList.remove('rounded-xl', 'px-12');
      header.classList.add('rounded-none', 'px-4');
      logoImg.src = state.mobileMenuOpen || state.scrolled ? 
        "https://birzont.github.io/BirzontArchive/res/birzont_bicon.png" : 
        "https://birzont.github.io/BirzontArchive/res/birzont_wicon.png";
    } else {
      header.classList.add('border-2', 'border-black', 'backdrop-blur-md', 'bg-white', 'text-black', 'shadow-lg');
      logoImg.src = "https://birzont.github.io/BirzontArchive/res/birzont_black.png";
    }
    
    // Update nav links
    const navLinks = header.querySelectorAll('#desktop-nav a');
    navLinks.forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-black');
    });
    
    state.scrolled = true;
    state.blinking = false;
  } else {
    if (state.isMobile) {
      header.classList.remove('backdrop-blur-md', 'bg-white', 'text-black', 'shadow-md');
      header.classList.add('bg-transparent');
      logoImg.src = "https://birzont.github.io/BirzontArchive/res/birzont_wicon.png";
    } else {
      header.classList.remove('border-2', 'border-black', 'backdrop-blur-md', 'bg-white', 'text-black', 'shadow-lg');
      header.classList.add('bg-transparent');
      logoImg.src = "https://birzont.github.io/BirzontArchive/res/birzont_white.png";
    }
    
    // Update nav links
    const navLinks = header.querySelectorAll('#desktop-nav a');
    navLinks.forEach(link => {
      link.classList.add('text-white');
      link.classList.remove('text-black');
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
  cardContent.className = 'flex flex-col h-full animate-fadeIn p-4 sm:p-6 md:p-8 relative z-10';
  cardContent.dataset.showDescription = 'false';
  
  const logoContainer = document.createElement('div');
  logoContainer.className = 'flex-grow flex items-center justify-center';
  
  const logoWrapper = document.createElement('div');
  logoWrapper.className = 'relative rounded-xl flex items-center justify-center overflow-hidden transition-all duration-200 bg-transparent';
  logoWrapper.style.width = state.isMobile ? '100%' : 'clamp(120px, 80%, 240px)';
  logoWrapper.style.height = state.isMobile ? '100%' : 'clamp(120px, 80%, 240px)';
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
  
  if (showDescription) {
    // Hide description
    cardContent.dataset.showDescription = 'false';
    cardContent.innerHTML = '';
    
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
    // Show description
    cardContent.dataset.showDescription = 'true';
    cardContent.className = 'flex flex-col h-full animate-fadeIn p-8 text-white relative z-10 backdrop-blur-md bg-black/70 rounded-3xl';
    
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
    existingModal.remove();
  }
  
  const modal = document.createElement('div');
  modal.id = 'app-card-modal';
  modal.className = 'modal-overlay';
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
  
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContent.addEventListener('click', (e) => e.stopPropagation());
  
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
  
  const closeBtn = document.createElement('button');
  closeBtn.className = 'bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center';
  closeBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `;
  closeBtn.addEventListener('click', () => modal.remove());
  
  header.appendChild(headerLeft);
  header.appendChild(closeBtn);
  modalContent.appendChild(header);
  
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
}

function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;
  
  container.innerHTML = '';
  products.forEach(product => {
    const card = createAppCard(product);
    container.appendChild(card);
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
  
  const wrapper = document.createElement('div');
  wrapper.className = 'w-full py-12';
  
  const header = document.createElement('div');
  header.className = 'flex flex-col md:flex-row w-full mb-12';
  
  const headerLeft = document.createElement('div');
  headerLeft.className = 'w-full md:w-1/2 mb-8 md:mb-0';
  
  const label = document.createElement('p');
  label.className = 'text-gray-600 font-medium mb-2';
  label.textContent = 'OUR JOURNEY';
  headerLeft.appendChild(label);
  
  const title = document.createElement('h2');
  title.className = 'text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#333]';
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
  header.className = 'flex justify-between items-center mb-16';
  
  const title = document.createElement('h2');
  title.className = 'text-4xl font-bold text-black';
  title.textContent = '버전트의 다양한 이야기';
  
  const moreLink = document.createElement('a');
  moreLink.href = '#';
  moreLink.className = 'px-5 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors duration-300 font-medium';
  moreLink.textContent = '더 알아보기';
  
  header.appendChild(title);
  header.appendChild(moreLink);
  
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10';
  
  blogPosts.forEach(post => {
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
  container.appendChild(grid);
}

function renderCareers() {
  const container = document.getElementById('careers-container');
  if (!container) return;
  
  const wrapper = document.createElement('div');
  wrapper.className = 'rounded-3xl py-24 px-8 md:px-12 text-center relative overflow-hidden';
  wrapper.style.backgroundImage = 'url(https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?cs=srgb&dl=pexels-eberhardgross-1421903.jpg&fm=jpg)';
  wrapper.style.backgroundSize = 'cover';
  wrapper.style.backgroundPosition = 'center';
  
  const overlay = document.createElement('div');
  overlay.className = 'absolute inset-0 bg-black opacity-35';
  
  const content = document.createElement('div');
  content.className = 'relative z-10 flex flex-col items-center justify-center min-h-[200px]';
  
  const title = document.createElement('h2');
  title.className = 'text-4xl font-bold mb-6 text-white';
  title.textContent = '합류할 곳을 찾고 있나요?';
  
  const text1 = document.createElement('p');
  text1.className = 'text-white/80 mb-2';
  text1.textContent = '버전트에서 아이디어를 실현하세요.';
  
  const text2 = document.createElement('p');
  text2.className = 'text-white/80 mb-10';
  text2.textContent = '우리는 인재 여러분들을 기다리고 있습니다.';
  
  const linkContainer = document.createElement('div');
  linkContainer.className = 'flex justify-center';
  
  const link = document.createElement('a');
  link.href = 'mailto:contact@birzont.com';
  link.className = 'inline-block border border-white/70 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg py-3 px-8 font-medium';
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
  
  const navItem = document.querySelector(`[data-item="${item}"]`);
  if (!navItem) return;
  
  const rect = navItem.getBoundingClientRect();
  let left = rect.left + window.scrollX + rect.width / 2 - cardWidth / 2;
  
  if (item === "BiAI") {
    left = headerRect.right - cardWidth - 16;
  } else if (item === "Career") {
    left = rect.left + window.scrollX + rect.width / 2 - cardWidth / 2;
  }
  
  left = Math.max(16, Math.min(left, window.innerWidth - cardWidth - 16));
  
  navCard.style.top = `${headerRect.bottom + 5}px`;
  navCard.style.left = `${left}px`;
  navCard.style.display = 'flex';
  navCard.classList.add('show');
  
  setTimeout(() => {
    state.activeCard = item;
    updateNavCard();
  }, 10);
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
    navCard.style.display = 'flex';
  } else {
    navCard.classList.remove('show');
    navCard.style.display = 'none';
  }
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
    renderLogoSlider();
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
  
  // Initialize
  createPixels();
  renderProducts();
  renderLogoSlider();
  renderTimeline();
  renderBlog();
  renderCareers();
  updateMobileState();
  updateHeader();
  
  // Pixel blinking
  setInterval(blinkRandomPixels, 1000);
  
  // Update canvas height
  const updateContentHeight = () => {
    const imageCanvas = document.getElementById('image-canvas');
    const leftContent = document.getElementById('left-content');
    
    if (imageCanvas && leftContent) {
      const canvasHeight = imageCanvas.clientHeight;
      document.documentElement.style.setProperty('--canvas-height', `${canvasHeight}px`);
      leftContent.style.height = `${canvasHeight}px`;
      leftContent.style.maxHeight = `${canvasHeight}px`;
    }
  };
  
  updateContentHeight();
  window.addEventListener('resize', () => {
    setTimeout(updateContentHeight, 100);
  });
  
  setTimeout(updateContentHeight, 500);
});

