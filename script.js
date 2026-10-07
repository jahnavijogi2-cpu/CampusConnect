/* ==========================================================================
   CampusConnect - College Event Website
   Main JavaScript (Vanilla ES6)
   Beginner-friendly, modular, and fully functional with localStorage
   ========================================================================== */

// --- 1. Centralized College Events Data ---
const CAMPUS_EVENTS = [
  {
    id: 1,
    title: "U-Fest 2026: Annual Cultural Gala",
    category: "Cultural",
    date: "October 18, 2026",
    time: "05:30 PM - 10:00 PM",
    location: "Main University Amphitheatre",
    organizer: "Campus Cultural Council & Fine Arts Club",
    seats: "1,200 Capacity",
    fee: "Free Entry",
    image: "images/event_cultural.jpg",
    shortDesc: "Experience an electrifying evening of university music bands, classical dance showcases, drama acts, and celebrity guest DJ.",
    description: "The biggest student extravaganza of the academic year is here! U-Fest brings together over 20 campus clubs for a thrilling celebration of music, theatrical arts, contemporary dance battles, and fashion showcases. Enjoy food stalls, carnival games, and live music with special guest performances to conclude the night. All enrolled college students are invited to celebrate campus spirit.",
    highlights: [
      "Battle of the Bands & Acoustic Solos",
      "Inter-Department Group Dance Championship",
      "Student Art Installations & Pop-up Food Bazaar",
      "Special Celebrity Guest Performance & DJ Finale"
    ]
  },
  {
    id: 2,
    title: "HackCampus: 24hr AI Hackathon & Workshop",
    category: "Workshop",
    date: "October 22-23, 2026",
    time: "09:00 AM - 05:00 PM (Overnight)",
    location: "Turing Innovation Lab, Block B",
    organizer: "Computer Science Society & Robotics Club",
    seats: "150 Participants (Teams of 2-4)",
    fee: "Free Entry",
    image: "images/event_tech.jpg",
    shortDesc: "Build groundbreaking software and hardware prototypes with mentorship from top university engineers and industry leaders.",
    description: "HackCampus is our university's premier 24-hour hackathon and hands-on workshop track. Participants will solve real-world challenges in AI, smart campus logistics, sustainability, and robotics. Includes hardware component kits, continuous snacks, technical workshops by industry mentors, and cash prizes for top three team submissions.",
    highlights: [
      "24 Hours of Non-stop Coding and Mentorship",
      "Hands-on Robotics and Generative AI Workshops",
      "Free Hardware Development Kits for Registered Teams",
      "Cash Prizes, Trophies, and Internship Opportunities"
    ]
  },
  {
    id: 3,
    title: "Inter-Collegiate Sports Championship",
    category: "Sports",
    date: "November 02-04, 2026",
    time: "08:00 AM - 06:00 PM",
    location: "University Athletics Complex & Arena",
    organizer: "Campus Athletic Union & Physical Education Dept",
    seats: "Open for Spectators & Athletes",
    fee: "Free for Students",
    image: "images/event_sports.jpg",
    shortDesc: "Cheer for your department in basketball, track sprint races, football, badminton, and table tennis championships.",
    description: "Three action-packed days of college athletic pride! Teams and individual athletes from every department will compete for the prestigious Chancellor's Trophy. Cheer your fellow students on the track, courts, and field. High-energy opening ceremony followed by track and field relays, 5v5 basketball finals, and soccer showdowns.",
    highlights: [
      "100m, 200m, and 4x100m Track Relays",
      "Inter-Department 5v5 Basketball Tournament",
      "Badminton & Table Tennis Singles/Doubles",
      "Grand Awards Ceremony with Medals, Certificates, and Trophies"
    ]
  },
  {
    id: 4,
    title: "TechExpo: Science & Innovation Exhibition",
    category: "Exhibition",
    date: "November 12, 2026",
    time: "10:00 AM - 04:30 PM",
    location: "Central Glass Atrium, Science Complex",
    organizer: "Science Forum & Engineering Guild",
    seats: "Open for All Students & Faculty",
    fee: "Free Entry",
    image: "images/event_exhibition.jpg",
    shortDesc: "Explore cutting-edge student prototypes, architectural models, eco-sustainable energy projects, and interactive demos.",
    description: "The annual university project showcase where undergraduate and graduate students present working prototypes, research posters, and creative inventions to peers, faculty, and visiting industry evaluators. Vote for the 'People's Choice Innovation' and attend live interactive demonstrations throughout the day.",
    highlights: [
      "60+ Student Engineering & Design Exhibits",
      "Interactive Robotics and Green Energy Showcases",
      "Live Elevator Pitch Competition for Student Startups",
      "Dean's Innovation Awards and Certificates"
    ]
  },
  {
    id: 5,
    title: "Rhythm & Canvas: Fine Arts Exhibition",
    category: "Cultural",
    date: "November 19, 2026",
    time: "11:00 AM - 05:00 PM",
    location: "Student Activity Center Gallery",
    organizer: "Fine Arts Club & Shutterbug Society",
    seats: "Open to All",
    fee: "Free Entry",
    image: "images/event_cultural.jpg",
    shortDesc: "Admire breathtaking student paintings, sculptures, digital art prints, and campus life photography collections.",
    description: "An inspiring gallery exhibition spotlighting creative expressions by campus artists. Featuring juried photography from the fall semester, live portrait sketches, ceramic displays, and a silent charity auction where student artwork proceeds support local student community welfare initiatives.",
    highlights: [
      "Over 100 Juried Paintings and Sculptures",
      "Student Photography Contest Gallery",
      "Live Watercolor Painting Workshops",
      "Student-made Crafts and Print Sale"
    ]
  },
  {
    id: 6,
    title: "Campus 5K Marathon & Fitness Walk",
    category: "Sports",
    date: "November 25, 2026",
    time: "06:30 AM - 09:30 AM",
    location: "Campus Main Gate to Green Trail",
    organizer: "Student Health & Fitness Association",
    seats: "500 Runners",
    fee: "Free with T-Shirt",
    image: "images/event_sports.jpg",
    shortDesc: "Join the 5K morning campus run promoting health, wellness, and camaraderie across all university batches.",
    description: "Kickstart your morning with high spirits! The Annual Campus 5K Run loops around the scenic college lake and perimeter trail. Open to all students, faculty, and alumni. Finisher medals, fresh hydration stations, complimentary campus runner t-shirts, and breakfast snacks for all participants.",
    highlights: [
      "Timed 5K Campus Perimeter Run",
      "Complimentary CampusConnect Athletic T-shirt",
      "Finisher Medals and Healthy Post-Run Breakfast",
      "Yoga and Warm-Down Stretching Session"
    ]
  },
  {
    id: 7,
    title: "Cloud Computing & Modern Web Workshop",
    category: "Workshop",
    date: "December 01, 2026",
    time: "01:00 PM - 05:00 PM",
    location: "Seminar Hall 3 & Computer Lab 4",
    organizer: "Developer Student Club (DSC)",
    seats: "200 Attendees",
    fee: "Free Entry",
    image: "images/event_tech.jpg",
    shortDesc: "A masterclass on building responsive websites, APIs, and modern cloud deployment by senior software engineers.",
    description: "A fast-paced interactive workshop designed for beginners and intermediate coders looking to build and deploy their first production-grade web applications. Covers modern HTML/CSS architecture, JavaScript state management, serverless basics, and portfolio deployment tips.",
    highlights: [
      "Step-by-step guided coding sessions",
      "Live deployment to free hosting platforms",
      "Q&A session with alumni software engineers",
      "Verified workshop digital certificate of completion"
    ]
  },
  {
    id: 8,
    title: "Clean Energy & EV Technology Showcase",
    category: "Exhibition",
    date: "December 08, 2026",
    time: "10:30 AM - 04:00 PM",
    location: "Engineering Quadrangle",
    organizer: "Automotive & Renewable Energy Club",
    seats: "Open for All",
    fee: "Free Entry",
    image: "images/event_exhibition.jpg",
    shortDesc: "Witness student-engineered electric go-karts, solar powered prototypes, and sustainable mobility designs.",
    description: "Get up close with the latest student-engineered electric mobility vehicles, formula student racecars, solar tracking stations, and battery management models. Meet the engineering teams and learn how you can join project teams for next year's inter-college racing competitions.",
    highlights: [
      "Student Formula Electric Car Demonstration",
      "Solar Power Battery Prototype Demos",
      "Interactive Test-Bed Driving Simulator",
      "Recruitment drive for collegiate racing teams"
    ]
  }
];

