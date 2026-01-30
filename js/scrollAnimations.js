// Scroll animations using IntersectionObserver - 2026 trends: smoother animations
let scrollObserver = null;

export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // 2026 trend: staggered animations for better visual flow
        const delay = index * 0.1;
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0) scale(1)";
        }, delay * 1000);
        // Unobserve after animation to prevent memory leaks
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px) scale(0.98)";
    // 2026 trend: smoother easing with cubic-bezier
    section.style.transition = "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    scrollObserver.observe(section);
  });

  // 2026 trend: animate cards and gallery items with subtle scale
  const cards = document.querySelectorAll(".service-card, .gallery-item, .review-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px) scale(0.95)";
    card.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`;
    
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0) scale(1)";
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    cardObserver.observe(card);
  });
}
