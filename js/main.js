// Portfolio data
const portfolioItems = [
  {
    id: 1,
    image:
      "/assets/images/tattoo-1.webp",
    alt: "Тату в стиле реализм - портрет",
    title: "Реалистичный портрет",
  },
  {
    id: 2,
    image:
      "assets/images/tattoo-2.webp",
    alt: "Минималистичная татуировка - геометрия",
    title: "Геометрический минимализм",
  },
  {
    id: 3,
    image:
      "assets/images/tattoo-3.webp",
    alt: "Олдскул татуировка - якорь",
    title: "Классический олдскул",
  },
  {
    id: 4,
    image:
      "assets/images/tattoo-4.webp",
    alt: "Реалистичная татуировка - природа",
    title: "Природа в реализме",
  },
  {
    id: 5,
    image:
      "assets/images/tattoo-5.webp",
    alt: "Минималистичная татуировка - линии",
    title: "Линейный минимализм",
  },
  {
    id: 6,
    image:
      "assets/images/tattoo-6.webp",
    alt: "Олдскул татуировка - роза",
    title: "Роза в олдскуле",
  },
  {
    id: 7,
    image:
      "assets/images/tattoo-7.webp",
    alt: "Реалистичная татуировка - животное",
    title: "Реалистичное животное",
  },
  {
    id: 8,
    image:
      "assets/images/tattoo-8.webp",
    alt: "Минималистичная татуировка - символы",
    title: "Символический минимализм",
  },
  {
    id: 9,
    image:
      "assets/images/tattoo-9.webp",
    alt: "Олдскул татуировка - корабль",
    title: "Морская тематика",
  },
  {
    id: 10,
    image:
      "assets/images/tattoo-10.webp",
    alt: "Реалистичная татуировка - цветы",
    title: "Реалистичные цветы",
  },
  {
    id: 11,
    image:
      "assets/images/tattoo-11.webp",
    alt: "Минималистичная татуировка - точки",
    title: "Точечный минимализм",
  },
  {
    id: 12,
    image:
      "assets/images/tattoo-12.webp",
    alt: "Олдскул татуировка - череп",
    title: "Классический череп",
  },
  {
    id: 13,
    image:
      "assets/images/tattoo-13.webp",
    alt: "Реалистичная татуировка - птица",
    title: "Реалистичная птица",
  },
  {
    id: 14,
    image:
      "assets/images/tattoo-14.webp",
    alt: "Минималистичная татуировка - стрелки",
    title: "Геометрические стрелки",
  },
  {
    id: 15,
    image:
      "assets/images/tattoo-15.webp",
    alt: "Олдскул татуировка - сердце",
    title: "Сердце в олдскуле",
  },
  {
    id: 16,
    image:
      "assets/images/tattoo-16.webp",
    alt: "Реалистичная татуировка - пейзаж",
    title: "Реалистичный пейзаж",
  },
  {
    id: 17,
    image:
      "assets/images/tattoo-17.webp",
    alt: "Минималистичная татуировка - волны",
    title: "Волны минимализм",
  },
  {
    id: 18,
    image:
      "assets/images/tattoo-18.webp",
    alt: "Олдскул татуировка - ласточка",
    title: "Ласточка олдскул",
  },
  {
    id: 19,
    image:
      "assets/images/tattoo-19.webp",
    alt: "Реалистичная татуировка - портрет девушки",
    title: "Портрет в реализме",
  },
  {
    id: 20,
    image:
      "assets/images/tattoo-20.webp",
    alt: "Минималистичная татуировка - звезды",
    title: "Звездное небо",
  },
  {
    id: 21,
    image:
      "assets/images/tattoo-21.webp",
    alt: "Олдскул татуировка - кинжал",
    title: "Кинжал олдскул",
  },
  {
    id: 22,
    image:
      "assets/images/tattoo-22.webp",
    alt: "Реалистичная татуировка - дракон",
    title: "Реалистичный дракон",
  },
  {
    id: 23,
    image:
      "assets/images/tattoo-23.webp",
    alt: "Минималистичная татуировка - треугольники",
    title: "Геометрические формы",
  },
  {
    id: 24,
    image:
      "assets/images/tattoo-24.webp",
    alt: "Олдскул татуировка - змея",
    title: "Змея в олдскуле",
  },
  {
    id: 25,
    image:
      "assets/images/tattoo-25.webp",
    alt: "Реалистичная татуировка - лес",
    title: "Лесной пейзаж",
  },
  {
    id: 26,
    image:
      "assets/images/tattoo-26.webp",
    alt: "Минималистичная татуировка - луна",
    title: "Лунная тематика",
  },
  {
    id: 27,
    image:
      "assets/images/tattoo-27.webp",
    alt: "Олдскул татуировка - якорь с лентой",
    title: "Классический якорь",
  },
];

// Reviews data
const reviews = [
  {
    id: 1,
    name: "Анна",
    text: "Вообще не больно, и эскиз подобрала по размеру, как мне надо! Как только придумаю следующую - напишу 🥰",
    alt: "Фото клиента Анна",
  },
  {
    id: 2,
    name: "Дмитрий",
    text: "Был на сеансе тату. Остались только положительные впечатления! Результатом доволен на 199% из 100 % 🙌. Очень уютная атмосфера в студии, чуствуешь себя как дома! ",
    alt: "Фото клиента Дмитрий",
  },
  {
    id: 3,
    name: "Мария",
    text: "Очень довольна результатом! Мастер учла все мои пожелания и создала настоящий шедевр. Процесс был комфортным и безболезненным.",
    alt: "Фото клиента Мария",
  },
  {
    id: 4,
    name: "Иван",
    text: "Профессионал своего дела! Делал рукав, работа заняла несколько сеансов, но результат того стоил. Качество на высшем уровне.",
    alt: "Фото клиента Иван",
  },
  {
    id: 5,
    name: "Елена",
    text: "в общем, спасибо большое тебе за эту красоту, я очень довольная, всё как хотела. Мне очень всё понравилось. Жди, скоро приду ещё 🥰",
    alt: "Фото клиента Елена",
  },
];