// --- 2. Helper Functions ---
function getCategoryBadgeClass(category) {
  switch (category.toLowerCase()) {
    case 'cultural': return 'badge-cultural';
    case 'sports': return 'badge-sports';
    case 'workshop': return 'badge-workshop';
    case 'exhibition': return 'badge-exhibition';
    default: return 'badge-workshop';
  }
}

// Generate single Event Card HTML
function createEventCardHTML(event) {
  const badgeClass = getCategoryBadgeClass(event.category);
  return `
    <article class="event-card reveal" data-category="${event.category.toLowerCase()}" data-id="${event.id}">
      <div class="event-card-media">
        <span class="event-card-category ${badgeClass}">${event.category}</span>
        <img src="${event.image}" alt="${event.title}" loading="lazy">
      </div>
      <div class="event-card-body">
        <div class="event-meta-row">
          <span>📅 ${event.date}</span>
        </div>
        <h3 class="event-card-title">
          <a href="details.html?id=${event.id}">${event.title}</a>
        </h3>
        <p class="event-card-desc">${event.shortDesc}</p>
        <div class="event-info-chips">
          <div class="event-info-chip">
            <span>📍</span> <span>${event.location}</span>
          </div>
          <div class="event-info-chip">
            <span>👥</span> <span>${event.organizer}</span>
          </div>
        </div>
        <div class="event-card-footer">
          <button type="button" class="btn btn-outline-blue btn-sm" onclick="openEventModal(${event.id})">Quick View</button>
          <a href="details.html?id=${event.id}" class="btn btn-secondary btn-sm">View Details</a>
        </div>
      </div>
    </article>
  `;
}

