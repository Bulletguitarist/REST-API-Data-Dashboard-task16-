# REST API Data Dashboard (Frontend Integration)

## 📌 Project Overview
This project is an interactive **REST API Data Dashboard** built using **HTML, CSS, and Vanilla JavaScript**.

The dashboard fetches real-world user data from a public REST API and displays it dynamically with filtering, sorting, and pagination features.

It demonstrates real-world frontend data handling, client-side rendering, and dashboard logic implementation.

---

## 📂 Project Structure
task16/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

## 🌍 Public API Used

### JSONPlaceholder API
Endpoint: https://jsonplaceholder.typicode.com/users

This API provides structured user data including:
- Name
- Email
- Company details
- Contact information

No authentication is required.

---

## 🎯 Objectives
- Consume a public REST API
- Design a structured dashboard layout
- Fetch data asynchronously using Fetch API
- Parse and render JSON data dynamically
- Implement filtering and sorting
- Add pagination for performance simulation
- Handle API errors gracefully
- Optimize DOM updates
- Document API usage and data flow

---

## 🧱 Technologies Used
- **HTML**
- **CSS (Modern Responsive UI)**
- **JavaScript (Fetch API, DOM Manipulation)**

---

## ✨ Features Implemented

### 📡 API Integration
- Asynchronous data fetching using `fetch()`
- JSON response parsing
- Error handling using `try...catch`

### 🔎 Filtering
- Search users by name
- Real-time filtering using JavaScript array methods

### 🔃 Sorting
- Sort users by name or email
- Implemented using `Array.sort()`

### 📄 Pagination
- Client-side pagination logic
- Page navigation with Next/Previous buttons

### 🎨 Modern UI
- Responsive grid layout
- Glassmorphism header design
- Interactive card hover effects
- Gradient action buttons
- Clean SaaS-style layout

---

## 🧠 Key JavaScript Concepts Used
- Fetch API
- Async/Await
- Array methods (`filter`, `sort`, `slice`)
- Dynamic DOM creation
- Event listeners
- State management (current page tracking)
- Optimized re-rendering

---

## 🔄 Data Flow Explanation

1. Fetch user data from REST endpoint
2. Store response in a local JavaScript array
3. Apply search filter
4. Apply sorting logic
5. Apply pagination logic
6. Render final processed data to the DOM

This ensures clean separation between:
- Data fetching
- Data transformation
- UI rendering

---

## 🧪 Testing & Validation
- Verified API response handling
- Tested filtering and sorting combinations
- Checked pagination edge cases
- Tested error message display
- Verified responsiveness across screen sizes
- Tested network failure using browser DevTools

---

## 🧠 Learning Outcomes
Through this project, I learned:
- How to integrate REST APIs in frontend applications
- How to manage and transform structured JSON data
- How filtering, sorting, and pagination work in dashboards
- How to optimize DOM rendering
- How real-world data dashboards are structured


## 👤 Author
**Jyotirmoy Mahapatra**  
 Intern- Elevate Labs

