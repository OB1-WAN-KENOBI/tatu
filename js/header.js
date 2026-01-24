// Header functionality
import { throttle } from "./utils/dom.js";

// Constants
const SCROLL_THRESHOLD = 50;

export function initHeader() {
  const header = document.getElementById("header");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const headerNav = document.getElementById("headerNav");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!header) return;

  // Add scroll effect with throttling for performance
  const handleScroll = throttle(() => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, 100);

  window.addEventListener("scroll", handleScroll, { passive: true });

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
