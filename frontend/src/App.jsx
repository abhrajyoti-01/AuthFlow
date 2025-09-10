import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import axios from "axios";
import "./index.css";

axios.defaults.baseURL = "http://localhost:5000/api";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-title">
          <div className="logo-icon">⚡</div>
          <span>AuthFlow</span>
        </Link>
        <div className="nav-links">
          {user ? (
            <>
              <Link to="/dashboard" className="nav-link">
                <span className="nav-icon">📊</span>
                Dashboard
              </Link>
              <button onClick={onLogout} className="nav-link logout-btn">
                <span className="nav-icon">🚪</span>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                <span className="nav-icon">🔑</span>
                Login
              </Link>
              <Link to="/register" className="nav-link register-btn">
                <span className="nav-icon">✨</span>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-badge">
          <span className="badge-icon">🚀</span>
          Fast, friendly authentication
        </div>
        <h1 className="hero-title">
          Secure
          <span className="highlight-text"> authentication</span>
        </h1>
        <p className="hero-description">
          Sign in and sign up without the hassle. We handle tokens and password
          safety so you can focus on building great products.
        </p>

        <div className="hero-actions">
          <Link to="/register" className="btn btn-primary">
            <span>Create an account</span>
            <span className="btn-icon">→</span>
          </Link>
          <Link to="/login" className="btn btn-outline">
            <span>Sign in</span>
          </Link>
        </div>

        <div className="features-section">
          <div className="features-container">
            <div className="feature-card security-card">
              <div className="feature-header">
                <div className="feature-icon-modern security">
                  <div className="icon-bg"></div>
                  <div className="icon-content">🛡️</div>
                </div>
                <div className="feature-badge enterprise">RELIABLE</div>
              </div>
              <div className="feature-content">
                <h3>Strong protection</h3>
                <p>
                  We use secure tokens and hashed passwords to keep accounts
                  safe — privacy and reliability you can count on.
                </p>
              </div>
            </div>

            <div className="feature-card design-card">
              <div className="feature-header">
                <div className="feature-icon-modern responsive">
                  <div className="icon-bg"></div>
                  <div className="icon-content">📱</div>
                </div>
                <div className="feature-badge mobile">MOBILE-FIRST</div>
              </div>
              <div className="feature-content">
                <h3>Feels right everywhere</h3>
                <p>
                  A clean, responsive interface that works smoothly on phones,
                  tablets, and desktops — no fuss, just a great experience.
                </p>
              </div>
            </div>

            <div className="feature-card performance-card">
              <div className="feature-header">
                <div className="feature-icon-modern performance">
                  <div className="icon-bg"></div>
                  <div className="icon-content">⚡</div>
                </div>
                <div className="feature-badge speed">SNAPPY</div>
              </div>
              <div className="feature-content">
                <h3>Fast and dependable</h3>
                <p>
                  Optimized to load quickly and keep things responsive — your
                  users will notice the difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <p>
            © 2025 AuthFlow. All rights reserved. Made by{" "}
            <a
              href="https://abhra.me"
              target="_blank"
              rel="noopener noreferrer"
              className="author-link"
              style={{
                background: "linear-gradient(90deg, #7c5cff, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Abhra
            </a>
          </p>
          <div className="social-proof">
            <span className="proof-item">🔒 SOC 2 Compliant</span>
            <span className="proof-item">⭐ 99.9% Uptime</span>
            <span className="proof-item">🌍 Global CDN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      setIsError(true);
      return;
    }

    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await axios.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      setMessage(response.data.message);
      setIsError(false);
      onRegister(response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="form-card">
        <div className="form-header">
          <div className="form-icon">✨</div>
          <h2>Create Your Account</h2>
          <p>Join thousands of developers building the future</p>
        </div>

        {message && (
          <div className={`alert ${isError ? "alert-error" : "alert-success"}`}>
            <span className="alert-icon">{isError ? "⚠️" : "✅"}</span>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="modern-form">
          <div className="form-group">
            <label htmlFor="name">
              <span className="label-icon">👤</span>
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <span className="label-icon">📧</span>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <span className="label-icon">🔒</span>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              placeholder="Create a strong password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              <span className="label-icon">🔐</span>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-large"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading-spinner"></span>
                Creating Account...
              </>
            ) : (
              <>
                <span>Create Account</span>
                <span className="btn-icon">→</span>
              </>
            )}
          </button>
        </form>

        <div className="form-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="link-primary">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await axios.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      setMessage(response.data.message);
      setIsError(false);
      onLogin(response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="form-card">
        <div className="form-header">
          <div className="form-icon">🔑</div>
          <h2>Welcome Back</h2>
          <p>Sign in to continue your journey</p>
        </div>

        {message && (
          <div className={`alert ${isError ? "alert-error" : "alert-success"}`}>
            <span className="alert-icon">{isError ? "⚠️" : "✅"}</span>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="modern-form">
          <div className="form-group">
            <label htmlFor="email">
              <span className="label-icon">📧</span>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <span className="label-icon">🔒</span>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-large"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading-spinner"></span>
                Signing In...
              </>
            ) : (
              <>
                <span>Sign In</span>
                <span className="btn-icon">→</span>
              </>
            )}
          </button>
        </form>

        <div className="form-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="link-primary">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h2>Welcome back, {user.name.split(" ")[0]}! 👋</h2>
          <p>Here's what's happening with your account today.</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="user-avatar">
              <span className="avatar-text">
                {user.name.charAt(0).toUpperCase()}
              </span>
              <div className="avatar-status"></div>
            </div>
            <div className="user-details">
              <h3>{user.name}</h3>
              <p className="user-email">
                <span className="detail-icon">📧</span>
                {user.email}
              </p>
              <p className="user-role">
                <span className="detail-icon">🎯</span>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Member
              </p>
              <p className="user-joined">
                <span className="detail-icon">📅</span>
                Member since{" "}
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card active">
            <div className="stat-icon">🟢</div>
            <div className="stat-content">
              <h3>Account Status</h3>
              <p>Active & Verified</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>Sessions</h3>
              <p>12 This Month</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔐</div>
            <div className="stat-content">
              <h3>Security Score</h3>
              <p>Excellent</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-content">
              <h3>Performance</h3>
              <p>99.9% Uptime</p>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            <button className="action-card">
              <span className="action-icon">⚙️</span>
              <span>Account Settings</span>
            </button>
            <button className="action-card">
              <span className="action-icon">🔒</span>
              <span>Security</span>
            </button>
            <button className="action-card">
              <span className="action-icon">📊</span>
              <span>Analytics</span>
            </button>
            <button className="action-card">
              <span className="action-icon">💬</span>
              <span>Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const handleLogin = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    setUser(data.user);
  };

  const handleRegister = (data) => {
    handleLogin(data);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            user ? (
              <Navigate to="/dashboard" />
            ) : (
              <Register onRegister={handleRegister} />
            )
          }
        />
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
