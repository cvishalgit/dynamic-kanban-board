/**
 * Storage utility for tasks
 */
export const Storage = {
  /**
   * Get all tasks from localStorage
   * @returns {Array} tasks
   */
  getTasks: () => JSON.parse(localStorage.getItem("tasks")) || [],

  /**
   * Save tasks array to localStorage
   * @param {Array} tasks
   */
  saveTasks: (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks)),
};
