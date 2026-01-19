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

function renderPortfolio(filter = 'all') {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.style === filter);

  gallery.innerHTML = filteredItems.map(item => `
    <div class="gallery-item" data-style="${item.style}">
      <div class="gallery-image-wrapper">
        <img src="${item.image}" alt="${item.alt}" loading="lazy">
      </div>
      <p class="gallery-title">${item.title}</p>
    </div>
  `).join('');
}

function initPortfolio() {
  const filterButtons = document.querySelectorAll('.filter-button');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      activeFilter = filter;
      
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Render filtered items
      renderPortfolio(filter);
    });
  });

  // Initial render
  renderPortfolio('all');
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
      }, 500);
    }, 3000);
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initPortfolio();
  initReviews();
  initScrollAnimations();
  setCurrentYear();
  hideLogoAnimation();
});
