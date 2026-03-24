/**
 * Birzont i18n - Language & asset configuration
 *
 * Adding a new language:
 * 1. Add a new key to LANG (e.g. 'es' for Spanish)
 * 2. Copy the structure from 'en' and translate blog.title, blog.subtitle
 * 3. Add images.heroBackground, heroForegroundDesktop, heroForegroundMobile, productSlides
 * 4. Add video.aboutUrl, video.aboutThumbnail (per-language video URLs)
 * 5. For Latin-script languages, add to LATIN_LANGS array for Instrument Serif
 * 6. Add the language to navbar.js and footer.js dropdowns
 */
(function () {
  'use strict';

  const LANG_KEY = 'birzont-lang';
  const LATIN_LANGS = ['en', 'es', 'de', 'fr', 'it', 'id', 'pt'];

  const LANG = {
    en: {
      blog: {
        title: "Birzont's Diverse Stories",
        subtitle: "Sharing the latest insights and stories on AI and technology."
      },
      images: {
        heroBackground: "url('https://mir-s3-cdn-cf.behance.net/project_modules/source/5e882325659471.5634b8c4f0383.gif')",
        heroForegroundDesktop: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F0Dta4%2FdJMcag5iELI%2FAAAAAAAAAAAAAAAAAAAAAIbtCJcnkjIlQX1yCLLsXKHXl-qXKL_otOuIVhGv7VD3%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DXXxRBIydW%252B%252FBKnUsAvUWbi8xITI%253D",
        heroForegroundMobile: "resources/mobile.png",
        productSlides: ["resources/mainp.png", "resources/chainp.png", "resources/boardp.png", "resources/onep.png"]
      },
      video: {
        aboutUrl: "https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1",
        aboutThumbnail: "https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg"
      }
    },
    ko: {
      blog: {
        title: "버존트의 다양한 이야기",
        subtitle: "AI와 기술에 대한 최신 인사이트와 이야기를 공유합니다."
      },
      images: {
        heroBackground: "url('https://mir-s3-cdn-cf.behance.net/project_modules/source/5e882325659471.5634b8c4f0383.gif')",
        heroForegroundDesktop: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F0Dta4%2FdJMcag5iELI%2FAAAAAAAAAAAAAAAAAAAAAIbtCJcnkjIlQX1yCLLsXKHXl-qXKL_otOuIVhGv7VD3%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DXXxRBIydW%252B%252FBKnUsAvUWbi8xITI%253D",
        heroForegroundMobile: "resources/mobile.png",
        productSlides: ["resources/mainp.png", "resources/chainp.png", "resources/boardp.png", "resources/onep.png"]
      },
      video: {
        aboutUrl: "https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1",
        aboutThumbnail: "https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg"
      }
    },
    ja: {
      blog: {
        title: "バージョントの多様なストーリー",
        subtitle: "AIとテクノロジーに関する最新の洞察とストーリーを共有します。"
      },
      images: {
        heroBackground: "url('https://mir-s3-cdn-cf.behance.net/project_modules/source/5e882325659471.5634b8c4f0383.gif')",
        heroForegroundDesktop: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F0Dta4%2FdJMcag5iELI%2FAAAAAAAAAAAAAAAAAAAAAIbtCJcnkjIlQX1yCLLsXKHXl-qXKL_otOuIVhGv7VD3%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DXXxRBIydW%252B%252FBKnUsAvUWbi8xITI%253D",
        heroForegroundMobile: "resources/mobile.png",
        productSlides: ["resources/mainp.png", "resources/chainp.png", "resources/boardp.png", "resources/onep.png"]
      },
      video: {
        aboutUrl: "https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1",
        aboutThumbnail: "https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg"
      }
    },
    'zh-CN': {
      blog: {
        title: "Birzont的多元故事",
        subtitle: "分享关于AI与技术的最新见解与故事。"
      },
      images: {
        heroBackground: "url('https://mir-s3-cdn-cf.behance.net/project_modules/source/5e882325659471.5634b8c4f0383.gif')",
        heroForegroundDesktop: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F0Dta4%2FdJMcag5iELI%2FAAAAAAAAAAAAAAAAAAAAAIbtCJcnkjIlQX1yCLLsXKHXl-qXKL_otOuIVhGv7VD3%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DXXxRBIydW%252B%252FBKnUsAvUWbi8xITI%253D",
        heroForegroundMobile: "resources/mobile.png",
        productSlides: ["resources/mainp.png", "resources/chainp.png", "resources/boardp.png", "resources/onep.png"]
      },
      video: {
        aboutUrl: "https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1",
        aboutThumbnail: "https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg"
      }
    },
    'zh-TW': {
      blog: {
        title: "Birzont的多元故事",
        subtitle: "分享關於AI與技術的最新見解與故事。"
      },
      images: {
        heroBackground: "url('https://mir-s3-cdn-cf.behance.net/project_modules/source/5e882325659471.5634b8c4f0383.gif')",
        heroForegroundDesktop: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F0Dta4%2FdJMcag5iELI%2FAAAAAAAAAAAAAAAAAAAAAIbtCJcnkjIlQX1yCLLsXKHXl-qXKL_otOuIVhGv7VD3%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DXXxRBIydW%252B%252FBKnUsAvUWbi8xITI%253D",
        heroForegroundMobile: "resources/mobile.png",
        productSlides: ["resources/mainp.png", "resources/chainp.png", "resources/boardp.png", "resources/onep.png"]
      },
      video: {
        aboutUrl: "https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1",
        aboutThumbnail: "https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg"
      }
    }
  };

  function getLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && LANG[saved]) return saved;
    } catch (_) {}
    return 'en';
  }

  function setLang(lang) {
    if (!LANG[lang]) return;
    try { localStorage.setItem(LANG_KEY, lang); } catch (_) {}
  }

  function isLatinLang(lang) {
    return LATIN_LANGS.indexOf(lang) !== -1;
  }

  function t(lang, key) {
    const keys = key.split('.');
    let obj = LANG[lang] || LANG.en;
    for (const k of keys) {
      obj = obj && obj[k];
    }
    return obj != null ? obj : (LANG.en && (keys.reduce((o, k) => o && o[k], LANG.en)));
  }

  function getImage(lang, key) {
    const img = t(lang, 'images.' + key);
    return img;
  }

  function getVideo(lang, key) {
    return t(lang, 'video.' + key);
  }

  function applyBlogHero(lang) {
    const title = document.querySelector('[data-i18n="blog.title"]');
    const subtitle = document.querySelector('[data-i18n="blog.subtitle"]');
    const useInstrument = isLatinLang(lang);
    if (title) {
      title.textContent = t(lang, 'blog.title');
      title.classList.toggle('font-instrument-heading', useInstrument);
    }
    if (subtitle) {
      subtitle.textContent = t(lang, 'blog.subtitle');
    }
  }

  function applyHeroImages(lang) {
    const canvas = document.getElementById('image-canvas');
    if (!canvas) return;
    const img = LANG[lang] && LANG[lang].images;
    if (!img) return;
    if (img.heroBackground) {
      canvas.style.backgroundImage = img.heroBackground;
    }
    const desktopImg = canvas.querySelector('img.hero-foreground-gif:not(.hero-foreground-mobile)');
    const mobileImg = canvas.querySelector('img.hero-foreground-mobile');
    if (desktopImg && img.heroForegroundDesktop) desktopImg.src = img.heroForegroundDesktop;
    if (mobileImg && img.heroForegroundMobile) mobileImg.src = img.heroForegroundMobile;
  }

  function applyProductSlides(lang) {
    const slides = document.querySelectorAll('#product-carousel-slides .product-slide img');
    const imgs = LANG[lang] && LANG[lang].images && LANG[lang].images.productSlides;
    if (!imgs || !slides.length) return;
    slides.forEach((img, i) => {
      if (imgs[i]) img.src = imgs[i];
    });
  }

  function applyVideo(lang) {
    const thumb = document.getElementById('video-thumbnail');
    if (thumb) {
      const src = getVideo(lang, 'aboutThumbnail');
      if (src) thumb.src = src;
    }
  }

  function applyInstrumentFont() {
    const lang = getLang();
    const useInstrument = isLatinLang(lang);
    document.querySelectorAll('[data-instrument-font]').forEach(el => {
      el.classList.toggle('font-instrument-heading', useInstrument);
    });
  }

  function applyAll(lang) {
    lang = lang || getLang();
    applyBlogHero(lang);
    applyHeroImages(lang);
    applyProductSlides(lang);
    applyVideo(lang);
    applyInstrumentFont();
  }

  window.addEventListener('birzont-lang-change', (e) => {
    const lang = (e.detail && e.detail.lang) || getLang();
    applyAll(lang);
  });

  window.BirzontI18n = {
    LANG,
    getLang,
    setLang,
    t,
    getImage,
    getVideo,
    isLatinLang,
    applyBlogHero,
    applyHeroImages,
    applyProductSlides,
    applyVideo,
    applyInstrumentFont,
    applyAll
  };
})();
