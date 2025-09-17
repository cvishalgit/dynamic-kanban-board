 
// Import helper function for creating DOM elements
import { createElement } from "./dom.js";

/**
 * Task module
 * Responsible for rendering individual task cards in the Kanban board.
 */
export const Task = {
  /**
   * Render a task card element
   * @param {Object} task - Task object containing task details
   * @param {string} task.id - Unique identifier for the task
   * @param {string} task.title - Task title
   * @param {string} task.description - Task description
   * @returns {HTMLElement} Task card element ready to be appended to the board
   */
  render: (task) => {
    // Create card container <div class="task">
    const card = createElement("div", "task");

    // Make the task draggable in desktop browsers
    card.setAttribute("draggable", "true");

    // Attach unique task ID for tracking during drag/drop
    card.dataset.id = task.id;

    // Create and populate title <h4>
    const title = createElement("h4", "", task.title);

    // Create and populate description <p>
    const desc = createElement("p", "", task.description);

    // Append title and description into the card
    card.append(title, desc);

    // Return the complete task card
    return card;
  }
};
