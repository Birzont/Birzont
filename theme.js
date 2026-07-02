(function () {
  const STORAGE_KEY = 'birzont-theme';

  function getStoredTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (_) {}
    return null;
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getTheme() {
    return getStoredTheme() || getSystemTheme();
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }

  applyTheme(getTheme());

  window.BirzontTheme = {
    getTheme,
    toggleTheme() {
      const next = getTheme() === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (_) {}
      applyTheme(next);
      window.dispatchEvent(new CustomEvent('birzont-theme-change', { detail: { theme: next } }));
      return next;
    },
    setTheme(theme) {
      if (theme !== 'light' && theme !== 'dark') return;
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (_) {}
      applyTheme(theme);
      window.dispatchEvent(new CustomEvent('birzont-theme-change', { detail: { theme } }));
    }
  };
})();
