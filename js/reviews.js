// Reviews slider functionality
import { reviews } from "./data/reviewsData.js";

// Reviews state
const reviewsState = {
  currentIndex: 0,
  dots: null,
};

function renderReview(index) {
  const reviewCard = document.getElementById("reviewCard");
  if (!reviewCard) return;

  if (index < 0 || index >= reviews.length) return;

  const review = reviews[index];
  reviewCard.innerHTML = `
   
    <blockquote class="review-text">${review.text}</blockquote>
    <p class="review-name">— ${review.name}</p>
  `;
}

function goToReview(index) {
  if (index < 0 || index >= reviews.length) return;

  reviewsState.currentIndex = index;
  renderReview(index);

  // Update dots using stored reference
  if (reviewsState.dots) {
    reviewsState.dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
}

export function initReviews() {
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

  // Store dots reference for optimization
  reviewsState.dots = sliderDots.querySelectorAll(".dot");

  // Use event delegation for dots to prevent memory leaks
  sliderDots.addEventListener("click", (e) => {
    const dot = e.target.closest(".dot");
    if (dot) {
      const index = parseInt(dot.getAttribute("data-index"), 10);
      if (!isNaN(index)) {
        goToReview(index);
      }
    }
  });

  // Navigation buttons
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      reviewsState.currentIndex =
        (reviewsState.currentIndex - 1 + reviews.length) % reviews.length;
      goToReview(reviewsState.currentIndex);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      reviewsState.currentIndex = (reviewsState.currentIndex + 1) % reviews.length;
      goToReview(reviewsState.currentIndex);
    });
  }

  // Initial render
  renderReview(0);
}