// --- 3. Light / Dark Theme Management ---
function initTheme() {
  const savedTheme = localStorage.getItem('campusconnect_theme') || 'light';
  applyTheme(savedTheme);

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('campusconnect_theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    if (theme === 'dark') {
      themeToggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <!-- Sun icon -->
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
        </svg>
      `;
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
      themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
      themeToggleBtn.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <!-- Moon icon -->
          <path d="M12.3 2a10 10 0 0 0-.19 20 10.04 10.04 0 0 0 9.7-7.61 1 1 0 0 0-1.16-1.22 8 8 0 1 1-9.57-9.57 1 1 0 0 0-1.22-1.16A9.93 9.93 0 0 0 12.3 2z"/>
        </svg>
      `;
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
      themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    }
  }
}

// --- 4. Mobile Navigation Menu Toggle ---
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

// --- 5. Scroll Reveal Micro-Animations ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach(el => el.classList.add('active'));
  }
}

// --- 6. Quick View Modal Functionality ---
function openEventModal(eventId) {
  const event = CAMPUS_EVENTS.find(e => e.id === Number(eventId));
  if (!event) return;

  const modalOverlay = document.getElementById('event-modal');
  const modalContent = document.getElementById('modal-content');

  if (!modalOverlay || !modalContent) return;

  const badgeClass = getCategoryBadgeClass(event.category);

  modalContent.innerHTML = `
    <div style="position: relative; margin: -2rem -2rem 1.5rem -2rem; height: 220px; overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
      <span class="event-card-category ${badgeClass}" style="position: absolute; top: 16px; left: 16px;">${event.category}</span>
      <img src="${event.image}" alt="${event.title}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div style="display: flex; gap: 0.5rem; align-items: center; color: var(--orange-500); font-weight: 700; font-size: 0.9rem; margin-bottom: 0.5rem;">
      <span>📅 ${event.date}</span> &bull; <span>⏰ ${event.time}</span>
    </div>
    <h2 style="font-size: 1.6rem; margin-bottom: 0.75rem; line-height: 1.3;">${event.title}</h2>
    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem; line-height: 1.6;">${event.description}</p>
    <div style="background: var(--bg-surface-alt); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem; font-size: 0.88rem; display: flex; flex-direction: column; gap: 0.4rem;">
      <div><strong>📍 Location:</strong> ${event.location}</div>
      <div><strong>🏛️ Organizer:</strong> ${event.organizer}</div>
      <div><strong>🎟️ Capacity & Fee:</strong> ${event.seats} (${event.fee})</div>
    </div>
    <div style="display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap;">
      <button type="button" class="btn btn-outline-blue" onclick="closeEventModal()">Close</button>
      <a href="details.html?id=${event.id}" class="btn btn-secondary">Full Details</a>
      <a href="register.html?event=${event.id}" class="btn btn-primary">Register Now</a>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeEventModal() {
  const modalOverlay = document.getElementById('event-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Attach modal events (close on backdrop click or ESC)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeEventModal();
});

// --- 7. Page Specific Handlers ---

// Home Page: Load 4 Featured Events
function initHomePage() {
  const featuredContainer = document.getElementById('featured-events-grid');
  if (!featuredContainer) return;

  const featuredList = CAMPUS_EVENTS.slice(0, 4);
  featuredContainer.innerHTML = featuredList.map(createEventCardHTML).join('');
  initScrollReveal();
}

// Events Page: Search, Category Filters, and Grid Rendering
function initEventsPage() {
  const allEventsGrid = document.getElementById('all-events-grid');
  const searchInput = document.getElementById('event-search-input');
  const categoryBtns = document.querySelectorAll('.cat-btn');
  const emptyState = document.getElementById('empty-state');
  const resultsCount = document.getElementById('results-count');

  if (!allEventsGrid) return;

  let currentCategory = 'all';
  let currentSearch = '';

  function renderFilteredEvents() {
    const filtered = CAMPUS_EVENTS.filter(event => {
      const matchCat = currentCategory === 'all' || event.category.toLowerCase() === currentCategory.toLowerCase();
      const query = currentSearch.toLowerCase().trim();
      const matchSearch = query === '' ||
        event.title.toLowerCase().includes(query) ||
        event.shortDesc.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.organizer.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query);

      return matchCat && matchSearch;
    });

    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} of ${CAMPUS_EVENTS.length} events`;
    }

    if (filtered.length === 0) {
      allEventsGrid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      allEventsGrid.innerHTML = filtered.map(createEventCardHTML).join('');
      initScrollReveal();
    }
  }

  // Initial render
  renderFilteredEvents();

  // Category filter clicks
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      renderFilteredEvents();
    });
  });

  // Search input typing
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderFilteredEvents();
    });
  }

  // Clear search helper
  window.resetEventFilters = function() {
    currentCategory = 'all';
    currentSearch = '';
    if (searchInput) searchInput.value = '';
    categoryBtns.forEach(b => {
      if (b.getAttribute('data-category') === 'all') b.classList.add('active');
      else b.classList.remove('active');
    });
    renderFilteredEvents();
  };
}

