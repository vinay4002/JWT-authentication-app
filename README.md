# Full-Stack Authentication App

A simple full-stack project built with **React (frontend)**, **Node.js + Express (backend)**, and **MongoDB (database)**.  
It demonstrates secure user registration, login, and session handling using **JWT tokens**.

---

## 🚀 Features
- **Frontend (React):**
  - User registration form
  - Login form
  - Session handling with JWT stored in localStorage
  - Redirect to protected pages when logged in

- **Backend (Node.js + Express):**
  - Register new users and save them in MongoDB
  - Login with email and password
  - Generate a **JWT token** on successful login
  - Token validity: **1 hour**
  - Middleware to protect routes using JWT

---

## 🛠 Tech Stack
- **Frontend:** React, Axios (for API calls)
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Auth:** JWT (JSON Web Tokens)

---

## 🔑 Authentication Flow
1. **Register User (React form)** → Data sent to backend → Stored in MongoDB.
2. **Login User (React form)** → Backend validates credentials.
3. **JWT Token Issued** → Sent to frontend, stored in localStorage.
4. **Session Active** → Token required in `Authorization` header for protected API calls.
5. **Token Expiry** → After 1 hour, user must log in again.

---

## ⚙️ Setup Instructions

### Backend
```bash
# Clone repository
git clone https://github.com/yourusername/fullstack-auth.git
cd fullstack-auth/backend

# Install dependencies
npm install

# Start server
npm run dev
