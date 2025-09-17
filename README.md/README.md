# 📝 Dynamic Kanban Board

A simple **Kanban Board** web app built with **Core JavaScript (no frameworks)**.  
Supports creating, dragging, and persisting tasks across **To Do, In Progress, and Done** columns.

---

## 🚀 Features
- **Create Tasks** → Add task title & description via form.  
- **Three Columns** → To Do, In Progress, Done.  
- **Drag & Drop** → Move tasks between columns (desktop + mobile supported).  
- **Persistence** → Tasks saved in `localStorage`, remain after page reload.  
- **Scroll Support** → Each column scrolls independently when filled.  
- **Counters** → Each column header shows total tasks inside.  
- **Responsive UI** → Works on both desktop & mobile.  

---

## 🏗️ Project Structure

📂 kanban-board
┣ 📂 js
┃ ┣ 📜 app.js # Main app logic (form, rendering, counters)
┃ ┣ 📜 storage.js # LocalStorage wrapper (get/save tasks)
┃ ┣ 📜 tasks.js # Task card rendering
┃ ┣ 📜 dragdrop.js # Drag & drop (desktop + mobile)
┃ ┗ 📜 dom-utils.js # Helper for DOM creation
┣ 📂 css
┃ ┗ 📜 style.css # Styles for board & tasks
┣ 📂 README.md
┃ ┣ 📜 README.md # Project documentation
┣ 📜 index.html # Main UI layout 

---

## 🧩 Code Architecture

- **`storage.js`** → Handles persistence using `localStorage`.  
- **`tasks.js`** → Generates reusable task card DOM elements.  
- **`dragdrop.js`** → Adds drag & drop listeners for moving tasks across columns.  
- **`dom-utils.js`** → Small utility for creating DOM elements easily.  
- **`app.js`** → Core controller that:
  - Handles task creation
  - Renders tasks in correct columns
  - Updates counters
  - Initializes drag/drop  
- **`index.html`** → Defines the 3 Kanban columns (`todo`, `in-progress`, `done`).  
- **`style.css`** → Polished UI, scrollable columns, responsive design.  

---

 ## 🚀 Live Demo

https://cvishalgit.github.io/dynamic-kanban-board/
