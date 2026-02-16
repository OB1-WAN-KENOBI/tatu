// DOM utility functions - OPTIMIZED FOR PERFORMANCE

// Throttle utility function
export function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Set current year in footer
export function setCurrentYear() {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Skip logo animation immediately - doesn't wait for animation to complete
export function skipLogoAnimation() {
  // Non-blocking version - animation loads but doesn't block page
  const logoAnimationSection = document.querySelector(".logo-animation");
  if (logoAnimationSection) {
    // Add hidden class after a short delay to let animation play
    const ANIMATION_DURATION = 2800; // SVG animations complete around 2.6s + buffer
    setTimeout(() => {
      logoAnimationSection.classList.add("hidden");
      document.body.classList.remove("logo-animation-active");
    }, ANIMATION_DURATION);
  }
}

// Legacy function - kept for backwards compatibility
export function hideLogoAnimation() {
  skipLogoAnimation();
}
