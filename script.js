const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#primary-menu');
const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];
const yearEl = document.querySelector('#current-year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuButton && navMenu) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    navMenu.classList.remove('is-open');
  };

  const openMenu = () => {
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation menu');
    navMenu.classList.add('is-open');
  };

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
      navLinks[0]?.focus();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    if (!navMenu.contains(target) && !menuButton.contains(target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });
}
