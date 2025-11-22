(function () {
  const NAVBAR_TEMPLATE = `
    <header id="navbar" class="fixed top-0 left-0 w-full px-4 md:px-0 flex justify-center py-4 z-50 transition-all duration-300 bg-transparent">
      <div class="w-full md:w-[calc(95%-110px)] md:max-w-[1506px] flex justify-between items-center">
        <div class="flex items-center">
          <a href="index.html">
            <img id="logo-img" alt="Birzont Logo" width="120" height="36" class="object-contain" src="https://birzont.github.io/BirzontArchive/res/birzont_white.png">
          </a>
        </div>

        <nav id="desktop-nav" class="flex gap-4 justify-end flex-1 mr-6">
          <div class="relative nav-item" data-item="Company">
            <a href="about.html" class="font-normal text-[1rem] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100/70 text-white">Company</a>
          </div>
          <div class="relative nav-item" data-item="Product">
            <a href="index.html#product" class="font-normal text-[1rem] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100/70 text-white">Product</a>
          </div>
          <div class="relative nav-item" data-item="Blog">
            <a href="blog.html" class="font-normal text-[1rem] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100/70 text-white">Blog</a>
          </div>
          <div class="relative nav-item" data-item="Career">
            <a href="index.html#career" class="font-normal text-[1rem] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100/70 text-white">Career</a>
          </div>
        </nav>

        <button id="mobile-menu-btn" class="hidden px-4 py-2 text-white">
          <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
          <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <button id="desktop-start-btn" class="px-4 py-2 font-bold rounded-xl transition-all duration-300 whitespace-nowrap text-[1rem] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black">
          시작하기
        </button>
      </div>
    </header>
    <div id="mobile-menu" class="fixed top-[48px] left-0 w-full bg-white text-black z-40 shadow-lg transform transition-all duration-300 ease-in-out -translate-y-full opacity-0">
      <div class="py-4 px-6">
        <a href="about.html" class="block py-3 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50">Company</a>
        <a href="index.html#product" class="block py-3 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50">Product</a>
        <a href="blog.html" class="block py-3 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50">Blog</a>
        <a href="index.html#career" class="block py-3 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50">Career</a>
        <div class="mt-4 pt-2">
          <button class="w-full px-5 py-3 font-bold rounded-xl bg-black text-white transition-all duration-300">시작하기</button>
        </div>
      </div>
    </div>
  `;

  const NAV_CARD_TEMPLATE = `
    <div id="nav-card" class="fixed border border-gray-200 shadow-lg rounded-xl bg-white text-black w-[520px] p-0 z-[1000] overflow-hidden opacity-0 pointer-events-none">
      <div class="flex w-full">
        <div class="flex-1 p-8 pt-4 pl-6" id="nav-card-content"></div>
        <div class="w-[280px] p-4 flex items-center" id="nav-card-image"></div>
      </div>
    </div>
  `;

  function injectNavCard() {
    if (document.getElementById('nav-card')) return;
    const template = document.createElement('template');
    template.innerHTML = NAV_CARD_TEMPLATE.trim();
    const card = template.content.firstElementChild;
    document.body.appendChild(card);
  }

  function injectNavbar() {
    const app = document.getElementById('app');
    if (!app || document.getElementById('navbar')) return;

    const template = document.createElement('template');
    template.innerHTML = NAVBAR_TEMPLATE.trim();

    const fragment = template.content.cloneNode(true);
    app.insertBefore(fragment, app.firstChild);
    injectNavCard();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavbar);
  } else {
    injectNavbar();
  }
})();

