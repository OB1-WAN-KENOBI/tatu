// Portfolio data
const portfolioItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Тату в стиле реализм - портрет',
    style: 'realism',
    title: 'Реалистичный портрет',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Минималистичная татуировка - геометрия',
    style: 'minimalism',
    title: 'Геометрический минимализм',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Олдскул татуировка - якорь',
    style: 'oldskool',
    title: 'Классический олдскул',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Реалистичная татуировка - природа',
    style: 'realism',
    title: 'Природа в реализме',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Минималистичная татуировка - линии',
    style: 'minimalism',
    title: 'Линейный минимализм',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Олдскул татуировка - роза',
    style: 'oldskool',
    title: 'Роза в олдскуле',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Реалистичная татуировка - животное',
    style: 'realism',
    title: 'Реалистичное животное',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Минималистичная татуировка - символы',
    style: 'minimalism',
    title: 'Символический минимализм',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Олдскул татуировка - корабль',
    style: 'oldskool',
    title: 'Морская тематика',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Реалистичная татуировка - цветы',
    style: 'realism',
    title: 'Реалистичные цветы',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Минималистичная татуировка - точки',
    style: 'minimalism',
    title: 'Точечный минимализм',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Олдскул татуировка - череп',
    style: 'oldskool',
    title: 'Классический череп',
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Реалистичная татуировка - птица',
    style: 'realism',
    title: 'Реалистичная птица',
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Минималистичная татуировка - стрелки',
    style: 'minimalism',
    title: 'Геометрические стрелки',
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Олдскул татуировка - сердце',
    style: 'oldskool',
    title: 'Сердце в олдскуле',
  },
  {
    id: 16,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Реалистичная татуировка - пейзаж',
    style: 'realism',
    title: 'Реалистичный пейзаж',
  },
  {
    id: 17,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Минималистичная татуировка - волны',
    style: 'minimalism',
    title: 'Волны минимализм',
  },
  {
    id: 18,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Олдскул татуировка - ласточка',
    style: 'oldskool',
    title: 'Ласточка олдскул',
  },
  {
    id: 19,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Реалистичная татуировка - портрет девушки',
    style: 'realism',
    title: 'Портрет в реализме',
  },
  {
    id: 20,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Минималистичная татуировка - звезды',
    style: 'minimalism',
    title: 'Звездное небо',
  },
  {
    id: 21,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Олдскул татуировка - кинжал',
    style: 'oldskool',
    title: 'Кинжал олдскул',
  },
  {
    id: 22,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Реалистичная татуировка - дракон',
    style: 'realism',
    title: 'Реалистичный дракон',
  },
  {
    id: 23,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Минималистичная татуировка - треугольники',
    style: 'minimalism',
    title: 'Геометрические формы',
  },
  {
    id: 24,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Олдскул татуировка - змея',
    style: 'oldskool',
    title: 'Змея в олдскуле',
  },
  {
    id: 25,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Реалистичная татуировка - лес',
    style: 'realism',
    title: 'Лесной пейзаж',
  },
  {
    id: 26,
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&q=80',
    alt: 'Минималистичная татуировка - луна',
    style: 'minimalism',
    title: 'Лунная тематика',
  },
  {
    id: 27,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    alt: 'Олдскул татуировка - якорь с лентой',
    style: 'oldskool',
    title: 'Классический якорь',
  },
];

// Reviews data
const reviews = [
  {
    id: 1,
    name: 'Анна',
    text: 'Отличная работа! Мастер очень внимательный и профессиональный. Татуировка получилась именно такой, как я хотела. Рекомендую!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    alt: 'Фото клиента Анна',
  },
  {
    id: 2,
    name: 'Дмитрий',
    text: 'Прекрасный мастер, работал аккуратно и быстро. Результат превзошел все ожидания. Обязательно вернусь за новой татуировкой.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    alt: 'Фото клиента Дмитрий',
  },
  {
    id: 3,
    name: 'Мария',
    text: 'Очень довольна результатом! Мастер учла все мои пожелания и создала настоящий шедевр. Процесс был комфортным и безболезненным.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    alt: 'Фото клиента Мария',
  },
  {
    id: 4,
    name: 'Иван',
    text: 'Профессионал своего дела! Делал рукав, работа заняла несколько сеансов, но результат того стоил. Качество на высшем уровне.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    alt: 'Фото клиента Иван',
  },
  {
    id: 5,
    name: 'Елена',
    text: 'Спасибо за прекрасную работу! Мастер очень талантливый и внимательный к деталям. Татуировка выглядит потрясающе.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    alt: 'Фото клиента Елена',
  },
];

