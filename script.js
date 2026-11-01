const root = document.documentElement;
const mode = document.querySelector('.mode');
const themeControl = document.querySelector('.theme-control');
const themeOptions = document.querySelector('.theme-options');
const themeChoices = [...document.querySelectorAll('[data-theme-choice]')];
const cursor = document.querySelector('.cursor');
const progress = document.querySelector('.progress span');

function setTheme(theme) {
  root.dataset.theme = theme;
  const labels = { midnight: 'Midnight', studio: 'Studio', blueprint: 'Blueprint', crimson: 'Crimson' };
  const label = labels[theme];
  mode.setAttribute('aria-label', `Choose theme, current: ${label}`);
  themeChoices.forEach(choice => choice.setAttribute('aria-pressed', String(choice.dataset.themeChoice === theme)));
  document.querySelector('meta[name="theme-color"]').content = { midnight: '#0b101a', studio: '#e9edf1', blueprint: '#101c2c', crimson: '#0b101a' }[theme];
  try { localStorage.setItem('smit-next-theme', theme); } catch (_) {}
}

let savedTheme = 'midnight';
try { savedTheme = localStorage.getItem('smit-next-theme') || 'midnight'; } catch (_) {}
if (savedTheme === 'dark') savedTheme = 'midnight';
if (savedTheme === 'light') savedTheme = 'studio';
setTheme(['midnight', 'studio', 'blueprint', 'crimson'].includes(savedTheme) ? savedTheme : 'midnight');

function closeThemeOptions() {
  themeOptions.hidden = true;
  mode.setAttribute('aria-expanded', 'false');
}

mode.addEventListener('click', () => {
  const opening = themeOptions.hidden;
  themeOptions.hidden = !opening;
  mode.setAttribute('aria-expanded', String(opening));
});
themeChoices.forEach(choice => choice.addEventListener('click', () => {
  setTheme(choice.dataset.themeChoice);
  closeThemeOptions();
  mode.focus();
}));
document.addEventListener('pointerdown', event => {
  if (!themeControl.contains(event.target)) closeThemeOptions();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !themeOptions.hidden) {
    closeThemeOptions();
    mode.focus();
  }
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const railLinks = [...document.querySelectorAll('[data-rail]')];
const railLabel = document.querySelector('.scroll-rail-label');
const chapters = [
  { id: 'top', label: '01 / INTRO' },
  { id: 'proof', label: '02 / PROOF' },
  { id: 'trajectory', label: '03 / DIRECTION' },
  { id: 'background', label: '04 / BACKGROUND' },
  { id: 'connect', label: '05 / CONNECT' }
].map(chapter => ({ ...chapter, element: document.getElementById(chapter.id) }));
const projects = [...document.querySelectorAll('.project')];
const systemMap = document.querySelector('.system-map');
let scrollTick = false;

function updateScrollScene() {
  const remaining = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${remaining > 0 ? window.scrollY / remaining * 100 : 0}%`;

  const marker = window.innerHeight * .42;
  let current = chapters[0];
  for (const chapter of chapters) {
    if (chapter.element.getBoundingClientRect().top <= marker) current = chapter;
  }
  railLabel.textContent = current.label;
  railLinks.forEach(link => {
    if (link.dataset.rail === current.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  document.querySelectorAll('.header nav a').forEach(link => {
    if (link.getAttribute('href') === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });

  if (!reduceMotion.matches) {
    const heroScroll = Math.max(0, Math.min(48, -document.getElementById('top').getBoundingClientRect().top * .11));
    systemMap.style.setProperty('--hero-shift', `${heroScroll}px`);
    for (const project of projects) {
      const rect = project.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      project.style.setProperty('--project-progress', `${ratio * 100}%`);
      project.style.setProperty('--visual-drift', `${(ratio - .5) * 22}px`);
      project.classList.toggle('is-active', rect.top < window.innerHeight * .65 && rect.bottom > window.innerHeight * .3);
    }
  }
  scrollTick = false;
}

function requestScrollUpdate() {
  if (!scrollTick) {
    scrollTick = true;
    requestAnimationFrame(updateScrollScene);
  }
}
window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate);
reduceMotion.addEventListener('change', requestScrollUpdate);
requestScrollUpdate();

if (window.matchMedia('(pointer: fine)').matches && cursor) {
  const core = cursor.querySelector('.cursor-core');
  let pointerX = -100;
  let pointerY = -100;
  let frameX = -100;
  let frameY = -100;
  let visible = false;
  let frameRequest = 0;

  function drawCursor() {
    const ease = reduceMotion.matches ? 1 : .42;
    frameX += (pointerX - frameX) * ease;
    frameY += (pointerY - frameY) * ease;
    cursor.style.left = `${frameX}px`;
    cursor.style.top = `${frameY}px`;
    core.style.left = `${pointerX - frameX}px`;
    core.style.top = `${pointerY - frameY}px`;
    if (Math.abs(pointerX - frameX) > .1 || Math.abs(pointerY - frameY) > .1) {
      frameRequest = requestAnimationFrame(drawCursor);
    } else {
      frameRequest = 0;
    }
  }

  function hideCursor() {
    cursor.classList.remove('visible', 'hover', 'pressed');
    visible = false;
  }

  window.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!visible) {
      frameX = pointerX;
      frameY = pointerY;
      visible = true;
    }
    cursor.classList.add('visible');
    cursor.classList.toggle('hover', Boolean(event.target.closest('a, button, summary, [role="button"]')));
    cursor.classList.toggle('on-accent', Boolean(event.target.closest('.thesis, .map-next, .solid-button')));
    if (!frameRequest) frameRequest = requestAnimationFrame(drawCursor);
  }, { passive: true });

  window.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch') return;
    cursor.classList.add('pressed');
    window.setTimeout(() => cursor.classList.remove('pressed'), 180);
  });
  document.addEventListener('mouseleave', hideCursor);
  window.addEventListener('blur', hideCursor);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) hideCursor();
  });
  root.classList.add('custom-cursor-ready');
}
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const sections = document.querySelectorAll('.thesis-grid, .section-top, .project, .work-band-grid, .trajectory-grid, .background-grid, .time-item, .connect-grid');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('seen');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: .06 });
  sections.forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
  });
}
