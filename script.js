/* ==========================================================================
   MONGSAY EXECUTIVE PORTFOLIO — INTERACTIVE ENGINE
   Features:
   - Starlight Beaming & Golden Caustic Canvas Engine
   - 002.jpg Specular Lighting & Smooth Lerp Parallax
   - 3D Card Physics & Specular Shine
   - Theme Toggle: Dark Mode & High-Contrast Luxury Light Mode
   - Bilingual Engine: English & Authentic Khmer (ភាសាខ្មែរ)
   - Tool 1: SAGFX Real-Time Rebate & Pip Commission Calculator
   - Tool 2: Institutional Lot Size & Fractional Risk Engine
   - Tool 3: Global Market Sessions Clock
   - Executive Books Vault Filter & Live Search
   - 1-Click Verified @MongsayFX Telegram Enrollment Protocols
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLanguageToggle();
  initGoldDustCanvas();
  initBackgroundLighting();
  initCard3DTilt();
  initCounters();
  initMobileNav();
  initBookingModal();
  initContactForm();
  initRebateCalculator();
  initPositionSizeRiskCalculator();
  initMarketSessionsClock();
  initBooksFilterAndSearch();
  initTelegramCopyButtons();
  initVideoBackground();
});

/* ---------------------------------------------------------
   A. Theme Toggle: Dark Mode & Luxury High-Contrast Light Mode
   --------------------------------------------------------- */
function initThemeToggle() {
  const savedTheme = localStorage.getItem('mongsay_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeBtns = document.querySelectorAll('.theme-toggle');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('mongsay_theme', nextTheme);
      showToast(nextTheme === 'light' ? 'Switched to Luxury Light Mode (High Contrast)' : 'Switched to Institutional Dark Obsidian Mode');
    });
  });
}

/* ---------------------------------------------------------
   B. Bilingual Engine: English & Khmer (ភាសាខ្មែរ)
   --------------------------------------------------------- */
