/* Selected homepage entrances. Content has no hidden CSS/base state. */
(function () {
  'use strict';
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const groups = [], running = new Map();
  // const standard = 760, illustration = 920, stagger = 150;
  const standard = 1500, illustration = 200, stagger = 150;
  const item = (el, delay = 0, duration = standard) => ({ el, delay, duration });
  function add(root, items) {
    items = items.filter(value => value.el);
    if (root && items.length) groups.push({ root, items, armed: true });
  }
  function shell(card) {
    const wrapper = document.createElement('div');
    wrapper.className = 'scroll-card-shell';
    card.before(wrapper);
    wrapper.append(card);
    return wrapper;
  }
  const panel = document.querySelector('.hero-panel');
  if (panel) add(panel, [
    item(panel.querySelector('.hero-panel-brand')),
    item(panel.querySelector('h2')),
    ...[...panel.querySelectorAll('.path-list li')].map((el, index) => item(el, stagger * (index + 1)))
  ]);
  const academics = document.querySelector('#programs');
  if (academics) {
    const heading = academics.querySelector('.section-heading');
    add(heading, [item(heading)]);
    const levels = academics.querySelector('.discovery-tabs');
    add(levels, [item(levels, stagger)]);
    academics.querySelectorAll('#program-grid > .program-card').forEach((card, index) => {
      const wrapper = shell(card);
      add(wrapper, [item(wrapper, stagger * (index + 1))]);
    });
  }
  const why = document.querySelector('.model-grid');
  if (why) {
    const copy = why.querySelector('.model-copy');
    if (copy) add(copy, [
      item(copy.querySelector('.section-kicker')), item(copy.querySelector('h2')),
      ...[...copy.querySelectorAll(':scope > p, :scope > a')].map(el => item(el, stagger))
    ]);
    why.querySelectorAll('#principles-grid > .principle-card').forEach((card, index) => {
      const wrapper = shell(card);
      add(wrapper, [item(wrapper, stagger * (index + 1))]);
    });
  }
  document.querySelectorAll('[data-scroll-visual]').forEach(el => add(el, [item(el, 0, illustration)]));
  const byRoot = new Map(groups.map(group => [group.root, group]));
  function settle(group) {
    running.get(group)?.forEach(animation => animation.cancel());
    running.delete(group);
  }
  function play(group) {
    settle(group);
    if (reduced.matches || group.root.contains(document.activeElement)) return;
    const animations = [];
    running.set(group, animations);
    try {
      group.items.forEach(({ el, delay, duration }) => {
        // Do not move a control while a user is already interacting with it.
        if (el.contains(document.activeElement)) return;
        const animation = el.animate([
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration, delay, easing: 'cubic-bezier(.22, .7, .3, 1)', fill: 'backwards' });
        animations.push(animation);
        animation.onfinish = () => {
          const index = animations.indexOf(animation);
          if (index !== -1) animations.splice(index, 1);
          if (!animations.length) running.delete(group);
        };
      });
    } catch (_) {
      // Any partial animation failure leaves the normal visible layout intact.
      settle(group);
    }
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const group = byRoot.get(entry.target);
      if (!entry.isIntersecting) {
        // Only reset after fully leaving the viewport plus an 80px buffer.
        group.armed = true;
        settle(group);
      } else if (group.armed && entry.intersectionRect.height >= Math.min(32, entry.boundingClientRect.height)) {
        group.armed = false;
        play(group);
      }
    });
  // Wait for a 32px foothold before moving a root by 20px; this avoids
  // animation-driven enter/exit loops at the observer's outer boundary.
  }, { rootMargin: '80px 0px', threshold: [0, .05, .1, .2, .4, .6, .8, 1] });
  groups.forEach(group => {
    observer.observe(group.root);
    // Keep focus, taps and clicks immediate, even during a delayed entrance.
    ['focusin', 'pointerdown'].forEach(event => group.root.addEventListener(event, () => settle(group)));
  });
  reduced.addEventListener('change', () => {
    if (reduced.matches) groups.forEach(settle);
  });
})();
