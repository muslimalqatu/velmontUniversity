(function () {
  "use strict";

  const content = window.VELMONT_CONTENT;
  if (!content) return;

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function comingSoonUrl(label) {
    return `coming-soon.html?section=${encodeURIComponent(label)}`;
  }

  function route(label) {
    return content.routes[label] || comingSoonUrl(label);
  }

  function escapeHTML(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));
  }

  function renderChrome() {
    const header = qs("#site-header-slot");
    const footer = qs("#site-footer-slot");
    if (header) header.innerHTML = `  <div class="status-strip" aria-label="University development status">
    <div class="container"><span class="status-dot" aria-hidden="true"></span><strong id="status-main"></strong><span aria-hidden="true">•</span><span id="status-detail"></span></div>
  </div>

  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="Velmont University home">
        <img src="assets/brand/velmont-header.webp" width="600" height="475" alt="Velmont University — Turning Knowledge Into Practice">
      </a>

      <nav id="desktop-nav" class="desktop-nav" aria-label="Primary navigation"></nav>

      <div class="header-actions">
        <a class="search-icon" href="search.html" aria-label="Search Velmont University" title="Search"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true" focusable="false"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m15.5 15.5 5 5"></path></svg></a>
        <button id="menu-toggle" class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation menu"><span></span></button>
      </div>
    </div>
  </header>

  <nav id="mobile-menu" class="mobile-menu" hidden inert aria-label="Mobile navigation">
    <div id="mobile-nav-groups"></div>
    <div class="mobile-menu-actions">
      <a class="text-link" href="search.html">Search</a>
    </div>
  </nav>

`;
    if (footer) footer.innerHTML = `  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="footer-brand-lockup" href="index.html" aria-label="Velmont University home"><img src="assets/brand/velmont-footer.webp" width="800" height="634" alt="Velmont University — Turning Knowledge Into Practice"></a>
          <p id="footer-status"></p>
        </div>
        ${[[0,3],[1,4],[2,5]].map(indices => `<div class="footer-column">${indices.map(index => { const group=content.navigation[index]; return `<section class="footer-col"><h2>${escapeHTML(group.label)}</h2>${group.items.map(item => `<a href="${route(item)}">${escapeHTML(item)}</a>`).join("")}</section>`; }).join("")}</div>`).join("")}
      </div>
      <nav class="footer-utilities" aria-label="Footer utilities"><a href="search.html">Search</a><a href="ask-velmont.html">Ask Velmont · Demo</a><a href="contact.html">Contact details coming soon</a><a href="policies.html">Policies</a></nav>
      <div class="footer-bottom">
        <span>© 2026 Velmont University. Prototype for planning and demonstration.</span>
        <span data-content="university.admissionsStatus"></span>
      </div>
    </div>
  </footer>

`;
  }

  function renderNavigation() {
    const desktop = qs("#desktop-nav");
    const mobile = qs("#mobile-nav-groups");
    if (!desktop || !mobile) return;

    desktop.innerHTML = content.navigation.map((group, index) => `
      <div class="nav-group">
        <button class="nav-trigger" type="button" aria-expanded="false" aria-controls="nav-menu-${index}">
          ${group.label}
          <span aria-hidden="true" class="nav-chevron">⌄</span>
        </button>
        <div class="nav-menu" id="nav-menu-${index}">
          ${group.items.map(item => `<a href="${route(item)}">${item}</a>`).join("")}
        </div>
      </div>
    `).join("");

    mobile.innerHTML = content.navigation.map((group, index) => `
      <div class="mobile-nav-group">
        <button class="mobile-nav-trigger" type="button" aria-expanded="false" aria-controls="mobile-group-${index}">
          <span>${group.label}</span><span aria-hidden="true">+</span>
        </button>
        <div class="mobile-nav-links" id="mobile-group-${index}">
          ${group.items.map(item => `<a href="${route(item)}">${item}</a>`).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderPrograms() {
    const grid = qs("#program-grid");
    if (!grid) return;
    grid.innerHTML = content.colleges.map(college => `<article class="program-card"><span class="status-badge">Planned for Fall 2029</span><h3>${escapeHTML(college.title)}</h3><p>${escapeHTML(college.homeDescription || college.description)}</p><a class="text-link" href="${college.url}">Explore this college →</a></article>`).join("");
  }

  function renderDecisionFactors() {
    const root = qs("#decision-grid");
    if (!root) return;
    root.innerHTML = content.decisionFactors.map(item => `
      <article class="decision-card">
        <span class="decision-number" aria-hidden="true">${item.number}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <a class="text-link" href="${item.url}">Explore ${item.title.toLowerCase()} →</a>
      </article>
    `).join("");
  }

  function renderPrinciples() {
    const root = qs("#principles-grid");
    if (!root) return;
    root.innerHTML = content.academicModel.principles.map(item => `
      <article class="principle-card">
        <span class="principle-mark" aria-hidden="true"></span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `).join("");
  }

  function renderLearningExamples() {
    const root = qs("#learning-examples");
    if (!root) return;
    root.innerHTML = content.aiLearning.examples.map(item => `
      <article class="learning-example">
        <span>${item.area}</span>
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </article>
    `).join("");
  }

  function renderRoadmap() {
    const root = qs("#roadmap-list");
    if (!root) return;
    root.innerHTML = content.roadmap.map((item, index) => `
      <li class="roadmap-item">
        <span class="roadmap-dot" aria-hidden="true">${index + 1}</span>
        <div><span class="roadmap-period">${item.period}</span><h3>${item.title}</h3><p>${item.text}</p></div>
      </li>
    `).join("");
  }

  function hydrateText() {
    const set = (id, value) => { const el = qs(`#${id}`); if (el) el.textContent = value; };
    set("status-main", content.university.developmentStatus);
    set("status-detail", content.university.statusDetail);
    set("hero-eyebrow", content.hero.eyebrow);
    set("hero-title", content.hero.title);
    set("hero-body", content.hero.body);
    set("portfolio-intro", content.academicPortfolio.intro);
    set("academic-model-title", content.academicModel.title);
    set("academic-model-body", content.academicModel.body);
    set("ai-label", content.aiLearning.label);
    set("ai-title", content.aiLearning.title);
    set("ai-body", content.aiLearning.body);
    set("local-title", content.students.local.title);
    set("local-body", content.students.local.text);
    set("international-title", content.students.international.title);
    set("international-body", content.students.international.text);
    set("support-title", content.support.title);
    set("support-body", content.support.body);
    set("mission-preview", content.university.mission);
    set("footer-status", content.university.developmentStatus);

    qsa("[data-content]").forEach(el => {
      const value = el.dataset.content.split(".").reduce((node, key) => node && node[key], content);
      if (typeof value === "string") el.textContent = value;
    });
    const supportList = qs("#support-list");
    if (supportList) supportList.innerHTML = content.support.items.map(item => `<li>${item}</li>`).join("");
  }

  function initDesktopMenus() {
    const triggers = qsa(".nav-trigger");
    const close = button => {
      button.setAttribute("aria-expanded", "false");
      button.closest(".nav-group").classList.remove("is-open");
    };
    const open = button => {
      triggers.forEach(other => { if (other !== button) close(other); });
      button.setAttribute("aria-expanded", "true");
      button.closest(".nav-group").classList.add("is-open");
    };
    triggers.forEach(button => {
      const group = button.closest(".nav-group"), items = qsa(".nav-menu a", group);
      let leaveTimer, openedByHover = false;
      button.addEventListener("click", event => {
        event.stopPropagation();
        if (button.getAttribute("aria-expanded") === "true" && !(openedByHover && event.detail > 0)) close(button); else open(button);
        openedByHover = false;
      });
      group.addEventListener("pointerenter", event => {
        clearTimeout(leaveTimer);
        if (event.pointerType === "mouse" && window.matchMedia("(min-width: 1120px) and (hover: hover)").matches) {
          openedByHover = button.getAttribute("aria-expanded") !== "true";
          open(button);
        }
      });
      group.addEventListener("pointerleave", () => {
        leaveTimer = setTimeout(() => { if (!group.contains(document.activeElement)) close(button); }, 140);
      });
      group.addEventListener("focusout", event => { if (!group.contains(event.relatedTarget)) close(button); });
      group.addEventListener("keydown", event => {
        const index = items.indexOf(document.activeElement);
        if (event.key === "Escape") { event.preventDefault(); close(button); button.focus(); }
        else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault(); open(button);
          const next = index < 0 ? (event.key === "ArrowDown" ? 0 : items.length - 1) : (index + (event.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
          items[next]?.focus();
        } else if (index >= 0 && (event.key === "Home" || event.key === "End")) {
          event.preventDefault(); items[event.key === "Home" ? 0 : items.length - 1]?.focus();
        }
      });
    });
    document.addEventListener("click", event => { if (!event.target.closest(".nav-group")) triggers.forEach(close); });
    window.matchMedia("(max-width: 1119px)").addEventListener("change", () => triggers.forEach(close));
  }

  function initMobileMenu() {
    const menuButton = qs("#menu-toggle");
    const panel = qs("#mobile-menu");
    const header = qs(".site-header");
    if (!menuButton || !panel || !header) return;
    const mobile = window.matchMedia("(max-width: 1119px)");
    const background = qsa("main, .site-footer, .status-strip");
    const positionPanel = () => {
      panel.style.top = `${Math.max(0, header.getBoundingClientRect().bottom)}px`;
    };
    const closeMenu = (restoreFocus = false) => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      panel.classList.remove("is-open");
      panel.inert = true;
      panel.hidden = true;
      background.forEach(el => { el.inert = false; });
      document.body.classList.remove("menu-open");
      if (restoreFocus && mobile.matches) menuButton.focus();
    };
    menuButton.addEventListener("click", () => {
      if (menuButton.getAttribute("aria-expanded") === "true") {
        closeMenu(true);
        return;
      }
      if (!mobile.matches) return;
      positionPanel();
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Close navigation menu");
      panel.hidden = false;
      panel.inert = false;
      panel.classList.add("is-open");
      background.forEach(el => { el.inert = true; });
      document.body.classList.add("menu-open");
      qs("button, a", panel)?.focus();
    });
    qsa(".mobile-nav-trigger").forEach(button => {
      button.addEventListener("click", () => {
        const group = button.closest(".mobile-nav-group");
        const open = button.getAttribute("aria-expanded") !== "true";
        button.setAttribute("aria-expanded", String(open));
        group.classList.toggle("is-open", open);
        button.lastElementChild.textContent = open ? "−" : "+";
      });
    });
    document.addEventListener("keydown", event => {
      if (panel.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      } else if (event.key === "Tab") {
        const focusable = [menuButton, ...qsa("a, button", panel).filter(el => el.getClientRects().length)];
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && (document.activeElement === first || !focusable.includes(document.activeElement))) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !focusable.includes(document.activeElement))) {
          event.preventDefault(); first.focus();
        }
      }
    });
    qsa("#mobile-menu a").forEach(link => link.addEventListener("click", () => closeMenu(true)));
    const breakpointChanged = () => {
      if (!mobile.matches) {
        const wasInMenu = panel.contains(document.activeElement) || document.activeElement === menuButton;
        closeMenu();
        if (wasInMenu) qs(".nav-trigger")?.focus();
      }
      positionPanel();
    };
    mobile.addEventListener("change", breakpointChanged);
    window.addEventListener("resize", positionPanel);
    window.addEventListener("scroll", positionPanel, { passive: true });
    if ("ResizeObserver" in window) new ResizeObserver(positionPanel).observe(header);
    closeMenu();
    positionPanel();
  }

  function initHeaderScroll() {
    const header = qs(".site-header");
    if (!header) return;
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initReveal() {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      qsa(".reveal").forEach(el => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    qsa(".reveal").forEach(el => observer.observe(el));
  }

  function initTemporaryActions() {
    qsa("[data-coming-soon]").forEach(link => {
      const label = link.getAttribute("data-coming-soon") || link.textContent.trim();
      link.setAttribute("href", route(label));
    });
  }

  function initBotpressWebchat() {
  if (document.querySelector('script[data-botpress-webchat="inject"]')) return;

  const injectScript = document.createElement("script");
  injectScript.src = "https://cdn.botpress.cloud/webchat/v3.7/inject.js";
  injectScript.setAttribute("data-botpress-webchat", "inject");

  injectScript.onload = () => {
    if (document.querySelector('script[data-botpress-webchat="config"]')) return;

    const configScript = document.createElement("script");
    configScript.src = "https://files.bpcontent.cloud/2026/10/14/20/20261014203108-LYY36KW1.js";
    configScript.setAttribute("data-botpress-webchat", "config");

    document.head.appendChild(configScript);
  };

  document.head.appendChild(injectScript);
}
  window.VELMONT_UI = { escapeHTML, route };
  renderChrome();
  renderNavigation();
  renderPrograms();
  renderDecisionFactors();
  renderPrinciples();
  renderLearningExamples();
  renderRoadmap();
  hydrateText();
  initDesktopMenus();
  initMobileMenu();
  initHeaderScroll();
  initReveal();
  initTemporaryActions();
  initBotpressWebchat();
  qsa(".nav-menu a, .mobile-nav-links a").forEach(link => {
    if (link.getAttribute("href") === location.pathname.split("/").pop() + location.search + location.hash) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
