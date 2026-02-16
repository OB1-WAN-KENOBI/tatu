// Scroll animations using IntersectionObserver - OPTIMIZED FOR PERFORMANCE
let scrollObserver = null;

export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  // USE SINGLE OBSERVER for all animatable elements - better performance
  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animate element immediately on scroll
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0) scale(1)";
        // Unobserve to prevent memory leaks and future triggering
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Collect all animatable elements
  const animatableElements = document.querySelectorAll(
    ".section, .service-card, .gallery-item, .review-card",
  );

  // Setup animations and observe all at once with single observer
  animatableElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px) scale(0.98)";
    element.style.transition =
      "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
    scrollObserver.observe(element);
  });
}
