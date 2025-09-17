 import { Storage } from "./storage.js";
import { Task } from "./tasks.js";
import { enableDragDrop } from "./dragdrop.js";

// ========================================
// 📌 Main App Logic (app.js)
// ========================================

// Grab references to form elements
const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");

/**
 * Event listener for creating a new task
 * Triggered when the form is submitted.
 */
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  // Build new task object
  const newTask = {
    id: Date.now().toString(),   // unique ID (timestamp-based)
    title: titleInput.value,     // task title from input
    description: descInput.value, // task description
    status: "todo"               // default column = "To Do"
  };

  // Get existing tasks, add the new one, and save to localStorage
  const tasks = Storage.getTasks();
  tasks.push(newTask);
  Storage.saveTasks(tasks);

  // Re-render the board to show the new task
  renderBoard();

  // Reset form inputs
  form.reset();
});

/**
 * Renders all tasks into their respective columns (To Do, In Progress, Done).
 * Reads tasks from localStorage, filters by status, and appends task cards.
 */
export function renderBoard() {
  // Loop over each board column by ID
  ["todo", "in-progress", "done"].forEach(status => {
    const column = document.getElementById(status);
    column.innerHTML = ""; // clear column before re-rendering

    // Filter tasks by current column status and render them
    Storage.getTasks()
      .filter(task => task.status === status)
      .forEach(task => {
        const card = Task.render(task); // create task card element
        column.appendChild(card);       // append card into column
      });
  });

  // Enable drag & drop after rendering tasks
  enableDragDrop();
}

// ========================================
// 📌 Initial Render
// ========================================
renderBoard();
