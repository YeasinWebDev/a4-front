# 📚 Minimal Library Management System - [Frontend](https://a4-front-teal.vercel.app) | [Backend](https://github.com/YeasinWebDev/a4-back) 

A clean and functional library management system built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**. This minimal system allows users to manage books and borrow them, with a simple UI and real-time API interaction — **no authentication, no filters, no payment integration**.

## 🚀 Features

### 1. Public Routes
- All pages are accessible without login.
- Focused only on essential library operations (CRUD + Borrow + Summary).

### 2. Book Management 🛠️
- **Book List grid**:  
  View all books with fildes:  
  `Title | Author | Genre | ISBN | Copies | Availability | Actions`

- **Actions Include**:
  - 📝 **Edit Book**:  
    - Opens a pre-filled form.
    - Updates book via API.
    - Business logic: If `copies` is set to 0 → book is marked unavailable.

  - ❌ **Delete Book**:  
    - Prompts a confirmation dialog.
    - On confirm, deletes book and updates UI.

  - 📦 **Borrow Book**:  
    - Opens a borrow form with `Quantity` and `Due Date`.
    - Quantity must be ≤ available copies.
    - If quantity reaches 0 → book becomes unavailable.

- **Add New Book**:
  - Button opens a form to add a new book.
  - Fields: `Title`, `Author`, `Genre`, `ISBN`, `Description`, `Copies`, `Available (optional)`
  - Auto-redirects to book list and refreshes UI.

---

### 3. Borrow Functionality
- Borrow a book from the book list.
- Fields: `Quantity`, `Due Date`
- On successful borrow:
  - Book's copies are updated.
  - Redirects to **Borrow Summary**.

---

### 4. 📈 Borrow Summary
- Displays total borrowed quantity for each book.
- Columns: `Book Title | ISBN | Total Quantity Borrowed`
- Data fetched from backend aggregation endpoint.

---

## 🧩 Tech Stack

| Tech | Description |
|------|-------------|
| **React** | UI Library |
| **TypeScript** | Static typing |
| **Redux Toolkit + RTK Query** | State & data fetching |
| **Tailwind CSS** | Styling |
| **Custom form logic** | Form handling |
| **Vite** | Development server & build tool |

---


## 📧 Contact
If you have any questions or suggestions, feel free to reach out!

* Portfolio : [Yeasin Arafat](https://yeasin-arafat-portfolio.netlify.app)
* LinkedIn: [Yeasin Arafat](https://www.linkedin.com/in/yeasinarafat121)