const I18N_DICTIONARY = {
  en: {
    nav_overview: "Overview",
    nav_ventures: "Ventures",
    nav_advisory: "Advisory & BDM",
    nav_media: "Media",
    nav_library: "Library",
    nav_contact: "Enroll / Contact",
    hero_badge_payment: "SAG PAYMENT CEO",
    hero_badge_advisory: "SAGFX.ORG ADVISOR",
    hero_subtitle: "Executive Portfolio",
    hero_title: "Scaling Next-Gen <br><span class=\"blue-text\">Payment Rails</span> & Institutional <br><span class=\"gold-text\">Market Liquidity</span>",
    hero_desc: "Founding CEO of <strong>SAG Payment</strong> (<a href=\"https://www.sagpayment.com\" target=\"_blank\" class=\"blue-text\">sagpayment.com</a>) and Lead Financial Markets Advisor & Broker BDM at <strong>SAGFX</strong> (<a href=\"https://sagfx.org\" target=\"_blank\" class=\"gold-text\">sagfx.org</a>). Leading cross-border settlement infrastructure, institutional tier-1 liquidity, and high-performance trading communities.",
    hero_cta_enroll: "Enroll with @MongsayFX",
    hero_cta_ventures: "Explore SAG Ventures",
    stat_gateway: "Gateway Availability",
    stat_rebate: "Trader Rebate Yield",
    stat_community: "Community Reach",
    sessions_title: "Institutional Trading Sessions (Live Schedule)",
    calc_tag: "QUANTITATIVE COST REDUCTION ENGINE",
    calc_title: "SAGFX Interactive <span class=\"gold-gradient-text\">Broker Rebate Yield</span>",
    calc_desc: "Calculate real-time monthly cashback and trading cost reductions across institutional tier-1 partner brokers powered by SAGFX.ORG.",
    calc_label_vol: "Estimated Monthly Volume",
    calc_label_asset: "Asset Class",
    calc_label_broker: "Partner Broker",
    calc_btn_claim: "Claim Whitelisted Rebate Rate via @MongsayFX",
    calc_header_cashback: "Projected Monthly Cashback",
    calc_header_annual: "Annual Compound Savings",
    calc_header_pips: "Pips Recovered / Month",
    calc_header_reduction: "Spread Cost Reduction",
    calc_header_settlement: "Rebate Settlement",
    calc_val_weekly: "Automated / Weekly",
    risk_tag: "INSTITUTIONAL POSITION SIZER",
    risk_title: "Mechanical Lot Size & <span class=\"gold-gradient-text\">Fractional Risk Engine</span>",
    risk_desc: "Mathematically size every market execution according to institutional risk management standards.",
    risk_label_balance: "Account Balance ($USD)",
    risk_label_pct: "Account Risk Percentage",
    risk_label_sl: "Stop Loss Range (Pips)",
    risk_stat_cash: "Total Cash at Risk",
    risk_stat_lots: "Optimal Position Lot Size",
    risk_stat_pipval: "Pip Dollar Value",
    risk_stat_rr: "Target 1:3 RR Profit Gain",
    telegram_tag: "OFFICIAL DIRECT ENROLLMENT CHANNEL",
    telegram_title: "Enroll Directly with <span class=\"gold-gradient-text\">@MongsayFX</span>",
    telegram_desc: "Direct private access to Mong Say for institutional traders, broker BDM inquiries (SAGFX.ORG), and payment acquiring integration (sagpayment.com). Connect directly on Telegram to enroll in private mentorship and VIP institutional channels.",
    telegram_btn_enroll: "Enroll via @MongsayFX",
    telegram_btn_copy: "Copy Handle (@MongsayFX)",
    telegram_caption: "Scan with Telegram App",
    contact_tag: "DIRECT PROTOCOL",
    contact_title: "Initiate Executive Partnership",
    contact_desc: "Direct channel to the Office of Mong Say for institutional inquiries, SAG Payment gateway merchant onboarding, broker BDM consulting, and keynote strategic engagements.",
    contact_btn_submit: "Transmit Strategic Inquiry"
  },
  kh: {
    nav_overview: "ទិដ្ឋភាព",
    nav_ventures: "អាជីវកម្ម",
    nav_advisory: "ទីប្រឹក្សា",
    nav_media: "ផ្សព្វផ្សាយ",
    nav_library: "បណ្ណាល័យ",
    nav_contact: "ទំនាក់ទំនង",
    hero_badge_payment: "នាយកប្រតិបត្តិ SAG PAYMENT",
    hero_badge_advisory: "ទីប្រឹក្សា SAGFX.ORG",
    hero_subtitle: "ផលប័ត្រប្រតិបត្តិផ្លូវការ",
    hero_title: "ពង្រីកហេដ្ឋារចនាសម្ព័ន្ធទូទាត់ <br><span class=\"blue-text\">ជំនាន់ថ្មី</span> & សាច់ប្រាក់ងាយស្រួល <br><span class=\"gold-text\">ស្ថាប័នអន្តរជាតិ</span>",
    hero_desc: "ស្ថាបនិក និងនាយកប្រតិបត្តិនៃ <strong>SAG Payment</strong> (<a href=\"https://www.sagpayment.com\" target=\"_blank\" class=\"blue-text\">sagpayment.com</a>) និងជាប្រធានទីប្រឹក្សាទីផ្សារហិរញ្ញវត្ថុ & Broker BDM នៅ <strong>SAGFX</strong> (<a href=\"https://sagfx.org\" target=\"_blank\" class=\"gold-text\">sagfx.org</a>)។ ដឹកនាំហេដ្ឋារចនាសម្ព័ន្ធទូទាត់ឆ្លងព្រំដែន និងសាច់ប្រាក់ងាយស្រួលស្ថាប័ន Tier-1។",
    hero_cta_enroll: "ចុះឈ្មោះជាមួយ @MongsayFX",
    hero_cta_ventures: "ស្វែងយល់ពី SAG Ventures",
    stat_gateway: "ភាពអាចរកបាននៃច្រកទូទាត់",
    stat_rebate: "ទិន្នផល Rebate ឈ្មួញជើងសា",
    stat_community: "បណ្តាញសហគមន៍",
    sessions_title: "ម៉ោងបើកទីផ្សារជួញដូរស្ថាប័ន (កាលវិភាគបន្តផ្ទាល់)",
    calc_tag: "ម៉ាស៊ីនកាត់បន្ថយថ្លៃដើមជួញដូរ",
    calc_title: "ការគណនា Rebate ផ្ទាល់ <span class=\"gold-gradient-text\">SAGFX</span>",
    calc_desc: "គណនាទឹកប្រាក់ត្រឡប់មកវិញប្រចាំខែ និងការកាត់បន្ថយថ្លៃដើមជួញដូរជាមួយឈ្មួញជើងសាដៃគូស្ថាប័ន Tier-1 តាមរយៈ SAGFX.ORG។",
    calc_label_vol: "ទំហំជួញដូរប្រចាំខែប៉ាន់ស្មាន",
    calc_label_asset: "ប្រភេទទ្រព្យសកម្ម",
    calc_label_broker: "ឈ្មួញជើងសាដៃគូ",
    calc_btn_claim: "ទទួលបានអត្រា Rebate តាមរយៈ @MongsayFX",
    calc_header_cashback: "ទឹកប្រាក់ត្រឡប់មកវិញប្រចាំខែ",
    calc_header_annual: "ការសន្សំសរុបប្រចាំឆ្នាំ",
    calc_header_pips: "ចំនួន Pip ទទួលបានវិញ / ខែ",
    calc_header_reduction: "ការកាត់បន្ថយថ្លៃ Spread",
    calc_header_settlement: "ការទូទាត់ Rebate",
    calc_val_weekly: "ស្វ័យប្រវត្ត / ប្រចាំសប្តាហ៍",
    risk_tag: "ម៉ាស៊ីនគណនាហានិភ័យ & ទំហំ LOT",
    risk_title: "ការកំណត់ទំហំ Lot & <span class=\"gold-gradient-text\">ការគ្រប់គ្រងហានិភ័យ</span>",
    risk_desc: "គណនាទំហំ Lot ជាក់លាក់ទៅតាមស្តង់ដារគ្រប់គ្រងហានិភ័យរបស់ស្ថាប័នហិរញ្ញវត្ថុអន្តរជាតិ។",
    risk_label_balance: "សមតុល្យគណនី ($USD)",
    risk_label_pct: "ភាគរយហានិភ័យគណនី",
    risk_label_sl: "ចម្ងាយ Stop Loss (Pips)",
    risk_stat_cash: "ទឹកប្រាក់ប្រឈមហានិភ័យ",
    risk_stat_lots: "ទំហំ Lot ដ៏ល្អបំផុត",
    risk_stat_pipval: "តម្លៃទឹកប្រាក់ក្នុង ១ Pip",
    risk_stat_rr: "គោលដៅប្រាក់ចំណេញ 1:3 RR",
    telegram_tag: "បណ្តាញចុះឈ្មោះផ្ទាល់ផ្លូវការ",
    telegram_title: "ចុះឈ្មោះដោយផ្ទាល់ជាមួយ <span class=\"gold-gradient-text\">@MongsayFX</span>",
    telegram_desc: "ទំនាក់ទំនងផ្ទាល់ជាមួយ Mong Say សម្រាប់ឈ្មួញជួញដូរស្ថាប័ន ភាពជាដៃគូ Broker BDM (SAGFX.ORG) និងការរួមបញ្ចូលច្រកទូទាត់ (sagpayment.com)។ ភ្ជាប់ទំនាក់ទំនងតាម Telegram ដើម្បីចុះឈ្មោះចូលរួមក្នុងបណ្តាញ VIP ស្ថាប័ន។",
    telegram_btn_enroll: "ចុះឈ្មោះតាម @MongsayFX",
    telegram_btn_copy: "ចម្លង (@MongsayFX)",
    telegram_caption: "ស្កេនជាមួយកម្មវិធី Telegram",
    contact_tag: "ពិធីសារផ្ទាល់",
    contact_title: "ចាប់ផ្តើមភាពជាដៃគូប្រតិបត្តិ",
    contact_desc: "បណ្តាញផ្ទាល់ទៅកាន់ការិយាល័យ Mong Say សម្រាប់ការសាកសួរកម្រិតស្ថាប័ន ការបញ្ចូលច្រកទូទាត់ SAG Payment និងការពិគ្រោះយោបល់ BDM ឈ្មួញជើងសា។",
    contact_btn_submit: "ផ្ញើសំណើជាយុទ្ធសាស្ត្រ"
  }
};

