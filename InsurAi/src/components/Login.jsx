import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const loginData = {
        userType,
        email,
        password,
        rememberMe,
      };

      console.log("Login Data:", loginData);

      // Spring Boot API integration
      // fetch('http://localhost:8080/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(loginData)
      // })
      // .then(response => response.json())
      // .then(data => {
      //   localStorage.setItem('token', data.token);
      //   // Navigate to dashboard based on userType
      // })
      // .catch(error => console.error('Login error:', error));

      alert("Login successful! Connect to Spring Boot backend.");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleForgotPassword = () => {
    console.log("Navigate to forgot password page");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>InsurAI</h1>
          <p>Sign in to your account</p>
        </div>

        <div className="user-type-section">
          <label className="form-label">User Type</label>
          <div className="user-type-buttons">
            <button
              type="button"
              onClick={() => setUserType("customer")}
              className={`user-type-btn ${
                userType === "customer" ? "active" : ""
              }`}
            >
              Customer
            </button>
            <button
              type="button"
              onClick={() => setUserType("agent")}
              className={`user-type-btn ${
                userType === "agent" ? "active" : ""
              }`}
            >
              Agent
            </button>
            <button
              type="button"
              onClick={() => setUserType("admin")}
              className={`user-type-btn ${
                userType === "admin" ? "active" : ""
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <div className="input-wrapper">
            <svg
              className="input-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-input ${errors.email ? "error" : ""}`}
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <div className="input-wrapper">
            <svg
              className="input-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect
                x="3"
                y="11"
                width="18"
                height="11"
                rx="2"
                ry="2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 11V7a5 5 0 0 1 10 0v4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-input ${errors.password ? "error" : ""}`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="1"
                    y1="1"
                    x2="23"
                    y2="23"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>

        <div className="form-options">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            onClick={handleForgotPassword}
            className="forgot-password"
          >
            Forgot password?
          </button>
        </div>

        <button onClick={handleLogin} className="login-btn">
          Sign In
        </button>

        <div className="register-section">
          <span>Don't have an account? </span>
          <button
            type="button"
            onClick={handleRegister}
            className="register-link"
          >
            Register
          </button>
        </div>
      </div>

      <p className="footer-text">© 2025 InsurAI. All rights reserved.</p>
    </div>
  );
};

export default Login;