// Event Details Page (`details.html`)
function initDetailsPage() {
  const detailsContainer = document.getElementById('details-content-container');
  if (!detailsContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const eventId = Number(urlParams.get('id')) || 1;
  const event = CAMPUS_EVENTS.find(e => e.id === eventId) || CAMPUS_EVENTS[0];

  document.title = `${event.title} - CampusConnect`;

  const badgeClass = getCategoryBadgeClass(event.category);
  const highlightsHTML = event.highlights.map(item => `
    <li>
      <span class="highlight-bullet">&#10003;</span>
      <span>${item}</span>
    </li>
  `).join('');

  detailsContainer.innerHTML = `
    <div class="back-link-wrapper">
      <a href="events.html" class="back-link">
        <span>&larr;</span> Back to All Events
      </a>
    </div>

    <div class="details-grid">
      <!-- Main Content Card -->
      <article class="details-main-card reveal">
        <img src="${event.image}" alt="${event.title}" class="details-banner-img">
        <div class="details-content-body">
          <div class="details-badge-row">
            <span class="event-card-category ${badgeClass}">${event.category}</span>
            <span style="font-weight: 700; color: var(--orange-500); font-size: 0.9rem;">📍 ${event.location}</span>
          </div>

          <h1 class="details-event-title">${event.title}</h1>

          <h2 class="details-section-heading">Event Overview</h2>
          <p class="details-desc-paragraph">${event.description}</p>

          <h2 class="details-section-heading">Key Highlights & Schedule</h2>
          <ul class="highlights-list">
            ${highlightsHTML}
          </ul>

          <div style="margin-top: 2rem; padding: 1.25rem; background: var(--bg-surface-alt); border-radius: var(--radius-md); border-left: 4px solid var(--orange-500);">
            <h4 style="margin-bottom: 0.4rem; font-size: 1.05rem;">Student Attendance Guidelines</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
              Please carry your valid College Student ID card to the venue for verification. Registered students receive priority seating and attendance participation credit.
            </p>
          </div>
        </div>
      </article>

      <!-- Sidebar / Action Card -->
      <aside class="details-sidebar-card reveal">
        <h3 class="sidebar-card-title">Event Information</h3>
        <div class="detail-meta-list">
          <div class="detail-meta-item">
            <div class="detail-meta-icon">📅</div>
            <div class="detail-meta-info">
              <span class="detail-meta-label">Date</span>
              <span class="detail-meta-value">${event.date}</span>
            </div>
          </div>

          <div class="detail-meta-item">
            <div class="detail-meta-icon">⏰</div>
            <div class="detail-meta-info">
              <span class="detail-meta-label">Time</span>
              <span class="detail-meta-value">${event.time}</span>
            </div>
          </div>

          <div class="detail-meta-item">
            <div class="detail-meta-icon">📍</div>
            <div class="detail-meta-info">
              <span class="detail-meta-label">Location</span>
              <span class="detail-meta-value">${event.location}</span>
            </div>
          </div>

          <div class="detail-meta-item">
            <div class="detail-meta-icon">🏛️</div>
            <div class="detail-meta-info">
              <span class="detail-meta-label">Organized By</span>
              <span class="detail-meta-value">${event.organizer}</span>
            </div>
          </div>

          <div class="detail-meta-item">
            <div class="detail-meta-icon">🎟️</div>
            <div class="detail-meta-info">
              <span class="detail-meta-label">Availability & Fee</span>
              <span class="detail-meta-value">${event.seats} &bull; ${event.fee}</span>
            </div>
          </div>
        </div>

        <a href="register.html?event=${event.id}" class="btn btn-primary btn-lg" style="width: 100%; text-align: center;">
          Register Now for this Event
        </a>

        <p style="font-size: 0.8rem; text-align: center; color: var(--text-muted); margin-top: 1rem;">
          Instant registration confirmation badge will be generated upon submission.
        </p>
      </aside>
    </div>
  `;

  initScrollReveal();
}

// Login Page Logic (`login.html`)
function initLoginPage() {
  const loginForm = document.getElementById('login-form');
  const alertBox = document.getElementById('login-alert');
  const togglePassBtn = document.getElementById('toggle-password-btn');
  const passwordInput = document.getElementById('login-password');
  const rememberCheckbox = document.getElementById('remember-me');
  const emailInput = document.getElementById('login-identifier');

  if (!loginForm) return;

  // Check if already remembered
  const savedUser = localStorage.getItem('campusconnect_saved_email');
  if (savedUser && emailInput) {
    emailInput.value = savedUser;
    if (rememberCheckbox) rememberCheckbox.checked = true;
  }

  // Toggle Password Visibility
  if (togglePassBtn && passwordInput) {
    togglePassBtn.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      togglePassBtn.textContent = isPassword ? 'Hide' : 'Show';
    });
  }

  // Handle Form Submit
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const identifier = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!identifier || !password) {
      showLoginAlert('Please enter both Email/Student ID and Password.', 'danger');
      return;
    }

    // Demo Authentication verification
    // Accepts demo credentials: student@campus.edu / college123 OR STU2024 / college123
    // Or any valid email ending in @campus.edu or college ID
    const isValidDemo = (identifier === 'student@campus.edu' && password === 'college123') ||
                        (identifier.toUpperCase() === 'STU2024' && password === 'college123') ||
                        (password.length >= 6);

    if (isValidDemo) {
      // Remember me handling
      if (rememberCheckbox && rememberCheckbox.checked) {
        localStorage.setItem('campusconnect_saved_email', identifier);
      } else {
        localStorage.removeItem('campusconnect_saved_email');
      }

      // Save logged in state
      const userData = {
        name: identifier.includes('@') ? identifier.split('@')[0] : identifier,
        emailOrId: identifier,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('campusconnect_user', JSON.stringify(userData));

      showLoginAlert('Login Successful! Welcome to CampusConnect. Redirecting...', 'success');

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    } else {
      showLoginAlert('Invalid credentials! Try student@campus.edu with password: college123', 'danger');
    }
  });

  function showLoginAlert(message, type) {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = `alert-box alert-${type} show`;
  }

  // Demo autofill shortcut
  window.fillDemoCredentials = function() {
    if (emailInput && passwordInput) {
      emailInput.value = 'student@campus.edu';
      passwordInput.value = 'college123';
      showLoginAlert('Demo credentials filled! Click Login to proceed.', 'success');
    }
  };

  // Forgot Password alert
  window.handleForgotPassword = function(e) {
    if (e) e.preventDefault();
    alert('A password reset link and verification code have been simulated and sent to your registered student email!');
  };
}

