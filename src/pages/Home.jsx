import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import {
  FiArrowRight,
  FiArrowUp,
  FiCheckCircle,
  FiCompass,
  FiDroplet,
  FiSun,
  FiLayers,
  FiAward,
} from "react-icons/fi";

import "../App.css";
import "./Home.css";

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
import logo from "./assets/iakis-logo.png";

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const heroStatsRef = useRef(null);

  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // GSAP subtle floating effect on stats cards
  useEffect(() => {
    if (heroStatsRef.current) {
      const cards = heroStatsRef.current.children;
      gsap.fromTo(
        cards,
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          delay: 0.4,
        }
      );
    }

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const knowledgeAreas = [
    {
      title: "Traditional Farming Practices",
      description:
        "Learn how farmers grow crops, care for soil and use time-tested traditional farming methods.",
      image: traditionalPractices,
      tag: "FARMING METHODS",
      link: "/practices",
      button: "Explore Practices",
      icon: FiCompass,
    },
    {
      title: "Indigenous Crops",
      description:
        "Discover traditional crops and unique local varieties preserved across different parts of India.",
      image: indigenousCrops,
      tag: "CROP DIVERSITY",
      link: "/crops",
      button: "Discover Crops",
      icon: FiSun,
    },
    {
      title: "Regional Knowledge",
      description:
        "Explore distinct agro-ecological traditions and agricultural knowledge from across India.",
      image: regionalFarming,
      tag: "INDIAN HERITAGE",
      link: "/regions",
      button: "Explore Regions",
      icon: FiLayers,
    },
    {
      title: "Organic Farming",
      description:
        "Learn about bio-composting, zero-budget natural farming methods and caring for living soil.",
      image: organicFarming,
      tag: "SUSTAINABILITY",
      link: "/practices/organic-farming",
      button: "Learn More",
      icon: FiDroplet,
    },
  ];

  const heritageAreas = [
    {
      region: "Bihar",
      title: "Agricultural Heritage",
      description:
        "Fertile Gangetic plains, rich heritage of indigenous paddy, pulses and time-honored farming systems.",
      image: biharFarming,
      link: "/regions/bihar",
    },
    {
      region: "Punjab",
      title: "Fields and Crops",
      description:
        "The breadbasket of India with legendary crop rotation, vibrant harvesting festivals and rich soil wisdom.",
      image: punjabFarming,
      link: "/regions/punjab",
    },
    {
      region: "Rajasthan",
      title: "Farming in Dry Regions",
      description:
        "Ingenious water-harvesting, drought-hardy millets (Bajra, Jowar) and resilient desert agricultural lore.",
      image: rajasthanFarming,
      link: "/regions/rajasthan",
    },
  ];

  const sustainabilityTopics = [
    {
      title: "Healthy Soil",
      description:
        "Traditional organic composting, Jeevamrutha and microbial enrichment to maintain natural fertility.",
      image: soilConservation,
      alt: "Healthy soil and plant conservation",
    },
    {
      title: "Water Conservation",
      description:
        "Indigenous water structures: Kunds, Baolis, Johads and step-wells for optimal rainwater harvesting.",
      image: waterConservation,
      alt: "Water conservation in agriculture",
    },
    {
      title: "Indigenous Seeds",
      description:
        "Heritage seed sovereignty, seed banks (Beej Swaraj) and heirloom varieties resistant to pests.",
      image: indigenousSeeds,
      alt: "Traditional seeds held by a farmer",
    },
    {
      title: "Biodiversity",
      description:
        "Poly-culture, companion planting and agro-forestry fostering natural ecological balance.",
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

  const heroStats = [
    { num: "100+", label: "Heritage Seeds & Crops" },
    { num: "6+", label: "Agricultural Regions" },
    { num: "100%", label: "Sustainable Practices" },
    { num: "5000+", label: "Years of Indian Wisdom" },
  ];

  return (
    <div className="app">
      {/* Top Scroll Indicator */}
      <motion.div className="iakis-scroll-progress" style={{ scaleX }} />

      {/* Floating Back-To-Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            className="iakis-back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Back to Top"
            aria-label="Back to Top"
          >
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* REUSABLE PROFESSIONAL NAVBAR */}
      <Navbar />

      {/* HERO SECTION WITH FRAMER MOTION & GSAP */}
      <section
        className="iakis-hero"
        style={{ backgroundImage: `url("${heroFarm}")` }}
      >
        <div className="iakis-hero-overlay"></div>

        <motion.div
          className="iakis-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Eyebrow badge */}
          <motion.div className="iakis-eyebrow" variants={fadeInUp}>
            <span className="iakis-eyebrow-dot"></span>
            <span>INDIA'S AGRICULTURAL HERITAGE</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeInUp}>
            Preserving Tradition.
            <br />
            Inspiring the Future.
          </motion.h1>

          {/* Lead Paragraph */}
          <motion.p variants={fadeInUp}>
            Discover India's traditional farming methods, heirloom crops, and
            sustainable ecological wisdom passed down through generations.
            Explore the sacred harmony between farmer, soil, and nature.
          </motion.p>

          {/* Call to action buttons */}
          <motion.div className="iakis-hero-actions" variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/practices" className="iakis-btn iakis-btn-gold">
                <span>Explore Farming Practices</span>
                <FiArrowRight />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/crops" className="iakis-btn iakis-btn-outline">
                <span>Discover Indigenous Crops</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Stats Ribbon */}
          <div className="iakis-hero-stats" ref={heroStatsRef}>
            {heroStats.map((stat) => (
              <div className="iakis-stat-item" key={stat.label}>
                <div className="iakis-stat-num">{stat.num}</div>
                <div className="iakis-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ABOUT IAKIS */}
      <section className="iakis-about">
        <motion.div
          className="iakis-about-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={aboutFarming}
            alt="Agricultural fields and traditional farming"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="iakis-about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="iakis-section-label">ABOUT OUR PORTAL</p>

          <h2>
            Connecting India's
            <br />
            Agricultural Past
            <br />
            with Its Future
          </h2>

          <p>
            India possesses an unbroken lineage of agro-ecological mastery. For
            millennia, Indian cultivators understood microbial soil health,
            celestial planting cycles, seed conservation, and integrated pest
            control without chemical interference.
          </p>

          <p>
            The <strong>Indigenous Agricultural Knowledge Portal (IAKIS)</strong>{" "}
            is a dedicated academic initiative designed to systematically
            archive, illuminate, and celebrate this traditional wisdom for modern
            researchers, students, and practitioners.
          </p>

          {/* Feature Badges */}
          <div className="iakis-about-badges">
            <span className="about-badge-item">
              <FiCheckCircle className="about-badge-icon" /> Indigenous Lore
            </span>
            <span className="about-badge-item">
              <FiCheckCircle className="about-badge-icon" /> Academic Documentation
            </span>
            <span className="about-badge-item">
              <FiCheckCircle className="about-badge-icon" /> Sustainable Future
            </span>
          </div>

          <Link to="/about" className="iakis-text-link">
            <span>Discover Our Portal Objectives</span>
            <FiArrowRight />
          </Link>
        </motion.div>
      </section>

      {/* KNOWLEDGE CARDS GRID */}
      <section className="iakis-explore">
        <motion.div
          className="iakis-section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="iakis-section-label">EXPLORE OUR KNOWLEDGE BASE</p>
          <h2>Discover India's Agricultural Wisdom</h2>
          <p>
            Explore time-tested methods, indigenous biodiversity, and
            agro-climatic zones meticulously documented across our portal.
          </p>
        </motion.div>

        <motion.div
          className="iakis-knowledge-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {knowledgeAreas.map((item, index) => (
            <motion.article
              className="iakis-knowledge-card"
              key={item.title}
              variants={fadeInUp}
              initial="rest"
              whileHover="hover"
            >
              <div className="iakis-card-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="iakis-card-number">0{index + 1}</span>
              </div>

              <div className="iakis-card-content">
                <p className="iakis-card-tag">{item.tag}</p>
                <h3>{item.title}</h3>
                <p className="iakis-card-description">{item.description}</p>

                <Link to={item.link} className="iakis-card-link">
                  <span>{item.button}</span>
                  <FiArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* REGIONAL HERITAGE */}
      <section className="iakis-heritage">
        <motion.div
          className="iakis-section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="iakis-section-label">DIVERSITY ACROSS INDIA</p>
          <h2>One Nation. Many Farming Traditions.</h2>
          <p>
            From the snow-fed foothills of the Himalayas to the coastal deltas,
            India's agricultural legacy adapts beautifully to every terrain.
          </p>
        </motion.div>

        <div className="iakis-heritage-grid">
          {heritageAreas.map((item, idx) => (
            <motion.article
              className="iakis-heritage-card"
              key={item.region}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
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
                <Link to={item.link}>
                  <span>Explore {item.region}</span>
                  <FiArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="iakis-heritage-note">
          <span>✦</span>
          <span>
            Every region has its own agricultural story worth preserving.
          </span>
        </div>
      </section>

      {/* SUSTAINABILITY - 4 PILLARS */}
      <section className="iakis-sustainability">
        <motion.div
          className="iakis-sustainability-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="iakis-section-label">TRADITION MEETS SUSTAINABILITY</p>
          <h2>
            Learning from Nature.
            <br />
            Caring for Tomorrow.
          </h2>

          <p>
            Traditional agricultural wisdom treats the farm as a living
            ecosystem. By minimizing synthetic inputs, nurturing soil biology, and
            guarding native seeds, ancient farmers built sustainable cycles that
            endured for millennia.
          </p>

          <Link to="/practices" className="iakis-btn iakis-btn-gold">
            <span>Explore Farming Practices</span>
            <FiArrowRight />
          </Link>
        </motion.div>

        <div className="iakis-sustainability-list">
          {sustainabilityTopics.map((item, idx) => (
            <motion.article
              className="iakis-sustainability-item"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
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
            </motion.article>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="iakis-gallery">
        <motion.div
          className="iakis-section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="iakis-section-label">A GLIMPSE OF INDIAN AGRICULTURE</p>
          <h2>The Beauty of Our Agricultural Heritage</h2>
          <p>
            Vibrant fields, harvest celebrations, and the timeless connection
            between rural communities and Mother Earth.
          </p>
        </motion.div>

        <div className="iakis-gallery-grid">
          {galleryImages.map((item, idx) => (
            <motion.div
              className="iakis-gallery-item"
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
              <span>{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <motion.section
        className="iakis-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <p>EXPLORE · LEARN · PRESERVE</p>
          <h2>Every Tradition Tells a Story.</h2>
          <span>
            Discover the profound knowledge that connects India's sacred land,
            indigenous seeds, and farming heritage.
          </span>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/practices" className="iakis-btn iakis-btn-dark">
            <span>Start Exploring Now</span>
            <FiArrowRight />
          </Link>
        </motion.div>
      </motion.section>

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
              An academic project dedicated to documenting, archiving, and
              sharing India's venerable agricultural heritage with future
              generations.
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
            <h3>Our Pillars</h3>
            <span>🌾 Traditional Farming</span>
            <span>🌱 Heirloom Crop Varieties</span>
            <span>📍 Regional Heritage</span>
            <span>💧 Natural Sustainability</span>
          </div>
        </div>

        <div className="iakis-footer-bottom">
          <p>© 2026 IAKIS | Academic Research Portal</p>
          <p>Preserving Knowledge. Celebrating Heritage.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
