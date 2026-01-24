// Image Modal functionality
let isModalInitialized = false;
let modalFocusTrap = null;
let lastFocusedElement = null;

function trapFocus(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  return function (e) {
    if (e.key !== "Tab") return;

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  };
}

export function openImageModal(imageSrc, imageAlt, elementToFocus = null) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imageModalImg");
  const modalClose = document.getElementById("imageModalClose");
  if (!modal || !modalImg) return;

  // Save the element that triggered the modal
  if (elementToFocus) {
    lastFocusedElement = elementToFocus;
  } else if (!lastFocusedElement) {
    lastFocusedElement = document.activeElement;
  }

  modalImg.src = imageSrc;
  modalImg.alt = imageAlt || "Изображение портфолио";

  // Handle image load errors
  modalImg.onerror = function () {
    this.onerror = null;
    this.src = "assets/images/tattoo-1.webp";
  };

  // Set ARIA attributes for accessibility
  modal.setAttribute("aria-hidden", "false");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Просмотр изображения");

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Focus trap
  modalFocusTrap = trapFocus(modal);
  modal.addEventListener("keydown", modalFocusTrap);

  // Focus the close button for accessibility
  if (modalClose) {
    setTimeout(() => modalClose.focus(), 100);
  }
}

export function closeImageModal() {
  const modal = document.getElementById("imageModal");
  if (!modal) return;

  // Remove focus trap
  if (modalFocusTrap) {
    modal.removeEventListener("keydown", modalFocusTrap);
    modalFocusTrap = null;
  }

  // Update ARIA attributes
  modal.setAttribute("aria-hidden", "true");
  modal.removeAttribute("role");
  modal.removeAttribute("aria-modal");
  modal.removeAttribute("aria-label");

  modal.classList.remove("active");
  document.body.style.overflow = "";

  // Return focus to the element that opened the modal
  if (lastFocusedElement) {
    if (typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
      // Remove temporary tabindex if it was added
      if (lastFocusedElement.hasAttribute("tabindex") && lastFocusedElement.getAttribute("tabindex") === "-1") {
        lastFocusedElement.removeAttribute("tabindex");
      }
    }
    lastFocusedElement = null;
  }
}

function handleModalEscape(e) {
  const modal = document.getElementById("imageModal");
  if (e.key === "Escape" && modal && modal.classList.contains("active")) {
    closeImageModal();
  }
}

export function initImageModal() {
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

  // Close on ESC key - add only once
  if (!isModalInitialized) {
    document.addEventListener("keydown", handleModalEscape);
    isModalInitialized = true;
  }
}
