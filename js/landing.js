(function () {
  'use strict';

  const CHECKLIST_STORAGE_KEY = 'birzont-checklist-items';
  const CHECKLIST_UPDATED_EVENT = 'birzont-checklist-updated';

  const TEAM_CHECKLIST_ITEMS = [
    'AI에게 제품 설명을 매번 붙여넣는다',
    '팀원마다 AI 답변이 다르다',
    '회의록과 문서가 AI에 반영되지 않는다',
    'Cursor와 Claude를 쓰지만 팀 지식은 따로 논다',
    '신규 팀원이 팀 맥락을 파악하는 데 오래 걸린다',
  ];

  const ENGINE_STEPS = [
    '문서 읽는 중',
    '핵심 맥락 추출',
    '에이전트용 구조화',
    'Markdown 생성',
    '작업공간 반영',
  ];

  const header = document.querySelector('[data-header]');
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const progressBar = document.querySelector('[data-progress-bar]');
  const statusText = document.querySelector('[data-status-text]');

  function saveChecklistItems(items) {
    sessionStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent(CHECKLIST_UPDATED_EVENT));
  }

  function loadChecklistItems() {
    try {
      const raw = sessionStorage.getItem(CHECKLIST_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter((v) => typeof v === 'string') : [];
    } catch {
      return [];
    }
  }

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

    mobileMenu.querySelectorAll('a, button[data-scroll]').forEach((link) => {
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
    if (!progressBar || !statusText) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const engineStepEls = document.querySelectorAll('[data-engine-step]');

    if (prefersReduced) {
      progressBar.style.width = '100%';
      if (engineStepEls.length) {
        engineStepEls.forEach((el, i) => {
          el.classList.toggle('is-active', i === engineStepEls.length - 1);
          el.classList.toggle('is-done', i < engineStepEls.length - 1);
        });
      }
      return;
    }

    let engineIndex = 0;
    let width = 0;
    let lastTick = 0;

    const tick = (now) => {
      if (now - lastTick > 40) {
        lastTick = now;
        width += 2;
        if (width >= 100) {
          width = 0;
          engineIndex = (engineIndex + 1) % ENGINE_STEPS.length;
          statusText.textContent = ENGINE_STEPS[engineIndex];
          engineStepEls.forEach((el, i) => {
            el.classList.toggle('is-active', i === engineIndex);
            el.classList.toggle('is-done', i < engineIndex);
          });
          document.querySelectorAll('[data-pipeline-step]').forEach((el) => {
            const step = Number(el.dataset.pipelineStep);
            const active =
              engineIndex >= 4 ? 2 : engineIndex >= 1 ? 1 : 0;
            el.classList.toggle('is-active', step === active);
          });
        }
        progressBar.style.width = `${width}%`;
      }
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  function initChecklist() {
    const list = document.querySelector('[data-checklist]');
    const diagnosisBtn = document.querySelector('[data-diagnosis-btn]');
    const hint = document.querySelector('[data-checklist-hint]');
    if (!list) return;

    const checked = new Set();

    list.querySelectorAll('[data-checklist-item]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = Number(btn.dataset.checklistItem);
        const box = btn.querySelector('[data-checklist-box]');
        if (checked.has(index)) {
          checked.delete(index);
          box.classList.remove('is-checked');
          box.textContent = '';
        } else {
          checked.add(index);
          box.classList.add('is-checked');
          box.textContent = '✓';
        }
        if (hint) {
          if (checked.size >= 3) {
            hint.hidden = false;
            hint.textContent = `${checked.size}개 해당 — 팀 AI 활용 진단을 추천합니다.`;
          } else {
            hint.hidden = true;
          }
        }
      });
    });

    if (diagnosisBtn) {
      diagnosisBtn.addEventListener('click', () => {
        const selected = TEAM_CHECKLIST_ITEMS.filter((_, i) => checked.has(i));
        saveChecklistItems(selected);
        document.getElementById('beta-form')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  function renderChecklistSummary(items) {
    const summary = document.querySelector('[data-checklist-summary]');
    const list = document.querySelector('[data-checklist-summary-list]');
    const painPoint = document.querySelector('[data-pain-point]');
    if (!summary || !list) return;

    if (!items.length) {
      summary.classList.remove('is-visible');
      return;
    }

    summary.classList.add('is-visible');
    list.innerHTML = items
      .map(
        (item) =>
          `<li><span>✓</span><span>${item}</span></li>`
      )
      .join('');

    if (painPoint && !painPoint.value.trim()) {
      painPoint.value = items.map((item) => `• ${item}`).join('\n');
    }
  }

  function initBetaForm() {
    const form = document.querySelector('[data-beta-form]');
    if (!form) return;

    const syncChecklist = () => renderChecklistSummary(loadChecklistItems());
    syncChecklist();
    window.addEventListener(CHECKLIST_UPDATED_EVENT, syncChecklist);

    form.querySelectorAll('[data-chip-group]').forEach((group) => {
      const chips = group.querySelectorAll('[data-chip]');
      chips.forEach((chip) => {
        chip.addEventListener('click', () => {
          chip.classList.toggle('is-active');
        });
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        teamSize: form.querySelector('[name="team-size"]')?.value || '',
        aiTools: [...form.querySelectorAll('[data-chip-group="ai-tools"] [data-chip].is-active')].map(
          (el) => el.textContent.trim()
        ),
        knowledgeSources: [
          ...form.querySelectorAll('[data-chip-group="knowledge"] [data-chip].is-active'),
        ].map((el) => el.textContent.trim()),
        painPoint: form.querySelector('[name="pain-point"]')?.value || '',
        betaInterest: form.querySelector('[name="beta-interest"]')?.value || '',
        email: form.querySelector('[name="email"]')?.value || '',
        checklistItems: loadChecklistItems(),
      };
      console.log('[BetaForm] submission:', data);
      alert('진단 신청이 접수되었습니다. 곧 연락드리겠습니다.');
      const submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '접수 완료';
      }
    });
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
  initChecklist();
  initBetaForm();
})();
