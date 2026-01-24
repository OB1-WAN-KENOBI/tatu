// DOM utility functions

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

// Hide logo animation section after animation completes
export function hideLogoAnimation() {
  const logoAnimationSection = document.querySelector(".logo-animation");
  if (logoAnimationSection) {
    // Last animation ends at 1.6s delay + 1s duration = 2.6s, add extra time for smooth transition
    const LOGO_ANIMATION_DELAY = 3000;
    const LOGO_ANIMATION_FADE_OUT = 500;
    
    setTimeout(() => {
      logoAnimationSection.style.opacity = "0";
      logoAnimationSection.style.transition = "opacity 0.5s ease-out";
      setTimeout(() => {
        logoAnimationSection.style.display = "none";
        // Unblock scroll after animation is hidden
        document.body.classList.remove("logo-animation-active");
      }, LOGO_ANIMATION_FADE_OUT);
    }, LOGO_ANIMATION_DELAY);
  }
}
