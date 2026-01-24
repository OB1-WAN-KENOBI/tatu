// Portfolio functionality - gallery and pagination
import { portfolioItems } from "./data/portfolioData.js";
import { openImageModal } from "./imageModal.js";

// Constants
const ANIMATION_DELAY = 200;

// Portfolio state
const portfolioState = {
  currentPage: 1,
  itemsPerPage: 9,
};

function renderPortfolio(page = 1) {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  const totalPages = Math.ceil(portfolioItems.length / portfolioState.itemsPerPage);
  portfolioState.currentPage = page;
  const startIndex = (page - 1) * portfolioState.itemsPerPage;
  const endIndex = startIndex + portfolioState.itemsPerPage;
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
          <img src="${item.image}" alt="${item.alt}" loading="lazy" data-full-image="${item.image}" onerror="this.onerror=null; this.src='assets/images/tattoo-1.webp';">
        </div>
        <p class="gallery-title">${item.title}</p>
      </div>
    `,
      )
      .join("");

    // Fade in animation
    requestAnimationFrame(() => {
      gallery.style.opacity = "1";
      gallery.style.transform = "translateY(0)";
    });
  }, ANIMATION_DELAY);

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

export function initPortfolio() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  // Use event delegation for gallery items to prevent memory leaks
  gallery.addEventListener("click", (e) => {
    const galleryItem = e.target.closest(".gallery-item");
    if (galleryItem) {
      const img = galleryItem.querySelector("img");
      if (img) {
        // Save a focusable element from the gallery item for focus return
        // Try to find a focusable element, or make gallery-item focusable temporarily
        const focusableElement = galleryItem.querySelector("a, button, [tabindex]");
        let elementToFocus = focusableElement;
        
        if (!elementToFocus) {
          // Make gallery-item temporarily focusable
          galleryItem.setAttribute("tabindex", "-1");
          elementToFocus = galleryItem;
        }
        
        openImageModal(
          img.getAttribute("data-full-image"),
          img.getAttribute("alt"),
          elementToFocus
        );
      }
    }
  });

  // Initial render
  renderPortfolio(1);
}
