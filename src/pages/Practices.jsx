
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
import "./Practices.css";

import organicImage from "./assets/organic--farming.jpg";
import waterImage from "./assets/water-management.jpg";
import mixedImage from "./assets/mixed-cropping.jpg";
import pestImage from "./assets/natural-pest.jpg";
import localImage from "./assets/local-farming.jpg";
import seedImage from "./assets/seed-preservation.jpg";

function Practices() {
  return (
    <div className="app practice-page">

      {/* Navigation Bar */}
      <Navbar />

      {/* Page Header */}
      <section className="page-header">
        <p className="section-label">
          TRADITIONAL AGRICULTURAL PRACTICES
        </p>

        <h1>Traditional Farming Practices</h1>

        <p>
          Explore the traditional farming methods followed by
          farmers across India. Learn how these practices help
          grow crops, save water, protect plants and preserve
          valuable agricultural knowledge.
        </p>
      </section>

      {/* Practices Section */}
      <section className="practice-section">

        <div className="practice-grid">

          {/* 1. Organic Farming */}
          <div className="practice-card">

            <img
              src={organicImage}
              alt="Organic Farming"
              className="practice-image"
            />

            <h2>Organic Farming</h2>

            <p>
              Organic farming is a way of growing crops using
              natural materials like cow dung, compost and dry
              leaves. These materials help make the soil healthy
              and support plant growth.
            </p>

            <span>Natural Soil Management</span>

            <Link
              to="/practices/organic-farming"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>

          {/* 2. Traditional Water Management */}
          <div className="practice-card">

            <img
              src={waterImage}
              alt="Traditional Water Management"
              className="practice-image"
            />

            <h2>Traditional Water Management</h2>

            <p>
              Traditional water management means collecting and
              saving water for farming. Farmers use ponds, wells,
              tanks and traditional canals to store and supply
              water to their fields.
            </p>

            <span>Water Conservation</span>

            <Link
              to="/practices/water-management"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>

          {/* 3. Mixed Cropping */}
          <div className="practice-card">

            <img
              src={mixedImage}
              alt="Mixed Cropping"
              className="practice-image"
            />

            <h2>Mixed Cropping</h2>

            <p>
              Mixed cropping is a method of growing two or more
              crops together in the same field. It helps farmers
              grow different crops and make better use of their
              farmland.
            </p>

            <span>Crop Diversity</span>

            <Link
              to="/practices/mixed-cropping"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>

          {/* 4. Natural Pest Management */}
          <div className="practice-card">

            <img
              src={pestImage}
              alt="Natural Pest Management"
              className="practice-image"
            />

            <h2>Natural Pest Management</h2>

            <p>
              This method uses natural ways to protect crops
              from harmful insects and pests. Farmers may use
              neem, useful insects and other plant-based methods
              to protect their crops.
            </p>

            <span>Traditional Knowledge</span>

            <Link
              to="/practices/natural-pest-management"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>

          {/* 5. Local Farming Methods */}
          <div className="practice-card">

            <img
              src={localImage}
              alt="Local Farming Methods"
              className="practice-image"
            />

            <h2>Local Farming Methods</h2>

            <p>
              Local farming methods are practices followed by
              farmers according to their area's soil, climate
              and water supply. These methods are based on local
              experience and knowledge.
            </p>

            <span>Regional Practices</span>

            <Link
            to="/practices/local-farming-methods"
              className="learn-more"
            >
              Learn More →
            </Link>

          </div>

          {/* 6. Seed Preservation */}
          <div className="practice-card">

            <img
              src={seedImage}
              alt="Seed Preservation"
              className="practice-image"
            />

            <h2>Seed Preservation</h2>

            <p>
              Seed preservation means selecting and storing good
              seeds for future farming. Farmers save seeds from
              healthy crops so they can use or exchange them in
              the next season.
            </p>

            <span>Seed Knowledge</span>

            <Link
              to="/practices/seed-preservation"
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
     <footer className="practices-footer">
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

export default Practices;
