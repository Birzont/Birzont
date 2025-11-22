(function () {
  const FOOTER_TEMPLATE = `
    <div class="w-full bg-white">
      <footer class="px-4 md:px-0 md:w-[calc(95%-110px)] max-w-[1506px] mx-auto py-16 text-gray-900">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div class="space-y-6">
            <div class="flex items-center">
              <img alt="Birzont Logo" width="120" height="36" class="object-contain" src="https://birzont.github.io/BirzontArchive/res/birzont_black.png">
            </div>
            <p class="text-gray-600 text-sm">
              Building AI to serve humanity's future.<br>© 2025 Birzont. All rights reserved.
            </p>
            <div class="flex gap-4">
              <a href="http://instagram.com/birzont" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.26 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://x.com/birzont" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/birzont/" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@birzont" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/birzont" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://pinterest.com/birzont/" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.169 1.775 2.169 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@birzont" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://github.com/birzont" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <div class="mt-6">
              <div class="relative inline-block language-selector-wrapper">
                <button type="button" class="language-selector-btn flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-gray-700 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 min-w-[160px] justify-between">
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span class="language-selector-text">🇺🇸 English</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 language-selector-arrow transition-transform duration-200">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div class="language-selector-dropdown absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 z-50 overflow-hidden min-w-[160px]">
                  <button type="button" class="language-option w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2" data-value="en" data-text="🇺🇸 English">
                    <span>🇺🇸</span>
                    <span>English</span>
                  </button>
                  <button type="button" class="language-option w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2" data-value="ko" data-text="🇰🇷 한국어">
                    <span>🇰🇷</span>
                    <span>한국어</span>
                  </button>
                  <button type="button" class="language-option w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2" data-value="zh-CN" data-text="🇨🇳 中文(简体)">
                    <span>🇨🇳</span>
                    <span>中文(简体)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-4 text-black">Company</h3>
            <ul class="space-y-3">
              <li><a href="about.html" class="text-gray-600 hover:text-black transition-colors">About us</a></li>
              <li><a href="index.html#career" class="text-gray-600 hover:text-black transition-colors">Career</a></li>
              <li><a href="index.html#blog" class="text-gray-600 hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" class="text-gray-600 hover:text-black transition-colors">Brand</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-4 text-black">Product</h3>
            <ul class="space-y-3">
              <li><a href="index.html#product" class="text-gray-600 hover:text-black transition-colors">Birzont</a></li>
              <li><a href="#" class="text-gray-600 hover:text-black transition-colors">Bloxer</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-4 text-black">Support</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-600 hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" class="text-gray-600 hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="#" class="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 text-sm mb-4 md:mb-0">© 2025 Birzont Inc. All rights reserved.</p>
          <div class="flex gap-6">
            <a href="#" class="text-gray-600 hover:text-black text-sm transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-600 hover:text-black text-sm transition-colors">Terms of Service</a>
            <a href="#" class="text-gray-600 hover:text-black text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  `;

  function initLanguageSelector() {
    const wrappers = document.querySelectorAll('.language-selector-wrapper');
    
    wrappers.forEach(wrapper => {
      const btn = wrapper.querySelector('.language-selector-btn');
      const dropdown = wrapper.querySelector('.language-selector-dropdown');
      const arrow = wrapper.querySelector('.language-selector-arrow');
      const options = wrapper.querySelectorAll('.language-option');
      const textSpan = wrapper.querySelector('.language-selector-text');

      // Toggle dropdown
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.contains('opacity-100');
        
        // Close all other dropdowns
        document.querySelectorAll('.language-selector-dropdown').forEach(dd => {
          if (dd !== dropdown) {
            dd.classList.remove('opacity-100', 'visible');
            dd.classList.add('opacity-0', 'invisible');
          }
        });
        document.querySelectorAll('.language-selector-arrow').forEach(arr => {
          if (arr !== arrow) {
            arr.classList.remove('rotate-180');
          }
        });

        if (isOpen) {
          dropdown.classList.remove('opacity-100', 'visible');
          dropdown.classList.add('opacity-0', 'invisible');
          arrow.classList.remove('rotate-180');
        } else {
          dropdown.classList.remove('opacity-0', 'invisible');
          dropdown.classList.add('opacity-100', 'visible');
          arrow.classList.add('rotate-180');
        }
      });

      // Select option
      options.forEach(option => {
        option.addEventListener('click', () => {
          const value = option.getAttribute('data-value');
          const text = option.getAttribute('data-text');
          textSpan.textContent = text;
          
          dropdown.classList.remove('opacity-100', 'visible');
          dropdown.classList.add('opacity-0', 'invisible');
          arrow.classList.remove('rotate-180');
          
          // Update active state
          options.forEach(opt => opt.classList.remove('bg-gray-100', 'font-medium'));
          option.classList.add('bg-gray-100', 'font-medium');
        });
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
          dropdown.classList.remove('opacity-100', 'visible');
          dropdown.classList.add('opacity-0', 'invisible');
          arrow.classList.remove('rotate-180');
        }
      });
    });
  }

  function injectFooter() {
    const app = document.getElementById('app');
    if (!app || document.getElementById('footer-injected')) return;

    const template = document.createElement('template');
    template.innerHTML = FOOTER_TEMPLATE.trim();

    const fragment = template.content.cloneNode(true);
    app.appendChild(fragment);
    
    // Mark as injected to prevent duplicates
    const footerDiv = app.querySelector('.w-full.bg-white:last-child');
    if (footerDiv) {
      footerDiv.id = 'footer-injected';
    }

    // Initialize language selector
    initLanguageSelector();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }
})();

