import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import {
  FiMenu,
  FiX,
  FiUser,
  FiLogOut,
  FiLogIn,
  FiChevronRight,
  FiHome,
  FiCompass,
  FiBookOpen,
  FiMapPin,
  FiInfo,
} from "react-icons/fi";
import "./Navbar.css";

import logo from "../pages/assets/iakis-logo.png";
import farmer from "../pages/assets/farmer.jpeg";
import farming from "../pages/assets/farming.jpeg";

const navLinks = [
  { name: "Home", path: "/", icon: FiHome },
  { name: "Practices", path: "/practices", icon: FiCompass },
  { name: "Crops", path: "/crops", icon: FiBookOpen },
  { name: "Regions", path: "/regions", icon: FiMapPin },
  { name: "About", path: "/about", icon: FiInfo },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  // Listen to Firebase auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Listen to scroll for sticky glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMenuOpen(false);
      alert("You have logged out successfully!");
    } catch {
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <>
      <header
        className={`iakis-navbar-wrapper ${
          scrolled ? "iakis-navbar-scrolled" : ""
        }`}
      >
        {/* TOP HERITAGE STRIP */}
        <div className="iakis-top-strip">
          <div className="top-strip-inner">
            <div className="strip-left">
              <span className="strip-badge">भारत सरकार / Academic Initiative</span>
              <span className="strip-text">
                Indigenous Agricultural Knowledge Portal
              </span>
            </div>
            <div className="strip-center">
              <span className="strip-hindi">
                🌾 खेती की परंपरा, भारत की विरासत • जय जवान, जय किसान 🇮🇳
              </span>
            </div>
            <div className="strip-right">
              {user ? (
                <span className="user-greeting">
                  <FiUser className="user-icon" /> {user.email?.split("@")[0]}
                </span>
              ) : (
                <Link to="/login" className="strip-auth-link">
                  Welcome to IAKIS
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <nav className="iakis-main-nav">
          <div className="nav-container">
            {/* LOGO & BRAND */}
            <Link to="/" className="nav-brand">
              <motion.div
                className="brand-logo-wrap"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <img src={logo} alt="IAKIS Logo" className="brand-logo" />
              </motion.div>
              <div className="brand-text">
                <span className="brand-title">IAKIS</span>
                <span className="brand-subtitle">
                  INDIGENOUS AGRICULTURAL KNOWLEDGE PORTAL
                </span>
              </div>
            </Link>

            {/* DESKTOP CULTURAL HIGHLIGHT PILL */}
            <div className="nav-cultural-pill">
              <div className="pill-avatars">
                <img
                  src={farmer}
                  alt="Indian Farmer"
                  className="pill-img farmer-circle"
                  title="Indian Farmer"
                />
                <img
                  src={farming}
                  alt="Traditional Agriculture"
                  className="pill-img farming-circle"
                  title="Traditional Farming"
                />
              </div>
              <div className="pill-content">
                <span className="pill-quote">खेती की परंपरा, भारत की विरासत</span>
                <span className="pill-slogan">Jai Jawan, Jai Kisan</span>
              </div>
            </div>

            {/* DESKTOP NAVIGATION LINKS */}
            <div className="nav-links-desktop">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path !== "/" &&
                    location.pathname.startsWith(link.path));
                const IconComponent = link.icon;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`nav-link-item ${isActive ? "active" : ""}`}
                  >
                    <IconComponent className="nav-link-icon" />
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="active-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* AUTH ACTIONS */}
            <div className="nav-actions">
              {user ? (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-auth-logout"
                  onClick={handleLogout}
                >
                  <FiLogOut className="btn-icon" />
                  <span>Logout</span>
                </motion.button>
              ) : (
                <div className="auth-btn-group">
                  <Link to="/login" className="btn-auth-login">
                    <FiLogIn className="btn-icon" />
                    <span>Login</span>
                  </Link>
                  <Link to="/register" className="btn-auth-signup">
                    <span>Sign Up</span>
                  </Link>
                </div>
              )}

              {/* MOBILE HAMBURGER BUTTON */}
              <button
                className="mobile-toggle-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE DRAWER */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mobile-drawer-inner">
                {/* Cultural Banner inside mobile */}
                <div className="mobile-cultural-banner">
                  <div className="mobile-avatars">
                    <img src={farmer} alt="Farmer" className="m-avatar" />
                    <img src={farming} alt="Farming" className="m-avatar" />
                  </div>
                  <div className="m-text">
                    <span className="m-title">खेती की परंपरा, भारत की विरासत</span>
                    <span className="m-sub">Jai Jawan, Jai Kisan</span>
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="mobile-links-list">
                  {navLinks.map((link) => {
                    const isActive =
                      location.pathname === link.path ||
                      (link.path !== "/" &&
                        location.pathname.startsWith(link.path));
                    const IconComponent = link.icon;

                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`mobile-link-item ${
                          isActive ? "active" : ""
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="m-link-left">
                          <IconComponent className="m-icon" />
                          <span>{link.name}</span>
                        </div>
                        <FiChevronRight className="m-arrow" />
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile Auth */}
                <div className="mobile-auth-box">
                  {user ? (
                    <button
                      className="m-btn-logout"
                      onClick={handleLogout}
                    >
                      <FiLogOut />
                      <span>Logout ({user.email?.split("@")[0]})</span>
                    </button>
                  ) : (
                    <div className="m-auth-grid">
                      <Link
                        to="/login"
                        className="m-btn-login"
                        onClick={() => setMenuOpen(false)}
                      >
                        <FiLogIn />
                        <span>Login</span>
                      </Link>
                      <Link
                        to="/register"
                        className="m-btn-signup"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>Sign Up</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