// Register Page Logic (`register.html`)
function initRegisterPage() {
  const registerForm = document.getElementById('register-form');
  const eventSelect = document.getElementById('reg-event');
  const alertBox = document.getElementById('reg-alert');
  const receiptCard = document.getElementById('registration-receipt-card');

  if (!registerForm) return;

  // Populate events in dropdown
  if (eventSelect) {
    eventSelect.innerHTML = '<option value="">-- Choose an Event to Attend --</option>' +
      CAMPUS_EVENTS.map(event => `<option value="${event.id}">${event.title} (${event.category})</option>`).join('');

    // Pre-select if URL has ?event=ID
    const urlParams = new URLSearchParams(window.location.search);
    const selectedEventId = urlParams.get('event');
    if (selectedEventId) {
      eventSelect.value = selectedEventId;
    }
  }

  // Handle Registration Submit
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const studentId = document.getElementById('reg-studentid').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const department = document.getElementById('reg-dept').value;
    const year = document.getElementById('reg-year').value;
    const selectedEventVal = eventSelect.value;

    if (!name || !email || !studentId || !phone || !department || !year || !selectedEventVal) {
      showRegisterAlert('Please fill out all required registration fields.', 'danger');
      return;
    }

    const matchedEvent = CAMPUS_EVENTS.find(e => e.id === Number(selectedEventVal));
    const eventName = matchedEvent ? matchedEvent.title : 'Selected Event';
    const regPassId = 'CC-' + Math.floor(100000 + Math.random() * 900000);

    // Save registration to localStorage
    const newReg = {
      passId: regPassId,
      name,
      email,
      studentId,
      phone,
      department,
      year,
      eventId: selectedEventVal,
      eventName,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const existingRegs = JSON.parse(localStorage.getItem('campusconnect_registrations') || '[]');
    existingRegs.push(newReg);
    localStorage.setItem('campusconnect_registrations', JSON.stringify(existingRegs));

    // Hide form and display receipt card
    registerForm.style.display = 'none';
    if (alertBox) alertBox.style.display = 'none';

    if (receiptCard) {
      receiptCard.innerHTML = `
        <div class="success-check-icon">&#10003;</div>
        <h2 style="font-size: 1.85rem; margin-bottom: 0.5rem; color: var(--navy-800);">Registration Confirmed!</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem;">You have successfully registered for the campus event. Keep your registration pass ID handy.</p>

        <div class="registration-receipt-details">
          <div class="receipt-row">
            <span class="receipt-label">Pass ID</span>
            <span class="receipt-value" style="color: var(--orange-500); font-family: monospace; font-size: 1.1rem;">${regPassId}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-label">Student Name</span>
            <span class="receipt-value">${name}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-label">Student ID</span>
            <span class="receipt-value">${studentId}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-label">Event Registered</span>
            <span class="receipt-value" style="color: var(--blue-500);">${eventName}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-label">Department & Year</span>
            <span class="receipt-value">${department} &bull; ${year}</span>
          </div>
          <div class="receipt-row">
            <span class="receipt-label">Confirmation Sent To</span>
            <span class="receipt-value">${email}</span>
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-top: 1.5rem;">
          <button type="button" class="btn btn-secondary" onclick="window.print()">Print / Save Pass</button>
          <a href="events.html" class="btn btn-outline-blue">Explore More Events</a>
          <button type="button" class="btn btn-primary" onclick="window.resetRegistrationForm()">Register Another</button>
        </div>
      `;
      receiptCard.classList.add('show');
    }
  });

  function showRegisterAlert(message, type) {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.className = `alert-box alert-${type} show`;
  }

  window.resetRegistrationForm = function() {
    if (receiptCard) receiptCard.classList.remove('show');
    if (registerForm) {
      registerForm.reset();
      registerForm.style.display = 'flex';
    }
  };
}

// User Session Navbar indicator
function checkUserSession() {
  const userJson = localStorage.getItem('campusconnect_user');
  const loginNavLinks = document.querySelectorAll('a[href="login.html"]');

  if (userJson && loginNavLinks.length > 0) {
    try {
      const user = JSON.parse(userJson);
      loginNavLinks.forEach(link => {
        link.textContent = `Sign Out (${user.name})`;
        link.href = '#';
        link.addEventListener('click', (e) => {
          e.preventDefault();
          if (confirm('Do you want to log out of CampusConnect?')) {
            localStorage.removeItem('campusconnect_user');
            window.location.reload();
          }
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
}

// --- 8. Master DOMContentLoaded Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initScrollReveal();
  checkUserSession();

  // Route initializers based on present DOM elements
  if (document.getElementById('featured-events-grid')) {
    initHomePage();
  }

  if (document.getElementById('all-events-grid')) {
    initEventsPage();
  }

  if (document.getElementById('details-content-container')) {
    initDetailsPage();
  }

  if (document.getElementById('login-form')) {
    initLoginPage();
  }

  if (document.getElementById('register-form')) {
    initRegisterPage();
  }
});
