(function () {
  'use strict';

  function getFlashlightRadius() {
    return window.matchMedia('(max-width: 767px)').matches ? 100 : 130;
  }

  function applyFlashlightMask(overlay, x, y) {
    const radius = getFlashlightRadius();
    const gradient = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0, transparent 58%, #000 100%)`;
    overlay.style.webkitMaskImage = gradient;
    overlay.style.maskImage = gradient;
  }

  function initFlashlight(overlay) {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;

    const update = (x, y) => {
      mx = x;
      my = y;
      applyFlashlightMask(overlay, mx, my);
    };

    update(mx, my);

    window.addEventListener('mousemove', (e) => update(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      if (touch) update(touch.clientX, touch.clientY);
    }, { passive: true });
    window.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      if (touch) update(touch.clientX, touch.clientY);
    }, { passive: true });
    window.addEventListener('resize', () => applyFlashlightMask(overlay, mx, my));
  }

  function initNavbarForDarkPage() {
    const header = document.getElementById('navbar');
    if (!header) return;

    header.classList.add('bg-transparent');
    const logoImg = document.getElementById('logo-img');
    if (logoImg) logoImg.src = 'https://birzont.github.io/BirzontArchive/res/birzont_white.png';

    header.querySelectorAll('#desktop-nav a, #lang-btn, #desktop-start-btn, #mobile-menu-btn').forEach((el) => {
      el.classList.add('text-white');
      el.classList.remove('text-gray-900', 'text-black');
    });

    const startBtn = document.getElementById('desktop-start-btn');
    if (startBtn) {
      startBtn.classList.add('bg-transparent', 'text-white', 'border-white');
      startBtn.classList.remove('bg-black', 'border-transparent');
    }

    window.addEventListener('scroll', () => {
      header.classList.remove('backdrop-blur-md', 'bg-white', 'text-black', 'shadow-lg', 'shadow-md');
      header.classList.add('bg-transparent');
      if (logoImg) logoImg.src = 'https://birzont.github.io/BirzontArchive/res/birzont_white.png';
      header.querySelectorAll('#desktop-nav a, #lang-btn, #desktop-start-btn, #mobile-menu-btn').forEach((el) => {
        el.classList.add('text-white');
        el.classList.remove('text-gray-900', 'text-black');
      });
    }, { passive: true });
  }

  function init() {
    const overlay = document.getElementById('flashlight-overlay');
    if (!overlay) return;

    initFlashlight(overlay);
    initNavbarForDarkPage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