// Portfolio functionality
let activeFilter = 'all';
let currentPage = 1;
const itemsPerPage = 9;

function renderPortfolio(filter = 'all', page = 1) {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.style === filter);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  currentPage = page;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = filteredItems.slice(startIndex, endIndex);

  // Fade out animation
  gallery.style.opacity = '0';
  gallery.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    gallery.innerHTML = itemsToShow.map(item => `
      <div class="gallery-item" data-style="${item.style}">
        <div class="gallery-image-wrapper">
          <img src="${item.image}" alt="${item.alt}" loading="lazy">
        </div>
        <p class="gallery-title">${item.title}</p>
      </div>
    `).join('');

    // Fade in animation
    requestAnimationFrame(() => {
      gallery.style.opacity = '1';
      gallery.style.transform = 'translateY(0)';
    });
  }, 200);

  // Update pagination
  updatePagination(totalPages, page);
}

function updatePagination(totalPages, currentPage) {
  const pagination = document.getElementById('portfolioPagination');
  if (!pagination) return;

  pagination.innerHTML = '';

  // Previous button
  const prevButton = document.createElement('button');
  prevButton.className = 'pagination-button';
  prevButton.textContent = '‹';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      renderPortfolio(activeFilter, currentPage - 1);
    }
  });
  pagination.appendChild(prevButton);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.className = `pagination-button ${i === currentPage ? 'active' : ''}`;
    pageButton.textContent = i;
    pageButton.addEventListener('click', () => {
      renderPortfolio(activeFilter, i);
    });
    pagination.appendChild(pageButton);
  }

  // Next button
  const nextButton = document.createElement('button');
  nextButton.className = 'pagination-button';
  nextButton.textContent = '›';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      renderPortfolio(activeFilter, currentPage + 1);
    }
  });
  pagination.appendChild(nextButton);
}

function initPortfolio() {
  const filterButtons = document.querySelectorAll('.filter-button');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      activeFilter = filter;
      currentPage = 1;
      
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Render filtered items
      renderPortfolio(filter, 1);
    });
  });

  // Initial render
  renderPortfolio('all', 1);
}

// Reviews slider functionality
let currentReviewIndex = 0;

function renderReview(index) {
  const reviewCard = document.getElementById('reviewCard');
  if (!reviewCard) return;

  const review = reviews[index];
  reviewCard.innerHTML = `
    <div class="review-image-wrapper">
      <img src="${review.image}" alt="${review.alt}" loading="lazy">
    </div>
    <blockquote class="review-text">${review.text}</blockquote>
    <p class="review-name">— ${review.name}</p>
  `;
}

function initReviews() {
  const prevButton = document.querySelector('.slider-button-prev');
  const nextButton = document.querySelector('.slider-button-next');
  const sliderDots = document.getElementById('sliderDots');

  if (!sliderDots) return;

  // Create dots
  sliderDots.innerHTML = reviews.map((_, index) => `
    <button class="dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Перейти к отзыву ${index + 1}"></button>
  `).join('');

  // Dot click handlers
  sliderDots.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToReview(index);
    });
  });

  // Navigation buttons
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
      goToReview(currentReviewIndex);
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      goToReview(currentReviewIndex);
    });
  }

  // Initial render
  renderReview(0);
}

function goToReview(index) {
  currentReviewIndex = index;
  renderReview(index);
  
  // Update dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });
}

// Set current year in footer
function setCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Hide logo animation section after animation completes
function hideLogoAnimation() {
  const logoAnimationSection = document.querySelector('.logo-animation');
  if (logoAnimationSection) {
    // Last animation ends at 1.6s delay + 1s duration = 2.6s, add extra time for smooth transition
    setTimeout(() => {
      logoAnimationSection.style.opacity = '0';
      logoAnimationSection.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => {
        logoAnimationSection.style.display = 'none';
        // Unblock scroll after animation is hidden
        document.body.classList.remove('logo-animation-active');
      }, 500);
    }, 3000);
  }
}

// Header functionality
function initHeader() {
  const header = document.getElementById('header');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const headerNav = document.getElementById('headerNav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Add scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      headerNav.classList.toggle('active');
      document.body.style.overflow = headerNav.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (headerNav.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        headerNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Smooth scroll for anchor links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerHeight = header.offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Block scroll immediately when page loads (for logo animation)
  document.body.classList.add('logo-animation-active');
  
  initHeader();
  initPortfolio();
  initReviews();
  initScrollAnimations();
  setCurrentYear();
  hideLogoAnimation();
});