function initLanguageToggle() {
  const savedLang = localStorage.getItem('mongsay_lang') || 'en';
  applyLanguage(savedLang);

  const langBtns = document.querySelectorAll('.lang-toggle');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = localStorage.getItem('mongsay_lang') || 'en';
      const nextLang = current === 'en' ? 'kh' : 'en';
      applyLanguage(nextLang);
      localStorage.setItem('mongsay_lang', nextLang);
      showToast(nextLang === 'kh' ? 'បានប្តូរទៅជាភាសាខ្មែរ (Khmer Language Active)' : 'Switched to English Language');
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  if (lang === 'kh') {
    document.body.classList.add('lang-kh');
  } else {
    document.body.classList.remove('lang-kh');
  }

  // Update language pills in UI
  document.querySelectorAll('.lang-code').forEach(el => {
    if (el.getAttribute('data-lang') === lang) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

/* ---------------------------------------------------------
   1. Interactive 002.jpg Golden Specular Beam & Parallax
   --------------------------------------------------------- */
function initBackgroundLighting() {
  const bgImg = document.querySelector('.bg-img-layer');
  if (!bgImg) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight * 0.25;
  let currentX = mouseX;
  let currentY = mouseY;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;
  }, { passive: true });

  function updateLighting() {
    if (isMoving) {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      const xPercent = (currentX / window.innerWidth) * 100;
      const yPercent = (currentY / window.innerHeight) * 100;

      document.documentElement.style.setProperty('--mouse-x', `${xPercent.toFixed(2)}%`);
      document.documentElement.style.setProperty('--mouse-y', `${yPercent.toFixed(2)}%`);

      const xOffset = ((currentX / window.innerWidth) - 0.5) * 14;
      const yOffset = ((currentY / window.innerHeight) - 0.5) * 14;
      bgImg.style.transform = `scale(1.03) translate3d(${xOffset.toFixed(1)}px, ${yOffset.toFixed(1)}px, 0)`;
    }
    requestAnimationFrame(updateLighting);
  }
  updateLighting();
}

/* ---------------------------------------------------------
   1b. Video Background Autoplay Assurance Engine
   --------------------------------------------------------- */
function initVideoBackground() {
  const bgVideos = document.querySelectorAll('.site-bg-video, .video-bg');
  bgVideos.forEach(v => {
    v.muted = true;
    v.setAttribute('playsinline', '');
    const tryPlay = () => {
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback to touch/click resume for mobile power-saver modes
          const resumeOnInteraction = () => {
            v.play().catch(() => {});
            window.removeEventListener('touchstart', resumeOnInteraction);
            window.removeEventListener('click', resumeOnInteraction);
          };
          window.addEventListener('touchstart', resumeOnInteraction, { once: true, passive: true });
          window.addEventListener('click', resumeOnInteraction, { once: true, passive: true });
        });
      }
    };
    tryPlay();
  });
}

