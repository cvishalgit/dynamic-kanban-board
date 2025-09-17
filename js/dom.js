 // ========================================
// 📌 DOM Utility Functions
// ========================================

/**
 * Creates and returns a DOM element with optional class and text content.
 *
 * @param {string} tag - The type of HTML element to create (e.g., "div", "span").
 * @param {string} [className] - Optional CSS class(es) to apply to the element.
 * @param {string} [text=""] - Optional text content to set inside the element.
 * @returns {HTMLElement} The newly created DOM element.
 *
 * @example
 * // Create a <div> with class "task-card" and text "New Task"
 * const taskCard = createElement("div", "task-card", "New Task");
 */
export const createElement = (tag, className, text = "") => {
  const el = document.createElement(tag);

  // Add CSS class if provided
  if (className) el.className = className;

  // Add text content if provided
  if (text) el.textContent = text;

  return el;
};
