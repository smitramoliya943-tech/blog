# 📝 My Blog - React Blog Management System

A modern and responsive **Blog Management System** built using **React JS, Bootstrap, JSON Server, HTML, CSS, and JavaScript**.

This project allows users to create, view, edit, and delete blog posts through a simple and user-friendly interface.

---

## 🚀 Project Overview

**My Blog** is a CRUD-based React application designed to manage blog posts easily.

The application provides a clean dashboard where:

- Users can view all blogs.
- Users can add new blogs.
- Users can edit existing blogs.
- Users can delete blogs.
- Blog data is stored using a JSON Server REST API.
- The application is fully responsive.
- Bootstrap is used for responsive layout and UI components.

---

## ✨ Features

### 📌 Blog Management

- ➕ Add New Blog
- 👁️ View All Blogs
- ✏️ Edit Blog
- 🗑️ Delete Blog
- 🔄 Update Blog
- ❌ Cancel Edit
- 🖼️ Add Blog Image
- 📂 Add Blog Category
- 📅 Add Blog Date

### 🎨 User Interface

- Clean and modern design
- Responsive layout
- Bootstrap-based UI
- Left-side blog form
- Right-side blog cards
- Responsive blog grid
- Simple color combination
- Hover effects
- Sticky Add Blog form on desktop
- Mobile-friendly design

### ⚡ API Features

The application uses **JSON Server** as a fake REST API.

Supported API operations:

- `GET` - Fetch blogs
- `POST` - Add new blog
- `PUT` - Update existing blog
- `DELETE` - Delete blog

---

## 🛠️ Technologies Used

### Frontend

- React JS
- JavaScript
- HTML5
- CSS3
- Bootstrap 5

### Backend / API

- JSON Server
- REST API

### Development Tools

- Visual Studio Code
- npm
- Vite
- Git
- GitHub

## 📸 Project Screenshots

### 🏠 Home Page

![Home Page](src/assets/screenshots/home.png)

---

### ➕ Add New Blog

![Add New Blog](src/assets/screenshots/add-blog.png)

---

### ✏️ Edit Blog

![Edit Blog](src/assets/screenshots/edit-blog.png)

---

### 🗑️ Delete Blog

![Delete Blog](src/assets/screenshots/delete-blog.png)

---

### 📱 Responsive Design

![Responsive Design](src/assets/screenshots/responsive.png)

---

## 🎥 Project Demo Video

### ▶️ Blog Application Demo

[🎬 Click Here to Watch Project Demo Video](YOUR_VIDEO_LINK_HERE)

---

## 📂 Assets Structure

```text
src/
│
└── assets/
    │
    ├── screenshots/
    │   ├── home.png
    │   ├── add-blog.png
    │   ├── edit-blog.png
    │   ├── delete-blog.png
    │   └── responsive.png
    │
    └── video/
        └── blog-demo.mp4  

---

## 📂 Project Structure

```text
blog/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── db.json
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md


📦 Installation

Follow the steps below to run this project on your computer.

1. Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL

Example:

git clone https://github.com/your-username/blog.git
2. Open the Project
cd blog
3. Install Dependencies
npm install
4. Install JSON Server

If JSON Server is not already installed:

npm install json-server
▶️ Run the Project

You need to run two terminals.

Terminal 1 - Start JSON Server
npx json-server --watch db.json --port 3000

The API will run on:

http://localhost:3000/blogs
Terminal 2 - Start React Application
npm run dev

The React application will normally run on:

http://localhost:5173

Open the URL in your browser.

🔗 API Endpoints

The application uses the following REST API endpoints.

Get All Blogs
GET http://localhost:3000/blogs
Get Single Blog
GET http://localhost:3000/blogs/:id
Add New Blog
POST http://localhost:3000/blogs
Update Blog
PUT http://localhost:3000/blogs/:id
Delete Blog
DELETE http://localhost:3000/blogs/:id
📝 Blog Data Structure

Each blog contains the following information:

