### 📁 `backend/README.md`

```markdown
# 🧠 Task Management Backend

This is the **backend** for the Task Management System — a RESTful API built using **Express.js** with **JWT-based authentication** and **MongoDB** for data persistence.

🔗 **Live API**: [View Live Backend](https://task-management-server-neon-nu.vercel.app/)

---

## 📦 Features

- 🔐 JWT token generation and verification
- 📄 CRUD operations for tasks
- 🔒 Secured private routes
- 🌐 CORS and dotenv support

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- CORS + dotenv

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-management-backend.git
cd task-management-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root and add:

```env
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret_key
```

Replace values with your own MongoDB URI and secret.

### 4. Start the Server

```bash
npm start
```

Or use Nodemon for development:

```bash
npm run dev
```

---

## 📂 API Endpoints

| Method | Endpoint                        | Description                  |
|--------|----------------------------------|------------------------------|
| POST   | `/jwt`                          | Generate JWT for a user     |
| GET    | `/tasks/:email`                | Get tasks by user email     |
| POST   | `/tasks`                       | Create a new task           |
| PATCH  | `/tasks/:id`                   | Update a task               |
| DELETE | `/tasks/:id`                   | Delete a task               |

---

## 📂 Folder Structure

```
backend/
│
├── controllers/        # Business logic for JWT & Tasks
├── routes/             # Route handlers
├── models/             # Mongoose schema definitions
├── middleware/         # JWT verification middleware
├── utils/              # Optional helper functions
└── index.js            # Entry point
```

---

## 📡 Deployment

The backend is deployed on **Vercel (Serverless Functions)**.

---


