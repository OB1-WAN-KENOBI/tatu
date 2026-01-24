// Main entry point
import { initPortfolio } from "./portfolio.js";
import { initImageModal } from "./imageModal.js";
import { initReviews } from "./reviews.js";
import { initHeader } from "./header.js";
import { initScrollAnimations } from "./scrollAnimations.js";
import { setCurrentYear, hideLogoAnimation } from "./utils/dom.js";

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