/* ---------------------------------------------------------
   2. Starlight Beaming, Stars & Golden Embers Canvas
   --------------------------------------------------------- */
function initGoldDustCanvas() {
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 60;
  let shootingStar = null;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class CosmicParticle {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.vy = -(Math.random() * 0.5 + 0.15);
      this.vx = (Math.random() - 0.5) * 0.3;
      this.size = Math.random() * 2.2 + 0.8;
      this.baseAlpha = Math.random() * 0.5 + 0.25;
      this.alpha = this.baseAlpha;
      this.phase = Math.random() * Math.PI * 2;
      this.speed = Math.random() * 0.03 + 0.012;
      this.isGold = Math.random() > 0.28;
      this.isStar = Math.random() > 0.60;
    }
    update() {
      this.y += this.vy;
      this.x += this.vx;
      this.phase += this.speed;
      this.alpha = this.baseAlpha + Math.sin(this.phase) * 0.25;

      if (this.y < -15 || this.x < -15 || this.x > width + 15) {
        this.reset();
      }
    }
    draw() {
      const currentAlpha = Math.max(0.1, Math.min(1, this.alpha));
      ctx.save();
      ctx.translate(this.x, this.y);

      if (this.isStar) {
        const s = this.size * 2.4;
        const color = this.isGold 
          ? `rgba(255, 242, 198, ${currentAlpha})` 
          : `rgba(56, 189, 248, ${currentAlpha * 0.9})`;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.quadraticCurveTo(0, 0, s, 0);
        ctx.quadraticCurveTo(0, 0, 0, s);
        ctx.quadraticCurveTo(0, 0, -s, 0);
        ctx.quadraticCurveTo(0, 0, 0, -s);
        ctx.fill();

        ctx.strokeStyle = color;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(-s * 1.8, 0);
        ctx.lineTo(s * 1.8, 0);
        ctx.moveTo(0, -s * 1.8);
        ctx.lineTo(0, s * 1.8);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.isGold 
          ? `rgba(247, 223, 165, ${currentAlpha})` 
          : `rgba(56, 189, 248, ${currentAlpha * 0.8})`;
        ctx.shadowColor = this.isGold ? 'rgba(229, 185, 95, 0.65)' : 'rgba(14, 165, 233, 0.45)';
        ctx.shadowBlur = this.size * 3.5;
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new CosmicParticle());
  }

  function spawnShootingStar() {
    if (shootingStar) return;
    const startX = Math.random() * (width * 0.7);
    const startY = Math.random() * (height * 0.3);
    shootingStar = {
      x: startX,
      y: startY,
      len: Math.random() * 120 + 80,
      vx: 8 + Math.random() * 4,
      vy: 4 + Math.random() * 2,
      life: 1.0,
      decay: 0.02
    };
  }
  setInterval(spawnShootingStar, 6000);

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 115) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(229, 185, 95, ${0.12 * (1 - dist / 115)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    if (shootingStar) {
      const grad = ctx.createLinearGradient(
        shootingStar.x, shootingStar.y,
        shootingStar.x - shootingStar.vx * 15, shootingStar.y - shootingStar.vy * 15
      );
      grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.life})`);
      grad.addColorStop(0.3, `rgba(229, 185, 95, ${shootingStar.life * 0.8})`);
      grad.addColorStop(1, 'rgba(229, 185, 95, 0)');

      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(shootingStar.x - shootingStar.vx * 15, shootingStar.y - shootingStar.vy * 15);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.stroke();

      shootingStar.x += shootingStar.vx;
      shootingStar.y += shootingStar.vy;
      shootingStar.life -= shootingStar.decay;

      if (shootingStar.life <= 0 || shootingStar.x > width + 50 || shootingStar.y > height + 50) {
        shootingStar = null;
      }
    }

    requestAnimationFrame(render);
  }
  render();
}

/* ---------------------------------------------------------
   3. Interactive 3D Card Tilt & Specular Shine
   --------------------------------------------------------- */
function initCard3DTilt() {
  const tiltCards = document.querySelectorAll(
    '.venture-card, .portrait-frame, .crest-showcase, .pillar-card, .book-card, .telegram-qr-card, .rebate-calc-container, .risk-calc-container'
  );
  if (!tiltCards.length) return;

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ---------------------------------------------------------
   4. Statistical Counter Animation
   --------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetCount = parseInt(target.getAttribute('data-target'), 10);
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1600;
        const stepTime = 20;
        const increment = targetCount / (duration / stepTime);

        const timer = setInterval(() => {
          start += increment;
          if (start >= targetCount) {
            target.textContent = `${prefix}${targetCount.toLocaleString()}${suffix}`;
            clearInterval(timer);
          } else {
            target.textContent = `${prefix}${Math.floor(start).toLocaleString()}${suffix}`;
          }
        }, stepTime);

        obs.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

/* ---------------------------------------------------------
   5. Mobile Drawer Navigation
   --------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const mobileMenu = document.getElementById('mobileNavMenu');
  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    toggleBtn.innerHTML = mobileMenu.classList.contains('open') ? '✕' : '☰';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggleBtn.innerHTML = '☰';
    });
  });
}

/* ---------------------------------------------------------
   6. Executive Consultation Modal
   --------------------------------------------------------- */
function initBookingModal() {
  const modal = document.getElementById('bookingModal');
  const openBtns = document.querySelectorAll('[data-open-modal="booking"]');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

/* ---------------------------------------------------------
   7. Executive Contact Form
   --------------------------------------------------------- */
function initContactForm() {
  const forms = [document.getElementById('executiveContactForm'), document.getElementById('modalBookingForm')];

  forms.forEach(form => {
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Transmitting Protocol...';

      setTimeout(() => {
        submitBtn.innerHTML = 'Inquiry Dispatched ✓';
        showToast('Executive inquiry transmitted. The Office of Mong Say will respond within 24 hours.');
        form.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          const modal = document.getElementById('bookingModal');
          if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
          }
        }, 1800);
      }, 1200);
    });
  });
}

/* ---------------------------------------------------------
   8. SAGFX Real-Time Rebate & Pip Calculator (Tool 1)
   --------------------------------------------------------- */
function initRebateCalculator() {
  const slider = document.getElementById('calcLotsSlider');
  const lotsDisplay = document.getElementById('calcLotsVal');
  const brokerSelect = document.getElementById('calcBrokerSelect');
  const assetSelect = document.getElementById('calcAssetSelect');
  const monthlyRebateOut = document.getElementById('calcMonthlyRebate');
  const annualSavingsOut = document.getElementById('calcAnnualSavings');
  const pipsRecoveredOut = document.getElementById('calcPipsRecovered');
  const spreadReductionOut = document.getElementById('calcSpreadReduction');

  if (!slider || !monthlyRebateOut) return;

  const assetRates = {
    xauusd: 8.50,
    eurusd: 6.00,
    gbpusd: 7.00,
    us30: 5.00,
    crypto: 12.00
  };

  const brokerMultipliers = {
    icmarkets: 1.05,
    vantage: 1.08,
    exness: 1.00,
    fpmarkets: 1.04
  };

  function recalculate() {
    const lots = parseInt(slider.value, 10);
    const assetKey = assetSelect ? assetSelect.value : 'xauusd';
    const brokerKey = brokerSelect ? brokerSelect.value : 'icmarkets';

    const baseRate = assetRates[assetKey] || 8.50;
    const mult = brokerMultipliers[brokerKey] || 1.0;

    const monthlyRebate = lots * baseRate * mult;
    const annualSavings = monthlyRebate * 12;
    const pipsRecovered = (lots * 0.85).toFixed(1);
    const spreadReduction = (38 + (mult - 1) * 60).toFixed(1);

    if (lotsDisplay) lotsDisplay.textContent = `${lots.toLocaleString()} Lots`;
    monthlyRebateOut.textContent = `$${monthlyRebate.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (annualSavingsOut) annualSavingsOut.textContent = `$${annualSavings.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    if (pipsRecoveredOut) pipsRecoveredOut.textContent = `${pipsRecovered} Pips`;
    if (spreadReductionOut) spreadReductionOut.textContent = `${spreadReduction}%`;
  }

  slider.addEventListener('input', recalculate);
  if (brokerSelect) brokerSelect.addEventListener('change', recalculate);
  if (assetSelect) assetSelect.addEventListener('change', recalculate);

  recalculate();
}

/* ---------------------------------------------------------
   9. Institutional Lot Size & Fractional Risk Engine (Tool 2)
   --------------------------------------------------------- */
function initPositionSizeRiskCalculator() {
  const balanceInput = document.getElementById('riskBalanceInput');
  const riskSlider = document.getElementById('riskPercentSlider');
  const riskPercentVal = document.getElementById('riskPercentVal');
  const slPipsInput = document.getElementById('riskSlPipsInput');
  const assetSelect = document.getElementById('riskAssetSelect');

  const cashRiskOut = document.getElementById('riskCashOut');
  const lotSizeOut = document.getElementById('riskLotSizeOut');
  const pipValOut = document.getElementById('riskPipValOut');
  const rrGainOut = document.getElementById('riskRRGainOut');

  if (!balanceInput || !lotSizeOut) return;

  function calculateRisk() {
    const balance = parseFloat(balanceInput.value) || 10000;
    const riskPct = parseFloat(riskSlider.value) || 1.0;
    const slPips = parseFloat(slPipsInput.value) || 25;
    const asset = assetSelect ? assetSelect.value : 'xauusd';

    if (riskPercentVal) riskPercentVal.textContent = `${riskPct.toFixed(2)}%`;

    // Cash at risk = balance * (riskPct / 100)
    const cashAtRisk = balance * (riskPct / 100);

    // Standard Pip Value per 1.00 Lot:
    // Gold (XAU/USD) = $10.00 / pip
    // Forex (EUR/USD, GBP/USD) = $10.00 / pip
    // US30 = $5.00 / pt
    let standardPipVal = 10.0;
    if (asset === 'us30') standardPipVal = 5.0;

    // Lot Size = Cash At Risk / (SL Pips * standardPipVal)
    let calculatedLots = cashAtRisk / (slPips * standardPipVal);
    calculatedLots = Math.max(0.01, calculatedLots); // minimum 0.01 micro lot

    const pipDollarValue = calculatedLots * standardPipVal;
    const target1to3Gain = cashAtRisk * 3.0;

    if (cashRiskOut) cashRiskOut.textContent = `$${cashAtRisk.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    lotSizeOut.textContent = `${calculatedLots.toFixed(2)} Lots`;
    if (pipValOut) pipValOut.textContent = `$${pipDollarValue.toFixed(2)} / Pip`;
    if (rrGainOut) rrGainOut.textContent = `+$${target1to3Gain.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  balanceInput.addEventListener('input', calculateRisk);
  riskSlider.addEventListener('input', calculateRisk);
  slPipsInput.addEventListener('input', calculateRisk);
  if (assetSelect) assetSelect.addEventListener('change', calculateRisk);

  calculateRisk();
}

/* ---------------------------------------------------------
   10. Institutional Global Market Sessions Clock
   --------------------------------------------------------- */
function initMarketSessionsClock() {
  const clockContainer = document.querySelector('.market-sessions-bar');
  if (!clockContainer) return;

  function updateSessions() {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const decimalHours = utcHours + utcMinutes / 60;

    const sessions = {
      sydney: decimalHours >= 22 || decimalHours < 7,
      tokyo: decimalHours >= 0 && decimalHours < 9,
      london: decimalHours >= 8 && decimalHours < 17,
      newyork: decimalHours >= 13 && decimalHours < 22,
      killzone: decimalHours >= 13 && decimalHours < 16
    };

    const sydneyBadge = document.getElementById('sessionSydney');
    const tokyoBadge = document.getElementById('sessionTokyo');
    const londonBadge = document.getElementById('sessionLondon');
    const nyBadge = document.getElementById('sessionNY');
    const killzoneBadge = document.getElementById('sessionKillzone');

    if (sydneyBadge) sydneyBadge.className = `session-badge ${sessions.sydney ? 'active' : ''}`;
    if (tokyoBadge) tokyoBadge.className = `session-badge ${sessions.tokyo ? 'active' : ''}`;
    if (londonBadge) londonBadge.className = `session-badge ${sessions.london ? 'active' : ''}`;
    if (nyBadge) nyBadge.className = `session-badge ${sessions.newyork ? 'active' : ''}`;
    if (killzoneBadge) {
      killzoneBadge.className = `session-badge ${sessions.killzone ? 'killzone active' : ''}`;
    }
  }

  updateSessions();
  setInterval(updateSessions, 60000);
}

/* ---------------------------------------------------------
   11. Executive Books Vault Filter & Instant Search
   --------------------------------------------------------- */
function initBooksFilterAndSearch() {
  const filterBtns = document.querySelectorAll('.btn-book-filter');
  const searchInput = document.getElementById('bookSearchInput');
  const bookCards = document.querySelectorAll('.book-card');

  if (!bookCards.length) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function applyFilters() {
    bookCards.forEach(card => {
      const cardCat = card.getAttribute('data-category') || 'all';
      const text = card.textContent.toLowerCase();

      const matchesCat = (activeCategory === 'all' || cardCat === activeCategory);
      const matchesSearch = (searchTerm === '' || text.includes(searchTerm));

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }
}

/* ---------------------------------------------------------
   12. 1-Click Copy @MongsayFX Telegram Handle
   --------------------------------------------------------- */
function initTelegramCopyButtons() {
  const copyBtns = document.querySelectorAll('[data-copy-telegram]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const handle = btn.getAttribute('data-copy-telegram') || '@MongsayFX';
      navigator.clipboard.writeText(handle).then(() => {
        showToast(`Copied ${handle} to clipboard! Direct Telegram channel ready.`);
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span>✓ Copied ${handle}</span>`;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      }).catch(() => {
        showToast(`Telegram handle: ${handle}`);
      });
    });
  });
}

/* ---------------------------------------------------------
   Global Toast Notification System
   --------------------------------------------------------- */
function showToast(msg) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>⚡</span> <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}