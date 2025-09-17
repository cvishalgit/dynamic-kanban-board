 import { Storage } from "./storage.js";
import { renderBoard } from "./app.js";

/**
 * Enables drag-and-drop functionality for task cards.
 * Supports both desktop (mouse drag events) and mobile (touch events).
 * Updates task status in localStorage and re-renders the board after drop.
 */
export function enableDragDrop() {
  // Get all task elements and column containers
  const tasks = document.querySelectorAll(".task");
  const columns = document.querySelectorAll(".task-list");

  // ==========================
  // 📌 Desktop Drag & Drop Support
  // ==========================
  tasks.forEach(task => {
    // Make each task draggable
    task.setAttribute("draggable", "true");

    // When dragging starts → attach task ID to transfer data
    task.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", task.dataset.id);
      e.dataTransfer.effectAllowed = "move"; // only move allowed
      task.classList.add("dragging"); // style feedback
    });

    // Remove visual feedback when drag ends
    task.addEventListener("dragend", () => {
      task.classList.remove("dragging");
    });
  });

  columns.forEach(col => {
    // Allow dropping inside columns
    col.addEventListener("dragover", (e) => {
      e.preventDefault(); // required to allow drop
      e.dataTransfer.dropEffect = "move";
      col.classList.add("drag-over"); // highlight column
    });

    // Remove highlight when task leaves column area
    col.addEventListener("dragleave", () => {
      col.classList.remove("drag-over");
    });

    // Handle drop event
    col.addEventListener("drop", (e) => {
      e.preventDefault();
      col.classList.remove("drag-over");

      // Get dragged task ID
      const taskId = e.dataTransfer.getData("text/plain");
      if (!taskId) return;

      // Update task status in localStorage
      let tasks = Storage.getTasks();
      tasks = tasks.map(t =>
        t.id === taskId ? { ...t, status: col.id } : t
      );

      Storage.saveTasks(tasks);

      // Re-render board so task moves visually
      renderBoard();
    });
  });

  // ==========================
  // 📌 Mobile Touch Support
  // ==========================
  tasks.forEach(task => {
    // Track touch start
    task.addEventListener("touchstart", () => {
      task.classList.add("dragging");
      task.dataset.touchId = task.dataset.id; // store dragged task ID
    });

    // Handle touch end (drop)
    task.addEventListener("touchend", (e) => {
      const touch = e.changedTouches[0];
      const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);

      if (elementBelow) {
        const dropZone = elementBelow.closest(".task-list");
        if (dropZone) {
          // Update task status in localStorage
          let tasks = Storage.getTasks();
          tasks = tasks.map(t =>
            t.id === task.dataset.touchId ? { ...t, status: dropZone.id } : t
          );

          Storage.saveTasks(tasks);
          renderBoard();
        }
      }

      // Clean up after drop
      task.classList.remove("dragging");
      delete task.dataset.touchId;
    });
  });
}
