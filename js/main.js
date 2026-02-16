// Main entry point - OPTIMIZED FOR PERFORMANCE
import { initPortfolio } from "./portfolio.js";
import { initImageModal } from "./imageModal.js";
import { initReviews } from "./reviews.js";
import { initHeader } from "./header.js";
import { initScrollAnimations } from "./scrollAnimations.js";
import { setCurrentYear, skipLogoAnimation } from "./utils/dom.js";

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Add class for logo animation styling, but content loads in parallel (non-blocking)
  document.body.classList.add("logo-animation-active");

  initHeader();
  initPortfolio();
  initImageModal();
  initReviews();
  initScrollAnimations();
  setCurrentYear();

  // Hide animation after it completes (non-blocking)
  skipLogoAnimation();
});
