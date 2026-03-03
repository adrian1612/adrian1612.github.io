/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
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
   * Hero particles background
   */
  function initHeroParticles() {
    const canvas = document.querySelector('.hero .hero-particles');
    if (!canvas) return;
    const heroSection = canvas.closest('.hero');
    if (!heroSection) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = reducedMotionQuery.matches;
    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrameId = null;
    let pointer = { x: 0, y: 0, active: false };

    const maxDpr = Math.min(window.devicePixelRatio || 1, 2);
    const circleBaseColor = '205, 233, 255';
    const lineBaseColor = '142, 198, 252';

    function targetCount() {
      return Math.max(34, Math.min(96, Math.floor((width * height) / 19000)));
    }

    function createParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.36,
        vy: (Math.random() - 0.5) * 0.36,
        radius: 0.9 + (Math.random() * 2.2),
        alpha: 0.3 + (Math.random() * 0.5)
      };
    }

    function seedParticles() {
      particles = Array.from({ length: targetCount() }, createParticle);
    }

    function resizeCanvas() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * maxDpr));
      canvas.height = Math.max(1, Math.floor(height * maxDpr));
      ctx.setTransform(maxDpr, 0, 0, maxDpr, 0, 0);
      seedParticles();
    }

    function drawConnections() {
      const maxDistance = 135;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist > maxDistance) continue;
          const opacity = (1 - (dist / maxDistance)) * 0.28;
          ctx.strokeStyle = `rgba(${lineBaseColor}, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    function drawPointerInfluence() {
      if (!pointer.active) return;

      const linkDistance = 150;
      particles.forEach(particle => {
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const dist = Math.hypot(dx, dy);
        if (dist > linkDistance) return;

        const opacity = (1 - (dist / linkDistance)) * 0.35;
        ctx.strokeStyle = `rgba(184, 225, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pointer.x, pointer.y);
        ctx.lineTo(particle.x, particle.y);
        ctx.stroke();
      });

      const glow = ctx.createRadialGradient(pointer.x, pointer.y, 2, pointer.x, pointer.y, 70);
      glow.addColorStop(0, 'rgba(194, 231, 255, 0.34)');
      glow.addColorStop(1, 'rgba(194, 231, 255, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 70, 0, Math.PI * 2);
      ctx.fill();
    }

    function applyPointerForce(particle) {
      if (!pointer.active) return;

      const dx = particle.x - pointer.x;
      const dy = particle.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      const influence = 170;

      if (distance === 0 || distance > influence) return;

      const force = (1 - (distance / influence)) * 0.035;
      particle.vx += (dx / distance) * force;
      particle.vy += (dy / distance) * force;
    }

    function clampVelocity(particle) {
      const maxSpeed = 0.95;
      particle.vx = Math.max(-maxSpeed, Math.min(maxSpeed, particle.vx));
      particle.vy = Math.max(-maxSpeed, Math.min(maxSpeed, particle.vy));
    }

    function drawFrame(animate) {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(particle => {
        if (animate) {
          applyPointerForce(particle);
          particle.vx *= 0.992;
          particle.vy *= 0.992;
          clampVelocity(particle);

          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -8) particle.x = width + 8;
          if (particle.x > width + 8) particle.x = -8;
          if (particle.y < -8) particle.y = height + 8;
          if (particle.y > height + 8) particle.y = -8;
        }

        ctx.fillStyle = `rgba(${circleBaseColor}, ${particle.alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      drawConnections();
      drawPointerInfluence();
    }

    function animate() {
      drawFrame(true);
      animationFrameId = window.requestAnimationFrame(animate);
    }

    function start() {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }

      if (reducedMotion) {
        drawFrame(false);
        return;
      }

      animate();
    }

    function handleVisibility() {
      if (document.hidden && animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      } else if (!document.hidden) {
        start();
      }
    }

    function handleReducedMotionChange(event) {
      reducedMotion = event.matches;
      if (reducedMotion) {
        pointer.active = false;
      }
      start();
    }

    function handlePointerMove(event) {
      if (reducedMotion) return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
    }

    function handlePointerLeave() {
      pointer.active = false;
    }

    resizeCanvas();
    start();

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('visibilitychange', handleVisibility);
    heroSection.addEventListener('pointermove', handlePointerMove);
    heroSection.addEventListener('pointerleave', handlePointerLeave);

    if (typeof reducedMotionQuery.addEventListener === 'function') {
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
    } else if (typeof reducedMotionQuery.addListener === 'function') {
      reducedMotionQuery.addListener(handleReducedMotionChange);
    }
  }

  initHeroParticles();

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
      handler: function(direction) {
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
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
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
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
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
  window.addEventListener('load', function(e) {
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
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
