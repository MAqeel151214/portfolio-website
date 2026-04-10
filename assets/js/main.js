/*
* Project Name: Muhammad Aqeel Portfolio
* Author: Muhammad Aqeel
* License: This project is licensed under your terms.
*/

(function () {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('.navmenu').classList.toggle('mobile-nav-active');

    // Check if the toggle button is our new <button> element with an <i> inside, or just the <i> directly.
    const icon = headerToggleBtn.querySelector('i') || headerToggleBtn;
    icon.classList.toggle('bi-list');
    icon.classList.toggle('bi-x');

    // Update aria-expanded state for accessibility
    const isExpanded = document.querySelector('.navmenu').classList.contains('mobile-nav-active');
    headerToggleBtn.setAttribute('aria-expanded', isExpanded);
  }
  if (headerToggleBtn) {
    headerToggleBtn.addEventListener('click', headerToggle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        headerToggle();
      }
    });

  });

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 50 ? selectHeader.classList.add('scrolled') : selectHeader.classList.remove('scrolled');
    });
  }

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    const position = window.scrollY + 200;

    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;

      let section = navmenulink._section;
      if (!section) {
        section = navmenulink._section = document.querySelector(navmenulink.hash);
      }
      if (!section) return;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        if (!navmenulink.classList.contains('active')) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        }
      } else if (navmenulink.classList.contains('active')) {
        navmenulink.classList.remove('active');
      }
    });
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Ensure Isotope initializes after all images and items are fully loaded.
   */
  window.addEventListener('load', function () {
    document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: isotopeItem.getAttribute('data-layout') ?? 'masonry',
          filter: isotopeItem.getAttribute('data-default-filter') ?? '*',
          sortBy: isotopeItem.getAttribute('data-sort') ?? 'original-order'
        });
      });
    });
  });


  /**
   * Theme Switcher Functionality
   */
  const themeSwitcher = document.getElementById('theme-switcher');
  const htmlElement = document.documentElement;
  const storageKey = 'theme-preference';

  // We are defaulting to dark theme now based on CSS
  const setLightTheme = () => {
    htmlElement.setAttribute('data-theme', 'light');
    if (themeSwitcher) {
      const icon = themeSwitcher.querySelector('i');
      if (icon) {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
      }
    }
    localStorage.setItem(storageKey, 'light');
  };

  const setDarkTheme = () => {
    htmlElement.removeAttribute('data-theme');
    if (themeSwitcher) {
      const icon = themeSwitcher.querySelector('i');
      if (icon) {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
      }
    }
    localStorage.setItem(storageKey, 'dark');
  };

  const savedTheme = localStorage.getItem(storageKey);

  if (savedTheme === 'light') {
    setLightTheme();
  } else {
    setDarkTheme(); // Default to dark
  }

  if (themeSwitcher) {
    themeSwitcher.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = htmlElement.getAttribute('data-theme');
      if (currentTheme === 'light') {
        setDarkTheme();
      } else {
        setLightTheme();
      }
    });
  }

  /**
   * Add animations to all sections
   */
  document.querySelectorAll('section').forEach(section => {
    section.setAttribute('data-aos', 'fade-up');
    section.setAttribute('data-aos-delay', '100');
    section.setAttribute('data-aos-duration', '800');
  });

  /**
   * Add animation to header elements
   */
  const headerElements = document.querySelectorAll('#header .profile-img, #header .logo, #header .social-links a');
  headerElements.forEach((element, index) => {
    element.setAttribute('data-aos', 'fade-down');
    element.setAttribute('data-aos-delay', `${100 + index * 100}`);
    element.setAttribute('data-aos-duration', '800');
  });

  /**
   * Add animation to portfolio items
   */
  document.querySelectorAll('.portfolio-item').forEach((item, index) => {
    item.setAttribute('data-aos', 'zoom-in');
    item.setAttribute('data-aos-delay', `${200 + index * 100}`);
    item.setAttribute('data-aos-duration', '800');
  });

  /**
   * Add animation to testimonials
   */
  document.querySelectorAll('.testimonial-item').forEach((item, index) => {
    item.setAttribute('data-aos', 'flip-left');
    item.setAttribute('data-aos-delay', `${300 + index * 100}`);
    item.setAttribute('data-aos-duration', '800');
  });

})();