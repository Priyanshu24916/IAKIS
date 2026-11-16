
import { Link } from "react-router-dom";
import "../App.css";
import "./Regions.css";
import logo from "./assets/iakis-logo.png";

import biharImage from "./assets/bihar.jpg";
import rajasthanImage from "./assets/rajasthan.jpg";
import keralaImage from "./assets/kerala.jpg";
import punjabImage from "./assets/punjab.jpg";
import maharashtraImage from "./assets/maharashtra.jpg";
import northEastImage from "./assets/north-east-india.jpg";

function Regions() {
  return (
    <div className="app regions-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="IAKIS Logo" />

          <p className="logo-fullform">
            INDIGENOUS AGRICULTURAL
            <br />
            KNOWLEDGE PORTAL
          </p>
        </div>
      </nav>

      {/* Page Header */}
      <section className="page-header">
        <p className="section-label">
          TRADITIONAL AGRICULTURAL KNOWLEDGE
        </p>

        <h1>Traditional Farming Across India</h1>

        <p>
          Explore the traditional farming knowledge followed
          in different regions of India. Learn about local crops,
          farming methods and how farmers use their experience
          to grow crops according to their surroundings.
        </p>
      </section>

      {/* Regions Section */}
      <section className="practice-section">

        <div className="practice-grid">

          {/* 1. Bihar */}
          <div className="practice-card">

            <img
              src={biharImage}
              alt="Agricultural fields in Bihar"
              className="practice-image"
            />

            <h2>Bihar</h2>

            <p>
              Bihar has fertile land and many rivers. Farmers
              grow different crops according to rainfall,
              soil and water availability. Rice, wheat and
              pulses are important crops in the state.
            </p>

            <span>Eastern India | Seasonal Farming</span>

            <Link
              to="/regions/bihar"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>

          {/* 2. Rajasthan */}
          <div className="practice-card">

            <img
              src={rajasthanImage}
              alt="Traditional farming in Rajasthan"
              className="practice-image"
            />

            <h2>Rajasthan</h2>

            <p>
              Rajasthan has many dry areas where rainfall
              is low. Farmers collect and save rainwater
              and grow crops like bajra and cluster bean
              that can grow with less water.
            </p>

            <span>Western India | Water Conservation</span>

            <Link
              to="/regions/rajasthan"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>

          {/* 3. Kerala */}
          <div className="practice-card">

            <img
              src={keralaImage}
              alt="Green agricultural fields in Kerala"
              className="practice-image"
            />

            <h2>Kerala</h2>

            <p>
              Kerala receives good rainfall and has different
              types of farmland. Farmers grow rice, coconut,
              spices and other crops according to local
              soil and water conditions.
            </p>

            <span>Southern India | Crop Diversity</span>

            <Link
              to="/regions/kerala"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>

          {/* 4. Punjab */}
          <div className="practice-card">

            <img
              src={punjabImage}
              alt="Wheat fields in Punjab"
              className="practice-image"
            />

            <h2>Punjab</h2>

            <p>
              Punjab has fertile plains and a long history
              of farming. Farmers grow wheat and rice and
              plan their farming activities according to
              seasons and water availability.
            </p>

            <span>Northern India | Food Grain Farming</span>

            <Link
              to="/regions/punjab"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>

          {/* 5. Maharashtra */}
          <div className="practice-card">

            <img
              src={maharashtraImage}
              alt="Farming fields in Maharashtra"
              className="practice-image"
            />

            <h2>Maharashtra</h2>

            <p>
              Maharashtra has different soil types and
              rainfall patterns. Farmers grow crops like
              jowar, bajra and pulses according to local
              conditions and water availability.
            </p>

            <span>Western India | Dryland Farming</span>

            <Link
              to="/regions/maharashtra"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>

          {/* 6. North-East India */}
          <div className="practice-card">

            <img
              src={northEastImage}
              alt="Traditional farming in North-East India"
              className="practice-image"
            />

            <h2>North-East India</h2>

            <p>
              North-East India has hills, valleys, forests
              and good rainfall in many areas. Farmers use
              local methods like terrace farming, jhum
              cultivation and wet rice cultivation.
            </p>

            <span>North-Eastern India | Traditional Methods</span>

            <Link
              to="/regions/north-east-india"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>

        </div>

      </section>

      {/* Back Button */}
      <div className="back-home">
        <Link to="/">← Back to Home</Link>
      </div>

      {/* Footer */}
      <footer className="regions-footer">
        <h3>Indigenous Agricultural Knowledge Portal</h3>

        <p>
          Digital documentation of India's traditional
          agricultural knowledge.
        </p>

        <p className="copyright">
          © 2026 IAKIS | Academic Project
        </p>
      </footer>

    </div>
  );
}

export default Regions;
