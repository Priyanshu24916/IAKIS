import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../App.css";

// Existing navbar images
import logo from "./assets/iakis-logo.png";
import farmer from "./assets/farmer.jpeg";
import farming from "./assets/farming.jpeg";

// Home page images
import heroFarm from "./assets/hero-farm.jpg";
import aboutFarming from "./assets/about-farming.jpg";

import traditionalPractices from "./assets/traditional-practices.jpg";
import indigenousCrops from "./assets/indigenous-crops.jpg";
import regionalFarming from "./assets/regional-farming.jpg";
import organicFarming from "./assets/organic-farming.jpg";

import biharFarming from "./assets/bihar-farming.jpg";
import punjabFarming from "./assets/punjab-farming.jpg";
import rajasthanFarming from "./assets/rajasthan-farming.jpg";

import soilConservation from "./assets/soil-conservation.jpg";
import waterConservation from "./assets/water-conservation.jpg";

import indigenousSeeds from "./assets/indigenous-seeds.jpg";
import biodiversity from "./assets/biodiversity.jpg";

import galleryFields from "./assets/gallery-fields.jpg";
import galleryHarvesting from "./assets/gallery-harvesting.jpg";
import galleryLandscape from "./assets/gallery-landscape.jpg";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMenuOpen(false);
      alert("You have logged out successfully!");
    } catch (error) {
      alert("Logout failed. Please try again.");
    }
  };