{
  "id": 1,
  "title": "Top Places to Visit in India",
  "image": "https://example.com/image.jpg",
  "category": "Travel",
  "date": "28 September 2026"
}
Blog Fields
Field	Description
id	Unique blog ID
title	Blog title
image	Blog image URL
category	Blog category
date	Blog publishing date
🖥️ Application Layout

The application is divided into two main sections.

Left Side - Add Blog

The left section contains the blog form.

Users can enter:

Blog Title
Blog Image URL
Blog Category
Blog Date

Then click:

Add Blog
Right Side - Blog List

All blogs are displayed as responsive cards.

Each card contains:

Blog number
Blog image
Blog title
Category
Date
Edit button
Delete button
✏️ Edit Blog

To edit an existing blog:

Click the Edit button.
The blog information will be loaded into the form.
Change the required information.
Click Update Blog.

The updated information will be saved to db.json.

🗑️ Delete Blog

To delete a blog:

Click the Delete button.
A confirmation message will appear.
Confirm the deletion.
The blog will be removed from the database.
📱 Responsive Design

The application is designed to work on different screen sizes.

Supported devices:

💻 Desktop
💻 Laptop
📱 Mobile
📱 Tablet

Bootstrap grid classes are used to create the responsive layout.

🎨 UI Design

The project uses a simple and clean color combination.

Buttons
🟢 Green - Add / Update
🔵 Blue - Edit
🔴 Red - Delete
⚫ Dark - Blog Header
⚪ White - Blog Cards
🔄 CRUD Operations

This project demonstrates the four basic CRUD operations.

Create

Adding a new blog:

POST
Read

Displaying all blogs:

GET
Update

Editing an existing blog:

PUT
Delete

Removing a blog:

DELETE
📚 Learning Outcomes

By building this project, you can learn:

React components
React Hooks
useState
useEffect
Form handling
Event handling
Conditional rendering
API integration
Fetch API
CRUD operations
REST API concepts
JSON Server
Bootstrap grid system
Responsive web design
JavaScript ES6
Git and GitHub
⚛️ React Concepts Used
useState

Used to manage:

Blog data
Form values
Edit state

Example:

const [blogs, setBlogs] = useState([]);
useEffect

Used to fetch blog data when the application starts.

useEffect(() => {
  fetchBlogs();
}, []);
Fetch API

Used to communicate with JSON Server.

Example:

const response = await fetch(API_URL);
const data = await response.json();
📸 Project Screenshots

You can add your project screenshots here.

Example:

![Home Page](screenshots/home.png)

You can create a folder:

screenshots/

and add your screenshots inside it.

🔮 Future Improvements

The project can be improved with additional features such as:

🔍 Blog Search
🏷️ Category Filter
📄 Blog Details Page
❤️ Like System
💬 Comment System
👤 User Authentication
🔐 Login and Signup
🌙 Dark Mode
📑 Pagination
📊 Blog Dashboard
☁️ Real Backend Database
🖼️ Image Upload
🔔 Notifications
🐛 Error Handling

The application includes basic error handling for API requests.

If the JSON Server is not running, blog data may not load.

Make sure JSON Server is running:

npx json-server --watch db.json --port 3000
🔧 Available Commands
Start React App
npm run dev
Build Project
npm run build
Preview Production Build
npm run preview
Start JSON Server
npx json-server --watch db.json --port 3000
🌐 Deployment

The React frontend can be deployed using platforms such as:

GitHub Pages
Vercel
Netlify

Note: JSON Server is mainly intended for development/testing. For a production application, use a real backend/database service.

👨‍💻 Author

Smit Ramoliya

Frontend / React JS Developer

Skills
HTML
CSS
JavaScript
Bootstrap
React JS
Git
GitHub
REST API
⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.

📄 License

This project is created for learning and educational purposes.

You are free to use and modify the project for learning and personal use.

🎯 Conclusion

My Blog is a simple React-based Blog Management System that demonstrates how a frontend application can communicate with a REST API and perform complete CRUD operations.

It is a useful project for understanding:

React JS
   ↓
Components
   ↓
State Management
   ↓
API Integration
   ↓
JSON Server
   ↓
CRUD Operations

Thank you for checking out this project! 🚀
