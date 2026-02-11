📚 Online Library System
📌 Overview

Online Library System is a React application built using Vite, React Router, and Redux Toolkit.
It allows users to browse books, filter by category, search, sort, view details, and add new books dynamically.

----------------------------------------------------------------------------------------------------------

🎯 Objective

To build a fully functional online library system demonstrating:

Component-based architecture

Dynamic routing

Redux state management

Form validation

Filtering and sorting logic

Clean UI/UX design

----------------------------------------------------------------------------------------------------------

🚀 Features
1️⃣ Home Page

Welcome message

Book categories (Fiction, Non-Fiction, Sci-Fi, Biography)

Popular books displayed as cards

Navigation bar

2️⃣ Browse Books Page

View all books

Filter by category

Dynamic routing (/books/:category)

Search by title or author

Sort by:

Rating (High → Low)

Rating (Low → High)

Title (A → Z)

3️⃣ Book Details Page

Dynamic routing (/book/:id)

Displays:

Title

Author

Category

Description

Rating

Back to Browse button

4️⃣ Add Book Page

Styled form

Validation for all fields

Redux state management

New books added to the beginning

Redirect after submission

5️⃣ 404 Page

Displays invalid URL

Navbar hidden

Button to return to Home page

----------------------------------------------------------------------------------------------------------

🛠️ Technologies Used

React (Vite)

React Router DOM

Redux Toolkit

JavaScript (ES6)

CSS (Custom styling)

----------------------------------------------------------------------------------------------------------

📂 Project Structure

online-library/
│
├── public/
│
├── src/
│   ├── data/
│   │   └── books.js
│   │
│   ├── redux/
│   │   ├── booksSlice.js
│   │   └── store.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── BrowseBooks.jsx
│   │   ├── BookDetails.jsx
│   │   ├── AddBook.jsx
│   │   └── NotFound.jsx
│   │
│   ├── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