useEffect(() => {
  const handleOutsideClick = (event) => {
    if (
      navRef.current &&
      !event.target.closest(".menu-button") &&
      !event.target.closest(".menu-dropdown")
    ) {
      setMenuOpen(false);
    }
  };

  document.addEventListener("click", handleOutsideClick);

  return () => {
    document.removeEventListener("click", handleOutsideClick);
  };
}, []);

  const knowledgeAreas = [
    {
      title: "Traditional Farming Practices",
      description:
        "Learn how farmers grow crops, care for soil and use traditional farming methods.",
      image: traditionalPractices,
      tag: "FARMING METHODS",
      link: "/practices",
      button: "Explore Practices",
    },
    {
      title: "Indigenous Crops",
      description:
        "Discover traditional crops and local varieties found in different parts of India.",
      image: indigenousCrops,
      tag: "CROP DIVERSITY",
      link: "/crops",
      button: "Discover Crops",
    },
    {
      title: "Regional Knowledge",
      description:
        "Explore farming traditions and agricultural knowledge from across India.",
      image: regionalFarming,
      tag: "INDIAN HERITAGE",
      link: "/regions",
      button: "Explore Regions",
    },
    {
      title: "Organic Farming",
      description:
        "Learn about composting, natural farming methods and caring for the soil.",
      image: organicFarming,
      tag: "SUSTAINABILITY",
      link: "/practices/organic-farming",
      button: "Learn More",
    },
  ];

  const heritageAreas = [
    {
      region: "Bihar",
      title: "Agricultural Heritage",
      description:
        "Explore farming traditions and agricultural knowledge associated with Bihar.",
      image: biharFarming,
    },
    {
      region: "Punjab",
      title: "Fields and Crops",
      description:
        "Discover farming traditions and crop cultivation in Punjab.",
      image: punjabFarming,
    },
    {
      region: "Rajasthan",
      title: "Farming in Dry Regions",
      description:
        "Learn about farming practices in areas with limited water.",
      image: rajasthanFarming,
    },
  ];

  const sustainabilityTopics = [
    {
      title: "Healthy Soil",
      description:
        "Learn traditional ways to care for soil and maintain its quality.",
      image: soilConservation,
      alt: "Healthy soil and plant conservation",
    },
    {
      title: "Water Conservation",
      description:
        "Explore ways to collect, save and use water in farming.",
      image: waterConservation,
      alt: "Water conservation in agriculture",
    },
    {
  title: "Indigenous Seeds",
  description:
    "Learn about traditional crop varieties and their importance to farmers.",
  image: indigenousSeeds,
  alt: "Traditional seeds held by a farmer",
},
    {
  title: "Biodiversity",
  description:
    "Understand the value of different crops, plants and local knowledge.",
  image: biodiversity,
  alt: "Biodiverse agricultural field with flowering plants and pollinators",
},
  ];

  const galleryImages = [
    {
      image: galleryFields,
      alt: "Agricultural fields",
      title: "Fields of India",
    },
    {
      image: galleryHarvesting,
      alt: "Crop harvesting",
      title: "Harvesting Traditions",
    },
    {
      image: galleryLandscape,
      alt: "Agricultural landscape",
      title: "Nature and Farming",
    },
  ];

  return (
    <div className="app">

      {/* NAVIGATION BAR - ORIGINAL DESIGN */}

    <nav className="navbar" ref={navRef}>

  {/* LEFT: MENU + ORIGINAL LOGO */}
  <div className="navbar-left">

    <button
      className="menu-button"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-expanded={menuOpen}
    >
      ☰
    </button>

    <div className="logo">
      <img src={logo} alt="IAKIS Logo" />

      <p className="logo-fullform">
        INDIGENOUS AGRICULTURAL
        <br />
        KNOWLEDGE PORTAL
      </p>
    </div>

  </div>

  {/* CENTER: WELCOME SECTION */}
  <div className="nav-welcome">

    <div className="agri-images">
      <img className="farmer-img" src={farmer} alt="Indian Farmer" />
    </div>

    <div className="welcome-text">
      <div className="welcome-title">
        Welcome to India's Agricultural Heritage
      </div>

      <div className="welcome-hindi">
        खेती की परंपरा, भारत की विरासत
      </div>

      <div className="welcome-slogan">
        Jai Jawan, Jai Kisan
      </div>
    </div>

    <div className="agri-images">
      <img className="farming-img" src={farming} alt="Traditional Farming" />
    </div>

  </div>

  {/* RIGHT: LOGIN / SIGN UP */}
  <div className="navbar-actions">

    {user ? (
      <button
        className="auth-button logout-button"
        onClick={handleLogout}
      >
        Logout
      </button>
    ) : (
      <>
        <Link to="/login" className="auth-button login-button">
          Login
        </Link>

        <Link to="/register" className="auth-button signup-button">
          Sign Up
        </Link>
      </>
    )}

  </div>

  {/* NAVIGATION DROPDOWN */}
  {menuOpen && (
    <div className="menu-dropdown">

      <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
      <Link to="/practices" onClick={() => setMenuOpen(false)}>Practices</Link>
      <Link to="/crops" onClick={() => setMenuOpen(false)}>Crops</Link>
      <Link to="/regions" onClick={() => setMenuOpen(false)}>Regions</Link>
      <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

    </div>
  )}

</nav>

      {/* HERO */}

      <section
        className="iakis-hero"
        style={{ backgroundImage: `url("${heroFarm}")` }}
      >
        <div className="iakis-hero-overlay"></div>

        <div className="iakis-hero-content">
          <div className="iakis-eyebrow">
            INDIA'S AGRICULTURAL HERITAGE
          </div>

          <h1>
            Preserving Tradition.
            <br />
            Inspiring the Future.
          </h1>

          <p>
            Discover India's traditional farming methods, local crops
            and agricultural knowledge passed down through generations.
            Explore the connection between farming, nature and heritage.
          </p>

          <div className="iakis-hero-actions">
            <Link
              to="/practices"
              className="iakis-btn iakis-btn-gold"
            >
              Explore Farming Practices <span>→</span>
            </Link>

            <Link
              to="/crops"
              className="iakis-btn iakis-btn-outline"
            >
              Discover Indigenous Crops
            </Link>
          </div>

          <div className="iakis-hero-note">
            <span className="iakis-note-line"></span>
            EXPLORE · LEARN · PRESERVE
          </div>
        </div>

        <div className="iakis-hero-caption">
          AGRICULTURE · HERITAGE · SUSTAINABILITY
        </div>
      </section>

      {/* ABOUT IAKIS */}

      <section className="iakis-about">
        <div className="iakis-about-image">
          <img
            src={aboutFarming}
            alt="Agricultural fields and farming"
            loading="lazy"
          />
        </div>

        <div className="iakis-about-content">
          <p className="iakis-section-label">ABOUT OUR PORTAL</p>

          <h2>
            Connecting India's
            <br />
            Agricultural Past
            <br />
            with Its Future
          </h2>

          <p>
            India has a rich history of traditional farming.
            Farmers have developed useful ways to grow crops,
            care for soil and manage water over many generations.
          </p>

          <p>
            The Indigenous Agricultural Knowledge Portal (IAKIS)
            is an academic project that documents selected
            traditional farming practices and makes this knowledge
            easier for students and visitors to explore.
          </p>

          <Link to="/about" className="iakis-text-link">
            Discover Our Portal <span>→</span>
          </Link>
        </div>
      </section>

      {/* KNOWLEDGE CARDS */}

      <section className="iakis-explore">
        <div className="iakis-section-heading">
          <p className="iakis-section-label">
            EXPLORE OUR KNOWLEDGE BASE
          </p>

          <h2>Discover India's Agricultural Wisdom</h2>

          <p>
            Explore farming methods, traditional crops and regional
            knowledge through our digital portal.
          </p>
        </div>

        <div className="iakis-knowledge-grid">
          {knowledgeAreas.map((item, index) => (
            <article
              className="iakis-knowledge-card"
              key={item.title}
            >
              <div className="iakis-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="iakis-card-number">
                  0{index + 1}
                </span>
              </div>

              <div className="iakis-card-content">
                <p className="iakis-card-tag">{item.tag}</p>

                <h3>{item.title}</h3>

                <p className="iakis-card-description">
                  {item.description}
                </p>

                <Link
                  to={item.link}
                  className="iakis-card-link"
                >
                  {item.button} <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REGIONAL HERITAGE */}

      <section className="iakis-heritage">
        <div className="iakis-section-heading">
          <p className="iakis-section-label">
            DIVERSITY ACROSS INDIA
          </p>

          <h2>One Nation. Many Farming Traditions.</h2>

          <p>
            India's farming knowledge is shaped by different
            landscapes, local resources and generations of experience.
          </p>
        </div>

        <div className="iakis-heritage-grid">
          {heritageAreas.map((item) => (
            <article
              className="iakis-heritage-card"
              key={item.region}
            >
              <img
                src={item.image}
                alt={`${item.region} agricultural landscape`}
                loading="lazy"
              />

              <div className="iakis-heritage-shade"></div>

              <div className="iakis-heritage-content">
                <span>{item.region.toUpperCase()}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link to="/regions">Explore Region →</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="iakis-heritage-note">
          <span>✦</span>
          Every region has its own agricultural story worth preserving.
        </div>
      </section>

      {/* SUSTAINABILITY - ALL FOUR TOPICS HAVE IMAGES */}

      <section className="iakis-sustainability">
        <div className="iakis-sustainability-content">
          <p className="iakis-section-label">
            TRADITION MEETS SUSTAINABILITY
          </p>

          <h2>
            Learning from Nature.
            <br />
            Caring for Tomorrow.
          </h2>

          <p>
            Traditional agricultural knowledge helps us understand
            local resources, crop diversity and ways of caring for
            the land. Explore these topics through our educational portal.
          </p>

          <Link
            to="/practices"
            className="iakis-btn iakis-btn-gold"
          >
            Explore Farming Practices <span>→</span>
          </Link>
        </div>

        <div className="iakis-sustainability-list">
          {sustainabilityTopics.map((item) => (
            <article
              className="iakis-sustainability-item"
              key={item.title}
            >
              <img
                className="iakis-sustainability-thumb"
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY */}

      <section className="iakis-gallery">
        <div className="iakis-section-heading">
          <p className="iakis-section-label">
            A GLIMPSE OF INDIAN AGRICULTURE
          </p>

          <h2>The Beauty of Our Agricultural Heritage</h2>

          <p>
            Explore the fields, crops and landscapes connected
            with India's farming traditions.
          </p>
        </div>

        <div className="iakis-gallery-grid">
          {galleryImages.map((item) => (
            <div
              className="iakis-gallery-item"
              key={item.title}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />

              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}

      <section className="iakis-cta">
        <div>
          <p>EXPLORE · LEARN · PRESERVE</p>

          <h2>Every Tradition Tells a Story.</h2>

          <span>
            Discover the knowledge that connects India's
            land, people and agricultural heritage.
          </span>
        </div>

        <Link
          to="/practices"
          className="iakis-btn iakis-btn-dark"
        >
          Start Exploring <span>→</span>
        </Link>
      </section>

      {/* FOOTER */}

      <footer className="iakis-footer">
        <div className="iakis-footer-main">
          <div className="iakis-footer-brand">
            <img src={logo} alt="IAKIS Logo" />

           <h3 className="footer-fullform">
  Indigenous Agricultural
  <br />
  Knowledge Portal
</h3>
            <p>
              An academic project that documents and explores
              India's traditional agricultural knowledge.
            </p>
          </div>

          <div className="iakis-footer-links">
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/practices">Traditional Practices</Link>
            <Link to="/crops">Indigenous Crops</Link>
            <Link to="/regions">Regional Knowledge</Link>
            <Link to="/about">About IAKIS</Link>
          </div>

          <div className="iakis-footer-links">
            <h3>Our Focus</h3>

            <span>Traditional Farming</span>
            <span>Indigenous Crops</span>
            <span>Regional Heritage</span>
            <span>Sustainable Agriculture</span>
          </div>
        </div>

        <div className="iakis-footer-bottom">
          <p>© 2026 IAKIS | Academic Project</p>

          <p>Preserving Knowledge. Celebrating Heritage.</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;

