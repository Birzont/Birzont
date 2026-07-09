(function () {
  'use strict';

  const header = document.querySelector('[data-header]');
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const progressBar = document.querySelector('[data-progress-bar]');
  const statusText = document.querySelector('[data-status-text]');

  const STATUSES = ['문서 읽는 중', 'Markdown 변환 중', '에이전트 최신화 중'];

  function initHeader() {
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('header-scrolled', window.scrollY > 20);
      header.classList.toggle('border-b', window.scrollY > 20);
      header.classList.toggle('backdrop-blur-xl', window.scrollY > 20);
      header.classList.toggle('shadow-[0_8px_32px_rgba(0,0,0,0.08)]', window.scrollY > 20);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initMobileMenu() {
    if (!menuBtn || !mobileMenu) return;

    let open = false;

    const setOpen = (next) => {
      open = next;
      menuBtn.setAttribute('aria-expanded', String(open));
      mobileMenu.style.height = open ? 'auto' : '0';
      mobileMenu.style.opacity = open ? '1' : '0';
      menuBtn.innerHTML = open ? iconClose() : iconMenu();
    };

    menuBtn.addEventListener('click', () => setOpen(!open));

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });
  }

  function initFadeIn() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = document.querySelectorAll('[data-fade-in]');

    if (prefersReduced) {
      items.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('animate-fade-in-up');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );

    items.forEach((el) => observer.observe(el));
  }

  function initProgressDemo() {
    if (!progressBar) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      progressBar.style.width = '100%';
      return;
    }

    let statusIndex = 0;
    let width = 0;

    const tick = () => {
      width += 1.2;
      if (width >= 100) {
        width = 0;
        statusIndex = (statusIndex + 1) % STATUSES.length;
        if (statusText) statusText.textContent = STATUSES[statusIndex];
      }
      progressBar.style.width = `${width}%`;
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  function iconMenu() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>';
  }

  function iconClose() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
  }

  initHeader();
  initMobileMenu();
  initFadeIn();
  initProgressDemo();
})();
