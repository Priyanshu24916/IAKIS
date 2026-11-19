
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import "./Login.css";

// CAPTCHA Generator
const generateCaptchaCode = () => {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let newCaptcha = "";

  for (let i = 0; i < 5; i++) {
    newCaptcha += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return newCaptcha;
};

function Login() {
  const navigate = useNavigate();

  const [captcha, setCaptcha] = useState(generateCaptchaCode);
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Refresh CAPTCHA
  const generateCaptcha = () => {
    setCaptcha(generateCaptchaCode());
    setCaptchaInput("");
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (captchaInput.trim().toUpperCase() !== captcha) {
      setError("Wrong CAPTCHA. Please enter the correct CAPTCHA.");
      return;
    }

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      sessionStorage.setItem("iakisLoggedIn", "true");

      alert("Login successful!");
      navigate("/");
    } catch (error) {
      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setError("Invalid email or password.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to explore India's agricultural heritage</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="input-group captcha-section">
            <label>Enter CAPTCHA</label>

            <div className="captcha-row">
              <div className="captcha-code">{captcha}</div>

              <button
                type="button"
                className="refresh-captcha"
                onClick={generateCaptcha}
                title="Refresh CAPTCHA"
              >
                ↻
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter CAPTCHA"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="captcha-error">{error}</p>
          )}

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <div className="register-link">
          New user? <Link to="/register">Create an account</Link>
        </div>

        <Link to="/" className="back-login">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Login;
