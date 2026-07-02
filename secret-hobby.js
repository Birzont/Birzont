(function () {
  'use strict';

  const IMAGES = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8tVfvUJhz5YJE2IXpR7XB7kfFvQf8kiHa3tmlNmiOA&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_H73wQZ2Go40yXGP_wZwQWWhCVEazPBHx3ih466Lzjw&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPFMJEZ3eV3XMLoJhPdfM0rdRNGAa2TKp74vfSCQOyg&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3fba48z3bnUSy4EEWzln3QpmfG4LxWegooRrsjPH0A&s=10'
  ];

  const PHRASES = [
    '바보',
    '멍청이',
    '김기훈 실력 아이언 ㅋㅋ',
    '박이레 털보',
    '정진우 찐따'
  ];

  const SCATTER = [
    { type: 'img', src: IMAGES[0], top: '14%', left: '7%', size: 88, rotate: -14 },
    { type: 'text', text: PHRASES[0], top: '18%', left: '58%', rotate: 8, size: '1.35rem' },
    { type: 'img', src: IMAGES[1], top: '32%', left: '78%', size: 96, rotate: 11 },
    { type: 'text', text: PHRASES[1], top: '38%', left: '22%', rotate: -6, size: '1.5rem' },
    { type: 'img', src: IMAGES[2], top: '52%', left: '12%', size: 84, rotate: 6 },
    { type: 'text', text: PHRASES[2], top: '48%', left: '64%', rotate: -4, size: '1.15rem' },
    { type: 'img', src: IMAGES[3], top: '66%', left: '72%', size: 92, rotate: -9 },
    { type: 'text', text: PHRASES[3], top: '62%', left: '38%', rotate: 12, size: '1.25rem' },
    { type: 'img', src: IMAGES[0], top: '78%', left: '48%', size: 76, rotate: 15 },
    { type: 'text', text: PHRASES[4], top: '74%', left: '8%', rotate: -10, size: '1.2rem' },
    { type: 'text', text: PHRASES[0], top: '28%', left: '42%', rotate: 5, size: '1rem' },
    { type: 'img', src: IMAGES[2], top: '22%', left: '86%', size: 70, rotate: -7 },
    { type: 'text', text: PHRASES[1], top: '56%', left: '52%', rotate: -8, size: '1.1rem' },
    { type: 'img', src: IMAGES[1], top: '84%', left: '82%', size: 80, rotate: 4 },
    { type: 'text', text: PHRASES[2], top: '88%', left: '24%', rotate: 3, size: '1.05rem' }
  ];

  function buildContent(container) {
    SCATTER.forEach((item) => {
      const el = document.createElement('div');
      el.className = item.type === 'img' ? 'secret-hobby-item secret-hobby-image' : 'secret-hobby-item secret-hobby-text';
      el.style.top = item.top;
      el.style.left = item.left;
      el.style.transform = `rotate(${item.rotate}deg)`;

      if (item.type === 'img') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = '';
        img.width = item.size;
        img.height = item.size;
        img.loading = 'lazy';
        img.decoding = 'async';
        el.appendChild(img);
      } else {
        el.textContent = item.text;
        el.style.fontSize = item.size;
      }

      container.appendChild(el);
    });
  }

  function initFlashlight(overlay) {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;

    const update = (x, y) => {
      mx = x;
      my = y;
      overlay.style.setProperty('--mx', `${mx}px`);
      overlay.style.setProperty('--my', `${my}px`);
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
  }

  function init() {
    const container = document.getElementById('secret-content');
    const overlay = document.getElementById('flashlight-overlay');
    if (!container || !overlay) return;

    buildContent(container);
    initFlashlight(overlay);
    initNavbarForDarkPage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