// Portfolio functionality
let currentPage = 1;
const itemsPerPage = 9;

function renderPortfolio(page = 1) {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  currentPage = page;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = portfolioItems.slice(startIndex, endIndex);

  // Fade out animation
  gallery.style.opacity = "0";
  gallery.style.transform = "translateY(20px)";

  setTimeout(() => {
    gallery.innerHTML = itemsToShow
      .map(
        (item) => `
      <div class="gallery-item">
        <div class="gallery-image-wrapper">
          <img src="${item.image}" alt="${item.alt}" loading="lazy" data-full-image="${item.image}">
        </div>
        <p class="gallery-title">${item.title}</p>
      </div>
    `,
      )
      .join("");

    // Add click handlers to gallery items
    const galleryItems = gallery.querySelectorAll(".gallery-item");
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        if (img) {
          openImageModal(img.getAttribute("data-full-image"), img.getAttribute("alt"));
        }
      });
    });

    // Fade in animation
    requestAnimationFrame(() => {
      gallery.style.opacity = "1";
      gallery.style.transform = "translateY(0)";
    });
  }, 200);

  // Update pagination
  updatePagination(totalPages, page);
}

function updatePagination(totalPages, currentPage) {
  const pagination = document.getElementById("portfolioPagination");
  if (!pagination) return;

  pagination.innerHTML = "";

  // Previous button
  const prevButton = document.createElement("button");
  prevButton.className = "pagination-button";
  prevButton.textContent = "‹";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      renderPortfolio(currentPage - 1);
    }
  });
  pagination.appendChild(prevButton);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.className = `pagination-button ${i === currentPage ? "active" : ""}`;
    pageButton.textContent = i;
    pageButton.addEventListener("click", () => {
      renderPortfolio(i);
    });
    pagination.appendChild(pageButton);
  }

  // Next button
  const nextButton = document.createElement("button");
  nextButton.className = "pagination-button";
  nextButton.textContent = "›";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      renderPortfolio(currentPage + 1);
    }
  });
  pagination.appendChild(nextButton);
}

function initPortfolio() {
  // Initial render
  renderPortfolio(1);
}

// Image Modal functionality
function openImageModal(imageSrc, imageAlt) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imageModalImg");
  if (!modal || !modalImg) return;

  modalImg.src = imageSrc;
  modalImg.alt = imageAlt || "Изображение портфолио";
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function initImageModal() {
  const modal = document.getElementById("imageModal");
  const modalClose = document.getElementById("imageModalClose");
  const modalOverlay = modal?.querySelector(".image-modal-overlay");

  if (!modal) return;

  // Close button
  if (modalClose) {
    modalClose.addEventListener("click", closeImageModal);
  }

  // Close on overlay click
  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeImageModal);
  }

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeImageModal();
    }
  });
}

// Reviews slider functionality
let currentReviewIndex = 0;

function renderReview(index) {
  const reviewCard = document.getElementById("reviewCard");
  if (!reviewCard) return;

  const review = reviews[index];
  reviewCard.innerHTML = `
   
    <blockquote class="review-text">${review.text}</blockquote>
    <p class="review-name">— ${review.name}</p>
  `;
}

function initReviews() {
  const prevButton = document.querySelector(".slider-button-prev");
  const nextButton = document.querySelector(".slider-button-next");
  const sliderDots = document.getElementById("sliderDots");

  if (!sliderDots) return;

  // Create dots
  sliderDots.innerHTML = reviews
    .map(
      (_, index) => `
    <button class="dot ${index === 0 ? "active" : ""}" data-index="${index}" aria-label="Перейти к отзыву ${index + 1}"></button>
  `,
    )
    .join("");

  // Dot click handlers
  sliderDots.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToReview(index);
    });
  });

  // Navigation buttons
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      currentReviewIndex =
        (currentReviewIndex - 1 + reviews.length) % reviews.length;
      goToReview(currentReviewIndex);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
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
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(section);
  });
}

// Set current year in footer
function setCurrentYear() {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Hide logo animation section after animation completes
function hideLogoAnimation() {
  const logoAnimationSection = document.querySelector(".logo-animation");
  if (logoAnimationSection) {
    // Last animation ends at 1.6s delay + 1s duration = 2.6s, add extra time for smooth transition
    setTimeout(() => {
      logoAnimationSection.style.opacity = "0";
      logoAnimationSection.style.transition = "opacity 0.5s ease-out";
      setTimeout(() => {
        logoAnimationSection.style.display = "none";
        // Unblock scroll after animation is hidden
        document.body.classList.remove("logo-animation-active");
      }, 500);
    }, 3000);
  }
}

// Header functionality
function initHeader() {
  const header = document.getElementById("header");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const headerNav = document.getElementById("headerNav");
  const navLinks = document.querySelectorAll(".nav-link");

  // Add scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      headerNav.classList.toggle("active");
      document.body.style.overflow = headerNav.classList.contains("active")
        ? "hidden"
        : "";
    });
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (headerNav.classList.contains("active")) {
        mobileMenuToggle.classList.remove("active");
        headerNav.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // Smooth scroll for anchor links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerHeight = header.offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Block scroll immediately when page loads (for logo animation)
  document.body.classList.add("logo-animation-active");

  initHeader();
  initPortfolio();
  initImageModal();
  initReviews();
  initScrollAnimations();
  setCurrentYear();
  hideLogoAnimation();
});
