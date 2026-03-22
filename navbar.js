(function () {
  const NAVBAR_TEMPLATE = `
    <header id="navbar" class="fixed top-0 left-0 w-full px-4 md:px-0 flex justify-center py-4 z-50 transition-all duration-300 bg-transparent">
      <div class="w-full md:w-[calc(95%-110px)] md:max-w-[1506px] flex items-center relative">
        <div class="flex-1 flex items-center order-1">
          <a href="index.html">
            <img id="logo-img" alt="Birzont Logo" width="120" height="36" class="object-contain" src="https://birzont.github.io/BirzontArchive/res/birzont_white.png">
          </a>
        </div>
        <nav id="desktop-nav" class="flex-1 hidden md:flex gap-4 justify-center order-2">
            <div class="relative nav-item" data-item="Home">
              <a href="index.html" class="font-normal text-[1rem] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100/70 text-white">Home</a>
            </div>
            <div class="relative nav-item" data-item="Pricing">
              <a href="https://birzont.ai/pricing" target="_blank" rel="noopener noreferrer" class="font-normal text-[1rem] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100/70 text-white">Pricing</a>
            </div>
            <div class="relative nav-item" data-item="Company">
              <a href="about.html" class="font-normal text-[1rem] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100/70 text-white">Company</a>
            </div>
            <div class="relative nav-item" data-item="Blog">
              <a href="blog.html" class="font-normal text-[1rem] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100/70 text-white">Blog</a>
            </div>
            <div class="relative nav-item" data-item="Careers">
              <a href="career.html" class="font-normal text-[1rem] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100/70 text-white">Careers</a>
            </div>
        </nav>

        <button id="mobile-menu-btn" class="absolute left-4 top-1/2 -translate-y-1/2 md:hidden px-4 py-2 text-white order-1">
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

        <div class="flex-1 flex justify-end items-center gap-2 order-3">
          <div class="relative">
            <button type="button" id="lang-btn" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors hover:bg-gray-100/70 text-white" aria-label="Language" aria-haspopup="true" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span id="lang-label" class="text-[0.9rem] font-medium">EN</span>
            </button>
            <div id="lang-dropdown" class="absolute right-0 top-full mt-1 py-1.5 min-w-[180px] bg-[#2d2d2d] rounded-lg shadow-xl border border-gray-600/50 opacity-0 pointer-events-none translate-y-[-4px] transition-all duration-200 z-[1100]" role="menu">
              <button type="button" class="lang-option selected w-full flex items-center gap-2 px-4 py-2.5 text-left text-white bg-white/5 hover:bg-white/10 transition-colors text-sm" data-lang="en" data-label="EN" role="menuitem">
                <span class="lang-check-cell w-4 flex-shrink-0 flex items-center justify-center"><svg class="lang-check w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                English
              </button>
              <button type="button" class="lang-option w-full flex items-center gap-2 px-4 py-2.5 text-left text-white hover:bg-white/10 transition-colors text-sm" data-lang="zh-CN" data-label="简" role="menuitem">
                <span class="lang-check-cell w-4 flex-shrink-0 flex items-center justify-center"></span>
                简体中文
              </button>
              <button type="button" class="lang-option w-full flex items-center gap-2 px-4 py-2.5 text-left text-white hover:bg-white/10 transition-colors text-sm" data-lang="zh-TW" data-label="繁" role="menuitem">
                <span class="lang-check-cell w-4 flex-shrink-0 flex items-center justify-center"></span>
                繁體中文
              </button>
              <button type="button" class="lang-option w-full flex items-center gap-2 px-4 py-2.5 text-left text-white hover:bg-white/10 transition-colors text-sm" data-lang="ko" data-label="KO" role="menuitem">
                <span class="lang-check-cell w-4 flex-shrink-0 flex items-center justify-center"></span>
                한국어
              </button>
              <button type="button" class="lang-option w-full flex items-center gap-2 px-4 py-2.5 text-left text-white hover:bg-white/10 transition-colors text-sm" data-lang="ja" data-label="JA" role="menuitem">
                <span class="lang-check-cell w-4 flex-shrink-0 flex items-center justify-center"></span>
                日本語
              </button>
              <button type="button" class="lang-option w-full flex items-center gap-2 px-4 py-2.5 text-left text-white hover:bg-white/10 transition-colors text-sm" data-lang="es" data-label="ES" role="menuitem">
                <span class="lang-check-cell w-4 flex-shrink-0 flex items-center justify-center"></span>
                Español
              </button>
              <button type="button" class="lang-option w-full flex items-center gap-2 px-4 py-2.5 text-left text-white hover:bg-white/10 transition-colors text-sm" data-lang="de" data-label="DE" role="menuitem">
                <span class="lang-check-cell w-4 flex-shrink-0 flex items-center justify-center"></span>
                Deutsch
              </button>
              <button type="button" class="lang-option w-full flex items-center gap-2 px-4 py-2.5 text-left text-white hover:bg-white/10 transition-colors text-sm" data-lang="fr" data-label="FR" role="menuitem">
                <span class="lang-check-cell w-4 flex-shrink-0 flex items-center justify-center"></span>
                Français
              </button>
              <button type="button" class="lang-option w-full flex items-center gap-2 px-4 py-2.5 text-left text-white hover:bg-white/10 transition-colors text-sm" data-lang="it" data-label="IT" role="menuitem">
                <span class="lang-check-cell w-4 flex-shrink-0 flex items-center justify-center"></span>
                Italiano
              </button>
              <button type="button" class="lang-option w-full flex items-center gap-2 px-4 py-2.5 text-left text-white hover:bg-white/10 transition-colors text-sm" data-lang="id" data-label="ID" role="menuitem">
                <span class="lang-check-cell w-4 flex-shrink-0 flex items-center justify-center"></span>
                Bahasa Indonesia
              </button>
              <button type="button" class="lang-option w-full flex items-center gap-2 px-4 py-2.5 text-left text-white hover:bg-white/10 transition-colors text-sm" data-lang="pt" data-label="PT" role="menuitem">
                <span class="lang-check-cell w-4 flex-shrink-0 flex items-center justify-center"></span>
                Português
              </button>
            </div>
          </div>
          <a href="https://birzont.ai/login" target="_blank" rel="noopener noreferrer" id="desktop-start-btn" class="px-4 py-1.5 font-bold rounded-xl transition-all duration-300 whitespace-nowrap text-[0.9rem] bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-black inline-block text-center leading-tight">
            Log in
          </a>
        </div>
      </div>
    </header>
    <div id="mobile-menu" class="fixed top-[48px] left-0 w-full bg-white text-black z-40 shadow-lg transform transition-all duration-300 ease-in-out -translate-y-full opacity-0">
      <div class="py-4 px-6">
        <a href="index.html" class="block py-3 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50">Home</a>
        <a href="https://birzont.ai/pricing" target="_blank" rel="noopener noreferrer" class="block py-3 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50">Pricing</a>
        <a href="about.html" class="block py-3 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50">Company</a>
        <a href="blog.html" class="block py-3 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50">Blog</a>
        <a href="career.html" class="block py-3 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50">Careers</a>
        <div class="mt-4 pt-2 flex flex-col gap-2">
          <button type="button" id="mobile-lang-btn" class="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span id="mobile-lang-label">EN</span>
          </button>
          <a href="https://birzont.ai/login" target="_blank" rel="noopener noreferrer" class="w-full px-5 py-2.5 font-bold rounded-xl bg-black text-white transition-all duration-300 inline-block text-center text-[0.9rem]">Log in</a>
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

  const CHECK_SVG = '<svg class="lang-check w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';

  function initLangDropdown() {
    const langBtn = document.getElementById('lang-btn');
    const dropdown = document.getElementById('lang-dropdown');
    const langLabel = document.getElementById('lang-label');
    const mobileLangBtn = document.getElementById('mobile-lang-btn');
    const mobileLangLabel = document.getElementById('mobile-lang-label');

    if (!langBtn || !dropdown) return;

    function closeDropdown() {
      dropdown.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-4px]');
      dropdown.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      langBtn.setAttribute('aria-expanded', 'false');
    }

    function openDropdown() {
      dropdown.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-[-4px]');
      dropdown.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      langBtn.setAttribute('aria-expanded', 'true');
    }

    function setSelected(option) {
      document.querySelectorAll('.lang-option').forEach((opt) => {
        opt.classList.remove('selected', 'bg-white/5');
        const cell = opt.querySelector('.lang-check-cell');
        if (cell) cell.innerHTML = '';
      });
      option.classList.add('selected', 'bg-white/5');
      const cell = option.querySelector('.lang-check-cell');
      if (cell) cell.innerHTML = CHECK_SVG;

      const label = option.dataset.label;
      if (langLabel) langLabel.textContent = label;
      if (mobileLangLabel) mobileLangLabel.textContent = label;

      const lang = option.dataset.lang;
      try { localStorage.setItem('birzont-lang', lang); } catch (_) {}
    }

    function toggleDropdown() {
      const isOpen = dropdown.classList.contains('opacity-100');
      if (isOpen) closeDropdown();
      else openDropdown();
    }

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    if (mobileLangBtn) {
      mobileLangBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown();
      });
    }

    dropdown.querySelectorAll('.lang-option').forEach((opt) => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        setSelected(opt);
        closeDropdown();
      });
    });

    document.addEventListener('click', () => closeDropdown());
    dropdown.addEventListener('click', (e) => e.stopPropagation());

    const saved = typeof localStorage !== 'undefined' && localStorage.getItem('birzont-lang');
    if (saved) {
      const opt = dropdown.querySelector(`.lang-option[data-lang="${saved}"]`);
      if (opt) setSelected(opt);
    }
  }

  function injectNavbar() {
    const app = document.getElementById('app');
    if (!app || document.getElementById('navbar')) return;

    const template = document.createElement('template');
    template.innerHTML = NAVBAR_TEMPLATE.trim();

    const fragment = template.content.cloneNode(true);
    app.insertBefore(fragment, app.firstChild);
    injectNavCard();
    initLangDropdown();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavbar);
  } else {
    injectNavbar();
  }
})();

