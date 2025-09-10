# 🔐 AuthFlow — Authentication System

AuthFlow is a robust, full‑stack authentication system built with React (frontend) and Node.js + Express + MongoDB (backend). It provides secure user registration and login using JWTs, bcrypt password hashing, protected and role‑based routes, and easy local or cloud deployment.

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-ISC-green.svg?style=flat-square)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-14+-339933?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248?style=flat-square&logo=mongodb)

**A robust full-stack authentication system built with React and Node.js**

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#getting-started) • [API](#api-endpoints) • [Security](#security-features) • [Author](#author)

</div>

## ✨ Features

- **🔒 User Registration & Login**: Secure user authentication with JWT tokens
- **🛡️ Password Encryption**: Uses bcrypt for secure password hashing
- **🚫 Protected Routes**: Client-side and server-side route protection
- **📱 Responsive Design**: Modern UI that works on all devices
- **👥 Role-Based Access**: Support for user roles (user, admin)
- **💾 Persistent Sessions**: Login state persists across browser sessions

## 🛠️ Tech Stack

<table>
  <tr>
    <th>Frontend</th>
    <th>Backend</th>
  </tr>
  <tr>
    <td>
      <ul>
        <li><strong>React 18</strong> - Modern React with hooks</li>
        <li><strong>React Router DOM</strong> - Client-side routing</li>
        <li><strong>Axios</strong> - HTTP client for API calls</li>
        <li><strong>CSS3</strong> - Modern styling with CSS variables</li>
      </ul>
    </td>
    <td>
      <ul>
        <li><strong>Node.js</strong> - JavaScript runtime</li>
        <li><strong>Express.js</strong> - Web application framework</li>
        <li><strong>MongoDB</strong> - NoSQL database</li>
        <li><strong>Mongoose</strong> - MongoDB object modeling</li>
        <li><strong>JWT</strong> - JSON Web Tokens for authentication</li>
        <li><strong>bcrypt</strong> - Password hashing</li>
        <li><strong>Helmet</strong> - Security middleware</li>
        <li><strong>CORS</strong> - Cross-origin resource sharing</li>
      </ul>
    </td>
  </tr>
</table>

## 📂 Project Structure

```
/
├── backend/                 # Server-side code
│   ├── middleware/
│   │   └── auth.js          # Authentication middleware
│   ├── models/
│   │   └── User.js          # User model schema
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── protected.js     # Protected routes
│   ├── .env.example         # Environment variables template
│   ├── package.json         # Backend dependencies
│   └── server.js            # Express server setup
├── frontend/                # Client-side code
│   ├── public/
│   │   └── index.html       # HTML template
│   ├── src/
│   │   ├── App.jsx          # Main React component
│   │   ├── index.css        # Styles
│   │   └── index.jsx        # React entry point
│   └── package.json         # Frontend dependencies
└── package.json             # Root package.json
```

## 🚀 Getting Started

### Prerequisites

<table>
  <tr>
    <td><strong>Node.js</strong></td>
    <td>v14 or higher</td>
  </tr>
  <tr>
    <td><strong>MongoDB</strong></td>
    <td>Local or cloud instance</td>
  </tr>
  <tr>
    <td><strong>Package Manager</strong></td>
    <td>npm or yarn</td>
  </tr>
</table>

### Installation

<details open>
<summary><strong>Step 1: Clone the repository</strong></summary>

```bash
git clone https://github.com/abhrajyoti-01/auth-system.git
cd auth-system
```
</details>

<details open>
<summary><strong>Step 2: Install dependencies</strong></summary>

```bash
npm run install-all
```
</details>

<details open>
<summary><strong>Step 3: Configure environment</strong></summary>

```bash
cd backend
cp .env.example .env
```

Update the `.env` file with your configuration:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/auth-system
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d
PORT=5000
```
</details>

<details open>
<summary><strong>Step 4: Start MongoDB</strong></summary>

Make sure MongoDB is running on your system or connect to your cloud instance.
</details>

<details open>
<summary><strong>Step 5: Run the application</strong></summary>

Start the backend server:
```bash
npm run dev-backend
```

In a new terminal, start the frontend:
```bash
npm run dev-frontend
```
</details>

### 🌐 Access the Application

<div align="center">

| Service | URL | Description |
|---------|-----|-------------|
| Frontend | [http://localhost:3000](http://localhost:3000) | React application |
| Backend API | [http://localhost:5000](http://localhost:5000) | Express server |

</div>

## 🔌 API Endpoints

<div align="center">

### Authentication Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|--------------|
| `POST` | `/api/auth/register` | Register a new user | No |
| `POST` | `/api/auth/login` | Login user | No |

### Protected Routes

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|--------------|
| `GET` | `/api/protected/public` | Public route | No |
| `GET` | `/api/protected/profile` | Get user profile | Yes |
| `GET` | `/api/protected/admin` | Admin only route | Yes + Admin role |

</div>

## 🎯 Features Implemented

<div class="features-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<div>

### Frontend
- ✅ Modern React with functional components and hooks
- ✅ React Router for navigation
- ✅ Responsive design with CSS Grid and Flexbox
- ✅ Form validation and error handling
- ✅ JWT token storage and management
- ✅ Protected routes
- ✅ Beautiful UI with animations and transitions

</div>

<div>

### Backend
- ✅ RESTful API with Express.js
- ✅ MongoDB integration with Mongoose
- ✅ JWT authentication
- ✅ Password hashing with bcrypt
- ✅ Input validation
- ✅ Error handling
- ✅ Security middleware (Helmet, CORS, Rate limiting)
- ✅ Role-based authorization

</div>

</div>

## 🛡️ Security Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🔒 **Password Hashing** | bcrypt with 12 salt rounds |
| ⏱️ **Token Expiration** | JWTs expire after configured time |
| 🚫 **Protected Routes** | Server and client-side protection |
| ✅ **Input Validation** | Validation and sanitization of all inputs |
| 🔍 **Security Headers** | Implemented using Helmet middleware |
| 🚦 **Rate Limiting** | Prevents brute force and DoS attacks |
| 🌐 **CORS** | Configured for secure cross-origin requests |

</div>

## 👥 Contributing

<ol>
  <li>Fork the repository</li>
  <li>Create a feature branch (<code>git checkout -b feature/amazing-feature</code>)</li>
  <li>Make your changes</li>
  <li>Commit your changes (<code>git commit -m 'Add some amazing feature'</code>)</li>
  <li>Push to the branch (<code>git push origin feature/amazing-feature</code>)</li>
  <li>Open a Pull Request</li>
</ol>

## 👨‍💻 Author

<div align="center">
  <img src="https://github.com/abhrajyoti-01.png" width="100px" style="border-radius: 50%;" alt="abhrajyoti-01"/><br />
  <strong>Abhrajyoti</strong><br />
  <a href="https://github.com/abhrajyoti-01">@abhrajyoti-01</a>
</div>

## 📜 License

This project is licensed under the MIT License.

---

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/abhrajyoti-01">Abhrajyoti</a></sub>
</div>
