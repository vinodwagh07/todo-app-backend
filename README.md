# 📝 Todo App Backend

This is the backend API for a simple Todo application built using **Node.js**, **Express**, and **MongoDB**. It allows users to create, read, update, and delete todos via RESTful APIs.

---

## 🚀 Features

- Create a new todo
- Get all todos
- Update a todo
- Delete a todo by ID
- MongoDB connection with Mongoose
- Organized with routes, controllers, and models
- Uses `.env` file for environment configuration (e.g., PORT, DATABASE_URL)

---

## 📁 Folder Structure

```
todo-app/
├── config/
│   └── database.js        # MongoDB connection config
├── controllers/
│   ├── createTodo.js
│   ├── deleteTodoById.js
│   ├── getTodos.js
│   └── updateTodo.js
├── models/
│   └── Todo.js            # Mongoose schema
├── routes/
│   └── todos.js           # API routes
├── .env                   # Environment variables
├── .gitignore
├── index.js               # Main entry point
├── package.json
└── README.md              # Project documentation
```

---

## 🔧 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/vinodwagh07/todo-app-backend.git
cd todo-app-backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the root folder and add:

```
PORT=5000
DATABASE_URL=your_mongodb_connection_string
```

4. **Run the server:**

```bash
npm start
```

The server will run on `http://localhost:5000` (or whichever port you set in `.env`).

---

## 📬 API Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/api/todos`       | Get all todos       |
| POST   | `/api/todos`       | Create new todo     |
| PUT    | `/api/todos/:id`   | Update todo by ID   |
| DELETE | `/api/todos/:id`   | Delete todo by ID   |

---

## 🧾 Example Todo Schema

```json
{
  "title": "Finish project",
  "description": "Complete the MERN project by Monday"
}
```

---

## 📦 Dependencies

- express
- mongoose
- dotenv
- nodemon (dev)

---


