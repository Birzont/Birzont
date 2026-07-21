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
    '팀 지식 읽기',
    '핵심 맥락 추출',
    '에이전트 지식 구조화',
    '업무 규칙 및 도구 구성',
    'AI 에이전트 생성',
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
    const agentCard = document.querySelector('[data-agent-card]');
    const agentChecks = document.querySelectorAll('[data-agent-check]');
    const buildSteps = document.querySelectorAll('[data-build-step]');
    const statusLabel = document.querySelector('[data-agent-status-label]');
    const statusMeta = document.querySelector('[data-agent-status-meta]');

    const setAgentReady = (ready) => {
      if (!agentCard) return;
      agentCard.classList.toggle('is-ready', ready);
      if (statusLabel) statusLabel.textContent = ready ? '생성 완료' : '생성 중';
      if (statusMeta) statusMeta.textContent = ready ? '방금 업데이트됨' : '처리 중…';

      if (!ready) {
        agentChecks.forEach((el) => el.classList.remove('is-visible'));
        return;
      }

      agentChecks.forEach((el, i) => {
        window.setTimeout(() => {
          if (agentCard.classList.contains('is-ready')) {
            el.classList.add('is-visible');
          }
        }, i * 90);
      });
    };

    const syncBuildFlow = (engineIndex) => {
      // Map engine steps → build pills: 0-1 → first, 2 → second, 3 → third, 4 → fourth
      const doneCount =
        engineIndex >= 4 ? 4 : engineIndex >= 3 ? 3 : engineIndex >= 2 ? 2 : engineIndex >= 0 ? 1 : 0;
      buildSteps.forEach((el, i) => {
        el.classList.toggle('is-done', i < doneCount);
        el.classList.toggle('is-active', i === doneCount - 1 || (doneCount === 4 && i === 3));
      });
    };

    const applyEngineIndex = (engineIndex) => {
      statusText.textContent = ENGINE_STEPS[engineIndex];
      engineStepEls.forEach((el, i) => {
        el.classList.toggle('is-active', i === engineIndex);
        el.classList.toggle('is-done', i < engineIndex);
      });
      document.querySelectorAll('[data-pipeline-step]').forEach((el) => {
        const step = Number(el.dataset.pipelineStep);
        const active = engineIndex >= 4 ? 2 : engineIndex >= 1 ? 1 : 0;
        el.classList.toggle('is-active', step === active);
      });
      syncBuildFlow(engineIndex);
      setAgentReady(engineIndex === ENGINE_STEPS.length - 1);
    };

    if (prefersReduced) {
      progressBar.style.width = '100%';
      applyEngineIndex(ENGINE_STEPS.length - 1);
      agentChecks.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    let engineIndex = 0;
    let width = 0;
    let lastTick = 0;
    applyEngineIndex(0);

    const tick = (now) => {
      if (now - lastTick > 40) {
        lastTick = now;
        width += 2;
        if (width >= 100) {
          width = 0;
          engineIndex = (engineIndex + 1) % ENGINE_STEPS.length;
          applyEngineIndex(engineIndex);
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

  const DIAGNOSIS_SUBMITTED_KEY = 'birzont-diagnosis-submitted';
  const SUBMIT_LABEL_DEFAULT = '진단 신청하기';
  const SUBMIT_LABEL_SAVING = '저장 중...';

  function getSubmitLabelEl(btn) {
    return btn.querySelector('[data-submit-label]') || btn.querySelector('.relative.z-10') || btn;
  }

  function setSubmitButtonState(btn, { disabled, label }) {
    if (!btn) return;
    btn.disabled = Boolean(disabled);
    const labelEl = getSubmitLabelEl(btn);
    if (labelEl) labelEl.textContent = label;
  }

  function readFieldValue(primaryId, legacyNames) {
    const byId = document.getElementById(primaryId);
    if (byId && typeof byId.value === 'string' && byId.value.trim()) {
      return byId.value.trim();
    }

    for (let i = 0; i < legacyNames.length; i += 1) {
      const el = document.querySelector('[name="' + legacyNames[i] + '"]');
      if (el && typeof el.value === 'string' && el.value.trim()) {
        return el.value.trim();
      }
    }

    if (byId && typeof byId.value === 'string') {
      return byId.value.trim();
    }

    return '';
  }

  function collectBetaFormData(form) {
    const biggestProblemElement = document.getElementById('biggestProblem');
    const betaUsageIntentElement = document.getElementById('betaUsageIntent');

    const biggestProblem =
      typeof biggestProblemElement?.value === 'string'
        ? biggestProblemElement.value.trim()
        : readFieldValue('biggestProblem', ['biggestProblem', 'pain-point', 'painPoint']);

    const betaUsageIntent =
      typeof betaUsageIntentElement?.value === 'string'
        ? betaUsageIntentElement.value.trim()
        : readFieldValue('betaUsageIntent', [
            'betaUsageIntent',
            'beta-interest',
            'betaInterest',
          ]);

    return {
      teamSize: form.querySelector('[name="team-size"]')?.value || '',
      aiTools: [...form.querySelectorAll('[data-chip-group="ai-tools"] [data-chip].is-active')].map(
        (el) => el.textContent.trim()
      ),
      knowledgeSources: [
        ...form.querySelectorAll('[data-chip-group="knowledge"] [data-chip].is-active'),
      ].map((el) => el.textContent.trim()),
      biggestProblem,
      betaUsageIntent,
      email: form.querySelector('[name="email"]')?.value || '',
      checklistItems: loadChecklistItems(),
    };
  }

  function initBetaForm() {
    const form = document.querySelector('[data-beta-form]');
    if (!form) return;

    const diagnosisApi = window.BirzontDiagnosis;
    if (!diagnosisApi) {
      console.error('[BetaForm] BirzontDiagnosis 모듈이 로드되지 않았습니다.');
    }

    // 이전 세션에서 막혀 있던 제출 잠금 해제 — 반복 신청 허용
    try {
      sessionStorage.removeItem(DIAGNOSIS_SUBMITTED_KEY);
    } catch (_) {}

    let isSubmitting = false;
    const submitBtn = form.querySelector('[type="submit"]');
    setSubmitButtonState(submitBtn, { disabled: false, label: SUBMIT_LABEL_DEFAULT });

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

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      // 전송 중인 중복 클릭만 막고, 완료 후에는 다시 신청 가능
      if (isSubmitting) return;
      if (!diagnosisApi) {
        alert('진단 신청을 처리할 수 없습니다. 잠시 후 다시 시도해 주세요.');
        return;
      }

      isSubmitting = true;
      setSubmitButtonState(submitBtn, { disabled: true, label: SUBMIT_LABEL_SAVING });

      const formData = collectBetaFormData(form);
      const submissionId = diagnosisApi.createSubmissionId();
      const existingPayload = diagnosisApi.createDiagnosisPayload(formData, submissionId);

      // 제출 직전: 실제 DOM value를 다시 읽어 최상위 key로 확정
      const biggestProblemElement = document.getElementById('biggestProblem');
      const betaUsageIntentElement = document.getElementById('betaUsageIntent');
      const biggestProblem =
        typeof biggestProblemElement?.value === 'string'
          ? biggestProblemElement.value.trim()
          : formData.biggestProblem || '';
      const betaUsageIntent =
        typeof betaUsageIntentElement?.value === 'string'
          ? betaUsageIntentElement.value.trim()
          : formData.betaUsageIntent || '';

      console.log('[Birzont actual form values]', {
        biggestProblem,
        betaUsageIntent,
      });

      if (!biggestProblem) {
        console.warn('[Birzont] 가장 불편한 문제 값이 제출 직전에 비어 있습니다.');
      }
      if (!betaUsageIntent) {
        console.warn('[Birzont] 베타 사용 의향 값이 제출 직전에 비어 있습니다.');
      }

      const payload = Object.assign({}, existingPayload, {
        biggestProblem: biggestProblem || '',
        betaUsageIntent: betaUsageIntent || '',
        painPoint: biggestProblem || '',
        betaInterest: betaUsageIntent || '',
      });

      // fetch에 넘기는 최종 body (평탄 8열 구조)
      const sheetPayload =
        typeof diagnosisApi.toSheetPayload === 'function'
          ? diagnosisApi.toSheetPayload(payload)
          : payload;

      console.log('[Birzont actual payload]', {
        biggestProblem: sheetPayload.biggestProblem,
        betaUsageIntent: sheetPayload.betaUsageIntent,
        payloadKeys: Object.keys(sheetPayload),
      });

      let saveFailed = false;
      try {
        await diagnosisApi.submitDiagnosis(sheetPayload);
      } catch (error) {
        saveFailed = true;
        console.error('진단 결과 저장 오류:', error && error.message ? error.message : error);
      } finally {
        isSubmitting = false;
        setSubmitButtonState(submitBtn, { disabled: false, label: SUBMIT_LABEL_DEFAULT });
      }

      if (saveFailed) {
        alert('진단 신청은 접수되었습니다. 결과 저장 중 오류가 발생했습니다.');
      } else {
        alert('진단 신청이 접수되었습니다. 곧 연락드리겠습니다.');
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
